document.querySelector("section").classList.add("secNight");
var player1=prompt("Name of player 1");
var player2=prompt("Name of player 2");
document.querySelector(".p1 h3").textContent= player1 ;
document.querySelector(".p2 h3").textContent= player2 ;
function Roll(){
    var number = Math.random()*Math.random();
    number=number*6;
    number=Math.floor(number);
    number=number+1;
    // return number;
    if(number==1){
        document.querySelector(".p1 img").setAttribute("src","./img/1.png");
    }else if(number==2){
        document.querySelector(".p1 img").setAttribute("src","./img/2.png");
    }else if(number==3){
        document.querySelector(".p1 img").setAttribute("src","./img/3.png");
    }else if(number==4){
        document.querySelector(".p1 img").setAttribute("src","./img/4.png");
    }else if(number==5){
        document.querySelector(".p1 img").setAttribute("src","./img/5.png");
    }else if(number==6){
        document.querySelector(".p1 img").setAttribute("src","./img/6.png");
    }



    var number2 = Math.random()*Math.random();
    number2=number2*6;
    number2=Math.floor(number2);
    number2=number2+1;
    // return number;
    if(number2==1){
        document.querySelector(".p2 img").setAttribute("src","./img/1.png");
    }else if(number2==2){
        document.querySelector(".p2 img").setAttribute("src","./img/2.png");
    }else if(number2==3){
        document.querySelector(".p2 img").setAttribute("src","./img/3.png");
    }else if(number2==4){
        document.querySelector(".p2 img").setAttribute("src","./img/4.png");
    }else if(number2==5){
        document.querySelector(".p2 img").setAttribute("src","./img/5.png");
    }else if(number2==6){
        document.querySelector(".p2 img").setAttribute("src","./img/6.png");
    }

    win(number,number2);
}

function win(x,y){   
    // if(x>y){
    //     document.querySelector(".name h3").textContent="Both Wins!!!";
    // }else if(x==y){
    //     document.querySelector(".name h3").textContent= player1 + " wins!!" ;
    // }else if(x<y){
    //     document.querySelector(".name h3").textContent= player2 + " wins!!";
    // }
    if(x>y){
        document.querySelector(".name h3").textContent= player1 + " wins!!" ;
        console.log(x);
    }else if(x<y){
        document.querySelector(".name h3").textContent= player2 + " wins!!";
        console.log(y);
    }else if(x-y==0){
        document.querySelector(".name h3").textContent="Both Wins!!!";
        console.log("both");
    }

}
