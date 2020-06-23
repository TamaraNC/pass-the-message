const input = document.querySelector("#message");
const message = document.querySelector(".message-content");
const submit = document.querySelector("#submitBtn");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "") {
        const alert = document.querySelector(".alert-danger");
        alert.classList.add("show");
        setTimeout(function() {
            alert.classList.remove("show")
        }, 2000);
    } else {
        message.textContent = input.value;
        input.value = "";
    }
})



