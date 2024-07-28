let suggestions = [];
let suggestionsLoaded = false;

async function loadSuggestions() {
    try {
        const response = await fetch('/data.txt');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        const lines = data.split('\n');
        
        suggestions = lines.map(line => {
            const [value, url] = line.split('|');
            if (value && url) {
                return { value: value.trim(), url: url.trim() };
            }
        }).filter(Boolean);

        suggestionsLoaded = true;
        console.log('Suggestions loaded:', suggestions); 
    } catch (error) {
        console.error('Error loading suggestions:', error);
    }
}

document.getElementById('search-bar').addEventListener('input', function() {
    if (!suggestionsLoaded) {
        console.log('Suggestions not loaded yet.');
        return;
    }

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

window.onload = loadSuggestions;
