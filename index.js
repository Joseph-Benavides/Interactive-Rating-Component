const submitBtn = document.querySelector(".submit-btn");
const ratingComponent = document.querySelector(".rating-component");
const ratingIcon = document.querySelector(".rating-icon");
const ratingSelection = document.querySelector(".rating-selection");
const ratingHeader = document.querySelector(".rating-header");
const ratingInfo = document.querySelector(".rating-info");
const ratingBtnsDiv= document.querySelector(".rating-buttons");
const ratingBtns = document.querySelectorAll(".rating-button");
let submitted;

ratingBtns.forEach(btn => {
    let value = btn.getAttribute("value")
    
    btn.addEventListener("click", function() {
        submitted = btn.value;
        ratingBtns.forEach(ratings => {
            ratings.classList.remove("selected-rating-button")
        })
        btn.classList.add("selected-rating-button");
        ratingSelection.textContent = `You selected ${value} out of 5`;
    })
});

// Hides initial page and displays submitted page
function submitBtnClicked() {
    console.log("Heroo");

    if(submitted != null) {
        ratingComponent.style.textAlign = "center";
        ratingIcon.src="./images/illustration-thank-you.svg";
        ratingHeader.innerHTML = "Thank you!";
        ratingSelection.style.display = "inherit";
        ratingInfo.innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";
        submitBtn.style.display = "none";
        ratingBtnsDiv.style.display = "none";
    }

}

submitBtn.addEventListener("click", submitBtnClicked)