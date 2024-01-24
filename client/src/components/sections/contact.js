import React from 'react';  
import "./sections.css"

function Contact (){  
 return(
    <div>
        <div>
            <div>
                <label>Name</label>
                <input type='text'></input>
            </div>
            <div>
                <label>Email</label>
                <input type='email'></input>
            </div>
            <div>
                <label>Comment</label>
                <input type='text'></input>
            </div>
        </div>
        <div>
            <ul>
                <li><a>Whatsapp</a></li>
                <p>+254708810442</p>
            </ul>
            <ul>
                <li><a href="madoyasharoun@gmail.com">email</a></li>
                <p>madoyasharoun@gmail.com</p>
            </ul>
            <ul>
                <li><a href='https://www.instagram.com/pinkish_republic'>instagram</a></li>
            </ul>
        </div>
    </div>
 )
}  
export default Contact;  