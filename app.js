let fname = document.querySelector("#name");
let user = document.querySelector("#username");
let pwd = document.querySelector("#passwd");
let funact = document.querySelector("#funActivities");
let reg = document.querySelector("#register");
let newSchedule = document.querySelector("#newschedule");
let navbar = Array.from(document.querySelectorAll('#navbar>ul>li'))
let allFunAct = [];
// let funArr = [];
let isChecked1 = document.querySelector(".checkbox1");
let isChecked2 = document.querySelector(".checkbox2");
let isChecked3 = document.querySelector(".checkbox3");
let allActivities= document.querySelector("#activityDiv");
let addFun = document.querySelector("#addActivities");
let pwdIsvalid = false
let userIsValid = false
let nameIsValid = false
let activityIsValid = false

let newer = document.querySelector("#dis1");
// let delBtn = document.getElementById("delAct");


// document.getElementById
// onclick, the input from funact is gotten and then pushed to allFunAct array
if (reg){
    reg.addEventListener("click", regFunction);
}

if (newSchedule) {
    newSchedule.addEventListener("click", newScheduleFn); 
}
// newSchedule.addEventListener("click", newScheduleFn);
// console.log(fname)
// console.log(document.getElementById("new"))
// document.getElementById('yup').addEventListener("click", newScheduleFn)
// allActivities.addEventListener("click", showAllActivity);
// addFun.addEventListener("click", addActivity);
// delBtn.addEventListener("click", delEachActivity)


// addFun.addEventListener("click", showAddedActivity);

// if any input field is empty, regFunction doesnt go through

function focusFunction() {
    document.querySelectorAll(".formError").innerHTML = " "
    console.log("its focus")
}

function onblurName() {
    fullName = fname.value;
    if (fullName.length === 0) {
        document.querySelector("#nameError").innerHTML = "name cant be blank"
        console.log( "name cant be blank")
        // alert("name cant be blank")
    }
}

function getName () {
    onblurName();  
    console.log(fullName)
    let regExp =(/^[A-Za-z\s]+$/)

     if (fullName.match(regExp)) {
         nameIsValid = true
        localStorage.setItem("name", JSON.stringify(fullName))
        console.log("correct")
        fname.value = ""
    }
    else{
        document.querySelector("#nameError").innerHTML = "only letters allowed"
        console.log("only letters allowed")
    }
}

function onblurUsername() {
    userName = user.value;
    if (userName.length === 0) {
        document.querySelector("#usernameError").innerHTML = "username cant be blank"
        console.log( "username cant be blank")
        // alert("name cant be blank")
    }
}

function getUsername() {
    onblurUsername();
    console.log(userName)
    let regexp =(/^[A-Za-z]+$/)
    if (userName.match(regexp)) {
        userIsValid = true
        localStorage.setItem("username", JSON.stringify(userName))
        console.log("correct")
    }
    else{
        document.querySelector("#usernameError").innerHTML = "only letters allowed"
        console.log("only letters allowed")
    }
    user.value = ""
}

function onblurPwd() {
    paswd = pwd.value;
    if (paswd.length === 0) {
        document.querySelector("#pwdError").innerHTML = "password cant be blank"
        console.log( "password cant be blank")
        // alert("name cant be blank")
    }
}

function getPwd() {
    onblurPwd();
    let regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (paswd.match(regexp)) {
        pwdIsvalid = true
        localStorage.setItem("password", JSON.stringify(paswd))
        console.log("correct")
        pwd.value = " "
    }
    else{
            document.querySelector("#pwdError").innerHTML = "6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter"
        console.log("6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter")
    }
    
}

function activity () {
    let funThings = funact.value;
    // if (funThings.length === 0) {
    //     document.querySelector("#activityError").innerHTML = "at least 3 activities"
    //     console.log( "password cant be blank")
    //     // alert("name cant be blank")
    // }
    // console.log(funThings.split(','))
    allFunAct.push(funThings);
    let actStr = allFunAct.toString().split(",")
    console.log(actStr)

    if (actStr.length < 3){
        document.querySelector("#activityError").innerHTML = "at least 3 activities"
        console.log( "password cant be blank")
    }
    else {
    activityIsValid = true;
    localStorage.setItem("activities", JSON.stringify(actStr));
    console.log(allFunAct);
    funact.value = " ";
    // funThings = " ";
}
}

function getActivity () {
    let actArr = [];
    let activity = localStorage.getItem("activities");
    if (activity === null) {
        actArr = []
    }
    else {
        actArr = JSON.parse(activity)
        // console.log(funObj)
        // console.log(funObj.toString().split(","))
    }
    return actArr
}

function regFunction() {
   
    // console.log("reg function is working")
    // let funThings = funact.value;
    // // console.log(funThings.split(','))
    // allFunAct.push(funThings);
    // let actStr = allFunAct.toString().split(",")
    // localStorage.setItem("activities", JSON.stringify(actStr));
    // console.log(allFunAct);
    // funact.value = " ";
    // funThings = " ";

    // let inputDetails = document.querySelectorAll(".formInput").value
    // if (inputDetails.length === 0){
    //     console.log("all input f")
    //     reg.disabled = true
    // }
    // else{
    //     reg.disabled = false
    //     getName();  
    // }
    getUsername();
    getName();
    // getUsername();
    getPwd();
    activity();

    if (nameIsValid && userIsValid && pwdIsvalid && activityIsValid){
        console.log("reg is fine")
        return true
    }
    // if (newer) {
    //     document.querySelector("#dis1").style.display = "none";
    // }
    // else{

    // }

}

function showAllActivity() {
    const actArr = getActivity()
    let html = "";
    // let actStr = actArr.toString().split(",");
    actArr.forEach(function (element, index) {
        html += `
           <li role="presentation" class="divider">${element}</li>
           <button id="${index}" onclick="delEachActivity(${index})" class="btn">Delete Note</button>
        `
        console.log(index)
    });
    let list = document.createElement("ul");
    list.innerHTML = html;
    // console.log(list)
    if (actArr.length != 0) {
        // console.log(funStr.length)
        document.getElementById("activity").innerHTML = "";
        document.getElementById("activity").appendChild(list);
        // console.log(document.getElementById("activity").appendChild(list))
    }
    else{
        allActivities.innerHTML = `click on add button to add some activities`;
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
    console.log(actArr)
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
    if (addFun.textContent = "Enter"){
        addFun.textContent = "Add";
        const actArr = getActivity();
    // let text = document.getElementById("addFunActivities");
    let textValue = text.value;
    console.log(textValue);
    if(textValue != "") {
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

function dayOne() {
    const actArr = getActivity()
    console.log(actArr)
    let activity1 = actArr[Math.floor(Math.random()*actArr.length)];
    console.log(activity1);
}

function dayTwo() {
    const actArr = getActivity()
    let activity1 = actArr[Math.floor(Math.random()*actArr.length)];
    console.log(activity1);

    var idx = actArr.indexOf(activity1);
    console.log(idx);
    actArr.splice(idx, 1);
    console.log(actArr);

    let activity2 = actArr[Math.floor(Math.random()*actArr.length)];
    console.log(activity2);

    console.log(activity1 + " " + activity2);
}

function dayThree() {
    const actArr = getActivity()
    let activity3 = actArr[Math.floor(Math.random()*actArr.length)];
    console.log(activity3);

    let idx2 = actArr.indexOf(activity3);
    console.log(idx2);

    actArr.splice(idx2, 1);
    console.log(actArr);

    let activity1 = actArr[Math.floor(Math.random()*actArr.length)];
    console.log(activity1);

    var idx = actArr.indexOf(activity1);
    console.log(idx);
    actArr.splice(idx, 1);
    console.log(actArr);

    let activity2 = actArr[Math.floor(Math.random()*actArr.length)];
    console.log(activity2);
    console.log(activity3 + " " + activity1 + " " + activity2);
}

function newScheduleFn() {
    let allSchedule = document.querySelector("#schedule")
    if ( isChecked1.checked && isChecked2.checked === false && isChecked3.checked == false ){
        let oneDAy = dayOne();
        allSchedule.textContent = oneDAy
        document.getElementById("#funDay").style.display = "none"
    }
    else if (isChecked1.checked === false && isChecked2.checked && isChecked3.checked === false ){
        dayOne();
    }
    else if (isChecked1.checked === false && isChecked2.checked === false && isChecked3.checked){
        dayOne();
    }
    else if (isChecked1.checked && isChecked2.checked && isChecked3.checked === false){ 
        dayTwo();
    }
    else if (isChecked1.checked && isChecked2.checked === false && isChecked3.checked) { 
        dayTwo();
     }
    else if (isChecked1.checked === false && isChecked2.checked && isChecked3.checked) { 
        dayTwo();
    }
    else if(isChecked1.checked && isChecked2.checked && isChecked3.checked){
        dayThree();
    }
    else{
       console.log('check a box please')
    }
}
    