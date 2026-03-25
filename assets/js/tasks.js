let revenueChartInstance = null;
let topProductsChartInstance = null;
document.addEventListener("DOMContentLoaded", function () {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser || currentUser.role !== "admin") {
        alert("Bạn không có quyền truy cập trang này!");
        window.location.href = "index.html";
        return;
    }
    
    // Load settings & admin info
    loadSetting();
    
    const adminAccount = JSON.parse(localStorage.getItem("adminAccount"));
    if (adminAccount) {
        if (document.getElementById("adminUsserName")) document.getElementById("adminUsserName").value = adminAccount.username;
        if (document.getElementById("adminEmail")) document.getElementById("adminEmail").value = adminAccount.email;
    }

    // Initialize the product modal instance
    const productModalEl = document.getElementById('productModal');
    if (productModalEl) {
        productModal = new bootstrap.Modal(productModalEl);
    }
}); //huỷ đăng nhập khi phát hiện sai quyền truy cập

function showPage(page, element = null) {
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.add("d-none");
  });

  document.getElementById(page).classList.remove("d-none");

  if (element) {
    document.querySelectorAll('.sidebar .nav-link').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
  }

  if (page === 'dashboard') {
    renderDashboard();
  }
}

let users = JSON.parse(localStorage.getItem("users")) || [];
if (users.length < 5) {
    const mockUsers = [
        { id: 'usr_' + (Date.now() + 1), username: 'Nguyễn Văn An', email: 'nva@gmail.com', role: 'user' },
        { id: 'usr_' + (Date.now() + 2), username: 'Trần Thị Bình', email: 'ttb@gmail.com', role: 'user' },
        { id: 'usr_' + (Date.now() + 3), username: 'Lê Văn Cương', email: 'lvc@gmail.com', role: 'user' },
        { id: 'usr_' + (Date.now() + 4), username: 'Phạm Thị Dung', email: 'ptd@gmail.com', role: 'user' },
        { id: 'usr_' + (Date.now() + 5), username: 'Hoàng Văn Minh', email: 'hvm@gmail.com', role: 'user' },
        { id: 'usr_' + (Date.now() + 6), username: 'Vũ Thị Thùy Trâm', email: 'vttt@gmail.com', role: 'user' },
        { id: 'usr_' + (Date.now() + 7), username: 'Đặng Văn Giang', email: 'dvg@gmail.com', role: 'user' }
    ];
    users = [...users, ...mockUsers];
    localStorage.setItem("users", JSON.stringify(users));
}

let orders = JSON.parse(localStorage.getItem("orders")) || [];
if (orders.length < 5) {
    const nowMs = Date.now();
    const mockOrders = [
        { id: 'ORD' + (nowMs - 2 * 86400000), product: 'Nhẫn bạc nữ đính kim cương Moissanite Aidan', productName: 'Nhẫn bạc nữ đính kim cương Moissanite Aidan', price: 2181000 },
        { id: 'ORD' + (nowMs - 12 * 86400000), product: 'Dây chuyền bạc nữ đính đá CZ cá tiên', productName: 'Dây chuyền bạc nữ đính đá CZ cá tiên', price: 1824000 },
        { id: 'ORD' + (nowMs - 25 * 86400000), product: 'Bông tai Vàng trắng 41,6% (10K) đính đá', productName: 'Bông tai Vàng trắng 41,6% (10K) đính đá', price: 13070000 },
        { id: 'ORD' + (nowMs - 40 * 86400000), product: 'Lắc tay Vàng 58,5% (14K)', productName: 'Lắc tay Vàng 58,5% (14K)', price: 15370000 },
        { id: 'ORD' + (nowMs - 55 * 86400000), product: 'Bông tai Kim cương Vàng trắng 58,5% (14K)', productName: 'Bông tai Kim cương Vàng trắng 58,5% (14K)', price: 46200000 },
        { id: 'ORD' + (nowMs - 70 * 86400000), product: 'Nhẫn Kim cương Vàng trắng 58,5% (14K)', productName: 'Nhẫn Kim cương Vàng trắng 58,5% (14K)', price: 34620000 },
        { id: 'ORD' + (nowMs - 85 * 86400000), product: 'Mặt dây chuyền Vàng trắng 58,5% (14K) đính đá Sapphire', productName: 'Mặt dây chuyền Vàng trắng 58,5% (14K) đính đá Sapphire', price: 8740000 },
        { id: 'ORD' + (nowMs - 100 * 86400000), product: 'Mặt dây chuyền Vàng 75% (18K) đính Ngọc trai Southsea', productName: 'Mặt dây chuyền Vàng 75% (18K) đính Ngọc trai Southsea', price: 24610000 },
        { id: 'ORD' + (nowMs - 115 * 86400000), product: 'Nhẫn Vàng trắng 58,5% (14K) đính đá', productName: 'Nhẫn Vàng trắng 58,5% (14K) đính đá', price: 10551000 },
        { id: 'ORD' + (nowMs - 130 * 86400000), product: 'Vòng tay bạc nữ đá Chalcedony Chrysoprase cỏ 4 lá', productName: 'Vòng tay bạc nữ đá Chalcedony Chrysoprase cỏ 4 lá', price: 7615000 },
        { id: 'ORD' + (nowMs - 145 * 86400000), product: 'Nhẫn bạc nữ đính kim cương Moissanite Aidan', productName: 'Nhẫn bạc nữ đính kim cương Moissanite Aidan', price: 2181000 },
        { id: 'ORD' + (nowMs - 160 * 86400000), product: 'Dây chuyền bạc nữ đính đá CZ cá tiên', productName: 'Dây chuyền bạc nữ đính đá CZ cá tiên', price: 1824000 },
        { id: 'ORD' + (nowMs - 170 * 86400000), product: 'Nhẫn Kim cương Vàng trắng 58,5% (14K)', productName: 'Nhẫn Kim cương Vàng trắng 58,5% (14K)', price: 34620000 }
    ];
    orders = [...mockOrders, ...orders];
    // Sắp xếp đơn hàng theo thời gian giảm dần (mới nhất lên đầu)
    orders.sort((a, b) => parseInt(b.id.substring(3)) - parseInt(a.id.substring(3)));
    localStorage.setItem("orders", JSON.stringify(orders));
}

let employees = JSON.parse(localStorage.getItem("employees")) || [];
let managedProducts = JSON.parse(localStorage.getItem("managedProducts")) || gemProducts;
let productModal = null; // To hold the modal instance
let currentProductPage = 1;
const productsPerPage = 10;

function saveData() {
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.setItem("employees", JSON.stringify(employees));
}

function saveManagedProducts() {
    localStorage.setItem("managedProducts", JSON.stringify(managedProducts));
}

function renderDashboard() {
    document.getElementById('totalUsers').innerText = users.length;
    document.getElementById('totalOrders').innerText = orders.length;
    document.getElementById('totalProducts').innerText = managedProducts.length;

    // 1. Tính tổng doanh thu
    const totalRevenue = orders.reduce((sum, order) => sum + order.price, 0);
    document.getElementById('totalRevenue').innerText = totalRevenue.toLocaleString('vi-VN') + 'đ';

    // 2. Chuẩn bị dữ liệu cho biểu đồ doanh thu (6 tháng gần nhất)
    const revenueByMonth = {};
    const monthLabels = [];
    const now = new Date();

    for (let i = 5; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const monthKey = `${d.getFullYear()}-${d.getMonth() + 1}`;
        monthLabels.push(`Tháng ${d.getMonth() + 1}/${d.getFullYear()}`);
        revenueByMonth[monthKey] = 0;
    }

    orders.forEach(order => {
        const timestamp = parseInt(order.id.substring(3));
        if (!isNaN(timestamp)) {
            const orderDate = new Date(timestamp);
            const monthKey = `${orderDate.getFullYear()}-${orderDate.getMonth() + 1}`;
            if (monthKey in revenueByMonth) {
                revenueByMonth[monthKey] += order.price;
            }
        }
    });

    const revenueData = Object.values(revenueByMonth);

    // 3. Chuẩn bị dữ liệu cho biểu đồ Top sản phẩm
    const productCounts = orders.reduce((acc, order) => {
        acc[order.productName] = (acc[order.productName] || 0) + 1;
        return acc;
    }, {});

    const sortedProducts = Object.entries(productCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5);

    const topProductsLabels = sortedProducts.map(p => p[0]);
    const topProductsData = sortedProducts.map(p => p[1]);

    // 4. Hiển thị các đơn hàng gần đây
    const recentOrders = orders.slice(0, 5);
    const recentOrdersTable = document.getElementById('recentOrdersTable');
    if (recentOrders.length > 0) {
        recentOrdersTable.innerHTML = `
            <thead class="table-light">
                <tr>
                    <th class="ps-4">Mã Đơn Hàng</th>
                    <th>Sản phẩm</th>
                    <th>Giá</th>
                    <th class="text-end pe-4">Ngày tạo</th>
                </tr>
            </thead>
            <tbody>
                ${recentOrders.map(order => `
                    <tr>
                        <td class="ps-4 fw-bold">${order.id}</td>
                        <td>${order.productName}</td>
                        <td>${order.price.toLocaleString('vi-VN')}đ</td>
                        <td class="text-end pe-4 text-muted small">${new Date(parseInt(order.id.substring(3))).toLocaleDateString('vi-VN')}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;
    } else {
        recentOrdersTable.innerHTML = '<tbody><tr><td colspan="4" class="text-center text-muted p-4">Chưa có đơn hàng nào.</td></tr></tbody>';
    }

    // 5. Vẽ biểu đồ
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    if (revenueChartInstance) revenueChartInstance.destroy();
    revenueChartInstance = new Chart(revenueCtx, { type: 'line', data: { labels: monthLabels, datasets: [{ label: 'Doanh thu', data: revenueData, borderColor: '#001f3f', backgroundColor: 'rgba(0, 31, 63, 0.1)', fill: true, tension: 0.4 }] }, options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, ticks: { callback: value => value.toLocaleString('vi-VN') + 'đ' } } } } });

    const topProductsCtx = document.getElementById('topProductsChart').getContext('2d');
    if (topProductsChartInstance) topProductsChartInstance.destroy();
    topProductsChartInstance = new Chart(topProductsCtx, {
        type: 'doughnut',
        data: {
            labels: topProductsLabels.length > 0 ? topProductsLabels : ['Chưa có dữ liệu'],
            datasets: [{
                label: 'Số lượng bán',
                data: topProductsData.length > 0 ? topProductsData : [1],
                backgroundColor: topProductsData.length > 0 ? ['#001f3f', '#D4AF37', '#6c757d', '#17a2b8', '#e83e8c'] : ['#f0f0f0'],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', display: topProductsLabels.length > 0 }
            }
        }
    });
}

function renderUsers(searchTerm = "") {
  let table = "";

  const filteredUsers = users.filter(u => {
      const term = searchTerm.toLowerCase();
      const name = (u.username || u.name || "").toLowerCase();
      const email = (u.email || "").toLowerCase();
      return name.includes(term) || email.includes(term);
  });

  if (filteredUsers.length === 0) {
      document.getElementById("userTable").innerHTML = `<tr><td colspan="7" class="text-center text-muted py-4">Chưa có khách hàng nào đăng ký hệ thống.</td></tr>`;
      return;
  }

  filteredUsers.forEach((u, index) => {
    table += `
<tr>
<td class="text-center text-muted fw-bold">${index + 1}</td>
<td><span class="text-muted small">${u.id}</span></td>
<td class="fw-bold" style="color: #001f3f;">${u.username || u.name || ""}</td>
<td><span class="text-muted">******</span></td>
<td><a href="mailto:${u.email}" class="text-decoration-none">${u.email}</a></td>
<td class="text-center">
  <span class="badge ${u.role === 'admin' ? 'bg-danger' : 'bg-secondary'}">${u.role ? u.role.toUpperCase() : 'USER'}</span>
</td>
<td class="text-center align-middle">
<button class="btn btn-outline-danger btn-sm shadow-sm" onclick="deleteUser('${u.id}')" title="Xóa"><i class="fas fa-trash-alt"></i></button>
</td>
</tr>
`;
  });

  document.getElementById("userTable").innerHTML = table;
}

function deleteUser(id) {
  if (confirm("Bạn có chắc chắn muốn xóa người dùng này?")) {
    users = users.filter((u) => u.id != id);
    saveData();
    renderUsers(document.getElementById("searchUser")?.value || "");
  }
}

function addEmployee() {
  let name = document.getElementById("empName").value;
  let email = document.getElementById("empEmail").value;
  let password = document.getElementById("empPassword").value;

  if (name == "" || email == "" || password == "") {
    alert("Vui lòng điền đầy đủ thông tin nhân viên!");
    return;
  }

  // Khởi tạo doanh thu giả lập ngẫu nhiên cho 12 tháng (Read-only)
  let monthlySales = [];
  let totalRevenue = 0;
  for(let i=0; i<12; i++) {
      let sales = Math.floor(Math.random() * 50000000) + 10000000;
      monthlySales.push(sales);
      totalRevenue += sales;
  }

  employees.push({
    id: 'emp_' + Date.now(),
    name: name,
    email: email,
    password: password,
    revenue: totalRevenue,
    monthlySales: monthlySales
  });

  saveData();
  renderEmployees();
  
  document.getElementById("empName").value = "";
  document.getElementById("empEmail").value = "";
  document.getElementById("empPassword").value = "";
}

function renderEmployees() {
  let table = "";

  employees.forEach((emp, index) => {
    table += `
<tr>
<td class="text-center text-muted fw-bold">${index + 1}</td>
<td><span class="text-muted small">${emp.id}</span></td>
<td class="fw-bold" style="color: #001f3f;">${emp.name}</td>
<td><a href="mailto:${emp.email}" class="text-decoration-none">${emp.email}</a></td>
<td class="text-end text-success fw-bold">${Number(emp.revenue).toLocaleString('vi-VN')} đ</td>
<td class="text-center align-middle">
<button class="btn btn-outline-info btn-sm shadow-sm me-1" onclick="showChart('${emp.id}')" title="Xem biểu đồ doanh số"><i class="fas fa-chart-bar"></i></button>
<button class="btn btn-outline-danger btn-sm shadow-sm" onclick="deleteEmployee('${emp.id}')" title="Xóa"><i class="fas fa-trash-alt"></i></button>
</td>
</tr>
`;
  });

  let empTable = document.getElementById("employeeTable");
  if(empTable) empTable.innerHTML = table;
}

function deleteEmployee(id) {
  if(confirm("Bạn có chắc chắn muốn xóa nhân viên này?")) {
    employees = employees.filter((e) => e.id != id);
    saveData();
    renderEmployees();
  }
}

function renderProducts(searchTerm = "") {
    const tableBody = document.getElementById("productTable");
    if (!tableBody) return;

    const filteredProducts = managedProducts.filter(p => {
        const term = searchTerm.toLowerCase();
        const name = (p.name || "").toLowerCase();
        const id = String(p.id).toLowerCase();
        return name.includes(term) || id.includes(term);
    });

    const totalItems = filteredProducts.length;
    const totalPages = Math.ceil(totalItems / productsPerPage);

    if (currentProductPage > totalPages && totalPages > 0) currentProductPage = totalPages;
    if (currentProductPage < 1) currentProductPage = 1;

    const startIndex = (currentProductPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    if (paginatedProducts.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="6" class="text-center text-muted py-4">Không có sản phẩm nào.</td></tr>`;
        renderProductPagination(0);
        return;
    }

    tableBody.innerHTML = paginatedProducts.map((p, index) => `
        <tr>
            <td class="text-center text-muted fw-bold">${startIndex + index + 1}</td>
            <td><img src="${p.imgMain}" alt="${p.name}" width="60" height="60" style="object-fit: cover; border-radius: 8px;" onerror="this.src='./assets/img/ItemTrangChu(1)/default.jpg'"></td>
            <td class="fw-bold" style="color: #001f3f;">${p.name}</td>
            <td class="text-end text-danger fw-bold">${p.price ? p.price.toLocaleString('vi-VN') + 'đ' : 'N/A'}</td>
            <td class="text-center">${p.stock || 0}</td>
            <td class="text-center">
                <button class="btn btn-outline-primary btn-sm shadow-sm me-1" onclick="showProductModal('${p.id}')" title="Sửa"><i class="fas fa-edit"></i></button>
                <button class="btn btn-outline-danger btn-sm shadow-sm" onclick="deleteProduct('${p.id}')" title="Xóa"><i class="fas fa-trash-alt"></i></button>
            </td>
        </tr>
    `).join('');
    
    renderProductPagination(totalPages);
}

function renderProductPagination(totalPages) {
    const container = document.getElementById("productPagination");
    if (!container) return;

    if (totalPages <= 1) {
        container.innerHTML = "";
        return;
    }

    let html = '<ul class="pagination mb-0 shadow-sm">';
    
    html += `<li class="page-item ${currentProductPage === 1 ? 'disabled' : ''}">
                <a class="page-link text-dark" href="#" onclick="event.preventDefault(); changeProductPage(${currentProductPage - 1})"><i class="fas fa-chevron-left"></i></a>
             </li>`;

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentProductPage - 1 && i <= currentProductPage + 1)) {
            let activeClass = i === currentProductPage ? 'bg-warning text-dark border-warning fw-bold' : 'text-dark';
            html += `<li class="page-item ${i === currentProductPage ? 'active' : ''}">
                        <a class="page-link ${activeClass}" href="#" onclick="event.preventDefault(); changeProductPage(${i})">${i}</a>
                     </li>`;
        } else if (i === currentProductPage - 2 || i === currentProductPage + 2) {
            html += `<li class="page-item disabled"><span class="page-link text-muted border-0 bg-light">...</span></li>`;
        }
    }

    html += `<li class="page-item ${currentProductPage === totalPages ? 'disabled' : ''}">
                <a class="page-link text-dark" href="#" onclick="event.preventDefault(); changeProductPage(${currentProductPage + 1})"><i class="fas fa-chevron-right"></i></a>
             </li>`;

    html += '</ul>';
    container.innerHTML = html;
}

function changeProductPage(page) {
    currentProductPage = page;
    renderProducts(document.getElementById("searchProduct")?.value || "");
    
    // Cuộn lên đầu bảng để dễ nhìn
    const table = document.getElementById('products');
    if (table) {
        table.scrollIntoView({ behavior: 'smooth' });
    }
}

function showProductModal(id = null) {
    const form = document.getElementById('productForm');
    form.reset();
    document.getElementById('productId').value = '';

    if (id) {
        // Edit mode
        const product = managedProducts.find(p => p.id == id);
        if (product) {
            document.getElementById('productModalTitle').innerText = 'Chỉnh sửa sản phẩm';
            document.getElementById('productId').value = product.id;
            document.getElementById('productName').value = product.name;
            document.getElementById('productPrice').value = product.price;
            document.getElementById('productStock').value = product.stock;
            document.getElementById('productImgMain').value = product.imgMain;
            document.getElementById('productImgHover').value = product.imgHover || '';
            document.getElementById('productCategory').value = Array.isArray(product.category) ? product.category.join(', ') : (product.category || '');
            document.getElementById('productSubCategory').value = Array.isArray(product.subCategory) ? product.subCategory.join(', ') : (product.subCategory || '');
            document.getElementById('productDetail').value = product.detail || '';
        }
    } else {
        // Add mode
        document.getElementById('productModalTitle').innerText = 'Thêm sản phẩm mới';
    }

    productModal.show();
}

function saveProduct() {
    const id = document.getElementById('productId').value;
    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const stock = parseInt(document.getElementById('productStock').value);
    const imgMain = document.getElementById('productImgMain').value;
    const imgHover = document.getElementById('productImgHover').value;
    const category = document.getElementById('productCategory').value.split(',').map(s => s.trim()).filter(Boolean);
    const subCategory = document.getElementById('productSubCategory').value.split(',').map(s => s.trim()).filter(Boolean);
    const detail = document.getElementById('productDetail').value;

    if (!name || isNaN(price) || isNaN(stock) || !imgMain) {
        alert('Vui lòng điền đầy đủ các trường bắt buộc.');
        return;
    }

    if (id) {
        const productIndex = managedProducts.findIndex(p => p.id == id);
        if (productIndex > -1) {
            managedProducts[productIndex] = { ...managedProducts[productIndex], name, price, stock, imgMain, imgHover, category, subCategory, detail };
        }
    } else {
        const newProduct = { id: 'prod_' + Date.now(), name, price, stock, imgMain, imgHover, category, subCategory, detail, sold: 0 };
        managedProducts.unshift(newProduct);
    }

    saveManagedProducts();
    renderProducts(document.getElementById("searchProduct")?.value || "");
    renderDashboard(); // Update dashboard stats
    productModal.hide();
}

function deleteProduct(id) {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này? Hành động này không thể hoàn tác.')) {
        managedProducts = managedProducts.filter(p => p.id != id);
        saveManagedProducts();
        renderProducts(document.getElementById("searchProduct")?.value || "");
        renderDashboard(); // Update dashboard stats
    }
}

function renderOrders(searchTerm = "") {
  let table = "";

  const filteredOrders = orders.filter(o => {
      const term = searchTerm.toLowerCase();
      const product = (o.product || "").toLowerCase();
      const id = String(o.id).toLowerCase();
      return product.includes(term) || id.includes(term);
  });

  filteredOrders.forEach((o) => {
    table += `
<tr>
<td class="ps-4"><span class="badge bg-light text-dark border p-2">${o.id}</span></td>
<td class="fw-bold" style="color: #001f3f;">${o.product}</td>
<td class="text-danger fw-bold">${Number(o.price).toLocaleString('vi-VN')} đ</td>
<td class="text-center align-middle">
<button class="btn btn-outline-danger btn-sm shadow-sm" onclick="deleteOrder('${o.id}')" title="Xóa"><i class="fas fa-trash-alt"></i></button>
</td>
</tr>
`;
  });

  document.getElementById("orderTable").innerHTML = table;
}

function deleteOrder(id) {
  if (confirm("Bạn có chắc chắn muốn xóa đơn hàng này?")) {
    orders = orders.filter((o) => o.id != id);
    saveData();
    renderOrders(document.getElementById("searchOrder")?.value || "");
  }
}

//thông tin cài đặt
let setting = JSON.parse(localStorage.getItem("setting")) || {
  siteName: "JADE CHAMBER",
  contactEmail: "contact@jadechamber.com",
  phoneNumber: "0123456789",
  address: "123 Main St, City, Country",
};

function saveSetting() {
  setting.siteName = document.getElementById("siteName").value;
  setting.contactEmail = document.getElementById("contactEmail").value;
  setting.phoneNumber = document.getElementById("phoneNumber").value;
  setting.address = document.getElementById("address").value;


  localStorage.setItem("setting", JSON.stringify(setting));
  alert("Cài đặt đã được lưu!");
};

function loadSetting() {
  document.getElementById("siteName").value = setting.siteName;
  document.getElementById("contactEmail").value = setting.contactEmail;
  document.getElementById("phoneNumber").value = setting.phoneNumber;
  document.getElementById("address").value = setting.address;
}

function changeAdminPassword() {
  const adminUsername = document.getElementById("adminUsserName").value;
  const adminEmail = document.getElementById("adminEmail").value;
  const currentPassword = document.getElementById("currentPassword").value;
  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!currentPassword) {
    alert("Vui lòng điền mật khẩu hiện tại để xác nhận thay đổi!");
    return;
  }

  let adminAccount = JSON.parse(localStorage.getItem("adminAccount"));

  if (currentPassword !== adminAccount.password) {
    alert("Mật khẩu hiện tại không đúng!");
    return;
  }

  if (newPassword && newPassword !== confirmPassword) {
    alert("Mật khẩu mới không khớp!");
    return;
  }

  adminAccount.username = adminUsername || adminAccount.username;
  adminAccount.email = adminEmail || adminAccount.email;
  
  if (newPassword) {
    adminAccount.password = newPassword;
  }

  localStorage.setItem("adminAccount", JSON.stringify(adminAccount));
  localStorage.setItem("currentUser", JSON.stringify(adminAccount));

  alert("Cập nhật thông tin Admin thành công!");
  
  document.getElementById("currentPassword").value = "";
  document.getElementById("newPassword").value = "";
  document.getElementById("confirmPassword").value = "";
}

renderDashboard();
renderUsers();
renderOrders();
renderEmployees();
renderProducts();
let salesChartInstance = null;

function showChart(id) {
    const emp = employees.find(e => e.id === id);
    if(!emp) return;
    
    document.getElementById("chartEmpName").innerText = emp.name;
    const ctx = document.getElementById('salesChart').getContext('2d');
    
    // Phá hủy biểu đồ cũ nếu đã từng mở trước đó để tránh bị dính khung hình
    if(salesChartInstance) {
        salesChartInstance.destroy();
    }
    
    salesChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
            datasets: [{
                label: 'Doanh thu (VNĐ)',
                data: emp.monthlySales || Array(12).fill(0),
                backgroundColor: 'rgba(212, 175, 55, 0.6)',
                borderColor: '#D4AF37',
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            scales: { y: { beginAtZero: true } }
        }
    });
    
    const chartModal = new bootstrap.Modal(document.getElementById('chartModal'));
    chartModal.show();
}
