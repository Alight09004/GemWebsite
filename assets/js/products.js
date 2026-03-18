const gemProducts = [
    {
        id: 1,
        name: "Nhẫn bạc nữ đính kim cương Moissanite Aidan",
        price: 2181000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb2.jpg",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb2-2.jpg.webp",
        category: ["DaQuy", "TrangSuc"],
        subCategory: ["KimCuong", "NhanDon"]
    },
    {
        id: 2,
        name: "Dây chuyền bạc nữ đính đá CZ cá tiên",
        price: 1824000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb1.jpg",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb1-2.jpg.webp",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Bac", "DayChuyen"]
    },
    {
        id: 3,
        name: "Bông tai Vàng trắng 41,6% (10K) đính đá",
        price: 13070000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gbxmxmw060874-bong-tai-vang-10k-dinh-da-ecz-pnj-1.png",
        imgHover: "./assets/img/ItemTrungBaySP/id3-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["VangTrang", "BongTai"]
    },
    {
        id: 4,
        name: "Lắc tay Vàng 58,5% (14K)",
        price: 15370000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gl0000y060888-lac-tay-vang-14k-pnj-1.png",
        imgHover: "./assets/img/ItemTrungBaySP/id4-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Vang18K", "LacTay"]
    },
    {
        id: 5,
        name: "Lắc tay Vàng trắng Ý 75% (18K)",
        price: 15892000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gl0000w001534-lac-tay-vang-trang-y-18k-pnj-1.png",
        imgHover: "./assets/img/ItemTrungBaySP/id5-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["VangTrang", "LacTay", "Vang18K"]
    },
    {
        id: 6,
        name: "Bông tai Kim cương Vàng trắng 58,5% (14K)",
        price: 46200000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gbdd00w060198-bong-tai-kim-cuong-vang-trang-14k-pnj-1.png",
        imgHover: "./assets/img/ItemTrungBaySP/id6-hover.jpg",
        category: ["DaQuy", "TrangSuc"],
        subCategory: ["KimCuong", "BongTai"]
    },
    {
        id: 7,
        name: "Nhẫn Kim cương Vàng trắng 58,5% (14K)",
        price: 34620000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gndd00w060464-nhan-kim-cuong-vang-trang-14k-pnj-1.png",
        imgHover: "./assets/img/ItemTrungBaySP/id7-hover.jpg",
        category: ["DaQuy", "TrangSuc"],
        subCategory: ["KimCuong", "NhanDon"]
    },
    {
        id: 8,
        name: "Mặt dây chuyền Vàng trắng 58,5% (14K) đính đá Sapphire",
        price: 8740000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gmsp00w000028-mat-day-chuyen-vang-14k-dinh-da-sapphire-pnj-1.png",
        imgHover: "./assets/img/ItemTrungBaySP/id8-hover.jpg",
        category: ["DaQuy", "TrangSuc"],
        subCategory: ["Sapphire", "DayChuyen"]
    },
    {
        id: 9,
        name: "Mặt dây chuyền Vàng 75% (18K) đính Ngọc trai Southsea",
        price: 24610000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gmpsddc060001-mat-day-chuyen-vang-dinh-ngoc-trai-southsea-pnj-1.png",
        imgHover: "./assets/img/ItemTrungBaySP/id9-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Vang18K", "DayChuyen"]
    },
    {
        id: 10,
        name: "Nhẫn Vàng trắng 58,5% (14K) đính đá",
        price: 10551000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gnxmxmw005643-nhan-vang-14k-dinh-da-ecz-pnj-1.png",
        imgHover: "./assets/img/ItemTrungBaySP/id10-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["VangTrang", "NhanDon"]
    },
    {
        id: 11,
        name: "Vòng tay bạc nữ đá Chalcedony Chrysoprase cỏ 4 lá",
        price: 7615000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb3.jpg",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb3-2.jpg.webp",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Bac", "LacTay"]
    },
    {
        id: 12,
        name: "Bông tai bạc Ý S925 nữ mạ bạch kim đính đá CZ hình trái tim",
        price: 1619000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb4.jpeg",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb4-2.jpg.webp",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Bac", "BongTai"]
    },
    {
        id: 13,
        name: "Lắc tay bạc nữ đính pha lê Swarovski trái tim của biển",
        price: 1967000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb5.jpg",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb5-2.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Bac", "LacTay"]
    },
    {
        id: 14,
        name: "Nhẫn nam Vàng trắng 41,6% (10K) đính đá ECZ MANCODE",
        price: 20754000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb6.png",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb6-2.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["VangTrang", "NhanDon"]
    },
    {
        id: 15,
        name: "Nhẫn Vàng 75% (18K) PNJ",
        price: 4656000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb7.png",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb7-2.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Vang18K", "NhanDon"]
    },
    {
        id: 16,
        name: "Lắc tay Bạc PNJSilver",
        price: 1255000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb8.png",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb8-2.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Bac", "LacTay"]
    },
    {
        id: 17,
        name: "Vòng tay Vàng hồng 58,5% (14K) Đính đá Sapphire",
        price: 43785000,
        imgMain: "./assets/img/ItemTrungBaySP/id17.png",
        imgHover: "./assets/img/ItemTrungBaySP/id17-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Sapphire", "VangHong", "LacTay"]
    },
    {
        id: 18,
        name: "Nhẫn Vàng trắng 58,5% (14K) Đính đá Sapphire ",
        price: 40623000,
        imgMain: "./assets/img/ItemTrungBaySP/id18.png",
        imgHover: "./assets/img/ItemTrungBaySP/id18-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Sapphire", "VangTrang", "NhanDon"]
    },
    {
        id: 19,
        name: "Lắc tay bạc nữ đính đá Ruby hoa mặt trời Mia",
        price: 4033000,
        imgMain: "./assets/img/ItemTrungBaySP/id19.jpg",
        imgHover: "./assets/img/ItemTrungBaySP/id19-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Ruby", "Bac", "LacTay"]
    },
    {
        id: 20,
        name: "Bông tai Vàng 75% (18K) đính đá Ruby ",
        price: 11884000,
        imgMain: "./assets/img/ItemTrungBaySP/id20.png",
        imgHover: "./assets/img/ItemTrungBaySP/id20-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Ruby", "Vang18K", "BongTai"]
    },
    {
        id: 21,
        name: "Nhẫn Vàng 75% (18K) Đính đá Emerald",
        price: 90410000,
        imgMain: "./assets/img/ItemTrungBaySP/id21.png",
        imgHover: "./assets/img/ItemTrungBaySP/id21-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Emerald", "Vang18K", "NhanDon"]
    },
    {
        id: 22,
        name: "Nhẫn Vàng trắng 58,5% (14K) đính đá Emerald",
        price: 149916000,
        imgMain: "./assets/img/ItemTrungBaySP/id22.png",
        imgHover: "./assets/img/ItemTrungBaySP/id22-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Emerald", "VangTrang", "NhanDon"]
    },
    {
        id: 23,
        name: "Nhẫn Vàng trắng 58,5% (14K) đính đá Emerald Disney",
        price: 276699000,
        imgMain: "./assets/img/ItemTrungBaySP/id23.png",
        imgHover: "./assets/img/ItemTrungBaySP/id23-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Emerald", "VangTrang", "NhanDon"]
    },
    {
        id: 24,
        name: "Bông tai Vàng trắng 58,5% (14K) Đính đá Topaz",
        price: 7992000,
        imgMain: "./assets/img/ItemTrungBaySP/id24.png",
        imgHover: "./assets/img/ItemTrungBaySP/id24-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Topaz", "VangTrang", "BongTai"]
    },
    {
        id: 25,
        name: "Nhẫn Vàng trắng 58,5% (14K) đính đá Topaz ",
        price: 11489000,
        imgMain: "./assets/img/ItemTrungBaySP/id25.png",
        imgHover: "./assets/img/ItemTrungBaySP/id25-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Topaz", "VangTrang", "NhanDon"]
    },
    {
        id: 26,
        name: "Cài áo Vàng trắng 58,5% (14K) Đính đá Topaz Masterpiece",
        price: 70480000,
        imgMain: "./assets/img/ItemTrungBaySP/id26.png",
        imgHover: "./assets/img/ItemTrungBaySP/id26-hover.jpg",
        category: ["DaQuy", "VangBac"],
        subCategory: ["Topaz", "VangTrang"]
    },
    {
        id: 27,
        name: "Nhẫn Vàng trắng 58,5% (14K) Đính đá Topaz",
        price: 7865000,
        imgMain: "./assets/img/ItemTrungBaySP/id27.png",
        imgHover: "./assets/img/ItemTrungBaySP/id27-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Topaz", "VangTrang", "NhanDon"]
    },
    {
        id: 28,
        name: "Cặp nhẫn cưới Bạch kim đính Kim Cương PNJ True Love",
        price: 40185574,
        imgMain: "./assets/img/ItemTrungBaySP/id28.png",
        imgHover: "./assets/img/ItemTrungBaySP/id28-hover.jpg",
        category: "TrangSuc",
        subCategory: "NhanCuoi"
    },
    {
        id: 29,
        name: "Tượng Thiên Mã Đăng Hoa Vàng 99,9% (24K)",
        price: 199000000,
        imgMain: "./assets/img/ItemTrungBaySP/id29.png",
        imgHover: "./assets/img/ItemTrungBaySP/id29-hover.jpg",
        category: "VangBac",
        subCategory: "Vang24K"
    },
    {
        id: 30,
        name: "Vàng mini Thỏi Vàng 0.5 chỉ 99,99% PNJ Tiểu Lộc Đại Phát",
        price: null,
        imgMain: "./assets/img/ItemTrungBaySP/id30.png",
        imgHover: "./assets/img/ItemTrungBaySP/id30-hover.jpg",
        category: "VangBac",
        subCategory: "Vang24K"
    },
    {
        id: 31,
        name: "Bộ Tượng Long Phụng Giao Hòa Vàng 99,9% (24K) ~ 9.9 chỉ",
        price: 239000000,
        imgMain: "./assets/img/ItemTrungBaySP/id31.png",
        imgHover: "./assets/img/ItemTrungBaySP/id31-hover.jpg",
        category: "VangBac",
        subCategory: "Vang24K"
    },
    {
        id: 32,
        name: "Bông tai cưới Vàng 99,9% (24K) Trầu Cau",
        price: 35276000,
        imgMain: "./assets/img/ItemTrungBaySP/id32.png",
        imgHover: "./assets/img/ItemTrungBaySP/id32-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Vang24K", "BongTai"]
    },
    {
        id: 33,
        name: "Nhẫn cưới Vàng 99,9% (24K)",
        price: 17439000,
        imgMain: "./assets/img/ItemTrungBaySP/ìd33.png",
        imgHover: "./assets/img/ItemTrungBaySP/id33-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Vang24K", "NhanCuoi"]
    },
    {
        id: 34,
        name: "Nhẫn Vàng hồng 58,5% (14K) đính đá Sapphire Disney Sleeping Beauty",
        price: 23852000,
        imgMain: "./assets/img/ItemTrungBaySP/id34.png",
        imgHover: "./assets/img/ItemTrungBaySP/id34-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["VangHong", "NhanDon"]
    },
    {
        id: 35,
        name: "Cặp nhẫn cưới Kim cương Vàng hồng 75% (18K) Tình Hồng",
        price: 34816000,
        imgMain: "./assets/img/ItemTrungBaySP/id35.png",
        imgHover: "./assets/img/ItemTrungBaySP/id35-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["VangHong", "NhanCuoi"]
    },

    
];


const categoryNames = { 'All': 'Tất cả sản phẩm', 'KimCuong': 'Kim cương', 'VangTrang': 'Vàng trắng', 'Vang18K': 'Vàng Ý 18K', 'Vang24K': 'Vàng 24K', 'VangHong': 'Vàng hồng', 'Sapphire': 'Sapphire', 'Ruby': 'Ruby', 'Emerald': 'Emerald', 'Topaz': 'Topaz', 'Bac': 'Bạc S925', 'NhanDon': 'Nhẫn đơn', 'DayChuyen': 'Dây chuyền', 'BongTai': 'Bông tai', 'LacTay': 'Lắc tay', 'VongTay': 'Vòng tay', 'NhanCuoi': 'Nhẫn cưới' };

let currentDisplayList = [];

function renderProducts(data) {
    const container = document.getElementById('product-display-grid');
    if (!container) return;
    container.innerHTML = data.map(product => `
        <div class="col-lg-3 col-md-6 mb-4">
            <a href="detail.html?id=${product.id}" class="product-card-v2-link">
                <div class="product-card-v2">
                    <div class="product-img-box">
                        <img src="${product.imgMain}" class="img-main" />
                        <img src="${product.imgHover}" class="img-hover"/>
                    </div>
                    <div class="product-info">
                        <h3 class="p-name">${product.name}</h3>
                        <p class="p-price">${product.price ? product.price.toLocaleString() + 'đ' : '<i style="font-weight: normal;">Liên hệ cửa hàng</i>'}</p>
                    </div>
                </div>
            </a>
        </div>
    `).join('');
}


// --- HÀM 2: CẬP NHẬT BREADCRUMB ---
function updateBreadcrumb(label) {
    const breadcrumbList = document.getElementById('dynamic-breadcrumb');
    if (!breadcrumbList) return;

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    breadcrumbList.innerHTML = '';
    
    const createItem = (text, href, isActive, icon = null) => {
        const li = document.createElement('li');
        li.className = `breadcrumb-item ${isActive ? 'active' : ''}`;
        if (isActive) li.setAttribute('aria-current', 'page');
        
        let content = '';
        if (icon) content += `<i class="fas ${icon} me-1"></i>`;
        
        if (isActive) {
            content += `<span class="text-dark fw-bold">${text}</span>`;
            li.innerHTML = content;
        } else {
            li.innerHTML = `<a href="${href}" class="text-decoration-none text-muted">${content}${text}</a>`;
        }
        return li;
    };

    breadcrumbList.appendChild(createItem('Trang chủ', 'index.html', false, 'fa-home'));

    const pageConfig = {
        'DaQuy.html': { title: 'Đá quý', href: 'DaQuy.html' },
        'VangBac.html': { title: 'Vàng bạc', href: 'VangBac.html' },
        'TrangSuc.html': { title: 'Trang sức', href: 'TrangSuc.html' },
        'PhongThuy.html': { title: 'Phong thủy', href: 'PhongThuy.html' },
        'PhuKien.html': { title: 'Phụ kiện', href: 'PhuKien.html' }
    };

    const currentConfig = pageConfig[currentPage];

    if (currentConfig) {
        breadcrumbList.appendChild(createItem('Sản phẩm', 'TrungBaySP.html', false));
        if (label === 'Tất cả sản phẩm' || label === currentConfig.title) {
            breadcrumbList.appendChild(createItem(currentConfig.title, currentConfig.href, true));
        } else {
            breadcrumbList.appendChild(createItem(currentConfig.title, currentConfig.href, false));
            breadcrumbList.appendChild(createItem(label, '#', true));
        }
    } else {
        if (label === 'Tất cả sản phẩm' || label === 'Sản phẩm') {
            breadcrumbList.appendChild(createItem('Sản phẩm', 'TrungBaySP.html', true));
        } else {
            breadcrumbList.appendChild(createItem('Sản phẩm', 'TrungBaySP.html', false));
            breadcrumbList.appendChild(createItem(label, '#', true));
        }
    }
}

// --- HÀM 3: LỌC THEO DANH MỤC ---
function filterCat(catKey) {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    let filtered = gemProducts;

    const pageCategoryMap = {
        'DaQuy.html': 'DaQuy',
        'VangBac.html': 'VangBac',
        'TrangSuc.html': 'TrangSuc',
        'PhongThuy.html': 'PhongThuy',
        'PhuKien.html': 'PhuKien'
    };

    const mainCategory = pageCategoryMap[currentPage];

    if (mainCategory) {
        // Lọc sản phẩm theo danh mục lớn của trang hiện tại
        filtered = gemProducts.filter(p => p.category && p.category.includes(mainCategory));
        // Nếu có chọn subCategory thì lọc tiếp
        if (catKey !== 'All') {
            filtered = filtered.filter(p => p.subCategory && p.subCategory.includes(catKey));
        }
    } else {
        // Mặc định ở trang Sản phẩm chung
        filtered = catKey === 'All' ? gemProducts : gemProducts.filter(p => (p.category && p.category.includes(catKey)) || (p.subCategory && p.subCategory.includes(catKey)));
    }

    currentDisplayList = filtered;
    applySortAndRender();
    updateBreadcrumb(categoryNames[catKey] || 'Tất cả sản phẩm');
}

// --- HÀM XỬ LÝ SẮP XẾP ---
function applySortAndRender() {
    const sortSelect = document.getElementById('price-sort-select');
    const sortValue = sortSelect ? sortSelect.value : 'default';
    
    let sorted = [...currentDisplayList];
    if (sortValue === 'asc') {
        sorted.sort((a, b) => (a.price || Infinity) - (b.price || Infinity));
    } else if (sortValue === 'desc') {
        sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
    }
    
    renderProducts(sorted);
}

// --- HÀM 4: TÌM KIẾM NHANH ---
function searchProducts(query) {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const pageCategoryMap = {
        'DaQuy.html': 'DaQuy',
        'VangBac.html': 'VangBac',
        'TrangSuc.html': 'TrangSuc',
        'PhongThuy.html': 'PhongThuy',
        'PhuKien.html': 'PhuKien'
    };
    
    const mainCategory = pageCategoryMap[currentPage];
    
    let filtered = gemProducts.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase())
    );
    
    if (mainCategory) {
        filtered = filtered.filter(p => p.category && p.category.includes(mainCategory));
    }
    
    currentDisplayList = filtered;
    applySortAndRender();
    updateBreadcrumb(`Kết quả cho: "${query}"`);
}

// --- KHỞI CHẠY KHI TRANG TẢI XONG ---
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const searchQuery = urlParams.get('search');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const validPages = ['DaQuy.html', 'VangBac.html', 'TrangSuc.html', 'PhongThuy.html', 'PhuKien.html'];

    if (searchQuery) {
        searchProducts(searchQuery);
    } else if (category && categoryNames[category]) {
        filterCat(category);
    } else {
        if (validPages.includes(currentPage)) {
            filterCat('All');
        } else {
            currentDisplayList = gemProducts;
            applySortAndRender();
            updateBreadcrumb('Tất cả sản phẩm');
        }
    }

    // Gắn sự kiện cho ô tìm kiếm trong Navbar
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.btn-search');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            searchProducts(searchInput.value);
        });
    }
});


// Dữ liệu nội dung các Tab (Dòng hàng nổi bật)
const tabData = {
    'kim-cuong': {
        title: 'Trang Sức Kim Cương',
        desc: 'Xuân rạng rỡ sắc xuân mới hàng mẫu kim cương mới khắc họa tinh hoa mùa mới qua đường nét hoa – lá mềm mại. Với đa dạng mẫu mã và khung giá từ tối giản đến cầu kỳ, mỗi sản phẩm đều được chế tác tỉ mỉ, mang đến trải nghiệm đẳng cấp khách hàng yêu thích sự sang trọng ngày đầu năm. Thần Tài – Đón lộc tài với thiết kế mới dòng sản phẩm kim cương cho ngày Thần Tài nổi bật với họa tiết kim tiền tròn đầy, sắc sảo. Từng sản phẩm được chế tác tỉ mỉ giúp khách hàng dễ dàng sở hữu món trang sức đẳng cấp để khởi đầu năm mới thuận lợi, vạn sự như ý.',
        img: './assets/img/ItemTrungBaySP/dhnb-trang-suc-kim-cuong.jpg'
    },
    'ngoc-trai': {
        title: 'Trang Sức Ngọc Trai',
        desc: 'Bộ sưu tập ngọc trai là lời thì thầm ngọt ngào của mùa xuân, nơi ánh ngọc trong trẻo hòa quyện cùng sắc xuân tươi mới. Mỗi thiết kế tôn vinh vẻ đẹp cuốn hút dịu dàng, giúp nàng tỏa sáng rạng rỡ với phong thái thanh lịch khó trộn lẫn. Được chế tác tỉ mỉ và tinh xảo, những tuyệt tác này không chỉ là trang sức mà còn là biểu tượng của sự thuần khiết, mang đến vẻ ngoài quý phái và sức sống rạng ngời cho phái đẹp.',
        img: './assets/img/ItemTrungBaySP/dhnb-trang-suc-ngoc-trai.jpg'
    },
    'day-chuyen': {
        title: 'Trang Sức Dây Chuyền',
        desc: 'Khẳng định đẳng cấp qua sự kết hợp độc đáo giữa phong cách long link, bamboo thanh mảnh và kỹ thuật khắc máy thế hệ mới trên nền vàng quý phái. Những đường xoắn lá bắt sáng rực rỡ phối cùng kết cấu dây tinh xảo giúp tôn vinh trọn vẹn vẻ đẹp của mặt dây chuyền đi kèm. Đây là lựa chọn hoàn mỹ mang lại tổng thể sang trọng, cuốn hút, giúp phái đẹp tỏa sáng rạng rỡ với phong thái thời thượng.',
        img: './assets/img/ItemTrungBaySP/dhnb-trang-suc-day-chuyen.jpg'
    },
    'da-mau': {
        title: 'Trang Sức Đá Màu',
        desc: 'Vẻ đẹp rực rỡ của sắc vàng với thiết kế phẳng hiện đại được thổi hồn vào từng chi tiết, gợi cảm hứng từ thiên nhiên và biểu tượng tình yêu. Linh hoạt trong cách sử dụng, bạn có thể đeo như mặt dây chuyền riêng biệt hoặc phối cùng vòng charm, tạo nên điểm nhấn cá tính và phong cách độc đáo cho riêng mình.',
        img: './assets/img/ItemTrungBaySP/dhnb-trang-suc-da-mau.jpg'
    },
    'bac': {
        title: 'Trang Sức Bạc',
        desc: 'Trang sức Bạc mới Xuân Thần Tài 2026 hội tụ nguồn năng lượng tích cực từ các biểu tượng may mắn: Hồ ly sắc sảo, Hoa đào rực rỡ, Cỏ bốn lá và Kim tiền thịnh vượng. Ứng dụng công nghệ CNC hiện đại, từng thiết kế hiện lên tinh xảo, trẻ trung và đầy dấu ấn riêng biệt. Đây là lựa chọn hoàn mỹ để thu hút tài lộc, hanh thông, mang lại vẻ đẹp thanh lịch và khởi đầu một năm mới ngập tràn phúc khí cho người sở hữu.',
        img: './assets/img/ItemTrungBaySP/dhnb-trang-suc-bac.jpg'
    },
    'y': {
        title: 'Trang Sức Ý',
        desc: 'Mùa xuân mở ra khởi đầu mới đầy sinh khí. Trang sức Ý, với kỹ thuật chế tác cao cấp và những đường chạm khắc tinh xảo, trở thành điểm nhấn thanh lịch cho phong cách đầu năm. Các thiết kế hoa mai, trái tim, kim tiền không chỉ tôn vinh vẻ đẹp tinh tế mà còn gửi gắm lời chúc hạnh phúc – viên mãn – thịnh vượng cho năm mới.',
        img: './assets/img/ItemTrungBaySP/dhnb-trang-suc-y.jpg'
    },
    'vo': {
        title: 'Trang Sức Vỏ',
        desc: 'Xuân thanh lịch và phá cách thiết kế mới dành cho dịp Xuân mang phong cách tối giản với bản đai mảnh thanh thoát, đính kết đá nhỏ dọc thân nhẫn tạo ánh sáng dịu dàng. Điểm nhấn là phần chân rế phá cách, cách điệu hiện đại từ họa tiết hoa lá, Thiên Nga và Ngựa như nâng niu viên kim cương chủ, khiến ánh sáng được phản chiếu trọn vẹn và nổi bật hơn. Chế tác tỉ mỉ với khung giá đa dạng, sản phẩm tôn vinh nét thanh lịch, đầy sức sống cho người sở hữu trong năm mới. Tuyên ngôn đẳng cấp các thiết kế mới cho phân khúc Premium thể hiện sự sang trọng qua size ổ lớn và kết cấu vững chắc, giúp tôn bật tối đa viên kim cương chủ. Từng chi tiết được hoàn thiện sắc sảo, mang lại tổng thể đẳng cấp và thời thượng. Với chế tác tỉ mỉ, đây là lựa chọn hoàn hảo cho những ai tìm kiếm sự nổi bật.',
        img: './assets/img/ItemTrungBaySP/dhnb-trang-suc-vo.jpg'
    }
};

function switchContent(key) {
    const data = tabData[key];
    if (!data) return;

    // 1. Cập nhật giao diện Nút (Active state)
    document.querySelectorAll('.btn-tab-item').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // 2. Cập nhật Ảnh với hiệu ứng mờ dần (Fade)
    const imgElement = document.getElementById('dynamic-tab-img');
    imgElement.style.opacity = 0;
    setTimeout(() => {
        imgElement.src = data.img;
        imgElement.style.opacity = 1;
    }, 200);

    // 3. Cập nhật Chữ
    document.getElementById('dynamic-tab-title').innerText = data.title;
    document.getElementById('dynamic-tab-desc').innerText = data.desc;
}