var svgWidth = 700;
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
d3.csv("data1.csv", function (error, censusData) {

  if (error) throw error;
  // Format the data
  censusData.forEach(function (data) {
    data.avgHouseInc = +data.avgHouseInc
    data.seenDoc = +data.seenDoc
  });

  // Set the ranges with scaling functions
  var xLinearScale = d3.scaleLinear()
    .range([0, width]);

  var yLinearScale = d3.scaleLinear()
    .range([height, 0]);

  // Create axis functions
  var bottomAxis = d3.axisBottom(xLinearScale);
  var leftAxis = d3.axisRight(yLinearScale);

  // Scale the domain
  xLinearScale.domain(
    d3.extent(censusData, function (data) {

      return data.avgHouseInc;
    })
  );

  yLinearScale.domain([
    d3.min(censusData, function (data) {
      return data.seenDoc;
    }),
    d3.max(censusData, function (data) {
      return data.seenDoc;
    })
  ]);

  // create plot variable
  var node = svg.selectAll("g")
    .data(censusData)
    .enter()
    .append("g");


  // add axes
  svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + height + ")")

    .call(bottomAxis);

  svg.append("g")
    .call(leftAxis)
    ;


  // adding circle coordinates to plot
  node.append("circle")
    .attr("cx", function (censusData, index) {
      // console.log(censusData.abbr)
      return xLinearScale(censusData.avgHouseInc);
    })
    .attr("cy", function (censusData, index) {
      return yLinearScale(censusData.seenDoc);
    })
    .attr("stroke", "white")
    .attr("r", "9")
    .attr("fill", "blue")


  // adding state abbriviations inside circles
  node.append("text")
    .attr("x", function (data) { return (xLinearScale(data.avgHouseInc) - 6); })
    .attr("y", function (data) { return (yLinearScale(data.seenDoc) + 3); })
    .text(function (data, index) {
      return data.abbr
    })
    .attr('fill', 'white')
    .style("font-size", "9px")


  // Y axis label
  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x", 0 - (height))
    .attr("dy", "1em")
    .style('fill', 'white')
    .style("font-size", "20px")
    .style('fill', 'white')
    .style("font-size", "20px")
    .text("% of population that saw doctor in the last year");

  // X axis label
  svg.append("text")
    .attr("transform",
    "translate(" + (width / 5) + " ," +
    (height + margin.top + 30) + ")")
    .style('fill', 'white')
    .style("font-size", "20px")
    .text("($) Estimated Household Income in past 12 months");
});
