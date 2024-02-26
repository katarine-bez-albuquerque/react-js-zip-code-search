import { Iheader } from "./header";

const Header = ({ title, subtitle, name, value, message, onchange, onclick }:Iheader) => {
    return (
        <header className="header">
            <section className="header-sec">
                <article className="title">
                    <h4>{ subtitle }</h4>
                    <h1>{ title }</h1>
                </article>
            </section>
            <section className="header-sec">
                <section id="header-cep" className="header-cep">
                    <input 
                    autoComplete="off" 
                    type="number"
                    name={ name }
                    value={ value } 
                    placeholder="CEP:"
                    onChange={ onchange }
                    />
                    <button type="button" onClick={ onclick }>➜</button>
                </section>
                <section className="header-cep">
                    <h5>{ message }</h5>
                </section>
            </section>
        </header>
    );
}

export default Header;