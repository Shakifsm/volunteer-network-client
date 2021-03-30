import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Addevents = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        const eventData = {
            name : data.name,
            imageUrl : imageURL
        }
        const url = `http://localhost:5055/addEvent`
        console.log(eventData);

        fetch(url, {
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(eventData)
        })
        .then(res => console.log('serverside responce', res))
    };


    const handleImgUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '0233cc6f820bf3b7e422a932b34aaf8e')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <h1>Add your awesome events here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="New exiting event" ref={register} />
                <br />
                <input name="exampleRequired" type="file" onChange={handleImgUpload} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Addevents;