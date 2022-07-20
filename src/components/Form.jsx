import {useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addNotesAsync } from '../redux/notes/services';


const Form = () => {
    const dispatch = useDispatch()
    const [items,setItems] = useState({
        title:'',
        color:''
    })

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(items)
        if(!items.title) return;
        await dispatch(addNotesAsync(items))
        setItems({
            title:'',
            color:''
        })

    }
  return (
    <div className='container'>

    <form onSubmit={handleSubmit}>
        <textarea className='form-control' onChange={(e)=>setItems({...items,title:e.target.value})} value={items.title} name="" id="" cols="30" rows="5"></textarea>
        <div>Seçilen Renk : {items.color}</div>
<div className="row">
<div className="radio-div col">
        <input className='radio-btn red' onChange={(e)=>setItems({...items,color:e.target.value})} type="radio" name="color" id="" value='red' /> 
        </div>
        <div className="radio-div col">
        <input className='radio-btn purple' onChange={(e)=>setItems({...items,color:e.target.value})} type="radio" name="color" id="" value='purple' /> 
        </div>
        <div className="radio-div col">
        <input className='radio-btn green' onChange={(e)=>setItems({...items,color:e.target.value})} type="radio" name="color" id="" value='green' /> 
        </div>
        <div className="radio-div col">
        <input className='radio-btn blue' onChange={(e)=>setItems({...items,color:e.target.value})} type="radio" name="color" id="" value='blue' /> 
        </div>
        <div className="radio-div col">
        <input className='radio-btn yellow' onChange={(e)=>setItems({...items,color:e.target.value})} type="radio" name="radio" id="" value='yellow' /> 
        </div>
</div>


        
        <button className='btn btn-success mt-3' type='submit'>Not Ekle</button>
        





    </form>





    </div>
  )
}

export default Form