// //Set global variable that would contain the position, velocity and the html element "ball"
// var positionX = 20;
// var positionY = 0;
// var velocity = 100;
// var reverse = false;
// var ball = document.getElementById('ball');
//
// //write a function that can change the position of the html element "ball"
// function moveBall() {
//   // ball.style.left= 50 + 'px'
//   //
//   console.log(ball.style.left);
//
// counter= 0
//
//
//   // two x-axis coordinates
//   var Xmin = 0;
  // var Xmax = 300;
  //
  // // two y-axis coordinates
  // var Ymin = 0;
  // var Ymax = 300;
//
//   if (reverse) {
//     positionX = positionX + velocity;
//     ball.style.left = positionX + 'px';
//     positionY = positionY + velocity;
//     ball.style.top = positionY + 'px';
//   } else {
//     positionX = positionX - velocity;
//     ball.style.left = positionX + 'px';
//     positionY = positionY - velocity;
//     ball.style.top = positionY + 'px';
//   }
//
//   if (positionX > Xmax || positionX === Xmin || positionY > Ymax || positionY === Ymin)
// {reverse = !reverse;
//   }
//
//
// }
//
// setInterval(moveBall, 550000);
// //
// // /Set global variable that would contain the position, velocity and the html element "ball"
// var velocity = 100;
// var positionX = 0;
// var positionY = 0;
// var reverse = false;
// var ball = document.getElementById("ball");
// //write a function that can change the position of the html element "ball"
// function moveBall() {
//   // two fixed x-axis coordinates (you will use these variable in step 3)
//   var Xmin = 0;
//   var Xmax = 300;
//
//   var Ymin = 0;
//   var Ymax = 200;
//
//
//   //1st condition
//   if (reverse = !reverse){
//     positionX = positionX + velocity;
//     ball.style.left = positionX + "px";
//   }else{
//     positionX = positionX - velocity;
//     ball.style.left = positionX + "px";
//   };
//
//   //2nd condition- when x is at the
//   if (positionX > Xmax ||
//       positionX === Xmin ){
//     reverse = !reverse;
//   };
//
//   //3rd condition
//
//   if (reverse = !reverse){
//     positionY = positionY + velocity;
//     ball.style.top = positionY + "px";
//   }else{
//     positionY = positionY - velocity;
//     ball.style.top = positionY + "px";
//   };
//
//   //4th condition
//
//   if (positionY > Ymax ||
//       positionY === Ymin ){
//     reverse = !reverse;
//   };
//
//
// }
//2D ball movement function using arrow syntax
const movingBall = () => {
  //If the ball's x-axis position is less than the
  //   //left side limit, or the ball's x-axis is greater
  //   //than the right side limit, then
  if(positionX < limitX1 || positionX > limitX2){
    //if condition is met then, the number of pixels
    //that are changed for x-axis movement will be
    //multiplied by -1
    velocityX *= -1;
  }
  //  //If the ball's y-axis position is less than the
  //   //   //left side limit, or the ball's y-axis is greater
  //   //   //than the right side limit, then
  if(positionY < limitY1 || positionY > limitY2){
    //if condition is met then, the number of pixels
    //that are changed for y-axis movement will be
    //multiplied by -1
    velocityY *= -1;
  }
  //The x-axis position variable is changed by velocity
  positionX += velocityX;
  // The y-axis position variable is changed by velocity
  positionY += velocityY;
  //The ball's x-axis position variable is changed
  ball.style.left = positionX + 'px';
  //The ball's y-axis position variable is changed
  ball.style.top = positionY + 'px';
}
// This call the moveBall function every 100ms
//a timer for ball movement
setInterval(movingBall, 10);
//
// const randomColor = () => {
//   //Randomly generates an integer for the Red, blue, green color variable
//   var r = Math.floor(255*(Math.random()));
//   var b = Math.floor(255*(Math.random()));
//   var g = Math.floor(255*(Math.random()));
//   //combined color variables via concatenation
//   var color = 'rbg(' + r + ', ' + g + ', ' + b + ')';
//   //apllies new color by updating css
//   ball.style.background = color;
// }
// //Timer for color change
// setInterval(randomColor,500);
//
// //Ball initial size to match height/width, size limits, & growth/shrink rate
// var size =50;
// var sizeMin = 25;
// var sizeMax = 150;
// var resizeRate = 10;
// //Another arrow function to make the ball grow & shrink
// const resizeBall = () => {
//   //If the ball's size is less than the min size
//   // or the ball's size is greater than the max size
//   if(size < sizeMin || size> sizeMax)
//   //the growth rate is multiplied by -1
//   resizeRate *= -1;
// //  The ball's size is changed
//   size += resizeRate;
// //  Applies new width & height by updating CSS
//   ball.style.height = `${size}px`;
//   ball.style.width = `${size}px`;
// }
//
// setInterval (resizeBall, 500);