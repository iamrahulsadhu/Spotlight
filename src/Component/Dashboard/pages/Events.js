import CreateButton from "../Button/CreateButton"
import './Style.css';

const Events = (props) => {
    return(
        <div className="body">
            <div className="title-section">
                <div>
                    <h1 style={{fontFamily: "serif", fontWeight: "bold"}}>{props.title}</h1>
                </div>
                <div>
                    <div style={{marginLeft: "10rem"}}><CreateButton /></div>
                </div>
            </div>
        </div>
    )
}

export default Events