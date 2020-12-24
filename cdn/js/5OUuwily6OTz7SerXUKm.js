function dd1show() {
  document.getElementById('dd1').classList.add('show');
}
var dd1 = document.getElementById('dd1');
document.addEventListener('click', function(event)) {
  var clickInside = dd1.contains(event.target);
  if (!clickInside) {
    document.getElementById('dd1').classList.remove('show');
  }
}
