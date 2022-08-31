let bar  = document.querySelector(".bar-btn");

bar.onclick = function (){
    if (this.classList.contains("collapsed")){
        this.innerHTML = ``
        this.innerHTML = ` <i class=" fa-solid fa-bars bar-icon"></i>`
        this.innerHTML = ` <i class="fas fa-bars"></i>`
    }else{
        this.innerHTML = ``
        this.innerHTML = ` <i class="fas fa-times close-icon"></i>`
        this.innerHTML = ` <i class="fa fa-window-close" aria-hidden="true"></i>`
        this.innerHTML = ` <i class="fa fa-times" aria-hidden="true"></i>`
        // this.innerHTML = ` <i aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--close eicon-close"></i>`
        
    }
}

let showMoreButtons = [...document.querySelectorAll(".show-more-btn")] ;
let imgItemHeight = document.querySelector(".images-section-content-item").offsetHeight
showMoreButtons.forEach(showMoreButton => {
    showMoreButton.onclick = function (e){
        let currentElement = e.currentTarget ,
        parentOfCurrentElement = currentElement.parentElement,
        contentElement = parentOfCurrentElement.previousElementSibling,
        showBtn= currentElement.lastElementChild,
        imageItem = (((parentOfCurrentElement.parentElement).parentElement).parentElement).parentElement ,
        sectionImages = (imageItem.parentElement).parentElement
        parentOfCurrentElement.classList.toggle("show-less-content")
        contentElement.classList.toggle("show-content") ;
        if (parentOfCurrentElement.classList.contains("show-less-content")){
            // sectionImages.style.height = `${imageItem.offsetHeight}px`
            sectionImages.style.height = `auto`
            showBtn.innerHTML = "Show Less"
        }else{
            showBtn.innerHTML = "Show More"
            sectionImages.style.height = `auto`
        }
        // sectionImages.style.height = "600px"
        console.log (imageItem)
        console.log (imageItem)
        console.log (((((parentOfCurrentElement.parentElement).parentElement).parentElement).parentElement).offsetHeight)
    }
    
})