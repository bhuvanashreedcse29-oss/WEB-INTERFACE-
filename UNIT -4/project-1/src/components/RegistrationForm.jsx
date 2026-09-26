import { useState } from "react";
import "../App.css";

const initialForm = {
  username: "",
  aadhaarName: "",
  dob: "",
  gender: "",
  occupation: "",
  email: "",
  countryCode: "+91",
  mobile: "",
  city: "",
  pincode: "",
  password: "",
  confirmPassword: "",

  permanentAddress: "",
  permanentCity: "",
  permanentState: "",
  permanentPincode: "",

  temporaryAddress: "",
  temporaryCity: "",
  temporaryState: "",
  temporaryPincode: "",
};

function RegistrationForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState("");
  const [photoSize, setPhotoSize] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error while user is correcting the field
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSuccess("");
  };

  const handleMobileChange = (e) => {
    // Allow only numbers and maximum 10 digits
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);

    setForm((prev) => ({
      ...prev,
      mobile: value,
    }));

    setErrors((prev) => ({
      ...prev,
      mobile: "",
    }));
  };

  const handlePincodeChange = (e, fieldName) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);

    setForm((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [fieldName]: "",
    }));
  };

  const handleSameAddress = (e) => {
    const checked = e.target.checked;

    if (checked) {
      setForm((prev) => ({
        ...prev,

        temporaryAddress: prev.permanentAddress,
        temporaryCity: prev.permanentCity,
        temporaryState: prev.permanentState,
        temporaryPincode: prev.permanentPincode,
      }));
    } else {
      setForm((prev) => ({
        ...prev,

        temporaryAddress: "",
        temporaryCity: "",
        temporaryState: "",
        temporaryPincode: "",
      }));
    }

    setErrors((prev) => ({
      ...prev,
      temporaryAddress: "",
      temporaryCity: "",
      temporaryState: "",
      temporaryPincode: "",
    }));
  };

  const validatePhoto = (file) => {
    if (!file) {
      return "Photo is required.";
    }

    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

    if (!allowedTypes.includes(file.type)) {
      return "Please upload a JPG, JPEG, or PNG image.";
    }

    const sizeInKB = file.size / 1024;

    if (sizeInKB < 35) {
      return "Photo size must be at least 35 KB.";
    }

    if (sizeInKB > 50) {
      return "Photo size must not exceed 50 KB.";
    }

    return "";
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    setSuccess("");

    if (!file) {
      setPhoto(null);
      setPhotoPreview("");
      setPhotoSize("");
      return;
    }

    const sizeInKB = file.size / 1024;
    const photoError = validatePhoto(file);

    setPhoto(file);
    setPhotoSize(sizeInKB.toFixed(2));

    if (photoError) {
      setErrors((prev) => ({
        ...prev,
        photo: photoError,
      }));

      setPhotoPreview("");
      return;
    }

    setErrors((prev) => ({
      ...prev,
      photo: "",
    }));

    const imageURL = URL.createObjectURL(file);
    setPhotoPreview(imageURL);
  };

  const validateForm = () => {
    const newErrors = {};

    // Username
    if (!form.username.trim()) {
      newErrors.username = "Username is required.";
    } else if (!/^[A-Za-z ]+$/.test(form.username.trim())) {
      newErrors.username =
        "Username should contain only alphabets and spaces.";
    }

    // Aadhaar Name
    if (!form.aadhaarName.trim()) {
      newErrors.aadhaarName = "Aadhaar Name is required.";
    } else if (!/^[A-Za-z ]+$/.test(form.aadhaarName.trim())) {
      newErrors.aadhaarName =
        "Aadhaar Name should contain only alphabets and spaces.";
    } else if (form.username.trim() !== form.aadhaarName.trim()) {
      newErrors.aadhaarName =
        "Username and Aadhaar Name must be the same.";
    }

    // Email
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Mobile
    if (!form.mobile) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(form.mobile)) {
      newErrors.mobile =
        "Mobile number must contain exactly 10 digits.";
    }

    // Password
    if (!form.password) {
      newErrors.password = "Password is required.";
    } else {
      if (form.password.length < 8) {
        newErrors.password =
          "Password must contain at least 8 characters.";
      } else if (!/[A-Z]/.test(form.password)) {
        newErrors.password =
          "Password must contain at least one uppercase letter.";
      } else if (!/[a-z]/.test(form.password)) {
        newErrors.password =
          "Password must contain at least one lowercase letter.";
      } else if (!/[0-9]/.test(form.password)) {
        newErrors.password =
          "Password must contain at least one number.";
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(form.password)) {
        newErrors.password =
          "Password must contain at least one special character.";
      }
    }

    // Confirm password
    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    // Permanent Address
    if (!form.permanentAddress.trim()) {
      newErrors.permanentAddress = "Permanent address is required.";
    }

    if (!form.permanentCity.trim()) {
      newErrors.permanentCity = "Permanent city is required.";
    }

    if (!form.permanentState.trim()) {
      newErrors.permanentState = "Permanent state is required.";
    }

    if (!form.permanentPincode) {
      newErrors.permanentPincode = "Permanent pincode is required.";
    }

    // Temporary Address
    if (!form.temporaryAddress.trim()) {
      newErrors.temporaryAddress = "Temporary address is required.";
    }

    if (!form.temporaryCity.trim()) {
      newErrors.temporaryCity = "Temporary city is required.";
    }

    if (!form.temporaryState.trim()) {
      newErrors.temporaryState = "Temporary state is required.";
    }

    if (!form.temporaryPincode) {
      newErrors.temporaryPincode = "Temporary pincode is required.";
    }

    // Photo
    const photoError = validatePhoto(photo);

    if (photoError) {
      newErrors.photo = photoError;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess("");

    const isValid = validateForm();

    if (isValid) {
      setSuccess("Registration submitted successfully!");
    }
  };

  const handleReset = () => {
    setForm(initialForm);
    setErrors({});
    setPhoto(null);
    setPhotoPreview("");
    setPhotoSize("");
    setSuccess("");

    // Reset file input
    const fileInput = document.getElementById("photo");
    if (fileInput) {
      fileInput.value = "";
    }
  };

  return (
    <div className="page">
      <div className="form-container">

        <div className="form-header">
          <h1>User Registration Form</h1>
          <p>Advanced Form Validation</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>

          {/* PERSONAL INFORMATION */}
          <div className="section">
            <h2>Personal Information</h2>

            <div className="form-grid">

              <div className="form-group">
                <label>
                  Username <span>*</span>
                </label>

                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />

                {errors.username && (
                  <p className="error">{errors.username}</p>
                )}
              </div>

              <div className="form-group">
                <label>
                  Aadhaar Name <span>*</span>
                </label>

                <input
                  type="text"
                  name="aadhaarName"
                  value={form.aadhaarName}
                  onChange={handleChange}
                  placeholder="Enter Aadhaar name"
                />

                {errors.aadhaarName && (
                  <p className="error">{errors.aadhaarName}</p>
                )}
              </div>

              <div className="form-group">
                <label>Date of Birth (Optional)</label>

                <input
                  type="date"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Gender (Optional)</label>

                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">
                    Prefer not to say
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label>Occupation (Optional)</label>

                <select
                  name="occupation"
                  value={form.occupation}
                  onChange={handleChange}
                >
                  <option value="">Select Occupation</option>
                  <option value="Student">Student</option>
                  <option value="Employee">Employee</option>
                  <option value="Self-employed">
                    Self-employed
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

            </div>
          </div>

          {/* CONTACT INFORMATION */}
          <div className="section">
            <h2>Contact Information</h2>

            <div className="form-grid">

              <div className="form-group">
                <label>
                  Email <span>*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                />

                {errors.email && (
                  <p className="error">{errors.email}</p>
                )}
              </div>

              <div className="form-group">
                <label>
                  Country Code <span>*</span>
                </label>

                <select
                  name="countryCode"
                  value={form.countryCode}
                  onChange={handleChange}
                >
                  <option value="+91">+91 - India</option>
                  <option value="+1">+1 - USA</option>
                  <option value="+44">+44 - UK</option>
                  <option value="+61">+61 - Australia</option>
                  <option value="+81">+81 - Japan</option>
                </select>
              </div>

              <div className="form-group">
                <label>
                  Mobile Number <span>*</span>
                </label>

                <input
                  type="text"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleMobileChange}
                  placeholder="10 digit mobile number"
                  maxLength="10"
                />

                {errors.mobile && (
                  <p className="error">{errors.mobile}</p>
                )}
              </div>

              <div className="form-group">
                <label>City (Optional)</label>

                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                />
              </div>

              <div className="form-group">
                <label>Pincode (Optional)</label>

                <input
                  type="text"
                  name="pincode"
                  value={form.pincode}
                  onChange={(e) =>
                    handlePincodeChange(e, "pincode")
                  }
                  placeholder="6 digit pincode"
                  maxLength="6"
                />
              </div>

            </div>
          </div>

          {/* PASSWORD */}
          <div className="section">
            <h2>Password & Security</h2>

            <div className="form-grid">

              <div className="form-group">
                <label>
                  Password <span>*</span>
                </label>

                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter strong password"
                />

                {errors.password && (
                  <p className="error">{errors.password}</p>
                )}
              </div>

              <div className="form-group">
                <label>
                  Confirm Password <span>*</span>
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                />

                {errors.confirmPassword && (
                  <p className="error">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

            </div>

            <p className="password-info">
              Password must contain 8+ characters, uppercase,
              lowercase, number and special character.
            </p>
          </div>

          {/* ADDRESS */}
          <div className="section">
            <h2>Address Information</h2>

            <h3>Permanent Address *</h3>

            <div className="form-grid">

              <div className="form-group full">
                <label>Address Line *</label>

                <textarea
                  name="permanentAddress"
                  value={form.permanentAddress}
                  onChange={handleChange}
                  placeholder="Enter permanent address"
                />

                {errors.permanentAddress && (
                  <p className="error">
                    {errors.permanentAddress}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label>City *</label>

                <input
                  type="text"
                  name="permanentCity"
                  value={form.permanentCity}
                  onChange={handleChange}
                  placeholder="Enter city"
                />

                {errors.permanentCity && (
                  <p className="error">
                    {errors.permanentCity}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label>State *</label>

                <input
                  type="text"
                  name="permanentState"
                  value={form.permanentState}
                  onChange={handleChange}
                  placeholder="Enter state"
                />

                {errors.permanentState && (
                  <p className="error">
                    {errors.permanentState}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label>Pincode *</label>

                <input
                  type="text"
                  value={form.permanentPincode}
                  onChange={(e) =>
                    handlePincodeChange(
                      e,
                      "permanentPincode"
                    )
                  }
                  maxLength="6"
                  placeholder="Enter pincode"
                />

                {errors.permanentPincode && (
                  <p className="error">
                    {errors.permanentPincode}
                  </p>
                )}
              </div>

            </div>

            <div className="same-address">
              <input
                type="checkbox"
                id="sameAddress"
                onChange={handleSameAddress}
              />

              <label htmlFor="sameAddress">
                Temporary address is same as Permanent Address
              </label>
            </div>

            <h3>Temporary Address *</h3>

            <div className="form-grid">

              <div className="form-group full">
                <label>Address Line *</label>

                <textarea
                  name="temporaryAddress"
                  value={form.temporaryAddress}
                  onChange={handleChange}
                  placeholder="Enter temporary address"
                />

                {errors.temporaryAddress && (
                  <p className="error">
                    {errors.temporaryAddress}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label>City *</label>

                <input
                  type="text"
                  name="temporaryCity"
                  value={form.temporaryCity}
                  onChange={handleChange}
                  placeholder="Enter city"
                />

                {errors.temporaryCity && (
                  <p className="error">
                    {errors.temporaryCity}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label>State *</label>

                <input
                  type="text"
                  name="temporaryState"
                  value={form.temporaryState}
                  onChange={handleChange}
                  placeholder="Enter state"
                />

                {errors.temporaryState && (
                  <p className="error">
                    {errors.temporaryState}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label>Pincode *</label>

                <input
                  type="text"
                  value={form.temporaryPincode}
                  onChange={(e) =>
                    handlePincodeChange(
                      e,
                      "temporaryPincode"
                    )
                  }
                  maxLength="6"
                  placeholder="Enter pincode"
                />

                {errors.temporaryPincode && (
                  <p className="error">
                    {errors.temporaryPincode}
                  </p>
                )}
              </div>

            </div>
          </div>

          {/* PHOTO */}
          <div className="section">
            <h2>Profile Photo</h2>

            <div className="photo-box">

              <label htmlFor="photo">
                Profile Photo <span>*</span>
              </label>

              <input
                id="photo"
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={handlePhotoChange}
              />

              <p className="photo-info">
                Accepted formats: JPG, JPEG, PNG
                <br />
                Required size: <strong>35 KB – 50 KB</strong>
              </p>

              {photoSize && (
                <p className="file-size">
                  Selected file size: {photoSize} KB
                </p>
              )}

              {errors.photo && (
                <p className="error">{errors.photo}</p>
              )}

              {photoPreview && !errors.photo && (
                <div className="preview-container">
                  <img
                    src={photoPreview}
                    alt="Profile Preview"
                  />

                  <p>
                    <strong>{photo.name}</strong>
                  </p>

                  <p className="valid">
                    ✓ Photo is valid
                  </p>
                </div>
              )}

            </div>
          </div>

          {/* BUTTONS */}
          <div className="buttons">

            <button type="submit" className="submit-btn">
              Submit
            </button>

            <button
              type="button"
              className="reset-btn"
              onClick={handleReset}
            >
              Reset
            </button>

          </div>

          {success && (
            <div className="success">
              ✓ {success}
            </div>
          )}

        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;