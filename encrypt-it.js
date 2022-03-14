(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * Setting up listeners for the web page
   */
  function init() {
    let encryptBtn = document.getElementById("encrypt-it");
    encryptBtn.addEventListener("click", handleEncryptClick);

    let resetBtn = document.getElementById("reset");
    resetBtn.addEventListener("click", handleResetClick);

    let radioBtn1 = document.getElementById("radio-btn-1");
    radioBtn1.addEventListener("click", radioBtnFont.bind(this, 12));

    let radioBtn2 = document.getElementById("radio-btn-2");
    radioBtn2.addEventListener("click", radioBtnFont.bind(this, 24));

    let capsOn = document.getElementById("all-caps");
    capsOn.addEventListener("click", allCapsClick);
  }

  

  const handleEncryptClick = () => {
    console.log("Clicked encrypt button");
    var cipherType = document.querySelector('#cipher-type');
    var selCipherType = cipherType.options[cipherType.selectedIndex].value;
    let textField = document.getElementById("input-text");
    let results;
    if(selCipherType === "shift") {
      console.log(selCipherType);
      results = shiftCipher(textField);
    } else {
      console.log(selCipherType);
      results = randomizedCipher(textField);
    }
    document.getElementById("result").textContent = results;
  };

  const handleResetClick = () => {
    console.log("Clicked Reset button");
    let textField = document.getElementById("input-text");
    textField.value = "";
  };

  const radioBtnFont = (size) => {
    console.log("Font was changed");
    let textField = document.getElementById("input-text");
    textField.style.fontSize = `${size}pt`;
  };

  const allCapsClick = () => {
    console.log("All-Caps was clicked");
    let textField = document.getElementById("input-text");
    if (document.getElementById("all-caps").checked) {
      textField.style.textTransform = "uppercase";
    } else {
      textField.style.textTransform = "none";
    }
  };

  /**
   * Represents a Shift Cipher. Each letter is shifted
   * alphabetically ahead by 1 letter, and 'z' is shifted to 
   * 'a' (creating an alphabetical cycle).
   * @param {string} text - plain text
   * @returns {string} result - cipher text
   */
  function shiftCipher(text) {
    text = text.value.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < "a" || text[i] > "z") {
        result += text[i];
      } else if (text[i] == "z") {
        result += "a";
      } else {
        // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

  /**
   * Represents a Randomized Cipher.
   * @param {string} text - plain text
   * @returns {string} result - cipher text
   */
  function randomizedCipher(text) {
    text = text.value.toLowerCase();
    let result = "";
    let strLength = text.length;
    for(let i = 0; i < strLength; i++) {
      if(text[i] == "a" || text[i] == "e" || text[i] == "i" || text[i] == "o" || text[i] == "u") {
        let ch = text[i].charCodeAt(0)
        result += String.fromCharCode(Math.random() * 10 + 1 + ch);
      } else if (text[i] == "t") {
        result += "a";
      } else if (text[i] == "r") {
        result += "e";
      } else if (text[i] == "n") {
        result += "o";
      } else if (text[i] == "y") {
        result += "u";
      } else {
        result += text[i];
      }
    }
    return result;
  }
})();