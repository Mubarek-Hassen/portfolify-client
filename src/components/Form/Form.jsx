import classes from './Form.module.css'

const Form =(props)=>{

  
  return (
    <form >
      <div className={classes.card}>
      <label>First Name </label>
      <input type="text" />
      </div>
      <div className={classes.card}>
      <label>Last Name </label>
      <input type="text" />
      </div>
      <div className={classes.card}>
      <label>Profession </label>
      <input type="text" />
      </div>
      <br />
      <button>Submit</button>
    </form>
  )
}
export default Form;