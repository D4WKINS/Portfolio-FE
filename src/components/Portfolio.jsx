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
            <div name='about'>
                <SectionTitle title='Greetings!' id='about' />
            </div>
            <About />
            <div name='projects'>
                <SectionTitle title='Projects' />
            </div>
            <Projects />
            <div name='contact'>
                <SectionTitle title='Hit Me Up' />
            </div>
            <Contact />
            <Footer />
        </div>
    )
}

export default Portfolio
