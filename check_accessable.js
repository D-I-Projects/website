var shouldRedirect = true;

window.onload = function() {
    if (!shouldRedirect) {
        document.body.innerHTML = '';

        var style = document.createElement('style');
        style.innerHTML = `
            body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                background-color: #f8f9fa;
                font-family: Arial, sans-serif;
            }
            .center-content {
                text-align: center;
                padding: 20px;
                background-color: #ffffff;
                border: 2px solid #dc3545;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            .center-content span {
                display: block;
                font-size: 50px;
                color: #dc3545;
                margin-bottom: 10px;
            }
            .center-content p {
                font-size: 18px;
                color: #333333;
                margin: 10px 0;
            }
            .center-content p.note {
                font-size: 14px;
                color: #666666;
                margin-top: 20px;
            }
        `;
        document.head.appendChild(style);

        var centerContentDiv = document.createElement('div');
        centerContentDiv.className = 'center-content';
        centerContentDiv.innerHTML = `
            <span>&#9888;</span>
            <p>Diese Website ist derzeit nicht zugänglich.</p>
            <p>Bitte versuchen Sie es später erneut. Wir entschuldigen uns für die Unannehmlichkeiten.</p>
            <p class="note">Bei weiteren Fragen wenden Sie sich bitte an unseren Support.</p>
        `;
        
        document.body.appendChild(centerContentDiv);
    }
};
