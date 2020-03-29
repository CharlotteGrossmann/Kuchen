var cur = document.getElementById("cur");
var cake = document.getElementById("cake");
var pic = ["cake.svg","cake1.svg","cake2.svg","cake3.svg","cake4.svg","cake5.svg","cake6.svg","cake7.svg","cake8.svg"];
cake.addEventListener("click", function(){
   
    for(var i = 0; i < pic.length; i++){
        console.log(pic[i]);
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
                break;
            }
            cake.src =pic[i+1]; 
            break;
            
        }
       
    }
     
})