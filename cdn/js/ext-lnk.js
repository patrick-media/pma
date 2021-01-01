function link_ext(link_element) {
  return (link_element.host !== window.location.host);
}
var links = document.getElementByTagName('a');
for (var i = 0; i < links.length; i++) {
  if (link_ext(links[i])) {
    // !!!!! IN PROGRESS !!!!!
  }
}
