const Video = () => {
    return (
        <div>
            <HeroVideo loop autoPlay>
                <source src={video} type='video/mp4' />
                Your browser does not support the video tag.
            </HeroVideo>
        </div>
    )
}

export default Video
