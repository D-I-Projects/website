var shouldRedirect = false;

window.onload = function() {
    if (!shouldRedirect) {
        document.body.innerHTML = '';

        var centerContentDiv = document.createElement('div');
        centerContentDiv.className = 'center-content';

        centerContentDiv.innerHTML = `
            <div class="status-box">
                <p><span>&#9888;</span> Diese Website ist momentan nicht erreichbar.</p>
                <p>Grund: Jetzt unter <a href="https://d-i-projects.github.io/">https://d-i-projects.github.io/</a></p>
                <p>Weitere Informationen finden Sie auf unserem Discord-Server.</p>
                <p>Impressum, Kontaktdaten und anderes finden sie alles unter unserer neuen Website.</p>
            </div>
        `;

        document.body.appendChild(centerContentDiv);

    }
}
