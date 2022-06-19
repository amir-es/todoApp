 import React , {useState , useContext} from 'react'
 import TodosContext from '../Context/TodoContext'
 import AddTodos from './AddTodos'

 function Todos() {
     let todosContext = useContext(TodosContext)
        
     let [statusDone, setStatusDone] = useState(false)

     let {todos} = todosContext ;

     let filterTodos = todos.filter(item => item.done == statusDone)
     return (
      <div class="todosList">
        <div class="container">
        <div class="d-flex flex-column align-items-center ">
        <nav class="col-6 mb-3">
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a class={`nav-item nav-link font-weight-bold ${ statusDone === false ? 'active' : ''}`} id="nav-home-tab" onClick={ () => setStatusDone( false )}>undone <span class="badge badge-secondary">{todos.filter(item => item.done == false).length}</span></a>
            <a class={`nav-item nav-link font-weight-bold ${ statusDone === true ? 'active' : ''}`} id="nav-profile-tab"onClick={ () => setStatusDone( true )}>done <span class="badge badge-success">{todos.filter(item => item.done == true).length}</span></a>
        </div>
    </nav>
   {
       filterTodos.length == 0 
       ? <p>not item</p>
       :  filterTodos.map(item => <AddTodos item={item} text={item.text}  />)
   } 
   

        </div>

        </div>
        </div>
     )
 }

 export default Todos ;