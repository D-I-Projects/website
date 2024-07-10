var shouldRedirect = true;

window.onload = function() {
    if (!shouldRedirect) {
        document.body.innerHTML = '';

        var centerContentDiv = document.createElement('div');
        centerContentDiv.className = 'center-content';
        centerContentDiv.innerHTML = '<span>&#9888;</span> Diese Website ist derzeit nicht zugänglich.';
        
        document.body.appendChild(centerContentDiv);
    }
};