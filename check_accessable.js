var shouldRedirect = true;

window.onload = function() {
    if (!shouldRedirect) {
        // Alle Inhalte der Seite verbergen
        document.body.innerHTML = '';

        // Neues <div>-Element erstellen und zur Seite hinzufügen
        var centerContentDiv = document.createElement('div');
        centerContentDiv.className = 'center-content';
        centerContentDiv.innerHTML = '<span>&#9888;</span> Diese Website ist derzeit nicht zugänglich.';
        
        // Das neue <div>-Element zum body hinzufügen
        document.body.appendChild(centerContentDiv);
    }
    // Wenn shouldRedirect true ist, wird nichts gemacht und die Seite lädt wie gewohnt.
};