window.addEventListener("load", function onWindowLoad() {
    
    generatePalette(document.getElementById("palette"));
 
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
 
   
    context.lineCap = "round";
    context.lineWidth = 1;
 
    
    document.getElementById("clear").onclick = function clear() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
 
    
    canvas.onmousemove = function drawIfPressed (e) {
      let x = e.offsetX;
      let y = e.offsetY;
      let dx = e.movementX;
      let dy = e.movementY;
 
      if (e.buttons > 0) {
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x - dx, y - dy);
        context.stroke();
        context.closePath();
      }
    };
 
    function generatePalette(palette) {
      // генерируем палитру
      // в итоге 5**3 цветов = 125
      for (let r = 0, max = 4; r <= max; r++) {
        for (let g = 0; g <= max; g++) {
          for (let b = 0; b <= max; b++) {
            var paletteBlock = document.createElement('div');
            paletteBlock.className = 'button';
            paletteBlock.addEventListener('click', function changeColor(e) {
              context.strokeStyle = e.target.style.backgroundColor;
            });
 
            paletteBlock.style.backgroundColor = (
              'rgb(' + Math.round(r * 255 / max) + ", "
              + Math.round(g * 255 / max) + ", "
              + Math.round(b * 255 / max) + ")"
            );
 
            palette.appendChild(paletteBlock);
          }
        }
      }
    }

    // Кнопка размер холста

    let can = document.getElementById('canvas'); 

    click1.onclick = function(){
        let w = document.getElementById('width1').value; 
        can.setAttribute('width', w); 
        let h = document.getElementById('height1').value; 
        can.setAttribute('height', h); 
    };

    // Кнопка изменить ширину линии

    let brushSlider = document.getElementById("brushSlider"); 
    context.lineWidth = brushSlider.value;

    brushSlider.addEventListener("change", function () {
    context.lineWidth = brushSlider.value;
    });
})