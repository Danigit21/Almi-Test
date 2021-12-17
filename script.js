let mobileLinksEl = document.querySelector("#mobileLinks")
let hamButtonEl = document.querySelector("#ham-button")

const myFunction = () => {
    if (mobileLinksEl.style.display === "block") {
      mobileLinksEl.style.display = "none";

    } else {
      mobileLinksEl.style.display = "block";
    }

    if (hamButtonEl.classList.contains("fa-bars")) {
      hamButtonEl.classList.replace("fa-bars", "fa-times");
      hamButtonEl.classList.add("white")
    
    } else {
      hamButtonEl.classList.replace("fa-times", "fa-bars");
      hamButtonEl.classList.remove("white")
    }
}