import Link from 'next/link'
import '../static/css/main.scss'

const Header = () => (
    <div>
        <header className="navbar-fixed-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header-top">
                            <div className="header-top-logo">
                                <Link to="/" title="Logo">
                                    <img src={require('../static/img/logo.png')} alt="Dblog Logo" data-rjs="2"/>
                                </Link>
                            </div>
                            <div className="header-top-text">
                                <p><span className="font-italic">“Graphene” </span>
                                    The Wonderful Material! <i className="pe-7s-angle-right"/>
                                </p>
                            </div>
                            <nav className="header-top-nav">
                                <ul>
                                    <li><a href="#" className="light-link" title="Menu">
                                        <div id="menu-animate-icon" className="header-top-nav-menu-icon">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <nav className="header-nav">
                            <ul>
                                <li className="active"><Link to="/" title="home"><a>Home</a></Link></li>
                                <li className="dropdown">
                                    <Link to="/blog-post" className="dropdown-toggle" title="categories"><a>Categories</a></Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-elipse-blue">
                                        <Link to="/blog-list" title="Blog CSS articles"><a>CSS</a></Link>
                                        </li>
                                        <li className="nav-elipse-red"><Link to="/blog-list" title="Blog HTML articles"><a>HTML</a></Link>
                                        </li>
                                        <li className="nav-elipse-yellow"><Link to="/blog-list" title="Blog Javascript articles"><a>Javascript</a></Link>
                                        </li>
                                        <li className="nav-elipse-green"><Link to="/blog-list" title="Blog raphic articles"><a>Graphic</a></Link>
                                        </li>
                                        <li><Link to="/blog-post" title="Blog Post">Blog Post</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/about" title="About">About</Link></li>
                                <li><Link to="/portfolio" title="My projects">Portfolio</Link></li>
                                <li><Link to="/contact" title="Contact">Contact</Link></li>
                                <li><Link to="/add-content" title="Add Content">Add Content</Link></li>
                                <li><Link to="/dashboard" title="Dashboard">Dashboard</Link></li>
                                <li>
                                    <a 
                                    href="#" 
                                    className="nav-link" 
                                    onClick={this.onLogoutClick.bind(this)}>
                                    <img 
                                        className="rounded-circle"
                                        src={user.avatar}
                                        alt={user.name} 
                                        style={{width: '25px', marginRight: '5px'}} 
                                        title ="You must have a gravatar connected to your mail"/> {''}
                                    Logout
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <nav className="mobile-nav header-nav">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    </div>
                </div>
            </div>
        </nav>
    </div>
)

export default Header