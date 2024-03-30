import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import DashboardLayout from './Layout/DashboardLayout';
import Product from './components/Product';

function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element : <DashboardLayout><Product></Product></DashboardLayout>
    }
  ]
   
  )
  return (
    <div className="App" >
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
