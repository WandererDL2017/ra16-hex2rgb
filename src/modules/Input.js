function Input (props) {
    function onChange(e) {
      props.onChange(e.currentTarget.value);
    }
  
    return (
      <input
        value={props.value}
        onChange={onChange}
        maxLength={7}
        type="text"
        className="form-elem hex"
        placeholder="#002200"
      />
    );
  };
  
  export default Input;