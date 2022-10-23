import React from "react";

class Home extends React.Component {
  state = { msg_bot: "", msgbox: "" };
  onChangeMsgBox = (e) => {
    this.setState({ msgbox: e.target.value });
  };
  render() {
    return (
      <React.Fragment>
        <div className="chat-bot">
          <div className="chat-bot-avatar">
            <div className="chat-bot-avatar-figure">
              <img src="./chat-bot.jpg" alt="chat-bot" />
            </div>
          </div>
        </div>
        <div className="virbe-plugin-expanded">
          <div className="player-container">
            <div className="canvas-container">
              <img src="./chat-bot.jpg" alt="sds" />
            </div>
            <div className="controls-overlay false">
              <div className="controls-overlay-btns">
                <div className="control-overlay-mute">
                  <button
                    className="virbe-plugin-1-MuiButtonBase-root virbe-plugin-1-MuiIconButton-root control-overlay-mute-btn-embedded virbe-plugin-1-MuiIconButton-colorPrimary"
                    tabIndex={0}
                    type="button"
                    aria-label="mute"
                  >
                    <span className="virbe-plugin-1-MuiIconButton-label">
                      <svg
                        width="20"
                        height="16"
                        viewBox="0 0 20 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.43 0.0999709C10.2676 0.029713 10.0895 0.00380289 9.91379 0.0248848C9.73811 0.0459668 9.57116 0.113286 9.43 0.219971L4.65 3.99997H1C0.734784 3.99997 0.48043 4.10533 0.292893 4.29286C0.105357 4.4804 0 4.73475 0 4.99997V11C0 11.2652 0.105357 11.5195 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H4.65L9.38 15.78C9.55594 15.9211 9.77444 15.9987 10 16C10.1494 16.0024 10.297 15.9681 10.43 15.9C10.6002 15.8189 10.744 15.6914 10.8448 15.5322C10.9457 15.373 10.9995 15.1885 11 15V0.999971C10.9995 0.811485 10.9457 0.626987 10.8448 0.46775C10.744 0.308512 10.6002 0.18102 10.43 0.0999709ZM9 12.92L5.62 10.22C5.44406 10.0788 5.22556 10.0013 5 9.99997H2V5.99997H5C5.22556 5.99866 5.44406 5.92113 5.62 5.77997L9 3.07997V12.92ZM13.14 0.0899712C13.0087 0.0715861 12.875 0.0792469 12.7467 0.112516C12.6183 0.145785 12.4977 0.204011 12.3919 0.283869C12.286 0.363728 12.1969 0.463654 12.1297 0.577944C12.0625 0.692234 12.0184 0.818649 12 0.949971C11.9816 1.08129 11.9893 1.21495 12.0225 1.34331C12.0558 1.47167 12.114 1.59222 12.1939 1.69808C12.3552 1.91187 12.5948 2.05284 12.86 2.08997C14.2762 2.30822 15.5676 3.0261 16.5004 4.11376C17.4333 5.20142 17.9462 6.58704 17.9462 8.01997C17.9462 9.4529 17.4333 10.8385 16.5004 11.9262C15.5676 13.0138 14.2762 13.7317 12.86 13.95C12.5948 13.9685 12.3478 14.0917 12.1734 14.2924C11.999 14.493 11.9114 14.7548 11.93 15.02C11.9486 15.2852 12.0717 15.5322 12.2724 15.7066C12.4731 15.881 12.7348 15.9685 13 15.95H13.14C15.0328 15.6636 16.7602 14.708 18.0086 13.2566C19.2569 11.8053 19.9434 9.95434 19.9434 8.03997C19.9434 6.1256 19.2569 4.27469 18.0086 2.82331C16.7602 1.37193 15.0328 0.416318 13.14 0.129971V0.0899712ZM12.68 9.86997C12.4148 9.91241 12.1773 10.0585 12.0198 10.276C11.8622 10.4935 11.7976 10.7648 11.84 11.03C11.8824 11.2952 12.0285 11.5327 12.246 11.6902C12.4636 11.8477 12.7348 11.9124 13 11.87C13.1085 11.8688 13.2163 11.8519 13.32 11.82C14.099 11.5437 14.7733 11.033 15.2502 10.3579C15.7271 9.68277 15.9832 8.87652 15.9832 8.04997C15.9832 7.22343 15.7271 6.41717 15.2502 5.74208C14.7733 5.06699 14.099 4.55621 13.32 4.27997C13.068 4.1951 12.7927 4.2138 12.5545 4.33194C12.3164 4.45009 12.1349 4.65802 12.05 4.90997C11.9651 5.16193 11.9838 5.43728 12.102 5.67545C12.2201 5.91362 12.428 6.0951 12.68 6.17997C13.0595 6.3239 13.3862 6.57987 13.6167 6.91388C13.8472 7.24789 13.9707 7.64413 13.9707 8.04997C13.9707 8.45582 13.8472 8.85205 13.6167 9.18606C13.3862 9.52007 13.0595 9.77604 12.68 9.91997V9.86997Z"
                          fill="#005FF4"
                        ></path>
                      </svg>
                      <span>Mute</span>
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
                    style={{ borderWidth: 0, backgroundColor: "#fbcf54" }}
                  >
                    <span className="virbe-plugin-1-MuiIconButton-label">
                      <svg width="18" height="18" fill="none">
                        <path
                          d="M10.88 9l5.733-5.72a1.339 1.339 0 10-1.893-1.893L9 7.12 3.28 1.387A1.339 1.339 0 001.387 3.28L7.12 9l-5.733 5.72a1.332 1.332 0 000 1.893 1.333 1.333 0 001.893 0L9 10.88l5.72 5.733a1.333 1.333 0 001.893 0 1.333 1.333 0 000-1.893L10.88 9z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </span>
                    <span className="virbe-plugin-1-MuiTouchRipple-root"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="chat-container false">
            <div className="chat-main">
              <div
                className="chat-history"
                style={{ marginBottom: "0px", backgroundColor: "unset" }}
              >
                <div className="chat-message-bubble">
                  <div className="chat-message-default">
                    <p>
                      Hi! I’m a virtual representation of Chris, the CEO at
                      Virbe. I can answer any questions you may have. Or maybe
                      you'd like to book a meeting with the real Chris?
                    </p>
                  </div>
                </div>
              </div>
              <form className="chat-form">
                <div className="chat-form-message">
                  <div className="chat-form-message-input">
                    <input
                      aria-invalid="false"
                      placeholder="Type your message"
                      type="text"
                      value={this.state.msgbox}
                      onChange={this.onChangeMsgBox}
                    />
                  </div>
                </div>
                <div className="mic-recorder false">
                  <button
                    className="form-button"
                    tabIndex={0}
                    type="button"
                    style={{ borderWidth: 0 }}
                  >
                    <span>
                      <svg width="38" height="38">
                        <g fill="none">
                          <rect
                            width="38"
                            height="38"
                            y="0.396"
                            fill="#005FF4"
                            rx="19"
                          ></rect>
                          <path
                            fill="#FFF"
                            d="M25.602 17.67L14.52 12.128a2.375 2.375 0 00-3.23 3.088l1.9 4.251a.838.838 0 010 .65l-1.9 4.25a2.375 2.375 0 002.17 3.341c.37-.003.735-.09 1.068-.253l11.083-5.542a2.375 2.375 0 000-4.243h-.008zm-.704 2.826l-11.083 5.542a.791.791 0 01-1.07-1.03l1.893-4.25c.024-.057.046-.115.063-.175h5.455a.792.792 0 000-1.583H14.7a1.583 1.583 0 00-.063-.174l-1.892-4.251a.792.792 0 011.069-1.03l11.083 5.542a.792.792 0 010 1.41z"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </button>
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
