

const Filter = ({value, onChange}) => {
    

    return ( <label >Find contacts by name 
               <input
                 value={value}
        onChange={onChange}
           type="text"
           name="name"
         
                      
           style={{
             width: "300px",
           height: "40px"}}
               />
                </label>)

}
   

   




export default Filter