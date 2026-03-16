document.addEventListener('DOMContentLoaded', () => {

    // ---------------------------
    // 1. CURSEUR CUSTOM
    // ---------------------------
    const cursor = document.getElementById('custom-cursor');

    if (cursor) {
        // Suit le mouvement de la souris en temps réel
        document.addEventListener('mousemove', e => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';

            // e.target.closest() vérifie si l'élément sous la souris OU un de ses parents correspond
            const isHovering = e.target.closest('a, button, .project-card, input, textarea');
            
            if (isHovering) {
                cursor.classList.add('hover');
            } else {
                cursor.classList.remove('hover');
            }
        });
    }

    // ---------------------------
    // 2. ALERT CUSTOM POUR PORTFOLIO (Easter Egg)
    // ---------------------------
    const portfolioFunBtn = document.getElementById('portfolio-fun-btn');
    const portfolioFunCard = document.getElementById('portfolio-fun');
    const customAlert = document.getElementById('custom-alert');
    const alertClose = document.getElementById('alert-close');

    // Fonction pour afficher l'alerte
    const triggerAlert = (e) => {
        e.preventDefault();
        e.stopPropagation(); // Empêche le clic de se propager
        if (customAlert) customAlert.classList.remove('hidden');
    };

    // On déclenche l'alerte si on clique sur le bouton OU sur la carte entière
    if (portfolioFunBtn) portfolioFunBtn.addEventListener('click', triggerAlert);
    if (portfolioFunCard) portfolioFunCard.addEventListener('click', triggerAlert);

    // Fermer l'alerte
    if (alertClose && customAlert) {
        alertClose.addEventListener('click', () => {
            customAlert.classList.add('hidden');
        });
    }

    // ---------------------------
    // 3. CLICK SUR LES CARTES PROJETS
    // ---------------------------
    // On sélectionne toutes les cartes SAUF celle du portfolio (qui gère l'alerte)
    const projectCards = document.querySelectorAll('.project-card:not(#portfolio-fun)');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const link = card.querySelector('a');
            if (link) {
                window.location.href = link.getAttribute('href');
            }
        });
    });

    console.log("Script chargé avec succès ✅");
});



