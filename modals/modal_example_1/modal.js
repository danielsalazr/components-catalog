const modalButton = document.querySelector("#openModal")
const modalBackground = document.querySelector(".ModalBackground")
const modalCancel = document.querySelector("#modalCancel")

modalButton.addEventListener("click", () => {
    modalBackground.style.display = "flex";
})


modalCancel.addEventListener("click", () => {
    modalBackground.style.display = "none";
})