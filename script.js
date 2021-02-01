/** increase number of product **/ 

document.querySelector(".plus-btn").addEventListener("click", function(){
    var currentValue = document.getElementById("quantity").value;
    currentValue++;
    document.getElementById("quantity").value = currentValue;
});


document.querySelector(".minus-btn").addEventListener("click", function(){
    var currentValue = document.getElementById("quantity").value;
    if (currentValue != 0) {
       currentValue--;
       document.getElementById("quantity").value = currentValue; 
    }
});


/** products slider banner **/

$('.carousel-main').owlCarousel({
	loop: true,
	autoplay: true,
	autoplayTimeout: 2500,
	margin: 20,
	nav: true,
	dots: false,
	navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 3
        },
        1000:{
            items: 5
        }
    }
});

/** price tag change based on the weight label **/

function priceCalc() { 
                    
                var currentPrice = document.getElementById("current-price");
                var previousPrice = document.getElementById("previous-price");
                var sizes = document.getElementsByName("size");
                    
                for (var i=0; i< sizes.length; i++){
                    if(sizes[i].checked) {
                        if(sizes[i].value == 300) {
                            currentPrice.textContent = "2,80 €";
                            previousPrice.innerHTML = "<del>3,20 €</del>";
                        }
                        else if(sizes[i].value == 500) {
                            currentPrice.textContent = "3,50 €";
                            previousPrice.innerHTML = "<del>4,10 €</del>";
                            
                        }else if(sizes[i].value == 250) {
                            currentPrice.textContent = "2,10 €";
                            previousPrice.innerHTML = "<del>2,60 €</del>";
                        }
                    }
                }   
            }
                  