function escopo () { 
    const form = document.querySelector('.form'); //Selecionar a classe 


    const pessoas = []
    function recebeEventoForm (event) { 
        event.preventDefault(); //não deixa a págia dar reload
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');


        pessoas.push({ 
            nome:nome.value,
            sobrenome: sobrenome.Value, 
            idade: idade.value, 
            peso: peso.value, 
            altura: altura.value,
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${idade.value}
        ${peso.value} ${altura.value} </p>`
    }

    form.addEventListener('submit', recebeEventoForm);

}

escopo();