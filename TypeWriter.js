import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';

const delayShape = PropTypes.shape({
  at: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(RegExp),
  ]),
  delay: PropTypes.number,
});

const propTypes = {
  fixed: PropTypes.bool,
  delayMap: PropTypes.arrayOf(PropTypes.shape(delayShape)),
  typing: PropTypes.oneOf([-1, 0, 1]),
  maxDelay: PropTypes.number,
  minDelay: PropTypes.number,
  onTypingEnd: PropTypes.func,
  onTyped: PropTypes.func,
  text: PropTypes.string,
  typeWriterStyle: Text.propTypes.style,
};

const defaultProps = {
  typing: 0,
  maxDelay: 100,
  minDelay: 20,
};

class TypeWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleChars: 0,
    };

    this._handleTimeout = this._handleTimeout.bind(this);
  }

  componentDidMount() {
    this._timeoutId = setTimeout(this._handleTimeout, this.props.minDelay);
  }

  componentWillReceiveProps(nextProps) {
    const next = nextProps.typing;
    const active = this.props.typing;

    if (this.props.text !== nextProps.text) {
      this.setState({
        visibleChars: 0,
      });
    } else {
      if (active > 0 && next < 0) {
        this.setState({
          visibleChars: this.state.visibleChars - 1,
        });
      } else if (active <= 0 && next > 0) {
        this.setState({
          visibleChars: this.state.visibleChars + 1,
        });
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.visibleChars !== nextState.visibleChars ||
      this.props.text !== nextProps.text
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      text,
      maxDelay,
      minDelay,
      delayMap,
      onTyped,
      onTypingEnd,
    } = this.props;
    const { visibleChars } = prevState;
    const token = text[visibleChars];
    const nextToken = text[this.state.visibleChars];

    if (token && onTyped) {
      onTyped(token, visibleChars);
    }

    if (nextToken) {
      let timeout = ~~(Math.random() * (maxDelay - minDelay) + minDelay);

      if (delayMap) {
        delayMap.forEach(({ at, delay }) => {
          if (at === visibleChars || token.match(at)) {
            timeout += delay;
          }
        });
      }

      this._timeoutId = setTimeout(this._handleTimeout, timeout);
    } else if (onTypingEnd) {
      onTypingEnd();
    }
  }

  componentWillUnmount() {
    clearInterval(this._timeoutId);
  }

  _handleTimeout() {
    const { typing } = this.props;
    const { visibleChars } = this.state;

    this.setState({
      visibleChars: visibleChars + typing,
    });
  }

  render() {
    const { text, typeWriterStyle, ...props } = this.props;
    const { visibleChars } = this.state;

    return <Text style={typeWriterStyle} {...props}>{text.slice(0, visibleChars)}</Text>;
  }
}

TypeWriter.propTypes = propTypes;
TypeWriter.defaultProps = defaultProps;

export default TypeWriter;
