import React from "react";
import Aside from "../components/Common/Aside";
import Header2 from "../components/Common/Header2";

const dashboard = () => {
  return (
    <>
      <div className="dashboard-body">
        <Header2 />

        <div className="content-wrapper">
          <Aside />
          <div className="content">
            <div className="dashboard">
              <div className="grafics-left">
                <div className="grafics-left-content">
                  <div className="inner-content">
                    <div>Income and Expenses</div>
                    <div>Last 4 Months Reports</div>
                    <div>
                      <span className="label-tag income">Income</span>
                      <span className="label-tag expenses">Expenses</span>
                    </div>
                    <div className="button-line"></div>

                    <div className="dib-grafic">
                      <div
                        className="bar one"
                        // style={"--bar-value: 25%"}
                        data-name="$16k"
                        title="16k 32%"
                      ></div>
                      <div
                        className="bar two"
                        // style="--bar-value: 25%"
                        data-name="$16k"
                        title="16k 32%"
                      ></div>
                      <div
                        className="bar three"
                        // style="--bar-value: 28%"
                        data-name="$17k"
                        title="17k 35%"
                      ></div>
                      <div
                        className="bar four"
                        // style="--bar-value: 30%"
                        data-name="$18k"
                        title="18k 40%"
                      ></div>
                      <div
                        className="bar five"
                        // style="--bar-value: 25%"
                        data-name="$16k"
                        title="16k 32%"
                      ></div>
                      <div
                        className="bar six"
                        // style="--bar-value: 35%"
                        data-name="$20k"
                        title="20k 60%"
                      ></div>
                      <div
                        className="bar seven"
                        // style="--bar-value: 25%"
                        data-name="$14k"
                        title="14k 25%"
                      ></div>
                      <div
                        className="bar eight"
                        // style={"--bar-value: 35%"}
                        data-name="$20k"
                        title="20k 60%"
                      ></div>

                      <div className="v-meter">
                        <h3>Jul/2021</h3>
                        <h3>Aug/2021</h3>
                        <h3>Sep/2021</h3>
                        <h3>Oct/2021</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grafics-right">
                {" "}
                <div className="grafic-right-top">
                  <div className="grafic-right-top-container">
                    <div className="grafic-right-top-container-title">
                      Monthly budget{" "}
                    </div>{" "}
                    <div>
                      Calculation of last 4 months expense will be your Average
                      budget.{" "}
                    </div>{" "}
                    <div>
                      <span className="font-size-28 mt-2">Budget $0</span>
                      <span className="ml-1 edit-budget">Edit</span>{" "}
                    </div>
                    <div className="font-size-28">Expense $0</div>
                    <div className="font-size-28">Remainder $0</div>
                  </div>
                </div>
                <div className="grafic-right-button">
                  <div className="grafic-right-bottom-container">
                    <div className="grafic-right-bottom-title">Expenses</div>

                    <div className="grafico_circular">
                      <div className="expenses_total">
                        <p>65%</p>
                      </div>
                      <div></div>
                    </div>

                    <div className="container_leyenda">
                      <span className="leyenda_all">
                        <span className="color_house"> </span>
                        <p className="category_color">House</p>
                      </span>
                      <span className="leyenda_all">
                        <span className="color_transportion"> </span>
                        <p className="category_color">Transportion</p>
                      </span>
                      <span className="leyenda_all">
                        <span className="color_grocery"> </span>
                        <p className="category_color">Grocery</p>
                      </span>
                      <span className="leyenda_all">
                        <span className="color_electricity"> </span>
                        <p className="category_color">Electricity</p>
                      </span>
                      <span className="leyenda_all">
                        <span className="color_internet"> </span>
                        <p className="category_color">Internet</p>
                      </span>
                      <span className="leyenda_all">
                        <span className="color_gym"> </span>
                        <p className="category_color">Gym</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dashboard;
