import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
//import DebugSteps from './DebugSteps'

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pageCounter: 0
    };
  }
  
  handleClick = () => {
    this.setState(prevState => ({
      pageCounter: prevState.pageCounter + 1
    }));
  }

  noButton = () => {
    this.setState({pageCounter: 0})
  }


  render(){
      let currentlyVisibleState = null;
      let buttonText = null;
      let buttonNo = null;
      if (this.state.pageCounter === 0) {
        currentlyVisibleState = <TicketList/>
        buttonText = "Add Ticket";
      } else if (this.state.pageCounter === 1) {
        currentlyVisibleState = <p>"Have you gone through all the steps on the Learn How to Program debugging lesson?"</p>
        buttonText = "Yes";
        buttonNo = <button onClick={this.noButton}>No</button>
      } else if (this.state.pageCounter === 2) {
        currentlyVisibleState = <p>"Have you asked another pair for help?"</p>
        buttonText = "Yes";
        buttonNo = <button onClick={this.noButton}>No</button>
      } else if (this.state.pageCounter === 3) {
        currentlyVisibleState = <p>"Have you spent 15 minutes going through through the problem documenting every step?"</p>
        buttonText = "Yes";
        buttonNo = <button onClick={this.noButton}>No</button>
      } else if (this.state.pageCounter === 4) {
        currentlyVisibleState = <NewTicketForm/>
        buttonText = "Submit"
        buttonNo = <button onClick={this.noButton}>Go Back</button>
      }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
        {buttonNo}
      </React.Fragment>
    );
  }
}  

export default TicketControl;

