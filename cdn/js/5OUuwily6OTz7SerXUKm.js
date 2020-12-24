var dd1vis = 0;
var dd2vis = 0;
function dd1show() {
  dd1vis = 1;
  if (dd2vis == 1) {
    document.getElementById('dd2').style.display = 'none';
  }
  document.getElementById('dd1').style.display = 'block';
}
function dd2show() {
  dd2vis = 1;
  if (dd1vis == 1) {
    document.getElementById('dd1').style.display = 'none';
  }
  document.getElementById('dd2').style.display = 'block';
}
function dd_hideall() {
  document.getElementById('dd1').style.display = 'none';
  document.getElementById('dd2').style.display = 'none';
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
