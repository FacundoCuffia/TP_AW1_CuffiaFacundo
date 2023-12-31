//Script para generar la estructura de las propiedades

const propiedades = {
    propiedad: [
        {
            idCategoria: 1,
            foto: "src/img/casa_1.jpg",
            nombre: "Southern heaven",
            precio: "U$D500.000",
            descripcion: "Esta impresionante residencia de estilo clásico y elegante, completamente blanca, es un verdadero reflejo de la belleza atemporal. Situada en un entorno tranquilo y rodeada de exuberante vegetación, esta casa ofrece un refugio de lujo y privacidad. Sus amplios espacios interiores están inundados de luz natural, creando una atmósfera luminosa y acogedora en toda la propiedad. Con acabados de alta gama, una cocina gourmet y una piscina reluciente en el patio trasero, esta casa es perfecta para aquellos que buscan la combinación perfecta de comodidad y estilo. Bienvenido a tu oasis personal en el corazón de la serenidad y la elegancia."
        },

        {
            idCategoria: 1,
            foto: "src/img/casa_2.jpg",
            nombre: "L.A Hills style",
            precio: "U$D350.000",
            descripcion: "Esta encantadora residencia de estilo 'Hills', pintada en blanco, representa una fusión perfecta entre la serenidad de la naturaleza y el confort moderno. Ubicada en un entorno privado y rodeada de exuberante vegetación, esta casa ofrece un refugio acogedor y tranquilo. Sus dimensiones moderadas la hacen ideal para aquellos que buscan una vida más relajada sin sacrificar el estilo. En el interior, encontrarás un diseño espacioso que fluye con una paleta de colores neutros y elementos naturales. Grandes ventanales enmarcan las vistas panorámicas de las colinas circundantes, creando un ambiente lleno de luz y serenidad. Disfruta de la privacidad y la comodidad de tu propio paraíso en medio de la naturaleza."
        },

        {
            idCategoria: 1,
            foto: "src/img/casa_3.jpg",
            nombre: "Blackwood fortress",
            precio: "U$D650.000",
            descripcion: "Esta casa de diseño vanguardista es un ejemplo supremo de la elegancia moderna. Con su fachada de madera negra y líneas limpias, esta residencia se destaca como una joya contemporánea. En su interior, encontrarás espacios amplios y minimalistas que fluyen con un diseño inteligente. Los grandes ventanales enmarcan vistas panorámicas y permiten que la luz natural inunde cada rincón, creando un ambiente luminoso y sereno. La cocina de última generación y las comodidades de lujo se combinan para ofrecer un estilo de vida moderno y sofisticado. En el patio, una piscina infinita y una terraza de madera completan el escenario perfecto para el entretenimiento al aire libre. Bienvenido a una residencia que encarna el lujo contemporáneo en su máxima expresión."
        },
        
        {
            idCategoria: 1,
            foto: "src/img/casa_4.jpg",
            nombre: "American Fashion",
            precio: "U$D250.000",
            descripcion: "Esta encantadora casa de estilo americano, ubicada en una zona urbana tranquila y arbolada, ofrece lo mejor de ambos mundos: el encanto clásico y la comodidad de la vida en la ciudad con un ambiente tranquilo y natural. Con su diseño icónico, esta casa irradia un cálido encanto familiar. En su interior, descubrirás un espacio acogedor que combina detalles tradicionales con comodidades modernas. Numerosas ventanas permiten la entrada de abundante luz natural y brindan vistas de este entorno sereno y boscoso. Esta casa es la perfecta combinación de vida urbana y la paz que solo un entorno natural puede ofrecer. Bienvenido a tu refugio en la ciudad con un toque clásico y un oasis de tranquilidad."
        },
        
        {
            idCategoria: 2,
            foto: "src/img/depa_1.jpg",
            nombre: "Wide mirror",
            precio: "U$D100.000",
            descripcion: "Este acogedor departamento de dos habitaciones ofrece una excelente iluminación natural y cuenta con una decoración moderna y funcional. Totalmente amoblado para brindar comodidad y practicidad, este espacio es perfecto para quienes buscan un ambiente contemporáneo y luminoso en el que sentirse como en casa."
        },

        {
            idCategoria: 2,
            foto: "src/img/depa_2.jpg",
            nombre: "Comfy couch",
            precio: "U$D80.000",
            descripcion: "Este apartamento unipersonal, ubicado en una zona urbana tranquila y alejada del bullicio del centro, presenta un estilo minimalista que promueve la simplicidad y la serenidad. Con un diseño limpio y funcional, este espacio proporciona todo lo necesario para una vida cómoda y sin complicaciones en la ciudad."
        },

        {
            idCategoria: 2,
            foto: "src/img/depa_3.jpg",
            nombre: "Luxury downtown",
            precio: "U$D110.000",
            descripcion: "Este encantador departamento de tamaño moderado se encuentra en la zona más exclusiva y cotizada de la ciudad, ofreciendo un ambiente cálido y acogedor. A pesar de su ubicación en una zona de lujo, este espacio mantiene una sensación de intimidad y confort, convirtiéndolo en el refugio perfecto para quienes buscan un hogar cómodo y elegante en el corazón de la ciudad."
        },

        {
            idCategoria: 2,
            foto: "src/img/depa_4.jpg",
            nombre: "Clasic factory",
            precio: "U$D70.000",
            descripcion: "Este departamento, situado en una zona industrial pero segura, ha envejecido con gracia y se encuentra en un estado impecable tanto en términos estructurales como estéticos. A pesar de su antigüedad, brinda un ambiente acogedor y funcional que demuestra su durabilidad a lo largo del tiempo. Es una elección ideal para aquellos que valoran la tranquilidad de una zona segura y aprecian la autenticidad y la historia que un espacio más antiguo puede ofrecer."
        },

        {
            idCategoria: 3,
            foto: "src/img/cabaña_1.jpg",
            nombre: "Tranquility fields",
            precio: "U$D50.000",
            descripcion: "Esta encantadora cabaña de madera, ubicada en lo alto de una pintoresca sierra, es un refugio de alta calidad que combina la belleza natural con la comodidad. A pesar de su tamaño modesto, esta cabaña irradia calidez y encanto rústico, y se encuentra rodeada por un extenso parque que ofrece vistas panorámicas impresionantes. Es el lugar perfecto para aquellos que buscan la tranquilidad y la conexión con la naturaleza sin renunciar a la calidad y la comodidad."
        },

        {
            idCategoria: 3,
            foto: "src/img/cabaña_2.jpg",
            nombre: "Alpine storm",
            precio: "U$D100.000",
            descripcion: "Esta cabaña con techo a dos aguas a estrenar, ubicada en una zona propensa a nevadas frecuentes, ofrece una experiencia acogedora y moderna en medio de un entorno invernal. Equipada con todas las comodidades modernas, incluida una sala de estar elegante, esta cabaña te permite disfrutar de la belleza de la nieve desde la calidez y el confort de un espacio contemporáneo. Es el lugar perfecto para vivir la magia del invierno sin renunciar a las comodidades de la vida moderna."
        },

        {
            idCategoria: 3,
            foto: "src/img/cabaña_3.jpg",
            nombre: "Rocky mountain",
            precio: "U$D90.000",
            descripcion: "Esta espaciosa cabaña, asentada a los pies de una majestuosa colina rocosa, es un refugio de lujo completamente autosuficiente. Con cuatro habitaciones, ofrece un amplio espacio para la comodidad y la relajación. Equipada con paneles solares, esta cabaña es amigable con el medio ambiente y te permite disfrutar de todas las comodidades modernas sin sacrificar la autosuficiencia. Es el lugar ideal para experimentar la serenidad de la naturaleza mientras disfrutas de una estancia lujosa y sostenible."
        },

        {
            idCategoria: 3,
            foto: "src/img/cabaña_4.jpg",
            nombre: "Woody lake",
            precio: "U$D60.000",
            descripcion: "Esta cabaña junto al lago, construida con encanto en madera, te ofrece una experiencia única en la naturaleza. Con su acceso directo al agua a través de un pequeño muelle, es un refugio perfecto para los amantes del entorno acuático. Además, su sistema de calefacción eficiente garantiza un ambiente cálido y acogedor en todas las estaciones, lo que la convierte en un destino ideal durante todo el año para relajarse y disfrutar de la belleza del lago y la comodidad de un refugio de madera bien equipado."
        },
    ]   
}

//Exporta por defecto (abre una puerta para que mi objeto pueda ser exportado a otros lugares)
export default propiedades