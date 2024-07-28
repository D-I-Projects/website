document.addEventListener('DOMContentLoaded', () => {
    let suggestions = [
        { value: 'Destor', url: 'https://d-i-projects.github.io/website/project/destor' },
        { value: 'diec', url: 'https://d-i-projects.github.io/website/project/diec' },
        { value: 'DevplaceO', url: 'https://d-i-projects.github.io/website/project/devplaceo' },
        { value: 'ChatBox', url: 'https://d-i-projects.github.io/website/project/chatbox' },
        { value: 'D&I Bot', url: 'https://d-i-projects.github.io/website/project/discord-bot' },
        { value: 'website', url: 'https://d-i-projects.github.io/website/project/website' },
        { value: 'DiscordBotCreator', url: 'https://d-i-projects.github.io/website/project/discordbotcreator' }
    ];

    document.getElementById('search-bar').addEventListener('input', function() {
        const input = this.value.trim().toLowerCase();
        const suggestionsBox = document.getElementById('suggestions-box');

        suggestionsBox.innerHTML = '';

        const searchOption = document.createElement('div');
        searchOption.textContent = `Suchen: ${input}`;
        searchOption.className = 'suggestion search-option';
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
    });

    document.addEventListener('click', function(event) {
        const searchBar = document.getElementById('search-bar');
        const suggestionsBox = document.getElementById('suggestions-box');
        if (!searchBar.contains(event.target) && !suggestionsBox.contains(event.target)) {
            suggestionsBox.style.display = 'none';
        }
    });
});
