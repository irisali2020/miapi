import db from '../config/firebase.js';

import { collection, addDoc } from "firebase/firestore";

const productsCollection = collection(db, 'products');

const productsSeeders = [
  {
    "title": "Juego de Bandejas de Cerámica",
    "price": 20.00,
    "category": "cocina",
    "description": "juego de bandejas blancas de cerámica",
  },
  {
    "title": "Bandejas Navideñas",
    "price": 20.00,
    "category": "cocina",
    "description": "bandejas navideñas de cerámica",
  },
  {
    "title": "Platos Pequeños Navideños con salero y pimientero",
    "price": 15.00,
    "category": "cocina",
    "description": "platos navideños acompañados conunpequeño salero y pimientero",
  },
  {
    "title": "Cesta para Ropa",
    "price": 10.00,
    "category": "lavanderia",
    "description": "cesta para ropa de plástico color blanco con tapa",
  },
  {
    "title": "Cesta para Ropa - 2",
    "price": 10.00,
    "category": "lavanderia",
    "description": "cesta para ropa de plástico color blanco con tapa",
  },
  {
    "title": "Coctelera de Vino - 27 piezas",
    "price": 30.00,
    "category": "cocina",
    "description": "coctelera de vino de 27 piezas",},
  
  {
    "title": "DVD Marca LG con control y cables",
    "price": 10.00,
    "category": "entretenimiento",
    "description": "DVD Marca LG con control y cables",
  },
  {
    "title": "Cuatro - Marca",
    "price": 90.00,
    "category": "entretenimiento",
    "description": "cuatro en madera en perfecto estado",
  },
  {
    "title": "Cuatro - cara posterior",
    "price": 90.00,
    "category": "entretenimiento",
    "description": "cuatro en madera en perfecto estado",
  },
  {
    "title": "Cuatro - cara anterior",
    "price": 90.00,
    "category": "entretenimiento",
    "description": "cuatro en madera en perfecto estado",
  },
];

const createProducts = () => {

    productsSeeders.forEach(async (product) => {
        await addDoc(productsCollection, product);
    })

}

createProducts();






