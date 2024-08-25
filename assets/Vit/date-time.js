
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  
  
  ScrollReveal().reveal(".steps__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  ScrollReveal().reveal(".explore__card", {
    duration: 1000,
    interval: 500,
  });
  
  ScrollReveal().reveal(".job__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  ScrollReveal().reveal(".offer__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  const swiper = new Swiper(".swiper", {
    loop: true,
  });
  