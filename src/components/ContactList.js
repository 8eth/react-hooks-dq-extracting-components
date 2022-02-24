import React from 'react';
import Contact from "./Contact";

function ContactList({ contacts }) {
    return (
      <nav>
        <h2>Contacts</h2>
        <ul className="contacts">
          {contacts.map((contact) => {
            return <Contact 
                name={contact.name} 
                key={contact.id}
            />;
          })}
        </ul>
      </nav>
    );
  }

export default ContactList;
