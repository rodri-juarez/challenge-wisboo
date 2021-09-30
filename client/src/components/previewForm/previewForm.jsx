import style from "./previewForm.module.css";
import { useContext } from "react";
import FormContext from "../../context/formContext";

export default function PreviewForm() {
  const { form } = useContext(FormContext);

  return (
    <section className={style.section}>
      <header className={style.header}>
        <h2>{form.name || "Title"}</h2>
        <p>{form.description || "Description"}</p>
      </header>
      <div className={style.divQuestions}>
        {form.questions?.map((element, index) => (
          <div key={index}>
            {element !== null && (
              <div className={style.questions}>
                <h3>{element.text}</h3>
                {element.question_type === "multiple" ? (
                  <div className={style.inputContainer}>
                    {element.options.map((option, index) => (
                      <div className={style.option} key={index}>
                        <input
                          className={style.input}
                          type="checkbox"
                          name={element.text}
                          id={index}
                        />
                        <label htmlFor={index}>{option}</label>
                      </div>
                    ))}
                  </div>
                ) : element.question_type === "simple" ? (
                  <div className={style.inputContainer}>
                    {element.options.map((option, index) => (
                      <div className={style.option} key={index}>
                        <input
                          className={style.input}
                          type="radio"
                          name={element.text}
                          id={index}
                        />
                        <label htmlFor={index}>{option}</label>
                      </div>
                    ))}
                  </div>
                ) : element.question_type === "text" ? (
                  <textarea placeholder="Response" />
                ) : null}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
