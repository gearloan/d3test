window.onload = function () {
  var elBar =  document.getElementById('static_d3_barChart');
  var elBasic =  document.getElementById('static_d3_basicTutorials');
  var elSankey =  document.getElementById('static_d3_sankey');

  if (typeof(elBar) != 'undefined' && elBar != null) {
    barChart();
  } else if (typeof(elBasic) != 'undefined' && elBasic != null) {
    d3Basics();
  } else if (typeof(elSankey) != 'undefined' && elSankey != null) {
    sankey();
  }
}
