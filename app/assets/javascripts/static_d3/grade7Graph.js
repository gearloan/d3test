function grade7Graph() {
  var w = 500,
      h = 500,
      n = 65,
      s = h / n;

  d3.select("body").append("svg")
      .attr("width", w)
      .attr("height", h)
    .selectAll("line")
      .data(d3.range(n)).enter()
    .append("line")
      .attr("x1", 0)
      .attr("y1", function(d) { return d * s; })
      .attr("x2", function(d) { return d * s; })
      .attr("y2", h);
}
