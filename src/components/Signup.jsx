import React,{useState} from 'react'
import './form.css'

const Signup=()=>{

    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
    })
    const [error,setError]=useState({})
    const[isSubmitted,setIsSubmitted]=useState(false)

    const validate=()=>{
        const newErrors={};
        if(!formData.name.trim()){
            newErrors.name='name is required'
        }
        else if(formData.name.length < 3){
   newErrors.name='name must be more than 3 character'
    }
    if(!formData.email){
        newErrors.email="email required" }
    
    
    if(!formData.password){
        newErrors.password='password required'
    }
    else if(formData.password.length < 6){
        newErrors.password='password must be greater than 6 character'
    }
    return newErrors;
    
}

 const handlechange=(e)=>{
    const {name,value}=e.target;
     setFormData({...formData,[name]:value})
 }


 const  handleSubmit=(e)=>{
    e.preventDefault();
    const validateError=validate()
    setError(validateError)
    if(Object.keys(validateError).length ===0){
        setIsSubmitted(true)
        console.log('form submitted')


    setFormData({name:'', email:'',password:''})
    }
    else{
        setIsSubmitted(false)
    }

 }

    return(
        <div className='form-container'>
            <div>
                <h3>signup-form</h3>
                <form onSubmit={handleSubmit}>
<div className='form-group'>
<label htmlFor='name'>Username</label>
                    <input type='text' name='name' value={formData.name} onChange={handlechange} className={error.name ?'input error': 'input'}/>{error.name && <p className='error-message'>{error.name}</p>}
                       
</div><div className='form-group'> 
                    <label htmlFor='name'>email</label>
                    <input type='email'  name='email' value={formData.email} onChange={handlechange} className={error.email ? 'input error':'input'} />{error.email && <p className='error-message'>{error.email}</p>}       
                    </div><div className='form-group'>
                    <label htmlFor='name'>password</label>
                    <input type='password' value={formData.password} name='password' onChange={handlechange} className={error.password ? 'input error' : 'input'}/>{error.password && <p className='error=message'>{error.password}</p>}
                  </div>
                  
                  <button type='submit' className='submit-btn'>Submit</button>
                   </form>
                   {isSubmitted && <p className='success-message'>form submitted successfully!</p>}



                </div>

        </div>
    )
}
export default Signup