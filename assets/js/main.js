// (function(){
//     const horas = 0;
//     const minutos = 0;
//     const segundos = 0;
//     const horario = {
//         segundos: segundos,
//         minutos: minutos,
//         horas: horas
//     }
//     const timer = document.querySelector(".timer");
//     timer.innerHTML = `0${horas}:0${minutos}:0${segundos}`;

//     const iniciar = document.querySelector(".iniciar");
//     const pausar = document.querySelector(".pausar");
//     const zerar = document.querySelector(".zerar");
//     let intervalID;
//     iniciar.addEventListener("click", () =>{
//         intervalID = setInterval(mudarHora, 1000, horario, timer);
//     });

//     function mudarHora(horario, timer){
//         horario.segundos = horario.segundos + 1;
//         if(horario.segundos === 60){
//             horario.segundos = 0;
//             horario.minutos = horario.minutos + 1;
//         }
//         if(horario.minutos === 60)
//             {
//                 horario.minutos = 0;
//                 horario.hora = horario.hora + 1;
//             }
//             let segundosFormatada = horario.segundos < 10 ? `0${horario.segundos}` : horario.segundos;
//             let minutosFormatada = horario.minutos < 10 ? `0${horario.minutos}` : horario.minutos;
//             let horaFormatada = horario.horas < 10 ? `0${horario.horas}` : horario.horas;
//             timer.innerHTML =  `${horaFormatada}:${minutosFormatada}:${segundosFormatada}`;
//             console.log(`${horaFormatada}:${minutosFormatada}:${segundosFormatada}`);
//     }


//     pausar.addEventListener("click", () => {
//         clearInterval(intervalID);
//     });

//     zerar.addEventListener("click", () => {
//         clearInterval(intervalID);
//         horario.horas = 0;
//         horario.minutos = 0;
//         horario.segundos = 0;
//         let segundosFormatada = horario.segundos < 10 ? `0${horario.segundos}` : horario.segundos;
//         let minutosFormatada = horario.minutos < 10 ? `0${horario.minutos}` : horario.minutos;
//         let horaFormatada = horario.horas < 10 ? `0${horario.horas}` : horario.horas;
//         timer.innerHTML =  `${horaFormatada}:${minutosFormatada}:${segundosFormatada}`;

//     })
    
// })();


(function(){
    const timer = document.querySelector(".timer");
    const iniciar = document.querySelector(".iniciar");
    const pausar = document.querySelector(".pausar");
    const zerar = document.querySelector(".zerar");

    let hora = 23;
    let minuto = 59;
    let segundo = 50;
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