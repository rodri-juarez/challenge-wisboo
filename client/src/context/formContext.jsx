import { createContext, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { validation } from "../utils/validation";

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    questions: [],
  });
  const [error, setError] = useState({});

  const validateError = (form) => {
    setError(validation(form));
  };
  const handleForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    validateError(form);
  };

  const selectTypeQuestion = (event) => {
    form.questions[event.target.id][event.target.name] = event.target.value;
    setForm({
      ...form,
      questions: form.questions,
    });
    validateError(form);
  };

  const addQuestion = (event) => {
    event.preventDefault();
    setForm({
      ...form,
      questions: [
        ...form.questions,
        { question_type: "", text: "", options: [] },
      ],
    });
    validateError(form);
  };

  const upgradeQuestions = (questions) => {
    setForm({
      ...form,
      questions: questions,
    });
  };

  const deleteQuestion = (index) => {
    form.questions[index] = null;
    setForm({
      ...form,
      questions: form.questions,
    });
    validateError(form);
  };


  const createSurvey = async (event) => {
    event.preventDefault();
    form.questions = form.questions.filter((element) => element !== null);
    if (Object.values(error).length > 0) {
      swal({
        title: "Complete all fields of the survey",
        icon: "warning",
      });
    } else {
      try {
        let response = await axios.post("http://localhost:3001/forms", {
          form: form,
        });
        swal("Survey created", `Survey id "${response.data.id}"`, "success");

        setForm({
          name: "",
          description: "",
          questions: [],
        });
      } catch (error) {
        swal({
          title: "Error creating survey",
          icon: "warning",
        });
      }
    }
  };

  const data = {
    form,
    error,
    handleForm,
    selectTypeQuestion,
    addQuestion,
    upgradeQuestions,
    deleteQuestion,
    createSurvey,
    validateError,
  };

  return <FormContext.Provider value={data}>{children}</FormContext.Provider>;
};

export { FormProvider };
export default FormContext;
