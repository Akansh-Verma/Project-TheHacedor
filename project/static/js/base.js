const container = document.getElementById('container')
let isDragging = false
let mouseOffsetX = 0
let mouseOffsetY = 0

container.addEventListener('mousedown', (event) => {
  isDragging = true
  const iframeContainer = container.querySelector('.iframe-container')
  const iframe = container.querySelector('iframe')
  mouseOffsetX = event.clientX - iframe.offsetLeft
  mouseOffsetY = event.clientY - iframe.offsetTop
  iframeContainer.style.pointerEvents = 'none'
})

document.addEventListener('mouseup', (event) => {
  isDragging = false
  const iframeContainer = container.querySelector('.iframe-container')
  iframeContainer.style.pointerEvents = 'auto'
})

document.addEventListener('mousemove', (event) => {
  if (isDragging) {
    const iframe = container.querySelector('iframe')
    iframe.style.left = `${event.clientX - mouseOffsetX}px`
    iframe.style.top = `${event.clientY - mouseOffsetY}px`
  }
})
