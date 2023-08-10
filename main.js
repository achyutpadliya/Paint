canvas = document.getElementById("mc")
ctx = canvas.getContext("2d");

var width = screen.width;
n_w = screen.width - 70;
n_h = screen.height - 300;

if (width < 992) {
    document.getElementById("mc").width = n_w;
    document.getElementById("mc").height = n_h;
    document.body.style.overflow = "hidden";
}

var mouseEvent = "";
color = "black"

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    mouseEvent = "mouseDown"
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {

    mouseEvent = "mouseLeave"
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {

    mouseEvent = "mouseUp"
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    currenet_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    currenet_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        ctx.moveTo(last_postion_of_x, last_postion_of_y);
        ctx.lineTo(currenet_position_of_mouse_x, currenet_position_of_mouse_y);
        ctx.stroke();
    }
    last_postion_of_x = currenet_position_of_mouse_x;
    last_postion_of_y = currenet_position_of_mouse_y;
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    last_postion_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    last_postion_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    ctx.moveTo(last_postion_of_touch_x, last_postion_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_postion_of_touch_x = current_position_of_touch_x;
    last_postion_of_touch_y = current_position_of_touch_y;
}

function clear(){
ctx.clearRect(0,0,canvas.width,canvas.height);
}