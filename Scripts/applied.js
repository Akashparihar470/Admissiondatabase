// Write code related to Applied page here

var acceptdata = JSON.parse(localStorage.getItem('accept'));
var rejectdata = JSON.parse(localStorage.getItem('reject'));
var data = JSON.parse(localStorage.getItem('admission'));
console.log(data);

var tbody = document.querySelector('tbody');


function mapping(data) {
    data?.map((e, index) => {
      card(e,index);
    })
}
mapping(data);

function FilterData (){
    tbody.innerHTML = '';
    var search = document.getElementById('filter');
    var filterdata = search.options[search.selectedIndex].value;
    
    var filtering = data.filter(e => {
        if(filterdata === ""){
            return e;
        }else{
            return filterdata === e.course
        }
    });
    console.log(filtering);
    mapping(filtering)
    
}


function card(e,index) {
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

    var accept = document.createElement('td');
    accept.innerHTML = 'Accept';
    accept.classList.add('accept');
    accept.onclick = function () {
        acceptdata.push(e);
        localStorage.setItem('accept', JSON.stringify(acceptdata))
        data.splice(index, 1);
        localStorage.setItem('admission', JSON.stringify(data));
        location.reload()
    }

    var reject = document.createElement('td');
    reject.innerHTML = 'Reject';
    reject.classList.add('reject');
    reject.onclick = function () {
        rejectdata.push(e);
        localStorage.setItem('reject', JSON.stringify(rejectdata))
        data.splice(index, 1);
        localStorage.setItem('admission', JSON.stringify(data));
        location.reload()
    }


    container.append(name, email, phone, course, gender, accept, reject);
    tbody.append(container)
}