import { useState, useEffect } from "react"
import '../../components/style.css'
import { iTask } from "../../interfaces"

export const Form = () => {
    const [task, setTask] = useState<iTask[]>([])
    const [text, setText] = useState("") // Controla o text inserido pelo imput
    // Use State -- text é o valor inicial, setText é próximo texto
    
    const [filter, setFilter] = useState<iTask[]>(task)

    useEffect(() => setFilter(task), [task])

    //Funçao de ADD item digitado a lista
    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setTask([...task, { id: Math.floor(Math.random() * 100), task: text, complete: false }])

        setText("")
        //console.log(task)
    }
    //Função que altera o valor de complete
    function completeHandler(id: number) {
        return setTask(

            task.map((tarefa) => {
               if (tarefa.id === id)
                    tarefa.complete = !tarefa.complete
 
                return tarefa
            } // final
            ) // final map
            ) //Final SetTask
            } // Final completeHandler
    
            function filterIncomplete () {
                return setFilter(task.filter((tarefa: iTask) => tarefa.complete === false))
            }

            function filterComplete () {
                return setFilter(task.filter((tarefa: iTask) => tarefa.complete === true))
            }
            function filterAll () {
                return setFilter(task) // SDDS DO OUTRO JEITO :(
            }
            
            function deleteTask (id: number) {
                setTask(task.filter((tarefa) => tarefa.id !== id))
            }
    return (
        
        <div >
            <form onSubmit={event => submitHandler(event)}>
                <input 
                    type="text"
                    placeholder="Digite uma nova Task" 
                    value={text}
                    onChange={event => { setText(event.target.value) }}
                    required 
                />
                <button type="submit" >
                    Adicionar
                </button>
            </form>
            <div className="title">
                <h1> Lista de tarefas  </h1>
                <button onClick={() => filterIncomplete()}>Pendentes :o</button>
                <button onClick={() => filterComplete()}>Finalizadas :D</button>
                <button onClick={() => filterAll()}>Todas Tarefas :D</button>
            </div>

            <div className="number">
                <p> Total Tarefas: {task.length} </p>
                <p> Total Concluídas: {task.filter((tarefa: iTask) => tarefa.complete===true ).length} </p>
                <p> Total Desconcluidas: {task.filter((tarefa: iTask) => tarefa.complete===false ).length} </p>
            </div>
            <div className="Lista">
                {
                filter.map((t: iTask) => {
                    return (
                        <div className="item">
                            <h4>{t.task}</h4>
                            <br/>
                            <span className="Concluido" >
                                {t.complete ? "Concluido" : "Pendente"}
                            </span>
                            <br/>
                            <div>
                            <input type="button"
                                value={t.complete ? 'Desconcluir' : 'Concluir'}
                                onClick={() => completeHandler(t.id)}
                            />
                            <input type="button"
                                value='Delete'
                                onClick={() => deleteTask(t.id)}
                            />
                            </div>
                        </div>
                    )

                })
                }
            </div>

        </div>
    )
}