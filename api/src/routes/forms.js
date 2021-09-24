const router = require("express").Router();
const { Form } = require("../db");

router.get("/forms/:id", async (req, res) => {
  const id = req.params.id;

  const form = await Form.findByPk(id, {
    include: { all: true, nested: true },
  });

  if (form === null) {
    return res.status(400).json({ message: "Form does not exist" });
  }

  const response = {
    id: form.dataValues.id,
    name: form.dataValues.name,
    description: form.dataValues.description,
    questions: [],
  };

  form.Questions.map((element, index) => {
    response.questions.push({
      id: element.dataValues.id,
      question_type: element.dataValues.question_type,
      text: element.dataValues.text,
      options: [],
    });

    if (element.dataValues.question_type.toLowerCase() !== "text") {
      element.Options.map((element, indexOption) => {
        response.questions[index].options.unshift(
          form.Questions[index].Options[indexOption].dataValues.option
        );
      });
    }
  });

  return res.json(response);
});

router.post("/forms", async (req, res) => {
  const { form } = req.body;

  if (!form) {
    return res.status(400).json({ error: "Form not found in request" });
  }
  if (!form.name || !form.description || form.questions.length < 1) {
    return res
      .status(400)
      .json({ error: "Fields or questions are missing from the form" });
  }

  try {
    let newForm = await Form.create({
      name: form.name,
      description: form.description,
    });

    while (form.questions.length) {
      let question = form.questions.shift();

      let newQuestion = await Question.create({
        question_type: question.question_type,
        text: question.text,
      });

      await newForm.addQuestions(newQuestion);

      while (question.options.length) {
        let option = question.options.pop();

        let newOption = await Option.create({
          option: option,
        });

        await newQuestion.addOption(newOption);
      }
    }

    let Form = await Form.findAll();
    return res.json({
      message: "Form created",
      formId: Form[Form.length - 1].dataValues.id,
    });
  } catch (error) {
    res.status(500).json({ message: "Can't saving form in DB", error: error });
  }
});

module.exports = router;
