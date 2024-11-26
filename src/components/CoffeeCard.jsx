import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeCard = ({coffee, coffees, setCoffees}) => {

 const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;


 // This is a Delete operation
 const handleDelete = _id =>{
  console.log(_id)
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`http://localhost:8000/coffee/${_id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.deletedCount > 0) {
        Swal.fire(
          "Deleted!",
          "Your Coffee has been deleted.",
          "success"
      )
      const remaining = coffees.filter(cof => cof._id);
      setCoffees(remaining);
        }
      })
    }
  });
 }

 return (
  <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src={photo}
      alt="Movie" />
  </figure>
  <div className="flex justify-between w-full pr-2">
   <div>
   <h2 className="card-title">Name: {name}</h2>
    <p>Quantity: {quantity}</p>
    <p>Supplier: {supplier}</p>
    <p>Taste: {taste}</p>
    <p>Category: {category}</p>
    <p>Details: {details}</p>
   </div>
    <div className="card-actions justify-end">
    <div className="join join-vertical space-y-4">
   <button className="btn join-item">View</button>
    <Link to={`updateCoffee/${_id}`}>
    <button className="btn join-item">Edit</button>
    </Link>
   <button
   onClick={() => handleDelete(_id)}
   className="btn bg-orange-600">X</button>
</div>
    </div>
  </div>
</div>
 );
};

export default CoffeeCard;