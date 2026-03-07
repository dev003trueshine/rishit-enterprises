import { createSlice } from '@reduxjs/toolkit';

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
    products: [
        {
            id: 1,
            name: "Alphonso Mango",
            category: "Mangoes",
            price: 450,
            unit: "per dozen",
            image:
                "https://img.rocket.new/generatedImages/rocket_gen_img_17fcb1924-1764752495265.png",
            alt: "Dozen fresh golden yellow Alphonso mangoes arranged in wooden crate",
            badge: "Premium",
            rating: 4.9,
            reviews: 234,
            inStock: true,
        },
        {
            id: 2,
            name: "Kesar Mango",
            category: "Mangoes",
            price: 380,
            unit: "per dozen",
            image:
                "https://img.rocket.new/generatedImages/rocket_gen_img_193d9ad6b-1765888820981.png",
            alt: "Fresh orange-yellow Kesar mangoes with red blush on white background",
            badge: "Seasonal",
            rating: 4.8,
            reviews: 189,
            inStock: true,
        },
        {
            id: 3,
            name: "Premium Chikoo",
            category: "Chikoo",
            price: 120,
            unit: "per kg",
            image:
                "https://images.unsplash.com/photo-1587921283692-a0cf685545a9",
            alt: "Brown ripe chikoo sapodilla fruits in natural fiber basket",
            rating: 4.7,
            reviews: 156,
            inStock: true,
        },
        {
            id: 4,
            name: "Mango Pulp",
            category: "Pulp",
            price: 280,
            unit: "per kg",
            image:
                "https://images.unsplash.com/photo-1631606517999-3778ba6f7d0b",
            alt: "Glass bowl filled with smooth golden mango pulp on wooden table",
            badge: "Best Seller",
            rating: 5.0,
            reviews: 312,
            inStock: true,
        },
        {
            id: 5,
            name: "Totapuri Mango",
            category: "Mangoes",
            price: 320,
            unit: "per dozen",
            image:
                "https://img.rocket.new/generatedImages/rocket_gen_img_1eaa4ac3e-1765377558677.png",
            alt: "Green-yellow Totapuri mangoes with pointed tips in woven basket",
            rating: 4.6,
            reviews: 98,
            inStock: true,
        },
        {
            id: 6,
            name: "Chikoo Pulp",
            category: "Pulp",
            price: 240,
            unit: "per kg",
            image:
                "https://img.rocket.new/generatedImages/rocket_gen_img_1ea7b59bf-1765992410929.png",
            alt: "Brown chikoo pulp in glass jar with fresh chikoo fruits beside",
            rating: 4.8,
            reviews: 145,
            inStock: true,
        },
    ],
    loading: false,
    error: null,
};

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
