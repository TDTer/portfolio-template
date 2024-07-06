var lastModal;

function changeClass(modalType) {
    document.getElementById("modal-c").className = modalType;
    document.body.classList.add("body-opened");
}

function returnBody(modalType) {
    document.body.classList.remove("body-opened");
}

function openModal(projectId) {
    changeClass('modal-content');
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");
    // Update modal content based on the project clicked
    var projectContent = getProjectContent(projectId);
    modalContent.innerHTML = projectContent;

    modal.style.display = "block";
    modal.scrollTop = 0;
    modal.classList.add('slide-in-up');

    var content = document.getElementById('modal-c');
    content.scrollTop = 0;
    window.addEventListener('click', outsideClick);
}

function openModalAbout(projectId) {
    changeClass('about-modal-content');
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");
    // Update modal content based on the project clicked
    var projectContent = getProjectContent(projectId);
    modalContent.innerHTML = projectContent;

    modal.style.display = "block";
    modal.scrollTop = 0;
    modal.classList.add('slide-in-up');

    var content = document.getElementById('modal-c');
    content.scrollTop = 0;
    window.addEventListener('click', outsideClickAbout);
}

function openModalContact(projectId) {
    changeClass('contact-modal-content');
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");
    // Update modal content based on the project clicked
    var projectContent = getProjectContent(projectId);
    modalContent.innerHTML = projectContent;

    modal.style.display = "block";
    modal.scrollTop = 0;
    modal.classList.add('slide-in-up');

    var content = document.getElementById('modal-c');
    content.scrollTop = 0;
    window.addEventListener('click', outsideClickContact);
}

function closeModal() {
    var modal = document.getElementById("myModal");
    var youtubeVideo = document.getElementById("youtubeVideo");
    returnBody();

    youtubeVideo.src = "";
    window.removeEventListener('click', outsideClick);
    modal.classList.remove('slide-in-up');

    // Add exit animation class
    modal.classList.add('slide-out-up');

    // Wait for the end of exit animation before hiding the modal
    modal.addEventListener('animationend', () => {
        // Hide the modal
        modal.style.display = 'none';

        // Remove the exit animation class
        modal.classList.remove('slide-out-up');
    }, { once: true });
}

function closeModalAbout() {
    var modal = document.getElementById("myModal");
    returnBody();

    window.removeEventListener('click', outsideClickAbout);
    modal.classList.remove('slide-in-up');

    // Add exit animation class
    modal.classList.add('slide-out-up');

    // Wait for the end of exit animation before hiding the modal
    modal.addEventListener('animationend', () => {
        // Hide the modal
        modal.style.display = 'none';

        // Remove the exit animation class
        modal.classList.remove('slide-out-up');
    }, { once: true });
}

function closeModalContact() {
    var modal = document.getElementById("myModal");
    returnBody();

    window.removeEventListener('click', outsideClickContact);
    modal.classList.remove('slide-in-up');

    // Add exit animation class
    modal.classList.add('slide-out-up');

    // Wait for the end of exit animation before hiding the modal
    modal.addEventListener('animationend', () => {
        // Hide the modal
        modal.style.display = 'none';

        // Remove the exit animation class
        modal.classList.remove('slide-out-up');
    }, { once: true });
}

function outsideClick(event) {
    var modal = document.getElementById('modal-c');

    if (event.target === modal) {
        closeModal();
    }
}

function outsideClickAbout(event) {
    var modal = document.getElementById('modal-c');

    if (event.target === modal) {
        closeModalAbout();
    }
}

function outsideClickContact(event) {
    var modal = document.getElementById('modal-c');

    if (event.target === modal) {
        closeModalAbout();
    }
}

function getProjectContent(projectId) {

    var videoId; // Set the YouTube video ID for each project
    var projectContent;

    // Determine the video ID and project information based on the selected project
    switch (projectId) {
        case 'about':
            videoId = 'N4vmPq09dN4?si=eyzXwmLVzzDp4Ayt';
            projectContent = `
                            <div class="about-title-bg">
                                <h2 class="project-title">About me</h2>
                            </div>
                         

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>
                                        🕹️Hey there, I'm Dinh Trong, a game developer with a deep passion for Unity. I'm actively building my skills, constantly learning new techniques and experimenting with different gameplay mechanics.    
                                    </p>
                                    <p>
                                        🎮 If you're looking for a passionate fresher who thrives on challenges and loves to learn, let's connect!
                                    </p>
                                </div>
                            </div>

                            <div class="project-stack">
                                <h2>Stack</h2>
                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/unity.png">
                                </a>

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/csharp.png">
                                </a>                             

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/clanguage.png">
                                </a>

                                
                                </a>
                            </div>

                            <div class="close">
                                <span onclick="closeModalAbout()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'contact':
            videoId = 'N4vmPq09dN4?si=eyzXwmLVzzDp4Ayt';
            projectContent = `
                            <div class="contact-title-bg">
                                <h2 class="project-title">Contact</h2>
                            </div>
                         

                            <div class="contact-description-bg">
                                <div class="contact-description">

                                    <a target="_blank" class="contact-icon" style="margin-left: 6px">
                                        <img src="Images/email.png">
                                    </a>

                                    <div class="contact-text">
                                    <p>
                                        murilo.glasser@hotmail.com
                                    </p>
                                    </div>
                                </div>
                            </div>

                            <div class="phone-description-bg">
                                <div class="contact-description">

                                    <a target="_blank" class="contact-icon" style="margin-left: 6px">
                                        <img src="Images/phone.png">
                                    </a>

                                    <div class="contact-text">
                                    <p>
                                        +5515996003474
                                    </p>
                                    </div>
                                </div>
                            </div>

                            <div class="contact-close">
                                <span onclick="closeModalContact()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project1':
            videoId = 'ERemgK_XnXw';
            projectContent = `
                            <div class="title-bg">
                                <h2 class="project-title">Move Stop Move</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>A casual 3D game. Control the character's movement using a joystick and freely move around the map. Numerous enemies will appear and attack with their weapons. Dodge their attacks and fight back. The more enemies you defeat, the bigger you become. Victory is achieved by being the last survivor.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>

                                <a href="https://github.com/TDTer/MoveStopMove_DinhTrong" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/git.png" alt="Github">
                                </a>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project2':
            videoId = 'eoSVpyv1kbY';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Bridge Race</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>3D casual game. Use a joystick to control the character's movements. Bridges are used to divide the successive stages. In order build bridges, player must compete against enemy bots and  collect dispersed bricks of the same color on each stage in order to eventually reach the destination.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>

                                <a href="https://github.com/TDTer/BridgeRace_DinhTrong" target="_blank" class="social-icon device" style="margin-left: 0px">
                                    <img src="Images/Git.png" alt="Github">
                                </a>
                            </div>


                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project3':
            videoId = 'iWKZawT7iTk';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Stack Maker</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Casual 3D game. The goal is to collect bricks along the way to cross  bridges and find the path to the finish line with the highest number of remaining bricks.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <a href="https://github.com/TDTer/StackMaker_DinhTrong" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Git.png" alt="Github">
                                </a>
                            </div>


                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project4':
            videoId = 'gT8AB68s_2k?si=9lWQuuRO1j9Kbjin';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Joy & Toy</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Joy & Toy is a mobile game designed as a promotional initiative for the renowned soap opera "Poliana" on SBT TV network. Players embark on an engaging adventure, combating depression and spreading happiness. Guide characters through challenges, fostering positivity, and contributing to a meaningful journey towards mental well-being.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <a href="https://play.google.com/store/search?q=Joy%20%26%20toy&c=apps" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Playstore.png" alt="Github">
                                </a>

                                <a href="https://apps.apple.com/br/app/aventuras-de-poliana-joy-toy/id1481899470" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Appstore.png" alt="Github">
                                </a>                               
                            </div>


                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project5':
            videoId = 'cs_BVRnD4QU?si=wNPxuS40Bg4ij1Vz';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Hot Potato</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>    <p>Hot Potato is an engaging multiplayer game designed for four players, set in a vibrant and interactive environment. Players use specially crafted wooden joysticks to control the game, creating a unique and tactile gaming experience that brings people together for a thrilling and immersive gameplay session.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <h4>This project does not have available links.</h4>                                
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project6':
            videoId = 'eK7_MLSFprU?si=GgySrIEi62Ylybsh';
            projectContent = `
                         <div class="title-bg">
                                <h2 class="project-title">Trader's Life</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Trader's Life is an immersive 2D/3D game designed to empower newcomers in the world of trading. Demystify the complexities of the trade business, providing players with a comfortable space to navigate intricate brokerage jargon and applications, making the trade experience accessible and enjoyable.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <a href="https://play.google.com/store/apps/details?id=com.liga.traderlife&hl=pt_BR&gl=US" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Playstore.png" alt="Github">
                                </a>

                                <a href="https://apps.apple.com/br/app/traders-life/id1475175020" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Appstore.png" alt="Github">
                                </a>
                            </div>                  

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project7':
            videoId = '6iZYMm5oXdk?si=OHhVYIERtpBtTUa0';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Anitta Boss Game</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Anitta Boss Game is a web game serving as a powerful promotional tool. It enhances the collaboration between Garena and Anitta, boosting the game's visibility and integrating the artist's character into Free Fire.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <h4>This project does not have available links.</h4>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project8':
            videoId = '_rkVQpotLIw?si=jvUrWaw5Q3xtb5Ub';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Free Fighter</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Free Fighter game was developed in partnership with Garena as a promotional initiative, assisting their collaboration with Capcom and Street Fighter. This project stands out for its strategic collaboration, delivering a dynamic and thrilling gaming experience for fighting game enthusiasts.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <h4>This project does not have available links.</h4>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project9':
            videoId = '8RWrj6cPtd0?si=NjWYzSLpEmjNZJco';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Cash Plane</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Cash Plane is an exciting virtual reality experience that made its debut at BGS in 2018, presented exclusively for the SBT television channel. This immersive virtual reality adventure takes users on a thrilling journey.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <h4>This project does not have available links.</h4>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project10':
            videoId = 'YI0jJG-jhSo?si=VpCqWNVHP1jQJTjO';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Shofu Ar Experience</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Shofu Ar Experience is an augmented reality promotional game offering an interactive and educational journey. Immerse yourself in a captivating experience to learn about the molecules constituting Shofu's revolutionary teeth product.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <h4>This project does not have available links.</h4>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project11':
            videoId = 'q-s1OCA3Tw8?si=AiH2tMIBBzAgCFpa';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Lego Ar Experience</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>Lego Ar Experience is an augmented reality game where players take command of a robot built entirely from LEGO bricks.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <h4>This project does not have available links.</h4>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'project12':
            videoId = '3cyNc31jY4I?si=w69jaH9h51mRlbdF';
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Merge Cube</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video">
                                <iframe id="youtubeVideo" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>This project was developed at LIGA (Games and Apps Innovation Laboratory) at the Sorocaba Engineering University (Facens). With an augmented reality interaction, its purpose is to present the university in a more interactive and enjoyable way.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <h4>This project does not have available links.</h4>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
    }


    return projectContent;
}

