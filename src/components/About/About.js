import classes from './About.module.css'
import PageHeader from './../PageHeader/PageHeader'
import photo from './../../img/photo.jpg';
const About = () => {
    return( 
        <div className={classes.AboutMe} id="about">
            <PageHeader title={'About Me'} />
           <div className={classes.Container}>
               <div className={classes.Text}>
                   <h2>Hello! I'm Sagar Jadhav</h2>
                   <p>
                       I am learn programming. or in other words, I am a programmer.I would like to be a good in web development and smart learner.
                   </p>
               </div>
               <div className={classes.Photo}>
                 <img className={classes.Me} src={photo} alt="Me"></img>
               </div>
           </div>
        </div>
    );
}
export default About;