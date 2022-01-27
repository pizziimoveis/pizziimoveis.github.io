
window.onload = function () {

  // ativa os eventos de click no menu
  const nav = document.querySelector("#header nav");
  const toggle = document.querySelectorAll("nav .toggle");
  for (const element of toggle) {
    element.addEventListener("click", function () {
      nav.classList.toggle("show");
    });
  }
  // ocultar menu ao selecionar uma opcao
  const links = document.querySelectorAll('nav ul li a')
  for (const link of links) {
    link.addEventListener('click', function () {
      console.log(1111);
      nav.classList.remove('show')
    })
  }

  const voltarParaTopoButton = document.querySelector(".back-to-top");
  const sections = document.querySelectorAll("main section[id]");

  // ativa o swiper
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination"
      }
    });

  // const swiper = new Swiper(".swiper-container", {
  //   // slidesPerView: 1,
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },
  //   // mousewheel: true,
  //   // keyboard: true,
  //   // breakpoints: {
  //   //   767: {
  //   //     slidesPerView: 2,
  //   //     setWrapperSize: true,
  //   //   },
  //   // },
  // });

  // ativa o ScrollReveal
  const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 700,
    reset: true,
  });
  scrollReveal.reveal(
    `#inicio .image, #inicio .text,
    #imoveis header, #imoveis .card,
    #sobre .image, #sobre .text,
    footer .brand, footer .links
  `,
    { interval: 100 }
  );

  // tratamentos no scroll da landing page
  window.addEventListener("scroll", function () {
    voltarParaTopo(voltarParaTopoButton);
    ativarMenuDuranteScroll(sections);
  });

};

function voltarParaTopo(voltarParaTopoButton) {
  if (window.scrollY >= 560) {
    voltarParaTopoButton.classList.add("show");
  } else {
    voltarParaTopoButton.classList.remove("show");
  }
}

function ativarMenuDuranteScroll(sections) {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  }
}

{/* <div class="card">
<div class="swiper mySwiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">
      <img src="/assets/imagens/terreno modelo.jpg" alt=""/>
    </div>
    <div class="swiper-slide">
      <img src="/assets/imagens/terreno modelo.jpg" alt=""/>
    </div>
  </div>
  <div class="swiper-pagination"></div>
</div>
<h3 class="title">Sala</h3>
<p>
  Terreno localizado no centro de São João Batista <small>#10</small>
</p>
<div class="infos">
  <div><i class="fas fa-ruler-horizontal"></i>200m²</div>
  <div><i class="fas fa-bath"></i>1 banheiro</div>
</div>
<div class="actions">
  <div class="box-info-map">Centro - São João Batista - SC</div>
  <div class="box-valor">
    Sob/Consulta
  </div>
</div>
</div> */}