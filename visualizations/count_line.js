// Use Looker's Visualization API
looker.plugins.visualizations.add({
    id: 'value-text-visualization',
    label: 'Value and Text Visualization',
    options: {
      selectedValue: {
        type: 'number',
        label: 'Select a Value'
      }
    },
    create: function(element, config) {
      this.container = element.appendChild(document.createElement("div"));
      this.container.setAttribute("id", "visualization-container");

      // Apply styling to the container
      this.container.style.display = "flex";
      this.container.style.flexDirection = "column";
      this.container.style.alignItems = "center";
    },
    updateAsync: function(data, element, config, queryResponse, details, done) {
      // Use Looker's options to get the selected numeric value
      const selectedValue = config.selectedValue;
      const dataValue = data.selectedValue.length

      // Display the selected numeric value
      const valueParagraph = document.createElement("p");
      valueParagraph.style.fontSize = "24px";
      valueParagraph.textContent = `${dataValue}`;
      this.container.appendChild(valueParagraph);

      const textParagraph = document.createElement("p");
      textParagraph.style.fontSize = "18px";
      textParagraph.style.color = "#333";
      textParagraph.textContent = 'Today vs Yesterday';
      this.container.appendChild(textParagraph);

      // Signal the completion of rendering
      done();
    }
  });
