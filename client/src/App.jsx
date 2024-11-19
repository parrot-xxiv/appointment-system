import { useEffect } from "react";
import { useState } from "react"

function App() {
  const [dataFromDb, setDataFromDb] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8090/api/test-route/test-controller')
      .then(res => res.json())
      .then(data => setDataFromDb(data?.testField))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <div className="font-bold">Test</div>
      <div>{dataFromDb}</div>
    </>
  )
}

export default App
