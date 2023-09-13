import "./PhotoCapture.css";
const PhotoCapture = ({ capture }) => {
  return (
    <div className="ScreenShot">
      <button onClick={capture}>
        <span className="material-symbols-outlined">photo_camera</span>
      </button>
    </div>
  );
};

export default PhotoCapture;
