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
            element:<Projects data={data} />
        },
        {
            path:'/projects/:slug',
            element:<ProjectsSingle data={data} />
        },
        {
            path:'/certificate',
            element:<Certificate data={data} />
        },
        {
            path:'/contact',
            element:<Contact data={data} />
        }
    ]
    const route = useRoutes(minirouter)
    return <>{route}</>
}
export default Router