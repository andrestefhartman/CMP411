async function getBaconIpsum(){
  var apiString = "https://baconipsum.com/api/";

  var theNewParagraphs = document.getElementById("newParagraphs").value;
  var meatFiller = document.getElementById("meat/filler").value;


  apiString = apiString + "?type=" + meatFiller +"&paras=" + theNewParagraphs;
  alert(apiString);

  var response = await fetch(apiString);

  document.getElementById("myRawData").innerHTML = "";
  document.getElementById("myFormattedData").innerHTML = "";
  document.getElementById("myEncryptedData").innerHTML = "";

  var jsonData = await response.json();

  document.getElementById("myRawData").innerHTML = JSON.stringify(jsonData);


  for (var para in jsonData)(
    document.getElementById("myFormattedData").innerHTML += "<p>" + jsonData[para] + "</p>"
  )

   

  document.getElementById("myEncryptedData").innerHTML = ceasarsCipher(document.getElementById("myFormattedData").textContent);

  return true
}


function ceasarsCipher(str) {
  let shift = 3;
  let result = "";

  for(let i = 0; i < str.length; i++) {
    let char = str[i];

    if(char.match(/[a-z]/i)){
      let charCode = str.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        char = String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
      }

      else if (charCode >= 97 && charCode <= 122) {
        char = String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
      }
    }

    result += char;
  }

  return result;
}

console.log("hello");