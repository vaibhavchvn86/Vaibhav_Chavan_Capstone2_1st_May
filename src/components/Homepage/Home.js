import './Home.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

let url = 'https://jsonplaceholder.typicode.com/posts'
let imgUrl = 'https://picsum.photos/200?random='

export default function Home() {

    const [data, setData] = useState([]);

    const getData = () => {
        fetch(url, { mehtod: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setData(data)

            })
    }

    useEffect(() => {
        getData();
    }, []);



    return (
        <>
            <div className="flex-container">
                {
                    data.map((item) => {
                        return (

                            <div>
                                <Link to={`/details/${item.id}`}>
                                    <div className="img-container">
                                        <img src={`${imgUrl}${item.id}`} alt="Loading..." />
                                    </div>
                                    <div className="desc-container">
                                        <p className="img-id">User Id : {item.id}</p>
                                        <p className="img-title">Title : {item.title} </p>
                                        <p className="img-body">Body : {item.body} </p>
                                    </div>
                                </Link>
                            </div>

                        )
                    })
                }





            </div>

        </>
    )
}