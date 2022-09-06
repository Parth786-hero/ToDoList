const mainButton = document.querySelector(".btn");
const mainPopup = document.querySelector(".main-popup");
const secondPop = document.querySelector(".second-popup");
const father = document.querySelector(".father");
let currElement = "";
mainButton.addEventListener("click",()=>{
    mainPopup.classList.remove("hide");
})
mainPopup.addEventListener("click",(e)=>{
    if(e.target.classList.contains("cross")){
        e.currentTarget.classList.toggle("hide");

    }
    if(e.target.classList.contains("submit")){
        let ans = e.target.previousElementSibling.value;
        
        if(ans){
            const ele = document.createElement("div");
            ele.className="card";
            
            ele.innerHTML = `<h2>🔥${ans}</h2><span><i class="fa-solid fa-trash-can dustbin" style="color:white;animation:animate;display:inlime-block;"></i></span>`;
            father.append(ele);
            e.currentTarget.classList.toggle("hide");
            
            
        }else{
            alert("Please Enter the data first !!!");
        }
        e.target.previousElementSibling.value="";
    }
});
mainPopup.addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){
        let ans = e.currentTarget.children[0].children[2].children[0].value;
        
        if(ans){
            const ele = document.createElement("div");
            ele.className="card";
            
            ele.innerHTML = `<h2>🔥${ans}</h2><span><i class="fa-solid fa-trash-can dustbin" style="color:white;animation:animate;display:inlime-block;"></i></span>`;
            father.append(ele);
            e.currentTarget.classList.toggle("hide");
            
            
        }else{
            alert("Please Enter the data first !!!");
        }
        e.currentTarget.children[0].children[2].children[0].value="";
    }
})
father.addEventListener("click",(e)=>{
    if(e.target.classList.contains("card")){
        currElement = e.target;
        secondPop.classList.remove("hide");
    }
    if(e.target.classList.contains("dustbin")){
        e.target.parentNode.parentNode.remove();
        
    }
    if(e.target.classList.contains("check")){
        e.target.nextElementSibling.classList.toggle("do");
    }
});
secondPop.addEventListener("click",(e)=>{
    if(e.target.classList.contains("cross")){
        e.currentTarget.classList.add("hide");
    }
    if(e.target.classList.contains("submit")){
        let subItem = e.target.previousElementSibling.value;
        if(subItem){
            const ele = document.createElement("div");
            ele.classList.add("item");
            ele.innerHTML = `<input type='checkbox' class='check'> <span>${subItem}</span>`;
            currElement.append(ele);
            e.currentTarget.classList.add("hide");
            
        }else{
            alert("Please enter this tooooo !! ");
        }
        e.target.previousElementSibling.value="";
    }
});
secondPop.addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){
        let subItem = e.currentTarget.children[0].children[2].children[0].value;
        if(subItem){
            const ele = document.createElement("div");
            ele.classList.add("item");
            ele.innerHTML = `<input type='checkbox' class='check'> <span>${subItem}</span>`;
            currElement.append(ele);
            e.currentTarget.classList.add("hide");
            
        }else{
            alert("Please enter this tooooo !! ");
        }
        e.currentTarget.children[0].children[2].children[0].value="";
    }
})