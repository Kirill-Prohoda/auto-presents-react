import Footer from '../component/footer'
import Header from '../component/header'



import './default.scss'

const DefaultLayout = ({ children }) => {



    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                {children}
            </main>
            <footer>
               <Footer />
            </footer>
        </>
    )
}

export default DefaultLayout;