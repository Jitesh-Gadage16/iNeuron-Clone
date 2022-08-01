// $('.single-item').slick();
const cousre = document.getElementsByClassName('course-cards-div');

const hiddenDiv = document.getElementById('courde-disc');

console.log(cousre)

// ✅ Show hidden DIV on hover
cousre.addEventListener('click',  myFunction);


function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }