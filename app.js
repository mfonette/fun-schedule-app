let fname = document.querySelector("#name");
let user = document.querySelector("#username");
let pwd = document.querySelector("#passwd");
let funact = document.querySelector("#funActivities");
let reg = document.querySelector("#register");
let newSchedule = document.querySelector("#newschedule");
// let dropdown = document.querySelector(".dropdown-menu");
let navbar = Array.from(document.querySelectorAll('#navbar>ul>li'))
let allFunAct = [];
let isChecked1 = document.querySelector(".checkbox1");
let isChecked2 = document.querySelector(".checkbox2");
let isChecked3 = document.querySelector(".checkbox3");
let allActivities= document.querySelector("#activityDrop");



// onclick, the input from funact is gotten and then pushed to allFunAct array
reg.addEventListener("click", regFunction);
newSchedule.addEventListener("click", newScheduleFunction);
allActivities.addEventListener("click", allActivityFunction);



// if any input field is empty, regFunction doesnt go through

// Add users fun activities to local storage
// localStorage.setItem("funactivities", JSON.stringify(allFunAct));

// function addMoreFunAct() {
//     let FunAct = localStorage.getItem("activities");
//     if (FunAct == null) {
//         moreFunActObj = []
//     }
//     else {
//         moreFunAct = JSON.parse()
//     }

// }

function regFunction() {
    console.log("reg function is working")
    let funThings = funact.value;
    // console.log(funThings.split(','))
    allFunAct.push(funThings);
    // funThings.toString().forEach(funThing => {
    //     // localStorage.setItem("allFun", funThing);
    //     console.log(funThing)
    // });
    localStorage.setItem("activities", JSON.stringify(allFunAct).split(','));
    console.log(allFunAct);
    funact.value = " ";
    // funThings = " ";
}

function allActivityFunction() {
    let fun = localStorage.getItem("activities");
    if (fun == null) {
        funObj = []
    }
    else {
        funObj = JSON.parse(fun)
        console.log(funObj)
    }
    let html = "";
    funObj.forEach(element => {
        html += `
        <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
           <li role="presentation" class="divider">${element}</li>
        </ul>
        `
    });
    if (funObj.length != 0) {
        console.log(funObj.length)
        allActivities.innerHTML = html
        console.log(allActivities)
    }
    else{
        allActivities.innerHTML = `click on add button to add some activities`
    }

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

function newScheduleFunction() {
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
    