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
// let delBtn = document.getElementById("delAct");



// onclick, the input from funact is gotten and then pushed to allFunAct array
reg.addEventListener("click", regFunction);
newSchedule.addEventListener("click", newScheduleFn);
allActivities.addEventListener("click", showAllActivity);
addFun.addEventListener("click", addActivity);
// delBtn.addEventListener("click", delEachActivity)


// addFun.addEventListener("click", showAddedActivity);

// if any input field is empty, regFunction doesnt go through

// Add users fun activities to local storage
// localStorage.setItem("funactivities", JSON.stringify(allFunAct));
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
    console.log("reg function is working")
    let funThings = funact.value;
    // console.log(funThings.split(','))
    allFunAct.push(funThings);
    localStorage.setItem("activities", JSON.stringify(allFunAct));
    console.log(allFunAct);
    funact.value = " ";
    // funThings = " ";
}

function showAllActivity() {
    const actArr = getActivity()
    let html = "";
    let actStr = actArr.toString().split(",");
    actStr.forEach(function (element, index) {
        html += `
           <li role="presentation" class="divider">${element}</li>
           <button id="${index}" onclick="delEachActivity(${index})" class="btn">Delete Note</button>
        `
        console.log(index)
    });
    let list = document.createElement("ul");
    list.innerHTML = html;
    // console.log(list)
    if (actStr.length != 0) {
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
    console.log(actArr);
    // var idx = stringFun.indexOf(activity1);
    // console.log(idx);
    // actArr.splice(index, 1);
    const filteredArr = actArr.filter((item, ind) => ind!== index)
    
    // funObj.toString().remove(index)
    console.log(typeof index, index);
    console.log(actArr);
    localStorage.setItem("activities", JSON.stringify(filteredArr));
    showAllActivity();
}
// showAllActivity()
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
    let stringFun = allFunAct.toString().split(',');

    let activity1 = stringFun[Math.floor(Math.random()*stringFun.length)];
    console.log(activity1);
}

function dayTwo() {
    let stringFun = allFunAct.toString().split(',');

    let activity1 = stringFun[Math.floor(Math.random()*stringFun.length)];
    console.log(schedule1);

    var idx = stringFun.indexOf(activity1);
    console.log(idx);

    stringFun.splice(idx, 1);
    console.log(stringFun);

    let activity2 = stringFun[Math.floor(Math.random()*stringFun.length)];
    console.log(activity2);

    // if (schedule2 != schedule1){
     console.log(activity1 + " " + activity2);
    // }
    // else{
    //     console.log('sths wrong')
    // }
    // console.log(allFunAct.toString().split(','))
    // console.log(allFunAct.toString().split(',').length)
}

function dayThree() {
    let stringFun = allFunAct.toString().split(',');

    let activity3 = stringFun[Math.floor(Math.random()*stringFun.length)];
    console.log(activity3);

    let idx2 = stringFun.indexOf(activity3);
    console.log(idx2);

    stringFun.splice(idx2, 1);
    console.log(stringFun);

    let activity1 = stringFun[Math.floor(Math.random()*stringFun.length)];
    console.log(activity1);

    let idx = stringFun.indexOf(schedule1);
    console.log(idx);

    stringFun.splice(idx, 1);
    console.log(stringFun);

    let activity2 = stringFun[Math.floor(Math.random()*stringFun.length)];
    console.log(activity2);


    console.log(activity3 + activity1 + activity2);
}

function newScheduleFn() {
    if ( isChecked1.checked && isChecked2.checked === false && isChecked3.checked == false ){
        dayOne();
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
    