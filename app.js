const fname = document.querySelector("#name");
const user = document.querySelector("#username");
const pwd = document.querySelector("#passwd");
const funact = document.querySelector("#funActivities");
const reg = document.querySelector("#register");
let allFunAct = [];

const login = document.querySelector("#login")
const newSchedule = document.querySelector(".newschedule");
const newestSchedule = document.querySelector(".createNewSchedule");
const allActivities = document.querySelector("#activityDiv");
const addFunActivity = document.querySelector("#addActivities");
// let navbar = Array.from(document.querySelectorAll('#navbar>ul>li'))

if (reg) {
    reg.addEventListener("click", regFunction);
}

if (login) {
    login.addEventListener("click", loginfn);
    fname.addEventListener('blur', onblurInput);
    user.addEventListener('blur', onblurInput);
    // dont forget if you are following this method you have to remove onblur that is attached in the index.html               
}

// if(login) {
//     login.addEventListener("click", loginfn);
//             create a unique class and implement it in line 28
//     Array.from(document.querySelectorAll('.formError')).forEach(elm => {
//         elm.addEventListener('blur', onblurInput);
//         console.log("its focus");
//     });
// }

if (newSchedule) {
    newSchedule.addEventListener("click", show_Schedule);
    newestSchedule.addEventListener("click", show_Schedule);
    allActivities.addEventListener("click", showAllActivity);
    addFunActivity.addEventListener("click", addActivity);
}

const getItemFromStorage = (itemName) => {
    return JSON.parse(localStorage.getItem(itemName));
}

function loginfn() {
    const regUser = getItemFromStorage('username');
    const regpaswd = getItemFromStorage("password");
    const loginPasswd = document.querySelector("#loginPasswd").value;
    const loginUsername = document.querySelector("#loginUsername").value;
    console.log(regUser + "," + regpaswd, typeof loginUsername, typeof loginPasswd);

    console.log(typeof loginUsername + "," + typeof loginPasswd)

    if (loginUsername === regUser && loginPasswd === regpaswd) {
        window.location.href = "dashboard.html";
        console.log("login is fine");
        return true;
    }

    else {
        console.log(loginUsername + "," + loginPasswd)
        alert('incorrect username or password');
    }

}

function focusFunction() {
    Array.from(document.querySelectorAll('.formError')).forEach(elm => {
        elm.innerHTML = "";
        console.log("its focus");
    });
}

// function onblurName() {
//     const fullName = fname.value;
//     if (fullName.length === 0) {
//         document.querySelector("#nameError").textContent = "name cant be blank";
//         console.log("name cant be blank");
//     }
//     return fullName;
// }

const onblurInput = (evt) => {
    const inputEl = evt.target;
    const inputValue = inputEl.value;
    if (inputValue.length === 0) {
        const id = inputEl.id || inputEl.getAttribute('placeholder');
        document.querySelector("#nameError").textContent = `${id} cant be blank`;
    }
    return inputValue
}


function getName() {
    const fullName = onblurInput(e);
    console.log(fullName);
    if (fullName) {
        const regExp = (/^[A-Za-z\s]+$/);
    
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
}

function onblurUsername() {
    userName = user.value;
    if (userName.length === 0) {
        document.querySelector("#usernameError").textContent = "username cant be blank";
        console.log("username cant be blank");
    }
}

function getUsername() {
    // onblurUsername();
    userName = user.value;
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
        return true;
    }
    else {
        document.querySelector("#pwdError").textContent = "6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter";
        console.log("6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter");
        return false
    }
}

function validateActivity() {
    let funThings = [];
    funThings.push(funact.value);
    const actArr = funact.value.split(",");
    console.log(actArr);

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

function getActivities() {
    let actArr;
    let activity = localStorage.getItem("activities");
    if (activity === null) {
        actArr = [];
    }
    else {
        actArr = JSON.parse(activity);
    }
    return actArr;
}

function regFunction(e) {
    e.preventDefault();
    const userIsValid = getUsername();
    const nameIsValid = getName();
    const pwdIsvalid = getPwd();
    const activityIsValid = validateActivity();

    if (nameIsValid && userIsValid && pwdIsvalid && activityIsValid) {
        window.location.href = "login.html";
        console.log("reg is fine");
        return true;
    }
}

function showAllActivity() {
    const actArr = getActivities()

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
    if (actArr.length != 0) {
        document.getElementById("activity").innerHTML = "";
        document.getElementById("activity").innerHTML = html;
    }
    else {
        allActivities.textContent = `click on add button to add some activities`;
    }
}

function delEachActivity(index) {
    console.log(typeof index, index);
    let confirmDel = confirm("Delete this note?");
    if (confirmDel === true) {
        const actArr = getActivities();
        actArr.splice(index, 1);
        console.log(actArr);
        localStorage.setItem("activities", JSON.stringify(actArr));
    }
    showAllActivity();
}

function addActivity() {
    console.log('add activity is working')
    const inputEl = document.querySelector('#addFunActivities');
    if (inputEl) {
        inputEl.style.display = 'inline-block';
        inputEl.value='';
    }
   else if (addFunActivity.textContent = "Add New Activity") {
        const html = `
        <input type="text" placeholder="fun activities you will love to try out" id="addFunActivities">
        `;
        document.querySelector(".add").innerHTML = html;
    }
    addFunActivity.textContent = "Enter";
    addFunActivity.removeEventListener("click", addActivity);
    addFunActivity.addEventListener("click", showAddedActivity);
    // showAddedActivity();
}

function showAddedActivity() {
    let text = document.getElementById("addFunActivities");
    if (addFunActivity.textContent = "Enter") {
        addFunActivity.textContent = "Add New Activity";
        const actArr = getActivities();
        let textValue = text.value;
        console.log(textValue);
        if (textValue != "") {
            console.log(textValue);
            actArr.push(textValue);
        }
        localStorage.setItem("activities", JSON.stringify(actArr));
    }
    addFunActivity.removeEventListener("click", showAddedActivity);
    addFunActivity.addEventListener("click", addActivity);
    text.style.display = "none";
    showAllActivity();   
}

function generate_random_activity(actArr) {
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
        }
    })
    console.log(checkedDays)
    return checkedDays
}

function generate_schedules() {
    const actArr = getActivities()
    let selected_days = get_selected_days();
    let final_schedule_arr = []
    if (selected_days === null) {
        final_schedule_arr = []
    }
    else {
        selected_days.forEach(function (selectedDay) {
            let randomActivity = generate_random_activity(actArr);
            let idx = actArr.indexOf(randomActivity);
            actArr.splice(idx, 1);
            console.log(actArr);
            let schedule_for_a_particular_day = {
                'name_of_day': selectedDay,
                'activities': randomActivity
            }

            final_schedule_arr.push(schedule_for_a_particular_day);
        });
    }
    return final_schedule_arr;
}

function show_Schedule() {
    let generated_schedule = generate_schedules();
    let allSchedule = document.querySelector(".funDay");
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