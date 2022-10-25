
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { route } from './routes/route';
import { useContext } from 'react';
import { mainContext } from './context/MainContext';

function App() {
  const {dark} = useContext(mainContext)
  return (
    <div className={dark ? 'bg-gray-800 text-gray-100' : 'bg-white text-black'}>
      <RouterProvider router={route}/>
    </div>
  );
}

export default App;
