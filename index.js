document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.querySelector(".search-icon");
    const popupSearch = document.querySelector(".popupsearch");
    const closeSearch = document.querySelector(".close-search");

    searchIcon.addEventListener("click", function() {
        popupSearch.classList.toggle("active");
        console.log("les seach icon est cliqu");
    });

    closeSearch.addEventListener("click", function() {
        popupSearch.classList.remove("active");
    });
});


console.log("Ma page js est bien liée");