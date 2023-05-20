import React, { useState } from "react";
const CarSellAppForm = () => {
  const [carData, setCarData] = useState({
    carMake: "",
    carModel: "",
    year: "",
    mileage: "",
    condition: "",
    features: [],
    transmission: "",
    priceRange: 0,
    contactNumber: "",
  });
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedFeatures = [...carData.features];
    if (checked) {
      updatedFeatures.push(value);
    } else {
      updatedFeatures = updatedFeatures.filter((feature) => feature !== value);
    }
    setCarData((prevState) => ({
      ...prevState,
      features: updatedFeatures,
    }));
  };
  const handleSliderChange = (e) => {
    const { value } = e.target;
    setCarData((prevState) => ({
      ...prevState,
      priceRange: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      console.log(carData);
      // Perform form submission logic here
    }
  };
  const validateForm = () => {
    const errors = {};
    if (!carData.carMake.trim()) {
      errors.carMake = "Car Make is required";
    }
    if (!carData.carModel.trim()) {
      errors.carModel = "Car Model is required";
    }
    if (!carData.year.trim()) {
      errors.year = "Year is required";
    }
    if (!carData.mileage.trim()) {
      errors.mileage = "Mileage is required";
    }
    if (!carData.condition) {
      errors.condition = "Condition is required";
    }
    if (carData.features.length === 0) {
      errors.features = "At least one feature must be selected";
    }
    if (!carData.transmission) {
      errors.transmission = "Transmission is required";
    }
    if (!carData.priceRange) {
      errors.priceRange = "Price Range is required";
    }
    if (!carData.contactNumber.trim()) {
      errors.contactNumber = "Contact Number is required";
    }
    return errors;
  };
  return (
    <div className="container small-container">
      <form onSubmit={handleSubmit} className="form py-4 theform">
        <h2 className="p-2 border-bottom shadow bg-body-tertiary rounded">Buy and Sell Cars everywhere</h2>
        <div className="form-group">
          <label className="form-label">Car Make:</label>
          <input
            className="form-control"
            type="text"
            name="carMake"
            value={carData.carMake}
            onChange={handleInputChange}
          />
          {errors.carMake && <div className="error text-danger">{errors.carMake}</div>}
        </div>
        <div className="form-group">
          <label className="form-label">Car Model:</label>
          <input
            className="form-control"
            type="text"
            name="carModel"
            value={carData.carModel}
            onChange={handleInputChange}
          />
          {errors.carModel && <div className="error text-danger">{errors.carModel}</div>}
        </div>
        <div className="form-group">
          <label className="form-label">Year:</label>
          <input
            className="form-control"
            type="date"
            name="year"
            value={carData.year}
            onChange={handleInputChange}
          />
          {errors.year && <div className="error text-danger">{errors.year}</div>}
        </div>
        <div className="form-group">
          <label className="form-label">Mileage:</label>
          <input
            className="form-control"
            type="number"
            name="mileage"
            value={carData.mileage}
            onChange={handleInputChange}
          />
          {errors.mileage && <div className="error text-danger">{errors.mileage}</div>}
        </div>
        <h6>Condition:</h6>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="condition"
            value="Excellent"
            checked={carData.condition === "Excellent"}
            onChange={handleInputChange}
          />
          <label htmlFor="condition" className="form-check-label">
            Excellent
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="condition"
            value="Good"
            checked={carData.condition === "Good"}
            onChange={handleInputChange}
          />
          <label htmlFor="condition" className="form-check-label">
            good
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="condition"
            value="Fair"
            checked={carData.condition === "Fair"}
            onChange={handleInputChange}
          />
          <label htmlFor="condition" className="form-check-label">
            Fair
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
          className="form-check-input"
            type="radio"
            name="condition"
            value="Poor"
            checked={carData.condition === "Poor"}
            onChange={handleInputChange}
          />
          <label htmlFor="condition" className="form-check-label">
            Poor
          </label>
        </div>
        {errors.condition && <div className="error text-danger">{errors.condition}</div>}

          <h6 className="fh6">Features:</h6>
        <div className="form-group">
            <div className="form-check form-check-inline">
            <input
            className="form-check-input"
              type="checkbox"
              name="features"
              value="Air Conditioning"
              checked={carData.features.includes("Air Conditioning")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="features" className="form-check-label">Air Conditioning</label>
            </div>
            <div className="form-check form-check-inline">     
            <input
            className="form-check-input"
              type="checkbox"
              name="features"
              value="Power Steering"
              checked={carData.features.includes("Power Steering")}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="features" className="form-check-label">Power Steering</label>
            </div>
            <div className="form-check form-check-inline">
              <input
              className="form-check-input"
                type="checkbox"
                name="features"
                value="Power Windows"
                checked={carData.features.includes("Power Windows")}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="features" className="form-check-label">Power Windows</label>
            </div>
            <div className="form-check form-check-inline">
              <input
              className="form-check-input"
                type="checkbox"
                name="features"
                value="ABS"
                checked={carData.features.includes("ABS")}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="features" className="form-check-label">ABS</label>
            </div>
            <div className="form-check form-check-inline">
              <input
              className="form-check-input"
                type="checkbox"
                name="features"
                value="Navigation System"
                checked={carData.features.includes("Navigation System")}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="features" className="form-check-label">Navigation System</label>
            </div>
            {errors.features && <div className="error text-danger">{errors.features}</div>}
        </div>
          <h6>Transmission:</h6>
        <div>
          <select
          className="form-select"
            name="transmission"
            value={carData.transmission}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
          {errors.transmission && (
            <div className="error text-danger">{errors.transmission}</div>
          )}
        </div>
        <div>
          <label className="form-label">
            Price Range:{"  "}{carData.priceRange}
            <input
            className="form-range"
              type="range"
              name="priceRange"
              min="150000"
              max="1000000000"
              value={carData.priceRange}
              onChange={handleSliderChange}
            />
            {errors.priceRange && (
              <div className="error text-danger">{errors.priceRange}</div>
            )}
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">Contact Number:</label>
          <input
          className="form-control"
            type="text"
            name="contactNumber"
            value={carData.contactNumber}
            onChange={handleInputChange}
          />
          {errors.contactNumber && (
            <div className="error text-danger">{errors.contactNumber}</div>
          )}
        </div>
        <div className="d-flex mt-3 flex-column">
          <button className="btn btn-success w-full text-center" id="submit" type="submit">
            Sell
          </button>
        </div>
      </form>
    </div>
  );
};
export default CarSellAppForm;
