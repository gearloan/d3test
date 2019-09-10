function plotConceptMap() {
	d3.json("https://coab-alchemy-attachments.s3.amazonaws.com/metadata.json", function(dataJson) {
		var plot = new ConceptMap("graph", "graph-info", dataJson);
	});
}
