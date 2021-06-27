import classes from './Skills.module.css'
import PageHeader from './../PageHeader/PageHeader'
import codethinking from './../../img/Codethinking.svg';

const listTitleStyle = { fontWeight: 900, color: '#9B1FE8', marginBottom: '4px' }
const frontendSkills =
    <ul>
        <li style={listTitleStyle}>FRONTEND SKILLS</li>
        <li>HTML - CSS -Bootstrap -Reactjs</li>
    </ul>

const dataScienceSkills =
    <ul>
        <li style={listTitleStyle}>DATA SCIENCE SKILLS</li>
        <li>Python -Pandas, MS-Excel</li>
    </ul>
const otherSkills =
    <ul>
        <li style={listTitleStyle}>OTHER SKILLS</li>
        <li>Git- Json - XML - Photoshop - After Effect - Drawing </li>
    </ul>

const totalSkills = [frontendSkills,
    dataScienceSkills, otherSkills]
const Skills = () => {
    return (
        <div className={classes.Skills} id="skills">
            <PageHeader title={"what about the skills"} />
            <p>
                I would like to be a part of an organization where I could use and enhance my knowledge and talent for the development of both the organization and myself.

            </p>
            <div className={classes.Container}>
                <img src={codethinking} alt="Codethinking"></img>
                {totalSkills.map(skills => {
                    return (
                        <div className={classes.List}>
                            {skills}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Skills;