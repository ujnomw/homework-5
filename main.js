var dragElement = document.body.getElementsByClassName('dragElement')[0];

dragElement.onmousedown = function(e) {
  var coords = getCoords(dragElement);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;
  dragElement.style.position = 'absolute';
  document.body.appendChild(dragElement);
  dragElement.style.zIndex = 1000;
  moveAt(e);
  function moveAt(e) {
    dragElement.style.left = e.pageX - shiftX + 'px';
    dragElement.style.top = e.pageY - shiftY + 'px';
  }
  document.onmousemove = function(e) {
    moveAt(e);
  }

dragElement.onmouseup = function() {
  document.onmousemove = null;
  dragElement.onmouseup = null;
};
}
dragElement.ondragstart = function() {
  return false;
};
function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}
