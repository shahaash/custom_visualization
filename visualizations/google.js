looker.plugins.visualizations.add({
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
  