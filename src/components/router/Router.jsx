import { useRoutes } from "react-router";
import Home from "~/pages/Home";
import About from "~/pages/About";
import Services from "~/pages/Services";
import Projects from "~/pages/Projects";
import ProjectsSingle from "~/pages/ProjectsSingle";
import Certificate from "~/pages/Certificate";
import Contact from "~/pages/Contact";

const Router =({data})=>{
    const minirouter =[
        {
            path:'/',
            element:<Home data={data}  />,
            exact : true
        },
        {
            path:'about',
            element:<About data={data} />
        },
        {
            path:'/services/:slug',
            element:<Services data={data} />
        },
        {
            path:'/projects',
            element:<Projects />
        },
        {
            path:'/projects/:slug',
            element:<ProjectsSingle />
        },
        {
            path:'/certificate',
            element:<Certificate />
        },
        {
            path:'/contact',
            element:<Contact />
        }
    ]
    const route = useRoutes(minirouter)
    return <>{route}</>
}
export default Router