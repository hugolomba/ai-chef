import loadingImg from '../images/loading.gif';

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>LOADING</p>
      <img
        src={loadingImg}
        alt="Loading Icon"
        className="loading-icon"
      />
      
    </div>
  );
}

