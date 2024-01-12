function Scroll(){
    window.scrollTo(0,0);
}

 function Interchange(){
    let textToAnimate = document.getElementById('textToAnimate');

    let OrgText = textToAnimate.innerText;

    let Reversed = OrgText.split('').reverse().join('');

    textToAnimate.innerText = Reversed;

  textToAnimate.classList.add('animate-reverse');

    setTimeout(function(){
        textToAnimate.classList.remove('animate-reverse');
        textToAnimate.innerText = OrgText;
    
    }, 1200);  

   
}

document.addEventListener('DOMContentLoaded', Interchange);  

