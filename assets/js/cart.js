// Cart Management Module
let cart = JSON.parse(localStorage.getItem('jade_chamber_cart')) || [];

// Initialize cart UI when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    updateCartDropdownUI();
    updateCheckoutUI();
});

function addToCart(name, price, img) {
    // Check if product already exists in cart
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, img, quantity: 1 });
    }
    
    // Save to localStorage and update UI
    saveAndUpdate();
}

function removeFromCart(index) {
    if (confirm('Bạn muốn xóa sản phẩm này khỏi giỏ hàng?')) {
        cart.splice(index, 1);
        saveAndUpdate();
    }
}

function changeQuantity(index, delta) {
    if (cart[index]) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            removeFromCart(index);
        } else {
            saveAndUpdate();
        }
    }
}

// Helper function: Save data and update UI
function saveAndUpdate() {
    localStorage.setItem('jade_chamber_cart', JSON.stringify(cart));
    updateCartUI();
    updateCartDropdownUI();
    updateCheckoutUI();
}

function updateCartUI() {
    const container = document.getElementById('cart-items-container');
    const countBadge = document.getElementById('cart-count');
    const totalPriceElem = document.getElementById('cart-total-price');
    
    if (!container) return; 

    let total = 0;
    let count = 0;
    let html = '';

    if (cart.length === 0) {
        html = `
            <div class="text-center py-5">
                <i class="fas fa-shopping-basket fa-3x mb-3" style="color: #ddd;"></i>
                <p class="text-muted">Giỏ hàng của bạn đang trống</p>
            </div>
        `;
        container.innerHTML = html;
        if (countBadge) {
            countBadge.innerText = '0';
            countBadge.style.display = 'none';
        }
        if (totalPriceElem) {
            totalPriceElem.innerText = '0đ';
        }
        return;
    }

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        count += item.quantity;

        html += `
            <div class="cart-item d-flex align-items-center mb-3 pb-3 border-bottom">
                <img src="${item.img}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;" class="me-3" onerror="this.src='./assets/img/ItemTrangChu(1)/default.jpg'">
                <div class="flex-grow-1">
                    <h6 class="mb-0 small fw-bold text-uppercase" style="color: #001f3f; max-width: 150px; overflow: hidden; text-overflow: ellipsis;">${item.name}</h6>
                    <p class="mb-2 small text-danger fw-bold">${item.price.toLocaleString()}đ</p>
                    <div class="d-flex align-items-center gap-2">
                        <button class="btn btn-sm btn-outline-secondary py-0 px-2" onclick="changeQuantity(${index}, -1)" style="min-width: 28px;">-</button>
                        <span class="small fw-bold" style="min-width: 25px; text-align: center;">${item.quantity}</span>
                        <button class="btn btn-sm btn-outline-secondary py-0 px-2" onclick="changeQuantity(${index}, 1)" style="min-width: 28px;">+</button>
                    </div>
                </div>
                <button class="btn btn-sm text-muted p-0 ms-2" onclick="removeFromCart(${index})" title="Xóa">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
    });

    // Set all HTML at once (better performance)
    container.innerHTML = html;

    // Update cart badge count
    if (countBadge) {
        countBadge.innerText = count;
        countBadge.style.display = count > 0 ? 'block' : 'none';
    }

    // Update total price
    if (totalPriceElem) {
        totalPriceElem.innerText = total.toLocaleString() + 'đ';
    }
}

// Update cart dropdown UI
function updateCartDropdownUI() {
    const container = document.getElementById('cart-dropdown-items');
    const countBadge = document.getElementById('cart-count');
    const totalPriceElem = document.getElementById('cart-dropdown-total');
    
    if (!container) return;

    let total = 0;
    let count = 0;
    let html = '';

    if (cart.length === 0) {
        html = `<p class="text-center text-muted py-3 small">Giỏ hàng đang trống</p>`;
        container.innerHTML = html;
        if (countBadge) {
            countBadge.innerText = '0';
            countBadge.style.display = 'none';
        }
        if (totalPriceElem) {
            totalPriceElem.innerText = '0đ';
        }
        return;
    }

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        count += item.quantity;

        html += `
            <div class="cart-dropdown-item">
                <img src="${item.img}" alt="${item.name}" onerror="this.src='./assets/img/ItemTrangChu(1)/default.jpg'">
                <div class="cart-dropdown-item-info">
                    <div class="cart-dropdown-item-name">${item.name}</div>
                    <div class="cart-dropdown-item-price">${item.price.toLocaleString()}đ</div>
                    <div class="cart-dropdown-item-qty">Số lượng: ${item.quantity}</div>
                </div>
                <button class="cart-dropdown-item-remove" onclick="removeFromCart(${index})" title="Xóa">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;
    });

    container.innerHTML = html;

    // Update cart badge count
    if (countBadge) {
        countBadge.innerText = count;
        countBadge.style.display = count > 0 ? 'block' : 'none';
    }

    // Update total price
    if (totalPriceElem) {
        totalPriceElem.innerText = total.toLocaleString() + 'đ';
    }
}

// Optional: Clear cart function
function clearCart() {
    if (confirm('Bạn chắc chắn muốn xóa tất cả sản phẩm?')) {
        cart = [];
        saveAndUpdate();
    }
}

// Cập nhật UI cho trang Thanh toán
function updateCheckoutUI() {
    const list = document.getElementById('checkout-item-list');
    const countBadge = document.getElementById('checkout-cart-count');
    const totalPriceElem = document.getElementById('checkout-total-price');
    
    if (!list) return;

    let total = 0;
    let count = 0;
    let html = '';

    cart.forEach(item => {
        total += item.price * item.quantity;
        count += item.quantity;

        html += `
            <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 class="my-0 text-truncate" style="max-width: 200px;" title="${item.name}">${item.name}</h6>
                    <small class="text-muted">Số lượng: ${item.quantity}</small>
                </div>
                <span class="text-muted text-nowrap ms-3">${(item.price * item.quantity).toLocaleString()}đ</span>
            </li>
        `;
    });

    list.innerHTML = html;

    if (countBadge) countBadge.innerText = count;
    if (totalPriceElem) totalPriceElem.innerText = total.toLocaleString() + 'đ';
}

// Chức năng Xác nhận thanh toán
function placeOrder() {
    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;

    if (!fullName || !phone || !city || !address) {
        alert("Vui lòng điền đầy đủ thông tin giao hàng bắt buộc!");
        return;
    }

    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        return;
    }

    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let productDesc = cart.map(item => `${item.name} (x${item.quantity})`).join(', ');

    orders.push({
        id: 'ORD' + Date.now().toString().slice(-6),
        product: productDesc,
        price: total,
        customerName: fullName,
        phone: phone,
        address: address + ', ' + city,
        date: new Date().toLocaleDateString('vi-VN')
    });

    localStorage.setItem('orders', JSON.stringify(orders));
    
    cart = [];
    saveAndUpdate();
    
    alert("Đặt hàng thành công! Hệ thống sẽ chuyển về trang chủ.");
    window.location.href = "index.html";
}
