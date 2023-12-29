function TextField({ label, name, value, onChange }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block">
        {label}
      </label>
      <input
        id={name}
        value={value}
        onChange={onChange}
        type="text"
        name="name"
        className="textField__input"
        autoComplete="off"
      />
    </div>
  );
}

export default TextField;
