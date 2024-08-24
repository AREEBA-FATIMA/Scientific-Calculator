var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');
var justCalculated = false;

for (let item of btn) {
    item.addEventListener('click', (e) => {
        let btntext = e.target.innerText;

        if (justCalculated) {
            screen.value = '';
            justCalculated = false;
        }

        if (btntext == '×') {
            btntext = '*';
        }
        
        if (btntext == '÷') {
            btntext = '/';
        }

        screen.value += btntext;
    });
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    let values = screen.value.split(',');
    screen.value = Math.pow(values[0], values[1]);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = Math.PI;
}

function fact() {
    let num = parseInt(screen.value);
    let f = 1;
    for (let i = 1; i <= num; i++) {
        f *= i;
    }
    screen.value = f;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}

document.querySelector('#eval').addEventListener('click', () => {
    screen.value = eval(screen.value);
    justCalculated = true;
});
