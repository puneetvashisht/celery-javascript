
import './App.css'
import Badge from './components/Badge'
// import Dropdown from './components/Dropdown'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';


function App() {


  return (
    <>
      <h1>Hello, React!</h1>
      <Badge caption="Votes"></Badge>
      <Badge caption="Inbox"></Badge>
      {/* <Dropdown></Dropdown> */}
      <Button variant="primary">Primary</Button>


      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </>
  )
}

export default App
