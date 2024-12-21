// تعویض فرم‌ها
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const forgotPasswordForm = document.getElementById("forgot-password-form");

  document.getElementById("go-to-signup").addEventListener("click", () => {
      toggleForms(loginForm, signupForm);
  });

  document.getElementById("go-to-login").addEventListener("click", () => {
      toggleForms(signupForm, loginForm);
  });

  document.querySelectorAll(".forgot-password").forEach(link => {
      link.addEventListener("click", () => {
          toggleForms(loginForm, forgotPasswordForm);
      });
  });
});

function toggleForms(currentForm, targetForm) {
  currentForm.style.display = "none";
  targetForm.style.display = "block";
}
