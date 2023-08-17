// Use Looker's Visualization API
looker.plugins.visualizations.add({
    id: 'today-yesterday-chart-visualization',
    label: 'Today vs Yesterday Chart Visualization',
    options: {
      selectedValue: {
        type: 'number',
        label: 'Select a Value'
      }
    },
    create: function(element, config) {
      // Create a container for the visualization
      this.container = element.appendChild(document.createElement("div"));
      this.container.setAttribute("id", "visualization-container");
      this.container.style.position = "relative";
      this.container.style.textAlign = "center";
      this.container.style.padding = "20px";
  
      // Create a container for the line chart
      this.chartContainer = this.container.appendChild(document.createElement("div"));
      this.chartContainer.style.width = "100%";
      this.chartContainer.style.height = "300px";
      this.chartContainer.style.marginTop = "20px";
    },

    updateAsync: function(data, element, config, queryResponse, details, done) {
      // Retrieve the selected dynamic value from Looker's options
      const selectedValue = data.selectedValue;
  
      // Display the dynamic value and the "Today vs Yesterday" text
      const valueParagraph = document.createElement("p");
      valueParagraph.textContent = `Value: ${selectedValue}`;
      this.container.appendChild(valueParagraph);
  
      const textParagraph = document.createElement("p");
      textParagraph.textContent = "Today vs Yesterday";
      this.container.appendChild(textParagraph);
  
      // Extract data for the line chart (you need to have x and y values)
      const lineChartData = [
        { x: "Today", y: selectedValue },
        { x: "Yesterday", y: selectedValue - 10 } // Example: value for yesterday
      ];
  
      // Set up the line chart using D3.js
      const svg = d3.select(this.chartContainer)
        .append("svg")
        .attr("width", "100%")
        .attr("height", "100%");
  
      done();
    }
  });
  