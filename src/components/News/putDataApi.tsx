import React, {  useState } from "react";
import { IUser } from "../../pages/NewsApp";

type Props = {
  data?:IUser
  setData:(data:IUser| null)=>void;
}
export function PutRequestHooks(props:Props) {
    const [email , setEmail] = useState("");
    const [name , setName] = useState ("");
    const [body , setBody] = useState("");
    const [message , setMessage] = useState("");
    
    React.useEffect(()=>{      
      if(!props.data) return;
      const {body,email,id,name} = props.data;
      setEmail(email);
    },[props.data]);

    if(!props.data) return null;
      // logic handleSubmit 
  const handleSubmit =async (event:any) => {
    event.preventDefault();
    try {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                email : email,
                name : name,
                body : body, }) 
        };
        fetch('https://jsonplaceholder.typicode.com/comments', requestOptions)
        .then(response => response.json())
        .then(data => (
            setEmail(data.email),
            setName(data.name),
            setBody(data.body),
            setMessage('Add new item successful')
        ));
    } catch (error) {
      console.log(error);
    }
  }

    return (
      // TODO : UI , Render UI
      <div  id = "modalContainer">
         <div className="modalInnerContainer">
          <form className="p-5" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" value={props.data.email} onChange = {(e)=> setEmail(e.target.value)}/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
              <input type="text" className="form-control" value={props.data.name} onChange = {(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Content</label>
              <textarea  className="form-control" value={props.data.body}   rows={5} cols={5} onChange = {(e) => setBody (e.target.value)}/> 
            </div>
            <button type="submit" className="btn btn-primary m-2">Update</button>
            <button onClick={()=>props.setData(null)} className="btn btn-danger m-2">Close</button>
            <p className="text-center text-success">{message}</p>
          </form>
         </div>
      </div>
    );
}