import React, { useState } from "react";


export function PostRequestHooks() {
    const [email , setEmail] = useState("");
    const [name , setName] = useState ("");
    const [body , setBody] = useState("");
    const [message , setMessage] = useState("");
    

  const handleSubmit =async (event:any) => {
    event.preventDefault();
    try {
        const requestOptions = {
            method: 'POST',
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
        <div>
        <button type="button" className="btn btn-primary m-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Add News
        </button>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-danger" id="exampleModalLabel">Enter the latest information in our form</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail" 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputTitle" className="form-label">Title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleInputTitle" 
                        onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleContent" className="form-label">Content</label>
                    <textarea  
                        className="form-control"
                        id="exampleContent" 
                        rows={5}
                        cols={5}
                        onChange={(e) => setBody(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Add New</button>
                  <p className="text-success">{message}</p>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
}