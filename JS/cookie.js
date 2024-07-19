document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesButton = document.getElementById('accept-cookies');

    if (localStorage.getItem('cookiesAccepted')) {
        cookieBanner.style.display = 'none';
    } else {
        cookieBanner.style.display = 'block';
    }

    acceptCookiesButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', true);
        cookieBanner.style.display = 'none';
    });
});
