

export const validation = (form) => {
  let error = {};
  if (!form.name) error.name = "The title of the survey is required";
  if (!form.description) error.description = "Description is required";
  if (form.questions.length === 0) error.question = "You must add at least one question";

  for (let i = 0; i < form.questions.length; i++) {
    if (form.questions[i] !== null && form.questions[i].text === "") {
      error.question = "All questions must be complete";
    }

    if (
      form.questions[i] !== null &&
      form.questions[i].question_type !== "text"
    ) {
      if (form.questions[i].options.length === 0)
        error.option = "All multiple/simple questions must have at least 1 option";
      for (let j = 0; j < form.questions[i].options.length; j++) {
        if (form.questions[i].options[j] === undefined)
          error.option = "All options must be complete";
      }
    }
  }
  
  return error;
};
