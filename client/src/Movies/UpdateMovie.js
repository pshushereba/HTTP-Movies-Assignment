import React, {useState, useEffect} from 'react'

const UpdateMovie = (props) => {
    console.log("UpdateMovie", props);
    return (
        <div>
            <form>
                <input 
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={props.editMovie.title}></input>
                <input 
                    type="text"
                    name="director"></input>
                <input
                    type="text"
                    name="metascore"></input>
                <button>Save</button>
            </form>
        </div>
    )
}

export default UpdateMovie;