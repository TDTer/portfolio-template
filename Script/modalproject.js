var lastModal;

function changeClass(modalType) {
    document.getElementById("modal-c").className = modalType;
    document.body.classList.add("body-opened");
}

function returnBody(modalType) {
    document.body.classList.remove("body-opened");
}

function openModal(projectId) {
    window.location.hash = projectId;
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
    if (window.location.hash) {
        history.replaceState('', document.title, window.location.pathname + window.location.search);
    }
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
                                        🕹️ Hey there, I'm Dinh Trong, a dedicated Game Developer specializing in both <strong>Unity</strong> and <strong>Cocos Creator</strong>. I have a strong passion for bringing creative ideas to life and delivering engaging interactive experiences directly to users' fingertips.
                                    </p>
                                    <p>
                                        🚀 I love tackling complex technical challenges and learning new tech stacks. If you're looking for a driven developer with a track record of delivering engaging, cross-platform games, let's connect!
                                    </p>
                                </div>
                            </div>

                            <div class="project-stack">
                                <h2>Stack</h2>
                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/cocos.png" alt="Cocos Creator">
                                </a>

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/unity.png" alt="Unity">
                                </a>

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/csharp.png" alt="C#">
                                </a>                             

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/javascript.png" alt="JavaScript">
                                </a>

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/typescript.png" alt="TypeScript">
                                </a>

                                <a target="_blank" class="stack-icon" style="margin-left: 6px">
                                    <img src="Images/htmllanguage.png" alt="HTML5 / WebGL">
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
        case 'movestopmove':
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
        case 'bridgerace':
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
        case 'stackmaker':
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
        case 'screwland3d':
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Screw Land 3D</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video" style="display:flex;justify-content:center;align-items:center;min-height:660px;">
                                <iframe id="youtubeVideo"
                                    src="Playables/ScrewLand3d.html"
                                    style="width:360px;height:640px;border:none;"
                                    frameborder="0"
                                    allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>A casual 3D puzzle game. Unscrew bolts to release colorful wood pieces — match and collect pieces of the same color to clear each level and advance.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <a href="https://play.google.com/store/apps/details?id=com.woodpuzzle.pin3d" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Playstore.png" alt="Google Play">
                                </a>

                                <a href="https://apps.apple.com/us/app/wood-nuts-3d/id6740447022" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Appstore.png" alt="App Store">
                                </a>
                            </div>


                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'cakejamout':
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Cake Jam Out</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video" style="display:flex;justify-content:center;align-items:center;min-height:660px;">
                                <iframe id="youtubeVideo"
                                    src="Playables/CakeJamOut.html"
                                    style="width:360px;height:640px;border:none;"
                                    frameborder="0"
                                    allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>
                                        <strong>Cake Jam Out</strong> is a sweet puzzle where you sort, stack, and match mouth-watering cake layers to complete orders. Plan your moves carefully as space is limited! Enjoy relaxing yet challenging gameplay with dozens of colorful cake designs to unlock and cheerful music to keep you entertained.
                                    </p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <a href="https://play.google.com/store/apps/details?id=cake.jam.sort" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Playstore.png" alt="Google Play">
                                </a>

                                <a href="https://apps.apple.com/app/cake-roll-out/id6752802390" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Appstore.png" alt="App Store">
                                </a>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'dinerstory':
            projectContent = `
                         <div class="title-bg">
                                <h2 class="project-title">Diner Story: Merge Cook Decor</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video" style="display:flex;justify-content:center;align-items:center;min-height:660px;">
                                <iframe id="youtubeVideo"
                                    src="Playables/DinerStoryMergeCookDecor.html"
                                    style="width:360px;height:640px;border:none;"
                                    frameborder="0"
                                    allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>A merge puzzle game for mobile devices. Discover and combine various food items to reveal new recipes and decorate your diner.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <a href="https://play.google.com/store/apps/details?id=com.merge.cooking.diner.chef.restaurant.story" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Playstore.png" alt="Google Play">
                                </a>

                                <a href="https://apps.apple.com/vn/app/diner-story-merge-cook-decor/id6740476882" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Appstore.png" alt="App Store">
                                </a>
                            </div>                  

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'popcornlegend':
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Popcorn Legend</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video" style="display:flex;justify-content:center;align-items:center;min-height:660px;">
                                <iframe id="youtubeVideo"
                                    src="Playables/PopcornLegend.html"
                                    style="width:360px;height:640px;border:none;"
                                    frameborder="0"
                                    allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>
                                        <strong>Popcorn Legend</strong> is a fast-paced action game where you collect popcorn to multiply your firepower and navigate through puzzles. Upgrade your heroes and strategically drag to defeat endless waves of zombies!
                                    </p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <a href="https://play.google.com/store/apps/details?id=com.zombie.cup.puzzle" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Playstore.png" alt="Google Play">
                                </a>

                                <a href="https://apps.apple.com/us/app/popcorn-legend/id6739168388" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Appstore.png" alt="App Store">
                                </a>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'satistory':
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Satistory</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video" style="display:flex;justify-content:center;align-items:center;min-height:660px;">
                                <iframe id="youtubeVideo"
                                    src="Playables/Satistory.html"
                                    style="width:360px;height:640px;border:none;"
                                    frameborder="0"
                                    allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>A satisfying casual game. Solve mini-puzzles and experience deeply satisfying interactions.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <a href="https://play.google.com/store/apps/details?id=com.tidy.satis.asmr" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Playstore.png" alt="Google Play">
                                </a>

                                <a href="https://apps.apple.com/us/app/satistory-tidy-up/id6744819313" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Appstore.png" alt="App Store">
                                </a>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'screwpin':
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Screw Pin</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video" style="display:flex;justify-content:center;align-items:center;min-height:660px;">
                                <iframe id="youtubeVideo"
                                    src="Playables/Screw Pin.html"
                                    style="width:360px;height:640px;border:none;"
                                    frameborder="0"
                                    allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>A casual puzzle game. Remove the pins strategically to progress.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <a href="https://play.google.com/store/apps/details?id=com.nuts.bolts.srcew.puzzle" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Playstore.png" alt="Google Play">
                                </a>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
        case 'tidymaster':
            projectContent = `
                        <div class="title-bg">
                                <h2 class="project-title">Tidy Master</h2>
                            </div>

                            <div class="project-video-BG">
                            <div class="project-video" style="display:flex;justify-content:center;align-items:center;min-height:660px;">
                                <iframe id="youtubeVideo"
                                    src="Playables/TidyMaster.html"
                                    style="width:360px;height:640px;border:none;"
                                    frameborder="0"
                                    allowfullscreen></iframe>
                            </div>
                            </div>

                            <div class="description-bg">
                                <div class="project-description">
                                    <p>A casual puzzle game. Organize, sort, and tidy up messy spaces to reveal beautifully arranged environments.</p>
                                </div>
                            </div>

                            <div class="project-links">
                                <h2>Links</h2>
                                <a href="https://play.google.com/store/apps/details?id=com.diy.perfect.asmr" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Playstore.png" alt="Google Play">
                                </a>

                                <a href="https://apps.apple.com/us/app/tidy-master-satisfeel-asmr/id6738069648" target="_blank" class="social-icon device" style="margin-left: 6px">
                                    <img src="Images/Appstore.png" alt="App Store">
                                </a>
                            </div>

                            <div class="close">
                                <span onclick="closeModal()" target="_blank" class="social-icon quit">&times;</span>
                            </div>
`                   ;
            break;
    }


    return projectContent;
}

// Check for direct links on page load
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    let projectToOpen = urlParams.get('project') || urlParams.get('p');

    // Or check URL hash (e.g., #cakejamout)
    if (!projectToOpen && window.location.hash) {
        const hashVal = window.location.hash.substring(1);
        if (hashVal !== 'projects' && hashVal !== 'about-me' && hashVal !== 'contact') {
            projectToOpen = hashVal;
        }
    }

    if (projectToOpen) {
        // Delay opening modal slightly to ensure DOM gets ready
        setTimeout(() => {
            openModal(projectToOpen);
        }, 150);
    }
});
