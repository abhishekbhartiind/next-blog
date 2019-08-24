import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
//import globalStyle from '../globalStyle.js';
// import '../static/css/main.scss'

const Layout = (props) => (
    <>
        <Head>
            <title>Next Apps</title>
        </Head>
        <body>
            <Header/>
                {props.children}
            <Footer/>
        </body>
    </>
)

export default Layout