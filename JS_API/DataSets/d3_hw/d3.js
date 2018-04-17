var svgWidth = 960;
var svgHeight = 500;

var margin = { top: 20, right: 40, bottom: 60, left: 50 };

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3.select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Import data from an external CSV file
d3.csv("data.csv", function(error, censusData) {
    console.log(censusData[0])
  if (error) throw error;
  // Format the data
  censusData.forEach(function(data) {
    data.avgHouseInc = +data.avgHouseInc    
    data.seenDoc = +data.seenDoc    
  });
  console.log(censusData[0])

  // Set the ranges with scaling functions
  var xLinearScale = d3.scaleLinear()
    .range([0, width]);

  var yLinearScale = d3.scaleLinear()
    .range([height, 0]);

  // Create axis functions
  var bottomAxis = d3.axisBottom(xLinearScale);
  var rightAxis = d3.axisRight(yLinearScale);

  // Scale the domain
  xLinearScale.domain(
    d3.extent(censusData, function(data) {
        console.log(data.avgHouseInc)
      return data.avgHouseInc;
    })
  );

  yLinearScale.domain([
    d3.min(censusData, function(data) {

      return data.seenDoc;
    }),
    d3.max(censusData, function(data) {

      return data.seenDoc;
    })
  ]);

  svg.append("g")
  .attr("class", "axis")
  .attr("transform", "translate(0," + height + ")")
  .call(bottomAxis);


  svg.append("g")
    .attr("stroke", "orange")
    .call(rightAxis);



});
