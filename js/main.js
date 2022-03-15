function modifyText(sampleText, sep) {
    return sampleText.split(sep).reverse().join(sep);
}
var sampleText = "JavaScript is a must-know  programming  language for a modern developer";

result1 = modifyText(sampleText, "");
result2 = modifyText(sampleText , " ");

console.log(result1);
console.log(result2);