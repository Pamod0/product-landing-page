document.getElementById("email-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const input = document.getElementById("email");
  const display = document.getElementById("display");

  const email = input.value;
  display.textContent = "Subscription Successfull. You will hear from us soon. Registered email is " + email;

  input.value = "";
});
  