// Use Looker's Visualization API
looker.plugins.visualizations.add({
    id: 'display_count',
    label: 'Display Count',
    create: function(element, config) {
      // Create a container for the count value
      this.container = element.appendChild(document.createElement("div"));
      this.container.setAttribute("id", "count-container");
      this.container.style.fontSize = "24px";
      this.container.style.fontWeight = "bold";
      this.container.style.textAlign = "center";
    },

    updateAsync: function(data, element, config, queryResponse, details, done) {
      // Calculate the count value from the data
      const count = data;

      // Display the count value in the container
      this.container.textContent = `${count}`;

      // Signal the completion of rendering
      done();
    }
  });
