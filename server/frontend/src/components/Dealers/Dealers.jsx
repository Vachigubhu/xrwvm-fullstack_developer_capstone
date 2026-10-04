import React, { useState, useEffect } from 'react';
import "./Dealers.css";
import "../assets/style.css";
import Header from '../Header/Header';
import review_icon from "../assets/reviewicon.png";

const Dealers = () => {
  const [dealersList, setDealersList] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("All");

  const dealer_url = "/djangoapp/get_dealers";

  const filterDealers = async (state) => {
    const url =
      state === "All"
        ? dealer_url
        : `${dealer_url}/${encodeURIComponent(state)}`;

    const res = await fetch(url, {
      method: "GET"
    });

    const retobj = await res.json();

    if (retobj.status === 200) {
      setDealersList(Array.from(retobj.dealers));
      setSelectedState(state);
    }
  };

  const get_dealers = async () => {
    const res = await fetch(dealer_url, {
      method: "GET"
    });

    const retobj = await res.json();

    if (retobj.status === 200) {
      const all_dealers = Array.from(retobj.dealers);

      const stateList = all_dealers.map((dealer) => dealer.state);

      setStates(Array.from(new Set(stateList)));
      setDealersList(all_dealers);
    }
  };

  useEffect(() => {
    get_dealers();
  }, []);

  const isLoggedIn = sessionStorage.getItem("username") !== null;

  return (
    <div>
      <Header />

      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="mb-1">Dealerships</h2>
            <p className="text-muted mb-0">
              Find a dealership and explore customer reviews.
            </p>
          </div>

          <span className="badge bg-secondary">
            {dealersList.length} Dealers
          </span>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <label htmlFor="state" className="form-label mb-1">
              Filter by State
            </label>

            <select
              name="state"
              id="state"
              className="form-select"
              value={selectedState}
              onChange={(e) => filterDealers(e.target.value)}
            >
              <option value="All">All States</option>

              {states.map((state) => (
                <option value={state} key={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th>ID</th>
                <th>Dealer Name</th>
                <th>City</th>
                <th>Address</th>
                <th>Zip</th>
                <th>State</th>

                {isLoggedIn && (
                  <th>Review</th>
                )}
              </tr>
            </thead>

            <tbody>
              {dealersList.map((dealer) => (
                <tr key={dealer.id}>
                  <td>{dealer.id}</td>

                  <td>
                    <a
                      href={`/dealer/${dealer.id}`}
                      className="fw-semibold text-decoration-none"
                    >
                      {dealer.full_name}
                    </a>
                  </td>

                  <td>{dealer.city}</td>

                  <td>{dealer.address}</td>

                  <td>{dealer.zip}</td>

                  <td>{dealer.state}</td>

                  {isLoggedIn && (
                    <td>
                      <a
                        href={`/postreview/${dealer.id}`}
                        className="text-decoration-none"
                        title="Review this dealer"
                      >
                        <img
                          src={review_icon}
                          className="review_icon"
                          alt="Review"
                        />
                      </a>
                    </td>
                  )}
                </tr>
              ))}

              {dealersList.length === 0 && (
                <tr>
                  <td
                    colSpan={isLoggedIn ? 7 : 6}
                    className="text-center py-5"
                  >
                    No dealerships found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dealers;