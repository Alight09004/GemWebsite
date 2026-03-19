/**
 * Breadcrumb Management System
 * Tự động cập nhật breadcrumb dựa trên trang hiện tại
 */

document.addEventListener("DOMContentLoaded", function() {
    // Lấy tên file HTML hiện tại
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const urlParams = new URLSearchParams(window.location.search);

    const categoryNames = {
        'KimCuong': 'Kim cương',
        'Sapphire': 'Sapphire',
        'Ruby': 'Ruby',
        'Emerald': 'Emerald',
        'Topaz': 'Topaz',
        'Vang24K': 'Vàng 24K',
        'Vang': 'Vàng',
        'Vang18K': 'Vàng Ý 18K',
        'Bac': 'Bạc S925',
        'VangTrang': 'Vàng trắng',
        'VangHong': 'Vàng hồng',
        'NhanDon': 'Nhẫn đơn',
        'DayChuyen': 'Dây chuyền',
        'BongTai': 'Bông tai',
        'LacTay': 'Lắc tay',
        'NhanCuoi': 'Nhẫn cưới',
        'VongTayTyHuu': 'Vòng tay tỳ hưu',
        'MatDayPhat': 'Mặt dây Phật',
        'DaTheoMenh': 'Đá theo mệnh',
        'CharmVang': 'Charm vàng',
        'HopTrangSuc': 'Hộp trang sức',
        'DungCuLamSach': 'Dụng cụ làm sạch',
        'KhanLauBac': 'Khăn lau bạc',
        'DayDeoThayThe': 'Dây đeo thay thế'
    };
    
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

    // Xử lý động cho trang detail.html
    if (currentPage === 'detail.html') {
        const productId = urlParams.get('id');
        if (productId && typeof gemProducts !== 'undefined') {
            const product = gemProducts.find(p => p.id == productId);
            if (product) {
                const pageCategoryMap = {
                    'DaQuy': { label: 'Đá quý', href: 'DaQuy.html' },
                    'VangBac': { label: 'Vàng bạc', href: 'VangBac.html' },
                    'TrangSuc': { label: 'Trang sức', href: 'TrangSuc.html' },
                    'PhongThuy': { label: 'Phong thủy', href: 'PhongThuy.html' },
                    'PhuKien': { label: 'Phụ kiện', href: 'PhuKien.html' }
                };

                let mainCat = Array.isArray(product.category) ? product.category[0] : product.category;
                let subCat = Array.isArray(product.subCategory) ? product.subCategory[0] : product.subCategory;

                // Bỏ đi mục "Chi tiết sản phẩm" mặc định
                pageMap['detail.html'].breadcrumbs.pop();

                if (mainCat && pageCategoryMap[mainCat]) {
                    pageMap['detail.html'].breadcrumbs.push({ label: pageCategoryMap[mainCat].label, href: pageCategoryMap[mainCat].href, active: false, icon: null });
                }
                if (subCat && categoryNames[subCat]) {
                    pageMap['detail.html'].breadcrumbs.push({ label: categoryNames[subCat], href: `${mainCat && pageCategoryMap[mainCat] ? pageCategoryMap[mainCat].href : 'TrungBaySP.html'}?category=${subCat}`, active: false, icon: null });
                }
                
                pageMap['detail.html'].breadcrumbs.push({ label: product.name, href: `detail.html?id=${product.id}`, active: true, icon: null });
                pageMap['detail.html'].title = product.name;
            }
        }
    }

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
    if (category && currentPage !== 'detail.html') {
        
        if (categoryNames[category]) {
            const breadcrumbList = document.getElementById('dynamic-breadcrumb');
            if (breadcrumbList) {
                // Thay đổi item active cuối cùng thành link về trang danh mục lớn
                const items = breadcrumbList.querySelectorAll('.breadcrumb-item.active');
                if (items.length > 0) {
                    const lastItem = items[items.length - 1];
                    const pageTitle = pageConfig ? pageConfig.title : lastItem.innerText.trim();
                    lastItem.classList.remove('active');
                    lastItem.innerHTML = `<a href="${currentPage}" class="text-decoration-none text-muted">${pageTitle}</a>`;
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
