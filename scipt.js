// ---------- TYPING EFFECT ----------

// Array of text phrases that will appear one by one
const textArray = ["Ishkaran", "an IT Student", "a Future Cybersecurity Engineer"];

// Select the element where the typing effect will appear
let typingElement = document.querySelector(".typing");

// Variables to track progress
let textIndex = 0;
let charIndex = 0;

// Function that types letters one by one
function type() {
    if (charIndex < textArray[textIndex].length) {
        typingElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // speed of typing
    } else {
        setTimeout(erase, 1000); // wait before erasing
    }
}

// Function that erases letters one by one
function erase() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); // speed of erasing
    } else {
        textIndex++;
        if (textIndex >= textArray.length) textIndex = 0; // loop back to first text
        setTimeout(type, 500);
    }
}

// Start the typing animation after the page loads
document.addEventListener("DOMContentLoaded", type);



// ---------- DARK MODE TOGGLE ----------

// Get the toggle button
const themeToggleBtn = document.getElementById("theme-toggle");

// When button is clicked, toggle dark mode class
themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Change button text depending on mode
    if (document.body.classList.contains("dark-mode")) {
        themeToggleBtn.textContent = "Switch to Light Mode";
    } else {
        themeToggleBtn.textContent = "Switch to Dark Mode";
    }
});
