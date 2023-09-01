updateAsync: function(data, element, config, queryResponse, details, done) {
    // Assuming your data is sorted by date in descending order
    data.sort(function(a, b) {
        return new Date(b[queryResponse.fields.dimensions[0].name]) - new Date(a[queryResponse.fields.dimensions[0].name]);
    });

    // Initialize variables to store previous date and percentage change data
    let prevDate = null;
    let percentageChanges = [];
    let prevCount = null; // Initialize prevCount

    // Iterate through the data
    data.forEach(function(row) {
        const currentDate = new Date(row[queryResponse.fields.dimensions[0].name]);
        const count = parseFloat(row[queryResponse.fields.measures[0].name]);

        if (prevDate) {
            // Calculate percentage change (current - previous) / previous * 100
            const percentageChange = ((count - prevCount) / prevCount) * 100;
            percentageChanges.push({
                date: currentDate,
                percentageChange: percentageChange
            });
        }

        // Update previous date and count for the next iteration
        prevDate = currentDate;
        prevCount = count; // Update prevCount with the current count
    });

    // Now 'percentageChanges' contains an array of objects with date and percentage change
    console.log("Percentage Changes:", percentageChanges);

    // Continue with rendering or further processing as needed

    // Call done to signal rendering completion
    done();
}
