import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Tabledata() {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9000/products').then(res => res.json()).then(data => setproducts(data))
    }, [])
    const allProducts = products.map((product) => {
        return (
            <tr key={product.id}>
            <th scope="row">{product.id}</th>
            <td >{product.category}</td>
            <td className="text-center text-nowrap">{product.price}</td>
            <td className="text-center d-flex align-items-md-center justify-content-md-center gap-2 flex-column flex-md-row">
                <Link to={`products/${product.id}`}     className="btn btn-primary btn-sm ">Viwe</Link>
                <Link to={`/Edit/${product.id}`}className="btn btn-info btn-sm ">Edit</Link>
                <Link to={`/${product.id}`} className="btn btn-danger btn-sm  ">Delete</Link>
            </td>
          </tr>
        )
    })


    return (
        <>
 <table className="table container">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th className="text-center" scope="col">Options</th>
    </tr>
  </thead>
  <tbody>
    {allProducts}
  </tbody>
</table>
        </>
    )
}
export default Tabledata;