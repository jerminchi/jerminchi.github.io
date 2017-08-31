var canvas = document.querySelector("canvas")

canvas.width = window.innerWidth

var c = canvas.getContext("2d")
c.fillRect(100, 100, 100, 100)
c.fillRect(300, 50, 100, 100)
c.fillRect(200, 0, 100, 100)


//line
c.beginPath()
c.moveTo(50, 300)
c.lineTo(300, 50)
c.lineTo(400, 5)
c.lineTo(500, 5)
c.lineTo(1000, 5)


c.stroke()