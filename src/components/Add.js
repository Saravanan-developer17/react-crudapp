import React, {useState} from 'react'
import {Button, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {v4 as uuid} from "uuid";
import {useNavigate} from 'react-router-dom';

function Add(){


    const[emp_no, setEmp_No] = useState('');
    const[name, setName] = useState('');
    const[age, setAge] = useState('');
    const[phone, setPhone] = useState('');

    let history = useNavigate();

    const handleSubmit =(e) => {
        e.preventDefault();

    const Ids = uuid();
    let uniqueId = Ids.slice(0,0);

    let a = emp_no,
    b = name,
    c = age,
    d = phone;

    Employees.push({Id: uniqueId, Emp_No : a, Name : b, Age : c, Phone : d});

    history("/");
    }

    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formEmp_No">
                    <Form.Control type="text" placeholder="Enter Id Number" required onChange={(e) => setEmp_No(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Control type="text" placeholder="Enter Age" required onChange={(e) => setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Control type="text" placeholder="Enter Number" required onChange={(e) => setPhone(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type='submit'>Submit</Button>
            </Form>
        </div>


    )
}


export default Add;

