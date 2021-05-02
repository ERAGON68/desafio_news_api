import axios from 'axios';
//import Card from './src/components/pages/Card';
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router';

export default function News({ currentUser }) {
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState('entertainment');

    useEffect(() => {
        getNews();
    }, [category]); // [category , contry , titulo, descripcion] si hay otros select y se quiere renderizar cuando cambian, se los incluye aqui

    const getNews = async () => {
        const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?apiKey=b87dd70e3ac44e3aa45d83ed16c8b6dd&category=${category}`
        );
        setArticles(response.data.articles);
        console.log("RESPONSEDATAARTICLES", response);
    };

    const handleChange = (event) => {
        const { value } = event.target;
        setCategory(value);
    };

    // if (currentUser === '') {
    //     return <Redirect to="login" />
    // }

    return (
        <div>
            Noticias
            <div>
                <select onChange={handleChange}>
                    <option value="business">Negocios</option>
                    <option value="entertainment">Entretenimiento</option>
                    <option value="general">General</option>
                </select>
            </div>
            {articles.map((art) => (
                <div>{art.author}</div>
            ))}
        </div>
    );
}