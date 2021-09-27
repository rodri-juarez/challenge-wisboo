import CreateForm from "../components/createForm/createForm";
import PreviewForm from "../components/previewForm/previewForm";
import useForm from "../utils/useForm";
import style from "./App.module.css";

function App() {
  const {
    form,
    error,
    selectTypeQuestion,
    handleForm,
    addQuestion,
    upgradeQuestions,
    deleteQuestion,
    validateError,
    createSurvey,
  } = useForm();

  return (
    <div className={style.divContainer}>
      <CreateForm
        form={form}
        error={error}
        selectTypeQuestion={selectTypeQuestion}
        handleForm={handleForm}
        addQuestion={addQuestion}
        upgradeQuestions={upgradeQuestions}
        deleteQuestion={deleteQuestion}
        validateError={validateError}
        createSurvey={createSurvey}
      />
      <PreviewForm form={form} />
    </div>
  );
}

export default App;
