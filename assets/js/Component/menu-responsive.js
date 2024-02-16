
const menuResponsive = document.querySelector(".nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    nav.classlist.add("visible");
})

close.addEventListener("click", () => {
    nav.classlist.remove("visible")
} )


export default menuResponsive