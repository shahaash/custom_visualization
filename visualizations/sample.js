// Use Looker's Visualization API
looker.plugins.visualizations.add({
    id: 'display_count',
    label: 'Display Count',
    create: function(element, config) {
      // Create a container for the count value
      this.container = element.appendChild(document.createElement("div"));
      this.container.setAttribute("id", "count-line-container");

      // Applying Styling to the container
      this.container.style.fontSize = "40px";
      this.container.style.fontWeight = "bold";
      this.container.style.textAlign = "center";
      this.container.style.padding = "25px";

      // Create a container for the text line
      this.textContainer = element.appendChild(document.createElement("div"));
      this.textContainer.setAttribute("id", "text-line-container");
      this.textContainer.style.fontSize = "14px";
      this.textContainer.style.textAlign = "center";
      this.textContainer.style.padding = "10px";
      this.textContainer.style.fontFamily = "Arial";
    },

    updateAsync: function(data, element, config, queryResponse, details, done) {
      // Calculate the count value from the data
      const count = data.length;

      // Display the count value in the container
      this.container.textContent = `${count}`;

      // Display the text line below the count value
      this.textContainer.textContent = "Today vs Yesterday";

      // Signal the completion of rendering
      done();
    }
  });
