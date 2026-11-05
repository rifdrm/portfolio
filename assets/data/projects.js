window.PROJECTS = [
  {
    slug: "parking-ir-led",
    number: "01",
    categories: ["electronics"],
    year: "2024",
    status: "completed",
    role: { id: "Ketua Tim", en: "Team Lead" },
    title: {
      id: "Sistem Parkir Aman Berbasis IR LED",
      en: "IR LED-Based Safe Parking System"
    },
    summary: {
      id: "Alat bantu parkir dengan sensor inframerah dan peringatan buzzer untuk mendeteksi objek di sekitar kendaraan.",
      en: "A parking aid that uses infrared sensing and a buzzer to warn drivers about obstacles around the vehicle."
    },
    cover: "assets/img/parking/safe-parking-schematic.webp",
    coverType: "image",
    overview: {
      id: [
        "Proyek mata kuliah Elektronika ini berangkat dari masalah ruang parkir yang sempit dan sudut pandang pengemudi yang terbatas. Tujuannya adalah membuat purwarupa sistem parkir berbiaya rendah yang memberi peringatan real-time ketika kendaraan mendekati objek.",
        "Sistem memancarkan inframerah dari LED, membaca pantulan objek, lalu mengaktifkan buzzer ketika jarak melewati ambang tertentu. Rangkaian dirancang, disimulasikan, kemudian direalisasikan pada PCB dengan casing pelindung."
      ],
      en: [
        "This Electronics course project started from a practical problem: tight parking spaces and limited driver visibility. The goal was to build a low-cost parking prototype that gives real-time warnings when the vehicle gets close to an obstacle.",
        "The system emits infrared light from an LED, reads the reflection, and triggers a buzzer when the distance crosses a set threshold. The circuit was designed, simulated, and then realized on a custom PCB with a protective casing."
      ]
    },
    build: {
      id: [
        "Sensor IR LED dan penerima sebagai detektor jarak.",
        "Buzzer sebagai indikator audio saat objek mendekat.",
        "Skematik dan layout PCB custom.",
        "Casing untuk melindungi board dan sensor.",
        "Pengujian ambang jarak dan respons buzzer."
      ],
      en: [
        "IR LED and receiver pair as the distance detector.",
        "Buzzer as the audio indicator when an object gets close.",
        "Custom schematic and PCB layout.",
        "Protective casing for the board and sensor.",
        "Threshold and buzzer response testing."
      ]
    },
    roleDetail: {
      id: [
        "Memimpin tim beranggotakan lima orang dan membagi pekerjaan rangkaian, PCB, casing, serta pengujian.",
        "Menyusun proposal, dokumentasi teknis, dan jadwal kerja proyek."
      ],
      en: [
        "Led a five-person team and divided the circuit, PCB, casing, and testing work.",
        "Wrote the proposal, technical documentation, and project schedule."
      ]
    },
    outcome: {
      id: [
        "Purwarupa berhasil mendeteksi objek dan memberi peringatan audio dengan biaya komponen yang rendah. Proyek ini menjadi dasar pemahaman sensor, desain PCB, dan integrasi mekanik-elektronik."
      ],
      en: [
        "The prototype successfully detected obstacles and produced an audio warning at a low component cost. It became the foundation for understanding sensors, PCB design, and mechanical-electronic integration."
      ]
    },
    stack: ["IR LED", "Buzzer", "PCB Design", "Circuit Prototyping"],
    gallery: [
      {
        src: "assets/img/parking/safe-parking-pcb-layout.webp",
        type: "image",
        caption: {
          id: "Layout PCB yang digunakan untuk merealisasikan rangkaian.",
          en: "PCB layout used to realize the circuit."
        }
      }
    ]
  },
  {
    slug: "museum-touch-alarm",
    number: "02",
    categories: ["digital"],
    year: "2025",
    status: "completed",
    role: { id: "Anggota Tim", en: "Team Member" },
    title: {
      id: "Alarm Keamanan Museum Berbasis Sensor Sentuh",
      en: "Touch-Sensor Museum Security Alarm"
    },
    summary: {
      id: "Sistem alarm berbasis sensor sentuh TTP223, IC 555, dan 74LS73 untuk mendeteksi sentuhan pada objek pameran.",
      en: "A security alarm built with a TTP223 touch sensor, 555 timer, and 74LS73 to detect contact with exhibition objects."
    },
    cover: "assets/img/museum/museum-alarm-schematic.webp",
    coverType: "image",
    overview: {
      id: [
        "Museum menyimpan koleksi bernilai tinggi, tetapi sistem keamanan konvensional sulit mendeteksi sentuhan langsung pada objek pameran. Proyek ini merancang alarm sederhana yang bereaksi saat pengunjung menyentuh objek yang dilindungi.",
        "Sinyal dari sensor sentuh diubah menjadi pulsa waktu oleh IC 555, lalu dikunci oleh flip-flop 74LS73 agar status alarm tetap aktif. LED digunakan sebagai indikator visual."
      ],
      en: [
        "Museums hold high-value collections, but conventional security systems struggle to detect direct contact with exhibition objects. This project designed a simple alarm that reacts when a visitor touches a protected object.",
        "The touch sensor signal is converted into a timed pulse by a 555 timer and latched by a 74LS73 flip-flop so the alarm state stays active. An LED provides the visual indicator."
      ]
    },
    build: {
      id: [
        "Sensor sentuh TTP223 sebagai pemicu.",
        "IC 555 sebagai pembangkit pulsa waktu.",
        "IC 74LS73 sebagai pengunci status logika.",
        "LED sebagai indikator visual alarm.",
        "Rangkaian dirakit pada PCB setelah diuji di breadboard."
      ],
      en: [
        "TTP223 touch sensor as the trigger.",
        "555 timer as the timing pulse generator.",
        "74LS73 flip-flop as the logic state latch.",
        "LED as the visual alarm indicator.",
        "The circuit was assembled on PCB after breadboard testing."
      ]
    },
    roleDetail: {
      id: [
        "Membantu merancang dan menguji rangkaian pada breadboard.",
        "Melakukan perakitan dan penyolderan komponen pada PCB.",
        "Menguji respons sensor, durasi pulsa, dan status alarm."
      ],
      en: [
        "Helped design and test the circuit on a breadboard.",
        "Assembled and soldered components onto the PCB.",
        "Tested sensor response, pulse duration, and alarm state."
      ]
    },
    outcome: {
      id: [
        "Sistem merespons sentuhan dengan mengaktifkan indikator visual dan menahan status alarm. Solusi ini murah, mudah dipasang, dan tidak mengganggu tata ruang pameran."
      ],
      en: [
        "The system responded to touch by activating the visual indicator and holding the alarm state. The solution is low-cost, easy to install, and unobtrusive in an exhibition space."
      ]
    },
    stack: ["TTP223", "IC 555", "74LS73", "PCB Design"],
    gallery: [
      {
        src: "assets/img/museum/museum-alarm-demo.webm",
        type: "video",
        poster: "assets/img/museum/museum-alarm-schematic.webp",
        caption: {
          id: "Demonstrasi alat saat mendeteksi sentuhan.",
          en: "Demonstration of the device detecting touch."
        }
      }
    ]
  },
  {
    slug: "dht22-multinode",
    number: "03",
    categories: ["sensors"],
    year: "2025",
    status: "completed",
    role: { id: "Pengembang", en: "Developer" },
    title: {
      id: "Monitoring Suhu & Kelembapan 4 Node",
      en: "4-Node Temperature & Humidity Monitoring"
    },
    summary: {
      id: "Empat node DHT22 mengirim data suhu dan kelembapan ke Arduino Mega untuk ditampilkan pada OLED.",
      en: "Four DHT22 nodes stream temperature and humidity data to an Arduino Mega for display on an OLED."
    },
    cover: "assets/img/dht22/multinode-monitor-demo.webm",
    coverType: "video",
    coverPoster: "assets/img/dht22/multinode-monitor-demo-poster.webp",
    overview: {
      id: [
        "Proyek mata kuliah Teknologi Sensor dan Aktuator ini mengeksplorasi arsitektur sensor terdistribusi sederhana. Empat node LGT8F328P membaca sensor DHT22 dan mengirim data suhu serta kelembapan ke Arduino Mega melalui UART.",
        "Arduino Mega mem-parsing data dari empat jalur serial, menampilkan pembacaan secara bergantian pada OLED 0,91 inci, dan mengaktifkan buzzer ketika nilai melewati ambang tertentu."
      ],
      en: [
        "This Sensor and Actuator Technology course project explored a simple distributed sensor architecture. Four LGT8F328P nodes read DHT22 sensors and send temperature and humidity data to an Arduino Mega over UART.",
        "The Arduino Mega parses data from four serial channels, cycles the readings on a 0.91-inch OLED, and triggers a buzzer when values cross a set threshold."
      ]
    },
    build: {
      id: [
        "Empat node LGT8F328P dengan sensor DHT22.",
        "Arduino Mega sebagai master dan agregator data.",
        "OLED SSD1306 0,91 inci untuk tampilan bergantian.",
        "Komunikasi UART pada empat jalur serial.",
        "Firmware C++ untuk pembacaan, parsing, dan alarm."
      ],
      en: [
        "Four LGT8F328P nodes with DHT22 sensors.",
        "Arduino Mega as the master and data aggregator.",
        "0.91-inch SSD1306 OLED for cycling display pages.",
        "UART communication across four serial channels.",
        "C++ firmware for reading, parsing, and alerting."
      ]
    },
    roleDetail: {
      id: [
        "Merancang firmware node dan firmware master.",
        "Memetakan pin UART dan membuat parser data berbasis CSV.",
        "Menguji akurasi pembacaan dan kestabilan komunikasi antar-node."
      ],
      en: [
        "Designed both the node and master firmware.",
        "Mapped UART pins and built a CSV-based data parser.",
        "Tested reading accuracy and inter-node communication stability."
      ]
    },
    outcome: {
      id: [
        "Seluruh node berhasil terbaca dan datanya tampil bergantian di OLED. Proyek ini memberi pemahaman praktis tentang multi-serial, parsing data, dan batasan antarmuka mikrokontroler."
      ],
      en: [
        "All nodes were read successfully and their data cycled on the OLED. The project provided practical experience with multi-serial communication, data parsing, and microcontroller interface limits."
      ]
    },
    stack: ["Arduino Mega", "LGT8F328P", "DHT22", "OLED SSD1306", "UART", "C++"],
    gallery: [
      {
        src: "assets/img/dht22/multinode-monitor-demo.webm",
        type: "video",
        poster: "assets/img/dht22/multinode-monitor-demo-poster.webp",
        caption: {
          id: "Demonstrasi pembacaan empat node dan tampilan OLED.",
          en: "Demonstration of four-node readings and the OLED display."
        }
      }
    ]
  },
  {
    slug: "satpam-q",
    number: "04",
    categories: ["mobile", "iot"],
    year: "2026",
    status: "completed",
    role: { id: "Anggota Tim", en: "Team Member" },
    title: {
      id: "SATPAM-Q: Microclimate Kandang Puyuh",
      en: "SATPAM-Q: Quail House Microclimate Control"
    },
    summary: {
      id: "Sistem IoT yang memantau suhu, kelembapan, dan amonia kandang puyuh, lalu mengendalikan exhaust fan dan mist sprayer.",
      en: "An IoT system that monitors quail-house temperature, humidity, and ammonia, then controls an exhaust fan and mist sprayer."
    },
    cover: "assets/img/satpam-q/satpam-q-dashboard.webp",
    coverType: "image",
    overview: {
      id: [
        "SATPAM-Q (Sistem Adaptasi Temperatur dan Penekan Amonia Kandang Quail) dikembangkan untuk menjaga lingkungan kandang puyuh tetap aman. Amonia di atas 20 ppm dan suhu ekstrem dapat menurunkan kesehatan serta produktivitas unggas.",
        "ESP32 membaca sensor MQ-135 dan DHT22, menjalankan logika edge untuk mengendalikan aktuator, mengirim data ke Firebase, dan menyediakan dashboard web untuk monitoring serta kontrol manual."
      ],
      en: [
        "SATPAM-Q (Quail House Temperature Adaptation and Ammonia Suppression System) was built to keep quail houses in a safe range. Ammonia above 20 ppm and extreme temperatures can reduce bird health and productivity.",
        "An ESP32 reads the MQ-135 and DHT22 sensors, runs edge logic to drive actuators, sends data to Firebase, and exposes a web dashboard for monitoring and manual control."
      ]
    },
    build: {
      id: [
        "ESP32 sebagai edge controller.",
        "Sensor MQ-135 untuk amonia dan DHT22 untuk suhu/kelembapan.",
        "Modul LM2596 untuk distribusi tegangan.",
        "Relay dua kanal untuk exhaust fan dan mist sprayer 12V.",
        "Firebase Realtime Database dan dashboard web HTML/CSS/JS."
      ],
      en: [
        "ESP32 as the edge controller.",
        "MQ-135 for ammonia and DHT22 for temperature/humidity.",
        "LM2596 module for voltage distribution.",
        "Two-channel relay for the 12V exhaust fan and mist sprayer.",
        "Firebase Realtime Database and an HTML/CSS/JS web dashboard."
      ]
    },
    roleDetail: {
      id: [
        "Berkontribusi pada integrasi perangkat keras dan pengujian sensor.",
        "Membantu implementasi dashboard web dan integrasi Firebase.",
        "Melakukan pengujian fungsional pada kandang puyuh."
      ],
      en: [
        "Contributed to hardware integration and sensor testing.",
        "Helped implement the web dashboard and Firebase integration.",
        "Ran functional tests in the quail house."
      ]
    },
    outcome: {
      id: [
        "Purwarupa mampu membaca parameter lingkungan, menampilkan data real-time, dan mengaktifkan aktuator secara otomatis maupun manual. Sistem diuji langsung pada kandang puyuh."
      ],
      en: [
        "The prototype read environmental parameters, displayed real-time data, and drove actuators both automatically and manually. The system was tested directly in a quail house."
      ]
    },
    stack: ["ESP32", "MQ-135", "DHT22", "Firebase", "JavaScript", "MQTT/HTTP"],
    gallery: [
      {
        src: "assets/img/satpam-q/quail-house-installation-01.webp",
        type: "image",
        caption: {
          id: "Instalasi perangkat pada kandang puyuh, tampak 1.",
          en: "Device installation in the quail house, view 1."
        }
      },
      {
        src: "assets/img/satpam-q/quail-house-installation-02.webp",
        type: "image",
        caption: {
          id: "Instalasi perangkat pada kandang puyuh, tampak 2.",
          en: "Device installation in the quail house, view 2."
        }
      },
      {
        src: "assets/img/satpam-q/quail-house-installation-03.webp",
        type: "image",
        caption: {
          id: "Instalasi perangkat pada kandang puyuh, tampak 3.",
          en: "Device installation in the quail house, view 3."
        }
      },
      {
        src: "assets/img/satpam-q/quail-house-installation-04.webp",
        type: "image",
        caption: {
          id: "Instalasi perangkat pada kandang puyuh, tampak 4.",
          en: "Device installation in the quail house, view 4."
        }
      },
      {
        src: "assets/img/satpam-q/quail-house-installation-05.webp",
        type: "image",
        caption: {
          id: "Instalasi perangkat pada kandang puyuh, tampak 5.",
          en: "Device installation in the quail house, view 5."
        }
      }
    ]
  },
  {
    slug: "sassy",
    number: "05",
    categories: ["iot"],
    year: "2026",
    status: "wip",
    role: { id: "Anggota Tim", en: "Team Member" },
    title: {
      id: "SASSY: Smart Automatic Steaming System",
      en: "SASSY: Smart Automatic Steaming System"
    },
    summary: {
      id: "Sistem monitoring dan kontrol otomatis proses pengukusan ecoprint berbasis IoT untuk UMKM.",
      en: "An IoT-based monitoring and automatic control system for the ecoprint steaming process at a small business."
    },
    cover: "assets/img/sassy/sassy-3d-design.webp",
    coverType: "image",
    overview: {
      id: [
        "SASSY dikembangkan bersama mitra UMKM Ceu Kokom Ecoprint. Proses pengukusan masih dilakukan secara manual sehingga suhu dan waktu bergantung pada operator dan hasil ecoprint menjadi tidak konsisten.",
        "Sistem dirancang menggunakan ESP32-S3, sensor suhu, aktuator, dan dashboard untuk memantau serta mengontrol sesi pengukusan. Proyek masih berjalan pada tahap perancangan dan prototipe."
      ],
      en: [
        "SASSY was developed with a small business partner, Ceu Kokom Ecoprint. Steaming was still done manually, so temperature and timing depended on the operator and ecoprint results varied.",
        "The system uses an ESP32-S3, temperature sensors, actuators, and a dashboard to monitor and control steaming sessions. The project is still in its design and prototyping phase."
      ]
    },
    build: {
      id: [
        "ESP32-S3 sebagai pusat kendali.",
        "Sensor suhu dan aktuator untuk proses pengukusan.",
        "Dashboard web untuk monitoring sesi dan riwayat.",
        "Pemodelan perangkat lunak menggunakan UML.",
        "Desain mekanik 3D dan diagram wiring."
      ],
      en: [
        "ESP32-S3 as the control center.",
        "Temperature sensors and actuators for the steaming process.",
        "Web dashboard for session monitoring and history.",
        "Software modeling with UML.",
        "3D mechanical design and wiring diagram."
      ]
    },
    roleDetail: {
      id: [
        "Terlibat dalam perancangan sistem dan pemetaan kebutuhan mitra.",
        "Membantu penyusunan wiring dan dokumentasi teknis.",
        "Mendukung perancangan alur perangkat lunak dan dashboard."
      ],
      en: [
        "Contributed to system design and partner requirement mapping.",
        "Helped prepare the wiring and technical documentation.",
        "Supported the software flow and dashboard design."
      ]
    },
    outcome: {
      id: [
        "Status saat ini: work in progress. Tim telah menyelesaikan identifikasi kebutuhan mitra, desain mekanik 3D, skematik elektronika, dan pemodelan perangkat lunak."
      ],
      en: [
        "Current status: work in progress. The team has completed partner requirement discovery, 3D mechanical design, electronics schematics, and software modeling."
      ]
    },
    stack: ["ESP32-S3", "IoT", "UML", "3D Design", "Web Dashboard"],
    gallery: [
      {
        src: "assets/img/sassy/sassy-wiring-diagram.webp",
        type: "image",
        caption: {
          id: "Diagram wiring komponen elektronika.",
          en: "Wiring diagram of the electronic components."
        }
      },
      {
        src: "assets/img/sassy/sassy-prototype-wiring.webp",
        type: "image",
        caption: {
          id: "Proses perakitan dan pengujian rangkaian prototipe.",
          en: "Prototype circuit assembly and testing."
        }
      }
    ]
  },
  {
    slug: "plc-conveyor",
    number: "06",
    categories: ["plc"],
    year: "2026",
    status: "completed",
    role: { id: "Perancang Ladder & HMI", en: "Ladder & HMI Designer" },
    title: {
      id: "Sistem Konveyor Packaging Kacang & Mente",
      en: "Nut & Cashew Packaging Conveyor System"
    },
    summary: {
      id: "Studi kasus PLC dengan tiga konveyor, counter, dan HMI untuk mengemas kacang dan mente ke dalam box.",
      en: "A PLC case study with three conveyors, counters, and an HMI to package nuts and cashews into boxes."
    },
    cover: "assets/img/plc/plc-hmi-cx-designer.webp",
    coverType: "image",
    overview: {
      id: [
        "Studi kasus lomba PLC OLIVIA XI 2026 ini meminta kendali tiga konveyor yang masing-masing membawa kacang, mente, dan box. Sistem harus mengisi setiap box dengan jumlah yang dapat diatur dari HMI.",
        "Ladder diagram dibangun menggunakan counter dan comparator, sementara HMI CX-Designer menampilkan alur konveyor, input jumlah, serta hitungan real-time."
      ],
      en: [
        "This PLC competition case study (OLIVIA XI 2026) required controlling three conveyors carrying nuts, cashews, and boxes. Each box had to be filled with a target count adjustable from the HMI.",
        "The ladder diagram was built with counters and comparators, while an HMI in CX-Designer displayed the conveyor flow, count inputs, and real-time totals."
      ]
    },
    build: {
      id: [
        "Tiga motor konveyor untuk kacang, mente, dan box.",
        "Sensor dan push button sebagai input kendali.",
        "Ladder diagram dengan counter dan comparator.",
        "Program PLC pada CX-Programmer.",
        "HMI CX-Designer untuk input setpoint dan monitoring."
      ],
      en: [
        "Three conveyor motors for nuts, cashews, and boxes.",
        "Sensors and push buttons as control inputs.",
        "Ladder diagram with counters and comparators.",
        "PLC program in CX-Programmer.",
        "CX-Designer HMI for setpoint input and monitoring."
      ]
    },
    roleDetail: {
      id: [
        "Merancang ladder diagram untuk siklus konveyor otomatis.",
        "Membangun logika counter, comparator, dan reset siklus.",
        "Merancang tampilan HMI dan memetakan input/output."
      ],
      en: [
        "Designed the ladder diagram for the automatic conveyor cycle.",
        "Built the counter, comparator, and cycle-reset logic.",
        "Designed the HMI screens and mapped inputs/outputs."
      ]
    },
    outcome: {
      id: [
        "Sistem dapat menjalankan siklus otomatis sesuai setpoint dan berhenti melalui PB2. HMI menampilkan alur konveyor serta jumlah kacang dan mente secara real-time."
      ],
      en: [
        "The system ran the automatic cycle according to the setpoint and stopped via PB2. The HMI displayed the conveyor flow and real-time nut and cashew counts."
      ]
    },
    stack: ["PLC", "CX-Programmer", "CX-Designer", "HMI", "Ladder Logic"],
    gallery: [
      {
        src: "assets/img/plc/plc-ladder-main-control.webp",
        type: "image",
        caption: {
          id: "Ladder diagram: main control.",
          en: "Ladder diagram: main control."
        }
      },
      {
        src: "assets/img/plc/plc-ladder-box-management.webp",
        type: "image",
        caption: {
          id: "Ladder diagram: box management.",
          en: "Ladder diagram: box management."
        }
      },
      {
        src: "assets/img/plc/plc-ladder-counter-comparator.webp",
        type: "image",
        caption: {
          id: "Ladder diagram: counter dan comparator.",
          en: "Ladder diagram: counter and comparator."
        }
      },
      {
        src: "assets/img/plc/plc-ladder-feeder-control.webp",
        type: "image",
        caption: {
          id: "Ladder diagram: feeder control.",
          en: "Ladder diagram: feeder control."
        }
      },
      {
        src: "assets/img/plc/plc-ladder-cycle-reset.webp",
        type: "image",
        caption: {
          id: "Ladder diagram: cycle reset.",
          en: "Ladder diagram: cycle reset."
        }
      }
    ]
  }
];
