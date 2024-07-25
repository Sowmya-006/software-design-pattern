import React from "react";
    
const Navbar = () => {
    const LinksData = []
    return (
         <div className="w-full h-[8vh] flex flex-row justify-center items-center border-b-2 border-primary">
            <div className='h-full w-1/4 flex flex-row justify-center items-center'>
            Logo
            </div>
            <div className="h-full w-3/4 flex flex-row justify-center items-center">
            {
                LinksData.map((data,index) => (
                    <li key={index} className="list-none">
                        <NavLink to={data.link}>
                            {data.title}
                        </NavLink>
                    </li>

                ))
            }
            <ModeToggle/>
            </div>
         </div>
    )
}