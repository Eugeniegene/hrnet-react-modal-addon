import './App.css'
import FormModal from './lib/formModal'
import { useState, useEffect} from 'react'

function App() {

  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    setOpenModal(true);
  }, [])

  return (
    <div className="Modal">
      {openModal && (
        <FormModal closeModal={() => setOpenModal(false)}/>
      )}
    </div>
  )
}

export default App;
