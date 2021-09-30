import CreateForm from "../components/createForm/createForm";
import PreviewForm from "../components/previewForm/previewForm";
import style from "./App.module.css";
import { FormProvider } from "../context/formContext";

function App() {
  
  return (
    <div className={style.divContainer}>
      <FormProvider>
        <CreateForm />
        <PreviewForm />
      </FormProvider>
    </div>
  );
}

export default App;
