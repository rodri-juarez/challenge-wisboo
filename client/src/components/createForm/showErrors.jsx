const ShowErrors = (error) => {
  const errors = error.error;
  return (
    <div>
      {
        <div>
          {errors?.name ? (
            <>
              {" "}
              <div className="error">{errors.name}</div> <br />{" "}
            </>
          ) : null}
          {errors?.description ? (
            <>
              <div className="error">{errors.description} </div> <br />
            </>
          ) : null}
          {errors?.question ? (
            <>
              <div className="error">{errors.question}</div> <br />
            </>
          ) : null}
          {errors?.option ? (
            <>
              <div className="error">{errors.option}</div> <br />
            </>
          ) : null}
        </div>
      }
    </div>
  );
};

export default ShowErrors;
