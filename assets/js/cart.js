// Cart Management Module
let cart = JSON.parse(localStorage.getItem('jade_chamber_cart')) || [];

// Initialize cart UI when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    
    // Hide messenger button when cart offcanvas opens
    const cartOffcanvas = document.getElementById('cartOffcanvas');
    const messengerBtn = document.querySelector('.contact-messenger-wrapper');
    
    if (cartOffcanvas && messengerBtn) {
        // Using Bootstrap's offcanvas events
        cartOffcanvas.addEventListener('show.bs.offcanvas', () => {
            messengerBtn.style.display = 'none';
        });
        
        cartOffcanvas.addEventListener('hide.bs.offcanvas', () => {
            messengerBtn.style.display = 'block';
        });
    }
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

    // Open cart offcanvas
    const cartEl = document.getElementById('cartOffcanvas');
    if (cartEl && typeof bootstrap !== 'undefined') {
        const bsOffcanvas = new bootstrap.Offcanvas(cartEl);
        bsOffcanvas.show();
    }
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

// Optional: Clear cart function
function clearCart() {
    if (confirm('Bạn chắc chắn muốn xóa tất cả sản phẩm?')) {
        cart = [];
        saveAndUpdate();
    }
}
