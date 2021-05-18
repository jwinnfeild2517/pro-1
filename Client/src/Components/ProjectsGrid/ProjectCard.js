import { Link } from "react-router-dom";
import randomColor from "randomcolor";

const projectCard = (props) => {
  const color = randomColor()
  // import imageName from '../Assets/images/IMG_2426.jpg'
  return(
    <Link to={props.link} className="projects__items projects__grid-item" style={{backgroundColor: color}}>
      <img src={`/images/${props.image}.jpeg`} alt="project item"></img>
      <h3 className="projects__grid-item-name">{props.name}</h3>
    </Link>
  )
}

export default projectCard;