let count = 0;

const counter=document.querySelector('#container2');
const button= document.querySelectorAll(".btn");

for(i=0;i<button.length;i++){
    button[i].addEventListener("click",function(button){
     let arr= button.currentTarget;
        if(arr.classList.contains("btn1")){
            count--;
        }

     else if(arr.classList.contains("btn3")){
        count++;
    }

    else{
        count=0;
    }
    counter.textContent=count;
    

})

}

/*
button.forEach(function(value) {
     value.addEventListener("click",function(e){
         
        const style=e.currentTarget.classList;
        if(style.contains("btn1")){
            count--;
        }

     else if(style.contains("btn3")){
        count++;
    }

    else{
        count=0;
    }
    counter.textContent=count;
     });

});
*/