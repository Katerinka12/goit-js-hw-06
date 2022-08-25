
const formEl = document.querySelector(".login-form");

formEl.addEventListener('submit', onBtnSubmit);

function onBtnSubmit(event){
    event.preventDefault();
    const {elements: {email, password}} = event.currentTarget;
if( email.value === "" || password.value === "")
{
    alert("Please fill in all the fields!");
}
const userInfo = { email: email.value, Password: password.value};
console.log(userInfo);
event.currentTarget.reset();
}