import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {
 const handleAddCoffee = event =>{
  event.preventDefault();

  const from = event.target;

  const name = from.name.value;
  const quantity = from.quantity.value;
  const supplier = from.supplier.value;
  const taste = from.taste.value;
  const category = from.category.value;
  const details = from.details.value;
  const photo = from.photo.value;


  const newCoffee = {name, quantity, supplier, taste, category, details, photo};
  console.log(newCoffee)


  // send data to the server
  fetch('http://localhost:8000/coffee', {
   method: 'POST',
   headers: {
    'content-type': 'application/json'
   },
   body: JSON.stringify(newCoffee)
  })
  .then(res => res.json())
  .then(data => {
   console.log(data)
   if(data.insertedId){
    Swal.fire({
     title: 'success!',
     text: 'User Added Successfully',
     icon: 'success',
     confirmButtonText: 'Cool'
   })
   }
  })

 }
 return (
  <div>
   <h2>Add coffee</h2>
   <div class="bg-gray-100 min-h-screen flex items-center justify-center">
  <div class="bg-white p-10 rounded-lg shadow-lg w-full max-w-4xl">
    <h1 class="text-3xl font-semibold text-center mb-4">Add New Coffee</h1>
    <p class="text-gray-600 text-center mb-8">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
    </p>
    <form onSubmit={handleAddCoffee}>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* <!-- Name --> */}
        <div>
          <label for="name" class="block text-gray-700 font-medium">Coffee Name</label>
          <input
            type="text"
            id="name"
            name='name'
            placeholder="Enter coffee name"
            class="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
          />
        </div>
        {/* <!-- Chef --> */}
        <div>
          <label for="chef" class="block text-gray-700 font-medium">Available Quantity</label>
          <input
            type="text"
            id="chef"
            name='quantity'
            placeholder="Available Quantity"
            class="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
          />
        </div>
        {/* Supplier */}
        <div>
          <label for="supplier" class="block text-gray-700 font-medium">Supplier</label>
          <input
            type="text"
            id="supplier"
            name='supplier'
            placeholder="Enter coffee supplier"
            class="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
          />
        </div>
        {/* Taste */}
        <div>
          <label for="taste" class="block text-gray-700 font-medium">Taste</label>
          <input
            type="text"
            id="taste"
            name='taste'
            placeholder="Enter coffee taste"
            class="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
          />
        </div>
       
        <div>
          <label for="category" class="block text-gray-700 font-medium">Category</label>
          <input
            type="text"
            id="category"
            name='category'
            placeholder="Enter coffee category"
            class="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
          />
        </div>
       
        <div>
          <label for="details" class="block text-gray-700 font-medium">Details</label>
          <input
            type="text"
            id="details"
            name='details'
            placeholder="Enter coffee details"
            class="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
          />
        </div>
       
        <div class="md:col-span-2">
          <label for="photo" class="block text-gray-700 font-medium">Photo</label>
          <input
            type="text"
            id="photo"
            name='photo'
            placeholder="Enter photo URL"
            class="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
          />
        </div>
      </div>
      <button
        type="submit"
        class="block w-full mt-6 bg-red-500 text-black text-lg font-medium py-3 rounded-lg hover:bg-brown-600 transition"
      >
        Add Coffee
      </button>
    </form>
  </div>
</div>

  </div>
 );
};

export default AddCoffee;