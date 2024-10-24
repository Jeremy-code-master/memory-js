import {
  emailValidator,
  passwordValidator,
  usernameValidator,
} from "./validators.js";

document.addEventListener("DOMContentLoaded", () => {
  const $form = document.getElementById("userForm");

  // Messages d'erreur
  const $errorMessage = document.getElementById("errorMessage");
  const $messageHolder_username = document.getElementById("messageHolder_username");
  const $messageHolder_email = document.getElementById("messageHolder_email");
  const $messageHolder_password = document.getElementById("messageHolder_password");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    const $email = document.getElementById("email").value;
    const $password = document.getElementById("password").value;
    const $confirmPassword = document.getElementById("confirmPassword").value;
    const $username = document.getElementById("username").value;
    const errors = [];
    
    if (!emailValidator($email)) {
      errors.push("L'email n'est pas valide.");
      document.getElementById("email").style.color = 'red';
      document.getElementById("email").style.borderColor = 'red';
      document.getElementById("email").style.fontWeight = 'bold';
      $messageHolder_email.insertAdjacentHTML("afterbegin", `<img src="./img/error.svg" alt="error" id="error_image_email">`)
      document.getElementById("error_image_email").style.width = '5%';
    }

    if (!passwordValidator($password)) {
      errors.push(
        "Le mot de passe doit contenir au moins un symbole, un chiffre, ainsi que 6 caractères minimum."
      );
      document.getElementById("password").style.color = 'red';
      document.getElementById("password").style.borderColor = 'red';
      document.getElementById("password").style.fontWeight = 'bold';
      $messageHolder_password.insertAdjacentHTML("afterbegin", `<img src="./img/error.svg" alt="error" id="error_image_password">`)
      document.getElementById("error_image_password").style.width = '5%';
    }

    if (!usernameValidator($username)) {
      errors.push("Votre nom n'est pas valide");
      document.getElementById("username").style.color = 'red';
      document.getElementById("username").style.borderColor = 'red';
      document.getElementById("username").style.fontWeight = 'bold';
      $messageHolder_username.insertAdjacentHTML("afterbegin", `<img src="./img/error.svg" alt="error" id="error_image_username">`)
      document.getElementById("error_image_username").style.width = '5%';
    }

    if ($password !== $confirmPassword) {
      document.getElementById("confirmPassword").style.color = 'red';
      document.getElementById("confirmPassword").style.borderColor = 'red';
    }

    // Si j'ai des erreurs
    if (errors.length > 0) {
      // Je les affichent
      $errorMessage.textContent = errors.join(" <br> ");
      $errorMessage.classList.remove("hidden");
    } else {
      // sinon je save
      // Contruction de l'objet pour l'envoi
      const userData = {
        mail: $email,
        pwd: $password,
        name: $username,
      };

      // Je l'enregistre
      localStorage.setItem("userData", JSON.stringify(userData));
      $errorMessage.textContent = "Merci pour votre inscription !"
      $form.reset();
      $errorMessage.classList.add("hidden");
    }
  });
});
