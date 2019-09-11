window.onload = function () {
  var elBar =  document.getElementById('static_d3_barChart');
  var elBasic =  document.getElementById('static_d3_basicTutorials');
  var elSankey =  document.getElementById('static_d3_sankey');
  var elConcept =  document.getElementById('static_d3_conceptMap');
  var elUsMap =  document.getElementById('static_d3_usMap');
  var elgrade7 =  document.getElementById('static_d3_grade7Graph');

  if (typeof(elBar) != 'undefined' && elBar != null) {
    barChart();
  } else if (typeof(elBasic) != 'undefined' && elBasic != null) {
    d3Basics();
  } else if (typeof(elSankey) != 'undefined' && elSankey != null) {
    sankey();
  } else if (typeof(elConcept) != 'undefined' && elConcept != null) {
    plotConceptMap();
  } else if (typeof(elUsMap) != 'undefined' && elUsMap != null) {
    usMap();
  } else if (typeof(elgrade7) != 'undefined' && elgrade7 != null) {
    grade7Graph();
  }
}
