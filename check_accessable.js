var shouldRedirect = false;

window.onload = function() {
    if (!shouldRedirect) {
        document.body.innerHTML = '';

        // Neues <div>-Element erstellen und zur Seite hinzufügen
        var centerContentDiv = document.createElement('div');
        centerContentDiv.className = 'center-content';
        centerContentDiv.innerHTML = '<span>&#9888;</span> This website is not accessible right now.';
        
        // Das neue <div>-Element zum body hinzufügen
        document.body.appendChild(centerContentDiv);
    }
};
