import React from 'react'

const Modal = ({mystyle}) => {
    // console.log("mystyle",mystyle)
  return (
    <div className='modal_content' style={{display:mystyle}}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet dolores commodi illum, nam delectus eius accusantium a doloremque veritatis! Quas suscipit quia sit! Sunt, repellat culpa animi minima incidunt veniam quibusdam placeat possimus laborum voluptatum fuga? Deleniti, veritatis.</p>
    </div>  )
}

export default Modal