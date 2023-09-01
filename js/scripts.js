const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const age = parseInt(document.querySelector("#age").value);

    let descricao = ''; // Use let em vez de const para que você possa alterar o valor posteriormente

    if (age <= 18) {
        descricao = 'Você não pode Votar';
    } else if (age > 18) {
        descricao = 'Você pode Votar';
    }

    document.querySelector("#exib").textContent = descricao;

    
});

