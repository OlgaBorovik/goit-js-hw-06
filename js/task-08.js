const form = document.querySelector('.login-form')
form.addEventListener("submit", onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = {
    mail: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  }
  if (formElements.mail === "" || formElements.password === "") {
    return alert("Please fill in all the fields!");
  } console.log(formElements);
    event.currentTarget.reset();
}
