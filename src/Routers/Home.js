import React , {useEffect , useContext , useState} from 'react'
import Forme from './../Component/Forme'
import Todos from './../Component/Todos'
import instance from './../Api/todosApi'
import TodosContext from './../Context/TodoContext'
function Home () {

    const [loading , setLoading] = useState('')

    let todosContext = useContext(TodosContext)

    useEffect(() => {
        setLoading(true)
        instance.get(`/todos.json`)
            .then(response => jsonHandler(response.data))
            .catch(err => console.log(err))
    } , [])

    let jsonHandler = (data) => {
        setLoading(false)
        let todos = Object 
                        .entries(data)
                        .map(([key , value]) => {
                            return {
                                ...value , 
                                key
                                
                            }
                        })
                        
            todosContext.dispatch({ type : 'init-todo' , payload :  todos })
    }

return (
    <>
                <Forme />
                
                {
                    loading 
                        ? <h2 style={{textAlign : 'center'}}>Loading data ...</h2>
                        : ( <Todos /> )
                }
     </>
)

}

export default Home ;