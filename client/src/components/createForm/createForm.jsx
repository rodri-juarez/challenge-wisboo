import { useContext } from "react";
import FormContext from "../../context/formContext";
import style from "./createForm.module.css";
import Question from "./question";
import { IconContext } from "react-icons";
import { AiFillDelete } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";

function CreateForm() {
  const {
    form,
    error,
    handleForm,
    selectTypeQuestion,
    addQuestion,
    deleteQuestion,
    createSurvey,
  } = useContext(FormContext);

  return (
    <section className={style.section}>
      <header className={style.header}>Survey creation</header>
      <form>
        <div className={style.title}>
          <input
            placeholder="Title"
            name="name"
            id="title"
            value={form.name}
            onChange={handleForm}
          />
        </div>
        {error.name ? <div className={style.error}>{error.name}</div> : null}
        <div className={style.description}>
          <input
            placeholder="Description"
            name="description"
            id="description"
            value={form.description}
            onChange={handleForm}
          />
        </div>
        {error.description ? (
          <div className={style.error}>{error.description}</div>
        ) : null}
        {form.questions.map(
          (element, index) =>
            element !== null && (
              <div className={style.formQuestions} key={index}>
                <div className={style.questionContainer}>
                  {element === null ? null : (
                    <div className={style.divQuestion}>
                      <div className={style.question}>
                        <div>
                          <select
                            id={index}
                            name="question_type"
                            onChange={selectTypeQuestion}
                          >
                            <option value="">Select question type</option>
                            <option value="multiple">Multiple choice</option>
                            <option value="simple">Simple selection</option>
                            <option value="text">Text</option>
                          </select>
                          <br />
                          <input
                            placeholder="Question"
                            name="text"
                            id={index}
                            value={element.text}
                            onChange={selectTypeQuestion}
                          />
                          <Question
                            type={element.question_type}
                            index={index}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <button
                  className={style.deleteQuestion}
                  name={index}
                  onClick={() => deleteQuestion(index)}
                >
                  {" "}
                  <IconContext.Provider
                    value={{ style: { fontSize: "1.5rem", color: "red" } }}
                  >
                    <AiFillDelete />
                  </IconContext.Provider>
                </button>
              </div>
            )
        )}

        <button className={style.button} onClick={addQuestion}>
          <IconContext.Provider
            value={{
              style: { fontSize: "1rem", color: "#a72ba0", marginRight: "5px" },
            }}
          >
            <BsPlusCircleFill />
          </IconContext.Provider>{" "}
          Add question
        </button>
        {error.question ? (
          <div className={style.error}>{error.question}</div>
        ) : null}
        {error.option ? (
          <div className={style.error}>{error.option}</div>
        ) : null}

        <div>
          <button className={style.createSurvey} onClick={createSurvey}>
            Create Survey
          </button>
        </div>
      </form>
    </section>
  );
}

export default CreateForm;
