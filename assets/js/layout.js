class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top custom-nav">
          <div class="container-fluid px-lg-5">
            <a class="navbar-brand logo" href="index.html">
              <img src="assets/img/ItemTrangChu(1)/DreamCloud (7).png" alt="Logo" class="logo-img" />
              JADE<span> CHAMBER</span>
            </a>
    
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span class="navbar-toggler-icon"></span>
            </button>
    
            <div class="collapse navbar-collapse" id="navbarNav">
              <div class="mx-auto d-lg-flex align-items-center">
                <ul class="navbar-nav nav-links">
                  <li class="nav-item">
                    <a class="nav-link" href="index.html">Trang chủ</a>
                  </li>
                  <li class="nav-item dropdown has-megamenu">
                    <a class="nav-link dropdown-toggle d-flex align-items-center" href="TrungBaySP.html" data-bs-toggle="dropdown" onclick="window.location.href=this.getAttribute('href')">Sản phẩm</a>
                    <div class="dropdown-menu megamenu" role="menu">
                      <div class="container-fluid">
                        <div class="row g-3">
                          <div class="col-megamenu col-md-2">
                            <a href="./DaQuy.html"><h6 class="title"><i class="fas fa-gem me-2"></i>ĐÁ QUÝ</h6></a>
                            <ul class="list-unstyled">
                              <li><a href="DaQuy.html?category=KimCuong">Kim cương</a></li>
                              <li><a href="DaQuy.html?category=Sapphire">Sapphire</a></li>
                              <li><a href="DaQuy.html?category=Ruby">Ruby</a></li>
                              <li><a href="DaQuy.html?category=Emerald">Emerald</a></li>
                              <li><a href="DaQuy.html?category=Topaz">Topaz</a></li>
                            </ul>
                          </div>
                          <div class="col-megamenu col-md-2">
                            <a href="./VangBac.html"><h6 class="title"><i class="fas fa-coins me-2"></i>VÀNG BẠC</h6></a>
                            <ul class="list-unstyled">
                              <li><a href="VangBac.html?category=Vang">Vàng</a></li>
                              <li><a href="VangBac.html?category=Vang18K">Vàng Ý 18K</a></li>
                              <li><a href="VangBac.html?category=Bac">Bạc S925</a></li>
                              <li><a href="VangBac.html?category=VangTrang">Vàng trắng</a></li>
                              <li><a href="VangBac.html?category=VangHong">Vàng hồng</a></li>
                            </ul>
                          </div>
                          <div class="col-megamenu col-md-2">
                            <a href="./TrangSuc.html"><h6 class="title"><i class="fas fa-ring me-2"></i>TRANG SỨC</h6></a>
                            <ul class="list-unstyled">
                              <li><a href="TrangSuc.html?category=NhanDon">Nhẫn đơn</a></li>
                              <li><a href="TrangSuc.html?category=DayChuyen">Dây chuyền</a></li>
                              <li><a href="TrangSuc.html?category=BongTai">Bông tai</a></li>
                              <li><a href="TrangSuc.html?category=LacTay">Vòng & Lắc tay</a></li>
                              <li><a href="TrangSuc.html?category=NhanCuoi">Nhẫn cưới</a></li>
                            </ul>
                          </div>
                          <div class="col-megamenu col-md-2">
                            <a href="./PhongThuy.html"><h6 class="title"><i class="fas fa-yin-yang me-2"></i>PHONG THỦY</h6></a>
                            <ul class="list-unstyled">
                              <li><a href="PhongThuy.html?category=VongTayTyHuu">Vòng tay tỳ hưu</a></li>
                              <li><a href="PhongThuy.html?category=MatDayPhat">Mặt dây Phật</a></li>
                              <li><a href="PhongThuy.html?category=DaTheoMenh">Đá theo mệnh</a></li>
                              <li><a href="PhongThuy.html?category=CharmVang">Charm vàng</a></li>
                            </ul>
                          </div>
                          <div class="col-megamenu col-md-2">
                            <a href="./PhuKien.html"><h6 class="title"><i class="fas fa-magic me-2"></i>PHỤ KIỆN</h6></a>
                            <ul class="list-unstyled">
                              <li><a href="PhuKien.html?category=HopTrangSuc">Hộp trang sức</a></li>
                              <li><a href="PhuKien.html?category=DungCuLamSach">Dụng cụ làm sạch</a></li>
                              <li><a href="PhuKien.html?category=KhanLauBac">Khăn lau bạc</a></li>
                              <li><a href="PhuKien.html?category=DayDeoThayThe">Dây đeo thay thế</a></li>
                            </ul>
                          </div>
                          <div class="col-megamenu col-md-2 d-none d-md-block news-promo">
                            <div class="promo-box">
                            <img src="./assets/img/ItemTrangChu(1)/spnb2.jpg" alt="Promo" class="img-fluid rounded" />
                              <p class="mt-2 small text-muted italic">BST Aidan - Biểu tượng của sự tinh khiết</p>
                              <a href="#" class="btn-promo">Khám phá ngay</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item me-lg-3">
                    <a class="nav-link" href="about.html">About Us</a>
                  </li>
                </ul>
    
                <!-- Search box that triggers the overlay -->
                <div class="d-flex search-box-nav" role="search" onclick="openFullscreenSearch()" style="cursor: pointer;">
                  <input class="form-control search-input" type="search" placeholder="Tìm sản phẩm..." aria-label="Search" readonly>
                  <button class="btn btn-search" type="button" aria-label="Mở tìm kiếm"><i class="fas fa-search"></i></button>
                </div>
              </div>
    
              <div class="nav-icons d-flex align-items-center">
                <a href="login.html" class="icon-link" id="userIcon" style="text-decoration: none; color: inherit; cursor: pointer;"><i class="fas fa-user"></i></a>
                <div class="cart-dropdown-wrapper ms-4">
                  <button class="icon-link position-relative" id="cartBtn" style="background: none; border: none; color: inherit; cursor: pointer;" onclick="window.location.href='Cart.html'"><i class="fas fa-shopping-cart"></i><span class="badge-cart" id="cart-count">0</span></button>
                  <div class="cart-dropdown-menu" id="cartDropdown">
                    <div class="cart-dropdown-header">
                      <h6 class="fw-bold mb-0"><i class="fas fa-shopping-bag me-2"></i>GIỎ HÀNG</h6>
                    </div>
                    <div class="cart-dropdown-body" id="cart-dropdown-items">
                      <p class="text-center text-muted py-3 small">Giỏ hàng đang trống</p>
                    </div>
                    <div class="cart-dropdown-footer">
                      <div class="d-flex justify-content-between mb-3">
                        <span class="fw-bold">TỔNG:</span>
                        <span id="cart-dropdown-total" class="fw-bold text-danger">0đ</span>
                      </div>
                      <button class="btn btn-dark w-100 py-2 fw-bold btn-sm" onclick="window.location.href='checkout.html'">THANH TOÁN</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        `;

        // Logic tự động set class "active" cho Menu hiện tại
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = this.querySelectorAll('.nav-links .nav-link');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });

        const productPages = ['TrungBaySP.html', 'DaQuy.html', 'VangBac.html', 'TrangSuc.html', 'PhongThuy.html', 'PhuKien.html', 'detail.html'];
        if (productPages.includes(currentPath)) {
            const productNav = this.querySelector('a[href="TrungBaySP.html"].dropdown-toggle');
            if (productNav) {
                productNav.classList.add('active');
            }
        }

        // Kiểm tra và hiển thị tên User nếu đã đăng nhập
        const userIcon = this.querySelector('#userIcon');
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && userIcon) {
            userIcon.innerHTML = `<span style="font-size: 0.9rem; font-weight: bold; text-transform: none;">${currentUser.username}</span> <i class="fas fa-sign-out-alt ms-1" title="Đăng xuất"></i>`;
            userIcon.href = "javascript:void(0)";
            userIcon.addEventListener('click', (e) => {
                e.preventDefault();
                if (confirm('Bạn chắc chắn muốn đăng xuất?')) {
                    localStorage.removeItem('currentUser');
                    window.location.reload(); // Reload lại trang hiện tại sau khi đăng xuất
                }
            });
        }
    }
}

const setting = JSON.parse(localStorage.getItem('setting'));

class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="main-footer">
          <div class="footer-container">
            <div class="footer-column branding">
              <a href="#" class="footer-logo">
                <img src="./assets/img/ItemTrangChu(1)/DreamCloud (10).png" alt="Logo" class="footer-logo-img" />
                JADE<span>CHAMBER</span>
              </a>
              <p><i class="fas fa-phone"></i> ${setting?.phoneNumber || '0336.xxx.xxx'} (Chính)</p>
              <p><i class="fas fa-envelope"></i> ${setting?.contactEmail || 'Contact@jadechamber.vn'}</p>
              <p><i class="fas fa-map-marker-alt"></i> ${setting?.address || '120 Yên Lãng, Đống Đa, Hà Nội'}</p>
            </div>
            <div class="footer-column">
              <h3>DỊCH VỤ KHÁCH HÀNG</h3>
              <ul>
                <li><a href="#">Điều khoản và điều kiện</a></li>
                <li><a href="#">Chính sách trả hàng</a></li>
                <li><a href="#">Chính sách giao hàng</a></li>
                <li><a href="#">Chính sách quyền riêng tư</a></li>
              </ul>
            </div>
            <div class="footer-column">
              <h3>CẨM NANG SỬ DỤNG</h3>
              <ul>
                <li><a href="#">Tại sao nên chọn đá quý?</a></li>
                <li><a href="#">Cách làm trắng bạc tại nhà</a></li>
                <li><a href="#">Phân biệt các loại đá S925</a></li>
                <li><a href="#">Bảo quản trang sức bền lâu</a></li>
              </ul>
            </div>
            <div class="footer-column feedback">
              <h3>Ý KIẾN ĐÓNG GÓP</h3>
              <p>Jade Chamber luôn mong nhận được ý kiến từ bạn để nâng cao dịch vụ.</p>
              <button class="btn-feedback">GỬI Ý KIẾN</button>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2026 JADE CHAMBER. All rights reserved. Hệ thống quản lý nội bộ - CMC University.</p>
          </div>
        </footer>
        `;
    }
}

class AppGlobals extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <a href="https://m.me/yourprofile" target="_blank" class="contact-messenger-wrapper" aria-label="Chat with us">
          <button class="messenger-btn">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.896 1.428 5.48 3.663 7.19V22l3.449-1.893c.92.256 1.895.393 2.888.393 5.523 0 10-4.145 10-9.257C22 6.145 17.523 2 12 2zm1.076 12.476l-2.614-2.79-5.101 2.79 5.614-5.952 2.676 2.79 5.039-2.79-5.614 5.952z" />
            </svg>
          </button>
        </a>
        `;
    }
}

class AppBreadcrumb extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="breadcrumb-wrapper">
            <div class="container-fluid px-lg-5">
                <nav aria-label="breadcrumb" class="py-3">
                    <ol class="breadcrumb mb-0" id="dynamic-breadcrumb"></ol>
                </nav>
            </div>
        </div>
        `;
    }
}

customElements.define('app-header', AppHeader);
customElements.define('app-footer', AppFooter);
customElements.define('app-globals', AppGlobals);
customElements.define('app-breadcrumb', AppBreadcrumb);

function initSearchOverlay() {
    // Tránh inject nhiều lần nếu script bị gọi trùng
    if (document.getElementById("search-overlay-fullscreen")) return;

    // 1. Tạo và chèn CSS trực tiếp qua JS
    const style = document.createElement('style');
    style.innerHTML = `
        .search-overlay-fullscreen {
            height: 100%;
            width: 100%;
            display: none;
            position: fixed;
            z-index: 2050;
            top: 0;
            left: 0;
            background-color: rgba(0, 31, 63, 0.7);
            backdrop-filter: blur(5px);
            overflow-x: hidden;
            justify-content: center;
            align-items: flex-start;
            padding-top: 10vh;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .search-overlay-fullscreen.open {
            display: flex;
            opacity: 1;
        }
        .search-overlay-box {
            width: 90%;
            max-width: 800px;
            background: #fff;
            border-radius: 16px;
            padding: 30px;
            position: relative;
            transform: translateY(-30px);
            opacity: 0;
            transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
            transition-delay: 0.1s;
            box-shadow: 0 20px 50px rgba(0,0,0,0.2);
        }
        .search-overlay-fullscreen.open .search-overlay-box {
            transform: translateY(0);
            opacity: 1;
        }
        .search-overlay-fullscreen > .closebtn {
            position: absolute;
            top: 30px;
            right: 40px;
            font-size: 40px;
            cursor: pointer;
            color: rgba(255, 255, 255, 0.7);
            background: none;
            border: none;
            transition: 0.3s;
            padding: 0;
            line-height: 1;
        }
        .search-overlay-fullscreen > .closebtn:hover {
            color: #fff;
            transform: scale(1.1);
        }
        .search-input-wrapper {
            display: flex;
            align-items: center;
            border: 2px solid #eee;
            border-radius: 50px;
            background: #fff;
            transition: 0.3s;
            margin-bottom: 25px;
            overflow: hidden;
        }
        .search-input-wrapper:focus-within {
            border-color: #D4AF37;
            box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.1);
        }
        .btn-search-icon {
            background: none;
            border: none;
            color: #999;
            font-size: 1.2rem;
            padding: 15px 15px 15px 25px;
            cursor: pointer;
            transition: 0.3s;
        }
        .btn-search-icon:hover { color: #D4AF37; }
        .search-input-wrapper input {
            flex-grow: 1;
            padding: 15px 10px;
            border: none;
            background: transparent;
            font-size: 1.1rem;
            color: #001f3f;
            outline: none;
            min-width: 0;
        }
        .search-input-wrapper input::placeholder {
            color: #aaa;
        }
        .btn-clear-icon {
            background: none;
            border: none;
            color: #ccc;
            font-size: 1.2rem;
            padding: 15px 25px 15px 10px;
            cursor: pointer;
            transition: 0.3s;
        }
        .btn-clear-icon:hover { color: #d42222; }
        
        /* Suggestions */
        .search-suggestions-container {
            display: flex;
            gap: 40px;
            text-align: left;
        }
        .suggestion-col {
            flex: 1;
        }
        .suggestion-col h4 {
            font-size: 1rem;
            font-weight: bold;
            color: #001f3f;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .suggestion-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .suggestion-tags span, .suggestion-tags a {
            background: #f5f5f5;
            color: #555;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            cursor: pointer;
            transition: 0.2s;
            border: 1px solid transparent;
            text-decoration: none;
        }
        .suggestion-tags:not(.readonly-tags) span:hover, .suggestion-tags a:hover {
            background: #fffbf0;
            color: #D4AF37;
            border-color: #D4AF37;
        }
        .readonly-tags span {
            cursor: default;
            background-color: #f8f9fa;
            color: #6c757d;
        }
        /* Live Search Results Styles */
        .overlay-search-results {
            display: none;
            text-align: left;
            max-height: 350px;
            overflow-y: auto;
        }
        .overlay-search-results.show {
            display: block;
        }
        .overlay-result-item {
            display: flex;
            align-items: center;
            padding: 12px 15px;
            text-decoration: none;
            color: #001f3f;
            border-radius: 8px;
            transition: 0.2s;
            margin-bottom: 5px;
        }
        .overlay-result-item:hover {
            background: #f8f9fa;
            transform: translateX(5px);
        }
        .overlay-result-item img {
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 6px;
            margin-right: 15px;
            border: 1px solid #eee;
        }
        .overlay-result-info {
            flex-grow: 1;
        }
        .overlay-result-info h6 {
            margin: 0 0 4px 0;
            font-size: 0.95rem;
            font-weight: bold;
            color: #001f3f;
        }
        .overlay-result-info p {
            margin: 0;
            color: #d42222;
            font-size: 0.9rem;
            font-weight: bold;
        }
        .overlay-result-view-all {
            display: block;
            text-align: center;
            padding: 12px;
            background: #fffbf0;
            color: #D4AF37;
            font-weight: bold;
            text-decoration: none;
            border-radius: 8px;
            margin-top: 10px;
            transition: 0.2s;
        }
        .overlay-result-view-all:hover {
            background: #D4AF37;
            color: #fff;
        }
        
        .overlay-search-results::-webkit-scrollbar { width: 6px; }
        .overlay-search-results::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
        .overlay-search-results::-webkit-scrollbar-thumb { background: #ccc; border-radius: 10px; }
        .overlay-search-results::-webkit-scrollbar-thumb:hover { background: #D4AF37; }
        
        @media (max-width: 768px) {
            .search-overlay-fullscreen > .closebtn {
                top: 15px;
                right: 20px;
                font-size: 30px;
            }
            .search-suggestions-container { flex-direction: column; gap: 20px; }
            .search-overlay-box { padding: 20px; }
        }
    `;
    document.head.appendChild(style);

    // 2. Tạo và chèn cấu trúc HTML
    const overlayDiv = document.createElement('div');
    overlayDiv.id = "search-overlay-fullscreen";
    overlayDiv.className = "search-overlay-fullscreen";
    overlayDiv.innerHTML = `
        <button class="closebtn" onclick="closeFullscreenSearch()" title="Đóng tìm kiếm"><i class="fas fa-times"></i></button>
        <div class="search-overlay-box">
            <form id="fullscreen-search-form" action="#" method="get">
                <div class="search-input-wrapper">
                    <button type="submit" class="btn-search-icon"><i class="fa fa-search"></i></button>
                    <input type="text" id="fullscreen-search-input" placeholder="Tìm kiếm đá quý, vàng bạc, trang sức..." name="q" autocomplete="off">
                    <button type="button" class="btn-clear-icon" id="fullscreen-search-clear" style="display: none;" title="Xóa tìm kiếm"><i class="fas fa-times-circle"></i></button>
                </div>
            </form>

            <div id="search-suggestions-container" class="search-suggestions-container">
                <div class="suggestion-col">
                    <h4><i class="fas fa-fire text-danger"></i> Top tìm kiếm</h4>
                    <div class="suggestion-tags">
                        <span onclick="window.setSearchValue('Nhẫn kim cương', event)">Nhẫn kim cương</span>
                        <span onclick="window.setSearchValue('Dây chuyền vàng', event)">Dây chuyền vàng</span>
                        <span onclick="window.setSearchValue('Bông tai', event)">Bông tai</span>
                        <span onclick="window.setSearchValue('Đá Sapphire', event)">Đá Sapphire</span>
                        <span onclick="window.setSearchValue('Lắc tay bạc', event)">Lắc tay bạc</span>
                    </div>
                </div>
                <div class="suggestion-col">
                    <h4><i class="fas fa-bolt text-warning"></i> Dịch vụ hot</h4>
                    <div class="suggestion-tags readonly-tags">
                        <span>Trả góp 0%</span>
                        <span>Giao hàng 3h</span>
                        <span>Thu đổi 48h</span>
                        <span>Làm sạch miễn phí</span>
                    </div>
                </div>
            </div>

            <!-- Khung kết quả Live Search -->
            <div id="overlay-search-results" class="overlay-search-results"></div>
        </div>
    `;
    document.body.appendChild(overlayDiv);

    // 3. Logic xử lý tìm kiếm
    const form = document.getElementById('fullscreen-search-form');
    const input = document.getElementById('fullscreen-search-input');
    const resultsContainer = document.getElementById('overlay-search-results');
    const suggestionsContainer = document.getElementById('search-suggestions-container');
    const clearBtn = document.getElementById('fullscreen-search-clear');

    // Hàm xử lý Live Search (Tìm kiếm thời gian thực)
    function performLiveSearch() {
        const query = input.value.trim().toLowerCase();
        
        if (query.length > 0) {
            if (clearBtn) clearBtn.style.display = 'block'; // Hiện nút xóa khi có chữ
            suggestionsContainer.style.display = 'none'; // Ẩn gợi ý mặc định

            if (typeof gemProducts !== 'undefined') {
                let filtered = gemProducts.filter(p => p.name.toLowerCase().includes(query));
                
                if (filtered.length > 0) {
                    const topResults = filtered.slice(0, 4); // Lấy 4 kết quả đầu tiên
                    let html = topResults.map(p => `
                        <a href="detail.html?id=${p.id}" class="overlay-result-item">
                            <img src="${p.imgMain}" alt="${p.name}">
                            <div class="overlay-result-info">
                                <h6>${p.name}</h6>
                                <p>${p.price ? p.price.toLocaleString() + 'đ' : 'Liên hệ cửa hàng'}</p>
                            </div>
                        </a>
                    `).join('');
                    
                    resultsContainer.innerHTML = html;
                    resultsContainer.classList.add('show');
                } else {
                    resultsContainer.innerHTML = '<div class="p-4 text-center text-muted"><i class="fas fa-box-open fa-2x mb-3 opacity-50"></i><br>Không tìm thấy sản phẩm nào phù hợp.</div>';
                    resultsContainer.classList.add('show');
                }
            } else {
                // Dành cho trang không chứa products.js (ví dụ Index)
                resultsContainer.innerHTML = '<div class="p-4 text-center text-muted"><i class="fas fa-keyboard fa-2x mb-3 opacity-50"></i><br>Nhấn <strong>Enter</strong> để xem kết quả tìm kiếm...</div>';
                resultsContainer.classList.add('show');
            }
        } else {
            if (clearBtn) clearBtn.style.display = 'none'; // Ẩn nút xóa khi không có chữ
            resultsContainer.classList.remove('show');
            suggestionsContainer.style.display = 'flex'; // Hiện lại gợi ý mặc định
        }
    }

    // Gắn sự kiện khi gõ phím và khi thay đổi Danh mục
    input.addEventListener('input', performLiveSearch);

    // Ẩn kết quả khi click ra ngoài input
    document.addEventListener('click', function(e) {
        if (!input.contains(e.target) && !resultsContainer.contains(e.target)) {
            resultsContainer.classList.remove('show');
        }
    });

    // Xử lý Submit Form chuẩn xác
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = input.value.trim();
        
        if (query.trim() !== '') {
            closeFullscreenSearch(); // Đóng overlay
            
            if (typeof searchProducts === 'function' && document.getElementById('product-display-grid') && !window.location.pathname.includes('detail.html')) {
                searchProducts(query);
            } else {
                let url = `TrungBaySP.html?search=${encodeURIComponent(query)}`;
                window.location.href = url;
            }
        }
    });

    // Xử lý sự kiện click vào nút xóa
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            input.value = '';
            input.dispatchEvent(new Event('input')); // Cập nhật lại khung kết quả về trạng thái ban đầu
            input.focus(); // Tự động focus lại vào ô input để gõ tiếp
        });
    }

    // 4. Cho phép đóng khi nhấn phím ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            closeFullscreenSearch();
        }
    });

    // 5. Cho phép đóng khi click ra ngoài vùng tối
    overlayDiv.addEventListener('click', function(event) {
        if (event.target === overlayDiv) {
            closeFullscreenSearch();
        }
    });
}

// Hàm thiết lập giá trị tìm kiếm từ tag gợi ý
window.setSearchValue = function(val, event) {
    // Ngăn chặn sự kiện click lan ra ngoài (tới document) để tránh việc bảng kết quả bị ẩn đi ngay lập tức
    if (event) {
        event.stopPropagation();
    }
    const input = document.getElementById('fullscreen-search-input');
    if(input) {
        input.value = val;
        input.dispatchEvent(new Event('input')); // Kích hoạt Live Search
        input.focus();
    }
};

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", initSearchOverlay);
} else {
    initSearchOverlay();
}

// Hàm gọi từ nút ở Navbar để mở Overlay
window.openFullscreenSearch = function() {
    const overlay = document.getElementById("search-overlay-fullscreen");
    if (overlay) {
        overlay.classList.add("open");
        // Đợi 100ms cho animation chạy xong rồi auto focus vào ô nhập liệu
        setTimeout(() => {
            document.getElementById('fullscreen-search-input').focus();
        }, 100);
    }
};

// Hàm đóng Overlay
window.closeFullscreenSearch = function() {
    const overlay = document.getElementById("search-overlay-fullscreen");
    if (overlay) {
        overlay.classList.remove("open");
    }
};