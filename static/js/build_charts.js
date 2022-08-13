function getFirstDate() {
    
  return document.getElementById("dateSelect").value

  console.log(firstDate)
  
  document.getElementById("dateSelect").addEventListener("change", function(){
    const dateInput = this.value;
    return dateInput;


  // Use the first date build initial plots
  // buildCharts(firstDate);
  // buildMetadata(firstDate);

  });  

};



// function optionChanged(newDate) {
  
  // Fetch new data each time a new date is selected
  // buildMetadata(newDate);
  // buildCharts(newDate);
  
// }
 
  // Create Ride Bar Chart

function getFilteredData(date, data) {
  const filtersData = [...data]
  return filtersData.filter(row => row.date.slice('0', '10') === date)
};
  
  // 1. Create the buildCharts function.
function buildCharts() {
  
  // 2. Use d3.json to load and retrieve data source 
  d3.json("http://localhost:8000/disney_json").then((data) => {
 
    // 3. Create a variable that holds the array.
    // Write function to parse data (date string)
    const waitData = data;

    

    console.log(waitData.date)

    const firstDate = getFirstDate();
    console.log(waitData);
    console.log(firstDate);

    
    // 4. Filter data based on current date
    const filteredData = getFilteredData(firstDate, waitData);
    console.log(filteredData);

    // Call function for data plotting
    // document.getElementById("dateSelect").addEventListener("change", function(){
    // filteredData();
    // Call data plot function


  // Use the first date build initial plots
  // buildCharts(firstDate);
  // buildMetadata(firstDate);

  // });  

      // //  5. Create a variable that holds the first entry in the array.
      // var results = filteredEntries[0];
      // console.log(results);
  
      // // 6. Create variables that hold the ride names and times.
      // var rides = results.ride_name;
      // console.log(rides);
  
      // var values = results.sactmin;
  
  
      // 7. Create the yticks for the bar chart.
    
  
  //     var yticks = rides.map((rides) => `Ride Name: ${rides}`).reverse();
  
  //     // 8. Create the trace for the bar chart. 
  //     var barData = [{
  //       x: values.reverse(),
  //       y: yticks,
  //       type: "bar",
  //       orientation: "h",
  //       text: rides.reverse(),
  //       marker: {color: '#17becf'},
  //     }];
  
  //     // 9. Create the layout for the bar chart. 
    
  //     var barLayout = {
  //       title: {
  //       text: "<b>Average Ride Wait TImes</b>",
  //       font: {
  //       size: 20
  //       },
  //       color: {color: 'magenta',}
  //     }};
  
  
  
  //     // 10. Use Plotly to plot the data with the layout. 
  //     Plotly.newPlot("ride_bar", barData, barLayout);
  });
};
buildCharts();
  
  
  
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

  // Info. Panel 
  // function buildMetadata() {
  //   d3.json("http://localhost:8000/disney_json").then((data) => {

  //     let metadata = data;
  //     console.log(metadata)
  
      // var resultArray = metadata.filter(sampleObj => sampleObj.date == dateInput);
      // console.log(resultArray);
      // var result = resultArray[0];
      // console.log(result);
      
  
  //     // Use d3 to select the panel with id of `#ride-metadata`
  //     var PANEL = d3.select("#ride-times");
  
  //     // Use `.html("") to clear any existing metadata
  //     PANEL.html("");
  
  //     Object.entries(result).forEach(([key, value]) => {
  //       PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
  //     });
  
  //   });
  // }
  
  
  // Initialize the dashboard
