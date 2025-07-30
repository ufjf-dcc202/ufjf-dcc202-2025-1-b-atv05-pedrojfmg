    const eH1 = document.querySelector("h1");
    eH1.textContent = "Ola Mundo!";

    const eTabuleiro = criaTabuleiro();
    document.body.append(eTabuleiro);
    
    for(let i=0; i < 7; i++){
        const eDisco = criaDisco();
        eTabuleiro.append(eDisco);

        if(i < 3){
            eDisco.dataset.cor = "branco";
        } else if (i > 3){
            eDisco.dataset.cor = "preto";
        } else {
            eDisco.dataset.cor = "transparente";
        }
    }
    
    function criaDisco(){
        const novoDisco = document.createElement("Div");
        novoDisco.classList.add("disco");
        return novoDisco;
    }

    

    function criaTabuleiro(){
        const novoTabuleiro = document.createElement("Div");
        novoTabuleiro.classList.add("tabuleiro");
        return novoTabuleiro;
    }

    

    
    