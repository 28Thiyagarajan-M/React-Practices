import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const DemoAxios = () => {

    const [data, setData] = useState([]);
    const postId = useRef();

    const postRequest = {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
        ]
    }

    const fetchData = async () => {
        console.log("Start Fetching...")
        try {
            await axios.get("https://dummyjson.com/products").then((response) => {
                // console.log(response.data.posts)    
                setData(response.data.products)
            });
        } catch (error) {
            console.log(error);
        }
    }

    const deletData = async (id) => {
        console.log("Deleting data...")
        // console.log(id.current.value);

        try {
            await axios.delete(`https://dummyjson.com/products/${id.current.value}`).then(response => {
                console.log(response.status)
                fetchData();
            })
        } catch (error) {
            console.log(error);
        }
    }

    const postData = async (postRequest) => {
        try {
            await axios.post("https://dummyjson.com/products/", postRequest).then(response => {
                console.log(response)
                fetchData();
            });
        } catch (error) {
            console.log(error);
        }
        alert("Successfully Posted");

        fetchData();
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <label>Delete post Id :</label>
            <input type="number" ref={postId} ></input>
            <button onClick={() => deletData(postId)}> Delete </button>
            <button onClick={() => postData(postRequest)}>Post data</button>
            {data.map(d =>
                <p key={d.id}>
                    <li>Id: {d.id}</li>
                    <li>Brand : {d.brand}</li>
                    <li>Title : {d.title}</li>
                    <li>Price : {d.price}</li>
                    <li>Category: {d.category}</li>
                </p>)
            }
        </>
    );
}


export default DemoAxios;