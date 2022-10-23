import React from "react";

class Home extends React.Component {
  state = { msg_bot: "", msgbox: "" };
  onChangeMsgBox = (e) => {
    this.setState({ msgbox: e.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <div className="virbe-plugin-expanded active move-right">
          <div className="player-container">
            <div className="canvas-container">
              <img src="./answer-bot.png" alt="answer-bot" />
            </div>
            <div className="controls-overlay false">
              <div className="controls-overlay-btns">
                <div className="control-overlay-mute">
                  <button
                    className="virbe-plugin-1-MuiButtonBase-root virbe-plugin-1-MuiIconButton-root control-overlay-mute-btn-embedded virbe-plugin-1-MuiIconButton-colorPrimary"
                    tabIndex={0}
                    type="button"
                    aria-label="mute"
                    style={{ borderWidth: 0, backgroundColor: "#d2eaff" }}
                  >
                    <span className="virbe-plugin-1-MuiIconButton-label">
                      <svg
                        width="21"
                        height="15"
                        viewBox="0 0 21 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.49531 0.546882C9.62768 0.610645 9.73938 0.71044 9.81759 0.834811C9.89581 0.959181 9.93737 1.10309 9.9375 1.25001V13.75C9.93729 13.897 9.89561 14.041 9.81724 14.1654C9.73888 14.2897 9.62701 14.3895 9.49449 14.4531C9.36198 14.5168 9.21419 14.5417 9.06812 14.5252C8.92205 14.5086 8.78363 14.4511 8.66875 14.3594L4.97656 11.4063H1.34375C1.13655 11.4063 0.937836 11.3239 0.791323 11.1774C0.64481 11.0309 0.5625 10.8322 0.5625 10.625V4.37501C0.5625 4.16781 0.64481 3.96909 0.791323 3.82258C0.937836 3.67607 1.13655 3.59376 1.34375 3.59376H4.97656L8.66875 0.640632C8.78371 0.548738 8.92228 0.491183 9.06852 0.474597C9.21475 0.458011 9.3627 0.483068 9.49531 0.546882ZM20.6469 3.82188C20.7196 3.89445 20.7774 3.98066 20.8167 4.07558C20.8561 4.17049 20.8764 4.27225 20.8764 4.37501C20.8764 4.47777 20.8561 4.57952 20.8167 4.67443C20.7774 4.76935 20.7196 4.85556 20.6469 4.92813L18.0734 7.50001L20.6469 10.0719C20.7936 10.2186 20.876 10.4175 20.876 10.625C20.876 10.8325 20.7936 11.0314 20.6469 11.1781C20.5002 11.3248 20.3012 11.4072 20.0938 11.4072C19.8863 11.4072 19.6873 11.3248 19.5406 11.1781L16.9688 8.60469L14.3969 11.1781C14.2502 11.3248 14.0512 11.4072 13.8438 11.4072C13.6363 11.4072 13.4373 11.3248 13.2906 11.1781C13.1439 11.0314 13.0615 10.8325 13.0615 10.625C13.0615 10.4175 13.1439 10.2186 13.2906 10.0719L15.8641 7.50001L13.2906 4.92813C13.218 4.85549 13.1604 4.76926 13.1211 4.67436C13.0817 4.57945 13.0615 4.47773 13.0615 4.37501C13.0615 4.27228 13.0817 4.17056 13.1211 4.07566C13.1604 3.98075 13.218 3.89452 13.2906 3.82188C13.4373 3.67518 13.6363 3.59277 13.8438 3.59277C13.9465 3.59277 14.0482 3.613 14.1431 3.65231C14.238 3.69163 14.3242 3.74924 14.3969 3.82188L16.9688 6.39532L19.5406 3.82188C19.6132 3.74913 19.6994 3.6914 19.7943 3.65202C19.8892 3.61263 19.991 3.59236 20.0938 3.59236C20.1965 3.59236 20.2983 3.61263 20.3932 3.65202C20.4881 3.6914 20.5743 3.74913 20.6469 3.82188Z"
                          fill="#0084FF"
                        />
                      </svg>
                    </span>
                    <span className="virbe-plugin-1-MuiTouchRipple-root"></span>
                  </button>
                </div>
                <div className="control-overlay-collapse">
                  <button
                    className="virbe-plugin-1-MuiButtonBase-root virbe-plugin-1-MuiIconButton-root virbe-plugin-1-MuiIconButton-colorPrimary"
                    tabIndex={0}
                    type="button"
                    aria-label="collapse"
                    style={{ borderWidth: 0, backgroundColor: "#d2eaff" }}
                  >
                    <span className="virbe-plugin-1-MuiIconButton-label">
                      {/* <svg
                        width="12"
                        height="20"
                        viewBox="0 0 12 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.25 9C11.4312 9.00001 11.6063 9.06564 11.7429 9.18477C11.8795 9.30389 11.9684 9.46845 11.993 9.648L12 9.75V10.25C12.0002 11.9536 11.3561 13.5942 10.1971 14.8428C9.03814 16.0914 7.44989 16.8556 5.751 16.982L5.75 19.25C5.74994 19.44 5.67776 19.6229 5.54803 19.7618C5.4183 19.9006 5.2407 19.9851 5.05112 19.998C4.86154 20.011 4.67411 19.9515 4.5267 19.8316C4.37929 19.7117 4.2829 19.5402 4.257 19.352L4.25 19.25V16.982C2.59151 16.8588 1.03687 16.1278 -0.115789 14.929C-1.26845 13.7302 -1.93799 12.148 -1.996 10.486L-2 10.25V9.75C-1.99994 9.55998 -1.92776 9.37706 -1.79803 9.23821C-1.6683 9.09936 -1.4907 9.01493 -1.30112 9.00197C-1.11154 8.98902 -0.924108 9.04852 -0.776701 9.16843C-0.629294 9.28835 -0.532901 9.45975 -0.507 9.648L-0.5 9.75V10.25C-0.500115 11.6051 0.0237202 12.9077 0.961937 13.8854C1.90015 14.8632 3.18008 15.4402 4.534 15.496L4.75 15.5H5.25C6.60507 15.5001 7.9077 14.9763 8.88543 14.0381C9.86315 13.0998 10.4402 11.8199 10.496 10.466L10.5 10.25V9.75C10.5 9.55109 10.579 9.36032 10.7197 9.21967C10.8603 9.07902 11.0511 9 11.25 9V9ZM5 0C6.06087 0 7.07828 0.421427 7.82843 1.17157C8.57857 1.92172 9 2.93913 9 4V10C9 11.0609 8.57857 12.0783 7.82843 12.8284C7.07828 13.5786 6.06087 14 5 14C3.93913 14 2.92172 13.5786 2.17157 12.8284C1.42143 12.0783 1 11.0609 1 10V4C1 2.93913 1.42143 1.92172 2.17157 1.17157C2.92172 0.421427 3.93913 0 5 0V0ZM5 1.5C4.33696 1.5 3.70107 1.76339 3.23223 2.23223C2.76339 2.70107 2.5 3.33696 2.5 4V10C2.5 10.663 2.76339 11.2989 3.23223 11.7678C3.70107 12.2366 4.33696 12.5 5 12.5C5.66304 12.5 6.29893 12.2366 6.76777 11.7678C7.23661 11.2989 7.5 10.663 7.5 10V4C7.5 3.33696 7.23661 2.70107 6.76777 2.23223C6.29893 1.76339 5.66304 1.5 5 1.5V1.5Z"
                          fill="#0084FF"
                        />
                      </svg> */}
                    </span>
                    <span className="virbe-plugin-1-MuiTouchRipple-root"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="chat-container true">
            <div className="chat-main">
              <div
                className="chat-history"
                style={{ marginBottom: "0px", backgroundColor: "unset" }}
              >
                <div className="chat-message-bubble-panel">
                  <div className="chat-message-panel">
                    <div className="bot">
                      <img src="./bot.png" alt="bot" />
                    </div>
                    <div className="answer">
                      <p className="chat-message-panel-answer">
                        Hi! I’m a virtual representation of Chris, the CEO at
                        Virbe. I can answer any questions you may have. Or maybe
                        you'd like to book a meeting with the real Chris?
                      </p>
                    </div>
                    <div className="question">
                      <p className="chat-message-panel-question">
                        How are you?
                      </p>
                    </div>

                    <ul className="chat-message-panel-ul">
                      <li className="chat-message-panel-li">asdfadsf</li>
                    </ul>

                    <div className="video-panel">
                      <div className="video-main">
                        {/* <video>
                          <src></src>
                        </video> */}
                        <img src="./answer-bot.png" alt="answer-bot" />
                      </div>
                      <div className="video-others">
                        <img
                          src="./answer-bot.png"
                          alt="answer-bot"
                          className="video-child"
                        />

                        <img
                          src="./answer-bot.png"
                          alt="answer-bot"
                          className="video-child"
                        />
                        <img
                          src="./answer-bot.png"
                          alt="answer-bot"
                          className="video-child"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <form className="chat-form">
                <div className="chat-form-message">
                  <div className="chat-form-message-input-panel">
                    <div className="input-icons">
                      <span className="icon">
                        <svg
                          width="14"
                          height="20"
                          viewBox="0 0 14 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.25 9C13.4312 9.00001 13.6063 9.06564 13.7429 9.18477C13.8795 9.30389 13.9684 9.46845 13.993 9.648L14 9.75V10.25C14.0002 11.9536 13.3561 13.5942 12.1971 14.8428C11.0381 16.0914 9.44989 16.8556 7.751 16.982L7.75 19.25C7.74994 19.44 7.67776 19.6229 7.54803 19.7618C7.4183 19.9006 7.2407 19.9851 7.05112 19.998C6.86154 20.011 6.67411 19.9515 6.5267 19.8316C6.37929 19.7117 6.2829 19.5402 6.257 19.352L6.25 19.25V16.982C4.59152 16.8588 3.03687 16.1278 1.88421 14.929C0.73155 13.7302 0.0620134 12.148 0.00400019 10.486L0 10.25V9.75C5.82426e-05 9.55998 0.0722443 9.37706 0.201972 9.23821C0.331701 9.09936 0.509299 9.01493 0.69888 9.00197C0.888462 8.98902 1.07589 9.04852 1.2233 9.16843C1.37071 9.28835 1.4671 9.45975 1.493 9.648L1.5 9.75V10.25C1.49989 11.6051 2.02372 12.9077 2.96194 13.8854C3.90015 14.8632 5.18008 15.4402 6.534 15.496L6.75 15.5H7.25C8.60507 15.5001 9.9077 14.9763 10.8854 14.0381C11.8632 13.0998 12.4402 11.8199 12.496 10.466L12.5 10.25V9.75C12.5 9.55109 12.579 9.36032 12.7197 9.21967C12.8603 9.07902 13.0511 9 13.25 9ZM7 0C8.06087 0 9.07828 0.421427 9.82843 1.17157C10.5786 1.92172 11 2.93913 11 4V10C11 11.0609 10.5786 12.0783 9.82843 12.8284C9.07828 13.5786 8.06087 14 7 14C5.93913 14 4.92172 13.5786 4.17157 12.8284C3.42143 12.0783 3 11.0609 3 10V4C3 2.93913 3.42143 1.92172 4.17157 1.17157C4.92172 0.421427 5.93913 0 7 0ZM7 1.5C6.33696 1.5 5.70107 1.76339 5.23223 2.23223C4.76339 2.70107 4.5 3.33696 4.5 4V10C4.5 10.663 4.76339 11.2989 5.23223 11.7678C5.70107 12.2366 6.33696 12.5 7 12.5C7.66304 12.5 8.29893 12.2366 8.76777 11.7678C9.23661 11.2989 9.5 10.663 9.5 10V4C9.5 3.33696 9.23661 2.70107 8.76777 2.23223C8.29893 1.76339 7.66304 1.5 7 1.5Z"
                            fill="#0084FF"
                          />
                        </svg>
                      </span>
                      <input
                        className="input-field"
                        type="text"
                        aria-invalid="false"
                        placeholder="Type your message"
                        value={this.state.msgbox}
                        onChange={this.onChangeMsgBox}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
