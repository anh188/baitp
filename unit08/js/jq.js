$(document).ready(function() {
    $('.accordion-header').click(function() {
      // Toggle content visibility
      $(this).next('.accordion-content').slideToggle();
  
      // Toggle +/- icon
      const icon = $(this).find('.toggle-icon');
      icon.text(icon.text() === '+' ? '-' : '+');
  
      // Close other accordion items
      $('.accordion-content').not($(this).next('.accordion-content')).slideUp();
      $('.toggle-icon').not(icon).text('+');
    });
  });