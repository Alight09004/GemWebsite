/**
 * Breadcrumb Management System
 * Tự động cập nhật breadcrumb dựa trên trang hiện tại
 */

document.addEventListener("DOMContentLoaded", function() {
    // Lấy tên file HTML hiện tại
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const urlParams = new URLSearchParams(window.location.search);
    
    // Bảng ánh xạ: tên file -> breadcrumb path
    const pageMap = {
        'index.html': {
            title: 'Trang chủ',
            breadcrumbs: [
                { label: 'Trang chủ', href: 'index.html', icon: 'fa-home', active: true }
            ]
        },
        'TrungBaySP.html': {
            title: 'Sản phẩm',
            breadcrumbs: [
                { label: 'Trang chủ', href: 'index.html', icon: 'fa-home', active: false },
                { label: 'Sản phẩm', href: 'TrungBaySP.html', active: true, icon: null }
            ]
        },
        'DaQuy.html': {
            title: 'Đá quý',
            breadcrumbs: [
                { label: 'Trang chủ', href: 'index.html', icon: 'fa-home', active: false },
                { label: 'Sản phẩm', href: 'TrungBaySP.html', icon: null, active: false },
                { label: 'Đá quý', href: 'DaQuy.html', active: true, icon: null }
            ]
        },
        'VangBac.html': {
            title: 'Vàng bạc',
            breadcrumbs: [
                { label: 'Trang chủ', href: 'index.html', icon: 'fa-home', active: false },
                { label: 'Sản phẩm', href: 'TrungBaySP.html', icon: null, active: false },
                { label: 'Vàng bạc', href: 'VangBac.html', active: true, icon: null }
            ]
        },
        'TrangSuc.html': {
            title: 'Trang sức',
            breadcrumbs: [
                { label: 'Trang chủ', href: 'index.html', icon: 'fa-home', active: false },
                { label: 'Sản phẩm', href: 'TrungBaySP.html', icon: null, active: false },
                { label: 'Trang sức', href: 'TrangSuc.html', active: true, icon: null }
            ]
        },
        'PhongThuy.html': {
            title: 'Phong thủy',
            breadcrumbs: [
                { label: 'Trang chủ', href: 'index.html', icon: 'fa-home', active: false },
                { label: 'Sản phẩm', href: 'TrungBaySP.html', icon: null, active: false },
                { label: 'Phong thủy', href: 'PhongThuy.html', active: true, icon: null }
            ]
        },
        'PhuKien.html': {
            title: 'Phụ kiện',
            breadcrumbs: [
                { label: 'Trang chủ', href: 'index.html', icon: 'fa-home', active: false },
                { label: 'Sản phẩm', href: 'TrungBaySP.html', icon: null, active: false },
                { label: 'Phụ kiện', href: 'PhuKien.html', active: true, icon: null }
            ]
        },
        'about.html': {
            title: 'About Us',
            breadcrumbs: [
                { label: 'Trang chủ', href: 'index.html', icon: 'fa-home', active: false },
                { label: 'About Us', href: 'about.html', active: true, icon: null }
            ]
        },
        'detail.html': {
            title: 'Chi tiết sản phẩm',
            breadcrumbs: [
                { label: 'Trang chủ', href: 'index.html', icon: 'fa-home', active: false },
                { label: 'Sản phẩm', href: 'TrungBaySP.html', icon: null, active: false },
                { label: 'Chi tiết sản phẩm', href: 'detail.html', active: true, icon: null }
            ]
        }
    };

    // Lấy breadcrumb của trang hiện tại
    const pageConfig = pageMap[currentPage];
    
    if (pageConfig) {
        // Lấy phần tử chứa breadcrumb
        let breadcrumbList = document.getElementById('dynamic-breadcrumb');
        
        // Nếu không có, tạo mới
        if (!breadcrumbList) {
            const wrapper = document.querySelector('.breadcrumb-wrapper');
            if (wrapper) {
                const nav = wrapper.querySelector('nav');
                if (!nav) {
                    wrapper.innerHTML = `
                        <div class="container-fluid px-lg-5">
                            <nav aria-label="breadcrumb" class="py-3">
                                <ol class="breadcrumb mb-0" id="dynamic-breadcrumb"></ol>
                            </nav>
                        </div>
                    `;
                } else if (!nav.innerHTML.includes('dynamic-breadcrumb')) {
                    nav.innerHTML = `<ol class="breadcrumb mb-0" id="dynamic-breadcrumb"></ol>`;
                }
            }
            breadcrumbList = document.getElementById('dynamic-breadcrumb');
        }

        // Xóa breadcrumb cũ
        if (breadcrumbList) {
            breadcrumbList.innerHTML = '';
            
            // Tạo breadcrumb mới
            pageConfig.breadcrumbs.forEach((item, index) => {
                const li = document.createElement('li');
                li.className = 'breadcrumb-item';
                
                if (item.active) {
                    li.classList.add('active');
                    li.setAttribute('aria-current', 'page');
                    if (item.icon) {
                        li.innerHTML = `<i class="fas ${item.icon} me-1"></i><span class="text-dark fw-bold">${item.label}</span>`;
                    } else {
                        li.innerHTML = `<span class="text-dark fw-bold">${item.label}</span>`;
                    }
                } else {
                    if (item.icon) {
                        li.innerHTML = `<a href="${item.href}" class="text-decoration-none text-muted"><i class="fas ${item.icon} me-1"></i>${item.label}</a>`;
                    } else {
                        li.innerHTML = `<a href="${item.href}" class="text-decoration-none text-muted">${item.label}</a>`;
                    }
                }
                
                breadcrumbList.appendChild(li);
            });
        }
        
        // Cập nhật title của trang
        document.title = 'JADE CHAMBER | ' + pageConfig.title;
    }

    // Xử lý breadcrumb động từ URL parameters (ví dụ: ?category=KimCuong)
    const category = urlParams.get('category');
    if (category && currentPage === 'DaQuy.html') {
        const categoryNames = {
            'KimCuong': 'Kim cương',
            'Sapphire': 'Sapphire',
            'Ruby': 'Ruby',
            'Emerald': 'Emerald',
            'Topaz': 'Topaz'
        };
        
        if (categoryNames[category]) {
            const breadcrumbList = document.getElementById('dynamic-breadcrumb');
            if (breadcrumbList) {
                // Thay đổi item active cuối cùng thành "Đá quý"
                const items = breadcrumbList.querySelectorAll('.breadcrumb-item.active');
                if (items.length > 0) {
                    const lastItem = items[items.length - 1];
                    lastItem.classList.remove('active');
                    lastItem.innerHTML = `<a href="DaQuy.html" class="text-decoration-none text-muted">Đá quý</a>`;
                }
                
                // Thêm category mới
                const newLi = document.createElement('li');
                newLi.className = 'breadcrumb-item active';
                newLi.setAttribute('aria-current', 'page');
                newLi.innerHTML = `<span class="text-dark fw-bold">${categoryNames[category]}</span>`;
                breadcrumbList.appendChild(newLi);
            }
        }
    }
});
