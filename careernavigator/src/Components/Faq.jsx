import React, { useState } from 'react';

const Faq = () => {
  const [openPanel, setOpenPanel] = useState(null);

  // Toggle the open panel based on the index
  const togglePanel = (index) => {
    if (openPanel === index) {
      setOpenPanel(null); // Close the panel if clicked again
    } else {
      setOpenPanel(index); // Open the clicked panel
    }
  };

  // Inline styles for the FAQ page
  const styles = {
    jumbotron: {
      paddingTop: '130px',
      paddingBottom: '30px',
      marginBottom: '30px',
      
      backgroundColor: '#010e37',
      color: '#fff',
      textAlign: 'center',
    },
    panelGroup: {
      marginBottom: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      borderRadius: '8px',
    },
    panelHeading: {
      padding: '20px 15px',
      backgroundColor: '#f0f0f0',
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'background-color 0.3s ease',
    },
    panelTitle: {
      margin: '0',
      fontSize: '1.25em',
      fontWeight: 'bold',
    },
    arrowIcon: {
      transition: 'transform 0.3s ease',
      transform: openPanel === 1 ? 'rotate(180deg)' : 'rotate(0deg)', // Rotate arrow based on panel state
    },
    panelBody: {
      
      backgroundColor: '#f9f9f9',
      borderBottomLeftRadius: '8px',
      borderBottomRightRadius: '8px',
      height: openPanel === 1 ? 'auto' : '0', // Height set to auto when open, 0 when closed
      overflow: 'hidden',
      transition: 'height 0.3s ease-out', // Smooth transition for opening and closing
    },
    container: {
      margin: '0 auto',
      maxWidth: '960px',
      padding: '20px',
    },
    link: {
      textDecoration: 'none',
      color: '#00bcd4',
      fontWeight: 'bold',
    },
  };

  return (
    <div>
      <div style={styles.jumbotron} className="jumbotron jumbotron-fluid">
        <div style={styles.container}>
          <h1 className="display-4">Frequently Asked Questions</h1>
          <p className="lead">Get the answers to your most common questions.</p>
          <p>
            Learn more about Data Structures on{' '}
            <a href="https://pradip-n-vaghela.web.app/" target="_blank" rel="noopener noreferrer" style={styles.link}>
              Pradip N. Vaghela's Blog
            </a>
          </p>
        </div>
      </div>

      <div style={styles.container}>
        <div className="row">
          <div className="col-md-12">
            <div style={styles.panelGroup} className="panel-group" role="tablist" aria-multiselectable="true">
              {/* FAQ 1 */}
              <div className="panel panel-default">
                <div
                  style={styles.panelHeading}
                  className="panel-heading"
                  role="tab"
                  id="headingOne"
                  onClick={() => togglePanel(1)}
                >
                  <h4 style={styles.panelTitle} className="panel-title">
                    What is Data Structure?
                  </h4>
                  <span style={styles.arrowIcon}>▼</span> {/* Arrow Icon */}
                </div>
                <div
                  style={{
                    ...styles.panelBody,
                    height: openPanel === 1 ? 'auto' : '0', // Toggle height for open/close
                  }}
                  className="panel-body"
                >
                  A data structure is a way to store and organize data to perform operations efficiently, such as searching, insertion, and deletion.
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="panel panel-default">
                <div
                  style={styles.panelHeading}
                  className="panel-heading"
                  role="tab"
                  id="headingTwo"
                  onClick={() => togglePanel(2)}
                >
                  <h4 style={styles.panelTitle} className="panel-title">
                    Benefits of Learning Data Structures
                  </h4>
                  <span style={styles.arrowIcon}>▼</span> {/* Arrow Icon */}
                </div>
                <div
                  style={{
                    ...styles.panelBody,
                    height: openPanel === 2 ? 'auto' : '0', // Toggle height for open/close
                  }}
                  className="panel-body"
                >
                  Learning data structures enables efficient problem-solving by optimizing resource usage (memory and time) and improving performance for algorithms.
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="panel panel-default">
                <div
                  style={styles.panelHeading}
                  className="panel-heading"
                  role="tab"
                  id="headingThree"
                  onClick={() => togglePanel(3)}
                >
                  <h4 style={styles.panelTitle} className="panel-title">
                    What is an Array?
                  </h4>
                  <span style={styles.arrowIcon}>▼</span> {/* Arrow Icon */}
                </div>
                <div
                  style={{
                    ...styles.panelBody,
                    height: openPanel === 3 ? 'auto' : '0', // Toggle height for open/close
                  }}
                  className="panel-body"
                >
                  An array is a collection of elements stored at contiguous memory locations. Elements can be accessed by their index.
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="panel panel-default">
                <div
                  style={styles.panelHeading}
                  className="panel-heading"
                  role="tab"
                  id="headingFour"
                  onClick={() => togglePanel(4)}
                >
                  <h4 style={styles.panelTitle} className="panel-title">
                    Difference Between Stack and Queue
                  </h4>
                  <span style={styles.arrowIcon}>▼</span> {/* Arrow Icon */}
                </div>
                <div
                  style={{
                    ...styles.panelBody,
                    height: openPanel === 4 ? 'auto' : '0', // Toggle height for open/close
                  }}
                  className="panel-body"
                >
                  A stack follows Last In First Out (LIFO) principle, while a queue follows First In First Out (FIFO) principle for element access.
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
