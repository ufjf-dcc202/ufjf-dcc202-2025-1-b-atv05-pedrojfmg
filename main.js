    const eH1 = document.querySelector("h1");
    eH1.textContent = "Ola Mundo!";

    const eTabuleiro = criaTabuleiro();
    document.body.append(eTabuleiro);
    

    function criaTabuleiro(){
        const novoTabuleiro = document.createElement("Div");
        novoTabuleiro.classList.add("tabuleiro");
        return novoTabuleiro;
    }