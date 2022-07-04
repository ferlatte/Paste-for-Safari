window.onload = function() {
  const preventDefault = e => e.preventDefault();
  const listener = document.getElementById("listener");

  listener.addEventListener("copy", preventDefault, false);
  listener.addEventListener("cut", preventDefault, false);
  listener.addEventListener("paste", preventDefault, false);
};

