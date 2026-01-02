const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/roter-sand.jpg") {
    myImage.setAttribute("src", "images/old-office.jpg");
  } else {
    myImage.setAttribute("src", "images/roter-sand.jpg");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Hey du! Wie heißt du?");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hallo ${myName}, willkommen bei der Treibholzmanufaktur!`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hallo ${storedName}, willkommen bei der Treibholzmanufaktur!`;
}
myButton.addEventListener("click", () => {
  setUserName();
});