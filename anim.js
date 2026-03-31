// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Años sin poder romper, Esta soledad en mí ", time: 10 },
  { text: "La supiste deshacer Y ayudarme a revivir", time: 21 },
  { text: "Tus besos me cambian de estación ", time: 33 },
  { text: "Al fin llegaste tú, al fin llegó tu luz salvándome de mí.", time: 45 },
  { text: "Te doy mi corazón, te entrego mi amor, al fin estás aquí hoy", time: 56 },
  { text: "Los fantasma en mi ser ya no están, puedo avanzar", time: 77 },
  { text: "Las estrellas en tu piel son mi guía si estoy mal", time: 89 },
  { text: "Contigo,no importa la estación ", time: 100 },
  { text: "Al fin llegaste tú, al fin llegó tu luz salvándome de mí", time: 112 },
  { text: "Te doy mi corazón, te entrego mi amor. Al fin estás aquí", time: 123},
  { text: "Al fin llegaste tú, al fin llegó tu luz salvándome de mí", time: 134 },
  { text: "Te doy mi corazón te entrego mi amor", time: 145 },
  { text: "Al fin estás aquí.", time: 151 },
  { text: "Te amo mucho mi amor, gracias por este tiempo juntos y lo que nos falta", time: 157 },
  { text: "Gracias por preocuparte y por motivarme a vivir cada día, me encantas", time: 167 },
  { text: "Al fin llegaste tú Al fin estás aquí", time: 178 },
  ]
// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 8.5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 10 segundos (100000 milisegundos)
setTimeout(ocultarTitulo, 10000);