


 // Global Variables
 const allSections = document.querySelectorAll("section");
 const fragment = document.createDocumentFragment();
 const allLists = document.querySelector("#navbar__list");



// loop function
allSections.forEach (function(element) {
    const nav = element.getAttribute("data-nav");
    // create <li> element
    const list = document.createElement("li");
    // create <a> element
    const anchor = document.createElement("a");
    // add class attribute to <a> element
    anchor.setAttribute("class", "menu__link");
    // add text content to <a> element
    anchor.textContent = nav;
    // add href attribute to <a> element
    anchor.setAttribute("href", "#element");

// scroll element in  view port
    function scroll() {
		element.scrollIntoView({behavior: "smooth"});
		
	}
// add Event Listener to <a> element	
	anchor.addEventListener("click", scroll);
// append <a> element in <li> element
list.appendChild(anchor);
//append <li> in fragment
fragment.appendChild(list);
});
// append <fragment> in <ul> element
allLists.appendChild(fragment);

// active section
window.addEventListener("scroll", function() {
    allSections.forEach(function(element) {
        
    const rect = element.getBoundingClientRect();

    if (rect.top >= -50 && rect.top <= 200) {
        
        
    allSections.forEach(function(element) {
        
        element.classList.remove("your-active-class");

    })	

        element.classList.add("your-active-class");
            
        
    
    }
        

    }) 
        

});





