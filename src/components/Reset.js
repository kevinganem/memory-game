import React from "react";

class Reset extends React.Component {
  constructor() {
    super();
    this.state = {
      started: false,
      time: 45,
    };
  }

  renderPlaying() {
    return (
      <>
        <form>
          <input
            type="submit"
            className="btn btn-warning"
            style={{ height: 40 }}
            value="reset"
          />
        </form>
      </>
    );
  }

  render() {
    return this.renderPlaying();
  }
}
export default Reset;
