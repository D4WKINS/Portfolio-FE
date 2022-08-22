import styled from "styled-components"

import { size } from "../../GlobalStyles.styles.js"

import { colors } from "../../GlobalStyles.styles.js"

const ProjectsContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 2rem;
    max-width: 1024px;
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
    padding: 0px 1rem;

    grid-template-columns: 1fr;
    grid-auto-rows: minmax(250px, auto);
    @media only screen and (min-width: ${size.tablet}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (min-width: ${size.laptop}) {
        grid-template-columns: repeat(3, 1fr);
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
const ProjectsTitle = styled.h3`
    font-family: "juliusSansOne";
    color: ${colors.color3};
`
const ProjectsImg = styled.img`
    height: 250px;
    /* box-shadow: 0px 2px 3px #1b1b1b; */
    border: solid 1px white;
    border-radius: 5px;
`

const ProjectsDescriptionContainer = styled.div`
    padding: 1rem;
`
const ProjectsDescription = styled.p`
    color: ${colors.color3};
    line-height: 1.5;
`

const Projects = () => {
    return (
        <ProjectsContainer name='projects'>
            <ProjectsGrid>
                <ProjectsCell>
                    <ProjectsTitleContainer>
                        <ProjectsTitle>Project 1</ProjectsTitle>
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
