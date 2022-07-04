const browserDefault = function(e) {
    e.stopImmediatePropagation();
    return true;
}

document.addEventListener("copy", browserDefault, true);
document.addEventListener("cut", browserDefault, true);
document.addEventListener("paste", browserDefault, true);

console.log("Paste enabled.");
