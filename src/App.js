import { useState, useEffect} from 'react'

import FormModal from './lib/formModal.js'

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

export default App
