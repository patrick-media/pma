var dd1 = document.getElementById('dd1');
var dd2 = document.getElementById('dd2');
function dd1show() {
  dd1.classList.add('show');
}
function dd2show() {
  dd2.classList.add('show');
}

function dd1_hideothers() {
  dd2.classList.remove('show');
}
function dd2_hideothers() {
  dd1.classList.remove('show');
}
/*
var dd1 = document.getElementById('dd1');
var dd2 = document.getElementById('dd2');
document.addEventListener('click', function(event) {
  var clickInside_dd1 = dd1.contains(event.target);
  if (!clickInside_dd1) {
    document.getElementById('dd1').classList.add('show');
  }
  var clickInside_dd2 = dd2.contains(event.target);
  if (!clickInside_dd2) {
    document.getElementById('dd2').classList.add('show');
  }
});
*/
