fetch("https://fakestoreapi.in/api/products")
.then(function(response){
    return response.json()
})
  .then(function(data) {
    console.log(data);        // Handle the JSON data
  })