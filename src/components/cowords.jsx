
export default function Cowords() {
  function contar() {
    var texto = document.getElementById("texto").value;

    var cantidadCaracteres = texto.length;
    var cantidadCaracteresSinEspacios = texto.replace(/\s/g, "").length;

    var palabras = texto.match(/\b\w+\b/g);
    var cantidadPalabras = palabras ? palabras.length : 0;

    var cantidadParrafos = texto.split("\n\n").length;

    var cantidadOraciones = texto.split(/[.!?]+/).length - 1;

    var cantidadPalabrasLargas = 0;

    var cantidadSyllables = 0;

    var palabrasRepetidas = {};
    for (var i = 0; i < palabras.length; i++) {
      var palabra = palabras[i];
      if (palabra in palabrasRepetidas) {
        palabrasRepetidas[palabra]++;
      } else {
        palabrasRepetidas[palabra] = 1;
      }
    if (palabra.length >= 7) { // Palabras de 7 o más letras se consideran largas
              cantidadPalabrasLargas++;
            }
    }
    var palabrasRepetidasDosVeces = {};
    for (var palabra in palabrasRepetidas) {
      if (palabrasRepetidas[palabra] >= 2) {
        palabrasRepetidasDosVeces[palabra] = palabrasRepetidas[palabra];
      }
    }
    var listaPalabrasRepetidas = "";
    for (var palabra in palabrasRepetidasDosVeces) {
      listaPalabrasRepetidas += "[ " + "<span class=\"text-green-400\">" + palabra + "</span>" + " : " + "<span class=\"text-[#b0b0b0]\">" + palabrasRepetidasDosVeces[palabra] + " veces\n " + "</span>" + " ] ";
    }

    var tiempoLecturaMinutos = Math.ceil(cantidadPalabras / 200);
    var porcentajePalabrasLargas = (cantidadPalabrasLargas / cantidadPalabras) * 100;

    for (var i = 0; i < palabras.length; i++) {
      cantidadSyllables += contarSyllables(palabras[i]);
    }

    // Calcular la legibilidad utilizando la fórmula de Flesch-Kincaid
    var legibilidad = 206.835 - 1.015 * (cantidadPalabras / cantidadOraciones) - 84.6 * (cantidadSyllables / cantidadPalabras);
    
    document.getElementById("legibilidad").innerHTML =  legibilidad.toFixed(2);

    document.getElementById("cantidad-palabras").textContent =
      cantidadPalabras;
    document.getElementById("cantidad-caracteres-con-espacios").textContent =
      cantidadCaracteres;
    document.getElementById("cantidad-caracteres-sin-espacios").textContent =
      cantidadCaracteresSinEspacios;
    document.getElementById("cantidad-parrafos").textContent =
      cantidadParrafos;
    document.getElementById("cantidad-oraciones").textContent =
      cantidadOraciones;
    document.getElementById("palabras-repetidas").innerHTML = listaPalabrasRepetidas;
    document.getElementById("tiempo-lectura").textContent =
      tiempoLecturaMinutos + " minutos";
    document.getElementById("palabras-largas").textContent =
    porcentajePalabrasLargas.toFixed(2) + "%";
  }
  function contarSyllables(palabra) {
    palabra = palabra.toLowerCase();
    if (palabra.length <= 3) { return 1; }
    palabra = palabra.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    palabra = palabra.replace(/^y/, '');
    return palabra.match(/[aeiouy]{1,2}/g).length;
  }

  function delete_fields(){
    document.getElementById("legibilidad").innerHTML =  ""
    document.getElementById("texto").value =  ""
    document.getElementById("cantidad-palabras").textContent = ""
    document.getElementById("cantidad-caracteres-con-espacios").textContent = ""
    document.getElementById("cantidad-caracteres-sin-espacios").textContent = ""
    document.getElementById("cantidad-parrafos").textContent = ""
    document.getElementById("cantidad-oraciones").textContent = ""
    document.getElementById("palabras-repetidas").textContent = ""
    document.getElementById("tiempo-lectura").textContent = ""
    document.getElementById("palabras-largas").textContent = ""
  }

return (
<div>
  <section class="px-8 max-[661]:px-2 w-vw min-h-vh flex justify-center items-start py-6">
			<div class="w-full flex justify-center items-start max-xl:flex-col">
				<div class="w-full flex justify-center items-start flex-col max-xl:items-center">
					<textarea id="texto" onInput={contar} class="bg-[#1f222b] resize-y w-full p-5 theme-toggle rounded-xl h-96 border text-white shadow-xl focus:outline-none focus:border-[#ffc212] focus:ring-[#ffc212]focus:ring-1" placeholder="Ingresa el texto aquí"></textarea>
					<button id="delete" onClick={delete_fields} class="my-3 p-3 bg-[#DC453A] w-full rounded-full text-lg hover:bg-[#E2645B] text-white">Limpiar<i class="fa-regular fa-trash-can mx-2"></i></button>
				</div>

				<div class="w-full px-6">
				<ul class="flex flex-wrap max-lg:justify-center">
					<li class=" w-auto m-2 p-2 bg-[#1f222b] flex flex-col max-w-6xl overflow-hidden bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-lg shadow-2xl text-white">
						<span class="border-b border-zinc-500 py-2 px-4 text-center ">Cantidad de palabras </span> 
						<span class="py-3 px-2 text-center text-lg" id="cantidad-palabras"></span>
					</li>
					<li class=" w-auto m-2 p-2 bg-[#1f222b] flex flex-col max-w-6xl overflow-hidden bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-lg shadow-2xl text-white">
						<span class="border-b border-zinc-500 py-2 px-4 text-center ">Cantidad de caracteres (con espacios) </span> 
						<span class="py-3 px-2 text-center text-lg" id="cantidad-caracteres-con-espacios"></span>
					</li>
					<li class=" w-auto m-2 p-2 bg-[#1f222b] flex flex-col max-w-6xl overflow-hidden bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-lg shadow-2xl text-white">
						<span class="border-b border-zinc-500 py-2 px-4 text-center ">Cantidad de caracteres (sin espacios) </span> 
						<span class="py-3 px-2 text-center text-lg" id="cantidad-caracteres-sin-espacios"></span>
					</li>
					<li class=" w-auto m-2 p-2 bg-[#1f222b] flex flex-col max-w-6xl overflow-hidden bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-lg shadow-2xl text-white">
						<span class="border-b border-zinc-500 py-2 px-4 text-center ">Cantidad de párrafos </span> 
						<span class="py-3 px-2 text-center text-lg" id="cantidad-parrafos"></span>
					</li>
					<li class=" w-auto m-2 p-2 bg-[#1f222b] flex flex-col max-w-6xl overflow-hidden bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-lg shadow-2xl text-white">
						<span class="border-b border-zinc-500 py-2 px-4 text-center ">Cantidad de oraciones </span> 
						<span class="py-3 px-2 text-center text-lg" id="cantidad-oraciones"></span>
					</li>
					<li class=" w-auto m-2 p-2 bg-[#1f222b] flex flex-col max-w-6xl overflow-hidden bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-lg shadow-2xl text-white">
						<span class="border-b border-zinc-500 py-2 px-4 text-center ">Tiempo de lectura estimado </span> 
						<span class="py-3 px-2 text-center text-lg" id="tiempo-lectura"></span>
					</li>
					<li class=" w-auto m-2 p-2 bg-[#1f222b] flex flex-col max-w-6xl overflow-hidden bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-lg shadow-2xl text-white">
						<span class="border-b border-zinc-500 py-2 px-4 text-center ">Porcentaje de palabras largas (7 letras o más) </span> 
						<span class="py-3 px-2 text-center text-lg" id="palabras-largas"></span>
					</li>
					<li class=" w-auto m-2 p-2 bg-[#1f222b] flex flex-col max-w-6xl overflow-hidden bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-lg shadow-2xl text-white">
						<span class="border-b border-zinc-500 py-2 px-4 text-center ">Nivel de legibilidad </span> 
						<span class="py-3 px-2 text-center text-lg" id="legibilidad"></span>
					</li>
					<li class=" w-full m-2 p-2 bg-[#1f222b] flex flex-col rounded-lg text-white">
						<span class="border-b border-zinc-500 py-2 px-4 text-center text-white">Palabras repetidas: </span> 
					<div id="palabras-repetidas" class="p-5 bg-[#1f222b] rounded-xl text-white" aria-placeholder="Palabras repetidas"></div>
					</li>
				</ul>
				</div>
			</div>
		</section>
</div>
)
}
