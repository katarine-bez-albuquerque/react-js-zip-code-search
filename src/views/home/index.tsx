import { useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Main from "../../components/main";
import Nav from "../../components/nav";
import Instance from "../../data";

const Home = () => {
    /**
     * Variáveis
     * Variables
     */
    const [zipcode, setZipCode] = useState('');
    const [zip, setZip] = useState('Zip Code');
    const [publicplace, setPublicplace] = useState('Public place');
    const [district, setDistrict] = useState('District');
    const [city, setCity] = useState('City');
    const [uf, setUf] = useState('UF');
    const [message, setMessage] = useState('');
    /**
     * Get Zip Code
     * Obter CEP
     */
    const getZipcode = async () => {
        if(zipcode === '') {
            setMessage('Enter your zip code');
            return;
        }
        await Instance.get(`${ Number(zipcode) }/json/`)
            .then(res => {
                setPublicplace(res.data.logradouro);
                setDistrict(res.data.bairro);
                setCity(res.data.localidade);
                setUf(res.data.uf);
                setZip(res.data.cep);
            })
            .catch(error => {
                console.log(error.message);
            });
    }
    /**
     * Renderiza Página
     * Render Page
     */
    return (
        <div className="page">
            <Nav
                link01="https://www.linkedin.com/in/katarine-albuquerque/"
                link02="https://github.com/katarine-bez-albuquerque"
                name01="Linkedin"
                name02="Github"
            />
            <Header
                title="ZIP Code"
                subtitle="Search"
                name="zipcode"
                value={ String(zipcode)}
                onchange={ (e) => setZipCode(e.target.value) }
                onclick={ () => getZipcode() }
                message={ zipcode === ''? message : '' }
            />
            <Main>
                <section id="main-sec" className="main-sec">
                    <h5>{ publicplace }</h5>
                    <h5>{ district }</h5>
                    <h5>{ city } - { uf }</h5>
                </section>
                <section className="main-sec">
                    <h2>{ zip }</h2>
                </section>
            </Main>
            <Footer
                copyright="@ZIP CODE 2024"
                text="All rights reserved"
            />
        </div>
    );
}

export default Home;