import React, { useState } from 'react'

function UploadImage() {
  const [file, setFile] = useState(null)

  return (
    <div>
      <input className='m-4 cursor-pointer border rounded-sm p-1' type="file" accept="image/*" 
      onChange={(e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile)
      }} />
      {file && <img src={URL.createObjectURL(file)} alt='Uploaded' />}
    </div>
  )
}

export default UploadImage