import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    const { onAction } = this.props;
    onAction();
  };

  handleIsDisabled = () => {
    const { onCheckIsDisabled } = this.props;
    return onCheckIsDisabled();
  };

  render() {
    const { children, submit, dataTestId } = this.props;
    return (
      <button
        type={ submit ? 'submit' : 'button' }
        data-testid={ dataTestId }
        onClick={ !submit ? this.handleClick : () => {} }
        disabled={ this.handleIsDisabled() }
      >
        { children }
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  submit: PropTypes.bool.isRequired,
  dataTestId: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
  onCheckIsDisabled: PropTypes.func.isRequired,
};

export default Button;
