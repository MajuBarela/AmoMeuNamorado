const fleeButton = document.getElementById('fleeButton');

document.addEventListener('mousemove', (e) => {
  const x = e.pageX - fleeButton.clientWidth / 2;
  const y = e.pageY - fleeButton.clientHeight / 2;
  fleeButton.style.left = x + 'px';
  fleeButton.style.top = y + 'px';
});