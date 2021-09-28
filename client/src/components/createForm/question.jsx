import { useState } from "react";
import style from "./createForm.module.css";


export default function Question({
  type,
  index,
  upgradeQuestions,
  validateError,
  form,
}) {
  const [options, setOptions] = useState({});

  const handleChange = (event) => {
    setOptions({
      ...options,
      [event.target.name]: event.target.value,
    });

    options[event.target.name] = event.target.value;
    let optionsQuestion = Object.values(options).slice();
    form.questions[index].options = optionsQuestion;
    const questions = form.questions;
    upgradeQuestions(questions);
    validateError(form);
  };

  const handleOptions = (event) => {
    event.preventDefault();
    if (event.target.value === "deleteOption") {
      delete form.questions[index].options[event.target.name];
      delete options[event.target.name];

      let optionsValues = Object.values(options);
      let newOptions = {};

      form.questions[index].options = optionsValues.map(
        (element, index) => (newOptions[index] = element)
      );

      const questions = form.questions;
      upgradeQuestions(questions);
      validateError(form);
      setOptions(newOptions);
    } else if (event.target.value === "addOption") {
      setOptions({
        ...options,
        [Object.values(options).length]: "",
      });
      form.questions[index].options.push("");
      const questions = form.questions;
      upgradeQuestions(questions);
      validateError(form);
    }
  };

  return (
    <>
      {type === "simple" || type === "multiple" ? (
        <div>
          {Object.values(options).map((element, index) => (
            <div className={style.optionContainer} key={index}>
              <input
                type="text"
                name={index}
                value={options[index]}
                id={index}
                onChange={handleChange}
                placeholder={`Option ${index + 1}`}
              />

              <button
                className={style.buttonDelete}
                name={index}
                value="deleteOption"
                onClick={handleOptions}
              >
                X
              </button>
            </div>
          ))}

          <button
            className={style.button}
            value="addOption"
            onClick={handleOptions}
          >
            Add Option
          </button>
        </div>
      ) : null}
    </>
  );
}
