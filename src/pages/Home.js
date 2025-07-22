import React from 'react';
// import SearchPannel from "../search/SearchPannel";
import FeaturedProjectsCarousel from "../PropertyCard/FeaturedProjectsCarousel";
import CallToAction from "../component/CallToAction";
// import FilterForm from "../filterForm/FilterForm";
// import PropertyCard from "../PropertyCard/PropertyCard";
import PropertyStrickerHeadline from '../PropertyCard/PropertyStrickerHeadline';
import PropertySticker from "../PropertyCard/ProoertySticker";
import SecondCallAction from '../component/SecondCallAction';
import LetMeHelp from '../component/LetMeHelp';
import Testimonial from '../component/Testimonial';
import ContactFormSection from '../component/ContactFormSection';
import OurPartner from '../component/OurPartner';
import NewLaunchSlider from '../component/NewLaunchSlider';
import RecommendedProperties from '../component/RecommendedProperties';
import PropertyTypeSlider from '../component/PropertyTypeSlider';
import Footer from '../component/Footer';
import HeroPage from '../search/HeroPage';

const Home = () => {
    return (
        <>
            {/* <SearchPannel /> */}
            <HeroPage/>
            <FeaturedProjectsCarousel />
            <RecommendedProperties/>
            <PropertyTypeSlider/>
            <NewLaunchSlider/>
            <CallToAction />
            <PropertyStrickerHeadline/>
            <PropertySticker />
            <SecondCallAction/>
            <LetMeHelp/>
            <Testimonial/>
            <ContactFormSection/>
            <OurPartner/>
            <Footer/>
        </>
    );
};

export default Home;
