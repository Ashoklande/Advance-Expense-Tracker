import React from 'react'
import { useState } from 'react';
import Tableheading from './Components/Tableheading';

const App = () => {
  const [IsEditing, setIsEditing] = useState({state:false,Data:''});
  const [Adddone, setAdddone] = useState(false);
  const [InitialData, setInitialData] = useState([
    {
      name:'Biskut',
      Amount:10,
      category:"Food",
      date:"2025-02-11"
    },
    {
      name:'Movie',
      Amount:10,
      category:"Entertainment",
      date:"2025-03-20"
    }
  ])

  const IsEditingFun=(name)=>{
    setIsEditing({state:true,Data:name});
    const finddata=InitialData.find(data=>data.name===name);
    
    setname(finddata.name);
    setAmount(finddata.Amount);
    setcategory(finddata.category);
    setdate(finddata.date);
    setAdddone(false)
  }

  const onSavedata = () => {
    // Make sure the name is valid before proceeding
    if (IsEditing.Data) {
      setInitialData(prev => prev.map(data => 
        data.name === IsEditing.Data
          ? { ...data, name, category, Amount, date }  // Update the item with new values
          : { ...data }  // Leave the other items unchanged
      ));
      // Reset editing state and input fields
      setIsEditing({ state: false, Data: "" });
      setname('');
      setAmount('');
      setcategory('');
      setdate('');
    }else if (Adddone) {
      if (name!=='') {
        setInitialData(prev=>[...prev,{name,category,date,Amount}]);
        setname('');
        setAmount('');
        setcategory('');
        setdate('');
        setAdddone(false);
      }else{
        alert("Name Filed is Mandetory to save Data");
        }     
      }    
  };
  
  const onDelete=(name)=>{
      const newdata=InitialData.filter(data=>data.name!==name);
      setInitialData(newdata);
  }

  //Five usestate to store input data and setdata For Editing
  const [name, setname] = useState('');
  const [Amount, setAmount] = useState('');
  const [category, setcategory] = useState('');
  const [date, setdate] = useState('');

  return (
    <div className='bg-amber-100 w-full h-screen'>
      <div className=''>
      <h2 className='text-center text-3xl font-medium p-3'>Expense Tracker</h2>
        <div  className='px-40 my-10'>
          <table className='w-full shadow-2xl bg-white '>
           <Tableheading/>
            <tbody className='mt-2'>
              {InitialData && InitialData.map((item,idx)=>(
                item.name===IsEditing.Data ?
                //for Displayind Data
                  <tr>
               <td className='px-4 py-2 w-1/5 text-lg text-gray-700 border'>
                 <input value={name} onChange={e=>setname(e.target.value)} className='px-3 py-2 bg-white border outline-none rounded-md' placeholder="Select Category" />
               </td>
               <td className='px-4 py-2 w-1/5 text-lg text-gray-700 border'>
                <input value={Amount} onChange={e=>setAmount(e.target.value)} className='px-3 py-2 bg-white border outline-none rounded-md' placeholder="Amount" /></td>
               <td className='px-4 py-2 w-1/5 text-lg text-gray-700 border'> 
                <select value={category} onChange={e=>setcategory(e.target.value)} className='px-3 py-2 bg-white border outline-none rounded-md' >
                 <option selected disabled value="">Select Category</option>
                 <option value="Movie">Movie</option>
                 <option value="Entertaimment">Entertaimment</option>
                 <option value="Food">Food</option>
                 <option value="Other">Other</option>
                 </select></td>
               <td className='px-4 py-2 w-1/5 text-lg text-gray-700 border'>
                <input value={date} onChange={e=>setdate(e.target.value)} type="date" className='px-3 py-2 bg-white border outline-none rounded-md' /></td>
               <td className='px-4 py-2 text-lg w-1/5 text-gray-700 border'>
                 <div className='flex gap-2 px-3 py-2 bg-white border '>
                 <button onClick={()=>onSavedata()} className={` text-white px-4 py-1 border cursor-pointer rounded-md border-black ${IsEditing.state? "bg-green-500":'bg-red-400'}`}>{IsEditing.state?"Save":"Edit"}</button>
                 <button  className='bg-red-400 text-white px-4 py-1 border cursor-pointer rounded-md border-black'>Delete</button>
                 </div></td>
                 </tr>:
              //for Updating Data 
             <tr key={idx}>
             <td className="px-4 py-2 text-lg w-1/5 text-gray-700 border">{item.name}</td>
             <td className="px-4 py-2 text-lg text-gray-700 border">
               ₹{item.Amount}
             </td>
             <td className="px-4 py-2 text-lg w-1/5 text-gray-700 border">
               {item.category}
             </td>
             <td className="px-4 py-2 text-lg w-1/5 text-gray-700 border">{item.date}</td>
             <td className="px-4 py-2 w-1/5 text-lg text-gray-700 border">
               <div className="flex gap-2">
                 <button onClick={() => IsEditingFun(item.name)}
                   className="bg-blue-400 text-white px-4 py-1 border cursor-pointer rounded-md border-black"
                 >
                   Edit
                 </button>
                 <button onClick={()=>onDelete(item.name)} className="bg-red-400 text-white px-4 py-1 border cursor-pointer rounded-md border-black">
                   Delete
                 </button>
               </div>
             </td>
             </tr>
                )) }

                {Adddone && 
                <tr>
                <td className='px-4 py-2 text-lg w-1/5 text-gray-700 border'>
                  <input value={name} onChange={e=>setname(e.target.value)} className='px-3 py-2 bg-white border-b-2  outline-none' placeholder="Select Category" />
                </td>
                <td className='px-4 py-2 text-lg w-1/5 text-gray-700 border'>
                 <input value={Amount} onChange={e=>setAmount(e.target.value)} className='px-3 py-2 bg-white border-b-2  outline-none ' placeholder="Amount" /></td>
                <td className='px-4 py-2 w-1/5 text-lg text-gray-700 border'> 
                 <select value={category} onChange={e=>setcategory(e.target.value)} className='px-3 py-2 bg-white border-b-2  outline-none' >
                  <option selected disabled value="">Select Category</option>
                  <option value="Movie">Movie</option>
                  <option value="Entertaimment">Entertaimment</option>
                  <option value="Food">Food</option>
                  <option value="Other">Other</option>
                  </select></td>
                <td className='px-4 py-2 w-1/5 text-lg text-gray-700 border'>
                 <input value={date} onChange={e=>setdate(e.target.value)} type="date" className='px-3 py-2 bg-white border-b-2  outline-none' /></td>
                <td className='px-4 py-2 w-1/5 text-lg text-gray-700 border'>
                  <div className='flex gap-2 px-3 py-2 bg-white border '>
                  <button onClick={()=>onSavedata()} className=' text-white px-4 py-1 border cursor-pointer rounded-md border-black  bg-green-500'>Save</button>
                  <button onClick={()=>setAdddone(false)} className='bg-red-400 text-white px-4 py-1 border cursor-pointer rounded-md border-black'>Cancel</button>
                  </div></td>
                  </tr>
                }
           </tbody>
          </table>
          {(InitialData.length===0 && Adddone===false)  && <div className='flex items-center justify-center'><h3 className='p-4 text-2xl font-light text-center'>NO data Entry</h3></div> }
          <div className='flex items-center justify-end m-2 '><button 
          onClick={()=>{if(Adddone){
                    alert("Fill Data And Save first");
                    }else{
                      setAdddone(true)
                    }
         }} className='bg-blue-500 cursor-pointer px-2 rounded-md text-white'>Add</button></div>
        </div>
      </div>
    </div>
  )
}

export default App