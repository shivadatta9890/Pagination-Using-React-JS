import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Page from './Page';

const App = () => {
  const [data,setData] = useState([]);
  const [perpage,setPerpage] = useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {setData(res.data);setPerpage(res.data.slice(0,10));})
  },[]);

  const pageHandler = (pagenumber)=>{
    setPerpage(data.slice((pagenumber*10)-10,pagenumber*10));
  }

  return (
    <div>
      <h1>Pagination Using React JS</h1>
      {/* <h1>Working</h1> */}
      {data.length >=1 ? <div>{perpage.map(post => <div className='title'>{post.title}</div>)}</div> : null}<br />
      <Page data={data} pageHandler={pageHandler}/>
     

    </div>
  )
}

export default App