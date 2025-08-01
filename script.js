const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Tambahkan padding bottom sementara saat menu dibuka
    if (navMenu.classList.contains('active')) {
        document.body.style.paddingBottom = navMenu.offsetHeight + 'px';
    } else {
        document.body.style.paddingBottom = '0';
    }
});

// Tutup menu saat klik link
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.paddingBottom = '0';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active link highlighting
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

// Lightbox sederhana
document.querySelectorAll('.galeri-item').forEach(item => {
    item.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').src;
        const title = this.querySelector('h3').textContent;
        const desc = this.querySelector('p').textContent;
        
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="close">&times;</span>
                <img src="${imgSrc}" alt="${title}">
                <div class="lightbox-caption">
                    <h3>${title}</h3>
                    <p>${desc}</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(lightbox);
        
        lightbox.querySelector('.close').addEventListener('click', function() {
            lightbox.remove();
        });
    });
});

// Simple gallery functionality (for galeri.html)
// Can be expanded later