
  
  $(function(){
  // activate scrollspy on sections side navigation
  $('body').scrollspy({ 
    target: '.fixed-side-navbar',
    offset: 200
  });
  
  // smoothscroll on sidenav click
  $('.fixed-side-navbar a').smoothScroll({
    offset: -100    
  });
});



