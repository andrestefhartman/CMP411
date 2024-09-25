function validateANDadd(){
  const theNewWord = document.forms["myForm"]["newWord"].value;
  const selectElement = document.getElementById("algorithmToUse");
  const selectedValue = selectElement.value;

  if (theNewWord == ""){
    alert("Please enter a word to check");
    return false;
  }
  else{

    if (selectedValue == ""){
      alert("Please choose a list to add to");
      return false
    }
    else{

      if (selectedValue == "1"){
        var tableRef = document.getElementById("algorithm1");
        (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord + ": " + algorithmOne(theNewWord);
      }
      else{
        var tableRef = document.getElementById("algorithm2");
        (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord + ": " + algorithmTwo(theNewWord);

      }
    
      document.forms["myForm"]["newWord"].value = "";
      document.getElementById("algorithmToUse").value = ""

      return true
    }
  }
  
}

function algorithmOne(myWord){
  var wordReverse = myWord.split("").reverse().join("");
  return myWord == wordReverse;
}

function algorithmTwo(myWord){
  myWord.split("");
  var i = 0;
  var j = myWord.length - 1;

  while(!(i == j || i - 1 == j)){

    if(myWord[i] != myWord[j]){
      return false;
    }
    i++;
    j--;

  }

  return true;
}

function clearList1(){
  var tableRef = document.getElementById("algorithm1");
  tableRef.innerHTML = "";
}

function clearList2(){
  var tableRef = document.getElementById("algorithm2");
  tableRef.innerHTML = "";
}
