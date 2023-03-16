const hambergur = document.querySelector("#hambergur");
const menu = document.querySelector("#menu");
const moon = document.querySelector("#moon");
const body = document.querySelector("body");
const hLinks = document.querySelectorAll("#hLink");

hambergur.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hambergur.classList.toggle("bg-white");
});

hLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    hambergur.classList.toggle("bg-white");
  });
});

moon.addEventListener("click", () => {
  body.classList.toggle("dark");
});

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;

      emailjs.sendForm("service_htd4aw6", "contact_form_1988", this).then(
        function () {
          console.log("SUCCESS!");
          document.getElementById("user_name").value = "";
          document.getElementById("user_email").value = "";
          document.getElementById("message").value = "";
          alert("Your message was sent successfully!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
