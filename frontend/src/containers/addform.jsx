import React from "react";
import Aside from "../components/Common/Aside";
import Header2 from "../components/Common/Header2";
import addimg from "../assets/img/add.png";
import closeimg from "../assets/img/close_black.png";

const addform = () => {
  return (
    <>
      {" "}
      <div className="dashboard-body">
        <Header2 />
        <div className="content-wrapper">
          <Aside />
          <div className="content">
            <div className="second-nav-bar">
              <div className="second-nav-bar-content">
                <div class="second-nav-bar-title">Transaction</div>
                <div class="add-budget">
                  <a href="addform">
                    <img src={addimg} alt="" />
                  </a>
                </div>
              </div>
              <div className="transaction">
                <div className="table-container">
                  {" "}
                  <table class="table-list">
                    <th>Date</th>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Cost</th>
                    <tr>
                      <td>2021/Oct/5</td>
                      <td>Salary</td>
                      <td>Salary</td>
                      <td class="green-color">+ $20,000</td>
                    </tr>

                    <tr>
                      <td>2021/Oct/8</td>
                      <td>House</td>
                      <td>House</td>
                      <td class="red-color">-500</td>
                    </tr>
                    <tr>
                      <td>2021/Oct/8</td>
                      <td>Utiliy</td>
                      <td>Transportion</td>
                      <td class="red-color">-300</td>
                    </tr>
                    <tr>
                      <td>2021/Oct/8</td>
                      <td>Food</td>
                      <td>Grocery</td>
                      <td class="red-color">-100</td>
                    </tr>
                    <tr>
                      <td>2021/Oct/8</td>
                      <td>Utility</td>
                      <td>Internet</td>
                      <td class="red-color">-150</td>
                    </tr>
                    <tr>
                      <td>2021/Oct/8</td>
                      <td>Utility</td>
                      <td>Internet</td>
                      <td class="red-color">-150</td>
                    </tr>
                    <tr>
                      <td>2021/Oct/8</td>
                      <td>Utility</td>
                      <td>Internet</td>
                      <td class="red-color">-150</td>
                    </tr>
                    <tr>
                      <td>2021/Oct/8</td>
                      <td>Utility</td>
                      <td>Internet</td>
                      <td class="red-color">-150</td>
                    </tr>
                    <tr>
                      <td>2021/Oct/8</td>
                      <td>Utility</td>
                      <td>Internet</td>
                      <td class="red-color">-150</td>
                    </tr>
                    <tr>
                      <td>2021/Oct/8</td>
                      <td>Utility</td>
                      <td>Internet</td>
                      <td class="red-color">-150</td>
                    </tr>
                  </table>
                </div>

                <div class="form-list">
                  <a href="transation">
                    <img src={closeimg} alt="" />
                  </a>
                  <form>
                    <select>
                      <option>Income or Expence</option>
                      <option>Income</option>
                      <option>Expence</option>
                    </select>
                    <select>
                      <option>Budget Category</option>
                      <option>House</option>
                      <option>Salary</option>
                      <option>Utility</option>
                      <option>Food</option>
                      <option>Other</option>
                    </select>
                    <div>
                      <label id="name">Name</label>
                      <input type="text" placeholder="Name" id="name" />
                    </div>
                    <div class="separate">
                      <div>
                        <label>Cost</label>
                        <input type="text" placeholder="Cost" />
                      </div>

                      <div>
                        <label>Date</label>
                        <input type="text" placeholder="Date" />
                      </div>
                    </div>

                    <div>
                      <button>Create</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default addform;
