const initState = {
    todos : [],
    done:"all",
  
}
const  reducer=(state=initState,action) => {
    switch(action.type){

    case 'ADD_TODO':
        return{...state,todos:state.todos.concat({id:action.payload.id,description:action.payload.todo,isDone:"Undone"})};
    case 'DELETE_TODO':
        return{...state,todos:state.todos.filter((todo,i) => i !== action.payload)};
    case 'TOGGLE_TODO':
            return{...state,todos:state.todos.map(elm=>elm.id===action.payload.id?elm.isDone==="Undone"?{...elm,isDone:"Done"}:{...elm,isDone:"Undone"}:elm)};
    case 'ALL_TODO':
            return{...state,done:"all"};
    case 'DONE_TODO':
            return{...state,done:"done"};
    case 'UNDONE_TODO':
            return{...state,done:"undone"};
    case 'EDIT_TODO':
            return{...state,todos:state.todos.map(elm=>elm.id===action.payload.id?{...elm, description:action.payload.edit}:elm)};
    default:
        return state;
    }}
    export default reducer
