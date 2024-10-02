const apiUrl = "https://api.quotable.io/quotes/random"


async function getQuote(){

  var quoteLength = document.getElementById("quote-length").value;
  var lengthstr = "";

  if (quoteLength == "short"){
    lengthstr = "?maxLength=50"
  }
  else if (quoteLength == "medium"){
    lengthstr = "?minLength=50&maxLength=100"
  }
  else{
    lengthstr = "?minLength=100"
  }

  var apiString = apiUrl + lengthstr;
  
  const response = await fetch(apiString);
  var jsonData = await response.json();
  dataObj = jsonData[0];


  document.getElementById("new-quote").innerHTML = dataObj.content
  document.getElementById("author").innerHTML = dataObj.author
 
  return true;
}
