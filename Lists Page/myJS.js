function validateANDadd(){
  const theNewWord = document.forms["myForm"]["newWord"].value;
  const selectElement = document.getElementById("listToAdd");
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
        var tableRef = document.getElementById("myList1");
        (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord;
      }
      else{
        var tableRef = document.getElementById("myList2");
        (tableRef.insertRow(tableRef.rows.length)).innerHTML = theNewWord;

      }
    
      document.forms["myForm"]["newWord"].value = "";
      document.getElementById("listToAdd").value = ""

      return true
    }
  }
  
}

function clearList1(){
  var tableRef = document.getElementById("myList1");
  tableRef.innerHTML = "";
}

function clearList2(){
  var tableRef = document.getElementById("myList2");
  tableRef.innerHTML = "";
}

