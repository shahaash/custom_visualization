looker.plugins.visualizations.add({
    id: 'dynamic_alert_percentage',
    label: 'Dynamic Alert Percentage',
    create: function(element, config) {
      // Create a container for the count, percentage, and arrow value
      this.container = element.appendChild(document.createElement("div"));
      this.container.setAttribute("id", "count-line-container");
  
      // Applying Styling to the container
      this.container.style.fontWeight = "bold";
      this.container.style.textAlign = "center";
      this.container.style.padding = "25px";
      this.container.style.display = "flex"; // Use flex layout
      this.container.style.alignItems = "center"; // Center vertically
  
      // Create a container for the text line
      this.textContainer = element.appendChild(document.createElement("div"));
      this.textContainer.setAttribute("id", "text-line-container");
      this.textContainer.style.fontSize = "18px";
      this.textContainer.style.textAlign = "center";
      this.textContainer.style.padding = "10px";
      this.textContainer.style.fontFamily = "Arial"; // Set font family to Arial
    },
  
    updateAsync: function(data, element, config, queryResponse, details, done) {
      // Get the count value from user-selected new alerts
      const count = config.query_fields.dimensions[0].value || 0; // Replace index if necessary
  
      // Calculate the percentage change based on the available count
      const previousCount = 75; // Replace with the previous day's count value
      const percentageChange = ((count - previousCount) / previousCount) * 100;
  
      const arrowIcon = percentageChange > 0 ? '🔼' : '🔽';
  
      // Display the count, percentage, and arrow value using flex layout
      this.container.innerHTML = `
        <div style="font-size: 50px; margin-right: 10px;">${count}</div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <div style="font-size: 25px;">${arrowIcon}</div>
          <div style="font-size: 25px;">${percentageChange.toFixed(2)}%</div>
        </div>
      `;
  
      // Display the text line below the count and percentage value
      this.textContainer.textContent = "Total Items";
  
      // Signal the completion of rendering
      done();
    }
  });
  