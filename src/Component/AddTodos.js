import React , {useState , useContext} from 'react'
import TodosContext from './../Context/TodoContext'
import Edit from './Edit'
import instance from './../Api/todosApi'
import { Link } from 'react-router-dom'

function AddTodos (props) {

    let todosContext = useContext(TodosContext)

    let [edit , setEdit] = useState('')

    let {item} = props ;

    let editHandler = (text) => {
        instance.put(`/todos/${item.key}.json` , { done : item.done , text})
            .then(response => {todosContext.dispatch({type : 'edit-todo' , payload : { key : item.key , text }})})
            .catch(err => console.log(err))
        setEdit(false)
    }

    let doneHandler = (e) => {
        instance.put(`/todos/${item.key}.json` , { done : !item.done , text : item.text})
            .then(response => {
                todosContext.dispatch({type : 'toggle-todo' , payload : { key : item.key }})
            })
            .catch(err => console.log(err))
    }

    let deletHanler = () => {
        instance.delete(`/todos/${item.key}.json`)
        .then(response => {
            console.log(response.data)
            todosContext.dispatch({ type : 'delete-todo' , payload : {key : item.key}})
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>

        {
             !edit
             ?  (
             <div class="col-6 mb-2">
                <div class="d-flex justify-content-between align-items-center border rounded p-3">
                    <div>
                        <Link to = {`/todos/${item.key}`}>{props.item.text}</Link>
                    </div>
                            <div>
                                <button type="button" class={`btn btn-sm ${item.done ? 'btn-warning' : 'btn-success'} `} onClick={ doneHandler }>{item.done ? 'undone' : 'done'}</button>
                                <button type="button" class="btn btn-info btn-sm ml-1" onClick={() => setEdit(true) }>edit</button>
                                <button type="button" class="btn btn-danger btn-sm ml-1" onClick={ deletHanler } >delete</button>
                            </div>
                    </div>
             </div> )
             : <Edit text={item.text} edit={editHandler}/>
        }
       
        </>
    )
}

export default AddTodos ;