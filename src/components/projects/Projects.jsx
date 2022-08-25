import styled from "styled-components"

import { size } from "../../GlobalStyles.styles.js"

import { colors } from "../../GlobalStyles.styles.js"

import linkedinScrnShot from "../../assets/images/linkedin-clone.png"

const ProjectsContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem 1rem;
    max-width: 1440px;
    margin: auto;

    @media only screen and (min-width: ${size.tablet}) {
        padding-top: 4rem;
    }
`
const ProjectsGrid = styled.div`
    display: grid;
    /* border: solid 1px red; */
    width: 100%;
    gap: 2rem;

    grid-template-columns: 1fr;
    grid-auto-rows: minmax(250px, auto);

    @media only screen and (min-width: ${size.tablet}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (min-width: ${size.laptop}) {
        /* grid-template-columns: repeat(3, 1fr); */
    }
`
const ProjectsCell = styled.div`
    display: flex;
    flex-direction: column;
`
const ProjectsTitleContainer = styled.div`
    display: flex;
    justify-content: center;
`
const ProjectsTitle = styled.h2`
    font-family: "Arial";
    font-size: clamp(1rem, 1rem + 10vw, 2rem);
    color: ${colors.color1};
`

const ProjectsSubTitle = styled.h3`
    font-family: "arial";
    color: grey;
`

const ProjectsImg = styled.img`
    width: 100%;
    height: 100%;
    /* box-shadow: 0px 2px 3px #1b1b1b; */
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    cursor: pointer;
`
const ProjectsDescriptionContainer = styled.div`
    padding: 0.5rem 1rem;
    background-color: #fff;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;

    @media only screen and (min-width: ${size.tablet}) {
        padding: 0.5rem 2rem;
    }
`
const ProjectsDescription = styled.p`
    margin-top: 0;
    font-family: arial;
    font-size: 1rem;
    font-weight: 500;
    color: ${colors.color2};
    line-height: 1.5;
`

const Projects = () => {
    return (
        <ProjectsContainer name='projects'>
            <ProjectsGrid>
                {/* https://linkedin-fe-nosql.herokuapp.com/home */}
                <ProjectsCell>
                    <ProjectsTitleContainer>
                        <ProjectsTitle>Linkedin Clone</ProjectsTitle>
                    </ProjectsTitleContainer>
                    <ProjectsImg src={linkedinScrnShot} />
                    <ProjectsDescriptionContainer>
                        <ProjectsSubTitle>Team Project</ProjectsSubTitle>

                        <ProjectsDescription>
                            A team project. I was responsible for making the side bar on main feed and C.R.U.D in the
                            Backend.
                        </ProjectsDescription>
                    </ProjectsDescriptionContainer>
                </ProjectsCell>

                <ProjectsCell>
                    <ProjectsTitleContainer>
                        <ProjectsTitle>Project 2</ProjectsTitle>
                    </ProjectsTitleContainer>
                    <ProjectsImg />

                    <ProjectsDescriptionContainer>
                        <ProjectsDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </ProjectsDescription>
                    </ProjectsDescriptionContainer>
                </ProjectsCell>

                <ProjectsCell>
                    <ProjectsTitleContainer>
                        <ProjectsTitle>Project 3</ProjectsTitle>
                    </ProjectsTitleContainer>
                    <ProjectsImg />
                    <ProjectsDescriptionContainer>
                        <ProjectsDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </ProjectsDescription>
                    </ProjectsDescriptionContainer>
                </ProjectsCell>

                <ProjectsCell>
                    <ProjectsTitleContainer>
                        <ProjectsTitle>Project 4</ProjectsTitle>
                    </ProjectsTitleContainer>
                    <ProjectsImg />
                    <ProjectsDescriptionContainer>
                        <ProjectsDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </ProjectsDescription>
                    </ProjectsDescriptionContainer>
                </ProjectsCell>

                <ProjectsCell>
                    <ProjectsTitleContainer>
                        <ProjectsTitle>Project 5</ProjectsTitle>
                    </ProjectsTitleContainer>
                    <ProjectsImg />
                    <ProjectsDescriptionContainer>
                        <ProjectsDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </ProjectsDescription>
                    </ProjectsDescriptionContainer>
                </ProjectsCell>
                <ProjectsCell>
                    <ProjectsTitleContainer>
                        <ProjectsTitle>Project 6</ProjectsTitle>
                    </ProjectsTitleContainer>
                    <ProjectsImg />
                    <ProjectsDescriptionContainer>
                        <ProjectsDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </ProjectsDescription>
                    </ProjectsDescriptionContainer>
                </ProjectsCell>
            </ProjectsGrid>
        </ProjectsContainer>
    )
}

export default Projects
