document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
            form.reset();
        } else {
            alert("Por favor, preencha todos os campos antes de enviar.");
        }
    });
});