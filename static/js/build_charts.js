function init() {
    // Grab a reference to the dropdown select element
    let selector = d3.select("#selDataset");
  
    // Use the list of names to populate the select options
    d3.json("static/merged_data.json").then((data) => {
      let dataNames = data.date;
  
      dataNames.forEach((entry) => {
        selector
          .append("option")
          .text(entry)
          .property("value", entry);
      });
  
      // Use the first date from the list to build the initial plots
      var firstDate = dataNames[0];
      buildCharts(firstDate);
      buildMetadata(firstDate);
    });
};

init();
  
  
//   // this function is the trigger when the drop down is used to select a new value
//   function optionChanged(newDate) {
  
//     // Fetch new data each time a new date is selected
//     buildMetadata(newDate);
//     buildCharts(newDate);
    
//   }
  
//   // Demographics Panel 
//   function buildMetadata(entry) {
//     d3.json("metadata.json").then((data) => {
//       var metadata = data.metadata;
//       console.log(metadata)
  
//       // Filter the data for the object with the desired sample number
//       var resultArray = metadata.filter(sampleObj => sampleObj.id == entry);
//       console.log(resultArray)
//       var result = resultArray[0];
//       console.log(result)
  
//       // Use d3 to select the panel with id of `#ride-metadata`
//       var PANEL = d3.select("#ride-metadata");
  
//       // Use `.html("") to clear any existing metadata
//       PANEL.html("");
  
//       // Use `Object.entries` to add each key and value pair to the panel
//       // Hint: Inside the loop, you will need to use d3 to append new
//       // tags for each key-value in the metadata.
//       Object.entries(result).forEach(([key, value]) => {
//         PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
//       });
  
//     });
//   }
  
  
//   // Create Ride Bar Chart 
  
//   // 1. Create the buildCharts function.
//   function buildCharts(entry) {
  
//     // 2. Use d3.json to load and retrieve the metadata.json file 
//     d3.json("metadata.json").then((data) => {
  
//       // 3. Create a variable that holds the array. 
//       var entries = data.entries;
//       console.log(entries);
      
//       // 4. Create a variable that filters the entries for the object with the desired entry number.
//       var filteredEntries = entries.filter(sampleObj => sampleObj.id == entry);
//       console.log(filteredEntries);
  
//       //  5. Create a variable that holds the first entry in the array.
//       var results = filteredEntries[0];
//       console.log(results);
  
//       // 6. Create variables that hold the ride names and times.
//       var rides = results.ride_name;
//       console.log(rides);
  
//       var values = results.sactmin;
  
  
//       // 7. Create the yticks for the bar chart.
    
  
//       var yticks = rides.map((rides) => `Ride Name: ${rides}`).reverse();
  
//       // 8. Create the trace for the bar chart. 
//       var barData = [{
//         x: values.reverse(),
//         y: yticks,
//         type: "bar",
//         orientation: "h",
//         text: rides.reverse(),
//         marker: {color: '#17becf'},
//       }];
  
//       // 9. Create the layout for the bar chart. 
    
//       var barLayout = {
//         title: {
//         text: "<b>Average Ride Wait TImes</b>",
//         font: {
//         size: 20
//         },
//         color: {color: 'magenta',}
//       }};
  
  
  
//       // 10. Use Plotly to plot the data with the layout. 
//       Plotly.newPlot("ride_bar", barData, barLayout);
//     // });
//   //}
  
  
  
//   // Create a Ride Bubble Chart
  
//       // Create the trace for the bubble chart.
//       var bubbleData = [
//         {
//         type: 'bubble',
//         x: rides,
//         y: values,
//         text: rides,
//         mode: 'markers',
//         marker: {
//           size : values,
//           color: rides, 
//           colorscale: "RdBu"
//         }
//       }
//       ];
  
//        var bubbleLayout = {
//         title: "<br><b>Ride Wait Times</b>",
//         margin: { t: 0 },
//         hovermode: "closest",
//         xaxis: { title: "rides" },
//         margin: { t: 30}, 
//         font: {
//         size: 14
//       },
//     };
  
//       // 3. Use Plotly to plot the data with the layout.
//       Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  
  
//   // Create Precipitation Gauge Chart
//   // 1. Create a variable that filters the metadata array for the object with the desired date.
//     var metadata = data.metadata;
  
//       // 2. Create a variable that holds the first sample in the metadata array.
//       var gaugeArray = metadata.filter(metadataObj => metadataObj.id == sample);
//       var gaugeResult = gaugeArray[0];
  
//       // 3. Create a variable that holds the washing frequency.
//       var precipGauge = gaugeResult.wfreq;
      
//       // 4. Create the trace for the gauge chart.
//       var gaugeData = [
//       {
//         title: { text: "<b>Precipitation Amount</b>" },
//         value: parseFloat(precipGauge),
//         type: "indicator",
//         mode: "gauge+number",
//         gauge: {
//           axis: { range: [0, 10], tickwidth: 2, tickcolor: "black" },
//           bar: { color: "black" },
//           steps: [
//             { range: [0, 1], color: "green" },
//             { range: [1, 2], color: "lightgreen" },
//             { range: [3, 4], color: "yellow" },
//             { range: [5, 6], color: "orange" },
//             { range: [7, 8], color: "red" },
//           ],
//         }
//       }
//     ];
      
//       // 5. Create the layout for the gauge chart.
//       var gaugeLayout = { 
//              width: 500, 
//              height: 425, 
//              margin: { t: 0, b: 0 } };
      
//       // 6. Use Plotly to plot the gauge data and layout.
//       Plotly.newPlot("precip_gauge", gaugeData, gaugeLayout);
  
  
//   // Create Temperature Gauge Chart
//   // 1. Create a variable that filters the metadata array for the object with the desired date.
//   var metadata = data.metadata;
  
//   // 2. Create a variable that holds the first sample in the metadata array.
//   var gaugeArray2 = metadata.filter(metadataObj => metadataObj.id == sample);
//   var gaugeResult2 = gaugeArray2[0];
  
//   // 3. Create a variable that holds the washing frequency.
//   var tempGauge = gaugeResult2.wfreq;
  
//   // 4. Create the trace for the gauge chart.
//   var gaugeData2 = [
//   {
//     title: { text: "<b>Average Temperature</b>" },
//     value: parseFloat(tempGauge),
//     type: "indicator",
//     mode: "gauge+number",
//     gauge: {
//       axis: { range: [40, 90], tickwidth: 10, tickcolor: "black" },
//       bar: { color: "black" },
//       steps: [
//         { range: [40, 50], color: "green" },
//         { range: [50, 60], color: "lightgreen" },
//         { range: [60, 70], color: "yellow" },
//         { range: [70, 80], color: "orange" },
//         { range: [80, 90], color: "red" },
//       ],
//     }
//   }
//   ];
  
//   // 5. Create the layout for the gauge chart.
//   var gaugeLayout = { 
//          width: 500, 
//          height: 425, 
//          margin: { t: 0, b: 0 } };
  
//   // 6. Use Plotly to plot the gauge data and layout.
//   Plotly.newPlot("temp_gauge", gaugeData2, gaugeLayout);
  
  
//     });
//   }
  
  
  // Initialize the dashboard
//   init();