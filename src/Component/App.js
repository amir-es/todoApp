import React , {useReducer} from 'react' ;
import {Route , BrowserRouter , Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Header'
import TodosContext from './../Context/TodoContext'
import AuthContext from './../Context/AuthContext'
import AppReducer from './../Rducer/AppReducer'
import loadable from '@loadable/component'
const Home = loadable(() => import('./../Routers/Home'))
const About = loadable(() => import('./../Routers/About'))
const Contact = loadable(() => import('./../Routers/Contact'))
const Todo = loadable(() => import('./../Routers/Todo'))
const NatFound = loadable(() => import('./../Routers/NatFound'))

function App () {
    
    const [state , dispatch] = useReducer(AppReducer , {
        todos : [] ,
        log : false
    })


    return(

        <BrowserRouter>
                <AuthContext.Provider value={{
                    log : state.log ,
                    dispatch 
                }}>
                <TodosContext.Provider value={{
                    todos : state.todos ,
                    dispatch ,
                }}>
                <div class="App">

                    <Header />

                    <Switch>
                            <Route path="/" exact component={Home} />

                            <Route path="/todos/:id" component={Todo} />

                            <Route path="/about" component={About} />

                            <Route path="/contact" component={Contact} />

                            <Route path="/404" component={NatFound} />
                                
                            <Route component={NatFound} />
                    </Switch>
                   

                </div>
                </TodosContext.Provider>
                </AuthContext.Provider>
        </BrowserRouter>
        

        )
}
export default App ;