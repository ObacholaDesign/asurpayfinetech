document.addEventListener("DOMContentLoaded", function() {
    const addIcon = document.querySelector(".add-icon");
    const pagerSlide = document.querySelector(".pager");
    const closePager = document.querySelector(".close");
    const btnNext = document.querySelector(".btn-next");
    const item1 = document.querySelector(".item1");
    const item2 = document.querySelector(".item2");
    const item3 = document.querySelector(".item3");

    const back1 = document.querySelector(".back1");
    const back2 = document.querySelector(".back2");

    const type1 = document.querySelector(".type1");
    const type2 = document.querySelector(".type2");
    const type3 = document.querySelector(".type3");

// initialize
    item1.classList.toggle("disabled"); 
    item2.classList.toggle("disabled"); 
    item3.classList.toggle("disabled"); 

    addIcon.addEventListener("click", function() {
      
        pagerSlide.classList.toggle("active"); 
        item1.classList.remove("disabled"); 
        // item2.classList.toggle("disabled"); 
        // item3.classList.toggle("disabled"); 
    
      
    });

    closePager.addEventListener("click", function() {
        item1.classList.remove("disabled"); 
        item2.classList.remove("disabled"); 
        item3.classList.remove("disabled"); 

        item1.classList.toggle("disabled"); 
        item2.classList.toggle("disabled"); 
        item3.classList.toggle("disabled"); 

    pagerSlide.classList.remove("active"); 
      
    });

    btnNext.addEventListener("click", function() {
      
        item1.classList.toggle("disabled"); 
        item2.classList.remove("disabled"); 
     
      
    });

    type1.addEventListener("click", function() {
      
       
        item2.classList.toggle("disabled"); 
        item3.classList.remove("disabled"); 
       
      
    });

    type2.addEventListener("click", function() {
      
       
        item2.classList.toggle("disabled"); 
        item3.classList.remove("disabled"); 
       
      
    });

    type3.addEventListener("click", function() {
      
       
        item2.classList.toggle("disabled"); 
        item3.classList.remove("disabled"); 
       
      
    });

    back1.addEventListener("click", function() {
      
        pagerSlide.classList.toggle("active"); 
        item1.classList.remove("disabled"); 
        item2.classList.toggle("disabled"); 
        // item3.classList.toggle("disabled"); 
    
      
    });




  
});




