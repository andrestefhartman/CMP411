//Ensure all required fields are entered upon submit
document.getElementById("surveyForm").addEventListener("submit",function(event){
  event.preventDefault();


  //prompt that form was submitted sucessfully, or that a field is still required
  if (this.checkValidity()){
    alert("Form submitted succesfully!");
    this.reset();
  }else{
    alert("Please fill in all required fields.");
  }
})