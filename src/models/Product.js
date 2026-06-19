import db from '../config/firebase.js';

import { collection, doc, getDoc, getDocs, addDoc } from "firebase/firestore";

const productsCollection = collection(db, 'products');

export const fetchProducts = async () => {
    const snapshot = await getDocs(productsCollection)

    const products = []

    snapshot.forEach((doc) => {
        products.push({
            id: doc.id,
            ...doc.data(),
        });
    });

    return products;
};

export const getProductById = async (id) =>{
    const productRef = doc(productsCollection, id)
    const snapshot = await getDoc(productRef)

    if (!snapshot.exists()) {
        return null
    }

    return {
        id: snapshot.id,
        ...snapshot.data(),

    };
};

export const createProduct = async (product) => {
    const productRef = await addDoc(productsCollection, product)

    return {
        id: productRef.id,
        ...product
    }
}
