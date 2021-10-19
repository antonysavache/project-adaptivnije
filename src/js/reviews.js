$('.review-list ').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.review-text-list',
  dots: false,
  centerMode: true,
  centerPadding: '0',
  focusOnSelect: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]

});
$('.review-text-list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  asNavFor: '.review-list'
});
