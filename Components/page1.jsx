import React, { useState } from 'react'
import "./page1.css"
const Main = () => {
    const [show, setShow] = useState("Javascript");
    return (
        <div className='main'>
            <div className="table-content-left">
                {/* <h1 className='table-content'>Table of Contents:</h1> */}
                <ul className='table-data'>
                    <li>JavaScript</li>
                    <li>React JS</li>
                    <li>Node JS</li>
                    <li>Espress JS</li>
                    <li>Mongo DB</li>
                    <li>Dart</li>
                    <li>Flutter</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>PHP</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>Material UI</li>
                    <li>React Bootstrap</li>
                    <li>React Native</li>
                    <li>Angular</li>
                    <li>Vue JS</li>
                    <li>SQL</li>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                </ul>
            </div>
            <div className="main-content">
                <h1>JavaScript</h1>
                <p>
                    JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user. Common examples of JavaScript that you might use every day include the search box on Amazon, a news recap video embedded on The New York Times, or refreshing your Twitter feed. JavaScript is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.
                </p>
                <h2>For further details we have provided you with documentations and links also with flow to start learning JavaScript</h2>
                {/* <h1>React JS</h1>
                <p>
                    React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. Complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API.
                </p>
                <h1>Node JS</h1>
                <p>
                    Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command-line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts.
                </p>
                <h1>Espress JS</h1>
                <p>
                    Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.
                </p>
                <h1>Mongo DB</h1>
                <p>
                    MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.
                </p> */}
            </div>
        </div>
    )
}

export default Main