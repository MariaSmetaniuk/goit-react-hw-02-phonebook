// import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from 'components/Button/Button.styled';

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label>
          Name
          <Field type="text" name="name" />
        </label>
        <label>
          Number
          <Field type="tel" name="number" />
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};

// export class ContactForm extends Component {
//   // state = {
//   //   name: '',
//   //   number: '',
//   // };

//   // handleChange = e => {
//   //   const { name, value } = e.target;
//   //   this.setState({ [name]: value });
//   // };

//   // handleSubmit = e => {
//   //   e.preventDefault();
//   //   const { name, number } = this.state;
//   //   this.props.onSubmit(name, number);
//   //   this.setState({ name: '', number: '' });
//   // };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <Formik initialValues={initialValues}>
//         <Form autoComplete="off">
//           <label>
//             Name
//             <Field
//               type="text"
//               name="name"
//               // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               // value={name}
//               // onChange={this.handleChange}
//               // required
//             />
//           </label>
//           <label>
//             Number
//             <Field
//               type="tel"
//               name="number"
//               // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               // value={number}
//               // onChange={this.handleChange}
//               // required
//             />
//           </label>
//           <Button type="submit">Add contact</Button>
//         </Form>
//       </Formik>
//     );
//   }
// }
