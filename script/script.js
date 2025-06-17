// Data untuk timeline (akan di-override dari JSON)
let timelineData = [
  {
    id: 1,
    label: "Zaman Kuno",
    period: "Sebelum 1293",
    description: "Masa kerajaan-kerajaan Hindu-Buddha awal di Nusantara",
    active: false,
  },
  {
    id: 2,
    label: "Zaman Kerajaan",
    period: "1293-1527",
    description: "Kerajaan terbesar di Nusantara yang mencapai puncak kejayaan",
    active: false,
  },
  {
    id: 3,
    label: "Kolonialisme",
    period: "1602-1945",
    description: "Masa penjajahan VOC, Belanda, dan Jepang di Indonesia",
    active: false,
  },
  {
    id: 4,
    label: "Kemerdekaan",
    period: "1945-1998",
    description: "Masa kemerdekaan hingga berakhirnya Orde Baru",
    active: false,
  },
  {
    id: 5,
    label: "Reformasi",
    period: "1998-sekarang",
    description: "Era reformasi dan demokratisasi Indonesia",
    active: false,
  },
];

// Data untuk artikel (akan di-override dari JSON)
let articlesData = [
  {
    id: 1,
    title: "PENDUDUKAN JEPANG DI INDONESIA",
    excerpt:
      "Masa pendudukan Jepang (1942-1945) membawa perubahan besar dalam sejarah Indonesia",
    content:
      "Pendudukan Jepang di Indonesia berlangsung dari tahun 1942 hingga 1945. Masa ini ditandai dengan berakhirnya kekuasaan kolonial Belanda dan dimulainya era baru yang akan membawa Indonesia menuju kemerdekaan.",
    image: "../assets/articles/kolonialisme/jepang.jpg",
    date: "2024-01-15",
    category: "Kolonialisme",
    author: "Dr. Sartono Kartodirdjo",
  },
  {
    id: 2,
    title: "KERAJAAN MAJAPAHIT",
    excerpt:
      "Kerajaan terbesar di Nusantara yang mencapai puncak kejayaan pada abad ke-14",
    content:
      "Kerajaan Majapahit adalah kerajaan Hindu-Buddha yang berdiri di Jawa Timur pada tahun 1293. Kerajaan ini mencapai puncak kejayaannya pada masa pemerintahan Hayam Wuruk dengan Mahapatih Gajah Mada.",
    image: "../assets/articles/kerajaan/majapahit.jpg",
    date: "2024-01-10",
    category: "Kerajaan Majapahit",
    author: "Prof. Slamet Muljana",
  },
  {
    id: 3,
    title: "PROKLAMASI KEMERDEKAAN",
    excerpt:
      "Detik-detik bersejarah proklamasi kemerdekaan Indonesia 17 Agustus 1945",
    content:
      "Proklamasi Kemerdekaan Indonesia dibacakan oleh Soekarno-Hatta pada tanggal 17 Agustus 1945 di Jalan Pegangsaan Timur 56, Jakarta. Peristiwa ini menandai berakhirnya masa penjajahan di Indonesia.",
    image: "../assets/hero-bg.jpg",
    date: "2024-01-05",
    category: "Kemerdekaan",
    author: "Prof. Taufik Abdullah",
  },
  {
    id: 4,
    title: "KERAJAAN SRIWIJAYA",
    excerpt:
      "Kerajaan maritim terbesar di Asia Tenggara pada abad ke-7 hingga ke-13",
    content:
      "Kerajaan Sriwijaya adalah kerajaan maritim yang berpusat di Palembang, Sumatera Selatan. Kerajaan ini menguasai jalur perdagangan maritim di Selat Malaka dan menjadi pusat pembelajaran agama Buddha.",
    image: "../assets/articles/kerajaan/sriwijaya.jpeg",
    date: "2024-01-01",
    category: "Zaman Kuno",
    author: "Dr. Bambang Budi Utomo",
  },
  {
    id: 5,
    title: "PERANG DIPONEGORO",
    excerpt:
      "Perlawanan heroik Pangeran Diponegoro melawan kolonial Belanda (1825-1830)",
    content:
      "Perang Diponegoro atau Perang Jawa adalah perang terbesar yang pernah dialami Belanda di Jawa. Dipimpin oleh Pangeran Diponegoro, perang ini berlangsung dari 1825 hingga 1830.",
    image: "../assets/articles/kolonialisme/diponegoro.jpg",
    date: "2023-12-28",
    category: "Kolonialisme",
    author: "Dr. Peter Carey",
  },
  {
    id: 6,
    title: "KERAJAAN MATARAM ISLAM",
    excerpt:
      "Kerajaan Islam terbesar di Jawa yang didirikan oleh Panembahan Senopati",
    content:
      "Kerajaan Mataram Islam didirikan pada akhir abad ke-16 oleh Panembahan Senopati. Kerajaan ini mencapai puncak kejayaannya pada masa Sultan Agung Hanyokrokusumo.",
    image: "../assets/articles/kerajaan/mataram.jpg",
    date: "2023-12-25",
    category: "Kerajaan Majapahit",
    author: "Prof. Merle Ricklefs",
  },
  {
    id: 7,
    title: "ERA REFORMASI INDONESIA",
    excerpt: "Perubahan besar dalam sistem politik Indonesia pasca Orde Baru",
    content:
      "Era Reformasi dimulai pada tahun 1998 setelah jatuhnya rezim Orde Baru. Periode ini ditandai dengan demokratisasi dan kebebasan pers.",
    image: "../assets/articles/reformasi/reformasi.jpg",
    date: "2023-12-20",
    category: "Reformasi",
    author: "Prof. Arief Budiman",
  },
];

// Variabel global untuk menyimpan semua data
let allData = null;

// Fungsi untuk clear container
function clearContainer(containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = "";
  }
}

// Fungsi untuk render timeline
function renderTimeline() {
  const timelineContainer = document.getElementById("timeline");
  if (!timelineContainer) return;

  clearContainer("timeline");

  timelineData.forEach((item) => {
    const timelineItem = document.createElement("div");
    timelineItem.className = "timeline-item";
    timelineItem.setAttribute("tabindex", "0"); // Untuk accessibility

    timelineItem.innerHTML = `
            <div class="timeline-dot ${item.active ? "active" : ""}"></div>
            <div class="timeline-label ${item.active ? "active" : ""}">${
      item.label
    }</div>
        `;

    // Event listener untuk click
    timelineItem.addEventListener("click", () => {
      selectTimelineItem(item.id);
    });

    // Event listener untuk keyboard (Enter dan Space)
    timelineItem.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectTimelineItem(item.id);
      }
    });

    timelineContainer.appendChild(timelineItem);
  });
}

// Fungsi untuk memilih item timeline
function selectTimelineItem(itemId) {
  // Reset semua item
  timelineData.forEach((data) => (data.active = false));

  // Set item yang dipilih sebagai active
  const selectedItem = timelineData.find((item) => item.id === itemId);
  if (selectedItem) {
    selectedItem.active = true;

    // Filter artikel berdasarkan periode yang dipilih
    filterArticlesByPeriod(selectedItem.label);
  }

  // Re-render timeline
  renderTimeline();
}

// Fungsi untuk filter artikel berdasarkan periode - DIPERBAIKI
function filterArticlesByPeriod(period) {
  if (!allData || !allData.articles) {
    console.log("No data available for filtering");
    return;
  }

  let filteredArticles = [];

  // Filter berdasarkan kategori yang sesuai dengan periode - MAPPING DIPERBAIKI
  switch (period) {
    case "Zaman Kuno":
      filteredArticles = allData.articles.filter(
        (article) =>
          article.category === "Sejarah Klasik" ||
          article.category === "Prasejarah" ||
          article.category === "Zaman Kuno" ||
          article.title.toLowerCase().includes("sriwijaya") ||
          article.title.toLowerCase().includes("borobudur") ||
          article.title.toLowerCase().includes("hindu") ||
          article.title.toLowerCase().includes("buddha")
      );
      break;

    case "Zaman Kerajaan":
      filteredArticles = allData.articles.filter(
        (article) =>
          article.category === "Sejarah Klasik" ||
          article.category === "Sejarah Islam" ||
          article.category === "Kerajaan Majapahit" ||
          article.title.toLowerCase().includes("majapahit") ||
          article.title.toLowerCase().includes("sriwijaya") ||
          article.title.toLowerCase().includes("mataram") ||
          article.title.toLowerCase().includes("kerajaan")
      );
      break;

    case "Kolonialisme":
      filteredArticles = allData.articles.filter(
        (article) =>
          article.category === "Kolonialisme" ||
          article.category === "Perlawanan" ||
          article.category === "Sejarah Modern" ||
          article.title.toLowerCase().includes("jepang") ||
          article.title.toLowerCase().includes("diponegoro") ||
          article.title.toLowerCase().includes("belanda") ||
          article.title.toLowerCase().includes("voc") ||
          article.title.toLowerCase().includes("penjajahan")
      );
      break;

    case "Kemerdekaan":
      filteredArticles = allData.articles.filter(
        (article) =>
          article.category === "Kemerdekaan" ||
          article.title.toLowerCase().includes("proklamasi") ||
          article.title.toLowerCase().includes("merdeka") ||
          article.title.toLowerCase().includes("soekarno") ||
          article.title.toLowerCase().includes("hatta") ||
          article.title.toLowerCase().includes("17 agustus")
      );
      break;

    case "Reformasi":
      filteredArticles = allData.articles.filter(
        (article) =>
          article.category === "Sejarah Modern" ||
          article.category === "Reformasi" ||
          article.title.toLowerCase().includes("reformasi") ||
          article.title.toLowerCase().includes("modern") ||
          article.title.toLowerCase().includes("demokrasi") ||
          article.title.toLowerCase().includes("orde baru")
      );
      break;

    default:
      filteredArticles = allData.articles;
  }

  console.log(
    `Filtering by period: ${period}, Found: ${filteredArticles.length} articles`
  );
  console.log("Filtered articles:", filteredArticles);

  renderArticles(filteredArticles);
}

// Fungsi untuk render artikel
function renderArticles(articles = articlesData) {
  const articlesContainer = document.getElementById("articles-grid");
  if (!articlesContainer) return;

  clearContainer("articles-grid");

  if (articles.length === 0) {
    articlesContainer.innerHTML =
      '<p class="no-articles" style="text-align: center; color: #666; font-style: italic; padding: 2rem;">Tidak ada artikel untuk periode ini.</p>';
    return;
  }

  articles.forEach((article) => {
    const articleCard = document.createElement("div");
    articleCard.className = "article-card";
    articleCard.setAttribute("tabindex", "0"); // Untuk accessibility

    articleCard.innerHTML = `
            <div class="article-image" style="background-image: url('${
              article.image
            }')"></div>
            <div class="article-content">
                <h4 class="article-title">${article.title}</h4>
                <p class="article-excerpt">${article.excerpt}</p>
                ${
                  article.date
                    ? `<small class="article-date" style="color: #888; font-size: 0.8rem;">Dipublikasi: ${formatDate(
                        article.date
                      )}</small>`
                    : ""
                }
                ${
                  article.category
                    ? `<span class="article-category" style="background: #8b4513; color: white; padding: 0.2rem 0.5rem; border-radius: 10px; font-size: 0.7rem; margin-top: 0.5rem; display: inline-block;">${article.category}</span>`
                    : ""
                }
            </div>
        `;

    // Event listener untuk click
    articleCard.addEventListener("click", () => {
      openArticle(article);
    });

    // Event listener untuk keyboard
    articleCard.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openArticle(article);
      }
    });

    articlesContainer.appendChild(articleCard);
  });
}

// Fungsi untuk membuka artikel dengan animasi - UPDATED
function openArticle(article) {
  const modal = document.getElementById("article-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalMeta = document.getElementById("modal-meta");
  const modalContent = document.getElementById("modal-content");

  // Show modal immediately (tapi masih transparent)
  modal.style.display = "block";

  // Set loading state
  modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-loading">
                <div class="loading"></div>
                <p style="margin-left: 1rem; color: #8b4513;">Memuat artikel...</p>
            </div>
        </div>
    `;

  // Simulate loading delay untuk effect yang lebih smooth
  setTimeout(() => {
    // Restore modal structure
    modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2 id="modal-title" class="modal-title"></h2>
                    <span class="modal-close">&times;</span>
                </div>
                <div class="modal-body">
                    <div id="modal-image" class="modal-image"></div>
                    <div class="modal-info">
                        <div id="modal-meta" class="modal-meta"></div>
                        <div id="modal-content" class="modal-text"></div>
                    </div>
                </div>
            </div>
        `;

    // Get updated elements
    const newModalTitle = document.getElementById("modal-title");
    const newModalImage = document.getElementById("modal-image");
    const newModalMeta = document.getElementById("modal-meta");
    const newModalContent = document.getElementById("modal-content");
    const closeBtn = document.querySelector(".modal-close");

    // Set content
    newModalTitle.textContent = article.title;
    newModalImage.style.backgroundImage = `url('${article.image}')`;

    // Set meta information
    let metaHTML = "";
    if (article.date) {
      metaHTML += `
                <div class="modal-meta-item">
                    <span class="modal-meta-label">📅 Tanggal:</span>
                    <span>${formatDate(article.date)}</span>
                </div>
            `;
    }
    if (article.author) {
      metaHTML += `
                <div class="modal-meta-item">
                    <span class="modal-meta-label">✍️ Penulis:</span>
                    <span>${article.author}</span>
                </div>
            `;
    }
    if (article.category) {
      metaHTML += `
                <div class="modal-meta-item">
                    <span class="modal-category">${article.category}</span>
                </div>
            `;
    }
    newModalMeta.innerHTML = metaHTML;

    // Set content
    const content = article.content || article.excerpt;
    newModalContent.innerHTML = `<p>${content}</p>`;

    // Add event listeners
    if (closeBtn) {
      closeBtn.addEventListener("click", closeModal);
    }

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Trigger animation dengan delay kecil
    setTimeout(() => {
      modal.classList.add("show");
    }, 50);

    // Prevent body scroll
    document.body.style.overflow = "hidden";

    // Focus on modal for accessibility
    modal.focus();
  }, 300); // Loading delay
}

// Fungsi untuk menutup modal dengan animasi - UPDATED
function closeModal() {
  const modal = document.getElementById("article-modal");

  // Remove show class untuk trigger close animation
  modal.classList.remove("show");

  // Hide modal setelah animasi selesai
  setTimeout(() => {
    modal.style.display = "none";
    // Restore body scroll
    document.body.style.overflow = "auto";
  }, 400); // Sesuai dengan durasi animasi
}

// Fungsi untuk format tanggal
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("id-ID", options);
}

// Fungsi untuk load data dari JSON - PATH DISESUAIKAN
async function loadDataFromJSON() {
  try {
    // Path disesuaikan dengan struktur folder: script/ -> data/data.json
    const response = await fetch("../data/data.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Data loaded successfully:", data);
    return data;
  } catch (error) {
    console.error("Error loading data from JSON:", error);
    console.log("Using fallback data...");

    // Fallback ke data dummy jika gagal load JSON
    return {
      timeline: timelineData,
      articles: articlesData,
    };
  }
}

// Fungsi untuk inisialisasi aplikasi
async function initializeApp() {
  console.log("Initializing app...");

  // Show loading state
  const articlesContainer = document.getElementById("articles-grid");
  const timelineContainer = document.getElementById("timeline");

  if (articlesContainer) {
    articlesContainer.innerHTML =
      '<div class="loading" style="text-align: center; padding: 2rem;">Memuat data...</div>';
  }

  // Load data dari JSON
  allData = await loadDataFromJSON();

  if (allData) {
    // Update data global dengan data dari JSON
    if (allData.timeline && allData.timeline.length > 0) {
      timelineData = allData.timeline;
      console.log("Timeline data updated:", timelineData);
    }
    if (allData.articles && allData.articles.length > 0) {
      articlesData = allData.articles;
      console.log("Articles data updated:", articlesData);
    }

    // Render components dengan data dari JSON
    renderTimeline();
    renderArticles();

    console.log("App initialized successfully");
  } else {
    console.log("Failed to load data, using default data");
    // Jika gagal load data, gunakan data default
    renderTimeline();
    renderArticles();
  }
}

// Fungsi untuk search artikel
function searchArticles(query) {
  if (!allData || !allData.articles) return;

  const filteredArticles = allData.articles.filter(
    (article) =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      (article.category &&
        article.category.toLowerCase().includes(query.toLowerCase())) ||
      (article.content &&
        article.content.toLowerCase().includes(query.toLowerCase()))
  );

  renderArticles(filteredArticles);
}

// Update fungsi filterArticlesByNavigation - MODIFIED
// function filterArticlesByNavigation(navText) {
//     console.log('🧭 Navigation clicked:', navText);

//     if (!allData || !allData.articles) {
//         console.log('⚠️ No data available for navigation filtering');
//         return;
//     }

//     let filteredArticles = [];

//     switch(navText) {
//         case 'Beranda':
//             // Tampilkan semua artikel
//             filteredArticles = allData.articles;
//             break;
//         case 'Zaman Praaksara':
//             filteredArticles = allData.articles.filter(article =>
//                 article.category === 'Prasejarah' ||
//                 article.title.toLowerCase().includes('purba') ||
//                 article.title.toLowerCase().includes('prasejarah')
//             );
//             break;
//         case 'Kerajaan Hindu Buddha':
//             filteredArticles = allData.articles.filter(article =>
//                 article.category === 'Sejarah Klasik' ||
//                 article.title.toLowerCase().includes('hindu') ||
//                 article.title.toLowerCase().includes('buddha') ||
//                 article.title.toLowerCase().includes('majapahit') ||
//                 article.title.toLowerCase().includes('sriwijaya') ||
//                 article.title.toLowerCase().includes('borobudur') ||
//                 article.title.toLowerCase().includes('prambanan')
//             );
//             break;
//         case 'Kerajaan Islam':
//             filteredArticles = allData.articles.filter(article =>
//                 article.category === 'Sejarah Islam' ||
//                 article.title.toLowerCase().includes('islam') ||
//                 article.title.toLowerCase().includes('mataram') ||
//                 article.title.toLowerCase().includes('sultan') ||
//                 article.title.toLowerCase().includes('demak') ||
//                 article.title.toLowerCase().includes('banten')
//             );
//             break;
//         case 'Kolonialisme':
//             filteredArticles = allData.articles.filter(article =>
//                 article.category === 'Kolonialisme' ||
//                 article.category === 'Perlawanan' ||
//                 article.title.toLowerCase().includes('belanda') ||
//                 article.title.toLowerCase().includes('jepang') ||
//                 article.title.toLowerCase().includes('voc') ||
//                 article.title.toLowerCase().includes('diponegoro') ||
//                 article.title.toLowerCase().includes('penjajahan')
//             );
//             break;
//         case 'Reformasi':
//             filteredArticles = allData.articles.filter(article =>
//                 article.category === 'Sejarah Modern' ||
//                 article.category === 'Reformasi' ||
//                 article.title.toLowerCase().includes('reformasi') ||
//                 article.title.toLowerCase().includes('soeharto') ||
//                 article.title.toLowerCase().includes('orde baru')
//             );
//             break;
//         default:
//             filteredArticles = allData.articles;
//     }

//     console.log(`📚 Found ${filteredArticles.length} articles for "${navText}"`);

//     // Render artikel yang difilter
//     renderArticles(filteredArticles);

//     // Scroll ke timeline section
//     scrollToTimeline();
// }

// Fungsi untuk scroll ke timeline - TAMBAH
function scrollToTimeline() {
  const timelineSection = document.querySelector(".timeline-section");
  if (timelineSection) {
    // Delay sedikit untuk memastikan timeline sudah terupdate
    setTimeout(() => {
      timelineSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    console.log("📍 Scrolled to timeline section");
  }
}

// Update fungsi selectTimelineItem untuk lebih robust - MODIFIED
function selectTimelineItem(itemId) {
  console.log("🎯 Selecting timeline item:", itemId);

  // Reset semua item
  timelineData.forEach((data) => (data.active = false));

  // Set item yang dipilih sebagai active
  const selectedItem = timelineData.find((item) => item.id === itemId);
  if (selectedItem) {
    selectedItem.active = true;
    console.log("✅ Selected item:", selectedItem.label);

    // Filter artikel berdasarkan periode yang dipilih
    filterArticlesByPeriod(selectedItem.label);
  } else {
    console.error("❌ Selected item not found!");
  }

  // Re-render timeline untuk update visual
  renderTimeline();
}

// Event listeners
document.addEventListener("DOMContentLoaded", async () => {
  console.log("DOM Content Loaded");

  // Initialize app
  await initializeApp();

  // Hero button click
  const heroBtn = document.querySelector(".hero-btn");
  if (heroBtn) {
    heroBtn.addEventListener("click", () => {
      const timelineSection = document.querySelector(".timeline-section");
      if (timelineSection) {
        timelineSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  }

  // Interactive map button
  const mapBtn = document.querySelector(".interactive-map-btn");
  if (mapBtn) {
    mapBtn.addEventListener("click", () => {
      alert("Fitur peta interaktif akan segera hadir!");
    });
  }

  // Navigation links
  // Navigation links - UPDATED
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      const scrollTarget = link.getAttribute("data-scroll");

      // Jika ada data-scroll, scroll ke section
      if (scrollTarget) {
        e.preventDefault();
        const targetSection =
          document.querySelector(`#${scrollTarget}`) ||
          document.querySelector(`.${scrollTarget}-section`);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        // Update active state
        document
          .querySelectorAll(".nav-link")
          .forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
        return;
      }

      // Jika link eksternal atau page lain, biarkan default behavior
      if (href && (href.includes(".html") || href.startsWith("http"))) {
        return; // Let default behavior handle it
      }

      // Handle internal navigation (existing code)
      e.preventDefault();
      document
        .querySelectorAll(".nav-link")
        .forEach((l) => l.classList.remove("active"));
      link.classList.add("active");

      const navText = link.textContent.trim();
      if (typeof filterArticlesByNavigation === "function") {
        filterArticlesByNavigation(navText);
      }
    });
  });
  // Modal event listeners - TAMBAH
  const modal = document.getElementById("article-modal");
  const closeBtn = document.querySelector(".modal-close");

  // Close modal when clicking X
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
      closeModal();
    }
  });
});

// Smooth scrolling untuk internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
