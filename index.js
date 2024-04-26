document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.querySelector(".search-icon");
    const popupSearch = document.querySelector(".popupsearch");
    const closeSearch = document.querySelector(".close-search");
    const addIcon = document.querySelector(".add-icon");
    const pagerSlide = document.querySelector(".pager");
    const closePager = document.querySelector(".close-icon2");

    const btnNext = document.querySelector(".next");
    const slideItem = document.querySelector(".item1");



    searchIcon.addEventListener("click", function() {
        popupSearch.classList.toggle("active");
        console.log("les seach icon est cliqu");
    });

    closeSearch.addEventListener("click", function() {
        popupSearch.classList.remove("active");
    });

    addIcon.addEventListener("click", function() {
        pagerSlide.classList.toggle("active"); 
      
    });

    closePager.addEventListener("click", function() {
        pagerSlide.classList.remove("active");
    });

    btnNext.addEventListener("click", function() {
        slideItem.classList.toggle("unabled");
        console.log("Je passe au suivant");
    });
});




