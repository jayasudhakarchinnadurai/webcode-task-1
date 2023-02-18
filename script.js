url=`https://api.openbrewerydb.org/breweries`
async function api(){
    v=fetch(url)
try{
   out1 = await v       // response
   prom = out1.json()   // promise
   out11 = await prom
   console.log(out11);
   var parent = document.querySelector('body')
for (let i of out11){
      var name=document.createElement('h5')
      name.innerText='Name:'
      name.style.color='blue'
      parent.append(name)
      var display_name=document.createElement('h5')
      display_name.innerText=i.name
      display_name.style.color='blue'
      parent.append(display_name)
      var name1=document.createElement('h5')
      name1.innerText='Url:'
      name1.style.color='red'
      parent.append(name1)
      var anchor_tag=document.createElement('a')
      anchor_tag.setAttribute('href',i.website_url)
      anchor_tag.innerText=i.website_url
      parent.append(anchor_tag)
      
       if(i.phone ){
         var name2=document.createElement('h5')
      name2.innerText='phone No:'
      name2.style.color='green'
      parent.append(name2)
           var display_phone = document.createElement('p')
           display_phone.innerText=i.phone
           display_phone.style.color='green'
          parent.append(display_phone)
       }
        }
   
}catch{
   console.log('there is an error');
   console.log(url);
}



}

api()












