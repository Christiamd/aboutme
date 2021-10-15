const sendMail = () => {
    event.preventDefault();
    let message = document.querySelector("#message").value;
    const myMail = "christiamdelacruz@gmail.com";
    let mail = document.querySelector("#email").value;
    let sname = document.querySelector("#name").value;
    const subject = "Vengo de la pagina web";
    window.location.href = `mailto:${myMail}?Subject=${subject}&Body=${message}`;
}

document.querySelector("#send-mail").addEventListener("click", sendMail);