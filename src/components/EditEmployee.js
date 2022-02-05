import React, { useState,useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function EditEmployee(props) {
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({
        FullName: '',
        Designation: '',
        Salary: '',
        Age: ''
    });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setShow(props.showEditForm)
    }, [props.showEditForm])
    
    useEffect(() => {
        setForm(props.selectedDetails)
    }, [props.selectedDetails])

    // const handleChange = (event) => {
    //     const FormdetailsCopy= { ...Formdetails }
    //     FormdetailsCopy[event.target.name] = event.target.value
    //     setForm(FormdetailsCopy)
    // }

    // const editForm = async () => {
    //     let url = ''
    //     const editUrl = ``
    //     try {
    //         if (props.modalType === 'edit') {
    //             url = editUrl
    //             const response = await.put(url,Formdetails)
    //             console.log(response.data);
    //             if (response.data.error === false) {
    //                 handleClose()
    //                 props.fetchFormdetails()
    //             } else {
    //                 alert(response.data.message)
    //             }
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    // COPY THIS TO MAIN EMPLOYEE COMPONENT 
  //   const edit = (selectedModalType, prod) => {
  //     setmodalType(selectedModalType)
  //     if (selectedModalType === 'edit') {
  //         setselectedDetails(prod)
  //     } else {
  //         setselectedDetails({
  //             FullName: '',
  //             Designation: '',
  //             Salary: '',
  //              Age: ''
  //         })
  //     }
  //     //USE NAME AS UR GIVEN IN USE STATE
  //     setshowEdit(true)
  // }
  return <div> 
  {/* U CAN ADD THIS IN MAIN COMPONENT TO PRINT DATA 
   <Table striped bordered hover>
            <thead>
                <tr><th>FullName</th>
                    <th>Description</th>
                    <th>Salary</th>
                    <th>Age</th>
                    <th><button className='btn btn-primary'
                        onClick={() => { edit('add') }}>Add</button></th>
                </tr>
            </thead> */}
            {/* <tbody>
                
            </tbody>
        </Table> */}
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className='header'>
          {/* closeButton */}
            <Modal.Title>Edit Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body><div>
          <div className="row">
            <div className="col">
                 <p>Full Name</p>
                 <input type="text" name="fullname"
                //  value=
                //  value={Formdetails.fullname}
                //                     onChange={(event) => { handleChange(event) }}
                //                     className="form-control" 
                placeholder="test"
                 />
            </div>
            </div>
            <div className="col">
                <p>Designation</p>
                 <input type="text" name="designation"
                //  value={Formdetails.designation}
                //         onChange={(event) => { handleChange(event) }}
                //                     className="form-control" 
                placeholder="qwerty"
                 />
             </div>
            <div className="col">
                <p>Salary</p>
                 <input type="text"  name="salary"
                    //   value={Formdetails.salary}
                    //      onChange={(event) => { handleChange(event) }}
                    //                 className="form-control" 
                    placeholder="12345"
                 />
            </div>
            <div className="col">
                <p>Age</p>
                <input type="text" name="age"
                    //  value={Formdetails.age}
                    //      onChange={(event) => { handleChange(event) }}
                    //                 className="form-control"
                     placeholder="20"
                />
            </div>
           </div>
        
        </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Submit
            </Button>
            {/* <Button variant="primary" onClick={editForm}>
                        {props.modalType === 'edit' ? 'Update Changes' : 'Add'}
                    </Button> */}
          </Modal.Footer>
        </Modal>
      </>

</div>;
}

export default EditEmployee;
