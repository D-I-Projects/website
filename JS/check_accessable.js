var shouldRedirect = false;

window.onload = function() {
    if (!shouldRedirect) {
        document.body.innerHTML = '';

        var centerContentDiv = document.createElement('div');
        centerContentDiv.className = 'center-content';
        
        // Concatenate the strings to display both messages
        centerContentDiv.innerHTML = '<span>&#9888;</span> This website is not accessible right now.<br>' +
                                     '<p>Reason : Updating the website</p>';
        
        document.body.appendChild(centerContentDiv);
    }
};
