const url = "https://mocki.io/v1/491c6787-ccbb-4cfd-8335-534912fa791e"

export const fetch2 = async (body)=>{ 

    let obj = {error: "", loading:false, token : null}
    if(body.email == "")
        obj.error = "Email is required!"
    if(body.password == "")
        obj.error = "Password is required!"        
    if(obj.error != "")
        return obj; 

    const response =  await fetch(url);  
    const listItems = await response.json();  
    if(body.email != listItems.user.name)
        obj.error = "Invalid Email !"
    if(body.password != listItems.user.password)
        obj.error = "Email and Password do not match "        
    if(obj.error != "")
        return  obj;

        obj.token = listItems.user.token;
         return  msg; 
    //if (!response.ok) throw Error('Did not receive expected data');
   // const listItems = await response.json();  
     //console.log("fetch >>>", res)
     //return await res.json()
 } 