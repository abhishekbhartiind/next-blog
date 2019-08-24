
const About = () => (
    <>
        <main>
          <div className="container">
              <div className="row">
                  <div className="col-xs-12">
                      <section className="general-info white-box">
                          <div className="author">
                              <img src={require("../static/img/profile-picture.png")} alt="" data-rjs="2"/>
                              <ul className="author-nav">
                                  <li><a href="#" title=""><i className="pe-7s-bookmarks"></i> Download my CV</a></li>
                                  <li><a href="#" title=""><i className="pe-7s-paper-plane"></i> Write message</a></li>
                              </ul>
                          </div>
                          <div className="general-info-right">
                              <h1>I’m Bill Gates</h1>
                              <div className="social">
                                  <a href="#" title="Twitter">
                                    <i className="icon-social_twitter_circle"/>
                                  </a>
                                  <a href="#" title="Github">
                                    <i className="icon-social_github_circle"/>
                                  </a>
                                  <a href="#" title="LinkedIn">
                                    <i className="icon-social_linkedin_circle"/>
                                  </a>
                              </div>
                              <div className="clear"></div>
                              <span className="general-info-right-author-info">Front-End Developer at Microsoft Company</span>
                              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                                  erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla corper suscipit lobortis nisl ut aliquip ex ea commodo
                                  consequat. Duis autem vel eum iriure dolor in hendr rit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat
                                  nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
                                  feugait nulla facilisi. Lorem ipsum dolor sitamet, consectetuer adipiscing elit.
                              </p>
                              <img src={require("../static/img/signature.jpg")} alt="" title="Author Signature" data-rjs="2"/>
                          </div>
                      </section>
                  </div>
                  <div className="col-xs-12">
                      <section className="detail-info white-box">
                          <div className="detail-info-philosophy">
                              <h2>My philoshopy</h2>
                              <p>
                                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                                  erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla corper suscipit lobortis nisl ut aliquip ex ea commodo
                                  consequat.
                              </p>
                              <p>
                                  Duis autem vel eum iriure dolor in hendr rit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
                                  at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum.
                              </p>
                              <p>
                                  Zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sitamet, consectetuer adipiscing elit. Ut wisi enim ad
                                  minim veniam, quis nostrud exerci tation ulla
                                  corper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                              </p>
                          </div>
                          <div className="detail-info-skills">
                              <h2>Skills</h2>
                              <ol>
                                  <li>
                                      <span>01</span>
                                      <div className="detail-info-skills-right">
                                          <h3>HTML</h3>
                                          <p>
                                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                              magna aliquam erat volutpat.
                                          </p>
                                      </div>
                                  </li>
                                  <li>
                                      <span>02</span>
                                      <div className="detail-info-skills-right">
                                          <h3>CSS</h3>
                                          <p>
                                              Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla corper suscipit lobortis nisl ut aliquip ex ea.
                                          </p>
                                      </div>
                                  </li>
                                  <li>
                                      <span>03</span>
                                      <div className="detail-info-skills-right">
                                          <h3>Javascript</h3>
                                          <p>
                                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                              magna aliquam erat volutpat.
                                          </p>
                                      </div>
                                  </li>
                                  <li>
                                      <span>04</span>
                                      <div className="detail-info-skills-right">
                                          <h3>Angular 2</h3>
                                          <p>
                                              Ut wisi enim ad minim veniam, quis nostrud exerci tation ulla corper suscipit lobortis nisl ut aliquip ex ea.
                                          </p>
                                      </div>
                                  </li>
                              </ol>
                          </div>
                      </section>
                  </div>
                  <div className="col-xs-12">
                      <section className="counters white-box">
                          <div className="counters-one">
                              <span className="counters-one-icon"><i className="pe-7s-cart"></i></span>
                              <h2>2540</h2>
                              <p>Product sales</p>
                          </div>
                          <div className="counters-one">
                              <span className="counters-one-icon"><i className="pe-7s-news-paper"></i></span>
                              <h2>400</h2>
                              <p>Line of Code</p>
                          </div>
                          <div className="counters-one">
                              <span className="counters-one-icon"><i className="pe-7s-photo"></i></span>
                              <h2>8613</h2>
                              <p>Taking photos</p>
                          </div>
                          <div className="counters-one">
                              <span className="counters-one-icon"><i className="pe-7s-tools"></i></span>
                              <h2>1024</h2>
                              <p>Bug fixed</p>
                          </div>
                      </section>
                  </div>
              </div>
          </div>
        </main>
    </>
)

export default About