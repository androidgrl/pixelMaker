// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(e) {
  const pixelCanvas = document.getElementById('pixelCanvas')
  pixelCanvas.innerHTML = ''
  const height = parseInt(sizePicker.height.value)
  const width = parseInt(sizePicker.width.value)

  for (let y = 0; y < height; y++) {
    let row = document.createElement('tr')
    row.setAttribute('id', `y${y}`)
    pixelCanvas.appendChild(row)
    row = document.getElementById(`y${y}`)

    for (let x = 0; x < width; x++) {
      let cell = document.createElement('td')
      row.appendChild(cell)
    }
  }

  pixelCanvas.addEventListener('click', function(e) {
    let cell = e.target
    let color = document.getElementById('colorPicker').value
    cell.style.backgroundColor = color
  })
  e.preventDefault()
}

const sizePicker = document.getElementById('sizePicker');
sizePicker.addEventListener('submit', makeGrid);
