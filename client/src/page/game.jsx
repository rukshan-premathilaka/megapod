import Container from "../component/Container.jsx";
import Navbar from "../section/Navbar.jsx";
import Game01 from "../game/game01/Game01.jsx";
import Page1 from "../game/game01/page1.jsx";
import Page2 from "../game/game01/page2.jsx";
import GameEnd from "../game/game01/end.jsx";

export default function Game() {


    return(

        <Container>

            <Game01 />
            {/*<Page1 />*/}
           {/* <Page2 />*/}
           {/* <GameEnd />*/}

        </Container>

    )

}