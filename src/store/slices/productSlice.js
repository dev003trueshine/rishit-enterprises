import { createSlice } from '@reduxjs/toolkit';
import chikoImg from '../../assets/images/chikoo.webp';
import goldenMangoImg from '../../assets/images/golden-kesar-mango.webp';
import kesarMangoImg from '../../assets/images/kesar.webp';
import rajapuriMangoImg from '../../assets/images/Rajapuri-Mango.webp';
import langdoMangoImg from '../../assets/images/langdo-mango.webp';
import dasheriMangoImg from '../../assets/images/dasheri-mango.webp';
import mangoPulpImg from '../../assets/images/mango-pulp-bottle.webp';
// // 1. Create the async thunk for fetching products
// export const fetchProducts = createAsyncThunk(
//   'product/fetchProducts',
//   async (_, { rejectWithValue }) => {
//     try {
//       // This uses our centralized httpService
//       const data = await httpService.get('/products'); 
//       return data; // This becomes the 'action.payload'
//     } catch (error) {
//       return rejectWithValue(error.response?.data || 'Something went wrong');
//     }
//   }
// );
const initialState = {
    "products": [
        {
            "id": 1,
            "name": "Premium Chikoo",
            "category": "Chikoo",
            "price": 120,
            "unit": "per kg",
            "image": chikoImg,
            "alt": "Brown ripe chikoo sapodilla fruits in natural fiber basket",
            "rating": 4.7,
            "reviews": 156,
            "inStock": true
        },
        {
            "id": 2,
            "name": "Kesar Mango",
            "category": "Mangoes",
            "price": 380,
            "unit": "per dozen",
            "image": kesarMangoImg,
            "alt": "Fresh orange-yellow Kesar mangoes with red blush on white background",
            "badge": "Seasonal",
            "rating": 4.8,
            "reviews": 189,
            "inStock": true
        },
        {
            "id": 3,
            "name": "Rajapuri Mango",
            "category": "Mangoes",
            "price": 400,
            "unit": "per dozen",
            "image": rajapuriMangoImg,
            "alt": "Large green and red Rajapuri mangoes",
            "rating": 4.5,
            "reviews": 0,
            "inStock": true
        },
        {
            "id": 4,
            "name": "Langdo Mango",
            "category": "Mangoes",
            "price": 350,
            "unit": "per dozen",
            "image": langdoMangoImg,
            "alt": "Sweet green Langdo mangoes",
            "rating": 4.7,
            "reviews": 0,
            "inStock": false
        },
        {
            "id": 5,
            "name": "Dasheri Mango",
            "category": "Mangoes",
            "price": 300,
            "unit": "per dozen",
            "image": dasheriMangoImg,
            "alt": "Long fiberless Dasheri mangoes",
            "rating": 4.6,
            "reviews": 0,
            "inStock": false
        },
        {
            "id": 6,
            "name": "Golden Mango",
            "category": "Mangoes",
            "price": 420,
            "unit": "per dozen",
            "image": goldenMangoImg,
            "alt": "Bright golden yellow mangoes",
            "rating": 4.8,
            "reviews": 0,
            "inStock": false
        },
        {
            "id": 7,
            "name": "Mango Pulp",
            "category": "Pulp",
            "price": 280,
            "unit": "per kg",
            "image": mangoPulpImg,
            "alt": "Glass bowl filled with smooth golden mango pulp on wooden table",
            "badge": "Best Seller",
            "rating": 5.0,
            "reviews": 312,
            "inStock": false
        }
    ],
    "loading": false,
    "error": null
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { setProducts, setLoading, setError } = productSlice.actions;
export default productSlice.reducer;
