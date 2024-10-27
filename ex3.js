const treeHeight = parseInt(
  prompt("Please enter the size of the Christmas tree:")
);
var tree = document.getElementById("tree");

for (var i = 1; i <= treeHeight; i++) {
  var level = " ".repeat(treeHeight - i) + "*" + "|".repeat(i - 1) + "*";
  var htmlLevel = document.createElement("div");
  htmlLevel.innerHTML =
    i == 1 ? `<p class="gold-star">${level}</p>` : `<p>${level}</p>`;
  tree.appendChild(htmlLevel);
}
