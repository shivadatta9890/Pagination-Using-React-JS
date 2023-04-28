import React from 'react'

const Page = ({data,pageHandler}) => {
    let pagenumbers = [];
    for(let i=1;i<Math.ceil(data.length/10)+1;i++){
      pagenumbers.push(i);
    }
  return (
    <div>
        <center>
            {pagenumbers.map(page => <button className='btn' onClick={()=> pageHandler(page)}>{page}</button>)}
        </center>
    </div>
  )
}

export default Page