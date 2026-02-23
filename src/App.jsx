import './App.css'
import SectionWithoutPhoto from './components/pageComponents/PageLayout/SectionWithoutPhoto/SectionWithoutPhoto'
import PageHeader from './components/pageComponents/PageHeader/PageHeader'
import HeroSection from './components/pageComponents/PageLayout/HeroSection/HeroSection'
import PageLayout from './components/pageComponents/PageLayout/PageLayout'
import PartnersSection from './components/pageComponents/PageLayout/PartnersSection/PartnersSection'
import SectionWithPhoto from './components/pageComponents/PageLayout/SectionWithPhoto/SectionWithPhoto'

import data from './data/data';
import PriceSection from './components/pageComponents/PageLayout/PriceSection/PriceSection'
import FAQSection from './components/pageComponents/PageLayout/FAQSection/FAQSection'

function App() {

  return (
    <>
    <PageHeader/>
    <PageLayout>
      <HeroSection 
        headerProps={data.heroSectionItems.header}
      />
      <PartnersSection 
        title={data.partnersSectionItems.title}
      />
      <SectionWithoutPhoto
        headerProps={data.sectionWithoutPhotoItems.header}
        qualityList={data.sectionWithoutPhotoItems.qualityList}
      />
      <SectionWithPhoto 
        headerProps={data.designersSectionItems.header}
        qualityList={data.designersSectionItems.qualityList}
      />
      <SectionWithPhoto 
        headerProps={data.licensingSectionItems.header}
        qualityList={data.licensingSectionItems.qualityList}
      />
      <PriceSection 
        headerProps={data.priceSectionItems.header} 
        billTypes={data.priceSectionItems.billTypes}
        planList={data.priceSectionItems.planList}
      />
      <FAQSection
        headerProps={data.faqSectionItems.header}
        listData={data.faqSectionItems.questionsList}
      />
    </PageLayout>
    </>
  )
}

export default App
