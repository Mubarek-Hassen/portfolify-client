import { useState } from 'react';
import {  useReducer } from 'react';
import classes from './Form.module.css'
const reducer =(state, action)=>{
  switch(action.type){
    case "HANDLE INPUT TEXT":
      return {
        ...state,
        [action.field]: action.payload
        
      }
      case "ADD SKILL":
        state.skills.push(action.payload)
        break
        case "ADD PROJECT":
          // state.projects.push(action.payload),
      default: 
        return state
  }
}

const Form =(props)=>{
  const [skill, setSkill] = useState('')
  const initialState = {
    full_name: "",
    profession: "",
    image: "",
    skills: [],
    projects: [{
      title: "",
      image: "",
      description: "",
      link: ""
    }]
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  
  const handleInputChange = (e)=>{
    dispatch({
      type: "HANDLE INPUT TEXT",
      field: e.target.name,
      payload: e.target.value,
    })
    console.log(e.target.name)
    console.log(e.target.value)
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
      <input type="text" name={state.skills} value={skill} onChange={(e)=>{
        setSkill(e.target.value)
      }}/>
      <button onClick={(e)=>{
        e.preventDefault();
        dispatch({type: 'ADD SKILL', field: e.target.name, payload: skill})
        setSkill("")
      }}> Add skill</button>
      </div>
      <div className={classes.card}>
      <label>Project </label>
      <br />
      <input type="text" placeholder='Project Title'/>
      <br />
      <input type="text" placeholder='Project Image'/>
      <br />
      <textarea type="text" placeholder='Project Description'/>
      <br />
      <input type="text" placeholder='Project Link'/>
      <br />
      <button>Add Project</button>
      </div>
      <br />
      <button>Submit</button>
    </form>
  )
}
export default Form;