// Write code related to Add Students page here
var accept = [];
var reject = [];
var accepted = JSON.parse(localStorage.getItem('accept'));
var admission = JSON.parse(localStorage.getItem('admission'));
if(!admission){
     admission = [];
}

function Submitdata () {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var genderget = document.getElementById("gender");
    var gender = genderget.options[genderget.selectedIndex].value;
    var getcourse = document.getElementById("course");
    var course = getcourse.options[getcourse.selectedIndex].value;

    var data = {
        name:name,
        email:email,
        phone:phone,
        gender:gender,
        course: course
    }
    admission.push(data);

    localStorage.setItem('admission',JSON.stringify(admission));
}
if(!accepted){
    localStorage.setItem('accept',JSON.stringify(accept))
    localStorage.setItem('reject',JSON.stringify(reject))
}
