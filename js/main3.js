class persona {
  constructor(edad, nombreApellido, pesos,divix, resultado) {
    this.edad = document.getElementById("edad").value;
    this.nombreApellido = document.getElementById("nombreApellido").value;
    this.pesos = document.getElementById("pesos").value;
    this.resultado = 0;
  }
}



const URLGET = "https://v6.exchangerate-api.com/v6/e31ecd28a15c6faf7283627d/latest/USD";
const moneda = [];
$.get(
  URLGET,
  (dolar = (respuesta, estado) => {
    if (estado === "success") {
      let misDatos = respuesta;
      moneda.push(misDatos.conversion_rates.ARS);
      moneda.push(misDatos.conversion_rates.EUR)
      moneda.push(misDatos.conversion_rates.BRL)

      const diviza = [];
      console.log(misDatos.conversion_rates)
      diviza.push(misDatos.conversion_rates)
      
      Object.entries(diviza[0]).forEach(([key, value]) => {
        $("#select").append(`<option id="option" value="${value}">${key}</option>`)
        $("#selec").append(`<option id="option" value="${value}">${key}</option>`)

      });
     
      $("#valRef").append(`<p class="ref"> Dolar Oficial: ${misDatos.conversion_rates.ARS} </p>`);
      $("#valRef").append(`<p class="ref"> EURO: ${moneda[0]/moneda[1]} </p>`);
      $("#valRef").append(`<p class="ref"> REAL: ${(moneda[0]*moneda[1])/moneda[2]} </p>`);
    }
  })
);




// COTIRZAR
const cotizar = () => {
  const persona1 = new persona(edad, nombreApellido, pesos, resultado);

  let valorDiviza = document.getElementById("select").value
  let nombreDiviza = document.getElementById('select').options[document.getElementById('select').selectedIndex].text;
console.log(nombreDiviza)
  persona1.resultado = (persona1.pesos / moneda[0])*valorDiviza;
  if (
    persona1.edad >= 18 &&
    persona1.nombreApellido.length >= 3 &&
    persona1.pesos != 0
  ) {
    cotizaciones.push(persona1);
    $("#resultado").text(`${persona1.resultado}`);
    apareceResultado();

    localStorage.setItem("cotizantes", JSON.stringify(cotizaciones));

    $("#listado").prepend(
      `<li class=""><b>${persona1.nombreApellido}</b> la cotizacion fue de <b>${persona1.resultado} ${nombreDiviza}</b></li>`
    );
  } if (persona1.edad == 0 || persona1.edad < 18) {
    $("#edad").css("background-color", "red");
  } else {
    $("#edad").css("background-color", "white");
  }
  if (persona1.nombreApellido == "") {
    $("#nombreApellido").css("background-color", "red");
  } else {
    $("#nombreApellido").css("background-color", "white");
  }
  if (persona1.pesos == 0) {
    $("#pesos").css("background-color", "red");
  } else {
    $("#pesos").css("background-color", "white");
  }
};

$("#btnCotizar").click(cotizar);

// COTIZAR DOLAR

const cotizarDolar = () => {
  const persona1 = new persona(edad, nombreApellido, pesos, resultado);
  const EURO = 1000;
  persona1.resultado = (persona1.pesos/moneda[0]).toFixed(2);
  if (
    persona1.edad >= 18 &&
    persona1.nombreApellido.length >= 3 &&
    persona1.pesos != 0
  ) {
    $("#edad").css("background-color", "white");
    $("#nombreApellido").css("background-color", "white");
    $("#pesos").css("background-color", "white");

    cotizaciones.push(persona1);
    $("#resultado").text(`${persona1.resultado}`);

    apareceResultado();

    sessionStorage.setItem("cotizantes", JSON.stringify(cotizaciones));

    $("#listado").prepend(
      `<li class=""><b>${persona1.nombreApellido}</b> la cotizacion fue de <b>${persona1.resultado}</b>  DOLARES</li>`
    );
  }
  if (persona1.edad == 0 || persona1.edad < 18) {
    $("#edad").css("background-color", "red");
  } else {
    $("#edad").css("background-color", "white");
  }
  if (persona1.nombreApellido == "") {
    $("#nombreApellido").css("background-color", "red");
  } else {
    $("#nombreApellido").css("background-color", "white");
  }
  if (persona1.pesos == 0) {
    $("#pesos").css("background-color", "red");
  } else {
    $("#pesos").css("background-color", "white");
  }
};



$("#btnDolar").click(cotizarDolar);



// COTIZAR EURO

const cotizarEuro = () => {
  const persona1 = new persona(edad, nombreApellido, pesos, resultado);
  const EURO = 1000;
  persona1.resultado = (persona1.pesos/moneda[0])*moneda[1];
  if (
    persona1.edad >= 18 &&
    persona1.nombreApellido.length >= 3 &&
    persona1.pesos != 0
  ) {
    $("#edad").css("background-color", "white");
    $("#nombreApellido").css("background-color", "white");
    $("#pesos").css("background-color", "white");

    cotizaciones.push(persona1);
    $("#resultado").text(`${persona1.resultado}`);

    apareceResultado();

    localStorage.setItem("cotizantes", JSON.stringify(cotizaciones));
    

    $("#listado").prepend(
      `<li class=""><b>${persona1.nombreApellido}</b> la cotizacion fue de <b>${persona1.resultado}</b> EUROS</li>`
    );
  }
  if (persona1.edad == 0 || persona1.edad < 18) {
    $("#edad").css("background-color", "red");
  } else {
    $("#edad").css("background-color", "white");
  }
  if (persona1.nombreApellido == "") {
    $("#nombreApellido").css("background-color", "red");
  } else {
    $("#nombreApellido").css("background-color", "white");
  }
  if (persona1.pesos == 0) {
    $("#pesos").css("background-color", "red");
  } else {
    $("#pesos").css("background-color", "white");
  }
};



$("#btnEuro").click(cotizarEuro);



const apareceResultado = () => {
  $("#resultado").hide()
  

  $("#resultado").fadeIn(3000).css("display", "flex");
};



$("#mostrar").click(mostrarListado = () => {
  $("#listado").toggle();
})

const cotizaciones = [];


// const mostrarValor = () => {
//   let valor = $("#selec").value

//   // let valorReal = (valor/moneda[0])*valor
//   // $("#consultar").append(`<p>${valorReal}</p>`)
//   console.log(parseInt(valor))
// }

// $("#consultare").click(mostrarValor)


