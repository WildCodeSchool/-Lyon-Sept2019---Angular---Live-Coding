/**
 * Dot class that contains an unique index, a random color,
 * a random size (between 0 and 50px) and a random position (top and left)
 */
class Dot {
    constructor(index) {
        this.index = index;
        this.color = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
        //this.color = getRandomColor();
        this.size = randomNumber(50);
        this.top = randomNumber(window.innerHeight);
        this.left = randomNumber(window.innerWidth);
    }

    /**
     * Return the div html representation of a dot.
     * Set a unique id for the dot.
     */
    render() {
        return `
            <div id="dot-${this.index}"
                 class="dot"
                 style="background-color: ${this.color}; 
                        width: ${this.size}px; 
                        height: ${this.size}px;
                        top: ${this.top}px;
                        left: ${this.left}px";>
            </div>`;
    }
}

/**
 * Create a new dot and add it to the body html.
 * Remove the dot after some time and add another one.
 * @param {number} i unique index
 */
function addDot(i) {
    const dot = new Dot(i);
    // Add the dot in the body html
    document.body.innerHTML += dot.render();

    // Remove the dot after some time and add another one.
    setTimeout(() => {
        removeDot(i);
        addDot(i);
    }, randomNumber(5000))
}

/**
 * Remove the dot from the body html relative to the dot id.
 * @param {number} i unique index
 */
function removeDot(i) {
    const dotElt = document.getElementById(`dot-${i}`);
    dotElt.parentNode.removeChild(dotElt);
}

/**
 * Create between 0 and a hundred dots.
 */
function start() {
    for (let i = 0; i <= randomNumber(100); i++) {
        addDot(i);
    }
}

// Call the start function to launch the game
start();