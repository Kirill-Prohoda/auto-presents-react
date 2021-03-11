import HomeParts from '../../component/home/furni/parts.js'
import HomeHead from '../../component/home/head/head.js'
import SectionDecor from '../../component/home/sectionDecor'
import SectionFurniture from '../../component/home/sectionFurniture'
import SectionPreview from '../../component/home/sectionPreview'
import SectionVideos from '../../component/home/sectionVideos'

const HomeContainer = () => {
    return (
        <>
            
            <HomeHead />
            <HomeParts />
            {/* <SectionDecor />
            <SectionFurniture />
            <SectionPreview />
            <SectionVideos /> */}
        </>
    )
}

export default HomeContainer;