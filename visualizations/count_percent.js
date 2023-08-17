// Use Looker's Visualization API
looker.plugins.visualizations.add({
    id: 'count-percentage-visualization',
    label: 'Count and Percentage Visualization',
    // adding options for dynamic values
    options: {
      selectedCountField: {
        type: 'string',
        label: 'Select Count Field',
        default: 'record_count'
      },
      selectedPercentageField: {
        type: 'string',
        label: 'Select Percentage Field',
        default: 'percentage_value'
      }
    },
    create: function(element, config) {
      this.container = element.appendChild(document.createElement("div"));
      this.container.setAttribute("id", "visualization-container");
  
      // Apply styling to the container
      this.container.style.display = "flex";
      this.container.style.alignItems = "center";
    },
    updateAsync: function(data, element, config, queryResponse, details, done) {
      const countFieldOption = config.selectedCountField;
      const percentageFieldOption = config.selectedPercentageField;
  
      const count = data[0][queryResponse.fields[countFieldOption].name].value;
      const percentage = data[0][queryResponse.fields[percentageFieldOption].name].value;
  
      // Display the count and percentage values
      const countPercentageDiv = document.createElement("div");
      countPercentageDiv.style.display = "flex";
      countPercentageDiv.style.alignItems = "center";
  
      const countParagraph = document.createElement("p");
      countParagraph.textContent = `Count: ${count}`;
      countPercentageDiv.appendChild(countParagraph);
  
      const percentageSpan = document.createElement("span");
      percentageSpan.textContent = `Percentage: ${percentage}%`;
      percentageSpan.style.marginLeft = "10px";
      countPercentageDiv.appendChild(percentageSpan);
  
      this.container.appendChild(countPercentageDiv);
  
      // Signal the completion of rendering
      done();
    }
  });
  