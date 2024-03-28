let bodyWrapper = document.getElementById("body-wrapper");
let prevMouse = document.getElementById("prev-mouse-effect");
let nextMouse = document.getElementById("next-mouse-effect");
let prevX = 0;
let prevY = 0;
let nextX = 0;
let nextY = 0;

bodyWrapper.addEventListener("mousemove", (e) => {
    nextX = e.pageX;
    nextY = e.pageY;
    nextMouse.style.left = nextX + "px";
    nextMouse.style.top = nextY + "px";
    
    //insert rdm dots
    // for(let x = 0 ; x < nextX; x += 5) {
    //     for(let y = 0; y < nextY; y += 5) {
    //         console.log("x and y", x , y)
    //     }
    //     // let absBoxes = document.createElement("div");
    //     // absBoxes.classList.add("abs");

    // }

    prevX = e.pageX;
    prevY = e.pageY;
    prevMouse.style.left = nextX + "px";
    prevMouse.style.top = nextY + "px";
    // setInterval(() => {
    //     prevX = e.pageX;
    //     prevY = e.pageY;
    //     prevMouse.style.left = nextX + "px";
    //     prevMouse.style.top = nextY + "px";
    //     console.log("came here");
    // }, 3000)
    // console.log("hihi", xVal , yVal)
})

let testingWrapper = document.getElementById("testing-wrapper");
let defbox = document.getElementById("def-box");
let pX = 0;
let pY = 0;
testingWrapper.addEventListener("mousemove", (e) => {
    var to_append = document.getElementsByClassName('loader-container')[0];
	var all = document.getElementsByClassName('loader-container');

	var parent_div = document.createElement('div');
	parent_div.className = "loader-container";
	var inner_div = document.createElement('div');
	inner_div.className = "loader";
	parent_div.appendChild(inner_div)
	var d = testingWrapper.appendChild(parent_div);

    parent_div.style.left = (e.clientX - 10)+'px';
	parent_div.style.top = (e.clientY -10)+'px';
    defbox.style.left = (e.clientX - 10)+'px';
	defbox.style.top = (e.clientY -10)+'px';

    if(pX < e.clientX) {
        defbox.style.setProperty("--w", (e.clientX - pX)+ "px");
        pX = e.clientX;
    }

	// parent_div.style.left = (e.clientX - 50)+'px';
	// parent_div.style.top = (e.clientY - 50)+'px';
    inner_div.onanimationend = () => {
        testingWrapper.removeChild(parent_div)
    }
	if(document.getElementsByClassName('loader-container').length > 20) {
        // while (testingWrapper.firstChild) {
        //     console.log(testingWrapper.firstChild)
        //     // let x = testingWrapper.firstChild.style.left;
        //     // defbox
        //     testingWrapper.removeChild(testingWrapper.firstChild);
        // }
        // inner_div.onanimationend = () => {
            testingWrapper.removeChild(to_append)
        // }
	}
})

// let secondBodyWrapper = document.getElementById("second");
// let secprevMouse = document.getElementById("sec-prev-mouse-effect");
// let secnextMouse = document.getElementById("sec-next-mouse-effect");
// let secprevX = 0;
// let secprevY = 0;
// let secnextX = 0;
// let secnextY = 0;

// secondBodyWrapper.addEventListener("mousemove", (e) => {
//     secnextX = e.pageX;
//     secnextY = e.pageY;
//     let test = secnextX - secprevX;
//     // secnextMouse.style.left = secnextX + "px";
//     secnextMouse.style.top = secnextY + "px";
//     secnextMouse.style.width = (test) + "px";
//     secnextMouse.style.left = test + "px";
//     console.log(test);
//     // secprevX = e.pageX;
//     // secprevY = e.pageY;
//     // secprevMouse.style.left = secnextX + "px";
//     // secprevMouse.style.top = secnextY + "px";
//     setInterval(() => {
//         secprevX = e.pageX;
//         secprevY = e.pageY;
//         secprevMouse.style.left = secnextX + "px";
//         secprevMouse.style.top = secnextY + "px";
//         console.log("came here");
//     }, 3000)
//     // console.log("hihi", xVal , yVal)
// })