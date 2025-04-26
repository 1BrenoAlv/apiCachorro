async function trocarImagem() { //chamo uma função chamada trocarImagem 'async' é comuns quando tem API
    try { // possiveis erros usamos try/catch junto com o async
        const resposta = await fetch('https://dog.ceo/api/breeds/image/random'); //await espera a resposta para continuar emações externas para API
        const dados = await resposta.json(); // .json arquivo json que serve para armazenar dados e trocar fetch pega infor
        const img = document.getElementById('dogImagem');
        img.src = dados.message;
        img.style.display = 'block';
    } catch (erro) {
        console.error("Erro ao carregar imagem:", erro);
    }
}