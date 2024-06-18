import Events from "../Events/Events";
import Home from "../Home/Home";
import Infos from "../Infos/Infos";
import { Video } from "../Video/Video";

export default function BasePage() {
    return(
        <>
            <Home />
            <Video />
            <Events />
            <Video />
            <Infos />
        </>
    )
}