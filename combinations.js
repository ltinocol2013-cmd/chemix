```js
/* =========================================================
   CHEMIX
   COMBINACIONES
   CLAVES NORMALIZADAS + NOMENCLATURAS
========================================================= */

const combinations = {

    /* =====================================================
       HIDRÓGENO
    ===================================================== */

    "Cl-H": [
        {
            formula: "HCl",
            names: {
                stock: "Cloruro de hidrógeno",
                iupac: "Cloruro de hidrógeno",
                clasica: "Ácido clorhídrico"
            },
            type: "Haluros",
            description: "Compuesto formado por hidrógeno y cloro."
        }
    ],

    "Br-H": [
        {
            formula: "HBr",
            names: {
                stock: "Bromuro de hidrógeno",
                iupac: "Bromuro de hidrógeno",
                clasica: "Ácido bromhídrico"
            },
            type: "Haluros",
            description: "Compuesto formado por hidrógeno y bromo."
        }
    ],

    "F-H": [
        {
            formula: "HF",
            names: {
                stock: "Fluoruro de hidrógeno",
                iupac: "Fluoruro de hidrógeno",
                clasica: "Ácido fluorhídrico"
            },
            type: "Haluros",
            description: "Compuesto formado por hidrógeno y flúor."
        }
    ],

    "H-I": [
        {
            formula: "HI",
            names: {
                stock: "Yoduro de hidrógeno",
                iupac: "Yoduro de hidrógeno",
                clasica: "Ácido yodhídrico"
            },
            type: "Haluros",
            description: "Compuesto formado por hidrógeno y yodo."
        }
    ],

    "H-O": [
        {
            formula: "H₂O",
            names: {
                stock: "Óxido de hidrógeno",
                iupac: "Oxidano",
                clasica: "Agua"
            },
            type: "Óxido",
            description: "Compuesto formado por hidrógeno y oxígeno."
        }
    ],

    "H-S": [
        {
            formula: "H₂S",
            names: {
                stock: "Sulfuro de hidrógeno",
                iupac: "Sulfuro de hidrógeno",
                clasica: "Ácido sulfhídrico"
            },
            type: "Sulfuro",
            description: "Compuesto formado por hidrógeno y azufre."
        }
    ],

    "C-H": [
        {
            formula: "CH₄",
            names: {
                stock: "Hidruro de carbono(IV)",
                iupac: "Metano",
                clasica: "Metano"
            },
            type: "Hidrocarburo",
            description: "El hidrocarburo más simple."
        }
    ],

    "H-N": [
        {
            formula: "NH₃",
            names: {
                stock: "Hidruro de nitrógeno(III)",
                iupac: "Azano",
                clasica: "Amoníaco"
            },
            type: "Hidruro",
            description: "Compuesto formado por nitrógeno e hidrógeno."
        }
    ],


    /* =====================================================
       ALCALINOS
    ===================================================== */

    "Cl-Li": [
        {
            formula: "LiCl",
            names: {
                stock: "Cloruro de litio",
                iupac: "Cloruro de litio",
                clasica: "Cloruro de litio"
            },
            type: "Sal",
            description: "Sal formada por litio y cloro."
        }
    ],

    "H-Li": [
        {
            formula: "LiH",
            names: {
                stock: "Hidruro de litio",
                iupac: "Hidruro de litio",
                clasica: "Hidruro de litio"
            },
            type: "Hidruro",
            description: "Hidruro formado por litio e hidrógeno."
        }
    ],

    "Li-O": [
        {
            formula: "Li₂O",
            names: {
                stock: "Óxido de litio",
                iupac: "Monóxido de dilitio",
                clasica: "Óxido de litio"
            },
            type: "Óxido",
            description: "Óxido formado por litio y oxígeno."
        }
    ],

    "Cl-Na": [
        {
            formula: "NaCl",
            names: {
                stock: "Cloruro de sodio",
                iupac: "Cloruro de sodio",
                clasica: "Cloruro sódico"
            },
            type: "Sal",
            description: "La sal común."
        }
    ],

    "H-Na": [
        {
            formula: "NaH",
            names: {
                stock: "Hidruro de sodio",
                iupac: "Hidruro de sodio",
                clasica: "Hidruro sódico"
            },
            type: "Hidruro",
            description: "Hidruro formado por sodio e hidrógeno."
        }
    ],

    "Na-O": [
        {
            formula: "Na₂O",
            names: {
                stock: "Óxido de sodio",
                iupac: "Monóxido de disodio",
                clasica: "Óxido sódico"
            },
            type: "Óxido",
            description: "Óxido formado por sodio y oxígeno."
        }
    ],

    "Cl-K": [
        {
            formula: "KCl",
            names: {
                stock: "Cloruro de potasio",
                iupac: "Cloruro de potasio",
                clasica: "Cloruro potásico"
            },
            type: "Sal",
            description: "Sal formada por potasio y cloro."
        }
    ],

    "H-K": [
        {
            formula: "KH",
            names: {
                stock: "Hidruro de potasio",
                iupac: "Hidruro de potasio",
                clasica: "Hidruro potásico"
            },
            type: "Hidruro",
            description: "Hidruro formado por potasio e hidrógeno."
        }
    ],

    "K-O": [
        {
            formula: "K₂O",
            names: {
                stock: "Óxido de potasio",
                iupac: "Monóxido de dipotasio",
                clasica: "Óxido potásico"
            },
            type: "Óxido",
            description: "Óxido formado por potasio y oxígeno."
        }
    ],


    /* =====================================================
       ALCALINOTÉRREOS
    ===================================================== */

    "Cl-Be": [
        {
            formula: "BeCl₂",
            names: {
                stock: "Cloruro de berilio",
                iupac: "Dicloruro de berilio",
                clasica: "Cloruro berílico"
            },
            type: "Sal",
            description: "Compuesto formado por berilio y cloro."
        }
    ],

    "Be-O": [
        {
            formula: "BeO",
            names: {
                stock: "Óxido de berilio",
                iupac: "Monóxido de berilio",
                clasica: "Óxido berílico"
            },
            type: "Óxido",
            description: "Óxido formado por berilio y oxígeno."
        }
    ],

    "Cl-Ca": [
        {
            formula: "CaCl₂",
            names: {
                stock: "Cloruro de calcio",
                iupac: "Dicloruro de calcio",
                clasica: "Cloruro cálcico"
            },
            type: "Sal",
            description: "Sal formada por calcio y cloro."
        }
    ],

    "Ca-H": [
        {
            formula: "CaH₂",
            names: {
                stock: "Hidruro de calcio",
                iupac: "Dihidruro de calcio",
                clasica: "Hidruro cálcico"
            },
            type: "Hidruro",
            description: "Hidruro formado por calcio e hidrógeno."
        }
    ],

    "Ca-O": [
        {
            formula: "CaO",
            names: {
                stock: "Óxido de calcio",
                iupac: "Monóxido de calcio",
                clasica: "Óxido cálcico"
            },
            type: "Óxido",
            description: "También conocido como cal viva."
        }
    ],

    "Cl-Mg": [
        {
            formula: "MgCl₂",
            names: {
                stock: "Cloruro de magnesio",
                iupac: "Dicloruro de magnesio",
                clasica: "Cloruro magnésico"
            },
            type: "Sal",
            description: "Sal formada por magnesio y cloro."
        }
    ],

    "H-Mg": [
        {
            formula: "MgH₂",
            names: {
                stock: "Hidruro de magnesio",
                iupac: "Dihidruro de magnesio",
                clasica: "Hidruro magnésico"
            },
            type: "Hidruro",
            description: "Hidruro formado por magnesio e hidrógeno."
        }
    ],

    "Mg-O": [
        {
            formula: "MgO",
            names: {
                stock: "Óxido de magnesio",
                iupac: "Monóxido de magnesio",
                clasica: "Óxido magnésico"
            },
            type: "Óxido",
            description: "Óxido formado por magnesio y oxígeno."
        }
    ],

    "Ba-Cl": [
        {
            formula: "BaCl₂",
            names: {
                stock: "Cloruro de bario",
                iupac: "Dicloruro de bario",
                clasica: "Cloruro bárico"
            },
            type: "Sal",
            description: "Sal formada por bario y cloro."
        }
    ],

    "Ba-O": [
        {
            formula: "BaO",
            names: {
                stock: "Óxido de bario",
                iupac: "Monóxido de bario",
                clasica: "Óxido bárico"
            },
            type: "Óxido",
            description: "Óxido formado por bario y oxígeno."
        }
    ],

    "Cl-Sr": [
        {
            formula: "SrCl₂",
            names: {
                stock: "Cloruro de estroncio",
                iupac: "Dicloruro de estroncio",
                clasica: "Cloruro estróncico"
            },
            type: "Sal",
            description: "Sal formada por estroncio y cloro."
        }
    ],

    "Sr-O": [
        {
            formula: "SrO",
            names: {
                stock: "Óxido de estroncio",
                iupac: "Monóxido de estroncio",
                clasica: "Óxido estróncico"
            },
            type: "Óxido",
            description: "Óxido formado por estroncio y oxígeno."
        }
    ],


    /* =====================================================
       NITRÓGENO
    ===================================================== */

    "Cl-N": [
        {
            formula: "NCl₃",
            names: {
                stock: "Cloruro de nitrógeno(III)",
                iupac: "Tricloruro de nitrógeno",
                clasica: "Cloruro de nitrógeno"
            },
            type: "Haluros",
            description: "Compuesto formado por nitrógeno y cloro."
        }
    ],

    "N-O": [
        {
            formula: "NO",
            names: {
                stock: "Óxido de nitrógeno(II)",
                iupac: "Monóxido de nitrógeno",
                clasica: "Óxido nítrico"
            },
            type: "Óxido",
            description: "Óxido de nitrógeno."
        },
        {
            formula: "NO₂",
            names: {
                stock: "Óxido de nitrógeno(IV)",
                iupac: "Dióxido de nitrógeno",
                clasica: "Dióxido de nitrógeno"
            },
            type: "Óxido",
            description: "Óxido de nitrógeno."
        }
    ],


    /* =====================================================
       AZUFRE
    ===================================================== */

    "Cl-S": [
        {
            formula: "S₂Cl₂",
            names: {
                stock: "Cloruro de azufre(I)",
                iupac: "Dicloruro de diazufre",
                clasica: "Cloruro de azufre"
            },
            type: "Haluros",
            description: "Compuesto formado por azufre y cloro."
        }
    ],

    "O-S": [
        {
            formula: "SO₂",
            names: {
                stock: "Óxido de azufre(IV)",
                iupac: "Dióxido de azufre",
                clasica: "Anhídrido sulfuroso"
            },
            type: "Óxido",
            description: "Óxido de azufre."
        },
        {
            formula: "SO₃",
            names: {
                stock: "Óxido de azufre(VI)",
                iupac: "Trióxido de azufre",
                clasica: "Anhídrido sulfúrico"
            },
            type: "Óxido",
            description: "Óxido de azufre."
        }
    ],


    /* =====================================================
       FÓSFORO
    ===================================================== */

    "Cl-P": [
        {
            formula: "PCl₃",
            names: {
                stock: "Cloruro de fósforo(III)",
                iupac: "Tricloruro de fósforo",
                clasica: "Cloruro fosforoso"
            },
            type: "Haluros",
            description: "Compuesto formado por fósforo y cloro."
        },
        {
            formula: "PCl₅",
            names: {
                stock: "Cloruro de fósforo(V)",
                iupac: "Pentacloruro de fósforo",
                clasica: "Cloruro fosfórico"
            },
            type: "Haluros",
            description: "Compuesto formado por fósforo y cloro."
        }
    ],

    "O-P": [
        {
            formula: "P₄O₆",
            names: {
                stock: "Óxido de fósforo(III)",
                iupac: "Hexaóxido de tetrafósforo",
                clasica: "Anhídrido fosforoso"
            },
            type: "Óxido",
            description: "Óxido molecular del fósforo."
        },
        {
            formula: "P₄O₁₀",
            names: {
                stock: "Óxido de fósforo(V)",
                iupac: "Decaóxido de tetrafósforo",
                clasica: "Anhídrido fosfórico"
            },
            type: "Óxido",
            description: "Óxido molecular del fósforo."
        }
    ],


    /* =====================================================
       SILICIO
    ===================================================== */

    "Cl-Si": [
        {
            formula: "SiCl₄",
            names: {
                stock: "Cloruro de silicio(IV)",
                iupac: "Tetracloruro de silicio",
                clasica: "Cloruro silícico"
            },
            type: "Haluros",
            description: "Compuesto formado por silicio y cloro."
        }
    ],

    "H-Si": [
        {
            formula: "SiH₄",
            names: {
                stock: "Hidruro de silicio(IV)",
                iupac: "Silano",
                clasica: "Silano"
            },
            type: "Hidruro",
            description: "Hidruro de silicio."
        }
    ],

    "O-Si": [
        {
            formula: "SiO₂",
            names: {
                stock: "Óxido de silicio(IV)",
                iupac: "Dióxido de silicio",
                clasica: "Anhídrido silícico"
            },
            type: "Óxido",
            description: "Componente principal del cuarzo."
        }
    ],


    /* =====================================================
       BORO
    ===================================================== */

    "B-Cl": [
        {
            formula: "BCl₃",
            names: {
                stock: "Cloruro de boro(III)",
                iupac: "Tricloruro de boro",
                clasica: "Cloruro bórico"
            },
            type: "Haluros",
            description: "Compuesto formado por boro y cloro."
        }
    ],

    "B-O": [
        {
            formula: "B₂O₃",
            names: {
                stock: "Óxido de boro(III)",
                iupac: "Trióxido de diboro",
                clasica: "Anhídrido bórico"
            },
            type: "Óxido",
            description: "Óxido formado por boro y oxígeno."
        }
    ],


    /* =====================================================
       ALUMINIO
    ===================================================== */

    "Al-Cl": [
        {
            formula: "AlCl₃",
            names: {
                stock: "Cloruro de aluminio",
                iupac: "Tricloruro de aluminio",
                clasica: "Cloruro alumínico"
            },
            type: "Sal",
            description: "Compuesto formado por aluminio y cloro."
        }
    ],

    "Al-O": [
        {
            formula: "Al₂O₃",
            names: {
                stock: "Óxido de aluminio",
                iupac: "Trióxido de dialuminio",
                clasica: "Óxido alumínico"
            },
            type: "Óxido",
            description: "Óxido común del aluminio."
        }
    ],


    /* =====================================================
       HIERRO
    ===================================================== */

    "Cl-Fe": [
        {
            formula: "FeCl₂",
            names: {
                stock: "Cloruro de hierro(II)",
                iupac: "Dicloruro de hierro",
                clasica: "Cloruro ferroso"
            },
            type: "Sal",
            description: "Cloruro de hierro con estado de oxidación +2."
        },
        {
            formula: "FeCl₃",
            names: {
                stock: "Cloruro de hierro(III)",
                iupac: "Tricloruro de hierro",
                clasica: "Cloruro férrico"
            },
            type: "Sal",
            description: "Cloruro de hierro con estado de oxidación +3."
        }
    ],

    "Fe-O": [
        {
            formula: "FeO",
            names: {
                stock: "Óxido de hierro(II)",
                iupac: "Monóxido de hierro",
                clasica: "Óxido ferroso"
            },
            type: "Óxido",
            description: "Óxido de hierro con estado de oxidación +2."
        },
        {
            formula: "Fe₂O₃",
            names: {
                stock: "Óxido de hierro(III)",
                iupac: "Trióxido de dihierro",
                clasica: "Óxido férrico"
            },
            type: "Óxido",
            description: "Óxido de hierro con estado de oxidación +3."
        },
        {
            formula: "Fe₃O₄",
            names: {
                stock: "Óxido de hierro(II,III)",
                iupac: "Tetraóxido de trihierro",
                clasica: "Óxido ferroso-férrico"
            },
            type: "Óxido",
            description: "Óxido mixto de hierro."
        }
    ],


    /* =====================================================
       COBRE
    ===================================================== */

    "Cl-Cu": [
        {
            formula: "CuCl",
            names: {
                stock: "Cloruro de cobre(I)",
                iupac: "Cloruro de cobre",
                clasica: "Cloruro cuproso"
            },
            type: "Sal",
            description: "Cloruro de cobre con estado de oxidación +1."
        },
        {
            formula: "CuCl₂",
            names: {
                stock: "Cloruro de cobre(II)",
                iupac: "Dicloruro de cobre",
                clasica: "Cloruro cúprico"
            },
            type: "Sal",
            description: "Cloruro de cobre con estado de oxidación +2."
        }
    ],

    "Cu-O": [
        {
            formula: "Cu₂O",
            names: {
                stock: "Óxido de cobre(I)",
                iupac: "Monóxido de dicobre",
                clasica: "Óxido cuproso"
            },
            type: "Óxido",
            description: "Óxido de cobre con estado de oxidación +1."
        },
        {
            formula: "CuO",
            names: {
                stock: "Óxido de cobre(II)",
                iupac: "Monóxido de cobre",
                clasica: "Óxido cúprico"
            },
            type: "Óxido",
            description: "Óxido de cobre con estado de oxidación +2."
        }
    ],


    /* =====================================================
       ZINC
    ===================================================== */

    "Cl-Zn": [
        {
            formula: "ZnCl₂",
            names: {
                stock: "Cloruro de zinc",
                iupac: "Dicloruro de zinc",
                clasica: "Cloruro de zinc"
            },
            type: "Sal",
            description: "Sal formada por zinc y cloro."
        }
    ],

    "O-Zn": [
        {
            formula: "ZnO",
            names: {
                stock: "Óxido de zinc",
                iupac: "Monóxido de zinc",
                clasica: "Óxido de zinc"
            },
            type: "Óxido",
            description: "Óxido formado por zinc y oxígeno."
        }
    ],


    /* =====================================================
       PLATA
    ===================================================== */

    "Ag-Cl": [
        {
            formula: "AgCl",
            names: {
                stock: "Cloruro de plata",
                iupac: "Cloruro de plata",
                clasica: "Cloruro argéntico"
            },
            type: "Sal",
            description: "Sal de plata y cloro."
        }
    ],

    "Ag-O": [
        {
            formula: "Ag₂O",
            names: {
                stock: "Óxido de plata(I)",
                iupac: "Monóxido de diplata",
                clasica: "Óxido de plata"
            },
            type: "Óxido",
            description: "Óxido de plata."
        }
    ],


    /* =====================================================
       MERCURIO
    ===================================================== */

    "Cl-Hg": [
        {
            formula: "HgCl₂",
            names: {
                stock: "Cloruro de mercurio(II)",
                iupac: "Dicloruro de mercurio",
                clasica: "Cloruro mercúrico"
            },
            type: "Sal",
            description: "Compuesto de mercurio y cloro."
        }
    ],


    /* =====================================================
       ORO
    ===================================================== */

    "Au-Cl": [
        {
            formula: "AuCl₃",
            names: {
                stock: "Cloruro de oro(III)",
                iupac: "Tricloruro de oro",
                clasica: "Cloruro áurico"
            },
            type: "Haluros",
            description: "Compuesto de oro y cloro."
        }
    ],


    /* =====================================================
       ESTAÑO
    ===================================================== */

    "O-Sn": [
        {
            formula: "SnO",
            names: {
                stock: "Óxido de estaño(II)",
                iupac: "Monóxido de estaño",
                clasica: "Óxido estañoso"
            },
            type: "Óxido",
            description: "Óxido de estaño."
        },
        {
            formula: "SnO₂",
            names: {
                stock: "Óxido de estaño(IV)",
                iupac: "Dióxido de estaño",
                clasica: "Óxido estánnico"
            },
            type: "Óxido",
            description: "Óxido de estaño."
        }
    ],


    /* =====================================================
       PLOMO
    ===================================================== */

    "Cl-Pb": [
        {
            formula: "PbCl₂",
            names: {
                stock: "Cloruro de plomo(II)",
                iupac: "Dicloruro de plomo",
                clasica: "Cloruro plumboso"
            },
            type: "Sal",
            description: "Sal formada por plomo y cloro."
        }
    ],

    "O-Pb": [
        {
            formula: "PbO",
            names: {
                stock: "Óxido de plomo(II)",
                iupac: "Monóxido de plomo",
                clasica: "Óxido plumboso"
            },
            type: "Óxido",
            description: "Óxido de plomo."
        },
        {
            formula: "PbO₂",
            names: {
                stock: "Óxido de plomo(IV)",
                iupac: "Dióxido de plomo",
                clasica: "Óxido plúmbico"
            },
            type: "Óxido",
            description: "Óxido de plomo."
        }
    ],


    /* =====================================================
       BROMO
    ===================================================== */

    "Br-O": [
        {
            formula: "Br₂O",
            names: {
                stock: "Óxido de bromo(I)",
                iupac: "Monóxido de dibromo",
                clasica: "Anhídrido hipobromoso"
            },
            type: "Óxido",
            description: "Óxido de bromo."
        }
    ],


    /* =====================================================
       CLORO
    ===================================================== */

    "Cl-O": [
        {
            formula: "Cl₂O",
            names: {
                stock: "Óxido de cloro(I)",
                iupac: "Monóxido de dicloro",
                clasica: "Anhídrido hipocloroso"
            },
            type: "Óxido",
            description: "Óxido de cloro."
        }
    ]

};
```
