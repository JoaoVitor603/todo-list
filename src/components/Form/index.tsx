import { useState } from "react"
import '../../components/style.css'
import { iTask } from "../../interfaces"

export const Form = () => {
    const [text, setText] = useState("") // Controla o text inserido pelo imput
    // Use State -- text é o valor inicial, setText é próximo texto
    const [complete, setComplete] = useState(false)

    const [task, setTask] = useState<iTask[]>([])


    const allTask = task;


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
            }
            ));


    }
      console.log(completeHandler) 

    // Função filter
    const filterHandler = allTask.filter(allTask => allTask.complete === true).length
    
    return (
        <div >
            <form
                onSubmit={event => submitHandler(event)}>
                <input type="text"
                    placeholder="Digite uma nova Task" value={text}
                    onChange={event => { setText(event.target.value) }
                        // Outra forma de faz
                        //
                    }
                    required />
                <button type="submit" >
                    Adicionar
                </button>
            </form>
            <div className="title">
                <h1> Lista Task   </h1>
            </div>

            <div className="number">
                <p> Total Terefas {allTask.length} </p>
                <p>  Total Concluídas:  {filterHandler}</p>
            </div>
            <div className="Lista">
                {task.map((t: iTask) => {
                    return (
                        <div className="item">
                            {t.task}
                            <br />
                            <span className="concluido" >

                                {/* if (t.complete) {
                             return "concluido"
                             
                        }
                         else {
                             return "Não concluido"
                         } */}
                                {t.complete ? " concluido" : " Não concluido"}
                            </span><br />
                            <input type="checkbox"
                                onChange={() => completeHandler(t.id)}>
                            </input>
                        </div>


                    )

                })}
            </div>

        </div>


    )
}