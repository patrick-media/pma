function dd1show() {
  document.getElementById('dd1').classList.add('show');
}
function dd2show() {
  document.getElementById('dd2').classList.add('show');
}
var dd1 = document.getElementById('dd1');
var dd2 = document.getElementById('dd2');
document.addEventListener('click', function(event)) {
  var clickInside_dd1 = dd1.contains(event.target);
  if (!clickInside_dd1) {
    document.getElementById('dd1').classList.remove('show');
  }
  var clickInside_dd2 = dd2.contains(event.target);
  if (!clickInside_dd2) {
    document.getElementById('dd2').classList.remove('show');
  }
}

var dd1 = document.getElementById('dd1');
var dd2 = document.getElementById('dd2');
document.addEventListener('click', function(event) {
  var clickInside_dd1 = dd1.contains(event.target);
  if (!clickInside_dd1) {
    
  }
  var clickInside_dd2 = dd2.contains(event.target);
  if (!clickInside_dd2) {
    
  }
});
