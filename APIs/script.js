// HOW TO GET DATA FROM API
let container=document.getElementById('apidata')
fetch("https://gorest.co.in/public/v2/users ",{
  method:'GET',
  headers:{
    Authorization:'Bearer b5c0eb640e976d0c854a4425023a7f70cbffa9b53e8baa63855d2888f12aa535'
  }
})

.then(function(response){
    return response.json()
})
  .then(function(data) {
    console.log(data);        // Handle the JSON data
    for(let i=0; i<data.length; i++){
        let card=document.createElement('div')
        card.classList='card'
        card.innerHTML=`
            <p>${data[i].id}</p>
            <p>${data[i].name}</p>
            <p>${data[i].email}</p>
            <p>${data[i].gender}</p>
            <p>${data[i].status}</p>
        `
        container.appendChild(card)
    }
})


// HOW TO POST DATA TO API 

// let newUser_1={
//   name:'andesh',
//   email:'dh@gmail.com',
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

// let card = document.createElement('div');
//       card.classList = 'card';
//       card.innerHTML = `
//           <p>ID: ${jsondata.id}</p>
//           <p>Name: ${jsondata.name}</p>
//           <p>Email: ${jsondata.email}</p>
//           <p>Gender: ${jsondata.gender}</p>
//           <p>Status: ${jsondata.status}</p>
//       `;
    //   container.appendChild(card);
    // });


//how to update an API

// let user2={
//   name:'kohli',
// }

// fetch('https://gorest.co.in/public/v2/users/8099654',{
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

// let user_3={
//   name:'Hardik Pandya',
//   email:`hardikk33${Date.now()}@gmail.com`,
//   gender:'male',
//   status:'active',
// }
// fetch('https://gorest.co.in/public/v2/users/8099646',{
//   method:'PATCH',     // IT IS USED TO UPDATE MULTIPLE FIELD
//   body:JSON.stringify(user_3),
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

// fetch('https://gorest.co.in/public/v2/users/8099658',{
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

