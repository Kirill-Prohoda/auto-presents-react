import HomeParts from '../../component/home/parts/parts.js'
import HomeHead from '../../component/home/head/head.js'
import HomePreview from '../../component/home/preview/preview.js'
import HomeAbout from '../../component/home/about/adout.js'

const HomeContainer = () => {
    return (
        <>
            
            <HomeHead />
            <HomeParts />
            <HomePreview />
            <HomeAbout />
           
        </>
    )
}

export default HomeContainer;