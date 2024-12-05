import { useState } from 'react';

const AddVisaForm = () => {
  const [formData, setFormData] = useState({
    user:"Joy chowdhury",
    countryImage: 'https://i.ibb.co/xyz/your-image.jpg', // placeholder URL
    countryName: '',
    visaType: 'Tourist visa',
    processingTime: '',
    requiredDocuments: [],
    description: '',
    ageRestriction: '',
    fee: '',
    validity: '',
    applicationMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    
    setFormData((prevState) => {
      const requiredDocuments = prevState.requiredDocuments.includes(value)
        ? prevState.requiredDocuments.filter((doc) => doc !== value)
        : [...prevState.requiredDocuments, value];
      return { ...prevState, requiredDocuments };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Here you can send the formData to your backend or handle it as needed
  };

  return (
    <div style={styles.formContainer}>
      <h2>Add Visa</h2>
      <form onSubmit={handleSubmit}>
        {/* Country Image */}
        <div style={styles.formGroup}>
          <label htmlFor="countryImage">Country Image URL</label>
          <input
            type="text"
            id="countryImage"
            name="countryImage"
            value={formData.countryImage}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Country Name */}
        <div style={styles.formGroup}>
          <label htmlFor="countryName">Country Name</label>
          <input
            type="text"
            id="countryName"
            name="countryName"
            value={formData.countryName}
            onChange={handleChange}
            placeholder="Enter country name"
            required
            style={styles.input}
          />
        </div>

        {/* Visa Type */}
        <div style={styles.formGroup}>
          <label htmlFor="visaType">Visa Type</label>
          <select
            id="visaType"
            name="visaType"
            value={formData.visaType}
            onChange={handleChange}
            required
            style={styles.input}
          >
            <option value="Tourist visa">Tourist visa</option>
            <option value="Student visa">Student visa</option>
            <option value="Official visa">Official visa</option>
            <option value="Business visa">Business visa</option>
          </select>
        </div>

        {/* Processing Time */}
        <div style={styles.formGroup}>
          <label htmlFor="processingTime">Processing Time (in days)</label>
          <input
            type="number"
            id="processingTime"
            name="processingTime"
            value={formData.processingTime}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Required Documents (Checkboxes) */}
        <div style={styles.formGroup}>
          <label>Required Documents</label>
          <div style={styles.checkboxGroup}>
            <label>
              <input
                type="checkbox"
                value="Valid passport"
                checked={formData.requiredDocuments.includes('Valid passport')}
                onChange={handleCheckboxChange}
              />
              Valid passport
            </label>
            <label>
              <input
                type="checkbox"
                value="Visa application form"
                checked={formData.requiredDocuments.includes('Visa application form')}
                onChange={handleCheckboxChange}
              />
              Visa application form
            </label>
            <label>
              <input
                type="checkbox"
                value="Recent passport-sized photograph"
                checked={formData.requiredDocuments.includes('Recent passport-sized photograph')}
                onChange={handleCheckboxChange}
              />
              Recent passport-sized photograph
            </label>
          </div>
        </div>

        {/* Description */}
        <div style={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter visa description"
            required
            style={styles.input}
          />
        </div>

        {/* Age Restriction */}
        <div style={styles.formGroup}>
          <label htmlFor="ageRestriction">Age Restriction (optional)</label>
          <input
            type="number"
            id="ageRestriction"
            name="ageRestriction"
            value={formData.ageRestriction}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        {/* Fee */}
        <div style={styles.formGroup}>
          <label htmlFor="fee">Fee</label>
          <input
            type="number"
            id="fee"
            name="fee"
            value={formData.fee}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Validity */}
        <div style={styles.formGroup}>
          <label htmlFor="validity">Validity</label>
          <input
            type="text"
            id="validity"
            name="validity"
            value={formData.validity}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Application Method */}
        <div style={styles.formGroup}>
          <label htmlFor="applicationMethod">Application Method</label>
          <input
            type="text"
            id="applicationMethod"
            name="applicationMethod"
            value={formData.applicationMethod}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" style={styles.submitBtn}>
          Add Visa
        </button>
      </form>
    </div>
  );
};

const styles = {
  formContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '80%',
    margin: '0 auto',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  checkboxGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  submitBtn: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
  },
};

export default AddVisaForm;
