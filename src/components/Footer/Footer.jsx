import classes from './Footer.module.css'

const Footer =()=>{
  return (
    <footer className={classes.footer}>
      <ul className={classes.ul}>
        <li>GitHub</li>
        <li>LinkedIn</li>
        <li>Something</li>
        <li>Something Else</li>
      </ul>
    </footer>
  )
}

export default Footer;