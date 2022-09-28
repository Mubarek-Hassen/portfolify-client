import classes from './Header.module.css'

const Header = (props) =>{
  return (
  <header className={classes.header}>
    <h1>Portfolify</h1>
    <nav>
      <ul className={classes.ul}>
        <li>Home</li>
        <li>About</li>
        <li>More</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
  )
}
export default Header;