document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const captionForm = document.getElementById('captionForm');
    const resultsSection = document.getElementById('resultsSection');
    const captionOptions = document.getElementById('captionOptions');
    const searchSection = document.getElementById('searchSection');
    const searchInput = document.getElementById('searchInput');
    const platformFilter = document.getElementById('platformFilter');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Sample caption templates for different platforms and types
    const captionTemplates = {
        instagram: {
            promosi: [
                "🔥 PROMO SPESIAL! {product} dengan diskon {discount}% hanya untuk hari ini! Jangan lewatkan kesempatan emas ini! 🎯 #Promo #Diskon #UMKM",
                "✨ Hadiah spesial untuk Anda! {product} kini tersedia dengan harga terbaik. Cek link di bio untuk order! 🛍️ #SpecialOffer #Shopping",
                "🎉 Selamat datang di {product}! Dapatkan pengalaman terbaik dengan kualitas premium. Promo berlaku sampai akhir bulan! 🌟 #Welcome #Premium"
            ],
            edukasi: [
                "📚 Did you know? {product} memiliki manfaat luar biasa untuk kesehatan Anda. Simak penjelasan lengkap di caption ini! 💡 #Edukasi #Kesehatan",
                "🔬 Fakta menarik tentang {product} yang mungkin belum Anda ketahui. Penasaran? Baca sampai akhir! 🤔 #Fakta #Pengetahuan",
                "🌱 Cara menggunakan {product} dengan benar untuk hasil maksimal. Tips dari ahli kami di sini! 👨‍🔬 #Tutorial #Tips"
            ],
            engagement: [
                "🤔 Pertanyaan untuk followers: Apa yang Anda cari di {product}? Share di komentar! 👇 #Engagement #Community",
                "📸 Tag teman yang butuh {product}! Mereka akan terima hadiah spesial dari kami. 🎁 #TagAFriend #Giveaway",
                "🎯 Poll: Mana yang Anda prefer? {product} versi A atau B? Vote di komentar! 🗳️ #Poll #Vote"
            ],
            storytelling: [
                "📖 Kisah sukses {product} dari pelanggan kami. Dari mimpi menjadi kenyataan! ✨ #SuccessStory #Inspirasi",
                "🌟 Perjalanan {product} dari awal hingga sekarang. Semua usaha membuahkan hasil! 💪 #Journey #Success",
                "💝 Mengenal lebih dekat {product}. Cerita di balik produk favorit Anda! 🎭 #BehindTheScenes #Story"
            ],
            tips: [
                "💡 Tips & Trik: Cara merawat {product} agar awet dan tahan lama. Simak tips lengkapnya! 🔧 #Maintenance #Care",
                "🎯 5 cara menggunakan {product} yang belum banyak diketahui. Wajib coba! 🚀 #SecretTips #LifeHack",
                "⚡ Efek samping {product} yang harus Anda ketahui. Informasi penting untuk kesehatan Anda! ⚠️ #Important #Health"
            ]
        },
        facebook: {
            promosi: [
                "🔥 PROMO SPESIAL! {product} dengan diskon {discount}% hanya untuk hari ini! Jangan lewatkan kesempatan emas ini! 🎯\n\nKunjungi website kami untuk informasi lebih lanjut: [link]\n\n#Promo #Diskon #UMKM",
                "✨ Hadiah spesial untuk Anda! {product} kini tersedia dengan harga terbaik. Promo berlaku sampai akhir bulan!\n\nUntuk order, hubungi kami di: [contact]\n\n#SpecialOffer #Shopping"
            ],
            edukasi: [
                "📚 Did you know? {product} memiliki manfaat luar biasa untuk kesehatan Anda. Simak penjelasan lengkap di caption ini!\n\nManfaat utama:\n1. Benefit 1\n2. Benefit 2\n3. Benefit 3\n\n#Edukasi #Kesehatan",
                "🔬 Fakta menarik tentang {product} yang mungkin belum Anda ketahui. Penasaran? Baca sampai akhir!\n\nFakta-fakta menarik:\n• Fakta 1\n• Fakta 2\n• Fakta 3\n\n#Fakta #Pengetahuan"
            ],
            engagement: [
                "🤔 Pertanyaan untuk followers: Apa yang Anda cari di {product}? Share di komentar!\n\nKami akan memilih 3 komentar terbaik untuk mendapatkan hadiah spesial! 🎁\n\n#Engagement #Community",
                "📸 Tag teman yang butuh {product}! Mereka akan terima hadiah spesial dari kami.\n\nSyarat & Ketentuan:\n1. Follow akun kami\n2. Tag 5 teman\n3. Share post ini\n\n#TagAFriend #Giveaway"
            ],
            storytelling: [
                "📖 Kisah sukses {product} dari pelanggan kami. Dari mimpi menjadi kenyataan!\n\nTestimoni: \"Saya sangat puas dengan {product} karena...\"\n\n#SuccessStory #Inspirasi",
                "🌟 Perjalanan {product} dari awal hingga sekarang. Semua usaha membuahkan hasil!\n\nTimeline:\n• 2020: Awal perjalanan\n• 2021: Pengembangan\n• 2022: Sukses\n\n#Journey #Success"
            ],
            tips: [
                "💡 Tips & Trik: Cara merawat {product} agar awet dan tahan lama. Simak tips lengkapnya!\n\nTips:\n1. Tip 1\n2. Tip 2\n3. Tip 3\n\n#Maintenance #Care",
                "🎯 5 cara menggunakan {product} yang belum banyak diketahui. Wajib coba!\n\nCara-cara:\n1. Cara 1\n2. Cara 2\n3. Cara 3\n4. Cara 4\n5. Cara 5\n\n#SecretTips #LifeHack"
            ]
        },
        twitter: {
            promosi: [
                "🔥 PROMO SPESIAL! {product} dengan diskon {discount}% hanya untuk hari ini! Jangan lewatkan kesempatan emas ini! 🎯 #Promo #Diskon #UMKM",
                "✨ Hadiah spesial untuk Anda! {product} kini tersedia dengan harga terbaik. Promo berlaku sampai akhir bulan! 🛍️ #SpecialOffer #Shopping"
            ],
            edukasi: [
                "📚 Did you know? {product} memiliki manfaat luar biasa untuk kesehatan Anda. Simak penjelasan lengkap di caption ini! 💡 #Edukasi #Kesehatan",
                "🔬 Fakta menarik tentang {product} yang mungkin belum Anda ketahui. Penasaran? Baca sampai akhir! 🤔 #Fakta #Pengetahuan"
            ],
            engagement: [
                "🤔 Pertanyaan untuk followers: Apa yang Anda cari di {product}? Share di komentar! 👇 #Engagement #Community",
                "📸 Tag teman yang butuh {product}! Mereka akan terima hadiah spesial dari kami. 🎁 #TagAFriend #Giveaway"
            ],
            storytelling: [
                "📖 Kisah sukses {product} dari pelanggan kami. Dari mimpi menjadi kenyataan! ✨ #SuccessStory #Inspirasi",
                "🌟 Perjalanan {product} dari awal hingga sekarang. Semua usaha membuahkan hasil! 💪 #Journey #Success"
            ],
            tips: [
                "💡 Tips & Trik: Cara merawat {product} agar awet dan tahan lama. Simak tips lengkapnya! 🔧 #Maintenance #Care",
                "🎯 5 cara menggunakan {product} yang belum banyak diketahui. Wajib coba! 🚀 #SecretTips #LifeHack"
            ]
        },
        tiktok: {
            promosi: [
                "🔥 PROMO SPESIAL! {product} dengan diskon {discount}% hanya untuk hari ini! Jangan lewatkan kesempatan emas ini! 🎯 #Promo #Diskon #UMKM",
                "✨ Hadiah spesial untuk Anda! {product} kini tersedia dengan harga terbaik. Cek link di bio untuk order! 🛍️ #SpecialOffer #Shopping"
            ],
            edukasi: [
                "📚 Did you know? {product} memiliki manfaat luar biasa untuk kesehatan Anda. Simak penjelasan lengkap di caption ini! 💡 #Edukasi #Kesehatan",
                "🔬 Fakta menarik tentang {product} yang mungkin belum Anda ketahui. Penasaran? Baca sampai akhir! 🤔 #Fakta #Pengetahuan"
            ],
            engagement: [
                "🤔 Pertanyaan untuk followers: Apa yang Anda cari di {product}? Share di komentar! 👇 #Engagement #Community",
                "📸 Tag teman yang butuh {product}! Mereka akan terima hadiah spesial dari kami. 🎁 #TagAFriend #Giveaway"
            ],
            storytelling: [
                "📖 Kisah sukses {product} dari pelanggan kami. Dari mimpi menjadi kenyataan! ✨ #SuccessStory #Inspirasi",
                "🌟 Perjalanan {product} dari awal hingga sekarang. Semua usaha membuahkan hasil! 💪 #Journey #Success"
            ],
            tips: [
                "💡 Tips & Trik: Cara merawat {product} agar awet dan tahan lama. Simak tips lengkapnya! 🔧 #Maintenance #Care",
                "🎯 5 cara menggunakan {product} yang belum banyak diketahui. Wajib coba! 🚀 #SecretTips #LifeHack"
            ]
        },
        youtube: {
            promosi: [
                "🔥 PROMO SPESIAL! {product} dengan diskon {discount}% hanya untuk hari ini! Jangan lewatkan kesempatan emas ini! 🎯\n\nKlik link di deskripsi untuk order sekarang juga!\n\n#Promo #Diskon #UMKM",
                "✨ Hadiah spesial untuk Anda! {product} kini tersedia dengan harga terbaik. Promo berlaku sampai akhir bulan!\n\nUntuk order, kunjungi website kami di link di bawah!\n\n#SpecialOffer #Shopping"
            ],
            edukasi: [
                "📚 Did you know? {product} memiliki manfaat luar biasa untuk kesehatan Anda. Simak penjelasan lengkap di video ini!\n\nTimestamp:\n00:00 - Intro\n00:30 - Manfaat utama\n01:15 - Cara penggunaan\n02:00 - Kesimpulan\n\n#Edukasi #Kesehatan",
                "🔬 Fakta menarik tentang {product} yang mungkin belum Anda ketahui. Penasaran? Tonton video sampai akhir!\n\nFakta-fakta menarik:\n• Fakta 1\n• Fakta 2\n• Fakta 3\n\n#Fakta #Pengetahuan"
            ],
            engagement: [
                "🤔 Pertanyaan untuk viewers: Apa yang Anda cari di {product}? Share di komentar!\n\nKami akan memilih 3 komentar terbaik untuk mendapatkan hadiah spesial! 🎁\n\n#Engagement #Community",
                "📸 Tag teman yang butuh {product}! Mereka akan terima hadiah spesial dari kami.\n\nSyarat & Ketentuan:\n1. Subscribe channel\n2. Like video\n3. Comment \"I want {product}\"\n\n#TagAFriend #Giveaway"
            ],
            storytelling: [
                "📖 Kisah sukses {product} dari pelanggan kami. Dari mimpi menjadi kenyataan!\n\nTestimoni: \"Saya sangat puas dengan {product} karena...\"\n\n#SuccessStory #Inspirasi",
                "🌟 Perjalanan {product} dari awal hingga sekarang. Semua usaha membuahkan hasil!\n\nTimeline:\n• 2020: Awal perjalanan\n• 2021: Pengembangan\n• 2022: Sukses\n\n#Journey #Success"
            ],
            tips: [
                "💡 Tips & Trik: Cara merawat {product} agar awet dan tahan lama. Simak tips lengkapnya!\n\nTips:\n1. Tip 1\n2. Tip 2\n3. Tip 3\n\n#Maintenance #Care",
                "🎯 5 cara menggunakan {product} yang belum banyak diketahui. Wajib coba!\n\nCara-cara:\n1. Cara 1\n2. Cara 2\n3. Cara 3\n4. Cara 4\n5. Cara 5\n\n#SecretTips #LifeHack"
            ]
        },
        whatsapp: {
            promosi: [
                "🔥 PROMO SPESIAL! {product} dengan diskon {discount}% hanya untuk hari ini! Jangan lewatkan kesempatan emas ini! 🎯\n\nOrder sekarang: [link]\n\n#Promo #Diskon #UMKM",
                "✨ Hadiah spesial untuk Anda! {product} kini tersedia dengan harga terbaik. Promo berlaku sampai akhir bulan!\n\nHubungi kami: [contact]\n\n#SpecialOffer #Shopping"
            ],
            edukasi: [
                "📚 Did you know? {product} memiliki manfaat luar biasa untuk kesehatan Anda. Simak penjelasan lengkap di sini!\n\nManfaat utama:\n1. Benefit 1\n2. Benefit 2\n3. Benefit 3\n\n#Edukasi #Kesehatan",
                "🔬 Fakta menarik tentang {product} yang mungkin belum Anda ketahui. Penasaran? Baca sampai akhir!\n\nFakta-fakta menarik:\n• Fakta 1\n• Fakta 2\n• Fakta 3\n\n#Fakta #Pengetahuan"
            ],
            engagement: [
                "🤔 Pertanyaan untuk teman: Apa yang Anda cari di {product}? Share di komentar!\n\nKami akan memilih 3 komentar terbaik untuk mendapatkan hadiah spesial! 🎁\n\n#Engagement #Community",
                "📸 Tag teman yang butuh {product}! Mereka akan terima hadiah spesial dari kami.\n\nSyarat & Ketentuan:\n1. Forward status ini\n2. Tag 5 teman\n3. Komentar \"I want {product}\"\n\n#TagAFriend #Giveaway"
            ],
            storytelling: [
                "📖 Kisah sukses {product} dari pelanggan kami. Dari mimpi menjadi kenyataan!\n\nTestimoni: \"Saya sangat puas dengan {product} karena...\"\n\n#SuccessStory #Inspirasi",
                "🌟 Perjalanan {product} dari awal hingga sekarang. Semua usaha membuahkan hasil!\n\nTimeline:\n• 2020: Awal perjalanan\n• 2021: Pengembangan\n• 2022: Sukses\n\n#Journey #Success"
            ],
            tips: [
                "💡 Tips & Trik: Cara merawat {product} agar awet dan tahan lama. Simak tips lengkapnya!\n\nTips:\n1. Tip 1\n2. Tip 2\n3. Tip 3\n\n#Maintenance #Care",
                "🎯 5 cara menggunakan {product} yang belum banyak diketahui. Wajib coba!\n\nCara-cara:\n1. Cara 1\n2. Cara 2\n3. Cara 3\n4. Cara 4\n5. Cara 5\n\n#SecretTips #LifeHack"
            ]
        }
    };

    // Handle form submission
    captionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const product = document.getElementById('product').value;
        const captionType = document.getElementById('captionType').value;
        const keywords = document.getElementById('keywords').value;
        const platformCheckboxes = document.querySelectorAll('input[name="platform"]:checked');
        const platforms = Array.from(platformCheckboxes).map(cb => cb.value);
        
        // Validate at least one platform is selected
        if (platforms.length === 0) {
            showToast('Pilih minimal satu platform', 'warning');
            return;
        }
        
        // Show loading state
        const generateBtn = captionForm.querySelector('.generate-btn');
        const originalContent = generateBtn.innerHTML;
        generateBtn.innerHTML = '<div class="loading"></div> Generating...';
        generateBtn.disabled = true;
        
        // Simulate API call delay
        setTimeout(() => {
            generateCaptions(product, captionType, keywords, platforms);
            
            // Reset button
            generateBtn.innerHTML = originalContent;
            generateBtn.disabled = false;
            
            // Show results
            resultsSection.style.display = 'block';
            searchSection.style.display = 'block';
            
            // Scroll to results
            resultsSection.scrollIntoView({ behavior: 'smooth' });
        }, 1500);
    });
    
    // Generate captions based on form data
    function generateCaptions(product, captionType, keywords, platforms) {
        captionOptions.innerHTML = '';
        
        platforms.forEach(platform => {
            const templates = captionTemplates[platform][captionType];
            
            // Generate 3 captions for each platform
            for (let i = 0; i < 3; i++) {
                const template = templates[i % templates.length];
                const caption = template
                    .replace('{product}', product)
                    .replace('{discount}', Math.floor(Math.random() * 50) + 10)
                    .replace('{keywords}', keywords)
                    .replace('{link}', 'https://example.com/product')
                    .replace('{contact}', '0812-3456-7890');
                
                createCaptionCard(platform, captionType, caption, i + 1);
            }
        });
    }
    
    // Create caption card element
    function createCaptionCard(platform, type, content, index) {
        const card = document.createElement('div');
        card.className = 'caption-option';
        card.dataset.platform = platform;
        card.dataset.type = type;
        
        const platformColors = {
            instagram: '#E1306C',
            youtube: '#FF0000',
            tiktok: '#000000',
            whatsapp: '#25D366',
            facebook: '#1877F2',
            twitter: '#1DA1F2'
        };
        
        const platformIcons = {
            instagram: 'fab fa-instagram',
            youtube: 'fab fa-youtube',
            tiktok: 'fab fa-tiktok',
            whatsapp: 'fab fa-whatsapp',
            facebook: 'fab fa-facebook',
            twitter: 'fab fa-twitter'
        };
        
        const characterCount = content.length;
        const characterClass = characterCount > 2800 ? 'danger' : characterCount > 2200 ? 'warning' : '';
        
        card.innerHTML = `
            <div class="caption-header">
                <div class="caption-platform">
                    <i class="${platformIcons[platform]}" style="color: ${platformColors[platform]}"></i>
                    <span>${platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
                </div>
                <div class="caption-actions">
                    <button class="action-btn copy-btn" onclick="copyToClipboard('${content.replace(/'/g, "\\'")}', this)">
                        <i class="fas fa-copy"></i> Copy
                    </button>
                    <button class="action-btn" onclick="previewCaption('${content.replace(/'/g, "\\'")}', '${platform}')">
                        <i class="fas fa-eye"></i> Preview
                    </button>
                </div>
            </div>
            <div class="caption-content">${content}</div>
            <div class="caption-stats">
                <span class="character-count ${characterClass}">${characterCount} karakter</span>
                <span>Option ${index}</span>
            </div>
        `;
        
        captionOptions.appendChild(card);
    }
    
    // Copy to clipboard function
    window.copyToClipboard = function(text, button) {
        navigator.clipboard.writeText(text).then(() => {
            const originalContent = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i> Copied!';
            button.style.background = '#10b981';
            button.style.color = 'white';
            
            setTimeout(() => {
                button.innerHTML = originalContent;
                button.style.background = '';
                button.style.color = '';
            }, 2000);
            
            showToast('Caption berhasil disalin ke clipboard!', 'success');
        }).catch(() => {
            showToast('Gagal menyalin caption', 'error');
        });
    };
    
    // Preview caption function
    window.previewCaption = function(text, platform) {
        showToast(`Preview caption untuk ${platform}`, 'info');
        // In a real app, this would open a modal or new tab with preview
    };
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const captionCards = document.querySelectorAll('.caption-option');
        
        captionCards.forEach(card => {
            const content = card.querySelector('.caption-content').textContent.toLowerCase();
            const platform = card.dataset.platform.toLowerCase();
            
            if (content.includes(searchTerm) || platform.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            const captionCards = document.querySelectorAll('.caption-option');
            
            captionCards.forEach(card => {
                if (filter === 'all' || card.dataset.platform === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Platform filter
    platformFilter.addEventListener('change', function() {
        const filter = this.value;
        const captionCards = document.querySelectorAll('.caption-option');
        
        captionCards.forEach(card => {
            if (filter === 'all' || card.dataset.platform === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    // Toast notification function
    function showToast(message, type = 'info') {
        let toastContainer = document.querySelector('.toast-container');
        
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.className = 'toast-container';
            document.body.appendChild(toastContainer);
        }
        
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        let icon = 'fa-info-circle';
        if (type === 'success') icon = 'fa-check-circle';
        if (type === 'warning') icon = 'fa-exclamation-triangle';
        if (type === 'error') icon = 'fa-times-circle';
        
        toast.innerHTML = `
            <div class="toast-icon"><i class="fas ${icon}"></i></div>
            <div class="toast-message">${message}</div>
            <button class="toast-close"><i class="fas fa-times"></i></button>
        `;
        
        toastContainer.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            toast.classList.remove('show');
            toast.classList.add('hide');
            
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3000);
        
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', function() {
            toast.classList.remove('show');
            toast.classList.add('hide');
            
            setTimeout(() => {
                toast.remove();
            }, 300);
        });
    }
});