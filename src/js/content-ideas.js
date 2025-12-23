document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const ideaForm = document.getElementById('ideaForm');
    const platformFilter = document.getElementById('platformFilter');
    const ideasGrid = document.getElementById('ideasGrid');
    const ideaCards = document.querySelectorAll('.idea-card');
    
    // Platform colors for consistent styling
    const platformColors = {
        instagram: '#E1306C',
        youtube: '#FF0000',
        tiktok: '#000000',
        whatsapp: '#25D366',
        facebook: '#1877F2',
        twitter: '#1DA1F2'
    };
    
    // Handle form submission
    ideaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const product = document.getElementById('product').value;
        const businessType = document.getElementById('businessType').value;
        const contentPurpose = document.getElementById('contentPurpose').value;
        const platformCheckboxes = document.querySelectorAll('input[name="platform"]:checked');
        const platforms = Array.from(platformCheckboxes).map(cb => cb.value);
        
        // Validate at least one platform is selected
        if (platforms.length === 0) {
            showToast('Pilih minimal satu platform', 'warning');
            return;
        }
        
        // In a real app, this would send data to a server
        // For now, we'll just show a success message
        showToast('Ide konten berhasil dibuat!', 'success');
        
        // Reset form
        ideaForm.reset();
        
        // In a real app, you would add the new idea to the grid
        // For now, we'll just simulate it by adding a new card
        addNewIdeaCard(product, businessType, contentPurpose, platforms);
    });
    
    // Handle platform filter
    platformFilter.addEventListener('change', function() {
        const selectedPlatform = this.value;
        
        ideaCards.forEach(card => {
            if (selectedPlatform === 'all' || card.dataset.platform === selectedPlatform) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    // Function to add a new idea card to the grid
    function addNewIdeaCard(product, businessType, contentPurpose, platforms) {
        // Create a new card element
        const newCard = document.createElement('div');
        newCard.className = 'idea-card card';
        newCard.dataset.platform = platforms[0]; // Use the first platform for filtering
        
        // Get current date
        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate()} ${getMonthName(currentDate.getMonth())} ${currentDate.getFullYear()}`;
        
        // Generate a title based on the inputs
        const title = `Ide Konten untuk ${product}`;
        
        // Create card HTML
        newCard.innerHTML = `
            <div class="idea-header">
                <div class="idea-platform ${platforms[0]}">
                    <i class="fab fa-${platforms[0]}"></i>
                    <span>${capitalizeFirst(platforms[0])}</span>
                </div>
                <div class="idea-date">${formattedDate}</div>
            </div>
            <h3 class="idea-title">${title}</h3>
            <p class="idea-description">${contentPurpose}</p>
            <div class="idea-actions">
                <button class="btn btn-sm btn-secondary">Lihat Detail</button>
                <button class="btn btn-sm btn-primary">Gunakan</button>
            </div>
        `;
        
        // Add to the beginning of the grid
        ideasGrid.insertBefore(newCard, ideasGrid.firstChild);
        
        // Add animation
        newCard.style.opacity = '0';
        newCard.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            newCard.style.transition = 'all 0.3s ease';
            newCard.style.opacity = '1';
            newCard.style.transform = 'translateY(0)';
        }, 10);
        
        // Update the idea cards list
        document.querySelectorAll('.idea-card').forEach(card => {
            card.addEventListener('click', function(e) {
                if (!e.target.closest('button')) {
                    // Handle card click if needed
                }
            });
        });
    }
    
    // Helper function to get month name
    function getMonthName(monthIndex) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
        return months[monthIndex];
    }
    
    // Helper function to capitalize first letter
    function capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    // Function to show toast notification
    function showToast(message, type = 'info') {
        // Check if toast container exists
        let toastContainer = document.querySelector('.toast-container');
        
        if (!toastContainer) {
            // Create toast container
            toastContainer = document.createElement('div');
            toastContainer.className = 'toast-container';
            document.body.appendChild(toastContainer);
        }
        
        // Create toast element
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        // Set icon based on type
        let icon = 'fa-info-circle';
        if (type === 'success') icon = 'fa-check-circle';
        if (type === 'warning') icon = 'fa-exclamation-triangle';
        if (type === 'error') icon = 'fa-times-circle';
        
        // Set toast HTML
        toast.innerHTML = `
            <div class="toast-icon"><i class="fas ${icon}"></i></div>
            <div class="toast-message">${message}</div>
            <button class="toast-close"><i class="fas fa-times"></i></button>
        `;
        
        // Add to container
        toastContainer.appendChild(toast);
        
        // Show toast
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        // Hide toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            toast.classList.add('hide');
            
            // Remove from DOM after animation
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
        
        // Handle close button
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', function() {
            toast.classList.remove('show');
            toast.classList.add('hide');
            
            setTimeout(() => {
                toast.remove();
            }, 300);
        });
    }
    
    // Add click handlers to existing idea cards
    document.querySelectorAll('.idea-card').forEach(card => {
        const viewDetailBtn = card.querySelector('.btn-secondary');
        const useBtn = card.querySelector('.btn-primary');
        
        if (viewDetailBtn) {
            viewDetailBtn.addEventListener('click', function() {
                const title = card.querySelector('.idea-title').textContent;
                showToast(`Melihat detail: ${title}`, 'info');
            });
        }
        
        if (useBtn) {
            useBtn.addEventListener('click', function() {
                const title = card.querySelector('.idea-title').textContent;
                showToast(`Menggunakan ide: ${title}`, 'success');
            });
        }
    });
});