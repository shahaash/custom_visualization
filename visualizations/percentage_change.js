looker.plugins.visualizations.add({
  id: 'percentage_change_for_each_date',
  label: 'Percentage Change for Each Date',
  create: function(element, config) {
    // Create a container for displaying the percentage change
    this.container = element.appendChild(document.createElement("div"));
    this.container.setAttribute("id", "percentage-change-container");

    // Applying Styling to the container
    this.container.style.fontWeight = "bold";
    this.container.style.textAlign = "center";
    this.container.style.padding = "10px";
    this.container.style.fontFamily = "Arial"; // Set font family to Arial
  },

  updateAsync: function(data, element, config, queryResponse, details, done) {
    // Get the date dimension and count measure names from config
    const dateDimension = config.dimensions[0]; // Assuming only one dimension is selected
    const countMeasure = config.measures[0];     // Assuming only one measure is selected

    // Calculate the percentage change for each date
    const percentageChanges = [];
    for (const row of data) {
      const currentDate = row[dateDimension].value;
      const currentCount = row[countMeasure].value;

      // Find the count for yesterday (assuming your dates are sorted)
      const previousIndex = data.findIndex(item => item[dateDimension].value === currentDate) - 1;
      const previousCount = previousIndex >= 0 ? data[previousIndex][countMeasure].value : 0;

      // Calculate the percentage change
      const percentageChange = ((currentCount - previousCount) / previousCount) * 100;

      // Display the percentage change for each date
      percentageChanges.push(`${currentDate}: ${percentageChange.toFixed(2)}%`);
    }

    // Display the percentage change values in the container
    this.container.textContent = percentageChanges.join('\n');

    // Signal the completion of rendering
    done();
  }
});
