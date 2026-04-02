// Cart Management
let cart = JSON.parse(localStorage.getItem('jade_chamber_cart')) || [];
if (!Array.isArray(cart)) cart = [];
let selectedItems = new Set();
let discountApplied = 0;

// Initialize UI when DOM is ready for all pages
document.addEventListener('DOMContentLoaded', () => {
    cart = JSON.parse(localStorage.getItem('jade_chamber_cart')) || [];
    if (!Array.isArray(cart)) cart = [];
    console.log('Cart loaded:', cart);

    updateCartUI();
    updateCartDropdownUI();

    // SỬA Ở ĐÂY: Chuyển về chữ thường để so sánh cho chắc chắn
    const currentPage = window.location.pathname.toLowerCase();

    if (currentPage.includes('cart.html')) {
        console.log('Đang ở trang giỏ hàng');
        // Đảm bảo selectedItems được reset đúng cách
        selectedItems.clear(); 
        cart.forEach((_, index) => selectedItems.add(index));
        
        renderCartPage();
        checkUserHistory();
    }

    if (currentPage.includes('checkout.html')) {
        updateCheckoutUI();
    }
});

function addToCart(name, price, img, qty = 1) {
    console.log('addToCart called with:', { name, price, img, qty });
    cart = JSON.parse(localStorage.getItem('jade_chamber_cart')) || [];
    if (!Array.isArray(cart)) cart = [];

    const existingItem = cart.find(item => item.name === name); // Check if product already exists
    if (existingItem) {
        existingItem.quantity += qty;
    } else {
        cart.push({ name, price, img, quantity: qty });
    }
    
    console.log('Item added to cart. Current cart state:', cart); // Crucial log for debugging
    saveAndUpdate();
    alert('Đã thêm sản phẩm vào giỏ hàng thành công!');
}

function removeFromCart(index) {
    if (confirm('Bạn muốn xóa sản phẩm này khỏi giỏ hàng?')) {
        cart.splice(index, 1);
        saveAndUpdate();
    }
}

// Change quantity of an item (used in dropdown and Cart.html)
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

// Save data and update UI
function saveAndUpdate() {
    localStorage.setItem('jade_chamber_cart', JSON.stringify(cart));
    updateCartUI();
    updateCartDropdownUI();
    updateCheckoutUI();
    if (window.location.pathname.toLowerCase().includes('cart.html')) {
        console.log('saveAndUpdate: Re-rendering Cart.html page. Current cart:', cart);
        renderCartPage(); // Re-render the main cart table if on Cart.html
    }
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
        const price = item.price || 0;
        total += price * item.quantity;
        count += item.quantity;

        html += `
            <div class="cart-item d-flex align-items-center mb-3 pb-3 border-bottom">
                <img src="${item.img}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;" class="me-3" onerror="this.src='./assets/img/ItemTrangChu(1)/default.jpg'">
                <div class="flex-grow-1">
                    <h6 class="mb-0 small fw-bold text-uppercase" style="color: #001f3f; max-width: 150px; overflow: hidden; text-overflow: ellipsis;">${item.name}</h6>
                    <p class="mb-2 small text-danger fw-bold">${price > 0 ? price.toLocaleString() + 'đ' : 'Liên hệ'}</p>
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
        totalPriceElem.innerText = total > 0 ? total.toLocaleString() + 'đ' : '0đ';
    }
}

// Update cart dropdown UI in the header
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
        const price = item.price || 0;
        total += price * item.quantity;
        count += item.quantity;

        html += `
            <div class="cart-dropdown-item">
                <img src="${item.img}" alt="${item.name}" onerror="this.src='./assets/img/ItemTrangChu(1)/default.jpg'">
                <div class="cart-dropdown-item-info">
                    <div class="cart-dropdown-item-name">${item.name}</div>
                    <div class="cart-dropdown-item-price">${price > 0 ? price.toLocaleString() + 'đ' : 'Liên hệ'}</div>
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
        totalPriceElem.innerText = total > 0 ? total.toLocaleString() + 'đ' : '0đ';
    }
}

// Clear all items from the cart
function clearCart() {
    if (confirm('Bạn chắc chắn muốn xóa tất cả sản phẩm?')) {
        cart = [];
        saveAndUpdate();
    }
}

// Update UI for the checkout page
function updateCheckoutUI() {
    const list = document.getElementById('checkout-item-list');
    const countBadge = document.getElementById('checkout-cart-count');
    const totalPriceElem = document.getElementById('checkout-total-price');
    
    if (!list) return;

    let total = 0;
    let count = 0;
    let html = '';

    const itemsToDisplay = JSON.parse(localStorage.getItem('jade_chamber_checkout_selection')) || cart; // Use selected items if available, else full cart

    itemsToDisplay.forEach(item => {
        const price = item.price || 0;
        total += price * item.quantity; 
        count += item.quantity;

        html += `
            <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 class="my-0 text-truncate" style="max-width: 200px;" title="${item.name}">${item.name}</h6>
                    <small class="text-muted">Số lượng: ${item.quantity}</small>
                </div>
                <span class="text-muted text-nowrap ms-3">${price > 0 ? (price * item.quantity).toLocaleString() + 'đ' : 'Liên hệ'}</span>
            </li>
        `;
    });

    list.innerHTML = html;

    if (countBadge) countBadge.innerText = count;
    if (totalPriceElem) totalPriceElem.innerText = total > 0 ? total.toLocaleString() + 'đ' : '0đ';
}

// --- Functions specific to Cart.html ---

// Generate a mock stock quantity based on product name hash
const getStock = (name) => {
    if (typeof gemProducts !== 'undefined') {
        const product = gemProducts.find(item => item.name === name);
        if (product && product.stock !== undefined) {
            return product.stock;
        }
    }
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash += name.charCodeAt(i);
    return (hash % 20) + 5;
};

function renderCartPage() {
    console.log('renderCartPage() called.'); // Crucial log for debugging
    const container = document.getElementById('cart-page-items');
    if (!container) { console.error('Error: #cart-page-items container not found!'); return; } 

    // Use the global 'cart' variable
    console.log('Cart length for renderCartPage:', cart.length, 'Cart content:', cart); // Crucial log
    if (cart.length === 0) {
        container.innerHTML = '<tr><td colspan="6" class="text-center py-5 text-muted"><i class="fas fa-shopping-basket fa-3x mb-3 opacity-25"></i><br>Giỏ hàng của bạn đang trống</td></tr>';
        updateTotals(); // Still call updateTotals to reset totals to 0
        return;
    }

    let html = '';
    cart.forEach((item, index) => { // Use 'cart' instead of 'cartItems'
        const stock = getStock(item.name);
        const price = item.price || 0;
        const isSelected = selectedItems.has(index) ? 'checked' : '';

        html += `
            <tr>
                <td class="ps-4">
                    <input type="checkbox" class="form-check-input item-checkbox" onchange="toggleItem(${index})" ${isSelected}>
                </td>
                <td>
                    <div class="d-flex align-items-center">
                        <img src="${item.img}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px;" class="me-3" onerror="this.src='./assets/img/ItemTrangChu(1)/default.jpg'">
                        <div>
                            <h6 class="mb-1 text-truncate" style="max-width: 200px; color: #001f3f;" title="${item.name}">${item.name}</h6>
                            <div class="stock-info"><i class="fas fa-box-open me-1"></i>Còn ${stock} sản phẩm</div>
                        </div>
                    </div>
                </td>
                <td class="text-muted fw-bold">${price > 0 ? price.toLocaleString() + 'đ' : 'Liên hệ'}</td>
                <td>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-outline-secondary btn-qty" onclick="updateQtyPage(${index}, -1, ${stock})">-</button>
                        <input type="number" class="form-control qty-input mx-1" value="${item.quantity}" onchange="setQtyPage(${index}, ${stock}, this)" min="1" max="${stock}">
                        <button class="btn btn-outline-secondary btn-qty" onclick="updateQtyPage(${index}, 1, ${stock})">+</button>
                    </div>
                </td>
                <td class="fw-bold text-danger">${price > 0 ? (price * item.quantity).toLocaleString() + 'đ' : 'Liên hệ'}</td>
                <td>
                    <button class="btn btn-sm text-danger p-0" onclick="removePageItem(${index})" title="Xóa">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        `;
    });

    console.log('Generated HTML for cart page:', html); // Crucial log for debugging
    container.innerHTML = html;
    updateTotals();
}

function updateQtyPage(index, delta, maxStock) {
    if (cart[index]) {
        const newQty = cart[index].quantity + delta;
        if (newQty <= 0) {
            removePageItem(index);
        } else if (newQty > maxStock) {
            alert(`Sản phẩm này hiện chỉ còn ${maxStock} chiếc trong kho!`);
        } else {
            cart[index].quantity = newQty;
            saveAndUpdate(); // This will re-render Cart.html if on that page
        }
    }
}

// Xử lý khi người dùng gõ trực tiếp số lượng vào ô input
function setQtyPage(index, maxStock, element) {
    if (cart[index]) {
        let newQty = parseInt(element.value);
        if (isNaN(newQty) || newQty <= 0) {
            if (newQty === 0) {
                removePageItem(index);
                // Nếu người dùng ấn "Hủy" khi được hỏi xóa,render lại để số trên ô input phục hồi về cũ
                renderCartPage(); 
                return;
            }
            newQty = 1;
        }
        if (newQty > maxStock) {
            alert(`Sản phẩm này hiện chỉ còn ${maxStock} chiếc trong kho!`);
            newQty = maxStock;
        }
        cart[index].quantity = newQty;
        saveAndUpdate();
    }
}

function removePageItem(index) {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?')) {
        cart.splice(index, 1);

        const newSelected = new Set();
        selectedItems.forEach(i => {
            if (i < index) newSelected.add(i);
            else if (i > index) newSelected.add(i - 1);
        });
        selectedItems = newSelected;

        saveAndUpdate(); // This will re-render Cart.html if on that page
    }
}

function toggleItem(index) {
    if (selectedItems.has(index)) {
        selectedItems.delete(index);
        document.getElementById('selectAll').checked = false;
    } else {
        selectedItems.add(index);
        if (selectedItems.size === cart.length && cart.length > 0) { // Use 'cart'
            document.getElementById('selectAll').checked = true;
        }
    }
    updateTotals();
}

function toggleAll() {
    const isChecked = document.getElementById('selectAll').checked;
    selectedItems.clear();
    if (isChecked) {
        cart.forEach((_, i) => selectedItems.add(i)); // Use 'cart'
    }
    document.querySelectorAll('.item-checkbox').forEach(cb => cb.checked = isChecked);
    updateTotals();
}

function updateTotals() {
    let subtotal = 0;
    cart.forEach((item, index) => { // Use 'cart'
        if (selectedItems.has(index)) {
            subtotal += (item.price || 0) * item.quantity;
        }
    });

    const total = subtotal * (1 - discountApplied);

    const subtotalElem = document.getElementById('cart-subtotal');
    const totalElem = document.getElementById('cart-total');

    if (subtotalElem) subtotalElem.innerText = subtotal.toLocaleString() + 'đ';
    if (totalElem) totalElem.innerText = total.toLocaleString() + 'đ';
}

function applyDiscount() {
    const code = document.getElementById('discountCode').value.trim().toUpperCase();
    const msg = document.getElementById('discount-message');

    // Cấu hình một mã thử nghiệm "JADE10" - giảm 10%
    if (code === 'JADE10') {
        discountApplied = 0.1;
        msg.innerText = 'Áp dụng thành công mã giảm giá 10%!';
        msg.className = 'small mt-1 text-success';
        msg.classList.remove('d-none');
    } else {
        discountApplied = 0;
        msg.innerText = 'Mã giảm giá không hợp lệ hoặc đã hết hạn!';
        msg.className = 'small mt-1 text-danger';
        msg.classList.remove('d-none');
    }
    updateTotals();
}

function proceedToCheckout() { // Redirects to checkout page with selected items
    if (selectedItems.size === 0) {
        alert("Vui lòng chọn ít nhất một sản phẩm để tiến hành thanh toán!");
        return;
    }
    // Store selected items for checkout
    const itemsToCheckout = Array.from(selectedItems).map(index => cart[index]);
    localStorage.setItem('jade_chamber_checkout_selection', JSON.stringify(itemsToCheckout));
    window.location.href = "checkout.html";
}

function checkUserHistory() { // Displays user's order history if logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const historySection = document.getElementById('history-section');
    const loginPrompt = document.getElementById('login-prompt');
    const historyList = document.getElementById('history-list');

    if (!historySection || !loginPrompt || !historyList) {
        console.warn("Missing elements for history section in Cart.html");
        return;
    }

    if (!currentUser) {
        // User not logged in
        loginPrompt.classList.remove('d-none');
        historySection.classList.add('d-none'); // Hide the actual history content
        historyList.innerHTML = ''; // Clear any previous content
        return;
    }

    // User is logged in
    loginPrompt.classList.add('d-none'); // Hide login prompt
    historySection.classList.remove('d-none'); // Show the history content

    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const userOrders = orders.filter(o => o.username === currentUser.username || o.customerName === currentUser.username);

    if (userOrders.length === 0) {
        historyList.innerHTML = '<p class="text-muted text-center mb-0"><i class="fas fa-receipt fa-2x mb-2 opacity-25"></i><br>Bạn chưa có đơn hàng nào.</p>';
        return;
    }

    let html = '';
    userOrders.reverse().forEach(order => {
        html += `
            <div class="order-history-item p-3 mb-3 rounded shadow-sm">
                <div class="d-flex justify-content-between border-bottom pb-2 mb-2">
                    <span class="fw-bold" style="color: #001f3f;">Mã đơn: #${order.id}</span>
                    <span class="text-muted small"><i class="far fa-calendar-alt me-1"></i>${order.date}</span>
                </div>
                <p class="mb-1 small"><strong>Sản phẩm:</strong> ${order.product}</p>
                <p class="mb-1 small"><strong>Giao tới:</strong> ${order.address}</p>
                <div class="text-end mt-2">
                    <span class="text-danger fw-bold fs-6">Tổng tiền: ${order.price.toLocaleString()}đ</span>
                </div>
            </div>
        `;
    });
    historyList.innerHTML = html;
}

// Place order function (used on checkout.html, handles selected items)
function placeOrder() {
    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;

    if (!fullName || !phone || !city || !address) {
        alert("Vui lòng điền đầy đủ thông tin giao hàng bắt buộc!");
        return;
    }

    let itemsToOrder = JSON.parse(localStorage.getItem('jade_chamber_checkout_selection')) || cart; // Use selected items for order

    if (itemsToOrder.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        return;
    }

    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    let total = itemsToOrder.reduce((sum, item) => sum + ((item.price || 0) * item.quantity), 0);
    let productDesc = itemsToOrder.map(item => `${item.name} (x${item.quantity})`).join(', ');
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    orders.push({
        id: 'ORD' + Date.now().toString().slice(-6),
        product: productDesc,
        price: total,
        customerName: fullName,
        username: currentUser ? currentUser.username : null,
        phone: phone,
        address: address + ', ' + city,
        date: new Date().toLocaleDateString('vi-VN')
    });

    localStorage.setItem('orders', JSON.stringify(orders));
    
    if (localStorage.getItem('jade_chamber_checkout_selection')) { // If specific items were selected for checkout
        const orderedItemNames = new Set(itemsToOrder.map(item => item.name)); // Get names of ordered items
        cart = cart.filter(item => !orderedItemNames.has(item.name)); // Remove ordered items from main cart
        localStorage.removeItem('jade_chamber_checkout_selection'); // Clear checkout selection
    } else {
        cart = []; // If no specific selection, clear all
    }

    saveAndUpdate(); // Update cart and UI
    alert("Đặt hàng thành công! Hệ thống sẽ chuyển về trang chủ.");
    window.location.href = "index.html";
}
