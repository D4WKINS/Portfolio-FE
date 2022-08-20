import Hero from "./hero/Hero.jsx"

import SectionTitle from "./styled/SectionTitle.styled.jsx"

import About from "./about/About.jsx"

import Projects from "./projects/Projects.jsx"

import Contact from "./contact/Contact.jsx"

import Footer from "./footer/Footer.jsx"

const Portfolio = () => {
    return (
        <>
            <div id='outer-container'>
                <Hero />
                <SectionTitle name='Greetings!' id='about' />
                <About />
                <SectionTitle name='Projects' />
                <Projects />
                <SectionTitle name='Hit Me Up' />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default Portfolio
