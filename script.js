const firstBox = document.querySelector(".ratingBox")
const secondBox = document.querySelector(".thankYouBox")
const submitButton = document.querySelector(".aBtn")
const ratingBtn = document.querySelectorAll(".btn")
let rating = document.querySelector(".rate")

submitButton.addEventListener('click', function(){
    secondBox.classList.remove('hidden')
    firstBox.style.display = 'none'
})

ratingBtn.forEach((btn) => {
   btn.addEventListener('click', function(){
    // let selected = btn.innerHTML;
    rating.innerHTML = btn.innerHTML;
   })
});


