var shouldRedirect = true;

window.onload = function() {
    if (!shouldRedirect) {
        document.body.innerHTML = '';

        var centerContentDiv = document.createElement('div');
        centerContentDiv.className = 'center-content';
        centerContentDiv.innerHTML = '<span>&#9888;</span> This website is not accessible right now.';
        
        document.body.appendChild(centerContentDiv);
    }

    var darkModeBtn = document.createElement('button');
    darkModeBtn.className = 'dark-mode-btn';
    darkModeBtn.innerHTML = '<i class="fa fa-moon"></i><i class="fa fa-sun"></i>';

    darkModeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        var isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    });

    document.body.appendChild(darkModeBtn);

    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
};
