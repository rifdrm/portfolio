(function () {
  "use strict";

  var root = document.documentElement;
  var body = document.body;
  var base = body.getAttribute("data-base") || "";
  var state = { filter: "all" };

  function lang() {
    return root.lang === "id" ? "id" : "en";
  }

  function t(key, vars) {
    var dict = (window.I18N && (window.I18N[lang()] || window.I18N.en)) || {};
    var value = dict[key] != null ? dict[key] : (window.I18N.en[key] != null ? window.I18N.en[key] : key);
    if (vars) {
      Object.keys(vars).forEach(function (name) {
        value = value.replace("{" + name + "}", vars[name]);
      });
    }
    return value;
  }

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function asset(path) {
    return base + path;
  }

  function videoMarkup(src, poster, options) {
    var mp4 = src.replace(/\.webm$/, ".mp4");
    var attrs = options || "controls muted loop playsinline";
    var posterAttr = poster ? ' poster="' + esc(asset(poster)) + '"' : "";
    return (
      '<video ' + attrs + ' preload="metadata"' + posterAttr + ">" +
      '<source src="' + esc(asset(src)) + '" type="video/webm">' +
      '<source src="' + esc(asset(mp4)) + '" type="video/mp4">' +
      "Your browser does not support the video tag." +
      "</video>"
    );
  }

  function categoryLabel(category) {
    return t("filter." + category);
  }

  function applyStatic() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });

    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
    });

    var titleKey = body.getAttribute("data-title-key");
    if (titleKey) {
      document.title = t(titleKey);
    }

    var description = document.querySelector('meta[name="description"]');
    if (description && body.getAttribute("data-desc-key")) {
      description.setAttribute("content", t(body.getAttribute("data-desc-key")));
    }

    updateControls();
  }

  function updateControls() {
    var themeButton = document.getElementById("theme-toggle");
    if (themeButton) {
      var isDark = root.getAttribute("data-theme") === "dark";
      themeButton.setAttribute("aria-pressed", isDark ? "true" : "false");
      themeButton.textContent = isDark ? t("theme.toLight") : t("theme.toDark");
    }

    document.querySelectorAll("[data-lang-btn]").forEach(function (button) {
      var active = button.getAttribute("data-lang-btn") === lang();
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    var year = document.getElementById("year");
    if (year) {
      year.textContent = new Date().getFullYear();
    }
  }

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {}
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", theme === "dark" ? "#000000" : "#ffffff");
    }
    updateControls();
  }

  function setLang(next) {
    var value = next === "id" ? "id" : "en";
    root.lang = value;
    try {
      localStorage.setItem("lang", value);
    } catch (error) {}
    applyStatic();
    renderHome();
    renderProject();
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: value } }));
  }

  function filteredProjects() {
    if (!window.PROJECTS) return [];
    if (state.filter === "all") return window.PROJECTS;
    return window.PROJECTS.filter(function (project) {
      return project.categories.indexOf(state.filter) !== -1;
    });
  }

  function cardMarkup(project, index) {
    var poster = project.coverType === "video" ? (project.coverPoster || project.cover) : project.cover;
    var loading = index < 3 ? "eager" : "lazy";
    var categoryTags = project.categories
      .map(function (category) {
        return '<span class="tag">' + esc(categoryLabel(category)) + "</span>";
      })
      .join("");

    var wip =
      project.status === "wip"
        ? '<span class="wip-badge">' + esc(t("card.wip")) + "</span>"
        : "";

    return (
      '<a class="project-card" href="' + esc(asset("projects/" + project.slug + ".html")) + '">' +
        '<div class="card-media">' +
          '<img src="' + esc(asset(poster)) + '" alt="' + esc(project.title[lang()]) + '" loading="' + loading + '">' +
          wip +
        "</div>" +
        '<div class="card-body">' +
          '<div class="card-topline"><span class="card-number">' + esc(project.number) + "</span><span>" + esc(project.year) + "</span></div>" +
          '<h3 class="card-title">' + esc(project.title[lang()]) + "</h3>" +
          '<p class="card-summary">' + esc(project.summary[lang()]) + "</p>" +
          '<div class="card-tags">' + categoryTags + "</div>" +
          '<div class="card-footer"><span>' + esc(project.role[lang()]) + "</span><span>" + esc(t("card.view")) + "</span></div>" +
        "</div>" +
      "</a>"
    );
  }

  function renderHome() {
    var grid = document.getElementById("project-grid");
    if (!grid || !window.PROJECTS) return;

    var projects = filteredProjects();
    grid.innerHTML = projects.map(cardMarkup).join("");

    var count = document.getElementById("project-count");
    if (count) {
      count.textContent = t("projects.count", { n: projects.length });
    }
  }

  function bindFilters() {
    document.querySelectorAll("[data-filter]").forEach(function (button) {
      button.addEventListener("click", function () {
        state.filter = button.getAttribute("data-filter");
        document.querySelectorAll("[data-filter]").forEach(function (item) {
          item.setAttribute("aria-pressed", item === button ? "true" : "false");
        });
        renderHome();
      });
    });
  }

  function renderProject() {
    var host = document.getElementById("project-root");
    if (!host || !window.PROJECTS) return;

    var slug = body.getAttribute("data-project");
    var index = window.PROJECTS.findIndex(function (item) {
      return item.slug === slug;
    });

    if (index === -1) {
      host.innerHTML = '<p class="kicker">' + esc(t("404.title")) + "</p>";
      return;
    }

    var project = window.PROJECTS[index];
    var previous = window.PROJECTS[(index - 1 + window.PROJECTS.length) % window.PROJECTS.length];
    var next = window.PROJECTS[(index + 1) % window.PROJECTS.length];
    var projectTitle = project.title[lang()];

    document.title = projectTitle + " — Arif Darmawan";
    var description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", project.summary[lang()]);

    var cover =
      project.coverType === "video"
        ? videoMarkup(project.cover, project.coverPoster, "autoplay muted loop playsinline")
        : '<img src="' + esc(asset(project.cover)) + '" alt="' + esc(projectTitle) + '">';

    var statusText = project.status === "wip" ? t("status.wip") : t("status.completed");
    var statusClass = project.status === "wip" ? "status-chip--wip" : "status-chip--done";

    var overview = project.overview[lang()]
      .map(function (paragraph) {
        return "<p>" + esc(paragraph) + "</p>";
      })
      .join("");

    var build = project.build[lang()]
      .map(function (item) {
        return "<li>" + esc(item) + "</li>";
      })
      .join("");

    var role = project.roleDetail[lang()]
      .map(function (item) {
        return "<li>" + esc(item) + "</li>";
      })
      .join("");

    var outcome = project.outcome[lang()]
      .map(function (paragraph) {
        return "<p>" + esc(paragraph) + "</p>";
      })
      .join("");

    var stack = project.stack
      .map(function (item) {
        return '<span class="tag">' + esc(item) + "</span>";
      })
      .join("");

    var gallery = project.gallery
      .map(function (item) {
        var caption = esc(item.caption[lang()]);
        var media;
        if (item.type === "video") {
          media = videoMarkup(item.src, item.poster, "controls muted loop playsinline");
        } else {
          media =
            '<button class="gallery-trigger" type="button" data-lightbox-src="' + esc(asset(item.src)) + '" data-lightbox-caption="' + caption + '">' +
              '<img src="' + esc(asset(item.src)) + '" alt="' + caption + '" loading="lazy">' +
            "</button>";
        }
        return '<figure class="gallery-item">' + media + "<figcaption>" + caption + "</figcaption></figure>";
      })
      .join("");

    var galleryClass = project.gallery.length === 1 ? "gallery-grid gallery-grid--single" : "gallery-grid";
    var category = project.categories.map(categoryLabel).join(" / ");

    host.innerHTML =
      '<section class="project-hero">' +
        '<div class="wrap">' +
          '<nav class="breadcrumb" aria-label="Breadcrumb">' +
            '<a href="' + esc(asset("index.html")) + '">' + esc(t("project.home")) + "</a>" +
            "<span>/</span>" +
            '<a href="' + esc(asset("index.html#projects")) + '">' + esc(t("project.projects")) + "</a>" +
            "<span>/</span><span>" + esc(projectTitle) + "</span>" +
          "</nav>" +
          '<p class="kicker">Project ' + esc(project.number) + " / " + esc(project.year) + "</p>" +
          '<h1 class="project-title">' + esc(projectTitle) + "</h1>" +
          '<p class="project-summary">' + esc(project.summary[lang()]) + "</p>" +
          '<dl class="project-facts">' +
            "<div class=\"fact\"><dt>" + esc(t("project.category")) + "</dt><dd>" + esc(category) + "</dd></div>" +
            "<div class=\"fact\"><dt>" + esc(t("project.year")) + "</dt><dd>" + esc(project.year) + "</dd></div>" +
            "<div class=\"fact\"><dt>" + esc(t("project.roleLabel")) + "</dt><dd>" + esc(project.role[lang()]) + "</dd></div>" +
            "<div class=\"fact\"><dt>" + esc(t("project.status")) + "</dt><dd><span class=\"status-chip " + statusClass + "\">" + esc(statusText) + "</span></dd></div>" +
          "</dl>" +
          '<div class="project-cover">' + cover + "</div>" +
        "</div>" +
      "</section>" +
      '<div class="wrap">' +
        '<section class="content-section">' +
          '<h2 class="content-label">' + esc(t("project.overview")) + "</h2>" +
          '<div class="content-main">' + overview + "</div>" +
        "</section>" +
        '<section class="content-section">' +
          '<h2 class="content-label">' + esc(t("project.build")) + "</h2>" +
          '<div class="content-main"><ul>' + build + "</ul></div>" +
        "</section>" +
        '<section class="content-section">' +
          '<h2 class="content-label">' + esc(t("project.role")) + "</h2>" +
          '<div class="content-main"><ul>' + role + "</ul></div>" +
        "</section>" +
        '<section class="content-section">' +
          '<h2 class="content-label">' + esc(t("project.stack")) + "</h2>" +
          '<div class="content-main"><div class="stack-list">' + stack + "</div></div>" +
        "</section>" +
        '<section class="content-section">' +
          '<h2 class="content-label">' + esc(t("project.gallery")) + "</h2>" +
          '<div class="content-main"><div class="' + galleryClass + '">' + gallery + "</div></div>" +
        "</section>" +
        '<section class="content-section">' +
          '<h2 class="content-label">' + esc(t("project.outcome")) + "</h2>" +
          '<div class="content-main">' + outcome + "</div>" +
        "</section>" +
        '<nav class="project-nav" aria-label="Project navigation">' +
          '<a href="' + esc(asset("projects/" + previous.slug + ".html")) + '">' +
            '<span class="kicker">← ' + esc(t("project.prev")) + "</span>" +
            "<strong>" + esc(previous.title[lang()]) + "</strong>" +
          "</a>" +
          '<a href="' + esc(asset("projects/" + next.slug + ".html")) + '">' +
            '<span class="kicker">' + esc(t("project.next")) + " →</span>" +
            "<strong>" + esc(next.title[lang()]) + "</strong>" +
          "</a>" +
        "</nav>" +
      "</div>" +
      '<section class="project-cta invert">' +
        '<div class="wrap">' +
          "<div><h2>" + esc(t("project.ctaTitle")) + "</h2><p>" + esc(t("project.ctaText")) + "</p></div>" +
          '<div><a class="btn btn--large" href="' + esc(asset("index.html#contact")) + '">' + esc(t("project.ctaButton")) + "</a></div>" +
        "</div>" +
      "</section>";

    bindLightbox();
  }

  function ensureLightbox() {
    var dialog = document.getElementById("lightbox");
    if (dialog) return dialog;

    dialog = document.createElement("dialog");
    dialog.id = "lightbox";
    dialog.className = "lightbox";
    dialog.setAttribute("aria-label", "Image preview");
    dialog.innerHTML =
      '<img id="lightbox-image" src="" alt="">' +
      '<div class="lightbox-bar"><span id="lightbox-caption"></span><button class="lightbox-close" type="button" data-lightbox-close>Close</button></div>';
    document.body.appendChild(dialog);

    dialog.querySelector("[data-lightbox-close]").addEventListener("click", function () {
      dialog.close();
    });

    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });

    return dialog;
  }

  function bindLightbox() {
    var dialog = ensureLightbox();
    var image = dialog.querySelector("#lightbox-image");
    var caption = dialog.querySelector("#lightbox-caption");
    var close = dialog.querySelector("[data-lightbox-close]");

    document.querySelectorAll("[data-lightbox-src]").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        image.setAttribute("src", trigger.getAttribute("data-lightbox-src"));
        image.setAttribute("alt", trigger.getAttribute("data-lightbox-caption") || "");
        caption.textContent = trigger.getAttribute("data-lightbox-caption") || "";
        close.textContent = lang() === "id" ? "Tutup" : "Close";
        dialog.setAttribute("aria-label", lang() === "id" ? "Pratinjau gambar" : "Image preview");
        if (typeof dialog.showModal === "function") {
          dialog.showModal();
        }
      });
    });
  }

  function bindCopyEmail() {
    document.querySelectorAll("[data-copy-email]").forEach(function (button) {
      button.addEventListener("click", function () {
        var email = button.getAttribute("data-copy-email");
        var label = button.querySelector("[data-copy-label]") || button;
        var original = t("contact.copy");

        function done() {
          label.textContent = t("contact.copied");
          window.setTimeout(function () {
            label.textContent = original;
          }, 1800);
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).then(done).catch(function () {
            window.location.href = "mailto:" + email;
          });
        } else {
          window.location.href = "mailto:" + email;
        }
      });
    });
  }

  function bindMenu() {
    var toggle = document.querySelector(".menu-toggle");
    var panel = document.getElementById("site-panel");
    if (!toggle || !panel) return;

    function closeMenu() {
      body.classList.remove("menu-open", "is-menu-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
      var open = !body.classList.contains("menu-open");
      body.classList.toggle("menu-open", open);
      body.classList.toggle("is-menu-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) closeMenu();
    });
  }

  function bindTheme() {
    var button = document.getElementById("theme-toggle");
    if (!button) return;
    button.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(next);
    });
  }

  function bindLanguage() {
    document.querySelectorAll("[data-lang-btn]").forEach(function (button) {
      button.addEventListener("click", function () {
        setLang(button.getAttribute("data-lang-btn"));
      });
    });
  }

  function bindToTop() {
    var button = document.getElementById("to-top");
    if (!button) return;

    function update() {
      button.classList.toggle("is-visible", window.scrollY > 600);
    }

    window.addEventListener("scroll", update, { passive: true });
    update();

    button.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function init() {
    applyStatic();
    bindTheme();
    bindLanguage();
    bindMenu();
    bindFilters();
    bindCopyEmail();
    bindToTop();
    renderHome();
    renderProject();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
