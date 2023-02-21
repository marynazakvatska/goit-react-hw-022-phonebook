
import { Component } from "react";


export default class Form extends Component {
    state = {
        name: '',
   number: ''
    }


  

      handleNameChange = e => {
    const { name, value } = e.currentTarget;
    this.setState(
       { [name]: value })
    }
    
    handleSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state) //передает prop onSubmit Form значение state, передает значение state наверх в App
        
        this.reset()
    }


    reset = () => {
    this.setState({name: '', number: ''})
}

    render() {
        return (
             
           <form onSubmit={this.handleSubmit}>  
             <label >Name {/* <br />   */}
               <input
                 value={this.state.name}
        onChange={this.handleNameChange}
           type="text"
           name="name"
           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                      
           style={{
             width: "300px",
           height: "40px"}}
               />
                </label>
            
             
 <label >Number {/* <br /> */}
               <input
                   value={this.state.number}
        onChange={this.handleNameChange}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
 </label>
  <button type="submit">Add contact</button>
           </form>  
           
        )
    }
}