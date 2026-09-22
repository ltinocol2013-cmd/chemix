/* =========================================================
   CHEMIX
   COMBINACIONES
   ESPAÑOL + INGLÉS
========================================================= */

function producto(
    formula,
    stockEs,
    iupacEs,
    clasicaEs,
    stockEn,
    iupacEn,
    clasicaEn,
    tipoEs,
    tipoEn,
    descripcionEs,
    descripcionEn
) {
    return {
        formula: formula,

        names: {
            es: {
                stock: stockEs,
                iupac: iupacEs,
                clasica: clasicaEs
            },

            en: {
                stock: stockEn,
                iupac: iupacEn,
                clasica: clasicaEn
            }
        },

        type: {
            es: tipoEs,
            en: tipoEn
        },

        description: {
            es: descripcionEs,
            en: descripcionEn
        }
    };
}


const combinations = {

    /* =====================================================
       HIDRÓGENO
    ===================================================== */

    "Cl-H": [
        producto(
            "HCl",
            "Cloruro de hidrógeno",
            "Cloruro de hidrógeno",
            "Ácido clorhídrico",
            "Hydrogen chloride",
            "Hydrogen chloride",
            "Hydrochloric acid",
            "Haluros",
            "Halides",
            "Compuesto formado por hidrógeno y cloro.",
            "Compound formed by hydrogen and chlorine."
        )
    ],

    "Br-H": [
        producto(
            "HBr",
            "Bromuro de hidrógeno",
            "Bromuro de hidrógeno",
            "Ácido bromhídrico",
            "Hydrogen bromide",
            "Hydrogen bromide",
            "Hydrobromic acid",
            "Haluros",
            "Halides",
            "Compuesto formado por hidrógeno y bromo.",
            "Compound formed by hydrogen and bromine."
        )
    ],

    "F-H": [
        producto(
            "HF",
            "Fluoruro de hidrógeno",
            "Fluoruro de hidrógeno",
            "Ácido fluorhídrico",
            "Hydrogen fluoride",
            "Hydrogen fluoride",
            "Hydrofluoric acid",
            "Haluros",
            "Halides",
            "Compuesto formado por hidrógeno y flúor.",
            "Compound formed by hydrogen and fluorine."
        )
    ],

    "H-I": [
        producto(
            "HI",
            "Yoduro de hidrógeno",
            "Yoduro de hidrógeno",
            "Ácido yodhídrico",
            "Hydrogen iodide",
            "Hydrogen iodide",
            "Hydroiodic acid",
            "Haluros",
            "Halides",
            "Compuesto formado por hidrógeno y yodo.",
            "Compound formed by hydrogen and iodine."
        )
    ],

    "H-O": [
        producto(
            "H₂O",
            "Óxido de hidrógeno",
            "Oxidano",
            "Agua",
            "Hydrogen oxide",
            "Oxidane",
            "Water",
            "Óxido",
            "Oxide",
            "Compuesto formado por hidrógeno y oxígeno.",
            "Compound formed by hydrogen and oxygen."
        )
    ],

    "H-S": [
        producto(
            "H₂S",
            "Sulfuro de hidrógeno",
            "Sulfuro de hidrógeno",
            "Ácido sulfhídrico",
            "Hydrogen sulfide",
            "Hydrogen sulfide",
            "Hydrosulfuric acid",
            "Sulfuro",
            "Sulfide",
            "Compuesto formado por hidrógeno y azufre.",
            "Compound formed by hydrogen and sulfur."
        )
    ],

    "C-H": [
        producto(
            "CH₄",
            "Hidruro de carbono(IV)",
            "Metano",
            "Metano",
            "Carbon(IV) hydride",
            "Methane",
            "Methane",
            "Hidrocarburo",
            "Hydrocarbon",
            "El hidrocarburo más simple.",
            "The simplest hydrocarbon."
        )
    ],

    "H-N": [
        producto(
            "NH₃",
            "Hidruro de nitrógeno(III)",
            "Azano",
            "Amoníaco",
            "Nitrogen(III) hydride",
            "Azane",
            "Ammonia",
            "Hidruro",
            "Hydride",
            "Compuesto formado por nitrógeno e hidrógeno.",
            "Compound formed by nitrogen and hydrogen."
        )
    ],


    /* =====================================================
       ALCALINOS
    ===================================================== */

    "Cl-Li": [
        producto(
            "LiCl",
            "Cloruro de litio",
            "Cloruro de litio",
            "Cloruro de litio",
            "Lithium chloride",
            "Lithium chloride",
            "Lithium chloride",
            "Sal",
            "Salt",
            "Sal formada por litio y cloro.",
            "Salt formed by lithium and chlorine."
        )
    ],

    "H-Li": [
        producto(
            "LiH",
            "Hidruro de litio",
            "Hidruro de litio",
            "Hidruro de litio",
            "Lithium hydride",
            "Lithium hydride",
            "Lithium hydride",
            "Hidruro",
            "Hydride",
            "Hidruro formado por litio e hidrógeno.",
            "Hydride formed by lithium and hydrogen."
        )
    ],

    "Li-O": [
        producto(
            "Li₂O",
            "Óxido de litio",
            "Monóxido de dilitio",
            "Óxido de litio",
            "Lithium oxide",
            "Dilithium monoxide",
            "Lithium oxide",
            "Óxido",
            "Oxide",
            "Óxido formado por litio y oxígeno.",
            "Oxide formed by lithium and oxygen."
        )
    ],

    "Cl-Na": [
        producto(
            "NaCl",
            "Cloruro de sodio",
            "Cloruro de sodio",
            "Cloruro sódico",
            "Sodium chloride",
            "Sodium chloride",
            "Sodium chloride",
            "Sal",
            "Salt",
            "La sal común.",
            "Common table salt."
        )
    ],

    "H-Na": [
        producto(
            "NaH",
            "Hidruro de sodio",
            "Hidruro de sodio",
            "Hidruro sódico",
            "Sodium hydride",
            "Sodium hydride",
            "Sodium hydride",
            "Hidruro",
            "Hydride",
            "Hidruro formado por sodio e hidrógeno.",
            "Hydride formed by sodium and hydrogen."
        )
    ],

    "Na-O": [
        producto(
            "Na₂O",
            "Óxido de sodio",
            "Monóxido de disodio",
            "Óxido sódico",
            "Sodium oxide",
            "Disodium monoxide",
            "Sodium oxide",
            "Óxido",
            "Oxide",
            "Óxido formado por sodio y oxígeno.",
            "Oxide formed by sodium and oxygen."
        )
    ],

    "Cl-K": [
        producto(
            "KCl",
            "Cloruro de potasio",
            "Cloruro de potasio",
            "Cloruro potásico",
            "Potassium chloride",
            "Potassium chloride",
            "Potassium chloride",
            "Sal",
            "Salt",
            "Sal formada por potasio y cloro.",
            "Salt formed by potassium and chlorine."
        )
    ],

    "H-K": [
        producto(
            "KH",
            "Hidruro de potasio",
            "Hidruro de potasio",
            "Hidruro potásico",
            "Potassium hydride",
            "Potassium hydride",
            "Potassium hydride",
            "Hidruro",
            "Hydride",
            "Hidruro formado por potasio e hidrógeno.",
            "Hydride formed by potassium and hydrogen."
        )
    ],

    "K-O": [
        producto(
            "K₂O",
            "Óxido de potasio",
            "Monóxido de dipotasio",
            "Óxido potásico",
            "Potassium oxide",
            "Dipotassium monoxide",
            "Potassium oxide",
            "Óxido",
            "Oxide",
            "Óxido formado por potasio y oxígeno.",
            "Oxide formed by potassium and oxygen."
        )
    ],


    /* =====================================================
       ALCALINOTÉRREOS
    ===================================================== */

    "Cl-Be": [
        producto(
            "BeCl₂",
            "Cloruro de berilio",
            "Dicloruro de berilio",
            "Cloruro berílico",
            "Beryllium chloride",
            "Beryllium dichloride",
            "Beryllium chloride",
            "Sal",
            "Salt",
            "Compuesto formado por berilio y cloro.",
            "Compound formed by beryllium and chlorine."
        )
    ],

    "Be-O": [
        producto(
            "BeO",
            "Óxido de berilio",
            "Monóxido de berilio",
            "Óxido berílico",
            "Beryllium oxide",
            "Beryllium monoxide",
            "Beryllium oxide",
            "Óxido",
            "Oxide",
            "Óxido formado por berilio y oxígeno.",
            "Oxide formed by beryllium and oxygen."
        )
    ],

    "Cl-Ca": [
        producto(
            "CaCl₂",
            "Cloruro de calcio",
            "Dicloruro de calcio",
            "Cloruro cálcico",
            "Calcium chloride",
            "Calcium dichloride",
            "Calcium chloride",
            "Sal",
            "Salt",
            "Sal formada por calcio y cloro.",
            "Salt formed by calcium and chlorine."
        )
    ],

    "Ca-H": [
        producto(
            "CaH₂",
            "Hidruro de calcio",
            "Dihidruro de calcio",
            "Hidruro cálcico",
            "Calcium hydride",
            "Calcium dihydride",
            "Calcium hydride",
            "Hidruro",
            "Hydride",
            "Hidruro formado por calcio e hidrógeno.",
            "Hydride formed by calcium and hydrogen."
        )
    ],

    "Ca-O": [
        producto(
            "CaO",
            "Óxido de calcio",
            "Monóxido de calcio",
            "Óxido cálcico",
            "Calcium oxide",
            "Calcium monoxide",
            "Calcium oxide",
            "Óxido",
            "Oxide",
            "También conocido como cal viva.",
            "Also known as quicklime."
        )
    ],

    "Cl-Mg": [
        producto(
            "MgCl₂",
            "Cloruro de magnesio",
            "Dicloruro de magnesio",
            "Cloruro magnésico",
            "Magnesium chloride",
            "Magnesium dichloride",
            "Magnesium chloride",
            "Sal",
            "Salt",
            "Sal formada por magnesio y cloro.",
            "Salt formed by magnesium and chlorine."
        )
    ],

    "H-Mg": [
        producto(
            "MgH₂",
            "Hidruro de magnesio",
            "Dihidruro de magnesio",
            "Hidruro magnésico",
            "Magnesium hydride",
            "Magnesium dihydride",
            "Magnesium hydride",
            "Hidruro",
            "Hydride",
            "Hidruro formado por magnesio e hidrógeno.",
            "Hydride formed by magnesium and hydrogen."
        )
    ],

    "Mg-O": [
        producto(
            "MgO",
            "Óxido de magnesio",
            "Monóxido de magnesio",
            "Óxido magnésico",
            "Magnesium oxide",
            "Magnesium monoxide",
            "Magnesium oxide",
            "Óxido",
            "Oxide",
            "Óxido formado por magnesio y oxígeno.",
            "Oxide formed by magnesium and oxygen."
        )
    ],

    "Ba-Cl": [
        producto(
            "BaCl₂",
            "Cloruro de bario",
            "Dicloruro de bario",
            "Cloruro bárico",
            "Barium chloride",
            "Barium dichloride",
            "Barium chloride",
            "Sal",
            "Salt",
            "Sal formada por bario y cloro.",
            "Salt formed by barium and chlorine."
        )
    ],

    "Ba-O": [
        producto(
            "BaO",
            "Óxido de bario",
            "Monóxido de bario",
            "Óxido bárico",
            "Barium oxide",
            "Barium monoxide",
            "Barium oxide",
            "Óxido",
            "Oxide",
            "Óxido formado por bario y oxígeno.",
            "Oxide formed by barium and oxygen."
        )
    ],

    "Cl-Sr": [
        producto(
            "SrCl₂",
            "Cloruro de estroncio",
            "Dicloruro de estroncio",
            "Cloruro estróncico",
            "Strontium chloride",
            "Strontium dichloride",
            "Strontium chloride",
            "Sal",
            "Salt",
            "Sal formada por estroncio y cloro.",
            "Salt formed by strontium and chlorine."
        )
    ],

    "Sr-O": [
        producto(
            "SrO",
            "Óxido de estroncio",
            "Monóxido de estroncio",
            "Óxido estróncico",
            "Strontium oxide",
            "Strontium monoxide",
            "Strontium oxide",
            "Óxido",
            "Oxide",
            "Óxido formado por estroncio y oxígeno.",
            "Oxide formed by strontium and oxygen."
        )
    ],


    /* =====================================================
       NITRÓGENO
    ===================================================== */

    "Cl-N": [
        producto(
            "NCl₃",
            "Cloruro de nitrógeno(III)",
            "Tricloruro de nitrógeno",
            "Cloruro de nitrógeno",
            "Nitrogen(III) chloride",
            "Nitrogen trichloride",
            "Nitrogen chloride",
            "Haluros",
            "Halides",
            "Compuesto formado por nitrógeno y cloro.",
            "Compound formed by nitrogen and chlorine."
        )
    ],

    "N-O": [
        producto(
            "NO",
            "Óxido de nitrógeno(II)",
            "Monóxido de nitrógeno",
            "Óxido nítrico",
            "Nitrogen(II) oxide",
            "Nitrogen monoxide",
            "Nitric oxide",
            "Óxido",
            "Oxide",
            "Óxido de nitrógeno.",
            "Nitrogen oxide."
        ),

        producto(
            "NO₂",
            "Óxido de nitrógeno(IV)",
            "Dióxido de nitrógeno",
            "Dióxido de nitrógeno",
            "Nitrogen(IV) oxide",
            "Nitrogen dioxide",
            "Nitrogen dioxide",
            "Óxido",
            "Oxide",
            "Óxido de nitrógeno.",
            "Nitrogen oxide."
        )
    ],


    /* =====================================================
       AZUFRE
    ===================================================== */

    "Cl-S": [
        producto(
            "S₂Cl₂",
            "Cloruro de azufre(I)",
            "Dicloruro de diazufre",
            "Cloruro de azufre",
            "Sulfur(I) chloride",
            "Disulfur dichloride",
            "Sulfur chloride",
            "Haluros",
            "Halides",
            "Compuesto formado por azufre y cloro.",
            "Compound formed by sulfur and chlorine."
        )
    ],

    "O-S": [
        producto(
            "SO₂",
            "Óxido de azufre(IV)",
            "Dióxido de azufre",
            "Anhídrido sulfuroso",
            "Sulfur(IV) oxide",
            "Sulfur dioxide",
            "Sulfurous anhydride",
            "Óxido",
            "Oxide",
            "Óxido de azufre.",
            "Sulfur oxide."
        ),

        producto(
            "SO₃",
            "Óxido de azufre(VI)",
            "Trióxido de azufre",
            "Anhídrido sulfúrico",
            "Sulfur(VI) oxide",
            "Sulfur trioxide",
            "Sulfuric anhydride",
            "Óxido",
            "Oxide",
            "Óxido de azufre.",
            "Sulfur oxide."
        )
    ],


    /* =====================================================
       FÓSFORO
    ===================================================== */

    "Cl-P": [
        producto(
            "PCl₃",
            "Cloruro de fósforo(III)",
            "Tricloruro de fósforo",
            "Cloruro fosforoso",
            "Phosphorus(III) chloride",
            "Phosphorus trichloride",
            "Phosphorous chloride",
            "Haluros",
            "Halides",
            "Compuesto formado por fósforo y cloro.",
            "Compound formed by phosphorus and chlorine."
        ),

        producto(
            "PCl₅",
            "Cloruro de fósforo(V)",
            "Pentacloruro de fósforo",
            "Cloruro fosfórico",
            "Phosphorus(V) chloride",
            "Phosphorus pentachloride",
            "Phosphoric chloride",
            "Haluros",
            "Halides",
            "Compuesto formado por fósforo y cloro.",
            "Compound formed by phosphorus and chlorine."
        )
    ],

    "O-P": [
        producto(
            "P₄O₆",
            "Óxido de fósforo(III)",
            "Hexaóxido de tetrafósforo",
            "Anhídrido fosforoso",
            "Phosphorus(III) oxide",
            "Tetraphosphorus hexoxide",
            "Phosphorous anhydride",
            "Óxido",
            "Oxide",
            "Óxido molecular del fósforo.",
            "Molecular oxide of phosphorus."
        ),

        producto(
            "P₄O₁₀",
            "Óxido de fósforo(V)",
            "Decaóxido de tetrafósforo",
            "Anhídrido fosfórico",
            "Phosphorus(V) oxide",
            "Tetraphosphorus decoxide",
            "Phosphoric anhydride",
            "Óxido",
            "Oxide",
            "Óxido molecular del fósforo.",
            "Molecular oxide of phosphorus."
        )
    ],


    /* =====================================================
       SILICIO
    ===================================================== */

    "Cl-Si": [
        producto(
            "SiCl₄",
            "Cloruro de silicio(IV)",
            "Tetracloruro de silicio",
            "Cloruro silícico",
            "Silicon(IV) chloride",
            "Silicon tetrachloride",
            "Silicon chloride",
            "Haluros",
            "Halides",
            "Compuesto formado por silicio y cloro.",
            "Compound formed by silicon and chlorine."
        )
    ],

    "H-Si": [
        producto(
            "SiH₄",
            "Hidruro de silicio(IV)",
            "Silano",
            "Silano",
            "Silicon(IV) hydride",
            "Silane",
            "Silane",
            "Hidruro",
            "Hydride",
            "Hidruro de silicio.",
            "Silicon hydride."
        )
    ],

    "O-Si": [
        producto(
            "SiO₂",
            "Óxido de silicio(IV)",
            "Dióxido de silicio",
            "Anhídrido silícico",
            "Silicon(IV) oxide",
            "Silicon dioxide",
            "Silicic anhydride",
            "Óxido",
            "Oxide",
            "Componente principal del cuarzo.",
            "Main component of quartz."
        )
    ],


    /* =====================================================
       BORO
    ===================================================== */

    "B-Cl": [
        producto(
            "BCl₃",
            "Cloruro de boro(III)",
            "Tricloruro de boro",
            "Cloruro bórico",
            "Boron(III) chloride",
            "Boron trichloride",
            "Boric chloride",
            "Haluros",
            "Halides",
            "Compuesto formado por boro y cloro.",
            "Compound formed by boron and chlorine."
        )
    ],

    "B-O": [
        producto(
            "B₂O₃",
            "Óxido de boro(III)",
            "Trióxido de diboro",
            "Anhídrido bórico",
            "Boron(III) oxide",
            "Diboron trioxide",
            "Boric anhydride",
            "Óxido",
            "Oxide",
            "Óxido formado por boro y oxígeno.",
            "Oxide formed by boron and oxygen."
        )
    ],


    /* =====================================================
       ALUMINIO
    ===================================================== */

    "Al-Cl": [
        producto(
            "AlCl₃",
            "Cloruro de aluminio",
            "Tricloruro de aluminio",
            "Cloruro alumínico",
            "Aluminum chloride",
            "Aluminum trichloride",
            "Aluminum chloride",
            "Sal",
            "Salt",
            "Compuesto formado por aluminio y cloro.",
            "Compound formed by aluminum and chlorine."
        )
    ],

    "Al-O": [
        producto(
            "Al₂O₃",
            "Óxido de aluminio",
            "Trióxido de dialuminio",
            "Óxido alumínico",
            "Aluminum oxide",
            "Dialuminum trioxide",
            "Aluminum oxide",
            "Óxido",
            "Oxide",
            "Óxido común del aluminio.",
            "Common oxide of aluminum."
        )
    ],


    /* =====================================================
       HIERRO
    ===================================================== */

    "Cl-Fe": [
        producto(
            "FeCl₂",
            "Cloruro de hierro(II)",
            "Dicloruro de hierro",
            "Cloruro ferroso",
            "Iron(II) chloride",
            "Iron dichloride",
            "Ferrous chloride",
            "Sal",
            "Salt",
            "Cloruro de hierro con estado de oxidación +2.",
            "Iron chloride with oxidation state +2."
        ),

        producto(
            "FeCl₃",
            "Cloruro de hierro(III)",
            "Tricloruro de hierro",
            "Cloruro férrico",
            "Iron(III) chloride",
            "Iron trichloride",
            "Ferric chloride",
            "Sal",
            "Salt",
            "Cloruro de hierro con estado de oxidación +3.",
            "Iron chloride with oxidation state +3."
        )
    ],

    "Fe-O": [
        producto(
            "FeO",
            "Óxido de hierro(II)",
            "Monóxido de hierro",
            "Óxido ferroso",
            "Iron(II) oxide",
            "Iron monoxide",
            "Ferrous oxide",
            "Óxido",
            "Oxide",
            "Óxido de hierro con estado de oxidación +2.",
            "Iron oxide with oxidation state +2."
        ),

        producto(
            "Fe₂O₃",
            "Óxido de hierro(III)",
            "Trióxido de dihierro",
            "Óxido férrico",
            "Iron(III) oxide",
            "Diiron trioxide",
            "Ferric oxide",
            "Óxido",
            "Oxide",
            "Óxido de hierro con estado de oxidación +3.",
            "Iron oxide with oxidation state +3."
        ),

        producto(
            "Fe₃O₄",
            "Óxido de hierro(II,III)",
            "Tetraóxido de trihierro",
            "Óxido ferroso-férrico",
            "Iron(II,III) oxide",
            "Triiron tetroxide",
            "Ferrous-ferric oxide",
            "Óxido",
            "Oxide",
            "Óxido mixto de hierro.",
            "Mixed iron oxide."
        )
    ],


    /* =====================================================
       COBRE
    ===================================================== */

    "Cl-Cu": [
        producto(
            "CuCl",
            "Cloruro de cobre(I)",
            "Cloruro de cobre",
            "Cloruro cuproso",
            "Copper(I) chloride",
            "Copper chloride",
            "Cuprous chloride",
            "Sal",
            "Salt",
            "Cloruro de cobre con estado de oxidación +1.",
            "Copper chloride with oxidation state +1."
        ),

        producto(
            "CuCl₂",
            "Cloruro de cobre(II)",
            "Dicloruro de cobre",
            "Cloruro cúprico",
            "Copper(II) chloride",
            "Copper dichloride",
            "Cupric chloride",
            "Sal",
            "Salt",
            "Cloruro de cobre con estado de oxidación +2.",
            "Copper chloride with oxidation state +2."
        )
    ],

    "Cu-O": [
        producto(
            "Cu₂O",
            "Óxido de cobre(I)",
            "Monóxido de dicobre",
            "Óxido cuproso",
            "Copper(I) oxide",
            "Dicopper monoxide",
            "Cuprous oxide",
            "Óxido",
            "Oxide",
            "Óxido de cobre con estado de oxidación +1.",
            "Copper oxide with oxidation state +1."
        ),

        producto(
            "CuO",
            "Óxido de cobre(II)",
            "Monóxido de cobre",
            "Óxido cúprico",
            "Copper(II) oxide",
            "Copper monoxide",
            "Cupric oxide",
            "Óxido",
            "Oxide",
            "Óxido de cobre con estado de oxidación +2.",
            "Copper oxide with oxidation state +2."
        )
    ],


    /* =====================================================
       ZINC
    ===================================================== */

    "Cl-Zn": [
        producto(
            "ZnCl₂",
            "Cloruro de zinc",
            "Dicloruro de zinc",
            "Cloruro de zinc",
            "Zinc chloride",
            "Zinc dichloride",
            "Zinc chloride",
            "Sal",
            "Salt",
            "Sal formada por zinc y cloro.",
            "Salt formed by zinc and chlorine."
        )
    ],

    "O-Zn": [
        producto(
            "ZnO",
            "Óxido de zinc",
            "Monóxido de zinc",
            "Óxido de zinc",
            "Zinc oxide",
            "Zinc monoxide",
            "Zinc oxide",
            "Óxido",
            "Oxide",
            "Óxido formado por zinc y oxígeno.",
            "Oxide formed by zinc and oxygen."
        )
    ],


    /* =====================================================
       PLATA
    ===================================================== */

    "Ag-Cl": [
        producto(
            "AgCl",
            "Cloruro de plata",
            "Cloruro de plata",
            "Cloruro argéntico",
            "Silver chloride",
            "Silver chloride",
            "Silver chloride",
            "Sal",
            "Salt",
            "Sal de plata y cloro.",
            "Silver and chlorine salt."
        )
    ],

    "Ag-O": [
        producto(
            "Ag₂O",
            "Óxido de plata(I)",
            "Monóxido de diplata",
            "Óxido de plata",
            "Silver(I) oxide",
            "Disilver monoxide",
            "Silver oxide",
            "Óxido",
            "Oxide",
            "Óxido de plata.",
            "Silver oxide."
        )
    ],


    /* =====================================================
       MERCURIO
    ===================================================== */

    "Cl-Hg": [
        producto(
            "HgCl₂",
            "Cloruro de mercurio(II)",
            "Dicloruro de mercurio",
            "Cloruro mercúrico",
            "Mercury(II) chloride",
            "Mercury dichloride",
            "Mercuric chloride",
            "Sal",
            "Salt",
            "Compuesto de mercurio y cloro.",
            "Compound of mercury and chlorine."
        )
    ],


    /* =====================================================
       ORO
    ===================================================== */

    "Au-Cl": [
        producto(
            "AuCl₃",
            "Cloruro de oro(III)",
            "Tricloruro de oro",
            "Cloruro áurico",
            "Gold(III) chloride",
            "Gold trichloride",
            "Auric chloride",
            "Haluros",
            "Halides",
            "Compuesto de oro y cloro.",
            "Compound of gold and chlorine."
        )
    ],


    /* =====================================================
       ESTAÑO
    ===================================================== */

    "O-Sn": [
        producto(
            "SnO",
            "Óxido de estaño(II)",
            "Monóxido de estaño",
            "Óxido estañoso",
            "Tin(II) oxide",
            "Tin monoxide",
            "Stannous oxide",
            "Óxido",
            "Oxide",
            "Óxido de estaño.",
            "Tin oxide."
        ),

        producto(
            "SnO₂",
            "Óxido de estaño(IV)",
            "Dióxido de estaño",
            "Óxido estánnico",
            "Tin(IV) oxide",
            "Tin dioxide",
            "Stannic oxide",
            "Óxido",
            "Oxide",
            "Óxido de estaño.",
            "Tin oxide."
        )
    ],


    /* =====================================================
       PLOMO
    ===================================================== */

    "Cl-Pb": [
        producto(
            "PbCl₂",
            "Cloruro de plomo(II)",
            "Dicloruro de plomo",
            "Cloruro plumboso",
            "Lead(II) chloride",
            "Lead dichloride",
            "Plumbous chloride",
            "Sal",
            "Salt",
            "Sal formada por plomo y cloro.",
            "Salt formed by lead and chlorine."
        )
    ],

    "O-Pb": [
        producto(
            "PbO",
            "Óxido de plomo(II)",
            "Monóxido de plomo",
            "Óxido plumboso",
            "Lead(II) oxide",
            "Lead monoxide",
            "Plumbous oxide",
            "Óxido",
            "Oxide",
            "Óxido de plomo.",
            "Lead oxide."
        ),

        producto(
            "PbO₂",
            "Óxido de plomo(IV)",
            "Dióxido de plomo",
            "Óxido plúmbico",
            "Lead(IV) oxide",
            "Lead dioxide",
            "Plumbic oxide",
            "Óxido",
            "Oxide",
            "Óxido de plomo.",
            "Lead oxide."
        )
    ],


    /* =====================================================
       BROMO
    ===================================================== */

    "Br-O": [
        producto(
            "Br₂O",
            "Óxido de bromo(I)",
            "Monóxido de dibromo",
            "Anhídrido hipobromoso",
            "Bromine(I) oxide",
            "Dibromine monoxide",
            "Hypobromous anhydride",
            "Óxido",
            "Oxide",
            "Óxido de bromo.",
            "Bromine oxide."
        )
    ],


    /* =====================================================
       CLORO
    ===================================================== */

    "Cl-O": [
        producto(
            "Cl₂O",
            "Óxido de cloro(I)",
            "Monóxido de dicloro",
            "Anhídrido hipocloroso",
            "Chlorine(I) oxide",
            "Dichlorine monoxide",
            "Hypochlorous anhydride",
            "Óxido",
            "Oxide",
            "Óxido de cloro.",
            "Chlorine oxide."
        )
    ]

};
