import './App.css';
import Header from '../../components/shared/header'
import { useLoaderData, useParams } from 'react-router-dom';
import { Outlet } from'react-router-dom';

function App() {
  return (
    <div>
    <Header/>
   
     </div>
  );
}

export default App;







export function BlogSingle() {
  let data =useLoaderData()

  return (
    <div>{data.body}</div>
  )
}

