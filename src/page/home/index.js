import HomeHeader from '../../component/home/homeHeader'
import HomeFooter from '../../component/home/homeFooter'
import SectionDecor from '../../component/home/sectionDecor'
import SectionFurniture from '../../component/home/sectionFurniture'
import SectionPreview from '../../component/home/sectionPreview'
import SectionVideos from '../../component/home/sectionVideos'

const HomeContainer = () => {
    return (
        <>
            <HomeHeader />
            <HomeFooter />
            <SectionDecor />
            <SectionFurniture />
            <SectionPreview />
            <SectionVideos />
        </>
    )
}

export default HomeContainer;