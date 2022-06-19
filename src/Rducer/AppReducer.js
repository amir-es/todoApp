function AppReducer (state , action) {
   switch (action.type) {
       case 'init-todo' :
            let todos = action.payload
            return {
                ...state ,
                todos
            }
       case 'add-todo':
           return addTodo(state , action)
        
        case 'user-login' :
           return {
                ...state , 
                log : true
            }
        case 'user-logout' :
           return {
                ...state , 
                log : false
            }
       
        case 'delete-todo' :
           return deleteTodo(state , action)
           
        
        case 'toggle-todo' :
            return toggleTodo(state , action)
        
        
        case 'edit-todo' :
            return editTodo(state , action)
            
       default:
           return state;
           
   }
}

export default AppReducer ;



let addTodo = (state , action) => {
    
    let { todo } = action.payload
         
    return{
        ...state ,
        todos : [
            ...state.todos ,
            todo
        ]
    }
   
        
}

let deleteTodo = (state , action) => {
    let { key } = action.payload
    return {
        ...state , 
        todos : state.todos.filter(item => item.key !== key)
    }    
}

let toggleTodo = (state , action) => {

    let { key } = action.payload

    let items = state.todos.find(item => item.key == key)
            items.done = !items.done
        
    return{
        ...state ,
        items
            }
}

let editTodo = (state , action) => {
    let { text , key } = action.payload
    let items2 = state.todos.find(item => item.key == key)
        items2.text = text
    return{
        ...state ,
        items2
    }
}