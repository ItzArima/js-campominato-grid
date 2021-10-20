const container = document.querySelector(".main-container");

function facile(){
    container.innerHTML = "";
    container.id = "width";
    document.getElementById("width").style.width= "700px";
    for(let i=0;i<49;i++){
        var block = document.createElement("div");
        block.className = "block"
        container.append(block);
        block.innerHTML = i;
        console.log(i);
        block.addEventListener('click',function(){
            if(this.style.backgroundColor == "red"){
                console.log("cliccato");
                this.id = "active";
                this.style.backgroundColor = "white";
            }
            else{
                this.style.backgroundColor ="red"
            }            
        })
        
    }
    
}

function medio(){
    container.innerHTML = "";
    container.id = "width";
    document.getElementById("width").style.width= "900px";
    for(let i=0;i<81;i++){
        var block = document.createElement("div");
        block.className = "block"
        container.append(block);
        block.innerHTML = i;
        console.log(i);
        block.addEventListener('click',function(){
            if(this.style.backgroundColor == "red"){
                console.log("cliccato");
                this.id = "active";
                this.style.backgroundColor = "white";
            }
            else{
                this.style.backgroundColor ="red"
            }            
        })
    }
    
}

function difficile(){
    container.innerHTML = "";
    container.id = "width";
    document.getElementById("width").style.width= "1000px";
    for(let i=0;i<100;i++){
        var block = document.createElement("div");
        block.className = "block"
        container.append(block);
        block.innerHTML = i;
        console.log(i);
        block.addEventListener('click',function(){
            if(this.style.backgroundColor == "red"){
                console.log("cliccato");
                this.id = "active";
                this.style.backgroundColor = "white";
            }
            else{
                this.style.backgroundColor ="red"
            }            
        })
    }
}




