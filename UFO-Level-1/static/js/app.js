// from data.js
var tableData = data;

// first populate the entire data 

// Get a reference to the table body
var tbody = d3.select("tbody");

tableData.forEach((ufodata) => {
  var row = tbody.append("tr");
  Object.entries(ufodata).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(ufodata => ufodata.datetime === inputValue);

  console.log(filteredData);

  // clears the html page before displaying the filtered rows
  tbody.html("")
  // Use d3 to append one table row `tr` for each ufo data object
  filteredData.forEach((ufodata) => {
    var row = tbody.append("tr");
    Object.entries(ufodata).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};