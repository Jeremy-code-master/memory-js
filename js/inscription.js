import {
  emailValidator,
  passwordValidator,
  usernameValidator,
} from "./validators.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("userForm");
  const errorMessage = document.getElementById("errorMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    const errors = [];
    
    if (!emailValidator(email)) {
      errors.push("L'email n'est pas valide.");
    }

    if (!passwordValidator(password)) {
      errors.push(
        "Le mot de passe doit contenir au moins un symbole, un chiffre, ainsi que 6 caractères minimum."
      );
    }

    if (!usernameValidator(username)) {
      errors.push("Votre nom n'est pas valide");
    }

    // Si j'ai des erreurs
    if (errors.length > 0) {
      // Je les affichent
      errorMessage.textContent = errors.join("<br>");
      errorMessage.classList.remove("hidden");
    } else {
      // sinon je save
      // Contruction de l'objet pour l'envoi
      const userData = {
        mail: email,
        pwd: password,
        name: username,
      };

      // Je l'enregistre
      localStorage.setItem("userData", JSON.stringify(userData));
      errorMessage.textContent = "Merci pour votre inscription !"
      form.reset();
      errorMessage.classList.add("hidden");
    }
  });
});
