// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Filtros de productos
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Añadir al carrito (feedback)
const addToCartBtns = document.querySelectorAll('.add-to-cart');
addToCartBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const originalText = btn.innerHTML;
        btn.innerHTML = '✓ Añadido';
        btn.style.background = 'var(--success)';
        btn.style.color = 'white';
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.style.color = '';
        }, 1500);
    });
});

// Wishlist toggle
const wishlistBtns = document.querySelectorAll('.wishlist-btn');
wishlistBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        if (btn.classList.contains('active')) {
            btn.style.background = 'var(--secondary)';
            btn.style.color = 'white';
        } else {
            btn.style.background = 'white';
            btn.style.color = 'var(--gray-700)';
        }
    });
});

// Newsletter form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('input');
        const originalValue = input.value;
        input.value = '¡Gracias por suscribirte!';
        input.style.color = 'var(--success)';
        setTimeout(() => {
            input.value = '';
            input.style.color = '';
        }, 3000);
    });
}

// Countdown timer
function updateCountdown() {
    const countdownItems = document.querySelectorAll('.countdown-number');
    if (countdownItems.length === 0) return;
    
    let seconds = parseInt(countdownItems[3].textContent);
    let minutes = parseInt(countdownItems[2].textContent);
    let hours = parseInt(countdownItems[1].textContent);
    let days = parseInt(countdownItems[0].textContent);

    setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
                if (hours < 0) {
                    hours = 23;
                    days--;
                    if (days < 0) days = 0;
                }
            }
        }
        countdownItems[0].textContent = String(days).padStart(2, '0');
        countdownItems[1].textContent = String(hours).padStart(2, '0');
        countdownItems[2].textContent = String(minutes).padStart(2, '0');
        countdownItems[3].textContent = String(seconds).padStart(2, '0');
    }, 1000);
}
updateCountdown();

// Smooth scroll para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
