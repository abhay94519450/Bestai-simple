import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
// click to promt

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loadingState,
    loading,
    resultData,
    setInput,
    input,
  } = React.useContext(Context);
	const handleCardClick = (promptText) => {
			setInput(promptText);
		};
  return  (
    <div className="main">
      <div className="nav">
        <p>AskAi</p>
        <a target="_blank" href="https://accounts.google.com/">
          <img src={assets.user_icon} alt="" />
        </a>
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dear</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card" onClick={() =>
									handleCardClick("What strategies should I follow to become top of my class")
								}
							 >
		      <p> What strategies should I follow to become top of my class</p>
                
                <img src={assets.bulb_icon} alt="" />
              </div>
		    
              <div className="card" onClick={() =>
									handleCardClick("I want to learn coding, but I need help figuring out how to start.")
								}
							 >
                <p> I want to learn coding, but I need help figuring out how to start.</p>
                <img src={assets.code_icon} alt="" />
              </div>
		    
              <div className="card" onClick={() =>
									handleCardClick("I'm having trouble grasping maths concepts")
								}
							 >
                <p>I'm having trouble grasping maths concepts</p>
                <img src={assets.compass_icon} alt="" />
              </div>
		    
              <div className="card" onClick={() =>
									handleCardClick("I'm passionate about editing and want to pursue it as a career.")
								}
							 >
                <p>I'm passionate about editing and want to pursue it as a career.</p>
                <img src={assets.image_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img
                src={loading ? assets.gemini_gif : assets.gemini_icon}
                alt=""
              />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  style={{ marginTop: "0px" }}
                  dangerouslySetInnerHTML={{ __html: resultData }}
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onKeyDown={(e) => {
                if (input && e.key === "Enter") {
                  onSent();
                }
              }}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              
            
              <span>
                {" "}
                <img
                  src=""
                  alt=""
                  data-tooltip-id="use-microphone"
                  data-tooltip-content="Use microphone"
                />
                <Tooltip
                  id="use-microphone"
                  style={{ padding: "5px", fontSize: "12px", color: "#f0f4f9" }}
                />
              </span>
              {input.length > 0 && (
                <span className={`send-icon ${input.length > 0 ? "show" : ""}`}>
                  <img
                    onClick={() => {
                      onSent();
                    }}
                    src={assets.send_icon}
                    alt=""
                    data-tooltip-id="submit"
                    data-tooltip-content="Submit"
                  />
                  <Tooltip
                    id="submit"
                    style={{
                      padding: "5px",
                      fontSize: "12px",
                      color: "#f0f4f9",
                    }}
                  />
                </span>
              )}
            </div>
          </div>
          <p className="bottom-info">
            AskAi may display inaccurate info, including about people, so
            double-check its responses.{" "}
            <a href="https://abhaypp.com">
              Made with ❤️
            </a>
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
