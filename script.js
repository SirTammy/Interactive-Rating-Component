const body = document.querySelector(".aaa")
const firstBox = document.querySelector(".ratingBox")
const secondBox = document.querySelector(".thankYouBox")
const submitButton = document.querySelector(".aBtn")
const ratingBtn = document.querySelectorAll(".btn")
let rating = document.querySelector(".rate")



ratingBtn.forEach((btn) => {
    btn.addEventListener('click', function(){
     // let selected = btn.innerHTML;
     rating.innerHTML = btn.innerHTML;
    })
 });

submitButton.addEventListener('click', function(){
    if(!rating.innerHTML){
        console.log('tam')
    } else{
        secondBox.classList.remove('hidden');
        firstBox.style.display = 'none'
    };
    
});



