import { Link } from "react-router-dom"
const DashboardView = () => {
  return (<>

 <h1 className="text-5xl text-gray-200 font-black">My Projects</h1>
 <p className="text-2xl font-light text-gray-400 mt-5">Manages and administers my projects</p>
<nav className="my-5">
<Link className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors rounded-md"
to='projects/create'> 
New Project</Link>
</nav>
  </>
  )
}

export default DashboardView