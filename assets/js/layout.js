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
                              <li><a href="VangBac.html?category=Vang24K">Vàng 24K</a></li>
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
                              <li><a href="TrangSuc.html?category=LacTay">Lắc tay</a></li>
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
    
                <form class="d-flex search-box-nav" role="search" onsubmit="event.preventDefault(); window.openFullscreenSearch();">
                  <input class="form-control search-input" type="search" placeholder="Tìm sản phẩm..." aria-label="Search" onclick="window.openFullscreenSearch(); this.blur();" />
                  <button class="btn btn-search" type="button" onclick="window.openFullscreenSearch();"><i class="fas fa-search"></i></button>
                </form>
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

customElements.define('app-header', AppHeader);
customElements.define('app-footer', AppFooter);
customElements.define('app-globals', AppGlobals);