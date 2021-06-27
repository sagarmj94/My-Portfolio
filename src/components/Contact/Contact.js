import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import classes from './Contact.module.css';

const handleURL = (url) => {
    return () => window.open(url, "_blank")
}
const Contact = () => {
    return(
        <div className={classes.Contact} id="contact">
            <div className={classes.ContactIcons}>
                <FaGithub color='white' size='30px' style={{padding: '1%'}}
                onClick={handleURL('https://github.com/Sagarmj94')}/>
                <FaLinkedin color='white' size='30px' style={{padding: '1%'}}
                onClick={handleURL('https://www.linkedin.com/in/sagar-jadhav-8a1935156/')}/>
                <FaInstagram color='white' size='30px' style={{padding: '1%'}}
                onClick={handleURL('https://www.instagram.com/javascripthub/')}/>
            </div>
        </div>
    );
}
export default Contact;