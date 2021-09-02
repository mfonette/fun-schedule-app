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
let activityDrop = document.querySelector("#activityDropDown");



// onclick, the input from funact is gotten and then pushed to allFunAct array
reg.addEventListener("click", regFunction);
newSchedule.addEventListener("click", newScheduleFunction);
activityDrop.addEventListener("click", activityDropFunction());

activityDropFunction() {
    localStorage.getItem("funacivities");
}

// if any input field is empty, regFunction doesnt go through

// Add users fun activities to local storage
localStorage.setItem("funactivities", JSON.stringify(allFunAct));

function addMoreFunAct() {
    let moreFunAct = localStorage.getItem("")

}

function regFunction() {
    console.log("reg function is working")
    let funThings = funact.value
    // console.log(funThings.split(','))
    allFunAct.push(funThings)
    // funThings.toString().forEach(funThing => {
    //     // localStorage.setItem("allFun", funThing);
    //     console.log(funThing)
    // });
    console.log(allFunAct)
    funact.value = " ";
    // funThings = " ";
}

function oneDay() {
    let stringFun = allFunAct.toString().split(',')

    let schedule1 = stringFun[Math.floor(Math.random()*stringFun.length)]
    console.log(schedule1)
}

function twoDays() {
    let stringFun = allFunAct.toString().split(',')

    let schedule1 = stringFun[Math.floor(Math.random()*stringFun.length)]
    console.log(schedule1)

    var idx = stringFun.indexOf(schedule1)
    console.log(idx)

    stringFun.splice(idx, 1);
    console.log(stringFun)

    let schedule2 = stringFun[Math.floor(Math.random()*stringFun.length)]
    console.log(schedule2)

    // if (schedule2 != schedule1){
     console.log(schedule1 + " " + schedule2)
    // }
    // else{
    //     console.log('sths wrong')
    // }
    // console.log(allFunAct.toString().split(','))
    // console.log(allFunAct.toString().split(',').length)
}

function threeDays() {
    let stringFun = allFunAct.toString().split(',')

    let schedule3 = stringFun[Math.floor(Math.random()*stringFun.length)]
    console.log(schedule3)

    let idx2 = stringFun.indexOf(schedule3)
    console.log(idx2)

    stringFun.splice(idx2, 1);
    console.log(stringFun)

    let schedule1 = stringFun[Math.floor(Math.random()*stringFun.length)]
    console.log(schedule1)

    var idx = stringFun.indexOf(schedule1)
    console.log(idx)

    stringFun.splice(idx, 1);
    console.log(stringFun)

    let schedule2 = stringFun[Math.floor(Math.random()*stringFun.length)]
    console.log(schedule2)


    console.log(schedule3 + schedule1 + schedule2)
}

function newScheduleFunction() {
    if ( isChecked1.checked && isChecked2.checked == false && isChecked3.checked == false ){
        oneDay();
    }
    else if (isChecked1.checked== false && isChecked2.checked && isChecked3.checked== false ){
        oneDay();
    }
    else if (isChecked1.checked== false && isChecked2.checked == false && isChecked3.checked){
        oneDay();
    }
    else if (isChecked1.checked && isChecked2.checked && isChecked3.checked == false){ 
        twoDays();
    }
    else if (isChecked1.checked && isChecked2.checked== false && isChecked3.checked) { 
        twoDays();
     }
    else if (isChecked1.checked== false && isChecked2.checked && isChecked3.checked) { 
        twoDays();
    }
    else if(isChecked1.checked && isChecked2.checked && isChecked3.checked){
        threeDays();
    }
    else{
       console.log('check a box please')
    }
}
    