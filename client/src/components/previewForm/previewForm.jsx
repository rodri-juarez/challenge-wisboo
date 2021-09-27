import style from "./previewForm.module.css";

export default function PreviewForm({ form }) {
  return (
    <div>
      <header>
        <h1>{form.name || "Título"}</h1>
        <p>{form.description || "Descripción"}</p>
      </header>
      <div>
        {form.questions?.map((element, index) => (
          <div key={index}>
            {element !== null && (
              <div>
                <div>
                  <h4>{element.text}</h4>
                  {element.question_type === "multiple" ? (
                    <div className="inputs">
                      {element.options.map((option, index) => (
                        <div key={index}>
                          <label htmlFor={index}>
                            <input
                              type="checkbox"
                              name={element.text}
                              id={index}
                            />
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  ) : element.question_type === "simple" ? (
                    <div>
                      {element.options.map((option, index) => (
                        <div key={index}>
                          <label htmlFor={index}>
                            <input
                              type="radio"
                              name={element.text}
                              id={index}
                            />
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  ) : element.question_type === "text" ? (
                    <textarea placeholder="Respuesta..." />
                  ) : null}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
