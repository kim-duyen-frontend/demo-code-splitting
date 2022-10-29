import React, { useEffect, useState } from 'react';
import axios from "axios";

function List() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json");
            if (response && response.data) {
                setData(response.data);
            }
            return response?.data;
        }
        getData();
    }, [])
    return (
        <div className="list">
            <div className="container">
                <div className="listPokemon">
                    {data.map((item, index) => (
                        <div className="box" key={index}>
                            <img src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${item.image}`} alt={item.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default List;