

const ContactList = ({ contacts, onDelete }) => {
 
    return (<ul>
        {contacts.map(({ id, name, number }) => {
          return  (
                <li key={id}>
                    <p>{name}:{number}</p>
                  <button onClick={() => onDelete(id)}>Delete</button>
                    
              </li>
          )
        }
        )}
      </ul>)
}
    



export default ContactList