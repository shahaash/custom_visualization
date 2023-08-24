looker.plugins.visualizations.add({
    create: function(element, config) {
        // Create a button element
        var button = document.createElement('button');
        button.textContent = 'Click me';

        // Create a popup container element
        var popupContainer = document.createElement('div');
        popupContainer.className = 'popup-container';

        // Create a popup content element
        var popupContent = document.createElement('div');
        popupContent.className = 'popup-content';
        popupContent.style.display = 'none'; // Hide initially

        // Create a close button for the popup
        var closeButton = document.createElement('button');
        closeButton.textContent = 'Close';

        // Append the close button to the popup content
        popupContent.appendChild(closeButton);

        // Append the button to the element
        element.appendChild(button);

        // Append the popup content to the popup container
        popupContainer.appendChild(popupContent);

        // Append the popup container to the element
        element.appendChild(popupContainer);

        // Attach a click event handler to show the popup when the button is clicked
        button.addEventListener('click', function() {
            popupContent.style.display = 'block'; // Show the popup
        });

        // Attach a click event handler to close the popup when the close button is clicked
        closeButton.addEventListener('click', function() {
            popupContent.style.display = 'none'; // Hide the popup
        });
    },
    updateAsync: function(data, element, config, queryResponse, details, done) {
        // This is where you'd potentially update the button or popup based on data
        // Since you don't need data, this might be empty or contain some static behavior

        // Call done to signal rendering completion
        done();
    }
});
