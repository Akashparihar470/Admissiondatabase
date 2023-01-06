// Write code related to Admitted page here

var data = JSON.parse(localStorage.getItem('accept'));
console.log(data);

data?.map((e,index) => {

    var container = document.createElement('tr');

    var name = document.createElement("td");
    name.innerHTML = e.name;

    var email = document.createElement('td');
    email.innerHTML = e.email;

    var phone = document.createElement("td");
    phone.innerHTML = e.phone;

    var gender = document.createElement('td');
    gender.innerHTML = e.gender;

    var course = document.createElement('td');
    course.innerHTML = e.course;


    container.append(name,email,phone,course,gender);
    document.querySelector('tbody').append(container)
  })