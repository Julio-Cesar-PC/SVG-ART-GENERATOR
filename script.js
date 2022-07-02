let botao1 = document.getElementById('btn1');
let botao2 = document.getElementById('btn2');
let coisa = document.querySelector('.coisa');
let SVGCONTENT = document.querySelector('.svg');

// SVGCONTENT.style.transition = 'all 1s'

PALLETAMONDRIAN = ['#f7352f', '#017bfc', '#fad000', 'black', 'white']
PALLETAMAZE = ['#8C0E03', '#0487D9', "#2493BF", '#033B3D', '#F21905', 'black', '#0D4A3A', '#2D5731', '#2D5731', '#526126']
WIDTH = [9, 12, 9, 7, 4, 10, 2, 5, 6, 4, 11, 3, 23, 4, 4, 2, 19, 3, 2, 9, 9, 2, 4, 3, 3, 6, 10, 3, 3, 2, 7, 2,
    1, 2, 5, 3, 3, 3, 6, 7, 3, 3, 14, 2, 2, 5, 3, 1, 1, 2, 20, 11, 4, 7, 4, 2, 24, 1, 15, 3, 1, 2, 3, 5,
    1, 3, 1, 2, 1, 12, 2, 1, 15, 1, 1, 2, 2, 1, 2, 4, 4, 5, 15, 3, 4, 2, 14, 6, 1, 1, 1, 1, 1, 12, 2, 6,
    1, 1, 2, 2]

botao1.addEventListener('click', () => {draw_mondrian(500,500,10)});
botao2.addEventListener('click', () => {draw_maze(50,500)})

function draw_mondrian(width, height, step) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    for(let y = 0; y < height; y += step) {
        let x=0;
        while (x < width) {
            let col = randomProperty(PALLETAMONDRIAN)
            let nums = randomProperty(WIDTH)
            let w = step * nums
            if (x + w >= width) {
                w = width - x
            }
            const rect = document.createElementNS("http://www.w3.org/2000/svg",
            "rect",);
            rect.setAttribute("class", "rectBackground")
            rect.setAttribute("x", x);
            rect.setAttribute("y", y);
            rect.setAttribute("width", w);
            rect.setAttribute("height", step);
            rect.setAttribute("fill", col);
            //rect.setAttribute("stroke", 'black')
            svg.appendChild(rect);
            x += w;
        }
    }
    console.log(SVGCONTENT.childElementCount)
    if (SVGCONTENT.childElementCount > 0) {
        SVGCONTENT.firstElementChild.remove();
    }
    SVGCONTENT.appendChild(svg)
}

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function draw_maze(num, height) {
    let width = height
    let step = Math.floor(height / num)
    let color = randomProperty(PALLETAMAZE)
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    for (let row = 0; row < height; row+=step) {
        for (let col = 0; col < width; col+=step) {
            const line = document.createElementNS("http://www.w3.org/2000/svg",
            "line",)
            if(choose([0, 1]) == 0) {
                line.setAttribute("class", "lineBackground")
                line.setAttribute("x1", col)
                line.setAttribute("y1", row)
                line.setAttribute("x2", col+step)
                line.setAttribute("y2", row+step)
                line.setAttribute("stroke", color)
                line.setAttribute("stroke-width", 5)
            } else {
                line.setAttribute("class", "lineBackground")
                line.setAttribute("x1", col+step)
                line.setAttribute("y1", row)
                line.setAttribute("x2", col)
                line.setAttribute("y2", row+step)
                line.setAttribute("stroke", color)
                line.setAttribute("stroke-width", 4)
            }
            svg.appendChild(line)
        }
    }
    console.log(SVGCONTENT.childElementCount)
    if (SVGCONTENT.childElementCount > 0) {
        SVGCONTENT.firstElementChild.remove();
    }
    SVGCONTENT.appendChild(svg)
}

function randomProperty(obj) {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};