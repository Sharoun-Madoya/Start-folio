import React from 'react'; 
import "./views.css" 

function NavBar(){
    return(
        <div class="navContainer">
            <div>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
export default NavBar


// mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center