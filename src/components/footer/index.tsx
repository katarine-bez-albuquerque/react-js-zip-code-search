import { Ifooter } from "./footer";

const Footer = ({ copyright, text }:Ifooter) => {
    return (
        <footer className="footer">
            <section className="footer-sec">
                <h6>{ copyright }<br />{ text }</h6>
            </section>
        </footer>
    );
}

export default Footer;