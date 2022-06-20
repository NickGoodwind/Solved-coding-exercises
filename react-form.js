import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ addEntryToPhoneBook }) {
  const [values,setValues] = useState({
    userFirstname: 'Coder',
    userLastname: 'Byte',
    userPhone: '8885559999'
  });

  const change = (e) => {
    const elem = e.target.name;
    const value = e.target.value;
    setValues(values => ({...values, [elem]:value}))
  }

  const submit = e => { 
    e.preventDefault();
    addEntryToPhoneBook(values);
    setValues('');
  }

  return (
    <form onSubmit={submit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        value={values.userFirstname}
        onChange={change}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text'
        value={values.userLastname}
        onChange={change}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone' 
        name='userPhone'
        type='text'
        value={values.userPhone}
        onChange={change}
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User' 
      />
    </form>
  )
}

function InformationTable(props) {
  const [data,setData] = useState(
    [{
      userFirstname: '',
      userLastname: '',
      userPhone: ''
    }]
  );

  const tableRows = data.map((user) => {
    return (
      <tr>
        <td>{user.userFirstname}</td>
        <td>{user.userLastname}</td>
        <td>{user.userPhone}</td>
      </tr>
    );
  })

  const addEntryToPhoneBook = (newData) => {
    console.log(newData);
    const updatedData = [...data];
    updatedData.push(newData);
    setData(updatedData)
  }

  return (
    <div>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook}/>
      <table style={style.table} className='informationTable'>
        <thead> 
          <tr>
            <th style={style.tableCell}>First name</th>
            <th style={style.tableCell}>Last name</th>
            <th style={style.tableCell}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div>
  );
}

function Application(props) {
  return (
    <section>
      <InformationTable />
    </section>
  );
}

ReactDOM.render(
  <Application />,
  document.getElementById('root')
);
