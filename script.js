const container = document.querySelector(".container");
let cont = document.createElement("div");    

function createNew(size){
    for(let i = 0; i < size; i++){
        let pixelRow = document.createElement("div");
        pixelRow.classList.add("pixelRow");
        for(let i = 0; i < size; i++){
            let pixel = document.createElement("div");
            pixel.classList.add("eachPixel");
            pixelRow.appendChild(pixel);
        }
        cont.appendChild(pixelRow);
    }
    cont.classList.add("cont");
    container.appendChild(cont);
}
createNew(16);
let allPixels = document.querySelectorAll(".eachPixel");
allPixels.forEach(eachPixel => {
    eachPixel.addEventListener("mouseover", () => {
        eachPixel.classList.remove("eachPixel");
        eachPixel.classList.add("eachPixelEvent");
    })
});

allPixels = document.querySelectorAll(".eachPixel");
const changeBtn = document.querySelector(".changeButton");

changeBtn.addEventListener("click", () =>{
    container.removeChild(cont);
    cont = document.createElement("div");   
    createNew(prompt("Please enter size of grid"));
    allPixels = document.querySelectorAll(".eachPixel");
    allPixels.forEach(eachPixel => {
        eachPixel.addEventListener("mouseover", () => {
            eachPixel.classList.remove("eachPixel");
            eachPixel.classList.add("eachPixelEvent");
        })
    });
})

const clearBtn = document.querySelector(".clearButton");
clearBtn.addEventListener("click", () => {
    allPixels.forEach(eachPixel => {
        eachPixel.classList.remove("eachPixelEvent");
        eachPixel.classList.add("eachPixel");
    });
})
