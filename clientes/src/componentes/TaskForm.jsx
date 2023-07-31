import "../estaticos/css/TaskForm.css";
import { Picture } from "../componentes/Picture";
import Asiatica from '../estaticos/images/fondo3.jpg'
import SombreroRojo from '../estaticos/images/sombrerorojo.jpg'
import Fondo from '../estaticos/images/mujertriste.jpg'
import Matrimonio from '../estaticos/images/matrimonio.jpg'
import Native from '../estaticos/images/native.jpg';
export const TaskForm = () => {
  return (
    <div className="pantalla">
      <div className="izquierda">
        <h1>Formulario</h1>
        <form>
          <div className="form-grupo">
            <label>Title</label>
            <input></input>
          </div>
          <div className="form-grupo">
            <label>Title</label>
            <textarea
              rows='5'
            ></textarea>
          </div>
          <div className="form-grupo form-boton">
            <button>Click Here</button>
          </div>
        </form>
      </div>
      <div className="derecha">
        <div>
          <Picture 
            imagen={Asiatica}
            titulo ='Lejano Oriente'
            descripcion='Sint cillum ad voluptate ipsum anim exercitation.'  
          ></Picture>
          <Picture
            imagen={SombreroRojo}
            titulo='Glamour'
            descripcion='Cillum reprehenderit minim et sit ad sint est.'
          ></Picture>
          <Picture
            imagen={Fondo}
            titulo='Elegant'
            descripcion='Dolor non officia elit velit amet adipisicing. Dolore sint tempor ex minim.'
          ></Picture>
          <Picture
            imagen={Matrimonio}
            titulo='These Dreams'
            descripcion='Labore et esse labore dolor. Qui non officia quis exercitation nisi ad ipsum velit.'
          ></Picture>
          <Picture
            imagen={Native}
            titulo='Native Beautifull'
            descripcion='Irure tempor aliquip aute ex dolore aute est excepteur duis magna cillum. Aliquip aliqua.'
          ></Picture>
        </div>
      </div>
    </div>
  );
};
