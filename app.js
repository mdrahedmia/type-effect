
const cursor = document.querySelector(".type");
const type = document.querySelector(".text");

const typeArray = ["create!", "design!", "creative!"];

const typingDelay = 200;
const eraseDelay = 100;
const newTextDelay = 200;
let textIndex = 0;
let arrayIndex = 0;
let charIndex = 0;




document.addEventListener("DOMContentLoaded", function() {
  setTimeout(typing, 2000)
});

function typing() {
  if (charIndex < typeArray[arrayIndex].length) {
    type.innerHTML += typeArray[arrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(() => {
      typing();
    }, typingDelay);
  }
  else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    type.innerHTML = typeArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, eraseDelay);
  }
  else {
    arrayIndex++;
    if (arrayIndex >= typeArray.length) {
      arrayIndex = 0;
    }
    setTimeout(() => {
      typing();

    }, newTextDelay+1100);
  }
}