import React, {useState, useEffect} from 'react'
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {useNavigate} from 'react-router-dom';

function Edit(){
    const[emp_no, setEmp_No] = useState('');
    const[name, setName] = useState('');
    const[age, setAge] = useState('');
    const[phone, setPhone] = useState('');
    const[Id, setId] = useState('');

    let history = useNavigate();

    var index = Employees.map(function(e){
        return e.Id
    }).indexOf(Id);

    const handleSubmit =(e) => {
        e.preventDefault();

        let a = Employees[index];
        a.Emp_No = emp_no;
        a.Name = name;
        a.Age = age;
        a.Phone = phone;

    history("/");
    }

    useEffect(() =>{
        setEmp_No(localStorage.getItem('Emp_No'))
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setPhone(localStorage.getItem('Phone'))
        setId(localStorage.getItem('Id'))
    },[])

    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formEmp_No">
                    <Form.Control type="text" placeholder="Enter Id Number" value={emp_no} required onChange={(e) => setEmp_No(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder="Enter Age" value={age} required onChange={(e) => setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Control type="text" placeholder="Enter Number" value={phone} required onChange={(e) => setPhone(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type='submit'>Update</Button>
            </Form>
        </div>
    )

}

export default Edit;

  