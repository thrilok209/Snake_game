var pos = 100;
var pos1 = 100;
var count =0;
var c1=0;
var c2=0;


var id =0;
var id2 =0;
var id3 =0;
var id4 =0;

var X = 100;
var Y = 100;

var wi = 10;
var sc = 0;
function myMove() {
  var elem = document.getElementById("snake");
  var elem1 = document.getElementById("point");
  var sco = document.getElementById("score");
  var x =  event.key;
  elem.style.transformOrigin= "0 50%";
  elem.style.transition ="transform 0.1s";

  if(sc==20){
    alert(" You Won");
    clearInterval(id2);
    clearInterval(id3);
    clearInterval(id);
    clearInterval(id4);
    count++;
  }

  if((x=="d" || x=="D") && pos1>=0 && count==0 && c1==0){
     id = setInterval(frame1, 100);
     clearInterval(id2);
     clearInterval(id3);
     clearInterval(id4);
     c1++;
     c2=0;
     elem.style.transform = "rotate(180deg)";
   }
   if((x=="a" || x=="A")&& pos1<=750 && count==0 && c1==0){
     id2 = setInterval(frame2, 100);
     clearInterval(id);
     clearInterval(id3);
     clearInterval(id4);
     c1++;
     c2=0;
     elem.style.transform = "rotate(0deg)";
   }
   if((x=="S" || x=="s") && pos>=0 && count==0 && c2==0){
     id3 = setInterval(frame3, 100);
     clearInterval(id2);
     clearInterval(id);
     clearInterval(id4);
     c2++;
     c1=0;
     elem.style.transform = "rotate(-90deg)";
   }
   if((x=="w" || x=="W") && pos<=350 && count==0 && c2==0){
     id4 = setInterval(frame4, 100);
     clearInterval(id2);
     clearInterval(id3);
     clearInterval(id);
     c2++;
     c1=0;
     elem.style.transform = "rotate(90deg)";
   }

   function frame1() {
     if(pos>=(X-15) && pos<=(X+15) && pos1>=(Y-15) &&pos1<=(Y+15) ){
         X = (Math.floor((Math.random() * 30) + 1))*10;
         Y = (Math.floor((Math.random() * 70) + 1))*10;
         wi=wi+10;
         elem1.style.top = (X) + 'px';
         elem1.style.left = (Y) + 'px';
         elem.style.width =wi + 'px';
         elem.style.transition ="width 2s";
         sc++
         sco.innerHTML = sc;
     }
    if((pos==0 || pos==400 ||pos1==0 || pos1==800) && count==0){
       alert(" GAME OVER !! Better Luck Next Time");
       count++;
       clearInterval(id2);
       clearInterval(id3);
       clearInterval(id);
       clearInterval(id4);
     }
      pos1=pos1+10;
      elem.style.left = pos1 + 'px';
   }
   function frame2() {
      if(pos>=(X-15) && pos<=(X+15) && pos1>=(Y-15) &&pos1<=(Y+15) ){
         X = (Math.floor((Math.random() * 30) + 1))*10;
         Y = (Math.floor((Math.random() * 70) + 1))*10;
         elem1.style.top = (X) + 'px';
         elem1.style.left = (Y) + 'px';
         elem.style.transition ="width 2s";
         wi=wi+10;
         elem.style.width =wi + 'px';
         sc++
         sco.innerHTML = sc;
      }

      if((pos==0 || pos==400 ||pos1==0 || pos1==800) && count==0){
       alert(" GAME OVER !! Better Luck Next Time");
       count++;
       clearInterval(id2);
       clearInterval(id3);
       clearInterval(id);
       clearInterval(id4);
      }
        pos1=pos1-10;
        elem.style.left = pos1 + 'px';
      }




   function frame3() {
     if(pos>=(X-15) && pos<=(X+15) && pos1>=(Y-15) &&pos1<=(Y+15) ){
       X = (Math.floor((Math.random() * 30) + 1))*10;
       Y = (Math.floor((Math.random() * 70) + 1))*10;
       elem1.style.top = (X) + 'px';
       elem1.style.left = (Y) + 'px';
       elem.style.transition ="width 2s";
       wi=wi+10;
       elem.style.width =wi + 'px';
       sc++;
       sco.innerHTML = sc;
     }
       if((pos==0 || pos==400 ||pos1==0 || pos1==800) && count==0){
         alert(" GAME OVER !! Better Luck Next Time");
         count++;
         clearInterval(id2);
         clearInterval(id3);
         clearInterval(id);
         clearInterval(id4);
       }
        pos=pos+10;
        elem.style.top = pos + 'px';
       }



   function frame4() {
       if(pos>=(X-15) && pos<=(X+15) && pos1>=(Y-15) &&pos1<=(Y+15) ){
         X = (Math.floor((Math.random() * 30) + 1))*10;
         Y = (Math.floor((Math.random() * 70) + 1))*10;
         elem1.style.top = (X) + 'px';
         elem1.style.left = (Y) + 'px';
         elem.style.transition ="width 2s";
         wi=wi+10;
         elem.style.width =wi + 'px';
         sc++
         sco.innerHTML = sc;
       }
       if((pos==0 || pos==400 ||pos1==0 || pos1==800) && count==0){
         alert(" GAME OVER !! Better Luck Next Time");
         count++;
         clearInterval(id2);
         clearInterval(id3);
         clearInterval(id);
         clearInterval(id4);
       }
       pos=pos-10;
       elem.style.top = pos + 'px';
       }

}
