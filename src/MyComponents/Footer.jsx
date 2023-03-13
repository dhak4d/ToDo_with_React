import React from 'react'


export const Footer=()=> {
  let footerStyle={
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor:'black',
    color:'white',
  }
  return (
    <footer style={footerStyle}>
     <p className='text-center'>copyright &copy; MyTodoList.com</p> 
    </footer>
  )
}

