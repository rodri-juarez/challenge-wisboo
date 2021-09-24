import CreateForm from "../components/createForm/createForm";
import PreviewForm from "../components/previewForm/previewForm";
import useForm from "../hooks/useForm";
import style from "./App.module.css";

function App() {
  const {
    form,
    error,
    handleSelect,
    handleForm,
    addQuestion,
    deleteQuestion,
    createPoll,
    setForm
  } = useForm();

  return (
    <div className={style.divContainer}>
      <CreateForm
        form={form}
        error={error}
        setForm={setForm}
        handleSelect={handleSelect}
        handleForm={handleForm}
        addQuestion={addQuestion}
        deleteQuestion={deleteQuestion}
        createPoll={createPoll}
      />
      <PreviewForm form={form} />
    </div>
  );
}

export default App;
