document.addEventListener("DOMContentLoaded", function () {

  const faqs = document.querySelectorAll(".faq .card");

  faqs.forEach(card => {
    card.style.cursor = "pointer";

    const answer = card.querySelector("p");

    answer.style.display = "none";

    card.addEventListener("click", () => {
      const isOpen = answer.style.display === "block";

      answer.style.display = isOpen ? "none" : "block";
    });
  });

});
