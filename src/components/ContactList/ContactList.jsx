import { Component } from 'react';
import { Button } from 'components/Button/Button.styled';

export class ContactList extends Component {
  render() {
    const { contacts, onRemoveContact } = this.props;
    return (
      <ul>
        {contacts.map(({ name, id, number }) => (
          <li key={id}>
            {name}: {number}
            <Button
              type="button"
              onClick={() => {
                onRemoveContact(id);
              }}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    );
  }
}
