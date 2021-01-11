
var mapLink=document.querySelector(".js-button-map")
var popupMap=document.querySelector(".map")
var mapModalClose=document.querySelector(".modax-close1")


mapLink.addEventListener("click", function (abc) {
    abc.preventDefault();
    popupMap.classList.add("modal-show");
})

mapModalClose.addEventListener("click", function (abc) {
    abc.preventDefault();
    popupMap.classList.remove("modal-show");
})


window.addEventListener("keydown", function (abc) {
    if (abc.keyCode === 27) {

        if (popupMap.classList.contains("modal-show")) {
            abc.preventDefault()
            popupMap.classList.remove("modal-show")
        }
    }
})