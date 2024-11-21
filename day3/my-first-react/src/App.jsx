import { useEffect, useState } from "react"

function App(props) {

  const [date, setDate] = useState(new Date())


  return (
    <>
      <h2>Date : {date.getDate()}/{date.getMonth()}/{date.getFullYear()} {date.getHours()}:{date.getMinutes()}: {date.getSeconds()}</h2>
      <button onClick={() => setDate(new Date())}>Update Date</button>
    </>
  )
}

export default App
