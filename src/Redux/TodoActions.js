let nextTodoId = 0;
export const addTodo = todo =>({
    type : "ADD_TODO",
    payload : { 
        id: nextTodoId++,
        todo
    }

})
export const deleteTodo = key => ({
    type : "DELETE_TODO",
    payload : key
})
export const toggleTodo = id => ({
    type : "TOGGLE_TODO",
    payload : {id}
})
export const allTodo = () => ({
    type : "ALL_TODO"
    
})
export const doneTodo = () => ({
    type : "DONE_TODO",
   
})
export const undoneTodo = () => ({
    type : "UNDONE_TODO",
    
})
export const todoEdit = (edit,id) => ({
    type : "EDIT_TODO",
    payload : {
        edit,
        id
    }}
    
)