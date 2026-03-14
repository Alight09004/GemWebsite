document.addEventListener("DOMContentLoaded", function () {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser || currentUser.role !== "admin") {
        alert("Bạn không có quyền truy cập trang này!");
        window.location.href = "index.html";
    }
    
}); //huỷ đăng nhập khi phát hiện sai quyền truy cập

function updateStats() {
  document.getElementById("totalUsers").innerText = users.length;
  document.getElementById("totalOrders").innerText = orders.length;
}

function showPage(page) {
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.add("d-none");
  });

  document.getElementById(page).classList.remove("d-none");

  updateStats();
}

let users = JSON.parse(localStorage.getItem("users")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];

function saveData() {
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("orders", JSON.stringify(orders));
}

function addUser() {
  let name = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let role = document.getElementById("role").value;
  let password = document.getElementById("password").value;

  if (name == "" || email == "") return;

  users.push({
    id: Date.now(),
    name: name,
    password: password,
    email: email,
    role: role || "user"
  });

  saveData();

  renderUsers();
}

function renderUsers() {
  let table = "";

  users.forEach((u) => {
    table += `
<tr>
<td>${u.id}</td>
<td>${u.name}</td>
<td>${u.password}</td>
<td>${u.email}</td>
<td>${u.role}</td>  
<td>
<button class="btn btn-danger btn-sm" onclick="deleteUser(${u.id})">Xóa</button>
</td>
</tr>
`;
  });

  document.getElementById("userTable").innerHTML = table;

  updateStats();
}

function deleteUser(id) {
  users = users.filter((u) => u.id != id);

  saveData();

  renderUsers();
}

function addOrder() {
  let product = document.getElementById("product").value;
  let price = document.getElementById("price").value;

  if (product == "" || price == "") return;

  orders.push({
    id: Date.now(),
    product: product,
    price: price,
  });

  saveData();

  renderOrders();
}

function renderOrders() {
  let table = "";

  orders.forEach((o) => {
    table += `
<tr>
<td>${o.id}</td>
<td>${o.product}</td>
<td>${o.price}</td>
<td>
<button class="btn btn-danger btn-sm" onclick="deleteOrder(${o.id})">Xóa</button>
</td>
</tr>
`;
  });

  document.getElementById("orderTable").innerHTML = table;

  updateStats();
}

function deleteOrder(id) {
  orders = orders.filter((o) => o.id != id);

  saveData();

  renderOrders();
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


renderUsers();
renderOrders();
updateStats();
