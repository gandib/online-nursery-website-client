import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { TProduct } from "../../pages/Products/Products";

type TProduct = {
  _id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  quantity: number;
  isDeleted: boolean;
  totalPrice: number;
  newQuantity: number;
};

type TInitialState = {
  products: TProduct[];
  cartTotal: number[];
};

const initialState: TInitialState = {
  products: [],
  cartTotal: [],
};
const productCartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProduct>) => {
      const existing = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (existing?._id !== action.payload._id) {
        state.products.push({
          ...action.payload,
          totalPrice: action.payload.price,
          newQuantity: 1,
        });
      }
    },
    addPrice: (state, action: PayloadAction<TProduct>) => {
      const existing = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (existing?._id === action.payload._id) {
        existing!.totalPrice = existing?.totalPrice + action.payload.price;
        existing!.newQuantity = existing?.newQuantity + 1;
      }
    },
    decreasePrice: (state, action: PayloadAction<TProduct>) => {
      const existing = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (existing?._id === action.payload._id) {
        existing!.totalPrice = existing?.totalPrice - action.payload.price;
        existing!.newQuantity = existing?.newQuantity - 1;
      }
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});

export const { addProduct, addPrice, decreasePrice, removeProduct } =
  productCartSlice.actions;

export default productCartSlice.reducer;
