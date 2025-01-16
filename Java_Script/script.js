const suggestions = [
    "apple",
    "banana",
    "grape",
    "orange",
    "pineapple",
    "strawberry",
    "watermelon",
    "blueberry",
    "kiwi",
    "mango"
];

const searchInput = document.getElementById('search-input');
const suggestionsBox = document.getElementById('suggestions');

searchInput.addEventListener('input', function() {
    const input = this.value.toLowerCase();
    suggestionsBox.innerHTML = '';

    if (input) {
        const filteredSuggestions = suggestions.filter(suggestion => 
            suggestion.toLowerCase().startsWith(input)
        );

        filteredSuggestions.forEach(suggestion => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.textContent = suggestion;
            suggestionItem.addEventListener('click', function() {
                searchInput.value = suggestion;
                suggestionsBox.innerHTML = '';
            });
            suggestionsBox.appendChild(suggestionItem);
        });
    }
});

document.getElementById('search-button').addEventListener('click', function() {
    const query = searchInput.value;
    if (query) {
        alert("You searchedform",{query});
    }
});