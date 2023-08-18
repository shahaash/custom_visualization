// Use Looker's Visualization API
looker.plugins.visualizations.add({
    id: 'display_count',
    label: 'Display Count',
    create: function(element, config) {
      // Create a container for the count value
      this.container = element.appendChild(document.createElement("div"));
      this.container.setAttribute("id", "count-line-container");

      // Applying Styling to the container
      this.container.style.fontWeight = "bold";
      this.container.style.textAlign = "center";
      this.container.style.padding = "25px";
      this.container.style.display = "flex";
      this.container.style.flexDirection = "column";
      this.container.style.alignItems = "center";

      // Create a container for the text line
      this.textContainer = element.appendChild(document.createElement("div"));
      this.textContainer.setAttribute("id", "text-line-container");
      this.textContainer.style.fontSize = "16px";
      this.textContainer.style.textAlign = "center";
      this.textContainer.style.padding = "5px";
      this.textContainer.style.fontFamily = "Arial";

      // Create a container for the difference chart
      this.chartContainer = element.appendChild(document.createElement("canvas"));
      this.chartContainer.setAttribute("id", "difference-chart-container");
      this.chartContainer.style.width = "80%";
      this.chartContainer.style.height = "300px";
      this.chartContainer.style.margin = "20px auto";
    },

    updateAsync: function(data, element, config, queryResponse, details, done) {
      // Calculate the count value from the data
      const count = data.length;

      // Calculate the percentage value based on the available count
      const estimatedTotalItems = 1000;
      const percentage = ((count / estimatedTotalItems) * 100).toFixed(2);
      const previousPercentage = 75;

      const percentageChange = percentage - previousPercentage;
      const arrowIcon = percentageChange > 0 ? '🔼' : '🔽';

      // Display the count and percentage value in the container
      this.container.innerHTML = `
        <div style="display: flex; align-items: center;">
          <div style="font-size: 50px;">${count}</div>
          <div style="display: flex; flex-direction: column; align-items: flex-start;">
            <div style="font-size: 15px;">${arrowIcon}</div>
            <div style="font-size: 20px; text-align: right;">${percentage}%</div>
          </div>
        </div>
      `;

      // Display the text line below the count value
      this.textContainer.textContent = "Today vs Yesterday";

      // Prepare data for the difference chart
      const dates = ['2023-08-01', '2023-08-02', '2023-08-03', '2023-08-04']; // Example dates
      const values = [100, 120, 90, 110]; // Example values
      
      // Calculate the difference between today and previous day values
      const valueDifferences = [];
      for (let i = 1; i < values.length; i++) {
        const difference = values[i] - values[i - 1];
        valueDifferences.push(difference);
      }

      const chartData = {
        labels: dates.slice(1), // Remove the first date since it doesn't have a previous day
        datasets: [{
          label: 'Value Differences',
          data: valueDifferences,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false
        }]
      };

      // Create the difference chart using Chart.js
      const ctx = this.chartContainer.getContext('2d');
      if (this.differenceChart) {
        this.differenceChart.destroy(); // Destroy existing chart if it exists
      }
      this.differenceChart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day',
                displayFormats: {
                  day: 'MMM D'
                }
              }
            },
            y: {
              beginAtZero: true
            }
          }
        }
      });

      // Signal the completion of rendering
      done();
    }
  });
