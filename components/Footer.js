const Footer = () => (
    <>
        <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-xs-12">
                    <div className="footer-section">
                        <h3 className="footer-section-title">Last Responses</h3>
                        <ul className="footer-section-content">
                            <li className="footer-section-content-response">
                                <img src={require('../static/img/profile-picture2.png')} alt="..." data-rjs="2"/>
                                <div className="footer-section-content-response-wrapper">
                                    <h4><span className="response-author">Jobby Foster</span> in <a href="index.html" className="response-subject light-link"
                                    title="Subject Response">Want
                                        to learn
                                        Javascript in 2016?</a></h4>
                                    <p className="font-primary">Love this guy and his dog, really nice work!</p>
                                </div>
                            </li>

                            <li className="footer-section-content-response">
                                <img src={require('../static/img/profile-picture3.png')}  alt="..." data-rjs="2"/>
                                <div className="footer-section-content-response-wrapper">
                                    <h4><span className="response-author">Sheryl Winarick</span> in <a href="index.html" className="response-subject light-link"
                                    title="Subject Response">Want
                                        to learn
                                        Javascript in 2016?</a></h4>
                                    <p className="font-primary">Love the way you did the background image man.</p>
                                </div>
                            </li>

                            <li className="footer-section-content-response">
                                <img src={require('../static/img/profile-picture4.png')}  alt="..." data-rjs="2"/>
                                <div className="footer-section-content-response-wrapper">
                                    <h4><span className="response-author">Jobby Foster</span> in <a href="index.html" className="response-subject light-link"
                                    title="Subject Response">Want
                                        to learn
                                        Javascript in 2016?</a></h4>
                                    <p className="font-primary">Really nice style. I need to take note for drawing people!</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4 col-xs-12">
                    <div className="footer-section">
                        <h3 className="footer-section-title">Last Tweet</h3>
                        <ul className="footer-section-content">

                            <li className="footer-section-content-twitt">
                                <h4><a href="index.html#" title="microsoft">@microsoft</a></h4>
                                <time>3 days ago</time>
                                <p className="font-primary">She's climbing #50Peaks in 50 states in 50 days. Meet <a href="index.html" title="" className="light-link">https://abhishekbharti.com</a>
                                </p>
                            </li>

                            <li className="footer-section-content-twitt">
                                <h4><a href="index.html" title="microsoft">@microsoft</a></h4>
                                <time >3 days ago</time>
                                <p className="font-primary">She's climbing #50Peaks in 50 states in 50 days. Meet <a href="index.html" title=""className="light-link">https://abhishekbharti.com</a>
                                </p>
                            </li>

                            <li className="footer-section-content-twitt">
                                <h4><a href="index.html" title="microsoft">@microsoft</a></h4>
                                <time >3 days ago</time>
                                <p className="font-primary">She's climbing #50Peaks in 50 states in 50 days. Meet <a href="index.html" title="" className="light-link">https://abhishekbharti.com</a>
                                </p>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="col-md-4 col-xs-12">
                    <div className="footer-section border-bottom">
                        <img src={require('../static/img/logo-grey.png')} alt="" className="footer-section-title-img" data-rjs="2"/>
                        <div className="footer-section-content">
                            <p className="font-primary footer-section-content-about">
                                D -Blog is a responsive, beautiful, <span className="black">creative & unique</span> wordpress
                                theme best suited for blogs & personal
                                portfolio showcases. It’s
                                easy to use &amp; setup, <span className="black">SEO friendly</span> and has top notch standard
                                compliant code.
                            </p>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-section-title footer-section-newsletter">Newsletter</h3>
                        <div className="footer-section-content">
                            <p className="font-primary ">Stay up to do date with my posts, subscribe to newsletter:</p>
                            <form action="index.html#" method="post">
                                <input type="text" className="form-control" placeholder="Type Email"/>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <div className="copyright">
                        <ul>
                            <li><a href="index.html" title="Twitter"><i className="icon-social_twitter_circle"></i></a></li>
                            <li><a href="index.html" title="Github"><i className="icon-social_github_circle"></i></a></li>
                            <li><a href="index.html" title="LinkedIn"><i className="icon-social_linkedin_circle"></i></a></li>
                        </ul>
                        <p className="font-primary">&copy; Created & Designed by <a href="/" title="" className="black">Abhishek Bharti</a> . All
                            Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
)

export default Footer