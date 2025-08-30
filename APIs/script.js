// HOW TO GET DATA FROM API
// fetch("https://gorest.co.in/public/v2/users ")
// .then(function(response){
//     return response.json()
// })
//   .then(function(data) {
//     console.log(data);        // Handle the JSON data
//   })


// HOW TO POST DATA TO API 

// let newUser_1={
//   name:'arjun',
//   email:'arjun123@gmail.com',
//   gender:'male',
//   status:'active'
// }

// fetch('https://gorest.co.in/public/v2/users ',{
//   method:'POST',
//   body:JSON.stringify(newUser_1),
//   headers:{
//     'Content-type':'application/json',
//     Accept:'application/json',
//     Authorization:'Bearer b5c0eb640e976d0c854a4425023a7f70cbffa9b53e8baa63855d2888f12aa535'
//   }
// }).then(function(response){
//   return response.json()
// })
// .then(function(jsondata){
//   console.log(jsondata)
// })



//how to update an API

// let user2={
//   name:'Ayeshaa',
// }

// fetch('https://gorest.co.in/public/v2/users/8096911',{
//   method:'PUT',       //it is used to update one field
//   body:JSON.stringify(user2),
//   headers:{
//     'Content-Type':'application/json',
//     Accept:'application/json',
//     Authorization:'Bearer b5c0eb640e976d0c854a4425023a7f70cbffa9b53e8baa63855d2888f12aa535'
//   }
// }).then(function(res){
//   return res.json()
// }).then(function(updated_data){
//   console.log(updated_data)
// })



// HOW TO PATCH(CHANGE MULTIPLE DATA ONCE) DATA IN API

// let user3={
//   name:'Hardik Pandya',
//   email:'hardik33@gmail.com',
//   gender:'Male',
//   status:'active'
// }
// fetch('https://gorest.co.in/public/v2/users/8096909',{
//   method:'PATCH',     // IT IS USED TO UPDATE MULTIPLE FIELD
//   body:JSON.stringify(user3),
//   headers:{
//     'Content-type':'application/json',
//      Accept:'application/json',
//      Authorization:'Bearer b5c0eb640e976d0c854a4425023a7f70cbffa9b53e8baa63855d2888f12aa535'
//   }
// }).then(function(patch_data){
//   return patch_data.json()
// }).then(function(patchjson_){
//   console.log(patchjson_)
// })



// HOW TO DELETE DATA FROM API
// FOR DELETION NO NEED TO WRITE BODY, CONTENT-TYPE BECAUSE WS DON'T HAVE TO PROVIDE ANY USER DATA

// fetch('https://gorest.co.in/public/v2/users/8096913',{
//   method:'DELETE',
//   headers:{
//     Accept:'application/json',
//     Authorization:'Bearer b5c0eb640e976d0c854a4425023a7f70cbffa9b53e8baa63855d2888f12aa535'
//   }
// }).then(function(del){
//   return del.json()
// }).then(function(del_data){
//   console.log(del_data)
// })

