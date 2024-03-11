import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,Text:'helloworld'}]
}


export const todoslice=createSlice({
    name :'todo',
    initialState,
    reducers:{
        addNumber:(state,action)=>{
            {id:nanoid()
                Text:action.payload}
            state.todos.push(todo)
        },
        removenumber:()=>{

    }
    }
})

export const {addNumber,removenumber}=todoslice.actions
export default todoslice.reducer