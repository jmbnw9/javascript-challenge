// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use d3 to append one table row `tr` for each ufo data object
tableData.forEach((ufodata) => {
  var row = tbody.append("tr");
  Object.entries(ufodata).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});