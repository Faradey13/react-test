import Blocks from "../pages/Blocks";
import Login from "../pages/Login";
import About from "../pages/About";
import BlockById from "../pages/BlockById";

export const routes = [
    {path: "/blocks", element: <Blocks/>},
    {path: "/about", element: <About/>},
    {path: "/blocks/:id", element: <BlockById/>},
]