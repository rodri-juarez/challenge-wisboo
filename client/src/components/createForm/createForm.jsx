import style from "./createForm.module.css";
import Question from "./question";

export default function CreateForm({
  form,
  error,
  handleSelect,
  handleForm,
  addQuestion,
  deleteQuestion,
  createPoll,
  setForm
}) {
  return (
    <section>
      <header>
        <h1>Creación de encuestas</h1>
      </header>
      <form>
        <div>
          <input
            type="text"
            name="name"
            id="title"
            value={form.name}
            placeholder="Title"
            onChange={handleForm}
          />
        </div>
        <div>
          <input
            type="text"
            name="description"
            id="description"
            value={form.description}
            placeholder="Description"
            onChange={handleForm}
          />
        </div>

        {form.questions.map((element, index) => (

          <div key={index}>
            {element === null ? null : (
              <div>
                <div>
                  <div>
                    <select
                      name="question_type"
                      id={index}
                      onChange={handleSelect}
                    >
                      <option value="" defaultValue hidden>
                        Select type of question
                      </option>
                      <option value="sm">Selección múltiple</option>
                      <option value="ss">Selección simpe</option>
                      <option value="text">Text</option>
                    </select>

                    <input
                      type="text"
                      name="text"
                      id={index}
                      value={element.text}
                      placeholder="Question"
                      onChange={handleSelect}
                    />
                  </div>

                  <Question
                    type={element.question_type}
                    index={index}
                    setForm={setForm}
                    form={form}
                  />
                </div>

                <button name={index} onClick={deleteQuestion}>
                  x
                </button>
              </div>
            )}
          </div>
        ))}

        <button onClick={addQuestion}>Add Question</button>

        
        <div>
          <button onClick={createPoll}>Create Poll</button>
        </div>
      </form>
    </section>
  );
}
