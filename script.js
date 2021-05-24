function meuEscopo() {

    const semaforo = document.querySelector('.semaforo');
    let timeSet = "";

    function semaforoVerde() {
        tudoDesligado()
        semaforo.classList.remove('verdeDesligado');
        semaforo.classList.add('verdeLigado');
    }

    function semaforoNaranja() {
        tudoDesligado()
        semaforo.classList.remove('naranjaDesligado');
        semaforo.classList.add('naranjaLigado');
    }

    function semaforoRojo() {
        tudoDesligado()
        semaforo.classList.remove('rojoDesligado');
        semaforo.classList.add('rojoLigado');
    }


    function estagios(estagio = 1) {

        switch (estagio) {

            case 1:

                semaforoVerde();

                setTimeout(() => {
                    estagios(estagio = 2);
                }, 10000);
                clearTimeout(timeSet);
                break;

            case 2:

                semaforoNaranja();

                setTimeout(() => {
                    estagios(estagio = 3);
                }, 5000);
                clearTimeout(timeSet);
                break;

            case 3:

                semaforoRojo();

                setTimeout(() => {
                    estagios(estagio = 1);
                }, 10000);
                clearTimeout(timeSet);
                break;

        }

        function iniciaTime(tempo = 0) {
        
            if (estagio = 1) {
    
                if (tempo = 0) {
                    tempo = 10;
                }
    
            }
    
            if (estagio = 3 && tempo == 0) {
                tempo = 20;
            }
    
            if (tempo >= 0) {
                tempo--;
            }
    
            document.getElementById('container-1').innerHTML = tempo;
        }
        
        
        timeSet = setTimeout(iniciaTime(), 1000);
    }
    estagios();


    function tudoDesligado() {
        semaforo.classList.add('naranjaDesligado');
        semaforo.classList.add('verdeDesligado');
        semaforo.classList.add('rojoDesligado');
        semaforo.classList.remove('rojoLigado');
        semaforo.classList.remove('verdeLigado');
        semaforo.classList.remove('naranjaLigado');
    }

   


}

meuEscopo();