import {createSlice, type PayloadAction , } from '@reduxjs/toolkit'

export interface Transaction  {
  id: string;
  type: "credit" | "debit";
  category: string;
  description: string;
  amount: number;
  date: string;
};


type TransactionsState = {
  transactions: Transaction[];
};

const initialState: TransactionsState = {
  transactions: [],
};


const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {

  addTransaction:(state , action: PayloadAction<Transaction>)=>{
    state.transactions.push(action.payload)
  },


 deleteTransaction:(state, action: PayloadAction<string>)=>{
    state.transactions= state.transactions.filter((e)=>e.id !== action.payload)
                         
  },

   updateTransaction: (state, action: PayloadAction<Transaction>) => {
      const index = state.transactions.findIndex(t => t.id === action.payload.id);
      if (index !== -1) state.transactions[index] = action.payload;
    },
  }})


  
export const { addTransaction, deleteTransaction, updateTransaction  } = transactionsSlice.actions;
export default transactionsSlice.reducer;