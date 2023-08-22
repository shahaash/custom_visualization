<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-sparklines/2.1.2/jquery.sparkline.min.js" integrity="sha512-3PRVLmoBYuBDbCEojg5qdmd9UhkPiyoczSFYjnLhFb2KAFsWWEMlAPt0olX1Nv7zGhDfhGEVkXsu51a55nlYmw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>ations.add({
  create: function(element, config) {
    // Create a new DOM element to hold the sparkline chart
    var sparklineContainer = $('<div class="sparkline-chart"></div>');
    element.append(sparklineContainer);

    // Include Sparkline.js from a CDN (replace with the actual CDN URL)
    var sparklineJsScript = document.createElement('script');
    sparklineJsScript.src = '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-sparklines/2.1.2/jquery.sparkline.min.js" integrity="sha512-3PRVLmoBYuBDbCEojg5qdmd9UhkPiyoczSFYjnLhFb2KAFsWWEMlAPt0olX1Nv7zGhDfhGEVkXsu51a55nlYmw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>'; // Replace with the actual CDN URL
    document.head.appendChild(sparklineJsScript);

    // Return the container element
    return sparklineContainer[0];
  },
  updateAsync: function(data, element, config, queryResponse, details, done) {
    // Dummy data for demonstration (replace with your Looker data)
    var dummyData = [
      { sparkline_value: 10 },
      { sparkline_value: 20 },
      { sparkline_value: 15 },
      { sparkline_value: 30 },
      { sparkline_value: 25 },
    ];

    // Extract the data for the sparkline chart
    var sparklineData = dummyData.map(function(row) {
      return row["sparkline_value"];
    });

    // Render the sparkline chart using Sparkline.js
    // Assuming you've included Sparkline.js in the head of your HTML file
    // and created a div with class "sparkline-chart" in your HTML
    $(element)
      .find('.sparkline-chart')
      .sparkline(sparklineData, {
        type: 'line',
        width: '100px', // Customize width as needed
        height: '30px' // Customize height as needed
      });

    // Call the 'done' function to signal that the rendering is complete
    done();
  }
});
