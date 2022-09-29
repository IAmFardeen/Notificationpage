const notification = document.getElementById("upNumber");
console.log(notification);
document.querySelector(".messsage").addEventListener("click",function(){
    if(notification.innerText === "3") {
        notification.innerText = "0";  
      } else {
          notification.innerText = "3";
      }
 document.getElementById("redCircle1").classList.toggle("dot");
 document.getElementById("box1").classList.toggle("bg");
 document.getElementById("redCircle2").classList.toggle("dot");
 document.getElementById("box2").classList.toggle("bg");
 document.getElementById("redCircle3").classList.toggle("dot");
 document.getElementById("box3").classList.toggle("bg");


 document.querySelector(".messsage").innerText="Mark all as unread";
});



