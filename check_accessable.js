var shouldRedirect = true;

window.onload = function() {
    if (!shouldRedirect) {
        document.body.innerHTML = '';

        var centerContentDiv = document.createElement('div');
        centerContentDiv.className = 'center-content';
        centerContentDiv.innerHTML = '<span>&#9888;</span> This website is not accessible right now.';
        
        document.body.appendChild(centerContentDiv);
    }
};
