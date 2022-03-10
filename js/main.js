var sampleText = "JavaScript is a must-know  programming  language for a modern developer";
  

function modifyText(sampleText, sep) {
    return sampleText.split(sep).reverse().join(sep);
  }
    
  result1 = modifyText(sampleText, "");
  result2 = modifyText(sampleText , " ");
  
  console.log(result1);
  console.log(result2);