import React, { useEffect } from 'react'

const UpdateTitle = () => {
    useEffect(() => {
        document.title = "عنوان جديد"
    }, [])
  return (
    <div>
      تحقق من عنوان الصفحة
    </div>
  )
}

export default UpdateTitle
