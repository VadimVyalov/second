"use client";
import { Link } from 'react-scroll';

const  Navbar=()=> {
  const menu=    [  
    {
      "section": "About",
      "link": "about"
    },
    {
      "section": "Services",
      "link": "services"
    },
    {
      "section": "Career",
      "link": "career"
    },
    {
      "section": "Gallery",
      "link": "gallery"
    },
    {
      "section": "Contacts",
      "link": "contacts"
    }
  ]
	return (

		<nav className="flex flex-col gap-[48px] t:flex-row t:gap-[24px] d:gap-[56px]
			font-400 text-18 tracking-[1.8px] t:text-14 t:tracking-[1.4px] " 
			>
              {menu.map((item) => (
                
                <Link
                key={item.section}
              
                href={item.link}
                  spy={true}
                  active="active"
                  smooth={true}
                  duration={500}
                  to={item.link}
                >
                  {`${item.section}`}

                </Link>
                /* <div> <p>'hello'</p></div> */
                
				))}
			
		</nav>
	);
}
export default Navbar;