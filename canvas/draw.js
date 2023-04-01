let canvas = $("#canvas")[0];
let ctx = canvas.getContext("2d");
let pos = { x: 0, y: 0 };
let color = $('#color');
let clear = $('#clear');

let position = (e) => {
  pos.x = e.clientX - canvas.getBoundingClientRect().left;
  pos.y = e.clientY - canvas.getBoundingClientRect().top;
  console.log('x: ', pos.x, 'y: ', pos.y);
};



let draw = (e) => {
    if(e.buttons != 1 ) return;
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
  ctx.lineWidth = 3;
  // ctx.fillStyle = color.val();
  ctx.strokeStyle = color.val();
  ctx.lineJoin = "round";
  position(e);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
};

let canvasDraw = () => {
  $(canvas).on("mousedown", position);
  $(canvas).on("mousemove", draw);
};

$(clear).on('click',()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
})


canvasDraw();
