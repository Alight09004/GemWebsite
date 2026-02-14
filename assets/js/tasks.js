function renderGems(data = null) {
    const list = data || getGems();
    const container = document.getElementById('gemContainer');
    container.innerHTML = '';

    list.forEach(item => {
        container.innerHTML += `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="task-card priority-${item.priority} ${item.status === 'Done' ? 'status-done' : ''}">
                    <div class="d-flex justify-content-between align-items-start">
                        <small class="text-muted">#${item.id.toString().slice(-4)}</small>
                        <span class="badge ${item.status === 'Done' ? 'bg-success' : 'bg-warning'} text-dark">
                            ${item.status === 'Done' ? 'Hết hàng' : 'Còn hàng'}
                        </span>
                    </div>
                    <h3 class="mt-2" style="font-family: 'Playfair Display', serif;">${item.title}</h3>
                    <p class="small text-muted mb-3">${item.desc}</p>
                    <div class="border-top pt-3 d-flex justify-content-between align-items-center">
                        <div>
                            <p class="mb-0 small fw-bold text-gold">Hạn: ${item.deadline}</p>
                        </div>
                        <div>
                            <button onclick="toggleDone(${item.id})" class="btn-custom btn-dark" style="padding: 5px 10px; font-size: 0.7rem;">Trạng thái</button>
                            <button onclick="openEditModal(${item.id})" class="btn-custom btn-gold" style="padding: 5px 10px; font-size: 0.7rem;">Sửa</button>
                            <button onclick="deleteGem(${item.id})" class="btn-custom btn-dark" style="background: #dc3545; padding: 5px 10px; font-size: 0.7rem;">Xóa</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}