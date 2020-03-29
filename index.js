var cur = document.getElementById("cur");
var cake = document.getElementById("cake");
var pic = ["cake.svg","cake1.svg","cake2.svg","cake3.svg","cake4.svg","cake5.svg","cake6.svg","cake7.svg","cake8.svg"];

var counter = document.getElementById("counter");
var guilt = document.getElementById("h2");


cake.addEventListener("click", function(){
    if(Number(localStorage.piece)>1){
        counter.innerHTML=localStorage.piece;
        localStorage.style= "inherit";
        guilt.style.display = localStorage.style;   
    }
    for(var i = 0; i < pic.length; i++){
        if(cake.src.match(pic[i])){
            if(i==4){
                cur.id="cur1";
                
            }
            if(i==6){
                cur.id="cur2";
            }
            if(i==7){
                cur.id="cur3";
                
            }
            if(i==8){
                cur.id="cur";      
                if (typeof(Storage) !== "undefined") {
                    if (localStorage.piece) {
                      localStorage.piece = Number(localStorage.piece)+1;
                    } else {
                      localStorage.piece = 1;
                    }
                }
                counter.innerHTML=localStorage.piece;
                localStorage.style= "inherit";
                guilt.style.display = localStorage.style;
                cake.src=pic[0];
                break;
            }
            cake.src =pic[i+1]; 
            break;
            
        }
       
    }
     
});
