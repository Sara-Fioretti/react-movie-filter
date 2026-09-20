import { useState } from "react"
function Form ({addFilm}){
   const [formData, setFormData] = useState({
    title:"",
    genre:""
   })
   const handleSubmit = (e) =>{
    e.preventDefault()
    const film = {
        id:Math.random(),
        title : formData.title,
        genre: formData.genre,
   }
   addFilm(film)
}
   const handleFormChange = (e)=> {
    const {name, value}=e.target
    setFormData({
        ...formData,
        [name]:value
    })
   }    
    return (
  
        <form onSubmit={handleSubmit} className="bg-success text-white rounded-2">
            <div className="mb-3">
                <label  className="form-label">Titolo del film </label>
                <input 
                name="title"
                value = {formData.title} 
                type="text" 
                onChange = {handleFormChange} 
                className="form-control" id="exampleInputAuthor" 
                aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label  className="form-label">Genere</label>
                <input 
                 name="genre" 
                 value = {formData.genre}
                 onChange = {handleFormChange}
                 type="text" className="form-control" 
                 id="exampleInputTitle" />
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
       
    )
}

export default Form;
