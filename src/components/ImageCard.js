import React from "react";

export class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { span: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const span = Math.ceil(height / 10);

    this.setState({ span: span });
  };

  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img
          ref={this.imageRef}
          src={this.props.image.urls.regular}
          alt={this.props.image.description}
        />
      </div>
    );
  }
}

export default ImageCard;
