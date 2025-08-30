fetch('https://gorest.co.in/public/v2/users/8096913',{
  method:'DELETE',
  headers:{
    Accept:'application/json',
    Authorization:'Bearer b5c0eb640e976d0c854a4425023a7f70cbffa9b53e8baa63855d2888f12aa535'
  }
}).then(function(del){
  return del.json()
}).then(function(del_data){
  console.log(del_data)
})