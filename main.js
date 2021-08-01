var c = document.getElementById("myCanvas");
var mouseEvent = "empty"; 
var last_position_of_x, last_position_of_y;
ctx = c.getContext("2d");


 color = "black";
 widthofline = "2";


 c.addEventListener("mousedown",my_mousedown);

 function my_mousedown(e)
 {

    color = document.getElementById("color").value;
    radius = document.getElementById("radius").value;
    widthofline = document.getElementById("widthofline").value;

     mouseEvent = "mouseDown";
 }



 c.addEventListener("mouseleave",my_mouseleave);

 function my_mouseleave(e)
 {
     mouseEvent = "mouseleave";
 }



 c.addEventListener("mouseup",my_mouseup);

 function my_mouseup(e)
 {
     mouseEvent = "mouseup";
 }


 c.addEventListener("mousemove", my_mousemove);
 function  my_mousemove(e)
 {
current_position_of_mouse_x = e.clientX - c.offsetLeft;
current_position_of_mouse_y = e.clientY - c.offsetTop;



if (mouseEvent == "mouseDown")
{
   ctx.beginPath() ;
   ctx.strokeStyle = color;
   ctx.lineWidth = widthofline;

 //  ctx.moveTo(last_position_of_x,last_position_of_y);
 //  ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
 ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI);
   ctx.stroke();
}

last_position_of_x = current_position_of_mouse_x;
last_position_of_y = current_position_of_mouse_y;
 }

 







