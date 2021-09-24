import CreateForm from "../components/createForm/createForm";
import PreviewForm from "../components/previewForm/PreviewForm";
import useForm from "../hooks/useForm";
import style from "./App.module.css";

function App() {

  return (
    <div className={style.divContainer}>
      <CreateForm />
      <PreviewForm />
    </div>
  );
}

export default App;
