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

module.exports = router;
