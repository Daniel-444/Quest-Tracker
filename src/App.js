import logo from './logo.svg';
import './App.css';
import AplicacionLogo from './imagenes/AplicacionLogo.png';
import ListaDeTareas from './componentes/ListaDeTareas';



function App() {
  return (
    <div className='Aplicacion-LdT'>

     <div className='A1logo-contenedor'>   
       <img
         src={AplicacionLogo}
         className='A1logo' />
     </div>

     <div className='Lista-tareas-principal' > 
      <h1>Quests:</h1>
      <ListaDeTareas />
      


     </div>

    </div>

  );
}

export default App;
