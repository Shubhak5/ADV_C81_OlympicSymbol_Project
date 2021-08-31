canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

//draw rectangle
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 4;
ctx.rect(160, 150, 450, 230);
ctx.stroke();

//Draw first circle
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 4;
ctx.arc(250, 250, 50, 0, 2 * Math.PI);
ctx.stroke();

//Draw Second circle
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.arc(370, 250, 50, 0, 2 * Math.PI);
ctx.stroke();

//Draw third circle
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 4;
ctx.arc(490, 250, 50, 0, 2 * Math.PI);
ctx.stroke();

//Draw Fourth circle
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 4;
ctx.arc(300, 300, 50, 0, 2 * Math.PI);
ctx.stroke();

//Draw Fifth circle
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 4;
ctx.arc(430, 300, 50, 0, 2 * Math.PI);
ctx.stroke();