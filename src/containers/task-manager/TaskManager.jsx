import './TaskManager.css'
import {Task} from "../../components";
import React, {useState,useEffect,useCallback} from 'react'
import lamp from "../../assets/lamp.png"

const TaskManager = () => {

  const [formValues,setValues] = useState({
    title:"",
    description:"",
    date:""
  }
  )

  const [listData,setListData] = useState([]
  )

  const [list,setList] = useState([]
  )

  const deleteTask = useCallback((item) => {
    setListData(list => list.filter(i => i.id !== item))
  }, [setListData])

  const handleAddFavorite = useCallback((id) => {
    setListData(list => list.map( itemList => {return itemList.id === id ?  { ...itemList, favorite: !itemList.favorite } : itemList}))
  }, [setListData])

  const handleAddComplete = useCallback((id) => {
    setListData(list => list.map( itemList => {return itemList.id === id ?  { ...itemList, complete: !itemList.complete } : itemList}))
  }, [setListData])

  function maskDate(date) {
    return date
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1");
  };

  function handleInput(inputValues) {
    const {name,value} = inputValues.target
    setValues(name==="date"?{...formValues,[name]:maskDate(value)}:{...formValues,[name]:value})    
  }

  function handleSubmit(submitValues) {
    submitValues.preventDefault()
    const formData = new FormData(submitValues.target)
    addTask(Object.fromEntries(formData))
  }

  function addTask(data) {
    setListData([...listData,{title:data.title, description:data.description, date:data.date, id:listData.length,favorite:false,complete:false}])
  }
  
  function filterFavorites() {
    setList(listData.filter(i=> i.favorite))
  }

  function filterCompletes() {
    setList(listData.filter(i=> i.complete))
  }

  function renderAll() {
    setList(listData)
  }

  useEffect(() => {
   setList(listData)
  }, [listData])

  return (
    <section className="tasks">
      <div className='tasks_container_explanation'>
        <div className='tasks_container_texts'>
        <h2>Minha primeira aplicação com o <br/>React e seus Hooks</h2>
          <p>Agora, se tratando sobre React, nada melhor que um gerador de tarefas para testar a Renderização e os React Hooks, já que esse
            tipo de aplicação pode utilizar das principais características do Framework, por mais que seja simples, ela usa os 3 principais Hooks:
          </p>
          <ul>
              <li>useEffect</li>
              <li>useCallBack</li>
              <li>useState</li>
            </ul>
        </div>
        <div className='tasks_container_lamp'>
          <img src={lamp} alt="" />
        </div>
      </div>
      <div className="tasks_container">
        <div className="tasks_generator">
          <form onSubmit={handleSubmit}>
            <input placeholder='Titulo' name='title' type="text" onChange={handleInput} value={formValues.title}/>
            <input placeholder='Descrição'  name='description' type="text" onChange={handleInput} value={formValues.description}    />
            <input placeholder='Data' name='date' onChange={handleInput} value={formValues.date} />
            <button type="submit">Criar</button>
          </form>  
        </div>
        <div className="tasks_list">
            <div className='tasks_filter'>
              <div>Filtrar ▼</div>
              <p onClick={renderAll}>Todos</p>
              <p onClick={filterCompletes}>Concluídas</p>
              <p onClick={filterFavorites}>Favoritos</p>
            </div>
            {list.map( itemList =>(
                <Task 
                  key={itemList.id}
                  title={itemList.title}
                  description={itemList.description}
                  date={itemList.date}
                  handleDelete={deleteTask}
                  handleAddFavorite={handleAddFavorite}
                  handleAddComplete={handleAddComplete}
                  id={itemList.id}
                  favorite={itemList.favorite}
                  complete={itemList.complete}
              />
            ))}          
        </div>        
      </div>
    </section>
  ) 
}

export default TaskManager

