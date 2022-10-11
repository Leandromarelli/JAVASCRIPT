const homeControler = async () =>{
    try{ 
         const response = await fetch('../json/stock.json');
         const data = await response.json();
 
         return data;
     } catch(error){
         console.log('Hubo un error', error)
     }
 }

 export { homeControler };