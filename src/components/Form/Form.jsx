import {  useReducer } from 'react';
import classes from './Form.module.css'
const reducer =(state, action)=>{
  switch(action.type){
    case "HANDLE INPUT TEXT":
      return {
        ...state,
        [action.field]: action.payload,
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
    skills: [{skill: "" }],
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
  console.log(state.full_name)
  return (
    <form >
      <div className={classes.card}>

      <label>Full Name </label>

      <input value={state.full_name} onChange={ handleInputChange } type="text" name='full_name'/>


      </div>
      {/* <div className={classes.card}>
      <label>Profession </label>
      <input onChange={ handleInputChange } type="text" name='profession'/>
      </div>
      <div className={classes.card}>
      <label>Image </label>
      <input  type="text" value={state.image} name='image'/>
      </div>
      <br /> */}
      <button>Submit</button>
    </form>
  )
}
export default Form;