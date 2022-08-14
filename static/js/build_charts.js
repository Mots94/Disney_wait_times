function getFirstDate() {
  const firstDate = document.getElementById("dateSelect").value


  // Use the first date build initial plots

  buildCharts(firstDate);
// buildMetadata(firstDate);
};

getFirstDate();

function getNewDate(newDate) {
  buildCharts(newDate); 
};

function getFilteredData(date, data) {
  const filtersData = [...data]
  return filtersData.filter(row => row.date.slice('0', '10') === date)
};


// Create the buildCharts function.
function buildCharts(date) {
  
  // 2. Use d3.json to load and retrieve data source 
  d3.json("http://localhost:8000/disney_json").then((data) => {
 
    // 3. Create a variable that holds the array.
    // Write function to parse data (date string)
    const waitData = data;
    
    // 4. Filter data based on current date
    const filteredData = getFilteredData(date, waitData);
    console.log(filteredData);

    // 5. Organize data for plotting
    
    rideName = []
    rideTime = []

    Object.entries(filteredData).forEach(([key, value]) => {
      observationsRide = value.ride_name
      observationsTime = value.sactmin
      rideName.push(observationsRide)
      rideTime.push(observationsTime)
    });
    
    // 6. Create the xticks and yticks for the bar chart.
    
    const xticks = rideName;
    const yticks = rideTime;
    
    // 7. Create the trace for the bar chart. 
    let barData = [{
      x: yticks,
      y: xticks,
      type: "bar",
      orientation: 'h',
      marker: {color: '#17becf'},
    }];
    
    // 8. Create the layout for the bar chart. 

    let barLayout = {
      title: {
        text: "<b>Average Ride Wait Times</b>",
        font: {
          size: 20,
        },
      },
      xaxis: {
        title: "Wait Time (Minutes)"
      },
      yaxis: {
        title: "Ride Name"
      },
      margin: {
        l: 150,
        t: 30,
        
      }
    };
    
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("ride_bar", barData, barLayout);
  
    // Create Precipitation Gauge Chart
    // 1. Create a variable that stores precipitation data.
    const precipitation = []
    
    Object.entries(filteredData).forEach(([key, value]) => {
      observationPrecip = value.wdw_precip
      precipitation.push(observationPrecip)
    });

    const precipDay = precipitation[0];

    // 2. Create the trace for the gauge chart.
      var gaugeData = [
      {
        title: { text: "<b>Precipitation Amount</b>" },
        value: precipDay,
        type: "indicator",
        mode: "gauge+number",
        gauge: {
          axis: { range: [0, .35], tickwidth: 2, tickcolor: "black" },
          bar: { color: "black" },
          steps: [
            { range: [0, .07], color: "green" },
            { range: [.07, .14], color: "lightgreen" },
            { range: [.14, .21], color: "yellow" },
            { range: [.21, .28], color: "orange" },
            { range: [.28, .35], color: "red" },
          ],
        }
      }
    ];
      
      // 5. Create the layout for the gauge chart.
      var gaugeLayout = { 
             width: 500, 
             height: 425, 
             margin: { t: 0, b: 0 } };
      
    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("precip_gauge", gaugeData, gaugeLayout);

    // Create Teamperature Gauge Chart
    // 1. Create a variable that stores temperature data.
    const temp = []
    
    Object.entries(filteredData).forEach(([key, value]) => {
      observationTemp = value.wdw_mean_temp
      temp.push(observationTemp)
    });

    const tempDay = temp[0];

    // 4. Create the trace for the gauge chart.
    var gaugeData2 = [
    {
      title: { text: "<b>Average Temperature</b>" },
      value: tempDay,
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: { range: [40, 90], tickwidth: 10, tickcolor: "black" },
        bar: { color: "black" },
        steps: [
          { range: [40, 50], color: "green" },
          { range: [50, 60], color: "lightgreen" },
          { range: [60, 70], color: "yellow" },
          { range: [70, 80], color: "orange" },
          { range: [80, 90], color: "red" },
        ],
      }
    }
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
          width: 500, 
          height: 425, 
          margin: { t: 0, b: 0 } };
    
    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("temp_gauge", gaugeData2, gaugeLayout);

    // Create a Ride Bubble Chart
      
    rideNameTwo = []
    rideTimeTwo = []

    Object.entries(waitData).forEach(([key, value]) => {
      observationsRideTwo = value.ride_name
      observationsTimeTwo = value.sactmin
      rideNameTwo.push(observationsRideTwo)
      rideTimeTwo.push(observationsTimeTwo)
    });

    console.log(rideNameTwo); 
    console.log(rideTimeTwo);

      // // Create the trace for the bubble chart.
      // const bubbleData = [
      //   {
      //   type: 'bubble',
      //   x: rideNameTwo,
      //   y: rideTimeTwo,
      //   text: rideNameTwo,
      //   mode: 'markers',
      //   marker: {
      //     size : rideTimeTwo,
      //     color: rideNameTwo, 
      //     colorscale: "RdBu"
      //   }
      // }
      // ];
  
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
  
      // // 3. Use Plotly to plot the data with the layout.
      // Plotly.newPlot("bubble", bubbleData);

  });
    
};
  
  // Create a Ride Bubble Chart
  
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
