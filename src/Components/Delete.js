import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
function Delete() {
    const { Deleteid } = useParams(0);
    let navigate = useNavigate("")

    useEffect(() => {


        Swal.fire({

            title: "You Will Delete one Item ?",
            showCancelButton: true,
        }).then((data) => {
            if (data.isConfirmed) {

                fetch(`http://localhost:9000/products/${Deleteid}`, {
                    method: 'DELETE',

                }).then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                    });
            }
            navigate('/')

        })




    })







    return (


        <>

        </>
    )

}
export default Delete;