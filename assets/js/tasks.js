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
}); //huỷ đăng nhập khi phát hiện sai quyền truy cập

function updateStats() {
  document.getElementById("totalUsers").innerText = users.length;
  document.getElementById("totalOrders").innerText = orders.length;
}

function showPage(page, element = null) {
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.add("d-none");
  });

  document.getElementById(page).classList.remove("d-none");

  if (element) {
    document.querySelectorAll('.sidebar .nav-link').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
  }

  updateStats();
}

let users = JSON.parse(localStorage.getItem("users")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];
let employees = JSON.parse(localStorage.getItem("employees")) || [];

function saveData() {
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.setItem("employees", JSON.stringify(employees));
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

  updateStats();
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

  updateStats();
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

renderUsers();
renderOrders();
renderEmployees();
updateStats();

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
