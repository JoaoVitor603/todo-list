import { useState } from "react"
import '../../components/style.css'
import { iTask } from "../../interfaces"

export const Form = () => {
    const [text, setText] = useState("")
    // Use State -- text é o valor inicial, setText é próximo texto
    const [complete, setComplete] = useState(false)

    const [task, setTask] = useState<iTask[]>([])


    const allTask = task;
   
    
    //Funçao de ADD item digitado a lista
    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setTask([...task, { task: text, complete: false}])

        setText("")
        //console.log(task)
    }

    // Função filter
     const filterHandler = allTask.filter(allTask => allTask.complete === false)
       
         console.log(filterHandler)
       
     


    return (
        <div >
            <form
                onSubmit={event => submitHandler(event)
                }>
                <input type="text"
                    placeholder="Digite uma nova Task" value={text}
                    onChange={event => { setText(event.target.value) }
                }
                required

                />
                <button type="submit" >
                    Adicionar
                </button>


            </form>
            <div className="title">

                <h1> Lista Task   </h1>
            </div>

            <div className="number">
                <p> {allTask.length} </p>
            </div>


                <div className="Lista"> 
            {task.map((t: iTask) => {
                return (
                    <div className="item">
                        <span>
                            {t.task}
                        </span><br />
                        <span >

                          {/* if (t.complete) {
                             return "concluido"
                             
                        }
                         else {
                             return "Não concluido"
                         } */}
                            {t.complete ? " concluido" : " Não concluido"}
                        </span><br />
                    </div>
                   
                )

            })}
             </div>

        </div>


    )
}