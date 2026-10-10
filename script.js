

let number = 0;
    let cron = null;
    let isRunning = false;
    let h1 = document.querySelector("h1");

    function start() {
        if (isRunning) return;
        isRunning = true;

        cron = setInterval(function () {
            number++;

            let horas = Math.floor(number / 3600);
            let minutos = Math.floor((number % 3600) / 60);
            let segundos = number % 60;

            let formato;
            if (horas > 0) {
            
                formato = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
            } else {
            
                formato = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
            }

            h1.innerHTML = formato;

        }, 1000);
    }

    function stop() {
        clearInterval(cron);
        isRunning = false;
    }

    function reset() {
        clearInterval(cron);
        isRunning = false;
        number = 0;
        h1.innerHTML = '00:00';
    }

    /* 
    
    setTimeout --> executa uma vez
    setIntervel --> executa infinitas vezes
    clearInterval --> vai pausar o setInterval
    
    */

    


    /*
    
    setTimeout(function() {
        alert("Executei")
    }, 5000); // 1000 milesegundos => 1 segundo
    
    */