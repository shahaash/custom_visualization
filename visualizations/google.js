looker.plugins.visualizations.add({
<<<<<<< HEAD
    id: 'custom_button_popup',
    label: 'Custom Button with Pop-up',
    options: {
      message: {
        type: 'string',
        label: 'Popup Message',
        default: 'Hello, World!'
      }
    },
    // This function is called when the visualization is first loaded
    create: function(element, config) {
      // Create and style a button element
      const button = document.createElement('button');
      button.innerHTML = 'Click Me';
      button.className = 'custom-button';
      element.appendChild(button);
  
      // Add a click event listener to the button
      button.addEventListener('click', () => {
        // Show a pop-up dialog when the button is clicked
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerHTML = config.message;
        element.appendChild(popup);
  
        // Close the pop-up when clicked anywhere outside the pop-up
        document.addEventListener('click', closePopup);
      });
  
      // Function to close the pop-up
      function closePopup(event) {
        if (!popup.contains(event.target) && popup !== event.target) {
          element.removeChild(popup);
          document.removeEventListener('click', closePopup);
        }
      }
    },
    // This function is called when the options change
    update: function(data, element, config, queryResponse) {
      // Nothing to update in this example
    }
  });
  
=======
    create: function(element, config) {
      // Create a search input field
      var searchInput = document.createElement('input');
      searchInput.type = 'text';
      searchInput.placeholder = 'Search...';

      // Create a search button
      var searchButton = document.createElement('button');
      searchButton.textContent = 'Search';

      // Create a div to display the search query
      var queryDisplay = document.createElement('div');
      queryDisplay.className = 'query-display';

      // Create a div to display the API response
      var apiResponseDisplay = document.createElement('div');
      apiResponseDisplay.className = 'api-response-display';

      // Append the input field, button, and divs to the element
      element.appendChild(searchInput);
      element.appendChild(searchButton);
      element.appendChild(queryDisplay);
      element.appendChild(apiResponseDisplay);

      // Attach an event listener to the search button
      searchButton.addEventListener('click', function() {
          // Get the search query from the input field
          var query = searchInput.value;

          // Display the search query
          // queryDisplay.textContent = query;

          // Make an API call with the search query
          makeAPICall(query);
      });

      // Function to make the API call
      function makeAPICall(query) {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
        var apiUrl = 'https://malachiteingestion-pa.googleapis.com/v1/logtypes?key=' + encodeURIComponent(query);

        // Make the API request using fetch or another method
        fetch(apiUrl)
          .then(function(response) {
              return response.json(); // Assuming the API returns JSON data
          })
          .then(function(data) {
              // Display the API response data in the visualization
              apiResponseDisplay.textContent = 'API Response: ' + JSON.stringify(data);
          })
          .catch(function(error) {
              console.error('Error making API call:', error);
          });
      }
    },

    updateAsync: function(data, element, config, queryResponse, details, done) {
        // This is where you'd handle the response from Looker and update your visualization
        // based on the search results.

        // Call done to signal rendering completion
        done();
    }
});
>>>>>>> f238b5a9bed3bb9d7c23f0103817515ec39d280d
