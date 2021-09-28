const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../src/app");
const { Form, conn } = require("../src/db");
const agent = session(app);

const form = {
  name: "New form",
  description: "Test endpoint",
  questions: [
    {
      text: "Question",
      question_type: "multiple",
      options: ["option", "option"],
    },
  ],
};

describe("routes", () => {
  before(() =>
    conn.authenticate().catch((error) => {
      console.error("Unable to connect to the database:", error);
    })
  );
  beforeEach(() => Form.sync({ force: true }).then(() => Form.create(form)));
  describe("GET /forms/1", () => {
    it("sould get 200", () => agent.get("/forms/1").expect(200));
    it("json is the content-type", () =>
      agent.get("/forms/1").expect("Content-Type", /json/));
    it("response have id, name and description", () =>
      agent.get("/forms/1").expect(function (res) {
        expect(res.body.id).equal(1);
        expect(res.body.description.length > 0).equal(true);
        expect(res.body.name.length > 0).equal(true);
      }));
  });
});
