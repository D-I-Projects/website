var shouldRedirect = false;

window.onload = function() {
    if (!shouldRedirect) {
        document.body.innerHTML = '';

        var centerContentDiv = document.createElement('div');
        centerContentDiv.className = 'center-content';
        centerContentDiv.innerHTML = '<span>&#9888;</span> This website is not accessible right now.';
        centerContentDiv.innerHTML = '<span>&#9888;</span> Reason : Updating the website';
        
        document.body.appendChild(centerContentDiv);
    }
};
