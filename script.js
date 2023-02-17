document.querySelector('#btn').addEventListener('click',start)

function start(){
 fetch('https://aws.random.cat/meow')
   .then(res=>res.json()) 
   .then(data=>{
    document.querySelector('.pic').innerHTML=`
            <img src='${data.file}' alt="cats">
    `
   })
  
}