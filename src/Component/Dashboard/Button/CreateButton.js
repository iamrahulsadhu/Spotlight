import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";

const CreateButton = () => {
    return (
        <Link to="create" className="btn btn-danger"><IoAdd />Create</Link>
    )
}

export default CreateButton;