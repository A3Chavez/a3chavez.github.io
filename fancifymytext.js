alert("Hello, world!")

function bigger() {
    alert("Font Size has been changed to 24 pt");
    var words = document.getElementById("words");
    words.style.fontSize="24pt";
}

function fancy() {
    var check = document.getElementById("fancy");
    var words = document.getElementById("words");
    if(check.checked) {
        alert("You have selected FancyShmancy");
        words.style.fontWeight = "bold";
        words.style.color = "blue";
        words.style.textDecoration = "underline blink";
    } else {
        alert("You have selected BoringBetty")
        words.style.fontWeight = "normal";
        words.style.color = "black";
        words.style.textDecoration = "none";
    }
}

function moo() {
    var words = document.getElementById("words");
    var per = words.value.split(".");
    words.value = per.join("-Moo.");
}