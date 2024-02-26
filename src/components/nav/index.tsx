import { Inav } from "./nav";

const Nav = ({ link01, link02, name01, name02 }:Inav) => {
    return (
        <nav className="nav">
            <a target="_blank" href={ link01 }>{ name01 }</a>
            <a target="_blank" href={ link02 }>{ name02 }</a>
        </nav>
    );
}

export default Nav;