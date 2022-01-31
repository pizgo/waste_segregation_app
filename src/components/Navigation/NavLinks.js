import React from 'react';
import { NavLink } from "react-router-dom";
import {motion} from 'framer-motion'

const NavLinks = ({isMobile, closeMobileMenu}) => {

    const animateSideBarFrom = {opacity: 0, x: -40}
    const animateSideBarTo = {opacity: 1, x: 0}

    return (
        <div className='container'>
            <section className="nav">
                <div  className='nav__container'>
                    <motion.div className='nav__element'
                        initial={animateSideBarFrom}
                        animate={animateSideBarTo}
                        transition={{delay: 0.1}}>
                            <NavLink className='nav__link' to="/"
                                     onClick={isMobile && closeMobileMenu}>
                                Start
                            </NavLink>
                    </motion.div>
                    <motion.div className='nav__element'
                        initial={animateSideBarFrom}
                        animate={animateSideBarTo}
                        transition={{delay: 0.1}}>
                            <NavLink className='nav__link' to="/SearchForm"
                                     onClick={isMobile && closeMobileMenu}>
                                Gdzie wyrzucę...
                            </NavLink>
                    </motion.div>
                    <motion.div className='nav__element'
                        initial={animateSideBarFrom}
                        animate={animateSideBarTo}
                        transition={{delay: 0.1}}>
                            <NavLink className='nav__link' to='/AddTrash'
                                     onClick={isMobile && closeMobileMenu}>
                                Dodaj śmieci
                            </NavLink>
                    </motion.div>
                    <motion.div className='nav__element'
                        initial={animateSideBarFrom}
                        animate={animateSideBarTo}
                        transition={{delay: 0.1}}>
                        <NavLink className="nav__link" to="/CollectionMap"
                                 onClick={isMobile && closeMobileMenu}>
                            Mapa PSZOK-ów
                        </NavLink>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default NavLinks;
