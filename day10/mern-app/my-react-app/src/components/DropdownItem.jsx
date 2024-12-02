const DropdownItem = (prop) => {


    const handleItemClick = () => {
        console.log(`Clicked on ${prop.item}`);
        prop.whenItemClicked(prop.item);
    }

    return (
        <li><a onClick={handleItemClick} className="dropdown-item" href="#">{prop.item}</a></li>
    )
}

export default DropdownItem;