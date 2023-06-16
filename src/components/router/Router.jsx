import { useRoutes } from "react-router";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Services from "../../pages/Services";
import Projects from "../../pages/Projects";
import ProjectsSingle from "../../pages/ProjectsSingle";
import Certificate from "../../pages/Certificate";
import Contact from "../../pages/Contact";

const Router =({data})=>{
    const minirouter =[
        {
            path:'/',
            element:<Home data={data}  />,
            exact : true
        },
        {
            path:'/about',
            elemenet:<About />
        },
        {
            path:'/services',
            elemenet:<Services />
        },
        {
            path:'/projects',
            elemenet:<Projects />
        },
        {
            path:'/projects/:slug',
            elemenet:<ProjectsSingle />
        },
        {
            path:'/certificate',
            elemenet:<Certificate />
        },
        {
            path:'/contact',
            elemenet:<Contact />
        }
    ]
    const route = useRoutes(minirouter)
    return <>{route}</>
}
export default Router