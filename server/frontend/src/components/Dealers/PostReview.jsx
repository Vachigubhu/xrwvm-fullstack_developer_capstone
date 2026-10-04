import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./Dealers.css";
import "../assets/style.css";
import Header from '../Header/Header';

const PostReview = () => {
  const [dealer, setDealer] = useState({});
  const [review, setReview] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [date, setDate] = useState("");
  const [carmodels, setCarmodels] = useState([]);

  let curr_url = window.location.href;
  let root_url = curr_url.substring(0, curr_url.indexOf("postreview"));
  let params = useParams();
  let id = params.id;

  let dealer_url = root_url + `djangoapp/dealer/${id}`;
  let review_url = root_url + `djangoapp/add_review`;
  let carmodels_url = root_url + `djangoapp/get_cars`;

  const postreview = async () => {
    let name =
      sessionStorage.getItem("firstname") +
      " " +
      sessionStorage.getItem("lastname");

    if (name.includes("null")) {
      name = sessionStorage.getItem("username");
    }

    if (!model || review === "" || date === "" || year === "") {
      alert("All details are mandatory");
      return;
    }

    let model_split = model.split(" ");
    let make_chosen = model_split[0];
    let model_chosen = model_split[1];

    let jsoninput = JSON.stringify({
      name: name,
      dealership: id,
      review: review,
      purchase: true,
      purchase_date: date,
      car_make: make_chosen,
      car_model: model_chosen,
      car_year: year,
    });

    const res = await fetch(review_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsoninput,
    });

    const json = await res.json();

    if (json.status === 200) {
      window.location.href =
        window.location.origin + "/dealer/" + id;
    }
  };

  const get_dealer = async () => {
    const res = await fetch(dealer_url, {
      method: "GET",
    });

    const retobj = await res.json();

    if (retobj.status === 200) {
      let dealerobjs = Array.from(retobj.dealer);

      if (dealerobjs.length > 0) {
        setDealer(dealerobjs[0]);
      }
    }
  };

  const get_cars = async () => {
    const res = await fetch(carmodels_url, {
      method: "GET",
    });

    const retobj = await res.json();

    let carmodelsarr = Array.from(retobj.CarModels);
    setCarmodels(carmodelsarr);
  };

  useEffect(() => {
    get_dealer();
    get_cars();
  }, []);

  return (
    <div>
      <Header />

      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">

            <div className="mb-4">
              <div className="text-muted small mb-2">
                SHARE YOUR EXPERIENCE
              </div>

              <h1 className="fw-bold mb-2">
                Review {dealer.full_name}
              </h1>

              <p className="text-muted">
                Tell other customers about your experience with this
                dealership.
              </p>
            </div>

            <div className="card shadow-sm border-0 p-4">

              <div className="mb-4">
                <label
                  htmlFor="review"
                  className="form-label fw-semibold"
                >
                  Your Review
                </label>

                <textarea
                  id="review"
                  className="form-control"
                  rows="6"
                  placeholder="What was your experience like?"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                />

                <div className="form-text">
                  Be honest and helpful. Your review can help other
                  customers make better decisions.
                </div>
              </div>

              <div className="row g-3">

                <div className="col-md-6">
                  <label
                    htmlFor="purchaseDate"
                    className="form-label fw-semibold"
                  >
                    Purchase Date
                  </label>

                  <input
                    id="purchaseDate"
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div className="col-md-6">
                  <label
                    htmlFor="year"
                    className="form-label fw-semibold"
                  >
                    Car Year
                  </label>

                  <input
                    id="year"
                    type="number"
                    className="form-control"
                    placeholder="e.g. 2022"
                    min="2015"
                    max="2023"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>

                <div className="col-12">
                  <label
                    htmlFor="cars"
                    className="form-label fw-semibold"
                  >
                    Car Make & Model
                  </label>

                  <select
                    name="cars"
                    id="cars"
                    className="form-select"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                  >
                    <option value="" disabled>
                      Choose your car
                    </option>

                    {carmodels.map((carmodel, index) => (
                      <option
                        key={index}
                        value={
                          carmodel.CarMake +
                          " " +
                          carmodel.CarModel
                        }
                      >
                        {carmodel.CarMake} {carmodel.CarModel}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              <hr className="my-4" />

              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-dark px-4 py-2"
                  onClick={postreview}
                >
                  Post Review
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PostReview;