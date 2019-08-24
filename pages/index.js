const Home = () => (
    <>
        <section className="banners">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 col-xs-12">
                        <div className="banner-wrapper">
                            <a href="blog_post.html" title="Leveling up in CSS">
                                <div className="banner-wrapper-content">
                                    <h1 className="h2">Leveling up in CSS</h1>
                                    <span className="category-tag category-tag-white">CSS</span>
                                    <time dateTime="2016-01-18" className="">January 18, 2016</time>
                                </div>
                            </a>
                            <img className="img-fluid" src={require('../static/img/photo1.jpg')} alt="..." data-rjs="2"/>
                        </div>
                    </div>

                    <div className="col-md-6 col-xs-12">
                        <div className="banner-wrapper">
                            <a href="blog_post.html" title="Evolving the Google Identity">
                                <div className="banner-wrapper-content">
                                    <h1 className="h2">Evolving the Google Identity</h1>
                                    <span className="category-tag category-tag-white">Graphic</span>
                                    <time dateTime="2016-01-18" className="">January 18, 2016</time>
                                </div>
                            </a>
                            <img className="img-fluid" src={require('../static/img/photo2.jpg')} alt="..." data-rjs="2"/>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-xs-12">
                        <div className="banner-wrapper">
                            <a href="blog_post.html" title="Angular 2 versus React: There Will Be Blood">
                                <div className="banner-wrapper-content">
                                    <h1 className="h2">Angular 2 versus React: There Will Be Blood</h1>
                                    <span className="category-tag category-tag-white">JAVASCRIPT</span>
                                    <time dateTime="2016-03-01" className="">March 1, 2016</time>
                                </div>
                            </a>
                            <img className="img-fluid" src={require('../static/img/photo3.jpg')}alt="..." data-rjs="2"/>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-xs-12">
                        <div className="banner-wrapper">
                            <a href="blog_post.html" title="The End of Global CSS">
                                <div className="banner-wrapper-content">
                                    <h1 className="h2">The End of Global CSS</h1>
                                    <span className="category-tag category-tag-white">HTML</span>
                                    <time dateTime="2016-01-18" className="">January 18, 2016</time>
                                </div>
                            </a>
                            <img className="img-fluid" src={require('../static/img/photo4.jpg')} alt="..." data-rjs="2"/>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-xs-12">
                        <div className="banner-wrapper">
                            <a href="blog_post.html" title="Building an CSS Framework">
                                <div className="banner-wrapper-content">
                                    <h1 className="h2">Building an CSS Framework</h1>
                                    <span className="category-tag category-tag-white">CSS</span>
                                    <time dateTime="2016-01-18" className="">January 18, 2016</time>
                                </div>
                            </a>
                            <img className="img-fluid" src={require('../static/img/photo5.jpg')} alt="..." data-rjs="2"/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-xs-12">
                        <section className="articles">
                            <article className="blue-article">
                                <div className="articles-header">
                                    <time dateTime="2016-10-11">12 hours ago</time>
                                    <span className="articles-header-tag-blue">Hot</span>
                                    <span className="articles-header-category"><a href="index.html#" className="blue" title="">CSS</a></span>
                                </div>
                                <div className="articles-content">
                                    <h1><a href="blog_post.html" title="">10 Interview Questions Every JavaScript Developer
                                        Should Know</a></h1>
                                    <p>
                                        I was young, single, and freshly employed to direct National Journal’s Presentation
                                        Center, a searchable library of white-label
                                        PowerPoint presentations on political and policy developments. By day, I led a team of
                                        fellows in creating data
                                        visualizations...
                                    </p>
                                </div>
                                <div className="articles-footer">
                                    <ul className="articles-footer-info">
                                        <li><a href="index.html#" className="light-link" title=""><i className="pe-7s-comment"></i> 7 Response</a>
                                        </li>
                                        <li><a href="index.html#" className="light-link" title=""><i className="pe-7s-like"></i> 1221</a></li>
                                    </ul>
                                    <a title="" className="btn" href="blog_post.html">Read more</a>

                                </div>
                            </article>
                            <article className="red-article">
                                <div className="articles-header">
                                    <time dateTime="2016-10-11">January 16, 2016</time>
                                    <span className="articles-header-category"><a href="index.html#" className="red" title="">Javascript</a></span>
                                </div>
                                <div className="articles-content">
                                    <h1><a href="blog_post.html" title="">State of the Art JavaScript in 2016</a></h1>
                                    <p>
                                        className in JS is not harmless sugar for prototypal OO. className is a virus that infects
                                        everything it touches. It came to us formally
                                        in
                                        JavaScript with ES6, and at the same time, React was taking off. Lots of people started
                                        using classNamees for React components...
                                    </p>
                                </div>
                                <div className="articles-footer">
                                    <ul className="articles-footer-info">
                                        <li><a title="" href="index.html#" className="light-link"><i className="pe-7s-comment"></i> 7 Response</a>
                                        </li>
                                        <li><a title="" href="index.html#" className="light-link"><i className="pe-7s-like"></i> 1221</a></li>
                                    </ul>
                                    <a title="" className="btn" href="blog_post.html">Read more</a>
                                </div>
                            </article>
                            <article className="yellow-article">
                                <div className="articles-header">
                                    <time dateTime="2016-10-11">12 hours ago</time>
                                    <span className="articles-header-category"><a title="" href="index.html#" className="yellow">CSS</a></span>
                                </div>
                                <div className="articles-content">
                                    <h1><a title="" href="index.html#">Want to learn JavaScript in 2016?</a></h1>
                                    <p>
                                        This is a walk-through of the steps I personally took in a single year, to begin
                                        learning JavaScript. My goal was to be able to
                                        get
                                        a job in a position where Javascript would be at the forefront of what I do on a daily
                                        basis...
                                    </p>
                                </div>
                                <div className="articles-footer">
                                    <ul className="articles-footer-info">
                                        <li><a title="" href="index.html#" className="light-link"><i className="pe-7s-comment"></i> 7 Response</a>
                                        </li>
                                        <li><a title="" href="index.html#" className="light-link"><i className="pe-7s-like"></i> 1221</a></li>
                                    </ul>
                                    <a title="" className="btn" href="blog_post.html">Read more</a>
                                </div>
                            </article>
                            <article>
                                <div className="articles-header">
                                    <time dateTime="2016-10-11">12 hours ago</time>
                                    <span className="articles-header-category"><a title="" href="index.html#" className="grey">Other</a></span>
                                </div>
                                <div className="articles-content">
                                    <h1><a title="" href="blog_post.html">Want to learn JavaScript in 2016?</a></h1>
                                    <p>
                                        This is a walk-through of the steps I personally took in a single year, to begin
                                        learning JavaScript. My goal was to be able to
                                        get
                                        a job in a position where Javascript would be at the forefront of what I do on a daily
                                        basis...
                                    </p>
                                </div>
                                <div className="articles-footer">
                                    <ul className="articles-footer-info">
                                        <li><a title="" href="index.html#" className="light-link"><i className="pe-7s-comment"></i> 7 Response</a>
                                        </li>
                                        <li><a title="" href="index.html#" className="light-link"><i className="pe-7s-like"></i> 1221</a></li>
                                    </ul>
                                    <a title="" className="btn" href="blog_post.html">Read more</a>
                                </div>
                            </article>
                            <nav aria-label="...">
                                <a title="" href="index.html" className="btn-small-white pagination-back">Back</a>
                                <ul className="pagination">
                                    <li className="page-item active">
                                        <a className="page-link" href="index.html#">1 <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="index.html#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="index.html#">3</a></li>
                                    <li className="page-item page-item-more"><a className="page-link" href="index.html#">...</a></li>
                                    <li className="page-item"><a className="page-link" href="index.html#">25</a></li>
                                </ul>
                                <a title="" href="blog_post.html" className="btn-small-white pagination-next">Next</a>
                            </nav>
                        </section>
                    </div>
                    <div className="aside-blocks col-lg-4 col-xs-12">
                        <aside className="author">
                            <img src={require('../static/img/profile-picture.png')} alt="" data-rjs="2"/>
                            <h2>Bill Gates</h2>
                            <span className="author-info">Front-End Developer</span>
                            <span className="author-info">Microsoft Company</span>
                            <div className="social">
                                <a href="index.html" title="Twitter"><i className="icon-social_twitter_circle"></i></a>
                                <a href="index.html" title="Github"><i className="icon-social_github_circle"></i></a>
                                <a href="index.html" title="LinkedIn"><i className="icon-social_linkedin_circle"></i></a>
                            </div>
                            <ul className="author-nav">
                                <li><a href="index.html" title=""><i className="pe-7s-bookmarks"></i> Download my CV</a></li>
                                <li><a href="index.html" title=""><i className="pe-7s-paper-plane"></i> Write message</a></li>
                            </ul>
                        </aside>

                        <aside className="categories">
                            <h2 className="aside-title">Categories</h2>
                            <ul>
                                <li className="nav-elipse-blue"><a href="index.html#" title="Blog CSS articles">CSS</a></li>
                                <li className="nav-elipse-red"><a href="index.html#" title="Blog HTML articles">HTML</a></li>
                                <li className="nav-elipse-yellow"><a href="index.html#" title="Blog Javascript articles">Javascript</a></li>
                                <li className="nav-elipse-green"><a href="index.html#" title="Blog raphic articles">Graphic</a></li>
                                <li><a href="index.html#" title="Blog other articles">Other</a></li>
                            </ul>
                        </aside>

                        <aside className="advertisement">
                            <a href="index.html"><img src={require('../static/img/advertisement.jpg')}alt="" data-rjs="2"/></a>
                        </aside>

                        <aside className="last-project">
                            <h2 className="aside-title">Last Project</h2>
                            <div className="last-project-one">
                                <h3 className="h4"><a href="index.html">Microsoft TypeScript</a></h3>
                                <time dateTime="2016-12-31T23:59:59Z">January 18, 2016</time>
                                <p className="font-primary">TypeScript starts from the same syntax and semantics that millions of
                                    JavaScript developers know... </p>
                                <a href="index.html#" title="Watch it" className="btn btn-small">Watch it</a>
                            </div>
                        </aside>

                        <aside className="tags">
                            <h2 className="aside-title">Tags</h2>
                            <div className="tags-content">
                                <span className="tag tag-pill tag-default"><a href="index.html">graphic</a></span>
                                <span className="tag tag-pill tag-default"><a href="index.html">angular2</a></span>
                                <span className="tag tag-pill tag-default"><a href="index.html">graphic</a></span>
                                <span className="tag tag-pill tag-default"><a href="index.html">react</a></span>
                                <span className="tag tag-pill tag-default"><a href="index.html">it</a></span>
                                <span className="tag tag-pill tag-default"><a href="index.html">science</a></span>
                            </div>
                        </aside>

                    </div>
                </div>
            </div>
        </main>
    </>
)

export default Home