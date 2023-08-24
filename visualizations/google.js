looker.plugins.visualizations.add({
  id: 'custom-button',
  label: 'Custom Button',
  options: {},
  create: function (element, config) {
    // Create a button element
    var button = document.createElement('button');
    button.innerText = 'Click Me';

    // Create a div to display a message
    var messageDiv = document.createElement('div');
    messageDiv.style.display = 'none'; // Initially hide it

    // Add a click event listener
    button.addEventListener('click', function () {
      // Display the message
      window.alert('Button Clicked!');
      messageDiv.style.display = 'block';
    });

    // Append the button and message div to the element
    element.appendChild(button);
    element.appendChild(messageDiv);
  },
});
