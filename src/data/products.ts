import { Product } from "@/interface/product";


const products: Product[] = [
  {
    id: 1,
    title: "Feed Lot",
    position: "Engorde a Corral  y Hoteleria",
    image: '/img/products/feedlot.JPG',
    path:'feed-lot',
    description: [
      "En el Establecimiento El Rincón somos Especialistas en Terminación y Engorde de Hacienda", "Ofrecemos servicios especializados en terminación y engorde de animales."," Utilizamos materias primas de primera calidad y con dietas diseñadas meticulosamente para cada categoría, haciendo del engorde un Arte.", "Compromiso de Calidad: Abastecemos de manera confiable y constante a nuestros clientes durante todo el año, brindando la mejor calidad en cada lote.", "Engordamos más de 10,000 cabezas de ganado al año, lo que respalda nuestra experiencia y compromiso con la excelencia." ,"Convenios de Hotelería: Ofrecemos convenios de hotelería en diversas modalidades. Nos adaptamos a sus requerimientos y ofrecemos soluciones flexibles que se ajustan a sus objetivos.", "Asesoramiento Integral: En El Rincón, no solo brindamos servicios de engorde, sino que también acompañamos y asesoramos a nuestros clientes desde la compra de la invernada hasta la planificación de la salida, teniendo en cuenta las diferentes situaciones y necesidades. Nuestra experiencia en el rubro nos permite ofrecer orientación experta para alcanzar sus metas."
    ]
  },
  {
    id: 2,
    title: "Cereales",
    position: "Acopio de cereales y venta de insumos",
    image: "/img/products/acopio.JPG",
    path:'acopio', 
    description: ["Comprendemos la Importancia de la cosecha y nos dedicamos a brindar al productor la oportunidad de comercializar sus granos en diversos mercados y puertos, colaborando estrechamente con distintos exportadores para asegurar el mejor negocio posible.","Trabajamos con molinos y consumos locales ampliando las opciones disponibles para el productor y garantizando un negocio más favorable."," En Insumos ofrecemos una amplia gama de productos esenciales para respaldar el éxito de sus cultivos."]
  },
  {
    id: 3,
    title: "Explotacion Agropecuaria",
    position: "Cria y recría. Producción Agricola",
    image: "/img/products/girasol.JPG",
    path:'produccion',
    description: ["Ganaderia: Nuestra producción agropecuaria es el primer eslabón de la cadena. Con campos destinados a la Cría y recría e implementando buenas prácticas producimos terneros.","Una vez destetados, los terneros siguen recriándose en lotes seleccionados con pasturas y forrajes especialmente pensados para la etapa de desarrollo del ternero."," También seleccionamos hembras con destino a la reposición de vientres. Una vez que adquieran la edad y la condición corporal adecuada, regresarán a los campos de cría para continuar con el ciclo productivo."," El resto de los animales, incluyendo toda la invernada adquirida que aún no está en condiciones de someterse a dietas de terminación, inician una etapa  de recría buscando ganar  músculo y el desarrollo de estructuras óseas. ","Así, creamos terneros sanos y fuertes que ingresarán al feedlot para su fase final de engorde."," Agricultura: Siguiendo con la integración hoy nuestra producción agrícola está pensada en abastecer nuestro feed lot.", "Producimos, Maíz  soja ,cebada, y  girasol, buscando una rotación de cultivos  para nuestros lotes en la cual podamos tener una agricultura  sostenible y beneficiosa en el tiempo."]
  },
  {
    id: 4,
    title: "Consignataria",
    position: "Comercialización de hacienda",
    image: "/img/products/consignataria.jpg",
    path:'consignataria',
    description: ["Como consignataria de hacienda, nuestro negocio se ha centrado en el Feed lot como generador de oportunidades."," Al darnos cuenta de las excelentes oportunidades que se presentaban en el mercado de gordo e invernada, decidimos ampliar nuestros horizontes y comenzamos a ofrecer estos negocios a nuestros amigos y clientes. Con un enfoque riguroso en lo financiero, logramos con éxito negociar más de 20,000 cabezas de ganado al año. Nuestra labor consiste en conectar a los productores y compradores, asegurando transacciones exitosas y beneficiosas para ambas partes."]
  }
];

export default products;