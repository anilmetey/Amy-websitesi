document.addEventListener('DOMContentLoaded', () => {
    // AOS Animasyonlarını Başlat
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    const toggleBtn = document.querySelector('.theme-toggle');
    const toggleIcon = toggleBtn.querySelector('i');
    const htmlElement = document.documentElement;

    // Kullanıcının sistem temasını kontrol et (opsiyonel ama şık)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        htmlElement.classList.add('dark-mode');
        toggleIcon.classList.replace('fa-moon', 'fa-sun');
    }

    toggleBtn.addEventListener('click', () => {
        htmlElement.classList.toggle('dark-mode');

        // İkonu değiştir
        if (htmlElement.classList.contains('dark-mode')) {
            toggleIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            toggleIcon.classList.replace('fa-sun', 'fa-moon');
        }
    });
});