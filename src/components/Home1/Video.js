import React from "react"

const Video = ({ videoSrcURL, videoTitle }) => {
  const wrapperStyle = {
    position: 'relative',
    paddingBottom: '56.25%', // 16:9 aspect ratio
    height: 0,
    overflow: 'hidden',
    maxWidth: '100%',
  };

  const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0,
    borderRadius: "20px",
  };

  return (
    <div style={wrapperStyle}>
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        style={iframeStyle}
      />
    </div>
  );
};

export default Video;
