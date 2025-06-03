import './inputField.css'

const InputField = (props: { id: string, classname: string, label:string, type:string, value?:string|number,disabled?:boolean, onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void}  ) => {
  return (
    <div id={props.id}>
        <label className={props.classname}>{props.label}</label>
        <input type={props.type} id={props.classname} placeholder={props.classname} value={props.value} onChange={props.onChange} disabled={props.disabled}/>
    </div>
  )
}

export default InputField

/*
import './inputField.css'

const InputField = (props: { id: string, classname: string, label?:string, type:string}) => {
  return (?
    <div id={props.id}>
        <label className={props.classname}>{props.label? props.label : props.classname}</label>
        <input type={props.type} id={props.classname} placeholder={props.classname}/>
    </div>
  )
}

export default InputField
*/