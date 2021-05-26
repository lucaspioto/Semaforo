function meuEscopo() {

	const semaforo = document.querySelector('.semaforo');
	

	function semaforoVerde() {
		tudoDesligado()
		semaforo.classList.remove('verdeDesligado');
		semaforo.classList.add('verdeLigado');
		count = 15;
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
		count = 10;
	}


	function estagios(estagio = 1) {

		switch (estagio) {

			case 1:

				semaforoVerde();

				setTimeout(() => {
					estagios(estagio = 2);
				}, 10000);
				clearTimeout();
				break;

			case 2:

				semaforoNaranja();

				setTimeout(() => {
					estagios(estagio = 3);
				}, 5000);
				clearTimeout();
				break;

			case 3:

				semaforoRojo();

				setTimeout(() => {
					estagios(estagio = 1);
				}, 10000);
				clearTimeout();
				break;

		}

		
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

var count = new Number();

function startCountdown() {
	if ((count - 1) >= 0) {
		count = count - 1;
		container.innerText = count;
		setTimeout('startCountdown()', 1000);
	}
}

meuEscopo();