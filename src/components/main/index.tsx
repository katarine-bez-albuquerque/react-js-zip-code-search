import { Imain } from "./main";

const Main = ({ children }:Imain) => {
    return (
        <main className="main">
            { children }
        </main>
    );
}

export default Main;