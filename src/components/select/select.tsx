import React from 'react'
import './select.css'

const Select = (props: { label: string, options: string[]|number[] | {value?:string|number, name: string}[], placeholder: string,value?:string| number, onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void} ) => {
  return (
     <>
            <label>{props.label}</label>
            <select value={props.value} onChange={props.onChange}>
                <option value={props.placeholder} hidden>{props.placeholder}</option>
                {props.options.map((opt) => (
                <option value={opt}>{opt}</option>
                ))}
            </select>
        
    </>
  )
}

export default Select