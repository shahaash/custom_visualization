looker.plugins.visualizations.add({
    create: function(element, config) {
        // Create a button element
        var button = document.createElement('button');
        button.textContent = 'Click me';
        button.className = 'btn btn-primary'; // Add Bootstrap button classes

        // Attach a click event handler to show the popup
        button.addEventListener('click', function() {
            // Create a modal element
            var modal = document.createElement('div');
            modal.className = 'modal';

            // Create modal content
            var modalContent = document.createElement('div');
            modalContent.className = 'modal-content';
            modalContent.innerHTML = `
                <div class="modal-header">
                    <h5 class="modal-title">Popup Title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>This is a sample popup content.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            `;

            // Append modal content to modal
            modal.appendChild(modalContent);

            // Show the modal using Bootstrap's modal API
            $(modal).modal('show');

            // Cleanup modal when it's closed
            $(modal).on('hidden.bs.modal', function () {
                // Remove the modal element from the DOM
                $(modal).remove();
            });
        });

        // Append the button to the element
        element.appendChild(button);
    },
    updateAsync: function(data, element, config, queryResponse, details, done) {
        // This custom visualization doesn't require data from Looker
        // It's a standalone button and popup

        // Call done to signal rendering completion
        done();
    }
});
