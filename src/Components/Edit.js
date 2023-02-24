// import { useState } from "react";
// import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
    const [edit, setEdit] = useState([])
    const { editTd } = useParams(0)
    
    console.log(editTd);
    useEffect(() => {
        fetch(`http://localhost:9000/products/${editTd}`).then(res => res.json()).then(data => setEdit(data))
    }, [editTd])


    const [title, settitle] = useState('');
    const [price, setprice] = useState(0);
    const [description, setdescription] = useState('');
    const [category, setcategory] = useState('');
    let navigate = useNavigate("")
    const formSubmit = (e) => {
        e.preventDefault()


        fetch(`http://localhost:9000/products/${editTd}`, {
            method: 'PUT',
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
                        // e.target.value=edit.title
                        settitle(e.target.value)

                    }} type="text" className="form-control" id="exampleFormControlInput1" placeholder={edit.title} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput2" className="form-label">Price</label>
                    <input onChange={(e) => {
                        setprice(e.target.value)
                    }} type="number" className="form-control" id="exampleFormControlInput2" placeholder={edit.price} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput3" className="form-label">category</label>
                    <input
                        onChange={(e) => {
                            setcategory(e.target.value)
                        }} type="text" className="form-control" id="exampleFormControlInput3" placeholder={edit.category} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                    <textarea onChange={(e) => {
                        setdescription(e.target.value)
                    }} className="form-control" id="exampleFormControlTextarea1" placeholder={edit.description} rows="3" required />
                </div>
                <input type="submit" className="btn btn-dark" value="Edit" />
            </form>
        </>
    )


}
export default Edit;