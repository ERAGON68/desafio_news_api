import axios from 'axios';
//import Card from './src/components/pages/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import Card from 'react-bootstrap/Card';
export default function News({ currentUser }) {
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState('business');
    const [country, setCountry] = useState('us');


    useEffect(() => {
        getNews();
    }, [category,country] ); // [category , country , titulo, descripcion] si hay otros select y se quiere renderizar cuando cambian, se los incluye aqui

    const getNews = async () => {
        const response = await axios.get(
            `https://newsapi.org/v2/top-headlines?apiKey=b87dd70e3ac44e3aa45d83ed16c8b6dd&category=${category}&country=${country}`
        );
        setArticles(response.data.articles);
        console.log("RESPONSEDATAARTICLES", response);
        console.log("CATEGORIAGUETNEWS", category);
        console.log("COUNTRYGETNEWS", country);

    };

    const handleChange = (event) => {
        const { value } = event.target;
        setCategory(value);
        console.log("CATEGORIA", value);
    };
    const handleChangeCountry = (eventCountry) => {
        const { value } = eventCountry.target;
        setCountry(value);
        console.log("COUNTRY", value);
    };

    // if (currentUser === '') {
    //     return <Redirect to="login" />
    // }

    return (
        <div>
            Categoria Noticias
            <div>
                <select onChange={handleChange}>
                    <option value="business">Negocios</option>
                    <option value="entertainment">Entretenimiento</option>
                    <option value="general">General</option>
                </select>
            </div>
            Pais de Noticias
            <div>
                <select onChange={handleChangeCountry}>
                    <option value='us'>Estados Unidos</option>
                    <option value='gr'>Grecia</option>
                    <option value='ar'>Argentina</option>

                </select>
            </div>
            <div>
            {articles.map((art) => (
                <div className="d-flex row wrap mx-auto ">
                    <div className="d-flex row">
                        <Card className="primary" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={art.urlToImage} />
                            <Card.Body>
                                <Card.Title className="info">{art.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{art.author}</Card.Subtitle>
                                <Card.Text>{art.content}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}
