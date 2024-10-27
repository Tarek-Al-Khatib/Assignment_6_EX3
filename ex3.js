const treeHeight = parseInt(
  prompt("Please enter the size of the Christmas tree:")
);
var tree = document.createElement("div");
//https://www.w3schools.com/jsref/prop_doc_body.asp
document.body.appendChild(tree);
//
var line = "|";
var star = "*";
var emptySpace = " ";
for (var i = 1; i < treeHeight; i++) {
  if (i == 1) {
    var level = "*";
    var htmlLevel = document.createElement("div");
    htmlLevel.innerHTML = `<p class="gold-star">${level}</p>`;
    tree.appendChild(htmlLevel);
  }
  var level =
    emptySpace.repeat(treeHeight - i) + star + line.repeat(2 * i - 1) + star;
  var htmlLevel = document.createElement("div");
  htmlLevel.innerHTML = `<p>${level}</p>`;
  tree.appendChild(htmlLevel);
}
