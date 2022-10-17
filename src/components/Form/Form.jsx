import { useState } from 'react';
import {  useReducer } from 'react';
import classes from './Form.module.css'
const reducer =(state, action)=>{
  switch(action.type){
    case "HANDLE INPUT TEXT":
      return {
        ...state,
        [action.field]: action.payload
      };
    case "ADD SKILL":
      return {
        ...state, ...state.skills.push(action.payload)
      }
    case "ADD PROJECT":
        return {
          ...state, ...state.projects.push(action.payload)
        }
    default:
      return state
  }
}

const Form =(props)=>{
  
  const initialState = {
    full_name: "",
    profession: "",
    image: "",
    skills: [],
    projects: []
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  
  const [skill, setSkill] = useState("")
  
  const [project, setProject] = useState({
    title: "",
    image: "",
    description: "",
    link: ""
  })
  console.log(project)

  const showProject = state.projects.map((item, id)=>{
    return(<div key={id}>
      <img src={item.image} alt={item.title} />
      <br />
      <a href={item.link}> {item.title}</a>
    </div>)
  })
  
  const handleInputChange =(e)=>{
    e.preventDefault()
    dispatch({
      type: "HANDLE INPUT TEXT",
      field: e.target.name,
      payload: e.target.value,
    })
    console.log(e.target.name)
    console.log(e.target.value)
  }
  const addProject=(e)=>{
    e.preventDefault()
    dispatch({type: "ADD PROJECT", payload: project})
    setProject({
      title: "",
      image: "",
      description: "",
      link: ""
    })
  }
  const addSkill=(e)=>{
    e.preventDefault();
    if(skill.length > 1){
    dispatch({type: 'ADD SKILL', payload: skill})
    setSkill("")
    }
  }
  console.log(state)
  
  return (
    <form >
      <div className={classes.card}>
      <label>Full Name </label>
      <input value={state.full_name} onChange={ handleInputChange } type="text" name='full_name'/>
      </div>
      
      <div className={classes.card}>
      <label>Profession </label>
      <input value={state.profession} onChange={ handleInputChange } type="text" name='profession'/>
      </div>
      
      <div className={classes.card}>
      <label>Image </label>
      <input value={state.image} onChange={ handleInputChange } type="text"  name='image'/>
      </div>
      
      <div className={classes.card}>
      <label>Skills </label>
      <input type="text"  value={skill} onChange={(e)=>{
        setSkill(e.target.value)
      }}/>
      <button onClick={addSkill}> Add skill</button>
      </div>
      
      <div className={classes.card}>
      <label>Project </label>
      <br />
      <input type="text" placeholder='Project Title' onChange={(e)=>{setProject((prev)=>({...prev, title: e.target.value}))}} value={project.title} name='title'/>
      <br />
      <input type="text" placeholder='Project Image' value={project.image} onChange={(e)=>{setProject((prev)=>({...prev, image: e.target.value}))}} name={project.image}/>
      <br />
      <textarea type="text" placeholder='Project Description' value={project.description} onChange={(e)=>{setProject((prev)=>({...prev, description: e.target.value}))}}/>
      <br />
      <input type="text" placeholder='Project Link' value={project.link} onChange={(e)=>{setProject((prev)=>({...prev, link: e.target.value}))}}/>
      <br />
      <button onClick={addProject}>Add Project</button>
      </div>
      { showProject }
      <br />
      <button >Submit</button>
    </form>
  )
}
export default Form;