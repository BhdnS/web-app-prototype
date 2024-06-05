import { useState } from 'react'

const useModifyOrder = () => {
  const [modify, setModify] = useState(false)

  const handleModify = (show) => {
    if (show) {
      setModify(true)

      return
    }

    setModify(false)
  }

  return {
    handleModify,
    modify,
  }
}

export default useModifyOrder
