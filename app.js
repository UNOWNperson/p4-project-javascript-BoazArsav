const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

//alles voor de speler
class Player {
    constructor() {

        
        this.velocity = {
            x: 0,
            y: 0
        }

        //spelermodel inladen en instellingen van spelermodel
        const image = new Image()
        image.src = './img/spaceship.png'
        image.onload = () => {
            const scale = 0.15
            this.image = image
            this.width = image.width * scale
            this.heigth = image.height * scale
            //hiermee bepaal je de positie van de speler op spawnpoint
            this.position = {
                x: canvas.width / 2 - this.width / 2,
                y: canvas.height - this.heigth - 20
            }
        }


    }

    draw() {
        // c.fillStyle = 'red'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        if (this.image)
        c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.heigth)
    }
}

const player = new Player()
player.draw()

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.draw()
}
animate()