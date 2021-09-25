import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

export default function useForm() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    questions: [],
  });
  const [error, setError] = useState({}); 
  

  const handleForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelect = (event) => {
    form.questions[event.target.id][event.target.name] = event.target.value;
    setForm({
        ...form,
        questions: form.questions,
      }
    );
    
  };

  const addQuestion = (event) => {
    event.preventDefault()
    setForm({
      ...form,
      questions: [
        ...form.questions,
        { question_type: "", text: "", options: [] }
      ],
    });
  };


  const deleteQuestion = (event) => {
    form.questions[event.target.name] = null;
    setForm({
      ...form,
      questions: form.questions,
    });
  }; 

  const createPoll = async (event) => {
    event.preventDefault();
    form.questions = form.questions.filter((element) => element !== null);
    
    if (Object.values(error).length > 0) {
      swal({
        title: "Completar todos los campos de la encuesta",
        icon: "warning",
      });
    } else {
      try {
        let id = await axios.post("http://localhost:3001/forms", {
          form: form,
        });
        swal(
          "Encuesta creada",
          `Id de la encuesta "${id.data.formId}"`,
          "success"
        );

        setForm({
          name: "",
          description: "",
          questions: [],
        });
      } catch (error) {
        swal({
          title: "Error al crear la encuesta",
          icon: "warning",
        });
      }
    }
  };
  
  return {
    form,
    error,
    setForm,
    handleSelect,
    handleForm,
    addQuestion,
    deleteQuestion,
    createPoll,
  };
}
