// import React, { useRef } from "react";
// import {firestore} from "../firebase";
// import {addDoc,collection} from "@firebase/firestore";

// export default function Home(){

// const messageRef=useRef();
// const ref =collection(firestore,"messages");
//     const handleSave=async(e)=>{
//         e.preventDefault();
//         console.log(messageRef.current.value);
// let data={
//     message:messageRef.current.value,
// };
// try{
//     addDoc(ref,data);
// }catch(e){
//     console.log(e);
// }
// };
//     return(
//         <div>
//             <form onSubmit={handleSave}>
//                 <label>User Name</label>
//                 <input type="text" ref={messageRef} placeholder="Enter here..."/>
//                 <button type="submit">Save</button>
//             </form>
//         </div>
//     );
// }