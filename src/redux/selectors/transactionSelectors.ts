import  {type RootState} from '../store'

export const selectTransaction=(state: RootState)=>
    state.transactions.transactions

export const selectTotalCredit=(state: RootState): number =>{
    return state.transactions.transactions.filter((t)=>t.type==="credit").reduce((acc,t)=> acc+t.amount,0)
}
export const selectTotalDebit=(state: RootState): number =>{
    return state.transactions.transactions.filter((t)=>t.type==="debit").reduce((acc,t)=> acc+t.amount,0)
}


export const totalBallance=(state: RootState)=>{
    const credit= selectTotalCredit(state)
    const debit= selectTotalDebit(state) 
    return credit - debit;
};