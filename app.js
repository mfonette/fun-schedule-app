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



// onclick, the input from funact is gotten and then pushed to allFunAct array
reg.addEventListener("click", regFunction);
newSchedule.addEventListener("click", newScheduleFunction);

// if any input field is empty, regFunction doesnt go through

function regFunction() {
    console.log("reg function is working")
    let funThings = funact.value
    console.log(funThings)
    allFunAct.push(funThings)
    // funThings.toString().forEach(funThing => {
    //     // localStorage.setItem("allFun", funThing);
    //     console.log(funThing)
    // });
    console.log(allFunAct)
    funact.value = " ";
    // funThings = " ";
}

function newScheduleFunction() {
    if ( isChecked1.checked && isChecked2.checked == false && isChecked3.checked == false ){
        console.log('friday only')
        // let schedule = allFunAct[Math.floor(Math.random()*allFunAct.length)]
        console.log(allFunAct.length)
        // console.log(schedule);
    }
    else if (isChecked1.checked== false && isChecked2.checked && isChecked3.checked== false ){
        console.log("saturday only")
    }
    else if (isChecked1.checked== false && isChecked2.checked == false && isChecked3.checked){
        console.log("sunday only")
    }
    else if (isChecked1.checked && isChecked2.checked && isChecked3.checked == false){  console.log('friday and saturday',)}
    else if (isChecked1.checked && isChecked2.checked== false && isChecked3.checked) { console.log('Get first: ', navbar[0].textContent,navbar[2].textContent)}
    else if (isChecked1.checked== false && isChecked2.checked && isChecked3.checked) { console.log('Get first: ', navbar[1].textContent,navbar[2].textContent)}
    else if(isChecked1.checked && isChecked2.checked && isChecked3.checked){
        console.log('Get first: ', navbar[0].textContent, navbar[1].textContent, navbar[2].textContent)
    }
    else{
       console.log('check a box please')
    }

  
}