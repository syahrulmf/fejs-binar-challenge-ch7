import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import car from "../../assets/images/fi_car.png";
import fi_plus from "../../assets/images/icon/fi_plus.png";
import fi_key from "../../assets/images/icon/fi_key.png";
import fi_clock from "../../assets/images/icon/fi_clock.png";
import fi_trash from "../../assets/images/icon/fi_trash-2.png";
import fi_edit from "../../assets/images/icon/fi_edit.png";

import "./ListCar.css";

const ListCar = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Navbar />

        <Sidebar />

        <section className="content-section ps-5 pe-4">
          <div className="row">
            <div className="col-lg-0" id="show-col-lg-0">
              <div className="adding-space" style={{ width: "300px" }}></div>
            </div>
            <div className="col-lg-12" id="show-col-lg-12">
              {/* Content */}
              <div class="container-fluid">
                <div class="list-button">
                  <span class="list-car">List Car</span>
                  <div class="button-right">
                    <Link to={"/add_car"} class="btn btn-add">
                      <img src={fi_plus} alt="icon-plus" /> Add New Car
                    </Link>
                  </div>
                </div>
                <div class="btn-group" aria-label="Basic example">
                  <button type="button" class="btn btn-outline-primary">
                    All
                  </button>
                  <button type="button" class="btn btn-outline-primary">
                    Small
                  </button>
                  <button type="button" class="btn btn-outline-primary">
                    Medium
                  </button>
                  <button type="button" class="btn btn-outline-primary">
                    Large
                  </button>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      <img src={car} alt="img-car" />
                    </h5>
                    <p>Nama/Tipe Mobil</p>
                    <h6>Rp 430.000 / hari</h6>
                    <p class="card-text">
                      <img src={fi_key} alt="icon-key" />
                      Start rent - Finish rent
                    </p>
                    <p class="card-text">
                      <img src={fi_clock} alt="icon-clock" />
                      Updated at 4 Apr 2022, 09.00
                    </p>
                    <div class="btn-group" aria-label="Basic example">
                      <button type="button" class="btn btn-danger">
                        <img src={fi_trash} alt="icon-trash" />
                        Delete
                      </button>
                      <button type="button" class="btn btn-success">
                        <img src={fi_edit} alt="icon-edit" />
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Akhir Content */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ListCar;
