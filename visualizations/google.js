looker.plugins.visualizations.add({
  id: 'custom-button',
  label: 'Custom Button',
  options: {},
  create: function (element, config) {
    // Create a button element
    var button = document.createElement('button');
    button.innerText = 'Click Me';

    // Create a modal element
    var modal = document.createElement('div');
    modal.classList.add('modal', 'fade');
    modal.tabIndex = -1;
    modal.setAttribute('role', 'dialog');
    modal.innerHTML = `
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <p>Button Clicked!</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    `;

    // Add a click event listener to the button to show the modal
    button.addEventListener('click', function () {
      $(modal).modal('show');
    });

    // Append the button and modal to the element
    element.appendChild(button);
    element.appendChild(modal);
  },
});
