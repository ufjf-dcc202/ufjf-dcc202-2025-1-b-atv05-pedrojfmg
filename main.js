    const eH1 = document.querySelector("h1");
    eH1.textContent = "Ola Mundo!";

    const eTabuleiro = criaTabuleiro();
    document.body.append(eTabuleiro);
    
    function criaDisco(){
        const novoDisco = document.createElement("Div");
        novoDisco.classList.add("disco");
        return novoDisco;
    }

    for(let i=0; i < 7; i++){
        const eDisco = criaDisco();
        eTabuleiro.append(eDisco);
    }

    function criaTabuleiro(){
        const novoTabuleiro = document.createElement("Div");
        novoTabuleiro.classList.add("tabuleiro");
        return novoTabuleiro;
    }

    

    
    