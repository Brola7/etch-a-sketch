function createNew(size){
    const cont = document.createElement("div");
    const container = document.querySelector(".container");
    for(let i = 0; i < size; i++){
        let pixelRow = document.createElement("div");
        pixelRow.classList.toggle("pixelRow");
        for(let i = 0; i < size; i++){
            let pixel = document.createElement("div");
            pixel.classList.toggle("eachPixel");
            
            pixelRow.appendChild(pixel);
        }
        cont.appendChild(pixelRow);
    }
    cont.classList.toggle("cont");
    container.appendChild(cont);
}
createNew(16);
const allPixels = document.querySelectorAll(".eachPixel");
allPixels.forEach(eachPixel => {
    eachPixel.addEventListener("mouseover", () => {
        eachPixel.classList.remove("eachPixel");
        eachPixel.classList.add("eachPixelEvent");
    })
});
const clearBtn = document.querySelector(".clearButton");
clearBtn.addEventListener("click", () => {
    allPixels.forEach(eachPixel => {
        eachPixel.classList.remove("eachPixelEvent");
        eachPixel.classList.add("eachPixel");
    });
})


