import Select from '../select/select'
import './TextHeader.css'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
const TextHeader = (props: {id:string, filter?:string, feature?:string, featureIcon?:string, empid?:string  } ) => {

    const navigate=useNavigate()
    let path=""

    const [searchParams,setSearchParams]=useSearchParams()

  props.feature==='Create Employee'? path='/src/assets/plus.png' : path='/src/assets/edit.png'

  function goToFeature(){
    if (props.feature==='Create Employee')
      navigate('create')
    else{
      navigate(`../edit/${props.empid}`)
    }
  }
  const newSearchParams=new URLSearchParams()
  


  return (
    <div id='header'>
        <h3 > {props.id}</h3>
        <div className='extra'>
        {props.filter? 
          <div className='filteroption'>
              Filter By <select className='filter' onChange={(e)=> {
                //if (e.target.value!=='All'){
                newSearchParams.set("status",e.target.value)
                setSearchParams(newSearchParams)
                //}
                // else{
                //   searchParams.delete("status")
                // }
              }}>
                <option value='Status' hidden>Status</option>
                <option value='All' >All</option>
                <option value='ACTIVE' >Active</option>
                <option value='INACTIVE' >Inactive</option>
                <option value='PROBATION' >Probation</option>
              </select>
            </div>
            :
            null
        }
        {props.feature? 
          <div className='featureoption' onClick={goToFeature}>

              <div className='featureName'>
                  {props.feature}
              </div>
              <div className='featureIcon'>
                  <img src={path} />
              </div>
            </div>
            :
            null
        }
        </div>
    </div>
  )
}

export default TextHeader