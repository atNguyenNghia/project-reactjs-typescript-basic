import { type } from "os";
import React, { useEffect, useState } from "react";
import { IUser } from "../../pages/NewsApp";

type Props = {
    data?:IUser
    setDataDetail : (data:IUser | null ) => void;
}

export function DetailNewItem(props:Props) {
    const [email , setEmail] = useState<string>("");
    const [name , setName] = useState<string> ("");
    const [body , setBody] = useState<string>("");

      useEffect(() => {
        if(!props.data) return;
        const {body,email,id,name} = props.data;
        try {
            const requestOptions = {
                method: 'GET',
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
                setBody(data.body)
            ));
        } catch (error) {
            console.log(error)
        }
      }, [[props.data]]);

    return (
        <div  id = "detailContainer">
         <div className="detailInnerContainer">
             <div className="detailForm">
                <div className="img-fuild">
                    <img src="https://danviet.mediacdn.vn/zoom/480_300/296231569849192448/2021/9/14/464-16316288609712092007554-72-0-872-1280-crop-1631631008044111074198.jpg" alt="" />
                </div>
                <div className="detailCotent ">
                    <div>
                        <h3 className="text-center"> Title: {props.data?.name}</h3>
                        <p className="text-dark"> Content New Item : {props.data?.body}</p>
                        <p className="text-secondary">Email Address :    {props.data?.email}</p>
                    </div>
                    <a href="https://tuoitre.vn/cuoc-chien-nga-ukraine-ngan-tac-dong-tieu-cuc-toi-kinh-te-viet-nam-20220228081015907.htm" 
                        className="btn btn-outline-secondary text-dark p-2">
                         More .... 
                    </a>
                </div>
             </div>
             <hr/>
          <button onClick={()=>props.setDataDetail(null)} className="btn btn-danger m-2">Close</button>
         </div>
      </div>
    )
}
