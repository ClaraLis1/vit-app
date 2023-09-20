import { Product } from "@/interface/product";


const products: Product[] = [
  {
    id: 1,
    title: "Feed Lot y Hoteleria",
    position: "Engorde a Corral",
    image: '/img/products/feedlot.JPG',
    path:'feed-lot'
  },
  {
    id: 2,
    title: "Cereales",
    position: "Acopio de cereales y venta de insumos",
    image: "/img/products/acopio.JPG",
    path:'acopio'
  },
  {
    id: 3,
    title: "Explotacion Agropecuaria",
    position: "Cria y recría de Hacienda. Producción Agricola",
    image: "/img/products/girasol.JPG",
    path:'produccion'
  },
  {
    id: 4,
    title: "Consignataria",
    position: "Comercialización de hacienda",
    image: "/img/products/consignataria.jpg",
    path:'consignataria'
  }
];

export default products;