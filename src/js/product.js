// Product Management JavaScript

// Tunggu sampai halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    
    // Tangkap tombol-tombol
    const addBtn = document.querySelector('.add-product-btn');
    const editBtns = document.querySelectorAll('.edit-btn');
    const deleteBtns = document.querySelectorAll('.delete-btn');
    const starBtns = document.querySelectorAll('.star-btn');

    // Fungsi untuk tombol Add Product
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            alert('Fitur tambah produk akan segera hadir!');
        });
    }

    // Fungsi untuk tombol Edit
    editBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const productName = btn.closest('.product-item').querySelector('.product-name').textContent;
            alert(`Edit produk: ${productName}`);
        });
    });

    // Fungsi untuk tombol Delete
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const productName = btn.closest('.product-item').querySelector('.product-name').textContent;
            if (confirm(`Yakin ingin hapus produk: ${productName}?`)) {
                btn.closest('.product-item').remove();
            }
        });
    });

    // Fungsi untuk tombol Star
    starBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            const productItem = btn.closest('.product-item');
            
            if (btn.classList.contains('active')) {
                productItem.classList.add('featured');
            } else {
                productItem.classList.remove('featured');
            }
        });
    });
});