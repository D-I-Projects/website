var shouldRedirect = true;

window.onload = function() {
    if (!shouldRedirect) {
        document.body.innerHTML = '';

        var centerContentDiv = document.createElement('div');
        centerContentDiv.className = 'center-content';

        centerContentDiv.innerHTML = `
            <div class="status-box">
                <p><span>&#9888;</span> Diese Website ist momentan nicht erreichbar.</p>
                <p>Grund: Die Website wird gerade aktualisiert.</p>
                <p>Weitere Informationen finden Sie auf unserem Discord-Server.</p>
            </div>
        `;

        document.body.appendChild(centerContentDiv);

    }
}
