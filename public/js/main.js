document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme');
    const themeToggleContainer = document.querySelector('.theme-toggle-container');

    themeToggleContainer.addEventListener('click', (event) => {
        if (event.target === themeToggle) {
            document.body.classList.toggle('dark-theme');
            document.body.classList.toggle('light-theme');
            updateTheme();
        }
    });

    themeToggle.checked = document.body.classList.contains('dark-theme');
    updateTheme();
});

function updateTheme() {
    const homeSection = document.querySelector('.home-section');
    const profileImage = document.getElementById('profile-image');

    if (document.body.classList.contains('dark-theme')) {
        homeSection.style.backgroundImage = "url('images/2.png')";
        homeSection.style.backgroundAttachment = 'fixed'; // Fijar la imagen de fondo
        profileImage.src = 'images/foto_perfil_negro1.png';
        document.body.style.background = "#153261";
    } else {
        homeSection.style.backgroundImage = "url('images/1.png')";
        homeSection.style.backgroundAttachment = 'fixed'; // Fijar la imagen de fondo
        profileImage.src = 'images/foto_perfil_blanco1.png';
        document.body.style.background = "#6B6FBF";
    }
}
