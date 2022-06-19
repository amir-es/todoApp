import React , {useEffect , useState} from 'react'
import { useParams , useHistory} from 'react-router-dom' 
import  instance from './../Api/todosApi'

function Todo (props) {
    let params = useParams()
    let [todo , setTodo] = useState({})
    let [loading , setLoading] = useState()
    let hestory = useHistory()
    useEffect(() => {
        setLoading(true);
        instance.get(`/todos/${params.id}.json`)
            .then(response => {
                setLoading(false);
                if(response.data){
                    setTodo({ ...response.data , key : params.id })
                }else{
                    hestory.push('/404')
                }
               
            })
            .catch(err => console.log(err));
            console.log(instance)
            
    } , [])
    
    console.log(todo.text)
    console.log(params)

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {
                        loading 
                        ? <h2 style={{textAlign : 'center'}}>Loading data ...</h2>
                        : <>
                            <h2>Todo Detail</h2>
                            <p>{todo.text}</p>
                            <span className={`badge ${todo.done ? 'badge-success' : 'badge-warning'}`} >{ todo.done ? 'done' : 'undone'}</span>
                          </>
                    }
                    
                </div>
            </div>
        </div>
        
    )

}

export default Todo ;