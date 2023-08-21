looker.plugins.visualizations.add({
  id: 'count_value_change_with_selected_date_field',
  label: 'Count Value Change with Selected Date Field',
  create: function(element, config) {
    // Create a container for the count change values
    this.container = element.appendChild(document.createElement("div"));
    this.container.setAttribute("id", "count-change-container");

    // Applying Styling to the container
    this.container.style.fontSize = "16px";
    this.container.style.textAlign = "left";
    this.container.style.padding = "10px";
    this.container.style.fontFamily = "Arial"; // Set font family to Arial
  },

  updateAsync: function(data, element, config, queryResponse, details, done) {
    // Get the selected start date field from the user input (assuming it's a Looker parameter)
    const selectedStartDateField = LookerCharts.Utils.textForCell(details.data[0][config._time]);

    // Get the count field name from the queryResponse
    const countField = queryResponse.fields.measure_like[0].name; // Replace [0] with the appropriate index if needed

    // Filter the data to include only dates equal to or greater than the selected start date field
    const filteredData = data.filter(item => new Date(item[selectedStartDateField]) >= new Date(selectedStartDate));

    // Sort the filtered data by date in ascending order
    filteredData.sort((a, b) => new Date(a[selectedStartDateField]) - new Date(b[selectedStartDateField]));

    // Calculate the count change for each date
    const countChanges = [];
    for (let i = 1; i < filteredData.length; i++) {
      const currentDate = new Date(filteredData[i][selectedStartDateField]);
      const previousDate = new Date(filteredData[i - 1][selectedStartDateField]);
      const countChange = filteredData[i][config.countField] - filteredData[i - 1][config.countField];

      // Format the date and count change
      const formattedDate = currentDate.toDateString();
      const formattedChange = countChange >= 0 ? `+${countChange}` : countChange.toString();

      countChanges.push(`${formattedDate}: ${formattedChange}`);
    }

    // Display the count change values in the container
    this.container.textContent = countChanges.join('\n');

    // Signal the completion of rendering
    done();
  }
});
