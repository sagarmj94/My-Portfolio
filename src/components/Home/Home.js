import classes from './Home.module.css'
import code from './../../img/code.svg'
import binaryWorld from './../../img/binaryWorld.png'
const Home = () => {
    return ( 
        <div className={classes.Home} id="home">
           <div className={classes.Container}>
                <h1 className={classes.Hello}> Hello, World</h1>
                <h1>Welcome on my website</h1>
           </div>
           <img className={classes.Code} src={code} alt="code" />
           <img className={classes.Binary} src ={binaryWorld} alt="binary world" />
        </div>
     );
}
 
export default Home;