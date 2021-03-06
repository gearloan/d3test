function d3Basics () {
  var vis = d3.select("#grapho")
              .append("svg")
  .attr("width", 200).attr("height", 80);

  var nodes = [
      {x: 10, y: 50},
      {x: 70, y: 10},
      {x: 140, y: 50}
    ]

  vis.selectAll("circle.nodes")
     .data(nodes)
     .enter()
     .append("svg:circle")
     .attr("cx", function(d) { return d.x; })
     .attr("cy", function(d) { return d.y; })
     .attr("r", "10px")
     .attr("fill", "black")

  var links = [
    {source: nodes[0], target: nodes[1]},
    {source: nodes[2], target: nodes[1]}
  ]

  vis.selectAll(".line")
     .data(links)
     .enter()
     .append("line")
     .attr("x1", function(d) { return d.source.x })
     .attr("y1", function(d) { return d.source.y })
     .attr("x2", function(d) { return d.target.x })
     .attr("y2", function(d) { return d.target.y })
     .style("stroke", "rgb(6,120,155)");

  ////////////////////////// Tutorial 2 //////////////////////////
  // make a chart, load data

  var width = 420,
      barHeight = 20;

  var bbx = d3.scale.linear()
    .range([0, width]);

  var bbChart = d3.select(".bb-chart")
      .attr("width", width);



  d3.tsv("https://coab-alchemy-attachments.s3.amazonaws.com/data.tsv", type, function(error, data) {
    bbx.domain([0, d3.max(data, function(d) { return d.value; })]);

    bbChart.attr("height", barHeight * data.length);

    var bar = bbChart.selectAll("g")
        .data(data)
      .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

    bar.append("rect")
        .attr("width", function(d) { return bbx(d.value); })
        .attr("height", barHeight - 1);

    bar.append("text")
        .attr("x", function(d) { return bbx(d.value) - 3; })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d.value; });
  });

  function type(dd) {
    dd.value = +dd.value; // coerce to number
    return dd;
  }

  ////////////////////////// Tutorial 3 //////////////////////////
  // exploring various chart configurations
  var width = 420,
    height = 240;

  var y = d3.scale.linear()
      .range([height, 0]);

  var chart = d3.select(".chart")
      .attr("width", width)
      .attr("height", height);

  d3.tsv("https://coab-alchemy-attachments.s3.amazonaws.com/data.tsv", type, function(error, data) {
    y.domain([0, d3.max(data, function(d) { return d.value; })]);

    var barWidth = width / data.length;

    var bar = chart.selectAll("g")
        .data(data)
      .enter().append("g")
        .attr("transform", function(d, i) { return "translate(" + i * barWidth + ",0)"; });

    bar.append("rect")
        .attr("y", function(d) { return y(d.value); })
        .attr("height", function(d) { return height - y(d.value); })
        .attr("width", barWidth - 1);

    bar.append("text")
        .attr("x", barWidth / 2)
        .attr("y", function(d) { return y(d.value) + 3; })
        .attr("dy", ".75em")
        .text(function(d) { return d.value; });
  });

  function type(d) {
    d.value = +d.value; // coerce to number
    return d;
  }
}
