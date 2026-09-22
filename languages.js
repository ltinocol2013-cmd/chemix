const elementNames = {
    es: {
        1: "Hidrógeno",
        2: "Helio",
        3: "Litio",
        4: "Berilio",
        5: "Boro",
        6: "Carbono",
        7: "Nitrógeno",
        8: "Oxígeno",
        9: "Flúor",
        10: "Neón",
        11: "Sodio",
        12: "Magnesio",
        13: "Aluminio",
        14: "Silicio",
        15: "Fósforo",
        16: "Azufre",
        17: "Cloro",
        18: "Argón",
        19: "Potasio",
        20: "Calcio",
        21: "Escandio",
        22: "Titanio",
        23: "Vanadio",
        24: "Cromo",
        25: "Manganeso",
        26: "Hierro",
        27: "Cobalto",
        28: "Níquel",
        29: "Cobre",
        30: "Zinc",
        31: "Galio",
        32: "Germanio",
        33: "Arsénico",
        34: "Selenio",
        35: "Bromo",
        36: "Kriptón",
        37: "Rubidio",
        38: "Estroncio",
        39: "Itrio",
        40: "Circonio",
        41: "Niobio",
        42: "Molibdeno",
        43: "Tecnecio",
        44: "Rutenio",
        45: "Rodio",
        46: "Paladio",
        47: "Plata",
        48: "Cadmio",
        49: "Indio",
        50: "Estaño",
        51: "Antimonio",
        52: "Telurio",
        53: "Yodo",
        54: "Xenón",
        55: "Cesio",
        56: "Bario",
        57: "Lantano",
        58: "Cerio",
        59: "Praseodimio",
        60: "Neodimio",
        61: "Prometio",
        62: "Samario",
        63: "Europio",
        64: "Gadolinio",
        65: "Terbio",
        66: "Disprosio",
        67: "Holmio",
        68: "Erbio",
        69: "Tulio",
        70: "Iterbio",
        71: "Lutecio",
        72: "Hafnio",
        73: "Tantalio",
        74: "Wolframio",
        75: "Renio",
        76: "Osmio",
        77: "Iridio",
        78: "Platino",
        79: "Oro",
        80: "Mercurio",
        81: "Talio",
        82: "Plomo",
        83: "Bismuto",
        84: "Polonio",
        85: "Astato",
        86: "Radón",
        87: "Francio",
        88: "Radio",
        89: "Actinio",
        90: "Torio",
        91: "Protactinio",
        92: "Uranio",
        93: "Neptunio",
        94: "Plutonio",
        95: "Americio",
        96: "Curio",
        97: "Berkelio",
        98: "Californio",
        99: "Einsteinio",
        100: "Fermio",
        101: "Mendelevio",
        102: "Nobelio",
        103: "Lawrencio",
        104: "Rutherfordio",
        105: "Dubnio",
        106: "Seaborgio",
        107: "Bohrio",
        108: "Hassio",
        109: "Meitnerio",
        110: "Darmstadtio",
        111: "Roentgenio",
        112: "Copernicio",
        113: "Nihonio",
        114: "Flerovio",
        115: "Moscovio",
        116: "Livermorio",
        117: "Teneso",
        118: "Oganesón"
    },

    en: {
        1: "Hydrogen",
        2: "Helium",
        3: "Lithium",
        4: "Beryllium",
        5: "Boron",
        6: "Carbon",
        7: "Nitrogen",
        8: "Oxygen",
        9: "Fluorine",
        10: "Neon",
        11: "Sodium",
        12: "Magnesium",
        13: "Aluminium",
        14: "Silicon",
        15: "Phosphorus",
        16: "Sulfur",
        17: "Chlorine",
        18: "Argon",
        19: "Potassium",
        20: "Calcium",
        21: "Scandium",
        22: "Titanium",
        23: "Vanadium",
        24: "Chromium",
        25: "Manganese",
        26: "Iron",
        27: "Cobalt",
        28: "Nickel",
        29: "Copper",
        30: "Zinc",
        31: "Gallium",
        32: "Germanium",
        33: "Arsenic",
        34: "Selenium",
        35: "Bromine",
        36: "Krypton",
        37: "Rubidium",
        38: "Strontium",
        39: "Yttrium",
        40: "Zirconium",
        41: "Niobium",
        42: "Molybdenum",
        43: "Technetium",
        44: "Ruthenium",
        45: "Rhodium",
        46: "Palladium",
        47: "Silver",
        48: "Cadmium",
        49: "Indium",
        50: "Tin",
        51: "Antimony",
        52: "Tellurium",
        53: "Iodine",
        54: "Xenon",
        55: "Caesium",
        56: "Barium",
        57: "Lanthanum",
        58: "Cerium",
        59: "Praseodymium",
        60: "Neodymium",
        61: "Promethium",
        62: "Samarium",
        63: "Europium",
        64: "Gadolinium",
        65: "Terbium",
        66: "Dysprosium",
        67: "Holmium",
        68: "Erbium",
        69: "Thulium",
        70: "Ytterbium",
        71: "Lutetium",
        72: "Hafnium",
        73: "Tantalum",
        74: "Tungsten",
        75: "Rhenium",
        76: "Osmium",
        77: "Iridium",
        78: "Platinum",
        79: "Gold",
        80: "Mercury",
        81: "Thallium",
        82: "Lead",
        83: "Bismuth",
        84: "Polonium",
        85: "Astatine",
        86: "Radon",
        87: "Francium",
        88: "Radium",
        89: "Actinium",
        90: "Thorium",
        91: "Protactinium",
        92: "Uranium",
        93: "Neptunium",
        94: "Plutonium",
        95: "Americium",
        96: "Curium",
        97: "Berkelium",
        98: "Californium",
        99: "Einsteinium",
        100: "Fermium",
        101: "Mendelevium",
        102: "Nobelium",
        103: "Lawrencium",
        104: "Rutherfordium",
        105: "Dubnium",
        106: "Seaborgium",
        107: "Bohrium",
        108: "Hassium",
        109: "Meitnerium",
        110: "Darmstadtium",
        111: "Roentgenium",
        112: "Copernicium",
        113: "Nihonium",
        114: "Flerovium",
        115: "Moscovium",
        116: "Livermorium",
        117: "Tennessine",
        118: "Oganesson"
    }
};


/* =========================================================
   TRADUCCIONES
========================================================= */

const translations = {

    es: {

        pageTitle:
            "Chemix — Laboratorio de Química",

        subtitle:
            "Explora los elementos y descubre qué ocurre al combinarlos",

        periodicTable:
            "Tabla periódica",

        periodicDescription:
            "Arrastra un elemento al laboratorio o haz clic sobre él.",

        laboratory:
            "Laboratorio",

        laboratoryDescription:
            "Coloca dos elementos para intentar combinarlos.",

        combine:
            "Combinar",

        emptyLaboratory:
            "Laboratorio vacío",

        emptyLaboratoryDescription:
            "Selecciona dos elementos para comenzar.",

        footer:
            "Chemix — Laboratorio educativo de química",

        footerSmall:
            "Proyecto educativo creado con HTML, CSS y JavaScript",

        nomenclature:
            "Nomenclatura:",

        nomenclatureClassical:
            "Clásica",

        legend: {

            alcalino:
                "Alcalinos",

            alcalinoterreo:
                "Alcalinotérreos",

            transicion:
                "Transición",

            postTransicion:
                "Post-transición",

            metaloide:
                "Metaloides",

            noMetal:
                "No metales",

            halogeno:
                "Halógenos",

            gasNoble:
                "Gases nobles",

            lantanido:
                "Lantánidos",

            actinido:
                "Actínidos"

        }

    },


    en: {

        pageTitle:
            "Chemix — Chemistry Laboratory",

        subtitle:
            "Explore the elements and discover what happens when you combine them",

        periodicTable:
            "Periodic Table",

        periodicDescription:
            "Drag an element into the laboratory or click on it.",

        laboratory:
            "Laboratory",

        laboratoryDescription:
            "Place two elements to try combining them.",

        combine:
            "Combine",

        emptyLaboratory:
            "Empty Laboratory",

        emptyLaboratoryDescription:
            "Select two elements to begin.",

        footer:
            "Chemix — Educational Chemistry Laboratory",

        footerSmall:
            "Educational project created with HTML, CSS and JavaScript",

        nomenclature:
            "Nomenclature:",

        nomenclatureClassical:
            "Classical",

        legend: {

            alcalino:
                "Alkali metals",

            alcalinoterreo:
                "Alkaline earth metals",

            transicion:
                "Transition metals",

            postTransicion:
                "Post-transition metals",

            metaloide:
                "Metalloids",

            noMetal:
                "Nonmetals",

            halogeno:
                "Halogens",

            gasNoble:
                "Noble gases",

            lantanido:
                "Lanthanides",

            actinido:
                "Actinides"

        }

    }

};


/* =========================================================
   ACTUALIZAR NOMBRES DE LOS ELEMENTOS
========================================================= */

function actualizarNombresElementos(language) {

    const nombres =
        elementNames[language] ||
        elementNames.es;


    document
        .querySelectorAll(".element")
        .forEach(tarjeta => {

            const numero =
                Number(
                    tarjeta.dataset.numero
                );

            const nombre =
                tarjeta.querySelector(
                    ".name"
                );


            if (
                nombre &&
                nombres[numero]
            ) {

                nombre.textContent =
                    nombres[numero];

            }

        });


    document
        .querySelectorAll(".element-slot")
        .forEach(slot => {

            const numero =
                Number(
                    slot.querySelector(
                        ".number"
                    )?.textContent
                );

            const nombre =
                slot.querySelector(
                    ".name"
                );


            if (
                nombre &&
                numero &&
                nombres[numero]
            ) {

                nombre.textContent =
                    nombres[numero];

            }

        });

}


/* =========================================================
   ACTUALIZAR TIPOS DE ELEMENTOS
========================================================= */

function actualizarTiposElementos(language) {

    const texto =
        translations[language] ||
        translations.es;


    const leyenda =
        texto.legend;


    const categorias = {

        "alcalino":
            leyenda.alcalino,

        "alcalinoterreo":
            leyenda.alcalinoterreo,

        "transicion":
            leyenda.transicion,

        "post-transicion":
            leyenda.postTransicion,

        "metaloide":
            leyenda.metaloide,

        "no-metal":
            leyenda.noMetal,

        "halogeno":
            leyenda.halogeno,

        "gas-noble":
            leyenda.gasNoble,

        "lantanido":
            leyenda.lantanido,

        "actinido":
            leyenda.actinido

    };


    document
        .querySelectorAll(
            ".legend > div"
        )
        .forEach(item => {

            const color =
                item.querySelector(
                    ".legend-color"
                );


            if (!color) {
                return;
            }


            let categoria = null;


            Object.keys(categorias)
                .forEach(clase => {

                    if (
                        color.classList.contains(
                            clase
                        )
                    ) {

                        categoria =
                            clase;

                    }

                });


            if (!categoria) {
                return;
            }


            const textoActual =
                item.lastChild;


            if (textoActual) {

                textoActual.textContent =
                    " " +
                    categorias[categoria];

            }

        });

}


/* =========================================================
   CAMBIADOR DE IDIOMA
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const languageSelect =
            document.getElementById(
                "language-select"
            );


        function changeLanguage(language) {

            const text =
                translations[language];


            if (!text) {
                return;
            }


            document.documentElement.lang =
                language;


            document.title =
                text.pageTitle;


            const subtitle =
                document.getElementById(
                    "subtitle"
                );


            if (subtitle) {

                subtitle.textContent =
                    text.subtitle;

            }


            const periodicTitle =
                document.getElementById(
                    "periodic-title"
                );


            if (periodicTitle) {

                periodicTitle.textContent =
                    text.periodicTable;

            }


            const periodicDescription =
                document.getElementById(
                    "periodic-description"
                );


            if (periodicDescription) {

                periodicDescription.textContent =
                    text.periodicDescription;

            }


            const laboratoryTitle =
                document.getElementById(
                    "laboratory-title"
                );


            if (laboratoryTitle) {

                laboratoryTitle.textContent =
                    text.laboratory;

            }


            const laboratoryDescription =
                document.getElementById(
                    "laboratory-description"
                );


            if (laboratoryDescription) {

                laboratoryDescription.textContent =
                    text.laboratoryDescription;

            }


            const combineButton =
                document.getElementById(
                    "combine-button"
                );


            if (combineButton) {

                combineButton.textContent =
                    text.combine;

            }


            const emptyTitle =
                document.getElementById(
                    "empty-title"
                );


            if (emptyTitle) {

                emptyTitle.textContent =
                    text.emptyLaboratory;

            }


            const emptyDescription =
                document.getElementById(
                    "empty-description"
                );


            if (emptyDescription) {

                emptyDescription.textContent =
                    text.emptyLaboratoryDescription;

            }


            const footerText =
                document.getElementById(
                    "footer-text"
                );


            if (footerText) {

                footerText.textContent =
                    text.footer;

            }


            const footerSmall =
                document.getElementById(
                    "footer-small"
                );


            if (footerSmall) {

                footerSmall.textContent =
                    text.footerSmall;

            }


            const nomenclatureLabel =
                document.querySelector(
                    'label[for="nomenclature-select"]'
                );


            if (nomenclatureLabel) {

                nomenclatureLabel.textContent =
                    text.nomenclature;

            }


            const classicalOption =
                document.querySelector(
                    '#nomenclature-select option[value="clasica"]'
                );


            if (classicalOption) {

                classicalOption.textContent =
                    text.nomenclatureClassical;

            }


            actualizarNombresElementos(
                language
            );


            actualizarTiposElementos(
                language
            );


            localStorage.setItem(
                "chemix-language",
                language
            );

        }


        if (languageSelect) {

            languageSelect.addEventListener(
                "change",
                () => {

                    changeLanguage(
                        languageSelect.value
                    );

                }
            );


            const savedLanguage =
                localStorage.getItem(
                    "chemix-language"
                );


            if (
                savedLanguage &&
                translations[savedLanguage]
            ) {

                languageSelect.value =
                    savedLanguage;

                changeLanguage(
                    savedLanguage
                );

            }

            else {

                languageSelect.value =
                    "es";

                changeLanguage(
                    "es"
                );

            }

        }

        else {

            changeLanguage(
                "es"
            );

        }

    }
);
