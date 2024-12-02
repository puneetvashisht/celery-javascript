import { useState } from "react";
import DropdownItem from "./DropdownItem";

const Dropdown = () => {

    const [show, setshow] = useState(false)
    const [caption, setCaption] = useState('')
    const [cuisines, setCuisines] = useState(['Indian', 'Mexican', 'Japanese', 'Continental'])

    const handleItemInParent = (item) => {
        console.log('Item clicked in parent component, ', item)
        setCaption(item)
        setshow(false)
    }

    let listCuisines = cuisines.map((cuisine, i)=> <DropdownItem key={i} whenItemClicked={handleItemInParent} item={cuisine}></DropdownItem>)


    

    return (
        <div className="dropdown">
        <button onClick={()=> setshow(!show)} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {caption || 'Select your cuisine'}
        </button>
        <ul className={show?"dropdown-menu show": "dropdown-menu"}>
            {listCuisines}
            {/* <DropdownItem item={'Action'}></DropdownItem>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li> */}
        </ul>
        </div>
    )
}

export default Dropdown;