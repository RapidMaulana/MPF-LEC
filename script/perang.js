// Data artikel perang - TAMBAH
const warArticlesData = [
    {
        id: 1,
        title: "PERANG DIPONEGORO (1825-1830)",
        excerpt: "Perlawanan heroik Pangeran Diponegoro melawan kolonial Belanda yang berlangsung selama 5 tahun",
        content: "Perang Diponegoro atau Perang Jawa adalah perang terbesar yang pernah dialami Belanda di Jawa. Dipimpin oleh Pangeran Diponegoro, perang ini berlangsung dari 1825 hingga 1830 dan menjadi salah satu perlawanan paling heroik dalam sejarah Indonesia.",
        image: "../assets/articles/kolonialisme/diponegoro.jpg",
        date: "1825-1830",
        category: "perlawanan",
        categoryName: "Perlawanan Kolonial",
        author: "Dr. Peter Carey"
    },
    {
        id: 2,
        title: "PERANG PADRI (1803-1837)",
        excerpt: "Konflik antara kaum adat dan kaum agama di Minangkabau yang kemudian melibatkan Belanda",
        content: "Perang Padri adalah perang yang terjadi di Sumatera Barat antara kaum adat (tradisional) dengan kaum Padri (reformis Islam). Belanda kemudian terlibat dan menggunakan politik devide et impera untuk menguasai wilayah Minangkabau.",
        image: "../assets/articles/kolonialisme/padri.jpg",
        date: "1803-1837",
        category: "perlawanan",
        categoryName: "Perlawanan Kolonial",
        author: "Prof. Christine Dobbin"
    },
    {
        id: 3,
        title: "PERANG KEMERDEKAAN (1945-1949)",
        excerpt: "Perjuangan mempertahankan kemerdekaan Indonesia dari upaya Belanda untuk kembali berkuasa",
        content: "Perang Kemerdekaan Indonesia adalah konflik bersenjata dan diplomatik antara Republik Indonesia dan Kerajaan Belanda yang berlangsung dari 1945 hingga 1949. Perang ini diakhiri dengan pengakuan kedaulatan Indonesia.",
        image: "/placeholder.svg?height=200&width=300&text=Perang+Kemerdekaan",
        date: "1945-1949",
        category: "kemerdekaan",
        categoryName: "Perang Kemerdekaan",
        author: "Prof. George McTurnan Kahin"
    },
    {
        id: 4,
        title: "PERANG ACEH (1873-1914)",
        excerpt: "Perang terpanjang dalam sejarah kolonial Belanda di Indonesia yang berlangsung selama 41 tahun",
        content: "Perang Aceh adalah konflik militer yang berkepanjangan antara Kesultanan Aceh dan Belanda. Perang ini dimulai pada 1873 dan berakhir pada 1914, menjadikannya perang terpanjang dalam sejarah kolonial Belanda.",
        image: "../assets/articles/kolonialisme/aceh.webp",
        date: "1873-1914",
        category: "perlawanan",
        categoryName: "Perlawanan Kolonial",
        author: "Dr. Anthony Reid"
    },
    {
        id: 5,
        title: "PERTEMPURAN SURABAYA (1945)",
        excerpt: "Pertempuran heroik rakyat Surabaya melawan tentara Inggris yang menginspirasi perjuangan nasional",
        content: "Pertempuran Surabaya adalah pertempuran antara pihak Indonesia dan pihak Inggris yang terjadi dari tanggal 27 Oktober – 20 November 1945. Pertempuran ini menjadi simbol perlawanan rakyat Indonesia.",
        image: "../assets/articles/kemerdekaan/surabaya.jpg",
        date: "1945",
        category: "kemerdekaan",
        categoryName: "Perang Kemerdekaan",
        author: "Dr. Frederick"
    },
    {
        id: 6,
        title: "KONFLIK MALUKU (1999-2002)",
        excerpt: "Konflik komunal yang terjadi di Maluku antara komunitas Muslim dan Kristen",
        content: "Konflik Maluku adalah serangkaian konflik komunal yang terjadi di Provinsi Maluku antara tahun 1999-2002. Konflik ini melibatkan komunitas Muslim dan Kristen dan menyebabkan ribuan korban jiwa.",
        image: "../assets/articles/reformasi/maluku.webp",
        date: "1999-2002",
        category: "regional",
        categoryName: "Konflik Regional",
        author: "Dr. Gerry van Klinken"
    }
];

// Filter categories
const warCategories = [
    { id: "all", name: "Semua Perang", active: true },
    { id: "perlawanan", name: "Perlawanan Kolonial", active: false },
    { id: "kemerdekaan", name: "Perang Kemerdekaan", active: false },
    { id: "regional", name: "Konflik Regional", active: false },
  ]
  
  // Current filter state
  let currentFilter = "all"
  
  // Modal functions - LENGKAP
  function openArticle(article) {
    console.log("🔍 Opening article:", article.title)
  
    const modal = document.getElementById("article-modal")
    if (!modal) {
      console.error("❌ Modal not found! Using fallback alert.")
      alert(`${article.title}\n\n${article.content || article.excerpt}`)
      return
    }
  
    // Show modal immediately
    modal.style.display = "block"
  
    // Set loading state
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-loading">
          <div class="loading"></div>
          <p style="margin-left: 1rem; color: #8b4513;">Memuat artikel...</p>
        </div>
      </div>
    `
  
    // Simulate loading delay
    setTimeout(() => {
      // Restore modal structure
      modal.innerHTML = `
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">${article.title}</h2>
            <span class="modal-close">&times;</span>
          </div>
          <div class="modal-body">
            <div class="modal-image" style="background-image: url('${article.image}')"></div>
            <div class="modal-info">
              <div class="modal-meta">
                ${
                  article.date
                    ? `
                  <div class="modal-meta-item">
                    <span class="modal-meta-label">📅 Periode:</span>
                    <span>${article.date}</span>
                  </div>
                `
                    : ""
                }
                ${
                  article.author
                    ? `
                  <div class="modal-meta-item">
                    <span class="modal-meta-label">✍️ Penulis:</span>
                    <span>${article.author}</span>
                  </div>
                `
                    : ""
                }
                ${
                  article.categoryName
                    ? `
                  <div class="modal-meta-item">
                    <span class="modal-category">${article.categoryName}</span>
                  </div>
                `
                    : ""
                }
              </div>
              <div class="modal-text">
                <p>${article.content || article.excerpt}</p>
              </div>
            </div>
          </div>
        </div>
      `
  
      // Add event listeners
      const closeBtn = modal.querySelector(".modal-close")
      if (closeBtn) {
        closeBtn.addEventListener("click", closeModal)
      }
  
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          closeModal()
        }
      })
  
      // Trigger animation
      setTimeout(() => {
        modal.classList.add("show")
      }, 50)
  
      console.log("✅ Modal opened successfully")
    }, 300)
  }
  
  function closeModal() {
    const modal = document.getElementById("article-modal")
    if (!modal) return
  
    modal.classList.remove("show")
  
    setTimeout(() => {
      modal.style.display = "none"
    }, 400)
  
    console.log("✅ Modal closed")
  }
  
  // Render articles function
  function renderWarArticles(articles = warArticlesData) {
    console.log("🔄 Rendering war articles:", articles.length)
  
    const articlesContainer = document.getElementById("war-articles-grid")
    if (!articlesContainer) {
      console.error("❌ Articles container not found!")
      return
    }
  
    articlesContainer.innerHTML = ""
  
    if (articles.length === 0) {
      articlesContainer.innerHTML =
        '<p class="no-articles" style="text-align: center; color: #666; font-style: italic; padding: 2rem; grid-column: 1 / -1;">Tidak ada artikel untuk kategori ini.</p>'
      return
    }
  
    articles.forEach((article) => {
      const articleCard = document.createElement("div")
      articleCard.className = "article-card war-article-card"
      articleCard.setAttribute("tabindex", "0")
  
      articleCard.innerHTML = `
        <div class="article-image" style="background-image: url('${article.image}')"></div>
        <div class="article-content">
          <h4 class="article-title">${article.title}</h4>
          <p class="article-excerpt">${article.excerpt}</p>
          <div class="article-meta">
            <small class="article-date" style="color: #888; font-size: 0.8rem;">Periode: ${article.date}</small><br>
            <span class="article-category" style="background: #8b4513; color: white; padding: 0.2rem 0.5rem; border-radius: 10px; font-size: 0.7rem; margin-top: 0.5rem; display: inline-block;">${article.categoryName}</span>
          </div>
        </div>
      `
  
      // Click event
      articleCard.addEventListener("click", () => {
        console.log("🖱️ War article clicked:", article.title)
        openArticle(article)
      })
  
      // Keyboard event
      articleCard.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          console.log("⌨️ War article selected via keyboard:", article.title)
          openArticle(article)
        }
      })
  
      articlesContainer.appendChild(articleCard)
    })
  
    console.log("✅ War articles rendered successfully")
  }
  
  // Filter articles function
  function filterWarArticles(category) {
    console.log("🔍 Filtering by:", category)
    currentFilter = category
  
    let filteredArticles
    if (category === "all") {
      filteredArticles = warArticlesData
    } else {
      filteredArticles = warArticlesData.filter((article) => article.category === category)
    }
  
    renderWarArticles(filteredArticles)
  
    // Update active filter button
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.remove("active")
      if (btn.getAttribute("data-filter") === category) {
        btn.classList.add("active")
      }
    })
  
    console.log(`✅ Filtered: ${filteredArticles.length} articles found`)
  }
  
  // Search function
  function searchWarArticles(query) {
    console.log("🔍 Searching for:", query)
  
    if (!query.trim()) {
      filterWarArticles(currentFilter)
      return
    }
  
    const filteredArticles = warArticlesData.filter(
      (article) =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        article.content.toLowerCase().includes(query.toLowerCase()) ||
        article.categoryName.toLowerCase().includes(query.toLowerCase()),
    )
  
    renderWarArticles(filteredArticles)
    console.log(`🔍 Search results: ${filteredArticles.length} articles found`)
  }
  
  // Initialize page
  function initializeWarPage() {
    console.log("🏛️ War page initializing...")
  
    // Check required elements
    const modal = document.getElementById("article-modal")
    const articlesGrid = document.getElementById("war-articles-grid")
  
    if (!modal) {
      console.error("❌ Modal not found!")
    } else {
      console.log("✅ Modal found")
    }
  
    if (!articlesGrid) {
      console.error("❌ Articles grid not found!")
    } else {
      console.log("✅ Articles grid found")
    }
  
    // Render initial articles
    renderWarArticles()
  
    // Filter button listeners
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter")
        filterWarArticles(filter)
      })
    })
  
    // Search functionality
    const searchInput = document.getElementById("search-input")
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchWarArticles(e.target.value)
      })
    }
  
    // Global modal event listeners
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const modal = document.getElementById("article-modal")
        if (modal && modal.style.display === "block") {
          closeModal()
        }
      }
    })
  
    console.log("✅ War page initialized successfully")
  }
  
  // Navigation function
  function handleNavigation() {
    // Navigation links
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href")
  
        // If it's an external link or different page, let default behavior handle it
        if (href && (href.includes(".html") || href.startsWith("http"))) {
          return // Let default behavior handle it
        }
  
        // Handle internal navigation
        e.preventDefault()
        document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"))
        link.classList.add("active")
  
        const navText = link.textContent.trim()
        console.log("🧭 Navigation clicked:", navText)
      })
    })
  }
  
  // Smooth scrolling function
  function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          })
        }
      })
    })
  }
  
  // Main initialization
  document.addEventListener("DOMContentLoaded", () => {
    console.log("🌟 DOM Content Loaded - War Page")
  
    // Initialize all components
    initializeWarPage()
    handleNavigation()
    initializeSmoothScrolling()
  
    console.log("🎉 War page fully loaded and ready!")
  })
  