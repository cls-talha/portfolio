  
           $(document).ready(function() {

            var counters = $(".count");
            var countersQuantity = counters.length;
            var counter = [];
            
            for (i = 0; i < countersQuantity; i++) {
              counter[i] = parseInt(counters[i].innerHTML);
            }
            
            var count = function(start, value, id) {
              var localStart = start;
              setInterval(function() {
                if (localStart < value) {
                  localStart++;
                  counters[id].innerHTML = localStart;
                }
              }, 40);
            }
            
            for (j = 0; j < countersQuantity; j++) {
              count(0, counter[j], j);
            }
            });


            
  $('.count').each(function () {
         $(this).prop('Counter',0).animate({
         Counter: $(this).text()
         }, {
         duration: 3300,
         easing: 'swing',
         step: function (now) {
             $(this).text(Math.ceil(now));
    }
  });
});
 /*******/
var move_img = document.getElementById("banner-right-img");
if (move_img) {
  move_img.addEventListener("mousemove", (e) =>{
    let x = e.layerX
    let y = e.layerY
    move_img.style.transform = `translate(-${x /6}px)`;
  });
}
/********/
// UPDATE: I was able to get this working again... Enjoy!
// Custom cursor removed per user request

// Global site-wide custom cursor
document.addEventListener('mousemove', function(e) {
  var c = document.querySelector('.cursor'), c2 = document.querySelector('.cursor2');
  if (c && c2) {
    c.style.left = c2.style.left = e.clientX + 'px';
    c.style.top = c2.style.top = e.clientY + 'px';
  }
});
