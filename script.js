/* =========================================================
   CHEMIX
   LÓGICA PRINCIPAL
========================================================= */


/* =========================================================
   ELEMENTOS
========================================================= */

const elementos = [

    { numero:1, simbolo:"H", nombre:"Hidrógeno", periodo:1, grupo:1, categoria:"no-metal" },
    { numero:2, simbolo:"He", nombre:"Helio", periodo:1, grupo:18, categoria:"gas-noble" },
    { numero:3, simbolo:"Li", nombre:"Litio", periodo:2, grupo:1, categoria:"alcalino" },
    { numero:4, simbolo:"Be", nombre:"Berilio", periodo:2, grupo:2, categoria:"alcalinoterreo" },
    { numero:5, simbolo:"B", nombre:"Boro", periodo:2, grupo:13, categoria:"metaloide" },
    { numero:6, simbolo:"C", nombre:"Carbono", periodo:2, grupo:14, categoria:"no-metal" },
    { numero:7, simbolo:"N", nombre:"Nitrógeno", periodo:2, grupo:15, categoria:"no-metal" },
    { numero:8, simbolo:"O", nombre:"Oxígeno", periodo:2, grupo:16, categoria:"no-metal" },
    { numero:9, simbolo:"F", nombre:"Flúor", periodo:2, grupo:17, categoria:"halogeno" },
    { numero:10, simbolo:"Ne", nombre:"Neón", periodo:2, grupo:18, categoria:"gas-noble" },

    { numero:11, simbolo:"Na", nombre:"Sodio", periodo:3, grupo:1, categoria:"alcalino" },
    { numero:12, simbolo:"Mg", nombre:"Magnesio", periodo:3, grupo:2, categoria:"alcalinoterreo" },
    { numero:13, simbolo:"Al", nombre:"Aluminio", periodo:3, grupo:13, categoria:"post-transicion" },
    { numero:14, simbolo:"Si", nombre:"Silicio", periodo:3, grupo:14, categoria:"metaloide" },
    { numero:15, simbolo:"P", nombre:"Fósforo", periodo:3, grupo:15, categoria:"no-metal" },
    { numero:16, simbolo:"S", nombre:"Azufre", periodo:3, grupo:16, categoria:"no-metal" },
    { numero:17, simbolo:"Cl", nombre:"Cloro", periodo:3, grupo:17, categoria:"halogeno" },
    { numero:18, simbolo:"Ar", nombre:"Argón", periodo:3, grupo:18, categoria:"gas-noble" },

    { numero:19, simbolo:"K", nombre:"Potasio", periodo:4, grupo:1, categoria:"alcalino" },
    { numero:20, simbolo:"Ca", nombre:"Calcio", periodo:4, grupo:2, categoria:"alcalinoterreo" },
    { numero:21, simbolo:"Sc", nombre:"Escandio", periodo:4, grupo:3, categoria:"transicion" },
    { numero:22, simbolo:"Ti", nombre:"Titanio", periodo:4, grupo:4, categoria:"transicion" },
    { numero:23, simbolo:"V", nombre:"Vanadio", periodo:4, grupo:5, categoria:"transicion" },
    { numero:24, simbolo:"Cr", nombre:"Cromo", periodo:4, grupo:6, categoria:"transicion" },
    { numero:25, simbolo:"Mn", nombre:"Manganeso", periodo:4, grupo:7, categoria:"transicion" },
    { numero:26, simbolo:"Fe", nombre:"Hierro", periodo:4, grupo:8, categoria:"transicion" },
    { numero:27, simbolo:"Co", nombre:"Cobalto", periodo:4, grupo:9, categoria:"transicion" },
    { numero:28, simbolo:"Ni", nombre:"Níquel", periodo:4, grupo:10, categoria:"transicion" },
    { numero:29, simbolo:"Cu", nombre:"Cobre", periodo:4, grupo:11, categoria:"transicion" },
    { numero:30, simbolo:"Zn", nombre:"Zinc", periodo:4, grupo:12, categoria:"transicion" },
    { numero:31, simbolo:"Ga", nombre:"Galio", periodo:4, grupo:13, categoria:"post-transicion" },
    { numero:32, simbolo:"Ge", nombre:"Germanio", periodo:4, grupo:14, categoria:"metaloide" },
    { numero:33, simbolo:"As", nombre:"Arsénico", periodo:4, grupo:15, categoria:"metaloide" },
    { numero:34, simbolo:"Se", nombre:"Selenio", periodo:4, grupo:16, categoria:"no-metal" },
    { numero:35, simbolo:"Br", nombre:"Bromo", periodo:4, grupo:17, categoria:"halogeno" },
    { numero:36, simbolo:"Kr", nombre:"Kriptón", periodo:4, grupo:18, categoria:"gas-noble" },

    { numero:37, simbolo:"Rb", nombre:"Rubidio", periodo:5, grupo:1, categoria:"alcalino" },
    { numero:38, simbolo:"Sr", nombre:"Estroncio", periodo:5, grupo:2, categoria:"alcalinoterreo" },
    { numero:39, simbolo:"Y", nombre:"Itrio", periodo:5, grupo:3, categoria:"transicion" },
    { numero:40, simbolo:"Zr", nombre:"Circonio", periodo:5, grupo:4, categoria:"transicion" },
    { numero:41, simbolo:"Nb", nombre:"Niobio", periodo:5, grupo:5, categoria:"transicion" },
    { numero:42, simbolo:"Mo", nombre:"Molibdeno", periodo:5, grupo:6, categoria:"transicion" },
    { numero:43, simbolo:"Tc", nombre:"Tecnecio", periodo:5, grupo:7, categoria:"transicion" },
    { numero:44, simbolo:"Ru", nombre:"Rutenio", periodo:5, grupo:8, categoria:"transicion" },
    { numero:45, simbolo:"Rh", nombre:"Rodio", periodo:5, grupo:9, categoria:"transicion" },
    { numero:46, simbolo:"Pd", nombre:"Paladio", periodo:5, grupo:10, categoria:"transicion" },
    { numero:47, simbolo:"Ag", nombre:"Plata", periodo:5, grupo:11, categoria:"transicion" },
    { numero:48, simbolo:"Cd", nombre:"Cadmio", periodo:5, grupo:12, categoria:"transicion" },
    { numero:49, simbolo:"In", nombre:"Indio", periodo:5, grupo:13, categoria:"post-transicion" },
    { numero:50, simbolo:"Sn", nombre:"Estaño", periodo:5, grupo:14, categoria:"post-transicion" },
    { numero:51, simbolo:"Sb", nombre:"Antimonio", periodo:5, grupo:15, categoria:"metaloide" },
    { numero:52, simbolo:"Te", nombre:"Telurio", periodo:5, grupo:16, categoria:"metaloide" },
    { numero:53, simbolo:"I", nombre:"Yodo", periodo:5, grupo:17, categoria:"halogeno" },
    { numero:54, simbolo:"Xe", nombre:"Xenón", periodo:5, grupo:18, categoria:"gas-noble" },

    { numero:55, simbolo:"Cs", nombre:"Cesio", periodo:6, grupo:1, categoria:"alcalino" },
    { numero:56, simbolo:"Ba", nombre:"Bario", periodo:6, grupo:2, categoria:"alcalinoterreo" },

    { numero:57, simbolo:"La", nombre:"Lantano", periodo:8, grupo:4, categoria:"lantanido" },
    { numero:58, simbolo:"Ce", nombre:"Cerio", periodo:8, grupo:5, categoria:"lantanido" },
    { numero:59, simbolo:"Pr", nombre:"Praseodimio", periodo:8, grupo:6, categoria:"lantanido" },
    { numero:60, simbolo:"Nd", nombre:"Neodimio", periodo:8, grupo:7, categoria:"lantanido" },
    { numero:61, simbolo:"Pm", nombre:"Prometio", periodo:8, grupo:8, categoria:"lantanido" },
    { numero:62, simbolo:"Sm", nombre:"Samario", periodo:8, grupo:9, categoria:"lantanido" },
    { numero:63, simbolo:"Eu", nombre:"Europio", periodo:8, grupo:10, categoria:"lantanido" },
    { numero:64, simbolo:"Gd", nombre:"Gadolinio", periodo:8, grupo:11, categoria:"lantanido" },
    { numero:65, simbolo:"Tb", nombre:"Terbio", periodo:8, grupo:12, categoria:"lantanido" },
    { numero:66, simbolo:"Dy", nombre:"Disprosio", periodo:8, grupo:13, categoria:"lantanido" },
    { numero:67, simbolo:"Ho", nombre:"Holmio", periodo:8, grupo:14, categoria:"lantanido" },
    { numero:68, simbolo:"Er", nombre:"Erbio", periodo:8, grupo:15, categoria:"lantanido" },
    { numero:69, simbolo:"Tm", nombre:"Tulio", periodo:8, grupo:16, categoria:"lantanido" },
    { numero:70, simbolo:"Yb", nombre:"Iterbio", periodo:8, grupo:17, categoria:"lantanido" },
    { numero:71, simbolo:"Lu", nombre:"Lutecio", periodo:8, grupo:18, categoria:"lantanido" },

    { numero:72, simbolo:"Hf", nombre:"Hafnio", periodo:6, grupo:4, categoria:"transicion" },
    { numero:73, simbolo:"Ta", nombre:"Tantalio", periodo:6, grupo:5, categoria:"transicion" },
    { numero:74, simbolo:"W", nombre:"Wolframio", periodo:6, grupo:6, categoria:"transicion" },
    { numero:75, simbolo:"Re", nombre:"Renio", periodo:6, grupo:7, categoria:"transicion" },
    { numero:76, simbolo:"Os", nombre:"Osmio", periodo:6, grupo:8, categoria:"transicion" },
    { numero:77, simbolo:"Ir", nombre:"Iridio", periodo:6, grupo:9, categoria:"transicion" },
    { numero:78, simbolo:"Pt", nombre:"Platino", periodo:6, grupo:10, categoria:"transicion" },
    { numero:79, simbolo:"Au", nombre:"Oro", periodo:6, grupo:11, categoria:"transicion" },
    { numero:80, simbolo:"Hg", nombre:"Mercurio", periodo:6, grupo:12, categoria:"transicion" },
    { numero:81, simbolo:"Tl", nombre:"Talio", periodo:6, grupo:13, categoria:"post-transicion" },
    { numero:82, simbolo:"Pb", nombre:"Plomo", periodo:6, grupo:14, categoria:"post-transicion" },
    { numero:83, simbolo:"Bi", nombre:"Bismuto", periodo:6, grupo:15, categoria:"post-transicion" },
    { numero:84, simbolo:"Po", nombre:"Polonio", periodo:6, grupo:16, categoria:"post-transicion" },
    { numero:85, simbolo:"At", nombre:"Astato", periodo:6, grupo:17, categoria:"halogeno" },
    { numero:86, simbolo:"Rn", nombre:"Radón", periodo:6, grupo:18, categoria:"gas-noble" },

    { numero:87, simbolo:"Fr", nombre:"Francio", periodo:7, grupo:1, categoria:"alcalino" },
    { numero:88, simbolo:"Ra", nombre:"Radio", periodo:7, grupo:2, categoria:"alcalinoterreo" },

    { numero:89, simbolo:"Ac", nombre:"Actinio", periodo:9, grupo:4, categoria:"actinido" },
    { numero:90, simbolo:"Th", nombre:"Torio", periodo:9, grupo:5, categoria:"actinido" },
    { numero:91, simbolo:"Pa", nombre:"Protactinio", periodo:9, grupo:6, categoria:"actinido" },
    { numero:92, simbolo:"U", nombre:"Uranio", periodo:9, grupo:7, categoria:"actinido" },
    { numero:93, simbolo:"Np", nombre:"Neptunio", periodo:9, grupo:8, categoria:"actinido" },
    { numero:94, simbolo:"Pu", nombre:"Plutonio", periodo:9, grupo:9, categoria:"actinido" },
    { numero:95, simbolo:"Am", nombre:"Americio", periodo:9, grupo:10, categoria:"actinido" },
    { numero:96, simbolo:"Cm", nombre:"Curio", periodo:9, grupo:11, categoria:"actinido" },
    { numero:97, simbolo:"Bk", nombre:"Berkelio", periodo:9, grupo:12, categoria:"actinido" },
    { numero:98, simbolo:"Cf", nombre:"Californio", periodo:9, grupo:13, categoria:"actinido" },
    { numero:99, simbolo:"Es", nombre:"Einsteinio", periodo:9, grupo:14, categoria:"actinido" },
    { numero:100, simbolo:"Fm", nombre:"Fermio", periodo:9, grupo:15, categoria:"actinido" },
    { numero:101, simbolo:"Md", nombre:"Mendelevio", periodo:9, grupo:16, categoria:"actinido" },
    { numero:102, simbolo:"No", nombre:"Nobelio", periodo:9, grupo:17, categoria:"actinido" },
    { numero:103, simbolo:"Lr", nombre:"Lawrencio", periodo:9, grupo:18, categoria:"actinido" },

    { numero:104, simbolo:"Rf", nombre:"Rutherfordio", periodo:7, grupo:4, categoria:"transicion" },
    { numero:105, simbolo:"Db", nombre:"Dubnio", periodo:7, grupo:5, categoria:"transicion" },
    { numero:106, simbolo:"Sg", nombre:"Seaborgio", periodo:7, grupo:6, categoria:"transicion" },
    { numero:107, simbolo:"Bh", nombre:"Bohrio", periodo:7, grupo:7, categoria:"transicion" },
    { numero:108, simbolo:"Hs", nombre:"Hassio", periodo:7, grupo:8, categoria:"transicion" },
    { numero:109, simbolo:"Mt", nombre:"Meitnerio", periodo:7, grupo:9, categoria:"transicion" },
    { numero:110, simbolo:"Ds", nombre:"Darmstadtio", periodo:7, grupo:10, categoria:"transicion" },
    { numero:111, simbolo:"Rg", nombre:"Roentgenio", periodo:7, grupo:11, categoria:"transicion" },
    { numero:112, simbolo:"Cn", nombre:"Copernicio", periodo:7, grupo:12, categoria:"transicion" },
    { numero:113, simbolo:"Nh", nombre:"Nihonio", periodo:7, grupo:13, categoria:"post-transicion" },
    { numero:114, simbolo:"Fl", nombre:"Flerovio", periodo:7, grupo:14, categoria:"post-transicion" },
    { numero:115, simbolo:"Mc", nombre:"Moscovio", periodo:7, grupo:15, categoria:"post-transicion" },
    { numero:116, simbolo:"Lv", nombre:"Livermorio", periodo:7, grupo:16, categoria:"post-transicion" },
    { numero:117, simbolo:"Ts", nombre:"Teneso", periodo:7, grupo:17, categoria:"halogeno" },
    { numero:118, simbolo:"Og", nombre:"Oganesón", periodo:7, grupo:18, categoria:"gas-noble" }

];


/* =========================================================
   VARIABLES
========================================================= */

let seleccionados = [null, null];

let siguientePosicion = 0;

let nomenclaturaActual = "stock";

let idiomaActual =
    localStorage.getItem("chemix-language") || "es";


const tabla =
    document.getElementById("periodic-table");

const slots =
    document.querySelectorAll(".element-slot");

const resultado =
    document.getElementById("result");

const botonCombinar =
    document.getElementById("combine-button");


/* =========================================================
   NOMBRES DE ELEMENTOS
========================================================= */

const nombresElementosEN = {

    1:"Hydrogen",
    2:"Helium",
    3:"Lithium",
    4:"Beryllium",
    5:"Boron",
    6:"Carbon",
    7:"Nitrogen",
    8:"Oxygen",
    9:"Fluorine",
    10:"Neon",

    11:"Sodium",
    12:"Magnesium",
    13:"Aluminium",
    14:"Silicon",
    15:"Phosphorus",
    16:"Sulfur",
    17:"Chlorine",
    18:"Argon",

    19:"Potassium",
    20:"Calcium",
    21:"Scandium",
    22:"Titanium",
    23:"Vanadium",
    24:"Chromium",
    25:"Manganese",
    26:"Iron",
    27:"Cobalt",
    28:"Nickel",
    29:"Copper",
    30:"Zinc",

    31:"Gallium",
    32:"Germanium",
    33:"Arsenic",
    34:"Selenium",
    35:"Bromine",
    36:"Krypton",

    37:"Rubidium",
    38:"Strontium",
    39:"Yttrium",
    40:"Zirconium",
    41:"Niobium",
    42:"Molybdenum",
    43:"Technetium",
    44:"Ruthenium",
    45:"Rhodium",
    46:"Palladium",
    47:"Silver",
    48:"Cadmium",
    49:"Indium",
    50:"Tin",
    51:"Antimony",
    52:"Tellurium",
    53:"Iodine",
    54:"Xenon",

    55:"Caesium",
    56:"Barium",
    57:"Lanthanum",
    58:"Cerium",
    59:"Praseodymium",
    60:"Neodymium",
    61:"Promethium",
    62:"Samarium",
    63:"Europium",
    64:"Gadolinium",
    65:"Terbium",
    66:"Dysprosium",
    67:"Holmium",
    68:"Erbium",
    69:"Thulium",
    70:"Ytterbium",
    71:"Lutetium",

    72:"Hafnium",
    73:"Tantalum",
    74:"Tungsten",
    75:"Rhenium",
    76:"Osmium",
    77:"Iridium",
    78:"Platinum",
    79:"Gold",
    80:"Mercury",
    81:"Thallium",
    82:"Lead",
    83:"Bismuth",
    84:"Polonium",
    85:"Astatine",
    86:"Radon",

    87:"Francium",
    88:"Radium",
    89:"Actinium",
    90:"Thorium",
    91:"Protactinium",
    92:"Uranium",
    93:"Neptunium",
    94:"Plutonium",
    95:"Americium",
    96:"Curium",
    97:"Berkelium",
    98:"Californium",
    99:"Einsteinium",
    100:"Fermium",
    101:"Mendelevium",
    102:"Nobelium",
    103:"Lawrencium",

    104:"Rutherfordium",
    105:"Dubnium",
    106:"Seaborgium",
    107:"Bohrium",
    108:"Hassium",
    109:"Meitnerium",
    110:"Darmstadtium",
    111:"Roentgenium",
    112:"Copernicium",
    113:"Nihonium",
    114:"Flerovium",
    115:"Moscovium",
    116:"Livermorium",
    117:"Tennessine",
    118:"Oganesson"

};


/* =========================================================
   TEXTOS DE RESULTADOS
========================================================= */

const textosResultado = {

    es: {

        faltanTitulo:
            "Faltan elementos",

        faltanDescripcion:
            "Coloca dos elementos en el laboratorio.",

        sinCombinacionTitulo:
            "Sin combinación registrada",

        sinCombinacionDescripcion:
            "Chemix todavía no tiene esta combinación en su base de datos.",

        resultadoSingular:
            "resultado",

        resultadoPlural:
            "resultados",

        sinNombre:
            "Sin nombre registrado"

    },

    en: {

        faltanTitulo:
            "Elements missing",

        faltanDescripcion:
            "Place two elements in the laboratory.",

        sinCombinacionTitulo:
            "No registered combination",

        sinCombinacionDescripcion:
            "Chemix does not have this combination in its database yet.",

        resultadoSingular:
            "result",

        resultadoPlural:
            "results",

        sinNombre:
            "No registered name"

    }

};


/* =========================================================
   OBTENER NOMBRE DE ELEMENTO
========================================================= */

function obtenerNombreElemento(elemento) {

    if (
        idiomaActual === "en" &&
        nombresElementosEN[elemento.numero]
    ) {

        return nombresElementosEN[elemento.numero];

    }

    return elemento.nombre;

}


/* =========================================================
   CREAR TABLA
========================================================= */

function crearTabla() {

    tabla.innerHTML = "";

    elementos.forEach(
        elemento => {

            const tarjeta =
                document.createElement("div");


            tarjeta.className =
                `element ${elemento.categoria}`;


            tarjeta.draggable = true;


            tarjeta.dataset.numero =
                elemento.numero;


            tarjeta.style.gridColumn =
                elemento.grupo;


            tarjeta.style.gridRow =
                elemento.periodo;


            tarjeta.innerHTML = `

                <span class="number">
                    ${elemento.numero}
                </span>

                <span class="symbol">
                    ${elemento.simbolo}
                </span>

                <span class="name">
                    ${obtenerNombreElemento(elemento)}
                </span>

            `;


            tarjeta.addEventListener(
                "click",
                () => {

                    colocarElemento(
                        elemento
                    );

                }
            );


            tarjeta.addEventListener(
                "dragstart",
                evento => {

                    evento.dataTransfer.setData(
                        "text/plain",
                        elemento.numero
                    );

                }
            );


            tabla.appendChild(
                tarjeta
            );

        }
    );

}


/* =========================================================
   COLOCAR ELEMENTO
========================================================= */

function colocarElemento(elemento) {

    let posicion =
        seleccionados.indexOf(null);


    if (posicion !== -1) {

        seleccionados[posicion] =
            elemento;

    }

    else {

        seleccionados[siguientePosicion] =
            elemento;

        siguientePosicion =
            siguientePosicion === 0
                ? 1
                : 0;

    }


    actualizarSlots();

}


/* =========================================================
   ACTUALIZAR SLOTS
========================================================= */

function actualizarSlots() {

    slots.forEach(
        (slot, index) => {

            const elemento =
                seleccionados[index];


            if (!elemento) {

                slot.className =
                    "element-slot";

                slot.innerHTML =
                    "+";

                return;

            }


            slot.className =
                `element-slot filled ${elemento.categoria}`;


            slot.innerHTML = `

                <span class="number">
                    ${elemento.numero}
                </span>

                <span class="symbol">
                    ${elemento.simbolo}
                </span>

                <span class="name">
                    ${obtenerNombreElemento(elemento)}
                </span>

            `;

        }
    );

}


/* =========================================================
   DRAG & DROP
========================================================= */

slots.forEach(
    (slot, index) => {

        slot.addEventListener(
            "dragover",
            evento => {

                evento.preventDefault();

                slot.classList.add(
                    "drag-over"
                );

            }
        );


        slot.addEventListener(
            "dragleave",
            () => {

                slot.classList.remove(
                    "drag-over"
                );

            }
        );


        slot.addEventListener(
            "drop",
            evento => {

                evento.preventDefault();

                slot.classList.remove(
                    "drag-over"
                );


                const numero =
                    Number(
                        evento.dataTransfer
                            .getData(
                                "text/plain"
                            )
                    );


                const elemento =
                    elementos.find(
                        item =>
                            item.numero === numero
                    );


                if (!elemento) {
                    return;
                }


                seleccionados[index] =
                    elemento;


                siguientePosicion =
                    index === 0
                        ? 1
                        : 0;


                actualizarSlots();

            }
        );


        slot.addEventListener(
            "dblclick",
            () => {

                seleccionados[index] =
                    null;


                siguientePosicion =
                    index;


                actualizarSlots();

            }
        );

    }
);


/* =========================================================
   CLAVE DE COMBINACIÓN
========================================================= */

function obtenerClave(
    elemento1,
    elemento2
) {

    const clave1 =
        `${elemento1.simbolo}-${elemento2.simbolo}`;


    const clave2 =
        `${elemento2.simbolo}-${elemento1.simbolo}`;


    if (combinations[clave1]) {
        return clave1;
    }


    if (combinations[clave2]) {
        return clave2;
    }


    return null;

}


/* =========================================================
   OBTENER NOMBRE SEGÚN IDIOMA Y NOMENCLATURA
========================================================= */

function obtenerNombreProducto(producto) {

    if (!producto) {

        return textosResultado[
            idiomaActual
        ].sinNombre;

    }


    /*
       Nuevo formato:

       names: {
           es: {
               stock: "...",
               iupac: "...",
               clasica: "..."
           },
           en: {
               stock: "...",
               iupac: "...",
               clasica: "..."
           }
       }
    */

    if (
        producto.names &&
        producto.names[idiomaActual] &&
        producto.names[idiomaActual][
            nomenclaturaActual
        ]
    ) {

        return producto.names[
            idiomaActual
        ][
            nomenclaturaActual
        ];

    }


    /*
       Compatibilidad con el formato
       antiguo en español.
    */

    if (
        producto.names &&
        producto.names[
            nomenclaturaActual
        ]
    ) {

        return producto.names[
            nomenclaturaActual
        ];

    }


    if (producto.name) {

        return producto.name;

    }


    return textosResultado[
        idiomaActual
    ].sinNombre;

}


/* =========================================================
   OBTENER TIPO DEL PRODUCTO
========================================================= */

function obtenerTipoProducto(producto) {

    if (!producto) {
        return "";
    }


    if (
        typeof producto.type === "object" &&
        producto.type[idiomaActual]
    ) {

        return producto.type[
            idiomaActual
        ];

    }


    return producto.type || "";

}


/* =========================================================
   OBTENER DESCRIPCIÓN DEL PRODUCTO
========================================================= */

function obtenerDescripcionProducto(producto) {

    if (!producto) {
        return "";
    }


    if (
        typeof producto.description === "object" &&
        producto.description[idiomaActual]
    ) {

        return producto.description[
            idiomaActual
        ];

    }


    return producto.description || "";

}


/* =========================================================
   ACTUALIZAR NOMBRES DE PRODUCTOS
========================================================= */

function actualizarNombresProductos() {

    const productos =
        document.querySelectorAll(
            ".product"
        );


    productos.forEach(
        productoHTML => {

            const clave =
                productoHTML.dataset.productIndex;


            if (clave === undefined) {
                return;
            }


            if (!window.productosActuales) {
                return;
            }


            const producto =
                window.productosActuales[
                    Number(clave)
                ];


            if (!producto) {
                return;
            }


            const nombre =
                productoHTML.querySelector(
                    ".product-name"
                );


            const tipo =
                productoHTML.querySelector(
                    ".product-type"
                );


            const descripcion =
                productoHTML.querySelector(
                    ".product-description"
                );


            if (nombre) {

                nombre.textContent =
                    obtenerNombreProducto(
                        producto
                    );

            }


            if (tipo) {

                tipo.textContent =
                    obtenerTipoProducto(
                        producto
                    );

            }


            if (descripcion) {

                descripcion.textContent =
                    obtenerDescripcionProducto(
                        producto
                    );

            }

        }
    );

}


/* =========================================================
   ACTUALIZAR IDIOMA
========================================================= */

window.actualizarIdiomaResultados =
    function(language) {

        idiomaActual =
            language === "en"
                ? "en"
                : "es";


        crearTabla();

        actualizarSlots();

        actualizarNombresProductos();


        if (
            window.productosActuales &&
            window.productosActuales.length
        ) {

            combinar();

        }

    };


/* =========================================================
   COMBINAR
========================================================= */

function combinar() {

    const elemento1 =
        seleccionados[0];


    const elemento2 =
        seleccionados[1];


    const textos =
        textosResultado[
            idiomaActual
        ];


    if (!elemento1 || !elemento2) {

        resultado.innerHTML = `

            <div class="empty-result">

                <div class="empty-icon">
                    ⚠️
                </div>

                <h3>
                    ${textos.faltanTitulo}
                </h3>

                <p>
                    ${textos.faltanDescripcion}
                </p>

            </div>

        `;

        return;

    }


    const clave =
        obtenerClave(
            elemento1,
            elemento2
        );


    if (!clave) {

        resultado.innerHTML = `

            <div class="empty-result">

                <div class="empty-icon">
                    🔬
                </div>

                <h3>
                    ${textos.sinCombinacionTitulo}
                </h3>

                <p>
                    ${textos.sinCombinacionDescripcion}
                </p>

            </div>

        `;

        return;

    }


    const productos =
        combinations[clave];


    if (!productos) {

        resultado.innerHTML = `

            <div class="empty-result">

                <div class="empty-icon">
                    🔬
                </div>

                <h3>
                    ${textos.sinCombinacionTitulo}
                </h3>

                <p>
                    ${textos.sinCombinacionDescripcion}
                </p>

            </div>

        `;

        return;

    }


    window.productosActuales =
        productos;


    const textoResultados =
        productos.length === 1
            ? textos.resultadoSingular
            : textos.resultadoPlural;


    resultado.innerHTML = `

        <div class="combination-result">

            <div class="reaction">

                ${elemento1.simbolo}
                +
                ${elemento2.simbolo}
                →
                ${productos
                    .map(
                        producto =>
                            producto.formula
                    )
                    .join(" / ")
                }

            </div>


            <h3>

                ${productos.length}

                ${textoResultados}

            </h3>


            <div class="products-list">

                ${productos
                    .map(
                        (producto, index) => `

                            <div
                                class="product"
                                data-product-index="${index}"
                            >

                                <div
                                    class="product-formula"
                                >
                                    ${producto.formula}
                                </div>


                                <div
                                    class="product-name"
                                >
                                    ${obtenerNombreProducto(
                                        producto
                                    )}
                                </div>


                                <div
                                    class="product-type"
                                >
                                    ${obtenerTipoProducto(
                                        producto
                                    )}
                                </div>


                                <p
                                    class="product-description"
                                >
                                    ${obtenerDescripcionProducto(
                                        producto
                                    )}
                                </p>

                            </div>

                        `
                    )
                    .join("")
                }

            </div>

        </div>

    `;

}


/* =========================================================
   BOTÓN COMBINAR
========================================================= */

botonCombinar.addEventListener(
    "click",
    combinar
);


/* =========================================================
   INFORMACIÓN DE DEBUG
========================================================= */

console.log(
    "🧪 Chemix iniciado"
);

console.log(
    `⚛️ Elementos cargados: ${elementos.length}`
);

console.log(
    `⚗️ Combinaciones cargadas: ${
        Object.keys(combinations).length
    }`
);


/* =========================================================
   INICIAR
========================================================= */

crearTabla();

actualizarSlots();
