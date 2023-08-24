looker.plugins.visualizations.add({
  id: 'custom-button',
  label: 'Custom Button',
  options: {},
  create: function (element, config) {
    // Create a button element
    var button = document.createElement('button');
    button.innerText = 'Click Me';

    // Add a click event listener
    button.addEventListener('click', function () {
      // Display a window alert when the button is clicked
      window.alert('Button Clicked!');
    });

    // Append the button to the element
    element.appendChild(button);
  },
});
