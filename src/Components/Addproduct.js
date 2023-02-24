import {  useState } from "react";
import { useNavigate } from "react-router-dom";
// import {  useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function Addproduct() {

    const [title, settitle] = useState('');
    const [price, setprice] = useState(0);
    const [description, setdescription] = useState('');
    const [category, setcategory] = useState('');
    let navigate = useNavigate("")
  const formSubmit = (e)=>{
         e.preventDefault()

         
        fetch('http://localhost:9000/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                price,
                category,
                description
            }),
        }).then((res) => res.json())
            .then((data) => {
                console.log(data);
                navigate('/')
            });
    }

    return (


        <>
            <form onSubmit={formSubmit} className="container mt-5" >
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                    <input onChange={(e) => {
                        settitle(e.target.value)

                    }} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput2" className="form-label">Price</label>
                    <input onChange={(e) => {
                        setprice(e.target.value)
                    }} type="number" className="form-control" id="exampleFormControlInput2" placeholder="Price" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput3" className="form-label">category</label>
                    <input
                        onChange={(e) => {
                            setcategory(e.target.value)
                        }} type="text" className="form-control" id="exampleFormControlInput3" placeholder="category" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea onChange={(e) => {
                        setdescription(e.target.value)
                    }} className="form-control" id="exampleFormControlTextarea1" placeholder="Description...." rows="3" required />
                </div>
                <input type="submit" className="btn btn-dark" value="Add" />
            </form>
        </>
    )




}
export default Addproduct;