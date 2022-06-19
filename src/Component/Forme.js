import React , {useState , useContext} from 'react' 
import { propTypes } from 'react-bootstrap/esm/Image';
import TodosContext from './../Context/TodoContext'
import AuthContext from './../Context/AuthContext'
import instance from './../Api/todosApi'
function Forme() {

  let todosContext = useContext(TodosContext)
  
  let authContext = useContext(AuthContext)

  let [text , setText] = useState('')
    
    let formeHandler = (e) => {
      e.preventDefault();
        if(text.length > 1) {
          let todo = { text , done : false }
          instance.post(`/todos.json` , todo)
              .then(response => todosContext.dispatch({ type : 'add-todo' , payload : { todo : { ...todo , key : response.data.name}} }))
              .catch(err => console.log(err))
            setText('');
        }
        
    }

    let inputHandler = e => {
      setText(e.target.value)
    }
    return (
        <form class="jumbotron" onSubmit={formeHandler} >
            <div class="container d-flex flex-column align-items-center">
                <h1 class="jumbotron-heading">Welcome!</h1>
                <p class="lead text-muted">To get started, add some items to your list:</p>
                <div class="form-inline">
                 {
                   authContext.log
                   ? <div class="form-group">
                      <input type="text" class="form-control mx-sm-3" placeholder="i want to do ..." onChange={inputHandler} value={text}/>
                      <button class="btn btn-primary">add</button>
                     </div>
                    : <h3>login page</h3>
                 } 
                </div>
            </div>
        </form>
    )
}
export default Forme ;