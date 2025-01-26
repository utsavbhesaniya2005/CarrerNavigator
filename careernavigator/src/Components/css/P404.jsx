import React from 'react';

const P404 = () => {
  // Inline styles
  const styles = {
    background: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(#0C0E10, #446182)',
    },
    ground: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: '25vh',
      background: '#0C0E10',
    },
    container: {
      position: 'relative',
      margin: '0 auto',
      width: '85%',
      height: '100vh',
      paddingBottom: '25vh',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    leftSection: {
      width: '40%',
      position: 'relative',
    },
    leftSectionInnerContent: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    leftSectionHeading: {
      textAlign: 'center',
      fontSize: '9em',
      lineHeight: '1.3em',
      margin: '2rem 0 0.5rem 0',
      padding: 0,
      textShadow: '0 0 1rem #fefefe',
    },
    leftSectionSubheading: {
      textAlign: 'center',
      maxWidth: '480px',
      fontSize: '1.5em',
      lineHeight: '1.15em',
      padding: '0 1rem',
      margin: '0 auto',
    },
    rightSection: {
      width: '50%',
      position: 'relative',
    },
    svgimg: {
      position: 'absolute',
      bottom: 0,
      paddingTop: '10vh',
      paddingLeft: '1vh',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    benchLegs: {
      fill: '#0C0E10',
    },
    topBench: {
      stroke: '#0C0E10',
      strokeWidth: '1px',
      fill: '#5B3E2B',
    },
    bottomBench: {
      fill: '#5B3E2B',
    },
    lampDetails: {
      fill: '#202425',
    },
    lampAccent: {
      fill: '#A7A9AA',
    },
    lampBottom: {
      fill: 'linear-gradient(#202425, #0C0E10)',
    },
    lampLight: {
      fill: '#EFEFEF',
    },
  };

  // Media query handling in inline styles
  const isMobile = window.innerWidth <= 770;

  if (isMobile) {
    styles.container = {
      ...styles.container,
      flexDirection: 'column',
      paddingBottom: 0,
    };

    styles.leftSection = {
      width: '100%',
      height: '40%',
      position: 'absolute',
      top: 0,
    };

    styles.leftSectionHeading = {
      ...styles.leftSectionHeading,
      fontSize: '7em',
      lineHeight: '1.15',
      margin: 0,
    };

    styles.leftSectionSubheading = {
      ...styles.leftSectionSubheading,
      fontSize: '1.3em',
      lineHeight: '1.15',
      maxWidth: '100%',
    };

    styles.rightSection = {
      width: '100%',
      height: '60%',
      position: 'absolute',
      bottom: 0,
    };

    styles.svgimg = {
      ...styles.svgimg,
      padding: 0,
    };
  }

  return (
    <div style={styles.background}>
      <div style={styles.ground}></div>
      <div style={styles.container}>
        <div style={styles.leftSection}>
          <div style={styles.leftSectionInnerContent}>
            <h1 style={styles.leftSectionHeading}>404</h1>
            <p style={styles.leftSectionSubheading}>
              Looks like the page you were looking for is no longer here.
            </p>
          </div>
        </div>
        <div style={styles.rightSection}>
          <svg
            style={styles.svgimg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="51.5 -15.288 385 505.565"
          >
            <g style={styles.benchLegs}>
              <path d="M202.778,391.666h11.111v98.611h-11.111V391.666z M370.833,390.277h11.111v100h-11.111V390.277z M183.333,456.944h11.111 v33.333h-11.111V456.944z M393.056,456.944h11.111v33.333h-11.111V456.944z" />
            </g>
            <g style={styles.topBench}>
              <path d="M396.527,397.917c0,1.534-1.243,2.777-2.777,2.777H190.972c-1.534,0-2.778-1.243-2.778-2.777v-8.333 c0-1.535,1.244-2.778,2.778-2.778H393.75c1.534,0,2.777,1.243,2.777,2.778V397.917z M400.694,414.583 c0,1.534-1.243,2.778-2.777,2.778H188.194c-1.534,0-2.778-1.244-2.778-2.778v-8.333c0-1.534,1.244-2.777,2.778-2.777h209.723 c1.534,0,2.777,1.243,2.777,2.777V414.583z M403.473,431.25c0,1.534-1.244,2.777-2.778,2.777H184.028 c-1.534,0-2.778-1.243-2.778-2.777v-8.333c0-1.534,1.244-2.778,2.778-2.778h216.667c1.534,0,2.778,1.244,2.778,2.778V431.25z" />
            </g>
            <g style={styles.bottomBench}>
              <path d="M417.361,459.027c0,0.769-1.244,1.39-2.778,1.39H170.139c-1.533,0-2.777-0.621-2.777-1.39v-4.86 c0-0.769,1.244-0.694,2.777-0.694h244.444c1.534,0,2.778-0.074,2.778,0.694V459.027z" />
              <path d="M185.417,443.75H400c0,0,18.143,9.721,17.361,10.417l-250-0.696C167.303,451.65,185.417,443.75,185.417,443.75z" />
            </g>
            <g id="lamp">
              <path style={styles.lampDetails} d="M125.694,421.997c0,1.257-0.73,3.697-1.633,3.697H113.44c-0.903,0-1.633-2.44-1.633-3.697V84.917 c0-1.257,0.73-2.278,1.633-2.278h10.621c0.903,0,1.633,1.02,1.633,2.278V421.997z" />
              <path style={styles.lampAccent} d="M128.472,93.75c0,1.534-1.244,2.778-2.778,2.778h-13.889c-1.534,0-2.778-1.244-2.778-2.778V79.861 c0-1.534,1.244-2.778,2.778-2.778h13.889c1.534,0,2.778,1.244,2.778,2.778V93.75z" />
              <circle style={styles.lampLight} cx="119.676" cy="44.22" r="40.51" />
              <path style={styles.lampDetails} d="M149.306,71.528c0,3.242-13.37,13.889-29.861,13.889S89.583,75.232,89.583,71.528c0-4.166,13.369-13.889,29.861-13.889 S149.306,67.362,149.306,71.528z" />
              <radialGradient id="SVGID_1_" cx="119.676" cy="44.22" r="65" gradientUnits="userSpaceOnUse">
                <stop offset="0%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#EDEDED', stopOpacity: 0.5 }}>
                  <animate attributeName="stop-opacity" values="0.0; 0.5; 0.0" dur="5000ms" repeatCount="indefinite"></animate>
                </stop>
                <stop offset="100%" style={{ stopColor: '#EDEDED', stopOpacity: 0 }} />
              </radialGradient>
              <circle style={{ fill: 'url(#SVGID_1_)' }} className="lamp-light__glow" cx="119.676" cy="44.22" r="65" />
              <path style={styles.lampBottom} d="M135.417,487.781c0,1.378-1.244,2.496-2.778,2.496H106.25c-1.534,0-2.778-1.118-2.778-2.496v-74.869 c0-1.378,1.244-2.495,2.778-2.495h26.389c1.534,0,2.778,1.117,2.778,2.495V487.781z" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default P404;
