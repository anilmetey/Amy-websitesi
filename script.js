document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
    const toggleBtn = document.querySelector('.theme-toggle');
    toggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-mode');
        toggleBtn.textContent = document.documentElement.classList.contains('dark-mode') ? ' Koyu Ton' : ' Açık Ton';
    });
});