const circleEl = document.getElementById('circle')

function doAnimation() {
  moveCircle(150, 150)
}

function moveCircle(x, y) {
  circleEl.style.left = x + 'px';
  circleEl.style.top = y + 'px';
}

function doAnimationWithCallback() {
  const cb = () => alert('Анимация закончилась')
  moveCircleWithCallback(200, 200, cb)
}

function moveCircleWithCallback(x, y, cb) {
  moveCircle(x, y)
  setTimeout(cb, 2000)
}

function zoomCircle(radius) {
  circleEl.style.width = radius * 2 + 'px'
  circleEl.style.height = radius * 2 + 'px'
}

function doAnimationZoom() {
  doAnimation()
  zoomCircle(100)
}

function doAnimationWithSequenceOfCallbacks() {
  doAnimation()

  setTimeout(() => {
    zoomCircle(100)

    setTimeout(() => {
      zoomCircle(50)
    }, 2000)

  }, 2000)
}

function doAnimationWithSequenceOfPromises() {
  new Promise((resolve) => resolve(doAnimation()))
  .then(() => setTimeout(() => zoomCircle(100), 2000))
  .then(() => setTimeout(() => zoomCircle(50), 4000))
}

function doAnimationWithSequenceOfPromisesWithDelay() {
  new Promise((resolve) => resolve(doAnimation()))
  .then(() => zoomCircle(100))
  .then(() => new Promise((resolve) => setTimeout(() => resolve(), 1000)))
  .then(() => zoomCircle(50))
}