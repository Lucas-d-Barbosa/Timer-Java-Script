(function(){
    const timer = document.querySelector(".timer");
    const iniciar = document.querySelector(".iniciar");
    const pausar = document.querySelector(".pausar");
    const zerar = document.querySelector(".zerar");

    let hora = 0;
    let minuto = 0;
    let segundo = 0;
    let intervalID = null;
        
    formatarHorario();
    iniciar.addEventListener("click", e => {
        e.preventDefault();
        timer.classList.remove("timer-pause");
        if(hora === 24){
            hora = 0;
        }
        if(intervalID === null)
            intervalID = setInterval(iniciarCronometro, 1000);
    })


    pausar.addEventListener("click", e => {
        e.preventDefault();
        clearInterval(intervalID);
        intervalID = null;
        timer.classList.add("timer-pause");
    });

    zerar.addEventListener("click", e => {
        hora = 0;
        minuto = 0;
        segundo = 0;
        clearInterval(intervalID);
        formatarHorario();
    });
    
    function iniciarCronometro()
    {
      segundo += 1;
      if(segundo === 60)
      {
        minuto += 1;
        segundo = 0;
      }
      if(minuto === 60)
      {
        hora += 1;
        minuto = 0;
      }
      if(hora === 24)
      {
        clearInterval(intervalID);
        intervalID = null;
        timer.classList.add("timer-pause");
      }
      
      formatarHorario();
    }

    function formatarHorario()
    {
        const horaFormatada = hora.toString().padStart(2, "0");
        const minutoFormatado = minuto.toString().padStart(2, "0");
        const segundoFormatado = segundo.toString().padStart(2, "0");
        timer.innerHTML = `${horaFormatada}:${minutoFormatado}:${segundoFormatado}`;
    }

})();