import React, { useState } from "react";
import Input from "./Input";
import Hex2rgb from "./Hex2rgb";

function Form() {
  const [form, setForm] = useState({
    hexValue: '#002200',
    rgbValue: Hex2rgb('#002200'),
    isErr: false
  });

  const onChange = (value) => {
    let rgbValue = '';
    let isErr = false;

    if (value.length === 7){ 
      rgbValue = Hex2rgb(value);
      if (rgbValue === null) {
        rgbValue = 'Ошибка!';
        isErr = true;
      }
    }

    setForm({
      hexValue: value, 
      rgbValue: rgbValue, 
      isErr: isErr});
  }

  return (
      <form className={form.isErr ? 'form error' : 'form'} style={{backgroundColor: form.rgbValue}}>
        <Input value={form.hexValue} onChange={onChange} />
        <div className="form-elem rgb">{form.rgbValue}</div>
      </form>
  )
}

export default Form;