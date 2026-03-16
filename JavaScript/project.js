document.addEventListener('DOMContentLoaded', () => {
    const myProjects = [
        { 
            name: "ChairOrDie", 
            status: "Scolaire",
            desc: "Jeu multijoueur local.",
            img: "logo_refait.png", 
            link: "https://github.com/Mattewkerlidou/ChairOrDie"
        },
        { 
            name: "Portfolio", 
            status: "Personnel",
            desc: "Vous êtes déjà dedans 😏",
            img: "portfolio_logo.png",
            link: "#",
            isSpecial: true 
        },
        { 
            name: "2D-games", 
            status: "Scolaire",
            desc: "Projet scolaire : jeu en 2D.",
            img: "2Dgames.gif", 
            link: "https://github.com/Mattewkerlidou/2D-games"
        },
        { 
            name: "CarboneIUT", 
            status: "Scolaire",
            desc: "Calcul d'empreinte carbone.",
            img: "carbonne.jpg", 
            link: "https://git.iut-orsay.fr/mkerlid/carboneiut_kerlidou_petaud"
        }
    ];

    const projectsGrid = document.getElementById('projects-grid');
    const customAlert = document.getElementById('custom-alert');
    const alertClose = document.getElementById('alert-close');

    if (projectsGrid) {
        myProjects.forEach(proj => {
            const card = document.createElement('div');
            card.className = 'project-card';
            // Ajout du style curseur pour montrer que c'est cliquable
            card.style.cursor = 'pointer';
            
            card.innerHTML = `
                <div class="project-preview" style="background-image: url('image/${proj.img}')"></div>
                <div class="project-info">
                    <span class="project-status">${proj.status}</span>
                    <h2>${proj.name}</h2>
                    <p>${proj.desc}</p>
                    <span class="project-link">${proj.isSpecial ? 'Découvrir' : 'Voir le projet ➔'}</span>
                </div>
            `;

            // Événement de clic sur TOUTE la carte
            card.addEventListener('click', () => {
                if (proj.isSpecial) {
                    customAlert.classList.remove('hidden');
                } else {
                    window.location.href = proj.link;
                }
            });

            projectsGrid.appendChild(card);
        });
    }

    if (alertClose) {
        alertClose.addEventListener('click', (e) => {
            e.stopPropagation(); // Empêche de redéclencher le clic sur la carte en dessous
            customAlert.classList.add('hidden');
        });
    }
});