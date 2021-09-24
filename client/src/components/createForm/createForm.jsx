import style from "./createForm.module.css";

export default function CreateForm() {
  return (
    <section>
      <header>
        <h1>Creación de encuestas</h1>
      </header>
      <form>
        <div className="title">
          <input
            type="text"
            name="name"
            id="title"
            placeholder="Title"
          />
        </div>
        <div className="description">
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Description"
          />
        </div>
      </form>
    </section>
  );
}
