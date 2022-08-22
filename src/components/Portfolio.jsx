import Hero from "./hero/Hero.jsx"

import SectionTitle from "./styled/SectionTitle.jsx"

import Navbar from "./nav/Navbar.jsx"

import About from "./about/About.jsx"

import Projects from "./projects/Projects.jsx"

import Contact from "./contact/Contact.jsx"

import Footer from "./footer/Footer.jsx"

const Portfolio = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <SectionTitle className='wtf' title='Wazuuup!' id='about' name='about' />
            <About />
            <SectionTitle title='Projects' />
            <Projects />
            <SectionTitle title='Hit Me Up' />
            <Contact />
            <Footer />
        </div>
    )
}

export default Portfolio
