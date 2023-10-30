// console.log("It's working !!!!");


// Both of these will select the h1 tag
// var h1 = document.querySelector("h1");
// var title = document.querySelector("#title");

// console.log(h1);
// console.log(title);


function changeToDarkMode(){
    console.log("changing to dark mode");
    // WE need to target the container element
    var containerElement = document.querySelector(".container")
    // show me the classes
    // console.log(containerElement.classList);
    // remove a class
    containerElement.classList.remove("light-mode")

    // add the dark mode class
    containerElement.classList.add("dark-mode")

}

function changeToLightMode(){
    console.log("changing to light mode");
    var containerElement = document.querySelector(".container")

    containerElement.classList.remove("dark-mode")
    containerElement.classList.add("light-mode")

}

function resize(){
    document.querySelector(".nav img").width = "150"

}
