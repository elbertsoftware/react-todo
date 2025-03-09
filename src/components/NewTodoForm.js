import React, {useState} from 'react';

// this is automatically bound to the surrounding scope
// it differs from using function in defining components
const NewTodoForm = (props) => {
  const [desc, setDesc] = useState('');
  const [assigned, setAssigned] = useState('');

  const addTodo = props.addTodo;
  
  const submitTodo = () => {
    if (desc === '' || assigned === '')
      return;

    addTodo(desc, assigned);
    
    setDesc('');
    setAssigned('');
  }

  return (
    <div className='mt-5'>
      <div className='card-header'>New Todo</div>
      <div>
        <form onSubmit={e => {
          e.preventDefault(); // avoid warning 'Form submission canceled because the form is not connected'
          submitTodo();
        }}>
          <div className='mb-3'>
            <label className='form-label'>Assigned</label>
            <input className='form-control' type='text' required value={assigned} onChange={e => setAssigned(e.target.value)}></input>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Description</label>
            <textarea className='form-control' rows={3} required value={desc} onChange={e => setDesc(e.target.value)}></textarea>
          </div>
          <button className='mt-3 btn btn-primary' type='submit'>Add Todo</button>
        </form>
      </div>
    </div>
  );
};

export default NewTodoForm;