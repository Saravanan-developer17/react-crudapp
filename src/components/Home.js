import React from 'react';
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {Link,useNavigate} from 'react-router-dom'

function Home(){

    let history = useNavigate();

    const handleEdit = (id ,emp_no, name , age , phone) => {
        localStorage.setItem('Emp_No',emp_no);
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('Phone',phone);
        localStorage.setItem('Id',id);
    }

    const handleDelete = (Id) => {
        var index = Employees.map(function(e){
            return e.Id
        }).indexOf(Id);

        Employees.splice(index,1);

        history('/');


    }

  return (
    <section>
        <div style={{margin:"10rem"}}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Emp_No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th>Actions</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        Employees && Employees.length > 0
                        ?
                        Employees.map((item) =>{
                            return(
                                <tr>
                                    <td>
                                        {item.Emp_No}
                                    </td>
                                    <td>
                                        {item.Name}
                                    </td>
                                    <td>
                                        {item.Age}
                                    </td>
                                    <td>
                                        {item.Phone}
                                    </td>
                                    <td>
                                        <Link to={'/edit'}>
                                        <Button onClick={() => handleEdit(item.Id, item.Emp_No, item.Name, item.Age, item.Phone)}>Edit</Button>
                                        </Link>
                                        &nbsp;
                                        <Button onClick={() => handleDelete(item.Id)}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "No data available"
                    }
                </tbody>
            </Table>
            <br>
            </br>
            <Link className='d-grid gap-2' to="/create">
                <Button size='lg'>Create</Button>
            </Link>
        </div>
    </section>
  )
}

export default Home;