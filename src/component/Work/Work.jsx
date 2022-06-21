import React from "react";
import "./Work.css";
const Work = () => {
  return (
    <div className="content-creator-we-need">
      <div>
        <h1 className="content-creator-caption">Content Creator We Need</h1>
      </div>
      <div className="Work">
        <div className="first-content">
          <div className="responsive">
            <div className="content-writer">
              <h1>
                <span>01</span>
              </h1>
            </div>
            <div className="content-caption">
              <h2>Content Writer</h2>
            </div>
          </div>
          <div className="about-content-writer">
            <p>
              Help tech companies showcase their products by providing
              informative and engaging technical articles that appeal to
              developers. Write on a range of different technical topics and
              creating the best possible written or visual content.
            </p>
          </div>
        </div>
        <div className="center-row"></div>
        <div className="last-content">
          <div className="about-content-writer-more-text">
            <p>
              Create, develop and execute creative technical content strategies
              that provide the tools for your company to stay relevant among
              developers. Launch and manage projects that can be serviced by a
              talented pool of vetted writers or onboard your own preferred
              in-house writers.
            </p>
          </div>
          <div className="content-second-section">
            <h1>
              <span>02</span>
            </h1>
          </div>
          <div className="content-second-section- content-caption">
            <h2 className="editor">Content Editor</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
