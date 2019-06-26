/* Set the width of the side navigation to 250px */
$('.sidenav-icon-bar').click(function(){
    $('body').addClass('sidenav-on');
})
/* Set the width of the side navigation to 0 */
$('.closebtn').click(function(){
    $('body').removeClass('sidenav-on');
})    
// Top Arrow Scroll 
$(window).scroll(function(){ 
    if ($(this).scrollTop() > 1200) { 
        $('#scroll').fadeIn();
        $('.c-navabr-bgcolor').addClass('navbar-addshadow');
        $('.copyright-container').addClass('footer-shadow');
    } else { 
        $('#scroll').fadeOut(); 
        $('.c-navabr-bgcolor').removeClass('navbar-addshadow');
        $('.copyright-container').removeClass('footer-shadow');
    } 
}); 

$('.fadeOut').owlCarousel({
    items: 1,
    animateOut: 'fadeOut',
    loop: true,
    margin: 10,
    autoplay: true,
});

$('#scroll').click(function(){ 
    $("html, body").animate({ scrollTop: 0 }, 600); 
    return false; 
}); 

$('.career-panel-collapse.in').siblings('.career-panel-heading').addClass('active');

$('.career-panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.career-panel-heading').addClass('active');
});

$('.career-panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.career-panel-heading').removeClass('active');
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
class TypeWriter {
   constructor(element) {
      this.element = element;
      this.text = element.textContent;
      this.height = element.offsetHeight;
      this.index = 0;
      this.addSpeed = 60;
      this.clearSpeed = 20;
      this.waitTime = 1000;
     
      // this.removeText = this.removeText.bind(this);
      this.addText = this.addText.bind(this);
     
      this.init();   
   }
  
    // removeText() {
    //   this.element.textContent = this.element.textContent.slice(0, -1);
    
    //   if (this.element.textContent.length == 0) {
    //     clearInterval(this.interval);
        
    //     var that = this;

    //     setTimeout(function(){
    //       that.index = 0;
    //       that.interval = setInterval(that.addText, that.addSpeed);
    //     }, this.waitTime);
    //   }
    // }
  
    addText() {
      this.element.textContent += this.text[this.index];

      this.index = this.index + 1;

      if (this.index > this.text.length -1) {
        clearInterval(this.interval);
        
        var that = this;

        // setTimeout(function(){
        //   that.interval = setInterval(that.removeText, that.clearSpeed);
        // }, this.waitTime);
      }

    }
  
    init() {
      this.element.textContent = '';
      this.element.style.height = '' + this.height + 'px';
      
      this.interval = setInterval(this.addText, this.addSpeed);
    }
}

Array.from(document.getElementsByClassName("type")).forEach(
    function(element) {
        new TypeWriter(element);
    }
);

//music player

