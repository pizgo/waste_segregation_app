import {db} from "./components/firebase";
import {useState, useEffect} from "react";


export const trashTest = () => {

    const [trash, setTrash] = useState([]);

    useEffect(() => {
        db.collection("garbage").get().then((querySnapshot) => {
            const allTrash = [];
            querySnapshot.forEach((doc) => {
                allTrash.push({
                    ...doc.data(),
                    id: doc.id
                });
            });

            setTrash(allTrash);
        });
    }, [])

    return (
        <div className="testFirebase">{trash.map(({title, binID}) => {
            return (
                <div key={id}>
                    <h1>{binID}</h1>
                    <h2>{title}</h2>
                </div>
            )
        })}</div>
    )

}


// return (
//     <nav
//         className="navbar is-primary"
//         role="navigation"
//         aria-label="main navigation"
//     >
//         <div className="container">
//             <div className="navbar-brand">
//                 <a
//                     role="button"
//                     className={`navbar-burger burger ${isOpen && "is-active"}`}
//                     aria-label="menu"
//                     aria-expanded="false"
//                     onClick={() => setOpen(!isOpen)}
//                 >
//                     <span aria-hidden="true"></span>
//                     <span aria-hidden="true"></span>
//                     <span aria-hidden="true"></span>
//                 </a>
//             </div>
//
//             <div className={`navbar-menu ${isOpen && "is-active"}`}>
//                 <div className="navbar-start">
//                     <NavLink
//                         className="navbar-item"
//                         activeClassName="is-active"
//                         to="/"
//                         exact
//                     >
//                         Home
//                     </NavLink>
//
//                     <NavLink
//                         className="navbar-item"
//                         activeClassName="is-active"
//                         to="/about"
//                     >
//                         About
//                     </NavLink>
//
//                     <NavLink
//                         className="navbar-item"
//                         activeClassName="is-active"
//                         to="/profile/Vijit"
//                     >
//
//                         // <header className="navbar" role="navigation" aria-label="main navigation">
//                         //     <div className="navbar__container">
//                         //         <div className="navbar__brand">
//                         //             <a role="button">
// //                className={`navbar__burger burger ${isOpen && "is-active"}`}
// //                aria-label="menu"
// //                aria-expanded="false"
// //                onClick={() => setOpen(!isOpen)}>
// //                     <span className="navbar__burger-span" aria-hidden="true"></span>
// //                     <span className="navbar__burger-span" aria-hidden="true"></span>
// //                     <span className="navbar__burger-span" aria-hidden="true"></span></a>
// //
// //             <div className={`navbar__menu ${isOpen && "is-active"}`}>
// //                 <div className="navbar__start">
// //                     <NavLink className="navbar__item navbar__logo " activeClassName="is-active" to="/">Posegreguj swoje śmieci</NavLink>
// //                     <NavLink className="navbar__item" activeClassName="is-active" to="/SearchForm">Gdzie wyrzucę...</NavLink>
// //                     <NavLink className="navbar__item" activeClassName="is-active" to="/AddTrash">Dodaj śmieci!</NavLink>
// //                 </div>
// //             </div>
// //         </div>
// //     </div>
// // </header>