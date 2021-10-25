// TODO: change constant variable definitions from let to const
// minimize use of global variables like pwdIsvalid unless necessary and accessed by multiple functions
// TODO: remove innerHTML and substitute with something more secure except for places that strictly use html
// Use triple equality/inequality except explicitly required
const fname = document.querySelector("#name");
const user = document.querySelector("#username");
const pwd = document.querySelector("#passwd");
const funact = document.querySelector("#funActivities");
const reg = document.querySelector("#register");
let allFunAct = [];

const login = document.querySelector("#login")
const newSchedule = document.querySelector(".newschedule");
const newestSchedule = document.querySelector(".createNewSchedule")
const allActivities = document.querySelector("#activityDiv"); 
const addFun = document.querySelector("#addActivities");
// let navbar = Array.from(document.querySelectorAll('#navbar>ul>li'))
// let delBtn = document.getElementById("delAct");

if (reg) {
    reg.addEventListener("click", regFunction);
}

if (login) {
    login.addEventListener("click", loginfn);
}

if (newSchedule) {
    newSchedule.addEventListener("click", show_Schedule);
    newestSchedule.addEventListener("click", show_Schedule);
    allActivities.addEventListener("click", showAllActivity);
    addFun.addEventListener("click", addActivity);
}
// newSchedule.addEventListener("click", newScheduleFn);
// console.log(fname)
// console.log(document.getElementById("new"))
// document.getElementById('yup').addEventListener("click", newScheduleFn)
// allActivities.addEventListener("click", showAllActivity);
// addFun.addEventListener("click", addActivity);
// delBtn.addEventListener("click", delEachActivity) 


// addFun.addEventListener("click", showAddedActivity);

function loginfn() {
    // const regUser = getUsername();
    // const regUser = localStorage.getItem("username");
    // const regpaswd = localStorage.getItem("password");
    // console.log (typeof regUser + ","+ typeof regpaswd)
    const regUser = JSON.parse(localStorage.getItem("username"));
    const regpaswd = JSON.parse(localStorage.getItem("password"));
    // const regpaswd = getPwd();
    const loginPasswd = document.querySelector("#loginPasswd").value;
    const loginUsername = document.querySelector("#loginUsername").value;
    console.log(regUser + ","+ regpaswd, typeof loginUsername, typeof loginPasswd);

    console.log(typeof loginUsername+ ","+typeof loginPasswd)

    // if(loginUsername.toString() === regUser && loginPasswd.toString() === regpaswd){
    if(loginUsername === regUser && loginPasswd === regpaswd){
        window.location.href = "dashboard.html";
        console.log("login is fine");
        return true;
    }

    else {
        console.log(loginUsername+ ","+ loginPasswd)
        alert('incorrect username or password');
    }
    
}

function focusFunction() {
    Array.from(document.querySelectorAll('.formError')).forEach(elm => {
        elm.innerHTML = "";
        console.log("its focus");
    });
}

function onblurName() {
    fullName = fname.value;
    if (fullName.length === 0) {
        document.querySelector("#nameError").textContent = "name cant be blank";
        console.log("name cant be blank");
        // alert("name cant be blank")
    }
}

function getName() {
    onblurName();
    console.log(fullName);
    let regExp = (/^[A-Za-z\s]+$/);

    if (fullName.match(regExp)) {
        localStorage.setItem("name", JSON.stringify(fullName));
        console.log("name is correct");
        fname.value = "";
        return true;
    }
    else {
        document.querySelector("#nameError").textContent = "only letters allowed";
        console.log("only letters allowed");
        return false;
    }
}

function onblurUsername() {
    userName = user.value;
    if (userName.length === 0) {
        document.querySelector("#usernameError").textContent = "username cant be blank";
        console.log("username cant be blank");
        // alert("name cant be blank")
    }
}

function getUsername() {
    // onblurUsername();
    userName = user.value;
    // console.log(userName);
    let regexp = (/^[A-Za-z]+$/);
    if (userName.match(regexp)) {
        localStorage.setItem("username", JSON.stringify(userName));
        console.log("user is correct");
        user.value = "";
        return true;
    }
    else {
        document.querySelector("#usernameError").textContent = "only letters allowed";
        console.log("only letters allowed");
        return false
    }
}

function onblurPwd() {
    paswd = pwd.value;
    if (paswd.length === 0) { 
        document.querySelector("#pwdError").textContent = "password cant be blank";
        console.log("password cant be blank");
        // alert("name cant be blank")
    }
}

function getPwd() {
    // onblurPwd();
    paswd = pwd.value;
    let regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (paswd.match(regexp)) {
        localStorage.setItem("password", JSON.stringify(paswd));
        console.log(" password correct");
        pwd.value = " ";
        return true
    }
    else {
        document.querySelector("#pwdError").textContent = "6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter";
        console.log("6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter");
        return false
    }
}

function validateActivity () {
    const actArr = getActivity();
    console.log(actArr)

    if (actArr.length < 3) {
        document.querySelector("#activityError").textContent = "at least 3 activities";
        console.log("activity cant be blank");
        return false;
    }
    else {
        localStorage.setItem("activities", JSON.stringify(actArr));
        funact.value = " ";
        return true;
    }
}

function getActivity() {
    let actArr ;
    // let arrAct = [];
    let funThings = [];   // console.log(funact.value)
    let activity = localStorage.getItem("activities");
    if (activity === null) {
        actArr = [];
    }
    else {
        actArr = JSON.parse(activity);
    }
    // console.log(funact.value)
    funThings.push(funact.value);
    actArr = funThings.toString().split(",");
    return actArr;
}

function regFunction(e) {
    e.preventDefault();
    const userIsValid = getUsername();
    const nameIsValid = getName();
    const pwdIsvalid =  getPwd();
    const activityIsValid = validateActivity();

    if (nameIsValid && userIsValid && pwdIsvalid && activityIsValid) {
        window.location.href = "login.html";
        console.log("reg is fine");
        return true;
    }
}

function showAllActivity() {
    const actArr = getActivity()
   
    let html = "";
    actArr.forEach(function (element, index) {
        html += `
        <li role="presentation" class="divider">
            <span> ${element}</span>
            <span> <i id="${index}" onclick="delEachActivity(${index})" class="fa fa-trash btn" aria-hidden="true"></i></span>
        </li>
        `
        console.log(index)
    });
    html += `
    <li>
    <button class="btn btn-primary" id="addActivities" type="button" >Add</button> 
    <div class="add"> </div>
    </li>
    `
    if (actArr.length != 0) {
        // console.log(funStr.length)
        document.getElementById("activity").innerHTML = "";
        document.getElementById("activity").innerHTML = html;
        // console.log(document.getElementById("activity").appendChild(list))
    }
    else {
        allActivities.textContent = `click on add button to add some activities`;
    }

}

function delEachActivity(index) {
    console.log(typeof index, index);
    //    let delBtn = document.getElementById("delAct");
    let confirmDel = confirm("Delete this note?");
    if (confirmDel === true) {
        const actArr = getActivity();
        // console.log(actArr);
        // var idx = stringFun.indexOf(activity1);
        // console.log(idx);
        actArr.splice(index, 1);
        // const filteredArr = actArr.filter((item, ind) =>{
        //     console.log(ind !== index, ind != index, ind);
        //     if (ind !== index) return item
        //     })
        console.log(actArr);
        // console.log(filteredArr);
        localStorage.setItem("activities", JSON.stringify(actArr));
        // localStorage.setItem("activities", JSON.stringify(filteredArr));
        showAllActivity();
    }
}

function addActivity() {
    if (addFun.textContent = "Add") {
        addFun.textContent = "Enter";
        console.log(addFun.textContent);
        // console.log(addFun.removeEventListener("click", addActivity))
        let html = `
        <input type="text" placeholder="fun activities you will love to try out" id="addFunActivities">
        `;
        document.querySelector(".add").innerHTML = html;
    }
    addFun.removeEventListener("click", addActivity);
    addFun.addEventListener("click", showAddedActivity);
    // showAddedActivity();
    // console.log(addFun.removeEventListener("click", addActivity))
}

function showAddedActivity() {
    let text = document.getElementById("addFunActivities");
    if (addFun.textContent = "Enter") {
        addFun.textContent = "Add";
        const actArr = getActivity();
        // let text = document.getElementById("addFunActivities");
        let textValue = text.value;
        console.log(textValue);
        if (textValue != "") {
            console.log(textValue);
            actArr.push(textValue);
        }
        localStorage.setItem("activities", JSON.stringify(actArr));
        // document.querySelector(".add").innerHTML = " "
        // text.style.display = "none";
    }
    addFun.removeEventListener("click", showAddedActivity);
    addFun.addEventListener("click", addActivity);
    text.style.display = "none";
    // document.querySelector(".add").style.display = "none";
    showAllActivity();
    // document.querySelector(".add").innerHTML = ""      
}

function generate_random_activity(actArr) {
    // const actArr = getActivity()
    // console.log(actArr)
    let activity = actArr[Math.floor(Math.random() * actArr.length)];
    console.log(activity);
    return activity
}

function get_selected_days() {
    let checkedDays = []
    let checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            checkedDays.push(checkbox.value)
            // console.log(checkbox.value)
        }
    })
    console.log(checkedDays)
    return checkedDays
}

function generate_schedules() {
    const actArr = getActivity()
    let selected_days = get_selected_days();
    let final_schedule_arr = []
    if (selected_days === null) {
        final_schedule_arr = []
    }
    else {
        selected_days.forEach(function (selectedDay) {
            let randomActivity = generate_random_activity(actArr);
            let idx = actArr.indexOf(randomActivity);
            // console.log(idx);
            actArr.splice(idx, 1);
            console.log(actArr);
            // console.log(selectedDay)
            // console.log(randomActivity)
            let schedule_for_a_particular_day = {
                'name_of_day': selectedDay,
                'activities': randomActivity
            }

            final_schedule_arr.push(schedule_for_a_particular_day);
            // console.log(final_schedule_arr);
        });
    }
    // console.log(final_schedule_arr);
    return final_schedule_arr;
}

function show_Schedule() {
    let generated_schedule = generate_schedules();
    let allSchedule = document.querySelector(".funDay");
    //   let dayOfFun = document.querySelector(".day");
    document.querySelector(".cardDiv").style.display = "none";
    let html = ""
    generated_schedule.forEach(function (schedule) {
        html += `
            <div class="card day1">
            <div class="card-body day">
            <h4 class="card-title">${schedule.name_of_day}</h4>
            <p class="card-text">${schedule.activities}</p>
            </div>
            </div>
            `
    })
    if (generated_schedule.length !== 0) {
        allSchedule.innerHTML = html;
    }
    else {
        alert("choose some days");
    }
  
}

// function newScheduleFn(){
//     let checkedDays = []
//     let checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
//     checkboxes.forEach(function (checkbox){
//         if (checkbox.checked) {
//             checkedDays.push(checkbox.value)
//             // console.log(checkbox.value)
//                 }
//     })
//     console.log(checkedDays)
// }

// function newScheduleFn(e) {
//     let allSchedule = document.querySelector(".funDay")
//     if ( isChecked1.checked && isChecked2.checked === false && isChecked3.checked == false ){
//         let firstDay = dayOne();
//         let dayOfFun = document.querySelector(".day");
//         document.querySelector(".cd").style.display = "none";
//         allSchedule.innerHTML = `
//         <div class="card day1">
//             <div class="card-body day">
//                 <h4 class="card-title">${dayOfFun.textContent}</h4>
//                 <p class="card-text">${firstDay}</p>
//             </div>
//         </div>
//         `
//     }
//     else if (isChecked1.checked === false && isChecked2.checked && isChecked3.checked === false ){
//         dayOne();
//     }
//     else if (isChecked1.checked === false && isChecked2.checked === false && isChecked3.checked){
//         dayOne();
//     }
//     else if (isChecked1.checked && isChecked2.checked && isChecked3.checked === false){ 
//         // dayTwo();
//         let secDay = dayTwo()

//         // Array.from(document.querySelectorAll('.day')).forEach(elm => {

//         // });
//         let dayOfFun = document.querySelector(".day");
//         document.querySelector(".cd").style.display = "none";
//         secDay.forEach(elm => {
//         console.log(elm)
//         allSchedule.innerHTML += `
//         <div class="card day1">
//             <div class="card-body day">
//                 <h4 class="card-title">${dayOfFun.textContent}</h4>
//                 <p class="card-text">${elm}</p>
//             </div>
//         </div>
//         `
//         })

//     }
//     else if (isChecked1.checked && isChecked2.checked === false && isChecked3.checked) { 
//         dayTwo();
//      }
//     else if (isChecked1.checked === false && isChecked2.checked && isChecked3.checked) { 
//         dayTwo();
//     }
//     else if(isChecked1.checked && isChecked2.checked && isChecked3.checked){
//         dayThree();
//     }
//     else{
//        console.log('check a box please')
//     }
// }


// function dayThree() {
//     const actArr = getActivity()
//     let activity3 = actArr[Math.floor(Math.random()*actArr.length)];
//     console.log(activity3);

//     let idx2 = actArr.indexOf(activity3);
//     console.log(idx2);

//     actArr.splice(idx2, 1);
//     console.log(actArr);

//     let activity1 = actArr[Math.floor(Math.random()*actArr.length)];
//     console.log(activity1);

//     var idx = actArr.indexOf(activity1);
//     console.log(idx);
//     actArr.splice(idx, 1);
//     console.log(actArr);

//     let activity2 = actArr[Math.floor(Math.random()*actArr.length)];
//     console.log(activity2);
//     console.log(activity3 + " " + activity1 + " " + activity2);
// }

// function dayOne() {
//     const actArr = getActivity()
//     console.log(actArr)
//     let activity1 = actArr[Math.floor(Math.random()*actArr.length)];
//     console.log(activity1);
//     return activity1
// }

// function dayTwo() {
//     const actArr = getActivity()
//     const dayTwoArr = []

//     const firstDay = dayOne();
//     var idx = actArr.indexOf(firstDay);
//     console.log(idx);
//     actArr.splice(idx, 1);
//     console.log(actArr);

//     let activity2 = actArr[Math.floor(Math.random()*actArr.length)];
//     console.log(activity2);

//     dayTwoArr.push(firstDay);
//     dayTwoArr.push(activity2);

//     // console.log(firstDay + " " + activity2);
//     console.log((dayTwoArr))
//     return dayTwoArr
// }

// function activity() {
//     let funThings = funact.value;
//     // if (funThings.length === 0) {
//     //     document.querySelector("#activityError").innerHTML = "at least 3 activities"
//     //     console.log( "password cant be blank")
//     //     // alert("name cant be blank")
//     // }
//     // console.log(funThings.split(','))
//     allFunAct.push(funThings);
//     let actStr = allFunAct.toString().split(",")
//     console.log(actStr)

//     if (actStr.length < 3) {
//         document.querySelector("#activityError").innerHTML = "at least 3 activities";
//         console.log("password cant be blank");
//         return false;
//     }
//     else {
//         localStorage.setItem("activities", JSON.stringify(actStr));
//         console.log(allFunAct);
//         funact.value = " ";
//         // funThings = " ";
//         return true;
//     }
// }
