import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="container">
            <div className="blogs-container my-5">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="blogs">
                            <h3 className="blogs-heading">Difference Between NodeJS and JavaScript</h3>
                            <p className="blog">
                                NodeJS is a runtime environment for javascript. It allows javascript to run on desktop and server. It comes with a lot of modules and NodeJS is mostly used in web development.
                                <br />
                                <br />
                                Whereas Javascript is a scripting language. Abbreviated as JS. It is a high-level programming language used mostly for mobile and desktop application development to add interactivity.
                                Javascript itself only can run in browsers but with the help of NodeJS javascript can be run on the desktop and server-side as well. </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="blogs">
                            <h3 className="blogs-heading">When to use nodejs and when to use mongodb</h3>
                            <p className="blog">
                                Nodejs: NodeJS is a platform built on Chrome's V8 engine for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.
                                <br />
                                <br />
                                MongoDB: MongoDB is an open-source document-oriented database. Which is designed to store a large scale of data. MongoDB is categorized under the NoSQL database because the storage and retrieval of data in MongoDB are not in the form of tables. It is widely used for storing product information and details by finance and e-commerce companies.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="blogs">
                            <h3 className="blogs-heading"> Differences between sql and nosql databases.</h3>
                            <p className="blog">
                                SQL databases are primarily called Relational Databases, Whereas NoSQL databases are primarily called non-relational or distributed databases. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are either key-value pairs, document-based, graph databases, or wide-column stores.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="blogs">
                            <h3 className="blogs-heading">What is the purpose of jwt and how does it work</h3>
                            <p className="blog">JSON Web Token (JWT) is used for securely transmitting information between parties as a JSON object. The process is: The server generates a token that certifies the user identity, and sends it to the client. The client will send the token back to the server for every subsequent request, so the server knows the request comes from a particular identity. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;