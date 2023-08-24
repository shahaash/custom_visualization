looker.plugins.visualizations.add({
    create: function(element, config) {
        // Create a button element
        var button = document.createElement('button');
        button.textContent = 'Click me';

        // Append the button to the element
        element.appendChild(button);

        // Attach a click event handler to show the popup when the button is clicked
        button.addEventListener('click', function() {
            // Create a modal container
            var modalContainer = document.createElement('div');
            modalContainer.className = 'modal-container';

            // Create the modal content
            var modalContent = document.createElement('div');
            modalContent.className = 'modal-content';

            // Create a close button for the modal
            var closeButton = document.createElement('button');
            closeButton.textContent = 'Close';

            // Create a message element
            var message = document.createElement('p');
            message.textContent = 'This is a custom popup message.';

            // Append the message to the modal content
            modalContent.appendChild(message);

            // Append the close button to the modal content
            modalContent.appendChild(closeButton);

            // Append the modal content to the modal container
            modalContainer.appendChild(modalContent);

            // Append the modal container to the body
            document.body.appendChild(modalContainer);

            // Attach a click event handler to close the modal when the close button is clicked
            closeButton.addEventListener('click', function() {
                // Remove the modal container from the body
                document.body.removeChild(modalContainer);
            });
        });
    },
    updateAsync: function(data, element, config, queryResponse, details, done) {
        // This is where you'd potentially update the button behavior based on data
        // Since you don't need data, this might be empty or contain some static behavior

        // Call done to signal rendering completion
        done();
    }
});
