const slider = document.querySelector("[data-slider-number]");
const digitDisplay = document.getElementById("digitDisplay");
const generateButton = document.querySelector("[data-generate-results]");
const resultParagraph = document.querySelector("[data-result]");
const copyButton = document.getElementById("copyButton");
const toast = document.querySelector("[data-toast]");

slider.addEventListener("input", function () {
  digitDisplay.textContent = slider.value;
});

function generateRandomNumber(digits) {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  const numberString = array.slice(0, digits).join("");

  return numberString;
}

generateButton.addEventListener("click", function () {
  const digits = parseInt(slider.value, 10);
  const randomNumber = generateRandomNumber(digits);
  resultParagraph.textContent = randomNumber;
});

copyButton.addEventListener("click", function () {
  const textToCopy = resultParagraph.textContent;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      showToast();
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
});

function showToast() {
    toast.show();
    setTimeout(() => {
        toast.close();
    }, 2000);
}