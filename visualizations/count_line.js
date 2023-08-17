looker.plugins.visualizations.add({
    id: 'value-text-visualization',
    label: 'Value and Text Visualization',
    options: {
      selectedValue: {
        type: 'string',
        label: 'Select Value Field',
        display: 'select',
        values: "{{ measures }}", // Looker will populate the available measures here
        default: 'selected_measure'
      },
      customText: {
        type: 'string',
        label: 'Custom Text',
        default: 'Today vs Yesterday'
      }
    },
    create: function(element, config) {
      this.container = element.appendChild(document.createElement("div"));
      this.container.setAttribute("id", "visualization-container");
  
      // Apply styling to the container
      this.container.style.textAlign = "center";
    },
    updateAsync: function(data, element, config, queryResponse, details, done) {
      // Use Looker's options to get dynamic field selections
      const selectedValueField = config.selectedValue;
      const customText = config.customText;
  
      // Retrieve the selected value from the query response
      const selectedValue = data[0][queryResponse.fields[selectedValueField].name].value;
  
      // Display the selected value and custom text
      const valueTextDiv = document.createElement("div");
  
      const valueParagraph = document.createElement("p");
      valueParagraph.textContent = `Value: ${selectedValue}`;
      valueTextDiv.appendChild(valueParagraph);
  
      const customTextParagraph = document.createElement("p");
      customTextParagraph.textContent = `Custom Text: ${customText}`;
      valueTextDiv.appendChild(customTextParagraph);
  
      this.container.appendChild(valueTextDiv);
  
      // Signal the completion of rendering
      done();
    }
  });
  