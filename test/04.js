window.onload = function() {
  const preventDefault = e => e.preventDefault();
  const property = document.getElementById("property");

  property.oncopy = preventDefault;
  property.oncut = preventDefault;
  property.onpaste = preventDefault;
};

