export const UserInput = ({
  register,
  errors,
  id,
  inputLabel,
  rules,
  type,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {inputLabel}
      </label>
      <input
        id={id}
        type={type}
        name={id}
        className={`form-control ${errors[id] && "is-invalid"}`}
        {...register(id, rules)}
      />
      {errors[id] && (
        <div className="invalid-feedback">{errors?.[id]?.message}</div>
      )}
    </div>
  );
};
//select元件export
export const UserSelect = ({
  register,
  errors,
  id,
  inputLabel,
  rules,
  type,
  selectOption,
}) => {
  return (
    <div className="col-6">
      <label htmlFor={id} className="form-label">
        {inputLabel}
      </label>
      <select
        id={id}
        className={`form-select ${errors[id] && "is-invalid"}`}
        {...register(id, rules)}
      >
        <option value="" disabled>
          Choose...
        </option>
        {selectOption}
      </select>
      {errors[id] && (
        <div className="invalid-feedback">{errors?.[id]?.message}</div>
      )}
    </div>
  );
};
//radio元件export
export const YesOrNoRatio = ({
  register,
  errors,
  inputLabel,
  type,
  idForRegister,
  idForOption,
  trueOption,
  falseOption,
  rules,
}) => {
  return (
    <div className="mb-3">
      <div className="form-label">{inputLabel}</div>
      <div className="form-check">
        <input
          className={`form-check-input ${
            errors[idForRegister] && "is-invalid"
          }`}
          type={type}
          name={idForRegister}
          {...register(idForRegister, rules)}
          id={idForOption}
          value="true"
        />
        <label className="form-check-label" htmlFor={idForOption}>
          {trueOption}
        </label>
      </div>
      <div className="form-check">
        <input
          className={`form-check-input ${
            errors[idForRegister] && "is-invalid"
          }`}
          type={type}
          name={idForRegister}
          {...register(idForRegister, rules)}
          id={`non-${idForOption}`}
          value="false"
        />
        <label className="form-check-label" htmlFor={`non-${idForOption}`}>
          {falseOption}
        </label>
        {errors[idForRegister] && (
          <div className="invalid-feedback">
            {errors?.[idForRegister]?.message}
          </div>
        )}
      </div>
    </div>
  );
};
export const TextArea = ({ register, errors, inputLabel, id, rules }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id}>{inputLabel}</label>
      <textarea
        id={id}
        rows="5"
        {...register(id, rules)}
        className={`form-control ${errors[id] && "is-invalid"}`}
      />
      {errors[id] && (
        <div className="invalid-feedback">{errors?.[id]?.message}</div>
      )}
    </div>
  );
};
export const Checkbox = ({ register, errors, id, inputLabel, rules }) => {
  return (
    <div className="mb-3">
      <div className="form-check">
        <input
          className={`form-check-input ${errors[id] && "is-invalid"}`}
          type={id}
          id={id}
          {...register(id, rules)}
        />
        <label className="form-check-label" htmlFor={id}>
          {inputLabel}
        </label>
        {errors[id] && (
          <div className="invalid-feedback">{errors?.[id]?.message}</div>
        )}
      </div>
    </div>
  );
};
