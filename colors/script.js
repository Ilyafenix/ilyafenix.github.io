const colorsBlock = document.querySelectorAll(".colors__block");
const colorsHash = document.querySelectorAll(".colors__hash");
const reloadBtn = document.querySelector(".header__reload");
const copyAllBtn = document.querySelector(".header__copy");
const arreyLock = document.querySelectorAll(".colors__lock");
const copyBlock = document.querySelector(".copy-all");
const colorsValue = document.querySelectorAll(".colors__value");

let colorsArrey = [
    {
        color: "",
        contrastColor: "white",
        locked: false
    },
    {
        color: "",
        contrastColor: "white",
        locked: false
    },
    {
        color: "",
        contrastColor: "black",
        locked: false
    },
    {
        color: "",
        contrastColor: "white",
        locked: false
    },
    {
        color: "",
        contrastColor: "white",
        locked: false
    },
]


function checkURLHash() {
    let a = document.location.hash;

    if (a < 1) {
        return false
    } else {
        return true
    }
}

console.log(checkURLHash());

function replaceElementArrey(origArrey, chengingArrey, keyOrigArrey) {
    origArrey.forEach((element, item) => {
        element[`${keyOrigArrey}`] = chengingArrey[item];
    })
    console.log(colorsArrey);
}

function randomColor() {
    let a = "";
    const b = "0123456789abcdef";
    for (let i = 1; i < 7; i++) {
        let c = Math.random() * 16;
        c = Math.floor(c);
        a = a + b[c];
    }
    return a;
}

function randomColorArrey() {
    let a = [];
    for (let i = 1; i < 6; i++) {
        a.push(randomColor());
    };

    return a;
}

console.log(randomColorArrey());

if (checkURLHash()) {
    replaceElementArrey(colorsArrey, readURLHash(), "color");
    reloadTextColor(colorsBlock, colorsArrey);
} else {
    replaceElementArrey(colorsArrey, randomColorArrey(), "color");
    reloadTextColor(colorsBlock, colorsArrey);
    addURLHash(colorsValueArrey(colorsArrey, "color"), "-");
}

reloadBtn.addEventListener('click', () => {
    colorsArrey.forEach((element, item) => {
        if (!element.locked) {
            colorsArrey[item].color = randomColor();
        }
    })
    addURLHash(colorsValueArrey(colorsArrey, "color"), "-");
    updateColorsBlocks(colorsBlock, colorsArrey);
    reloadTextColor(colorsBlock, colorsArrey);
    updateColorsHash(colorsHash, colorsArrey);
})

colorsBlock.forEach((element, item) => {
    element.addEventListener('click', (e) => {
        if (e.target.classList.contains("colors__block")) {
            if (!colorsArrey[item].locked) {
                colorsArrey[item].color = randomColor();
                addURLHash(colorsValueArrey(colorsArrey, "color"), "-");
                updateColorsBlocks(colorsBlock, colorsArrey);
                reloadTextColor(colorsBlock, colorsArrey);
                updateColorsHash(colorsHash, colorsArrey);
            }
        }
    });
});

arreyLock.forEach((element, item) => {
    element.addEventListener('click', () => {
        if (colorsArrey[item].locked) {
            colorsArrey[item].locked = false;
        } else {
            colorsArrey[item].locked = true; 
        }
        updatelockBlocks(arreyLock, colorsArrey);
    })
});

colorsBlock.forEach((element,item) => {
    element.addEventListener('click', (e) => {
        console.log(e.target.classList);
    })
});

//window.location.hash = "123";
//document.location.hash;

//функция делает из массива строку с разделителями и записывает ее в URL
function addURLHash(arrey, separator) {
    let a;

    arrey.forEach((element, item) => {
        if (item < 1) {
            a = element;
        } else {
            a = a + separator + element;
        }
    });

    window.location.hash = a;
}

//addURLHash(colorsValueArrey(colorsArrey, "color"), "-");

//функция считывает хеш и разбивает его на элементы в массиве
function readURLHash() {
    let a = [];
    let b = document.location.hash.substring(1);

    a = b.split("-");

    return a;
}

//console.log(readURLHash());

// функция получающая из массива обьектов значения по ключу из каждого обьекта и записывает в массив
function colorsValueArrey(arrey, value) {
    let a =[]
    arrey.forEach(element => {
        a.push(element[`${value}`]);
    });
    return a;
}

//функция обновляет значения бэкграунда элементов
function updateColorsBlocks(arreyBlock, arreyObject) {
    const a = colorsValueArrey(arreyObject, "color");
    arreyBlock.forEach((element, item) => {
        element.style.backgroundColor = "#" + a[item];
    });
}
updateColorsBlocks(colorsBlock, colorsArrey);

//функция которая обновляет отоброжение залочености цвета
function updatelockBlocks(arreyLock, arreyObject) {
    arreyObject.forEach((element, item) => {
        if (element.locked) {
            arreyLock[item].querySelector(".colors__locked").classList.add("active");
            arreyLock[item].querySelector(".colors__unlocked").classList.remove("active");
        } else {
            arreyLock[item].querySelector(".colors__locked").classList.remove("active");
            arreyLock[item].querySelector(".colors__unlocked").classList.add("active");
        }
    });
}
updatelockBlocks(arreyLock, colorsArrey);

//функция обновляет значения цвета на странице
function updateColorsHash(arreyBlock, arreyObject) {
    const a = colorsValueArrey(arreyObject, "color");
    arreyBlock.forEach((element, item) => {
        console.log(element);
        element.innerHTML = "#" + a[item];
    });
}

updateColorsHash(colorsHash, colorsArrey);




// функция возвращает цвет которым должен быть написан текст на этом фоне
function brightColor(color) {
    const h = color[0] + color[1],
          s = color[2] + color[3],
          l = color[4] + color[5],
          r = parseInt(h, 16) / 255,
          g = parseInt(s, 16) / 255,
          b = parseInt(l,16) / 255;
    
    console.log(r,g,b);
    function comp(x) {
        if (x > 0.03928) {
            return Math.pow(((x + 0.055) / 1.055), 2.4);
        } else {
            return (x / 12.92);
        }
    }
    console.log(comp(r), comp(g), comp(b))
    const result = (0.2126 * comp(r)) + (0.7152 * comp(g)) + (0.0722 * comp(b));

    const contrast = (1 + 0.05) / (result + 0.05);

    if (contrast > 4) {
        return "white"
    } else {
        return "black"
    }
}

console.log(brightColor("ef4502"));

function updateContrastColor(obj) {
    obj.forEach(element => {
        element.contrastColor = brightColor(element.color);
    });
}

function reloadTextColor(arreyBlock, arreyObj) {
    updateContrastColor(arreyObj);
    arreyBlock.forEach((element, item) => {
        element.classList.remove("colors__block_white");
        if (arreyObj[item].contrastColor == "white") {
            element.classList.add("colors__block_white");
        }
    });
}

//копирование в буфер обмена

//Копировать в буфер обмена все цвета
copyAllBtn.addEventListener('click', () => {
    console.log("test");
    const stringHash = colorString(colorsValueArrey(colorsArrey, "color"), " ");
    console.log(stringHash);
    copyClipboard(stringHash);
});

colorsValue.forEach((element, item) => {
    element.addEventListener("click", () => {
        const hashElement = colorsArrey[item].color;
        console.log(element);
        copyClipboard(hashElement);
    });
});

function colorString(arrey, separator) {
    let a;

    arrey.forEach((element, item) => {
        if (item < 1) {
            a = element;
        } else {
            a = a + separator + element;
        }
    });

    return a;
}


function copyClipboard(input) {
    navigator.clipboard.writeText(input)
        .then(() => {
            console.log(`${input}`);
            copyBlock.classList.add("copy-all_active");
            setTimeout(() => {
                copyBlock.classList.remove("copy-all_active");
            }, 500);
            
        })
        .catch(err => {
            console.log('Something went wrong', err);
        });
}




