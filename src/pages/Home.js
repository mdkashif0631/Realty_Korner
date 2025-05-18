import React from 'react';
import SearchPannel from "../search/SearchPannel";
import FeaturedProjectsCarousel from "../PropertyCard/FeaturedProjectsCarousel";
import CallToAction from "../component/CallToAction";
// import FilterForm from "../filterForm/FilterForm";
// import PropertyCard from "../PropertyCard/PropertyCard";
import PropertySticker from "../PropertyCard/ProoertySticker";
import PropertyStrickerHeadline from '../PropertyCard/PropertyStrickerHeadline';
import SecondCallAction from '../component/SecondCallAction';
import LetMeHelp from '../component/LetMeHelp';
import Testimonial from '../component/Testimonial';
import ContactFormSection from '../component/ContactFormSection';
import OurPartner from '../component/OurPartner';
// import Footer from '../component/Footer';
const Home = () => {
    return (
        <>
            <SearchPannel />
            <FeaturedProjectsCarousel />
            <CallToAction />
            <PropertyStrickerHeadline/>
            <PropertySticker />
            <SecondCallAction/>
            <LetMeHelp/>
            <Testimonial/>
            <ContactFormSection/>
            <OurPartner/>
            {/* <Footer/> */}
        </>
    );
};

export default Home;
