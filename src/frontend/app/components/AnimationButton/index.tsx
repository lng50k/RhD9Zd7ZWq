import * as React from 'react';
import { Redirect, withRouter } from 'react-router';

interface Props {
  history: any;
}
class AnimationButton extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.props.history.push('/main');
  }
  render() {
    return (
      <div className="css-button" onClick={this.handleClick}>
        <p className="css-button-text">What's For Lunch?</p>
        <div className="css-button-inner">
          <div className="reset-skew">
            <p className="css-button-inner-text">What's For Lunch?</p>
          </div>
        </div>
        <style>{`
          body {
              font-family: Arial;
              text-align: center;
              padding-top: 100px;
              background-color: #232323;
            }
          .css-button {
            border: 1px solid #d5402b;
            height: 51px;
            width: 218px;
            position: relative;
            margin: auto;
            overflow: hidden;
            cursor: pointer;
            color: #fff;
            position: absolute;
            top: 50%;
            left: calc(50% - 109px);
          }

          p.css-button-text {
            width: 100%;
            position: absolute;
          }

          .css-button-inner {
            height: 51px;
            width: 265px;
            position: relative;
            left: -4px;
            top: -1px;
            border: 1px solid #d5402b;
            background-color: #d5402b;
            text-align: center;
            -webkit-transform: skew(-42deg) translate(300px,0);
            -moz-transform: skew(-42deg) translate(300px,0);
            -o-transform: skew(-42deg) translate(300px,0);
            transform: skew(-42deg) translate(300px,0);
            -webkit-animation-name: buttonx-out;
            -webkit-animation-duration: .7s;
            -webkit-animation-iteration-count: 1;
            -webkit-animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
            -moz-animation-name: buttonx-out;
            -moz-animation-duration: .7s;
            -moz-animation-iteration-count: 1;
            -moz-animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
            animation-name: buttonx-out;
            animation-duration: .7s;
            animation-iteration-count: 1;
            animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
          }

          .reset-skew {
            -moz-transform: skew(40deg);
            -o-transform: skew(40deg);
            transform: skew(40deg);
          }

          .css-button:hover > .css-button-inner {
            -webkit-animation-name: buttonx-in;
            -webkit-animation-duration: .6s;
            -webkit-animation-iteration-count: 1;
            -webkit-animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
            -moz-animation-name: buttonx-in;
            -moz-animation-duration: .6s;
            -moz-animation-iteration-count: 1;
            -moz-animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
            animation-name: buttonx-in;
            animation-duration: .6s;
            animation-iteration-count: 1;
            animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
            -moz-transform: skew(-42deg) translate(-20px, -0px);
            -o-transform: skew(-42deg) translate(-20px, -0px);
            transform: skew(-42deg) translate(-20px, -0px);
          }

          @keyframes buttonx-in {
              from {transform:skew(-42deg) translate(-300px, 0);}
              to {transform:skew(-42deg) translate(-20px, -0px);}
          }

          @keyframes buttonx-out {
              from {transform: skew(-42deg) translate(0, 0);}
              to {transform: skew(-42deg) translate(300px, -0px);}
          }

          @-webkit-keyframes buttonx-in {
              from {transform:skew(-42deg) translate(-300px, 0);}
              to {transform:skew(-42deg) translate(-20px, -0px);}
          }

          @-webkit-keyframes buttonx-out {
              from {transform: skew(-42deg) translate(0, 0);}
              to {transform: skew(-42deg) translate(300px, -0px);}
          }
            `}</style>
      </div>

    );
  }
}

export default withRouter(AnimationButton)
