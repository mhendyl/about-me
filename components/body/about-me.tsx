import career from '../../pages/api/career';
import styles from '../../styles/about-me/AboutMe.module.css';
export default function AboutMe(){
  const getDataCareers = career;
  return(
    <div>
      {getDataCareers.map((data) => (
        <li>{data.office}</li>
      ))}
    </div>
  )
}