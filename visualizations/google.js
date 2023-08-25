looker.plugins.visualizations.add({
  id: 'my_custom_search_viz',
  label: 'Custom Search',
  options: {
    apiEndpoint: {
      type: 'string',
      label: 'API Endpoint',
    },
  },
  create: function (element, config) {
    // Create the search bar
    this.searchBar = element.appendChild(document.createElement('input'));
    this.searchBar.setAttribute('type', 'text');
    this.searchBar.setAttribute('placeholder', 'Enter search term');

    // Create the search button
    this.searchButton = element.appendChild(document.createElement('button'));
    this.searchButton.textContent = 'Search';
    this.searchButton.addEventListener('click', () => {
      // Get the search term from the input field
      const searchTerm = this.searchBar.value;

      // Get the API endpoint from the configuration
      const apiEndpoint = 'https://cde5a32e-377f-44e9-8a1f-a5d05f8e96ee.looker.app';

      // Perform the API call
      fetch(`${apiEndpoint}?q=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          // Display the API response in the same tile
          this.searchBar.style.display = 'none';
          this.searchButton.style.display = 'none';
          this.displayContent(data);
        })
        .catch((error) => console.error(error));
    });
  },
  displayContent: function (data) {
    // Create a container for displaying the API response
    this.container = this.element.appendChild(document.createElement('div'));

    // Display the API response content
    this.container.textContent = JSON.stringify(data, null, 2);
  },
});
