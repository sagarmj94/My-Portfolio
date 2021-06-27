import classes from './Project.module.css'
import PageHeader from './../PageHeader/PageHeader.js'
import Pcompleted from './../../img/Pcompleted.png'

const listTitleStyle = { fontWeight: 900, color: '#9B1FE8', marginBottom: '2px' }

const ProjectTitles =
    <ul>
        <li style={listTitleStyle} >Javascript Titles</li>
        <li>Watch</li>
    </ul>

const ReactjsProjectTitles =
    <ul>
        <li style={listTitleStyle} >React Js Titles</li>
        <li>Covid-19 Tracker</li>
        <li>Netflix-clone</li>
        <li>Portfolio</li>
    </ul>

const totalProjects = [ProjectTitles, ReactjsProjectTitles]

const Project = () => {
    return (
        <div className={classes.Project} id="project">
            <PageHeader title={"Projects"} />
            <div className={classes.Container}>
                <img src={Pcompleted} alt="Pcompleted"></img>
                {totalProjects.map(Projects => {
                    return (
                        <div className={classes.List}>
                            {Projects}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Project;