import React, { Component } from "react";
import LDClient from "ldclient-js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      myFeature: "loading",
      country: undefined
    };
  }

  getCountry() {}

  componentDidMount() {
    // Get Location Information
    fetch("https://ipapi.co/json/")
      .then(response => {
        return response.json();
      })
      .then(res => {
        // Providing settings
        const endUserSettings = {
          key: "122070",
          country: "Spain",
          custom: {
            over25: true
          }
        };

        // Custom launch-darkly profile settings
        this.ldclient = LDClient.initialize(
          "5e77c7b99a7c990760ea5405",
          endUserSettings
        );

        // Kicking off launchdarkly
        this.ldclient.on("ready", this.setFeatureFlag.bind(this));
      });
  }

  setFeatureFlag() {
    // Updating state with response
    this.setState({
      myFeature: this.ldclient.variation("country-test")
    });
  }

  render() {
    const { myFeature } = this.state;

    if (myFeature === "loading") {
      return <div className="App">Loading....</div>;
    }

    return (
      <div className="App">
        <div className="features">
          <h1>
            {myFeature === true
              ? "The feature flag is enabled!"
              : "The feature flag is NOT enabled!"}
          </h1>
          <p>
            Try hit this with a VPN set to <strong>England</strong>, and it will{" "}
            <strong>disable</strong> the feature flag.
          </p>
          <p>
            Try hit this with a VPN set to <strong>Spain</strong>, and it will
            work <strong>50% of the time</strong>.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
