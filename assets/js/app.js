function openNav() {
  document.getElementById("navbar").classList.toggle("start-0");
  document.body.classList.toggle("overflow_hidden");
  document.querySelector(".menu").classList.toggle("cross")
}



const accordionHead = document.querySelectorAll(".accordionHead");
accordionHead.forEach((e) => {
  e.addEventListener("click", () => {
    const activeAccordion = document.querySelector(".active")
    e.parentElement.classList.toggle("active")
    activeAccordion && activeAccordion.classList.remove("active")
  })
})

$('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,

      }
    },
    {
      breakpoint: 688,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
      }
    },
  ]
});



// --------slider
$('.first-slider').slick({
  infinite: true,
  dots: false,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  variableWidth: true,
  autoplaySpeed: 0,
  speed: 1000,
  pauseOnHover: true,
  cssEase: 'linear',
  arrows: false,
});

function addDocument() {
  document.getElementById("fileInput").click();
}
document.getElementById("uploadBtn").addEventListener("click", addDocument);


function toggle(source) {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i] != source)
      checkboxes[i].checked = source.checked;
  }
}



