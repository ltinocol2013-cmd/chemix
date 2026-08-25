/* =========================================================
   CHEMIX
   BASE DE DATOS DE COMBINACIONES
========================================================= */

const combinations = {

    /* HIDRÓGENO */

    "H-O": [
        {
            formula: "H₂O",
            name: "Agua",
            type: "Óxido",
            description: "Compuesto formado por hidrógeno y oxígeno."
        }
    ],

    "H-Cl": [
        {
            formula: "HCl",
            name: "Cloruro de hidrógeno",
            type: "Haluros",
            description: "Compuesto formado por hidrógeno y cloro."
        }
    ],

    "H-F": [
        {
            formula: "HF",
            name: "Fluoruro de hidrógeno",
            type: "Haluros",
            description: "Compuesto formado por hidrógeno y flúor."
        }
    ],

    "H-Br": [
        {
            formula: "HBr",
            name: "Bromuro de hidrógeno",
            type: "Haluros",
            description: "Compuesto formado por hidrógeno y bromo."
        }
    ],

    "H-I": [
        {
            formula: "HI",
            name: "Yoduro de hidrógeno",
            type: "Haluros",
            description: "Compuesto formado por hidrógeno y yodo."
        }
    ],

    "H-S": [
        {
            formula: "H₂S",
            name: "Sulfuro de hidrógeno",
            type: "Sulfuro",
            description: "Compuesto formado por hidrógeno y azufre."
        }
    ],

    "C-H": [
        {
            formula: "CH₄",
            name: "Metano",
            type: "Hidrocarburo",
            description: "El hidrocarburo más simple."
        }
    ],

    "N-H": [
        {
            formula: "NH₃",
            name: "Amoníaco",
            type: "Hidruro",
            description: "Compuesto formado por nitrógeno e hidrógeno."
        }
    ],


    /* ALCALINOS */

    "Li-O": [
        {
            formula: "Li₂O",
            name: "Óxido de litio",
            type: "Óxido",
            description: "Óxido formado por litio y oxígeno."
        }
    ],

    "Li-Cl": [
        {
            formula: "LiCl",
            name: "Cloruro de litio",
            type: "Sal",
            description: "Sal formada por litio y cloro."
        }
    ],

    "Li-H": [
        {
            formula: "LiH",
            name: "Hidruro de litio",
            type: "Hidruro",
            description: "Hidruro formado por litio e hidrógeno."
        }
    ],

    "Na-O": [
        {
            formula: "Na₂O",
            name: "Óxido de sodio",
            type: "Óxido",
            description: "Óxido formado por sodio y oxígeno."
        }
    ],

    "Na-Cl": [
        {
            formula: "NaCl",
            name: "Cloruro de sodio",
            type: "Sal",
            description: "La sal común."
        }
    ],

    "Na-H": [
        {
            formula: "NaH",
            name: "Hidruro de sodio",
            type: "Hidruro",
            description: "Hidruro formado por sodio e hidrógeno."
        }
    ],

    "K-O": [
        {
            formula: "K₂O",
            name: "Óxido de potasio",
            type: "Óxido",
            description: "Óxido formado por potasio y oxígeno."
        }
    ],

    "K-Cl": [
        {
            formula: "KCl",
            name: "Cloruro de potasio",
            type: "Sal",
            description: "Sal formada por potasio y cloro."
        }
    ],

    "K-H": [
        {
            formula: "KH",
            name: "Hidruro de potasio",
            type: "Hidruro",
            description: "Hidruro formado por potasio e hidrógeno."
        }
    ],


    /* ALCALINOTÉRREOS */

    "Be-O": [
        {
            formula: "BeO",
            name: "Óxido de berilio",
            type: "Óxido",
            description: "Óxido formado por berilio y oxígeno."
        }
    ],

    "Be-Cl": [
        {
            formula: "BeCl₂",
            name: "Cloruro de berilio",
            type: "Sal",
            description: "Compuesto formado por berilio y cloro."
        }
    ],

    "Mg-O": [
        {
            formula: "MgO",
            name: "Óxido de magnesio",
            type: "Óxido",
            description: "Óxido formado por magnesio y oxígeno."
        }
    ],

    "Mg-Cl": [
        {
            formula: "MgCl₂",
            name: "Cloruro de magnesio",
            type: "Sal",
            description: "Sal formada por magnesio y cloro."
        }
    ],

    "Mg-H": [
        {
            formula: "MgH₂",
            name: "Hidruro de magnesio",
            type: "Hidruro",
            description: "Hidruro formado por magnesio e hidrógeno."
        }
    ],

    "Ca-O": [
        {
            formula: "CaO",
            name: "Óxido de calcio",
            type: "Óxido",
            description: "También conocido como cal viva."
        }
    ],

    "Ca-Cl": [
        {
            formula: "CaCl₂",
            name: "Cloruro de calcio",
            type: "Sal",
            description: "Sal formada por calcio y cloro."
        }
    ],

    "Ca-H": [
        {
            formula: "CaH₂",
            name: "Hidruro de calcio",
            type: "Hidruro",
            description: "Hidruro formado por calcio e hidrógeno."
        }
    ],

    "Ba-O": [
        {
            formula: "BaO",
            name: "Óxido de bario",
            type: "Óxido",
            description: "Óxido formado por bario y oxígeno."
        }
    ],

    "Ba-Cl": [
        {
            formula: "BaCl₂",
            name: "Cloruro de bario",
            type: "Sal",
            description: "Sal formada por bario y cloro."
        }
    ],

    "Sr-O": [
        {
            formula: "SrO",
            name: "Óxido de estroncio",
            type: "Óxido",
            description: "Óxido formado por estroncio y oxígeno."
        }
    ],

    "Sr-Cl": [
        {
            formula: "SrCl₂",
            name: "Cloruro de estroncio",
            type: "Sal",
            description: "Sal formada por estroncio y cloro."
        }
    ],


    /* CARBONO */

    "C-O": [
        {
            formula: "CO",
            name: "Monóxido de carbono",
            type: "Óxido",
            description: "Óxido de carbono."
        },
        {
            formula: "CO₂",
            name: "Dióxido de carbono",
            type: "Óxido",
            description: "Óxido de carbono."
        }
    ],

    "C-S": [
        {
            formula: "CS₂",
            name: "Disulfuro de carbono",
            type: "Sulfuro",
            description: "Compuesto formado por carbono y azufre."
        }
    ],


    /* NITRÓGENO */

    "N-O": [
        {
            formula: "NO",
            name: "Monóxido de nitrógeno",
            type: "Óxido",
            description: "Óxido de nitrógeno."
        },
        {
            formula: "NO₂",
            name: "Dióxido de nitrógeno",
            type: "Óxido",
            description: "Óxido de nitrógeno."
        }
    ],

    "N-Cl": [
        {
            formula: "NCl₃",
            name: "Tricloruro de nitrógeno",
            type: "Haluros",
            description: "Compuesto formado por nitrógeno y cloro."
        }
    ],


    /* AZUFRE */

    "S-O": [
        {
            formula: "SO₂",
            name: "Dióxido de azufre",
            type: "Óxido",
            description: "Óxido de azufre."
        },
        {
            formula: "SO₃",
            name: "Trióxido de azufre",
            type: "Óxido",
            description: "Óxido de azufre."
        }
    ],

    "S-Cl": [
        {
            formula: "S₂Cl₂",
            name: "Dicloruro de disulfuro",
            type: "Haluros",
            description: "Compuesto formado por azufre y cloro."
        }
    ],


    /* FÓSFORO */

    "P-O": [
        {
            formula: "P₄O₆",
            name: "Hexóxido de tetrafósforo",
            type: "Óxido",
            description: "Óxido molecular del fósforo."
        },
        {
            formula: "P₄O₁₀",
            name: "Decaóxido de tetrafósforo",
            type: "Óxido",
            description: "Óxido molecular del fósforo."
        }
    ],

    "P-Cl": [
        {
            formula: "PCl₃",
            name: "Tricloruro de fósforo",
            type: "Haluros",
            description: "Compuesto formado por fósforo y cloro."
        },
        {
            formula: "PCl₅",
            name: "Pentacloruro de fósforo",
            type: "Haluros",
            description: "Compuesto formado por fósforo y cloro."
        }
    ],


    /* SILICIO */

    "Si-O": [
        {
            formula: "SiO₂",
            name: "Dióxido de silicio",
            type: "Óxido",
            description: "Componente principal del cuarzo."
        }
    ],

    "Si-H": [
        {
            formula: "SiH₄",
            name: "Silano",
            type: "Hidruro",
            description: "Hidruro de silicio."
        }
    ],

    "Si-Cl": [
        {
            formula: "SiCl₄",
            name: "Tetracloruro de silicio",
            type: "Haluros",
            description: "Compuesto formado por silicio y cloro."
        }
    ],


    /* BORO */

    "B-O": [
        {
            formula: "B₂O₃",
            name: "Óxido de boro",
            type: "Óxido",
            description: "Óxido formado por boro y oxígeno."
        }
    ],

    "B-Cl": [
        {
            formula: "BCl₃",
            name: "Tricloruro de boro",
            type: "Haluros",
            description: "Compuesto formado por boro y cloro."
        }
    ],


    /* ALUMINIO */

    "Al-O": [
        {
            formula: "Al₂O₃",
            name: "Óxido de aluminio",
            type: "Óxido",
            description: "Óxido común del aluminio."
        }
    ],

    "Al-Cl": [
        {
            formula: "AlCl₃",
            name: "Cloruro de aluminio",
            type: "Sal",
            description: "Compuesto formado por aluminio y cloro."
        }
    ],


    /* HIERRO */

    "Fe-O": [
        {
            formula: "FeO",
            name: "Óxido de hierro(II)",
            type: "Óxido",
            description: "Óxido de hierro con estado de oxidación +2."
        },
        {
            formula: "Fe₂O₃",
            name: "Óxido de hierro(III)",
            type: "Óxido",
            description: "Óxido de hierro con estado de oxidación +3."
        },
        {
            formula: "Fe₃O₄",
            name: "Óxido de hierro(II,III)",
            type: "Óxido",
            description: "Óxido mixto de hierro."
        }
    ],

    "Fe-Cl": [
        {
            formula: "FeCl₂",
            name: "Cloruro de hierro(II)",
            type: "Sal",
            description: "Cloruro de hierro con estado +2."
        },
        {
            formula: "FeCl₃",
            name: "Cloruro de hierro(III)",
            type: "Sal",
            description: "Cloruro de hierro con estado +3."
        }
    ],


    /* COBRE */

    "Cu-O": [
        {
            formula: "Cu₂O",
            name: "Óxido de cobre(I)",
            type: "Óxido",
            description: "Óxido de cobre con estado +1."
        },
        {
            formula: "CuO",
            name: "Óxido de cobre(II)",
            type: "Óxido",
            description: "Óxido de cobre con estado +2."
        }
    ],

    "Cu-Cl": [
        {
            formula: "CuCl",
            name: "Cloruro de cobre(I)",
            type: "Sal",
            description: "Cloruro de cobre con estado +1."
        },
        {
            formula: "CuCl₂",
            name: "Cloruro de cobre(II)",
            type: "Sal",
            description: "Cloruro de cobre con estado +2."
        }
    ],


    /* ZINC */

    "Zn-O": [
        {
            formula: "ZnO",
            name: "Óxido de zinc",
            type: "Óxido",
            description: "Óxido formado por zinc y oxígeno."
        }
    ],

    "Zn-Cl": [
        {
            formula: "ZnCl₂",
            name: "Cloruro de zinc",
            type: "Sal",
            description: "Sal formada por zinc y cloro."
        }
    ],


    /* PLATA */

    "Ag-Cl": [
        {
            formula: "AgCl",
            name: "Cloruro de plata",
            type: "Sal",
            description: "Sal de plata y cloro."
        }
    ],

    "Ag-O": [
        {
            formula: "Ag₂O",
            name: "Óxido de plata(I)",
            type: "Óxido",
            description: "Óxido de plata."
        }
    ],


    /* MERCURIO */

    "Hg-Cl": [
        {
            formula: "HgCl₂",
            name: "Cloruro de mercurio(II)",
            type: "Sal",
            description: "Compuesto de mercurio y cloro."
        }
    ],


    /* ORO */

    "Au-Cl": [
        {
            formula: "AuCl₃",
            name: "Cloruro de oro(III)",
            type: "Haluros",
            description: "Compuesto de oro y cloro."
        }
    ],


    /* ESTAÑO */

    "Sn-O": [
        {
            formula: "SnO",
            name: "Óxido de estaño(II)",
            type: "Óxido",
            description: "Óxido de estaño."
        },
        {
            formula: "SnO₂",
            name: "Óxido de estaño(IV)",
            type: "Óxido",
            description: "Óxido de estaño."
        }
    ],


    /* PLOMO */

    "Pb-O": [
        {
            formula: "PbO",
            name: "Óxido de plomo(II)",
            type: "Óxido",
            description: "Óxido de plomo."
        },
        {
            formula: "PbO₂",
            name: "Óxido de plomo(IV)",
            type: "Óxido",
            description: "Óxido de plomo."
        }
    ],

    "Pb-Cl": [
        {
            formula: "PbCl₂",
            name: "Cloruro de plomo(II)",
            type: "Sal",
            description: "Sal formada por plomo y cloro."
        }
    ],


    /* BROMO */

    "Br-O": [
        {
            formula: "Br₂O",
            name: "Monóxido de dibromo",
            type: "Óxido",
            description: "Óxido de bromo."
        }
    ],


    /* CLORO */

    "Cl-O": [
        {
            formula: "Cl₂O",
            name: "Monóxido de dicloro",
            type: "Óxido",
            description: "Óxido de cloro."
        }
    ]

};