
document.querySelector("button").addEventListener("click", myFunction)
  
function myFunction() {
  var x = document.getElementById("#name").value;
  document.getElementById("demo").innerHTML ="Hello " + x; ",welcome to the bootcamp";
}
