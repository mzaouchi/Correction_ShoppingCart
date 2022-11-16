var btnsPlus = document.querySelectorAll('.plus')
var btnsMoins = document.querySelectorAll('.moins')
var btnsTrash = document.querySelectorAll('.fa-trash')
var btnsHeart = document.querySelectorAll('.fa-heart')
// var btnsTrash = document.getElementsByClassName('fa-trash')

for (let i = 0; i < btnsPlus.length; i++) {
    btnsPlus[i].addEventListener('click',function(){
        btnsPlus[i].previousElementSibling.innerText++
        SommeTotal()
    })
    
}

for (let i = 0; i < btnsMoins.length; i++) {
    btnsMoins[i].addEventListener('click',function(){
        if(btnsMoins[i].nextElementSibling.innerText>0){
            btnsMoins[i].nextElementSibling.innerText--
            SommeTotal()            
        }
    })
    
}

for (let i = 0; i < btnsTrash.length; i++) {
    btnsTrash[i].addEventListener('click',function(){
        btnsTrash[i].parentElement.remove()
        SommeTotal()
        // btnsTrash = document.getElementsByClassName('fa-trash')
        // console.log(btnsTrash)
    })
    
}

for (let i = 0; i < btnsHeart.length; i++) {
    btnsHeart[i].addEventListener('click',function(){
        btnsHeart[i].classList.toggle('hear')
    })
    
}

function SommeTotal(){
    var prix = document.querySelectorAll('.price')
    var qte = document.querySelectorAll('.qte')
    var sum = document.querySelector('.somme')
    var s = 0

    for (let i = 0; i < prix.length; i++) {
        s = s+prix[i].innerText*qte[i].innerText
        
    }

    sum.innerText = s
}