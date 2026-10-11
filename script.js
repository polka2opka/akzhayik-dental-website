const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");
const appointmentForm = document.querySelector("#appointmentForm");
const formMessage = document.querySelector("#formMessage");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

appointmentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const service = document.querySelector("#service").value;

  if (!name || !phone) {
    formMessage.textContent = "Пожалуйста, заполните имя и номер телефона.";
    return;
  }

  const message = `Здравствуйте! Меня зовут ${name}. Хочу записаться в стоматологию «Акжайык». Услуга: ${service}. Телефон: ${phone}.`;
  const whatsappUrl = `https://wa.me/77072650076?text=${encodeURIComponent(message)}`;
  formMessage.textContent = "Открываем WhatsApp, чтобы вы могли отправить заявку.";
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

document.querySelector("#year").textContent = new Date().getFullYear();