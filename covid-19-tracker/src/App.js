import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import COVID19 from "./images/COVID19.png";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.img} src={COVID19} alt="COVID19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <footer>
          Made with{" "}
          <span style={{ color: "red", fontSize: "20px" }}>&hearts;</span>, by{" "}
          <a href="https://www.linkedin.com/in/k-g-prajwal-a6b3b517a/">
            K G Prajwal
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
