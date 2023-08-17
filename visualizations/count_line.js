looker.plugins.visualizations.add({
  id: 'dynamic-field-selection-visualization',
  label: 'Dynamic Field Selection Visualization',
  options: {
    selectedDimension: {
      type: 'string',
      label: 'Select Dimension',
      display: 'select',
      values: "{{ dimensions }}", // Looker will populate the available dimensions here
      default: 'dimension_name'
    },
    selectedMeasure: {
      type: 'string',
      label: 'Select Measure',
      display: 'select',
      values: "{{ measures }}", // Looker will populate the available measures here
      default: 'measure_name'
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
    // Use Looker's options to get dynamic field selections
    const selectedDimension = config.selectedDimension;
    const selectedMeasure = config.selectedMeasure;

    // Retrieve the dimension and measure values from the query response
    const dimensionValue = data[0][queryResponse.fields[selectedDimension].name].value;
    const measureValue = data[0][queryResponse.fields[selectedMeasure].name].value;

    // Display the selected dimension and measure values
    const dynamicFieldsDiv = document.createElement("div");
    dynamicFieldsDiv.style.display = "flex";
    dynamicFieldsDiv.style.alignItems = "center";

    const dimensionSpan = document.createElement("span");
    dimensionSpan.textContent = `Dimension: ${dimensionValue}`;
    dynamicFieldsDiv.appendChild(dimensionSpan);

    const measureSpan = document.createElement("span");
    measureSpan.textContent = `Measure: ${measureValue}`;
    measureSpan.style.marginLeft = "10px";
    dynamicFieldsDiv.appendChild(measureSpan);

    this.container.appendChild(dynamicFieldsDiv);

    // Signal the completion of rendering
    done();
  }
});
