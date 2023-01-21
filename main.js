var mouseevent="empty";
var last_position_of_x,last_position_of_y;
color="black";
width_of_line=1;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
width_of_line=document.getElementById("width_of_line").value;
mouseevent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseevent="mouseup";

}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseevent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_positionof_mouse_x=e.clientX-canvas.offsetLeft;
    current_positionof_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseevent="mousedown")
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last position of X and Y coordinates = ")
        console.log("X= "+last_position_of_x+"  y= "+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("current position of x and y= ");
        console.log("x= "+current_positionof_mouse_x+" y= " +current_positionof_mouse_y);
        ctx.lineTo(current_positionof_mouse_x,current_positionof_mouse_y);
        ctx.stroke();

    }
    last_position_of_x=current_positionof_mouse_x;
    last_position_of_y=current_positionof_mouse_y;
}
function cleararea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}