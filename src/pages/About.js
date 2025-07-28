import React from 'react';
import './About.css'; // We will create this CSS file next
import Footer from '../component/Footer';

// --- Team Member Data ---
// In a real app, you might fetch this data from an API
const teamMembers = [
    {
        id: 1,
        name: 'Jane Doe',
        role: 'Chief Executive Officer',
        imageUrl: 'https://via.placeholder.com/150/FFC0CB/000000?Text=JD'
    },
    {
        id: 2,
        name: 'John Smith',
        role: 'Chief Technology Officer',
        imageUrl: 'https://via.placeholder.com/150/ADD8E6/000000?Text=JS'
    },
    {
        id: 3,
        name: 'Alex Johnson',
        role: 'Lead Designer',
        imageUrl: 'https://via.placeholder.com/150/90EE90/000000?Text=AJ'
    }
];

// --- The Main About Component ---
function About() {
    return (
        <>
            <div className="about-container">
                <header className="about-header">
                    <h1>About Our Company</h1>
                    <p>Your trusted partner in innovation and excellence.</p>
                </header>

                <section className="about-mission">
                    <h2>Our Mission 🚀</h2>
                    <p>
                        Our mission is to leverage cutting-edge technology to solve real-world problems,
                        providing our clients with powerful, efficient, and scalable solutions. We are
                        committed to driving progress and delivering outstanding results.
                    </p>
                </section>

                <section className="about-team">
                    <h2>Meet the Team</h2>
                    <div className="team-members">
                        {/* Map over the teamMembers array to display each member */}
                        {teamMembers.map(member => (
                            <div key={member.id} className="team-member">
                                <img src={member.imageUrl} alt={member.name} className="team-member-img" />
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    );
}

export default About;