import { collection, addDoc, getDocs, getFirestore, query, where, doc } from "firebase/firestore";


import { db } from "../firebase";


export const fetchCategory = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "category"));
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      
      return newData; // Return the newData array
    } catch (error) {
      console.error("Error fetching categories: ", error);
      return []; // Optionally return an empty array or handle the error differently
    }
  };

export const fetchProductsByCategory = async (categoryId) => {
    try {
        console.log(categoryId)
        const categoryRef = doc(db, "category", categoryId);
      const productsRef = collection(db, "products");
      const q = query(productsRef, where("category_id", "==", categoryRef));
      const querySnapshot = await getDocs(q);

      const productsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      return productsList;
    } catch (error) {
      console.error("Error fetching products: ", error);
      return []
    }
  };