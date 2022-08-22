import styled from "styled-components"

import video from "../../assets/videos/video_1.mp4"

import { colors } from "../../GlobalStyles.styles.js"

const VideoContainer = styled.div``
const MyVideo = styled.video`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-attachment: fixed;
    object-fit: cover;
`
const VideoOverlay = styled.div`
    /* background-image: linear-gradient(to top, #000, ${colors.color1}); */

    background-color: #000000;
    opacity: 0.5;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    box-sizing: border-box;
    /* padding: 15% 32px; */
    line-height: 1.5;
    text-align: center;
`

const Video = () => {
    return (
        <VideoContainer>
            <MyVideo loop muted autoPlay playbackspeed={0.5}>
                <source src={video} type='video/mp4' />
            </MyVideo>
            <VideoOverlay />
        </VideoContainer>
    )
}

export default Video
