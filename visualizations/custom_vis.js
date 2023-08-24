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
    },

    updateAsync: function(data, element, config, queryResponse, details, done) {
      // Calculate the count value from the data
      const count = data.length;

      let list=[]
      let list1=[]
      for (var i of queryResponse.fields.measures) {
        var th = document.createElement('th');
        list.push(i.name);
      }
      data.forEach(function (row) {
        Object.keys(row).forEach(function (key) {
          list1.push(row[key].value);
        });
      });
      // console.log("list:",list)
      // console.log("list1:",list1)

      // Calculate the percentage value based on the available count
      const estimatedTotalItems = 100;
      const percentage = ((count / estimatedTotalItems) * 100).toFixed(2);
      const previousPercentage = 75;

      const percentageChange = percentage - previousPercentage;
      const arrowIcon = percentageChange > 0 ? '➚' : '➘';

      // Display the count and percentage value in the container
      this.container.innerHTML = `
        <div style="display: flex; align-items: center;">
          <div style="font-size: 60px;">${list1[1]}</div>
          <div style="display: flex; flex-direction: column; align-items: flex-start;">
            <div style="font-size: 30px;">${arrowIcon}</div>
            <div style="font-size: 20px; text-align: right;">${percentage}%</div>
          </div>
        </div>
      `;

      // Display the text line below the count value
      this.textContainer.textContent = "Today vs Yesterday";

      // Signal the completion of rendering
      done();
    }
  });
