import './popup.css'

const Popup=({msg,msg2,onConfirm,onCancel}:{msg:string,msg2:string,onConfirm:()=>void,onCancel:()=>void})=>{
    return(
        <div className='popupoverlay'>
            <div className="popuptab">
                <div className='msgsec1'>
                       <h3> {msg}</h3> <br />
                       <h5>{msg2}</h5>
                </div>
                <div className="msgsec2">
                    <button id='confirmDelete' onClick={(e)=>{
                        onConfirm()
                        e.stopPropagation()}
                    }>Confirm</button>
                    <button id='cancelDelete' onClick={(e)=>{
                        onCancel()
                        e.stopPropagation()
                    }}>Cancel</button>
                    
                    
                </div>
            </div>
        </div>
    )
    
}

export default Popup






