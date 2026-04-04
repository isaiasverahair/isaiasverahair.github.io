/* ==================== MENU HAMBÚRGUER ==================== */
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Fechar menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
});

/* ==================== SCROLL SUAVE PARA ÂNCORAS ==================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Ignorar âncoras vazias ou href="#"
        if (href === '#' || href === '') {
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

/* ==================== EFEITO DE NAVBAR AO SCROLL ==================== */
const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = 'var(--shadow-medium)';
    } else {
        header.style.boxShadow = 'var(--shadow-soft)';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

/* ==================== ANIMAÇÃO DE ENTRADA (INTERSECTION OBSERVER) ==================== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Animar cards de serviços
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Animar cards de avaliações
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Animar itens da galeria
document.querySelectorAll('.gallery-item').forEach(item => {
    item.style.opacity = '0';
    observer.observe(item);
});

/* ==================== RIPPLE EFFECT NOS BOTÕES ==================== */
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        // Remover ripple anterior se existir
        const existingRipple = this.querySelector('.ripple');
        if (existingRipple) {
            existingRipple.remove();
        }

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

/* ==================== VALIDAÇÃO E ENVIO DE FORMULÁRIO ==================== */
document.addEventListener('DOMContentLoaded', () => {
    // Sincronizar comportamento de links internos para WhatsApp
    document.querySelectorAll('a[href^="https://wa.me/"]').forEach(link => {
        link.addEventListener('click', function(e) {
            // Permitir comportamento padrão para abrir WhatsApp
            // não é necessário preventDefault
        });
    });
});

/* ==================== SCROLL SPY (INDICADOR DE SEÇÃO) ==================== */
(function () {
    const sectionMap = [
        { id: 'inicio',    label: 'Início' },
        { id: 'servicos',  label: 'Serviços' },
        { id: 'avaliacoes', label: 'Avaliações' },
        { id: 'contato',   label: 'Localização' },
        { id: 'sobre',     label: 'Sobre' },
    ];

    function updateIndicator() {
        const indicator = document.getElementById('sectionIndicator');
        if (!indicator) return;
        const scrollPos = window.scrollY + 120;
        let current = sectionMap[0];
        for (const section of sectionMap) {
            const el = document.getElementById(section.id);
            if (el && el.offsetTop <= scrollPos) current = section;
        }
        indicator.textContent = current.label;
    }

    window.addEventListener('scroll', updateIndicator, { passive: true });
    updateIndicator();
})();

/* ==================== PRELOADER / FADE-IN DA PÁGINA ==================== */
window.addEventListener('load', () => {
    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
});

/* ==================== ADICIONAR ESTILOS DINÂMICOS PARA RIPPLE ==================== */
const style = document.createElement('style');
style.textContent = `
    .btn-primary {
        position: relative;
        overflow: hidden;
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
