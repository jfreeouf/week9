$(".gallery").masonry({
  itemSelector: ".thumbnail",
  columnWidth: ".thumbnail",
  percentPosition: true
});

$(".thumbnail").simpleLightbox();

$(".touchevents .thumbnail").hammer().bind("press", function() {
// Your code here
});

$(".touchevents .thumbnail").hammer().bind("swipe", function() {
// Your code here
});
