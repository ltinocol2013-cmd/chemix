const translations = {

    es: {
        pageTitle: "Chemix — Laboratorio de Química",

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
            "Proyecto educativo creado con HTML, CSS y JavaScript"
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
            "Educational project created with HTML, CSS and JavaScript"
    }

};


/* =========================================================
   CAMBIADOR DE IDIOMA
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const languageSelect =
        document.getElementById("language-select");


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


        document.getElementById("subtitle")
            .textContent =
            text.subtitle;


        document.getElementById("periodic-title")
            .textContent =
            text.periodicTable;


        document.getElementById("periodic-description")
            .textContent =
            text.periodicDescription;


        document.getElementById("laboratory-title")
            .textContent =
            text.laboratory;


        document.getElementById("laboratory-description")
            .textContent =
            text.laboratoryDescription;


        document.getElementById("combine-button")
            .textContent =
            text.combine;


        document.getElementById("empty-title")
            .textContent =
            text.emptyLaboratory;


        document.getElementById("empty-description")
            .textContent =
            text.emptyLaboratoryDescription;


        document.getElementById("footer-text")
            .textContent =
            text.footer;


        document.getElementById("footer-small")
            .textContent =
            text.footerSmall;


        localStorage.setItem(
            "chemix-language",
            language
        );

    }


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

    } else {

        changeLanguage("es");

    }

});
