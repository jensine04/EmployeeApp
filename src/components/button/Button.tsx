import './Button.css'

function Button(props: {buttonID: string, name: string, type: "submit" | "reset" | "button" , disabled?:boolean, onChange?: (event: any) => void }){
    return(
            <button id={props.buttonID} type={props.type} onClick={props.onChange}>{props.name}</button>
       
    )
}

export default Button;