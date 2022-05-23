import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./AddCar.css";

const AddCar = () => {
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
              <section id="page-5">
                <div className="container pt-4">
                  <div className="row">
                    <div className="col-12">
                      <div className="sub-tree d-flex mt-3 mb-3">
                        <a>
                          <p className="fw-bold">Cars</p>
                        </a>
                        <i className="fa fa-solid fa-chevron-right mx-2"></i>
                        <a>
                          <p className="fw-bold">List Car</p>
                        </a>
                        <i className="fa fa-solid fa-chevron-right mx-2"></i>
                        <a>
                          <p>Add New Car</p>
                        </a>
                      </div>
                      <h2>Add New Car</h2>
                      <div className="form-body mb-3">
                        <form>
                          <div className="row">
                            <div className="col-lg-3">
                              <label
                                htmlFor="inputName"
                                className="col-form-label"
                              >
                                Nama
                              </label>
                              <label htmlFor="wajib" style={{ color: "red" }}>
                                *
                              </label>
                            </div>
                            <div className="col-lg-9">
                              <input
                                type="text"
                                id="inputNama6"
                                className="form-control"
                                placeholder="Nama"
                              />
                              <small
                                id="namaHelp"
                                className="form-text text-muted"
                              ></small>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-3">
                              <label
                                htmlFor="inputPassword6"
                                className="col-form-label"
                              >
                                Harga
                              </label>
                              <label htmlFor="wajib" sstyle={{ color: "red" }}>
                                *
                              </label>
                            </div>
                            <div className="col-lg-9">
                              <input
                                type="text"
                                id="inputHarga6"
                                className="form-control"
                                placeholder="Harga"
                              />
                              <small
                                id="hargaHelp"
                                className="form-text text-muted"
                              ></small>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-3">
                              <label
                                htmlFor="inputFoto6"
                                className="col-form-label"
                              >
                                Foto
                              </label>
                              <label htmlFor="wajib" style={{ color: "red" }}>
                                *
                              </label>
                            </div>
                            <div className="col-lg-9">
                              <div className="input-group">
                                <input
                                  className="form-control"
                                  type="file"
                                  id="formFile"
                                  style={{ display: "none" }}
                                />
                                <label
                                  htmlFor="formFile"
                                  id="file-input"
                                  className="form-control icon text-secondary"
                                >
                                  No file selected
                                </label>
                                <span className="input-group-text">
                                  <img src="images/icon/fi_upload.png" />
                                </span>
                              </div>
                              <small
                                id="fileHelp"
                                className="form-text text-muted"
                                style={{ marginLeft: "1px" }}
                              >
                                File size max. 2 MB
                              </small>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-3">
                              <label
                                htmlFor="inputStartRent6"
                                className="col-form-label"
                              >
                                Start Rent
                              </label>
                            </div>
                            <div className="col-lg-9">
                              <span> - </span>
                              <span className="error-notif"></span>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-3">
                              <label
                                htmlFor="inputFinishRent6"
                                className="col-form-label"
                              >
                                Finish Rent
                              </label>
                            </div>
                            <div className="col-lg-9">
                              <span> - </span>
                              <span className="error-notif"></span>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-3">
                              <label
                                htmlFor="inputCreatedRent6"
                                className="col-form-label"
                              >
                                Created Rent
                              </label>
                            </div>
                            <div className="col-lg-9">
                              <span> - </span>
                              <span className="error-notif"></span>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-lg-3">
                              <label
                                htmlFor="inputUpdatedRent6"
                                className="col-form-label"
                              >
                                Updated Rent
                              </label>
                            </div>
                            <div className="col-lg-9">
                              <span> - </span>
                              <span className="error-notif"></span>
                            </div>
                          </div>
                        </form>
                      </div>
                      <button type="button" className="btn-custom">
                        Cancel
                      </button>
                      <button type="button" className="btn-custom-save">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              {/* Akhir Content */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AddCar;
