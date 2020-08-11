import React from 'react'
import {Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProductTable({  people }) {
    
    return (
        
       <div className="tab">
          
         <Table border="2" className="tab2" striped bordered hover variant="dark" >
         <tr style={{ textAlign: "center" }}>
                    <th>Name</th>
                    <th>price</th>
                    <th>category</th>
                </tr>
         {
                    people.map(person => (
                        <tr  className="per1">
                            <td> {person.name} </td>
                            <td> {person.price} </td>
                            <td> {person.category} </td>
                        </tr>
                    ))
                }
         </Table>
            
       </div>
)
}
