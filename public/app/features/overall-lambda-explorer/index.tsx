import React, { Component } from 'react';

import FiltersModal from './Components/FiltersModal';

interface LocalState {
  slaButtonsPopupOpen: boolean,
  showFiltersModal: boolean,
  value: number,
}

class OverallLambdaExplorer extends Component<Record<string, string>, LocalState> {
  popupRef: any;
  constructor(props: Record<string, string>) {
    super(props);
    this.state = {
      slaButtonsPopupOpen: false,
      showFiltersModal: false,
      value: 0,
    };
    this.popupRef = React.createRef();
  }

  toggleSlaButtonsPopup = () => {
    this.setState({
      slaButtonsPopupOpen: !this.state.slaButtonsPopupOpen,
    });
  };

  toggleFiltersModal = () => {
    this.setState({
      showFiltersModal: !this.state.showFiltersModal,
    });
  };

  setActiveTab = (value: any) => {
    this.setState({
      value,
    });
  };

  render() {
    const { slaButtonsPopupOpen, value, showFiltersModal } = this.state;
    return (
      <div className="overall-explorers-container">
        <div className="heading">
          <h1>Lambda</h1>
          <div className="buttons">
            <button className="filters-btn" onClick={this.toggleFiltersModal}>
              <i className="fa-solid fa-sliders"></i> Filters
            </button>
            <button className="sla-btn" onClick={this.toggleSlaButtonsPopup}>
              <i className="fa-solid fa-gear"></i> SLA <i className="fa-solid fa-sort-down"></i>
            </button>
            {slaButtonsPopupOpen === true && (
              <>
                <div className={slaButtonsPopupOpen ? "sla-buttons-popup active" : "sla-buttons-popup"}>
                  <button className="active"><i className="fa-solid fa-circle-dot"></i> Performance</button>
                  <button><i className="fa-solid fa-circle-dot"></i> Reliability</button>
                  <button><i className="fa-solid fa-circle-dot"></i> Availability</button>
                  <button><i className="fa-solid fa-circle-dot"></i> End Usage</button>
                  <button><i className="fa-solid fa-circle-dot"></i> Security</button>
                  <button><i className="fa-solid fa-circle-dot"></i> Cost</button>
                </div>
                <div className="sla-buttons-popup-bg" onClick={this.toggleSlaButtonsPopup}></div>
              </>
            )}
          </div>
        </div>
        <div className="tabs-container">
          <div className="header">
            <div className="tabs-left">
              <button className={value === 0 ? 'active' : ''} onClick={(e) => this.setActiveTab(0)}>Development</button>
              <button className={value === 1 ? 'active' : ''} onClick={(e) => this.setActiveTab(1)}>Test</button>
              <button className={value === 2 ? 'active' : ''} onClick={(e) => this.setActiveTab(2)}>Stage</button>
              <button className={value === 3 ? 'active' : ''} onClick={(e) => this.setActiveTab(3)}>Production</button>
            </div>
            <div className="tabs-right">
              <ul className="calendar">
                <li>Today</li>
                <li>1W</li>
                <li className="active">1M</li>
                <li>3M</li>
                <li>Custom</li>
              </ul>
              <button className="events-btn">Go To Events</button>
            </div>
          </div>
          <div className="tabs-contents">
            {value === 0 ? (
              'Development'
            ) : value === 1 ? (
              'Test'
            ) : value === 2 ? (
              'Stage'
            ) : value === 3 ? (
              'Production'
            ) : (
              <></>
            )}
          </div>
        </div>
        <FiltersModal isOpen={showFiltersModal} toggleFiltersModal={this.toggleFiltersModal} />
      </div>
    );
  }
}

export default OverallLambdaExplorer;
