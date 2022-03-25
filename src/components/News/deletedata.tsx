import React, { useEffect, useState } from "react";

export const DeleteItemNew = () => {
    const [status , setStatus] = useState("");

    useEffect(() => {
        // DELETE request using fetch with async/await
        async function deletePost() {
            await fetch('https://jsonplaceholder.typicode.com/comments', { method: 'DELETE' });
            setStatus('Delete successful');
        }
        deletePost();
    }, []);

    return (
        <div >
            <a href="#" className="btn btn-outline-danger">Remove</a>
            <p className="text-warnning">{status}</p>
        </div>
    )
}