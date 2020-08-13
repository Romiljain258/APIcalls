import React from "react";
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AllFile extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-sm navbar-dark bg-light">
                    <a class="navbar-brand">
                        <img src="https://cdn.featuredcustomers.com/Company.logo/hackernews-bca3f61bd570777546171946a15bd138.jpg" width="30" height="30" alt="iamhe" />
                    </a>
                    <button class="navbar-toggler bg" data-toggle="collapse" data-target="#navbarMenu">
                        <span class="navbar-toggler-icon bg"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarMenu">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link className="navbar-brand" to="/"><b><b>Hacker News</b></b></Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/new">New <span className="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link ml-0 mr-0 p" to="/past">past <span className="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">

                                <Link className="nav-link p" to="/comment">comments<span className="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link p" to="/job">Ask<span className="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                            <Link className="nav-link p" to="/show">Show<span className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }

}

export default AllFile;