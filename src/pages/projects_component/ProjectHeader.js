import React, { useEffect, useState } from 'react';
import './ProjectHeader.css';
import AmenitiesSection from './AmenitiesSection';
import LocalitySection from './LocalitySection';
import BankSection from './BankSection';
import DeveloperSection from './DeveloperSection';
import NearByProject from './NearByProject';
import EnquiryForm from '../../component/EnquiryForm';


const ProjectHeader = ({ project }) => {
    const bhkTypes = [
        {
            key: `${project.Beds_bhk?.toString().trim().slice(0, 1)} BHK ${project.Additional_Room ? ' + (' +project.Additional_Room.trim()+')' : ''}`,
            beds: project.Beds_bhk,
            superArea: project.Super_Area_bhk,
            builtupArea: project.Built_Up_Area_bhk,
            carpetArea: project.Carpet_Area_bhk,
            img: project.Floor_Plan_bhk,
        },
        {
            key: `${project.Beds_bhk1?.toString().trim().slice(0, 1)} BHK${project.Additional_Room1 ? ' + (' + project.Additional_Room1.trim()+')' : ''}`,
            beds: project.Beds_bhk1,
            superArea: project.Super_Area_bhk1,
            builtupArea: project.Built_Up_Area_bhk1,
            carpetArea: project.Carpet_Area_bhk1,
            img: project.Floor_Plan_bhk1,
        },
        {
            key: `${project.Beds_bhk2?.toString().trim().slice(0, 1)} BHK${project.Additional_Room2 ? ' + (' + project.Additional_Room2.trim()+')' : ''}`,
            beds: project.Beds_bhk2,
            superArea: project.Super_Area_bhk2,
            builtupArea: project.Built_Up_Area_bhk2,
            carpetArea: project.Carpet_Area_bhk2,
            img: project.Floor_Plan_bhk2,
        },
        {
            key: `${project.Beds_bhk3?.toString().trim().slice(0, 1)} BHK${project.Additional_Room3 ? ' + (' + project.Additional_Room3.trim()+')' : ''}`,
            beds: project.Beds_bhk3,
            superArea: project.Super_Area_bhk3,
            builtupArea: project.Built_Up_Area_bhk3,
            carpetArea: project.Carpet_Area_bhk3,
            img: project.Floor_Plan_bhk3,
        },
        {
            key: `${project.Beds_bhk4?.toString().trim().slice(0, 1)} BHK${project.Additional_Room4 ? ' + (' + project.Additional_Room4.trim()+')' : ''}`,
            beds: project.Beds_bhk4,
            superArea: project.Super_Area_bhk4,
            builtupArea: project.Built_Up_Area_bhk4,
            carpetArea: project.Carpet_Area_bhk4,
            img: project.Floor_Plan_bhk4,
        },
        {
            key: `${project.Beds_bhk5?.toString().trim().slice(0, 1)} BHK${project.Additional_Room5 ? ' + (' + project.Additional_Room5.trim()+')' : ''}`,
            beds: project.Beds_bhk5,
            superArea: project.Super_Area_bhk5,
            builtupArea: project.Built_Up_Area_bhk5,
            carpetArea: project.Carpet_Area_bhk5,
            img: project.Floor_Plan_bhk5,
        },
        {
            key: "Penthouse",
            beds: project.Penthouse,
            superArea: project.Super_Area_Penthouse,
            builtupArea: project.Built_Up_Area_Penthouse,
            carpetArea: project.Carpet_Area_Penthouse,
            img: project.Floor_Plan_Penthouse,
        }
    ];

    const configurationsData = Object.fromEntries(
        bhkTypes
            .filter(item =>
                item.key === "Penthouse"
                    ? !!item.beds // only truthy value for penthouse
                    : item.beds !== undefined && item.beds !== null && item.beds !== '' // exclude empty bhk values
            )
            .map(item => [
                item.key,
                {
                    superArea: item.superArea,
                    builtupArea: item.builtupArea,
                    carpetArea: item.carpetArea,
                    img: item.img || ''
                }
            ])
    );

    const [isSticky, setIsSticky] = useState(false);
    const [activeTab, setActiveTab] = useState('Unit Plan');
    const [activenav, setActivenav] = useState('overview');
    const [selectedBHK, setSelectedBHK] = useState(Object.keys(configurationsData)[0] || "");

    const data = configurationsData[selectedBHK];

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 600);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sectionIds = [
            'overview',
            'configurations',
            'locality',
            'amenities',
            'bank',
            'developer',
            'projects'
        ];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActivenav(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sectionIds.forEach(id => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="project_content_box">
            <div className={`project_header ${isSticky ? 'sticky' : ''}`}>
                <div className="header-left">
                    <img
                        src={project.Developer_Logo ? `${project.Developer_Logo}` : '../img/RealtyKornerLogo.png'}
                        alt="Project Logo"
                        className={`elan-logo ${isSticky ? 'visible' : ''}`}
                    />
                </div>
                <nav className="nav">
                    {['overview', 'configurations', 'locality', 'amenities', 'bank', 'developer', 'projects'].map((nav) => (
                        <a
                            key={nav}
                            href={`#${nav}`}
                            className={activenav === nav ? 'active' : ''}
                        >
                            {nav.charAt(0).toUpperCase() + nav.slice(1)}
                        </a>
                    ))}
                </nav>
                <div className="header-right">
                    <img
                        src={project.Logoimg ? `${project.Logoimg}` : '../img/RealtyKornerLogo.png'}
                        alt="Realty Korner Logo"
                        className={`trump-logo ${isSticky ? 'visible' : ''}`}
                    />
                </div>
            </div>

            <div className="nav_container">
                <div className="over-all-left">
                    <div id="overview" className="over-view part-01">
                        <div className="view-left-video">
                            <video className="over-view-video" autoPlay muted loop playsInline controls>
                                <source src="../img/video3.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="view-right-text">
                            <div className="enquire-company-logo">
                                <div className="company-name-add">
                                    <h3>
                                        {project?.Project_Name
                                            ? project.Project_Name.split(" ").map((word, index) => (
                                                <span key={index} style={{ marginRight: "4px" }}>
                                                    <span className="large-letter">{word.charAt(0)}</span>
                                                    {word.slice(1)}
                                                </span>
                                            ))
                                            : "N/A"}
                                    </h3>
                                    <p>{`${project.Localities}, ${project.Location}, ${project.City}`}</p>
                                </div>
                            </div>
                            <p>
                                {project.Description
                                    ? (project.Description.length > 1500
                                        ? project.Description.substring(0, 1500) + '...'
                                        : project.Description)
                                    : 'No description available'}
                            </p>
                        </div>
                    </div>

                    <div id="configurations" className="configurations-container">
                        <h2>Configurations</h2>
                        <div className="tab-buttons">
                            <button className={activeTab === 'Unit Plan' ? 'active' : ''} onClick={() => setActiveTab('Unit Plan')}>Unit Plan</button>
                            <button className={activeTab === 'Floor Plan' ? 'active' : ''} onClick={() => setActiveTab('Floor Plan')}>Master Plan</button>
                        </div>

                        {activeTab === 'Unit Plan' && data ? (
                            <>
                                <div className="bhk-buttons">
                                    {Object.keys(configurationsData).map((bhk) => (
                                        <button key={bhk} className={selectedBHK === bhk ? 'active' : ''} onClick={() => setSelectedBHK(bhk)}>
                                            {bhk}
                                        </button>
                                    ))}
                                </div>

                                <div className="unit-details" style={{ display: "grid", gridTemplateColumns: "35% 60%", justifyContent: "space-between", gap: "5%" }}>
                                    <div style={{ margin: "auto" }}>
                                        <p><strong>Super Area:</strong> {data.superArea} Sq.Ft</p>
                                        <p><strong>Builtup Area:</strong> {data.builtupArea} Sq.Ft</p>
                                        <p><strong>Carpet Area:</strong> {data.carpetArea} Sq.Ft</p>
                                    </div>
                                    <div>
                                        {data.img && <img src={data.img} alt="Floor Plan" style={{ width: '100%' }} />}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="floor-plan-image">
                                <img src={project.Master_Plan ? `${project.Master_Plan}` : '/img/placeholder-logo.png'} alt="Floor Plan" />
                            </div>
                        )}
                    </div>

                    <div id="locality" className='locality-part'>
                        <h2>Locality</h2>
                        <LocalitySection project={project} />
                    </div>

                    <div id="amenities" className='amenities_part'>
                        <h2>Amenities</h2>
                        <AmenitiesSection style={{ width: "100%" }} project={project} />
                    </div>

                    <div id="bank" className='bank-part'>
                        <h2>Approved By Bank</h2>
                        <BankSection />
                    </div>

                    <div id="developer" className='bank-part'>
                        <h2>Developer</h2>
                        <DeveloperSection project={project} />
                    </div>

                    <div id="projects" className='bank-part'>
                        <h2>Nearby Projects</h2>
                        <NearByProject project={project} />

                    </div>
                </div>

                {/* Cntact Form */}
                <div className='right-all-part'>
                    <div className="enquire-contact-form-container">
                        <div className="contact-companies">
                            <img src={project.Developer_Logo ? `${project.Developer_Logo}` : '../img/RealtyKornerLogo.png'}
                                alt="Company Logo" className="elan-logo" style={{ height: "50px", width: "50px", borderRadius: "50%" }} />
                            <div className='contact-company-name-add'>
                                <h5>{project?.Project_Name
                                    ? project.Project_Name.split(" ").map((word, index) => (
                                        <span key={index} style={{ marginRight: "4px", fontSize: '15px' }}>
                                            <span style={{ fontSize: '20px' }} className="large-letter">{word.charAt(0)}</span>
                                            {word.slice(1)}
                                        </span>
                                    ))
                                    : "N/A"}</h5>
                                <p style={{ color: '#2763ff' }}>{`${project.Localities}, ${project.Location}, ${project.City}`}</p>
                            </div>
                        </div>

                        <EnquiryForm project={project} />
                    </div>
                    <div className='right-part-bottom'>
                        <img src="../img/RealtyKornerLogo.png" alt="Company Logo" className="ads_picture" style={{ height: "100%", width: "100%" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectHeader;
