import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';


// DOC : https://fkhadra.github.io/react-toastify/update-toast

export default function Notif(){
  const notify = () => toast("Wow so easy !");
  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <ToastContainer />
    </div>
  );
}

