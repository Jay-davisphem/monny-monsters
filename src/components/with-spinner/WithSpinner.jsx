import "./with-spinner.css";

const WithSpinner =
  (Commponent) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="spinner-overlay">
        <div className="spinner-container"></div>
      </div>
    ) : (
      <Commponent {...otherProps} />
    );
  };

export default WithSpinner;
