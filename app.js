const check =document.getElementById("submitted");
var HerosName = ["spiderman","superman","heman","batman","mugamoodi","joker","thanos"];
let spoider_name = document.getElementById("spider") 
let superman_name =docuent.querySelector("#superManName")
 console.log("goi",superman_name)
console.log("check",check)
initPlayers(HerosName);
 

 function initPlayers(names) {
    let result = [];
    console.log("names",names)
     for( let i=0 ;i< names.length;i++) {
         let hero= {};
         hero.name = names[i];
         hero.strength =  Math.floor(Math.random() * 100 ) + 1;
         if(hero.name =="spiderman"){
           hero.image="spiderman image"
        }  else if(hero.name =="superman"){
            hero.image ="superman image"
            
        }  else if(hero.name =="heman"){
            hero.image ="heman image"
        }  else if(hero.name =="batman"){
            hero.image ="batman image"
        }  else if(hero.name =="mugamoodi"){
            hero.image ="mugamoodi image"
         
        }  else if(hero.name =="joker"){
            hero.image ="joker image"
            
        }  else if(hero.name =="thanos"){
            hero.image ="thanos image"
           
        } 

        if(hero.name =="joker" || hero.name =="thanos"){
            hero.type="villian"   
        } else{
            hero.type="hero"
        }
        console.log("hero",hero)
        // if(hero.name =="spiderman"){
        //     console.log("inside spider man")
        //     spidey.innerHTML = hero
        // }
        result.push(hero)


     }
      console.log("all heros",result)
}