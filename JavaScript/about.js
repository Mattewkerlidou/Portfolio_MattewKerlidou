document.addEventListener('DOMContentLoaded', () => {

    // =========================================
    // 4. GÉNÉRATION DYNAMIQUE DES COMPÉTENCES
    // =========================================

    // On ne met QUE le nom du fichier ici pour plus de clarté
    const languages = [
        { name: "HTML", img: "skills-prog-html.png" },
        { name: "CSS", img: "Icone-css.png" },
        { name: "JavaScript", img: "skills-prog-javascript.png" },
        { name: "Java", img: "java.png" },
        { name: "C++", img: "skills-prog-c++.png" },
        { name: "C#", img: "skills-prog-cs.png" },
        { name: "SQL", img: "skills-prog-sql.png" },
        { name: "PL/SQL", img: "skills-prog-plsql.png" },
        { name: "Assembleur x86-64", img: "skills-prog-x86asm.png" },
        { name: "PHP", img: "php_logo.png" }
    ];

    const tools = [
        { name: "VS Code", img: "skills-vscode.png" },
        { name: "IntelliJ IDEA", img: "IntelliJ_IDEA_Icon.svg.png" }, // Vérifie le nom du fichier !
        { name: "Android Studio", img: "android-studio-icon.webp" }, // Vérifie le nom du fichier !
        { name: "Visual Studio", img: "skills-visualstudio.png" },
        { name: "Git", img: "skills-software-git.png" },
        { name: "SQL Developer", img: "skills-software-sqldev.png" },
        { name: "Logisim", img: "skills-software-logisim.png" },
        { name: "Premiere Pro", img: "skills-premiere-pro.png" },
        { name: "Microsoft Office", img: "skills-office.png" },
        { name: "LibreOffice", img: "skills-libre.png" }    
        

    ];

    const langGrid = document.getElementById('languages-grid');
    const toolsGrid = document.getElementById('tools-grid');

    // Génération des cartes Langages
    if (langGrid) {
        languages.forEach(skill => {
            langGrid.innerHTML += `
                <div class="skill-card">
                    <img src="image/langage_informatique/${skill.img}" alt="${skill.name}" class="skill-icon">
                    <h3>${skill.name}</h3>
                </div>
            `;
        });
    }

    // Génération des cartes Logiciels
    if (toolsGrid) {
        tools.forEach(tool => {
            toolsGrid.innerHTML += `
                <div class="skill-card">
                    <img src="image/logiciel/${tool.img}" alt="${tool.name}" class="skill-icon">
                    <h3>${tool.name}</h3>
                </div>
            `;
        });
    }

});