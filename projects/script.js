document.addEventListener('DOMContentLoaded', (event) => {
    let suggestions = [
        { value: 'Google', url: 'https://www.google.com' },
        { value: 'GitHub', url: 'https://www.github.com' },
        { value: 'Gmail', url: 'https://www.gmail.com' },
        { value: 'GIMP', url: 'https://www.gimp.org' },
        { value: 'Golang', url: 'https://golang.org' }
    ];

    document.getElementById('search-bar').addEventListener('input', function() {
        const input = this.value.trim().toLowerCase(); 
        const suggestionsBox = document.getElementById('suggestions-box');
        const searchBarRect = this.getBoundingClientRect();

        suggestionsBox.innerHTML = '';

        const searchOption = document.createElement('div');
        searchOption.textContent = `Suchen: ${input}`;
        searchOption.className = 'suggestion';
        searchOption.style.fontWeight = 'bold';
        searchOption.addEventListener('click', function() {
            window.location.href = `search?search=${encodeURIComponent(input)}`;
            suggestionsBox.style.display = 'none';
        });
        suggestionsBox.appendChild(searchOption);

        const filteredSuggestions = suggestions
            .filter(item => item.value.toLowerCase().includes(input))
            .slice(0, 5);

        filteredSuggestions.forEach(suggestion => {
            const div = document.createElement('div');
            div.className = 'suggestion';
            div.textContent = suggestion.value;
            div.addEventListener('click', function() {
                window.location.href = suggestion.url; 
                document.getElementById('search-bar').value = suggestion.value;
                suggestionsBox.style.display = 'none';
            });
            suggestionsBox.appendChild(div);
        });

        suggestionsBox.style.display = 'block';
        suggestionsBox.style.top = `${searchBarRect.bottom + window.scrollY + 5}px`;
        suggestionsBox.style.left = `${searchBarRect.left}px`;
        suggestionsBox.style.width = `${searchBarRect.width}px`;

        console.log('Filtered suggestions:', filteredSuggestions); 
    });

    document.addEventListener('click', function(event) {
        const searchBar = document.getElementById('search-bar');
        const suggestionsBox = document.getElementById('suggestions-box');
        if (!searchBar.contains(event.target)) {
            suggestionsBox.style.display = 'none';
        }
    });
});
