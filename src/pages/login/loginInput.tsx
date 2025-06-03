import "./loginInput.css"

interface LoginInputProps{
    id:string;
    label: string;
    name?: string;
    type?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    endAdornment?: React.ReactNode;
    ref?: React.RefObject<HTMLInputElement | null>
}

const LoginInput =({ id, label,name, type,value, onChange,endAdornment=null, ref} : LoginInputProps ) =>{
    return(
        <div className="form-input">
            
            <label htmlFor={id}> {label}</label>
            <input type={type} id={id} name={name? name: ""} placeholder={label} value={value} onChange={onChange} ref={ref} required />
            
            {endAdornment? endAdornment:null}
            
        </div>
    );
};
export default LoginInput