// Use Looker's Visualization API
looker.plugins.visualizations.add({
    id: 'today-yesterday-visualization',
    label: 'Today vs Yesterday Visualization',
    options: {
      selectedValue: {
        type: 'number',
        label: 'Select a Value'
      }
    },
    create: function(element, config) {
      this.container = element.appendChild(document.createElement("div"));
      this.container.setAttribute("id", "visualization-container");
      this.container.style.textAlign = "center";
      this.container.style.padding = "20px";
    },
    updateAsync: function(data, element, config, queryResponse, details, done) {
      // Retrieve the selected dynamic value from Looker's options
      const selectedValue = config.selectedValue;
  
      // Display the dynamic value and the "Today vs Yesterday" text
      const valueParagraph = document.createElement("p");
      valueParagraph.textContent = `Value: ${selectedValue}`;
      this.container.appendChild(valueParagraph);
  
      const textParagraph = document.createElement("p");
      textParagraph.textContent = "Today vs Yesterday";
      this.container.appendChild(textParagraph);
  
      // Signal the completion of rendering
      done();
    }
  });
  