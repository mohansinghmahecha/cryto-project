import ab from './../ab.webp'
import logo from '../ssjain.png'
export default function Navbar() {
    return (
        <div className="flex flex-row  items-center shadow-xl w-screen shadow-sky-200 ">
           
               {/*   <img className='w-20'alt='logoimage' src={ab} />*/}
               <img className='w-20'alt='logoimage' src={logo} />
               <span className='m-1 text-black-900 font-bold'>Subodh Project</span>
           



        </div>


    )
}