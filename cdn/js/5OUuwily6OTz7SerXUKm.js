function dd1show() {
  document.getElementById('dd1').style.display = 'block';
}
function dd2show() {
  document.getElementById('dd2').style.display = 'block';
}

function dd1_hideothers() {
  document.getElementById('dd2').style.display = 'none';
}
function dd2_hideothers() {
  document.getElementById('dd1').style.display = 'none';
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
