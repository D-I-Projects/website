var shouldRedirect = false;

window.onload = function() {
    if (!shouldRedirect) {
        document.body.innerHTML = '';

        var centerContentDiv = document.createElement('div');
        centerContentDiv.className = 'center-content';

        centerContentDiv.innerHTML = `
            <div class="status-box">
                <p><span>&#9888;</span> Diese Website ist momentan nicht erreichbar.</p>
                <p>Grund: Die Website wird gerade aktualisiert.</p>
                <p>Weitere Informationen finden Sie auf unserem <a href="https://discord.gg/A5reDWGkhV" target="_blank" rel="noopener noreferrer">Discord-Server</a>.</p>
            </div>
        `;

        document.body.appendChild(centerContentDiv);

        var style = document.createElement('style');
        style.innerHTML = `
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
            }
            .center-content {
                text-align: center;
                background: #fff;
                border: 1px solid #ddd;
                border-radius: 8px;
                padding: 20px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .status-box p {
                margin: 10px 0;
                font-size: 16px;
            }
            .status-box span {
                font-size: 24px;
                color: #f39c12;
            }
            .status-box a {
                color: #3498db;
                text-decoration: none;
            }
            .status-box a:hover {
                text-decoration: underline;
            }
        `;
        document.head.appendChild(style);
    }
};
