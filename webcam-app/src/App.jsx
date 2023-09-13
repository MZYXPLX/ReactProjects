import { useState, useRef } from "react";
import Webcam from "react-webcam";
import PhotoCapture from "./components/PhotoCapture/PhotoCapture";
import "./App.css";
import { saveAs } from "file-saver";

const App = () => {
  const webcamRef = useRef(null);
  const [mediaBlob, setMediaBlob] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recording, setRecording] = useState(false);
  const [displayMedia, setDisplayMedia] = useState(false);
  const [filterStyle, setFilterStyle] = useState({}); // Add filterStyle state

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setMediaBlob(imageSrc);
  };

  const startRecording = () => {
    const recorder = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    let chunks = [];

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    };

    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      setMediaBlob(blob);
    };

    recorder.start();
    setMediaRecorder(recorder);
    setRecording(true);
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };
  const handleDownloadMedia = () => {
    if (mediaBlob) {
      let blob = mediaBlob;
      if (typeof mediaBlob === "string") {
        // Convert base64 string to a Blob (for images)
        const byteCharacters = atob(mediaBlob.split(",")[1]);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        blob = new Blob([new Uint8Array(byteNumbers)], { type: "image/png" });
      }

      saveAs(blob, `media.${blob.type.split("/")[1]}`);
    }
  };

  const handleDisplayMedia = () => {
    setDisplayMedia(true);
  };

  const handleCloseMedia = () => {
    setDisplayMedia(false);
  };

  // Function to toggle filter styles
  const toggleFilterStyle = () => {
    // Define different filter styles
    const filterStyles = [
      {}, // No filter (default)
      { filter: "grayscale(100%)" }, // Grayscale filter
      { filter: "sepia(100%)" }, // Sepia filter
      { filter: "invert(100%)" }, // Invert filter
    ];

    // Find the current style index and calculate the next index
    const currentIndex = filterStyles.findIndex(
      (style) => style.filter === filterStyle.filter
    );
    const nextIndex = (currentIndex + 1) % filterStyles.length;

    // Set the next filter style
    setFilterStyle(filterStyles[nextIndex]);
  };

  return (
    <div className="App">
      <h1>Webcam App</h1>

      <main>
        <Webcam
          className="webcam div1"
          audio={false}
          ref={webcamRef}
          style={filterStyle} // Apply the selected filter style
        />
        <div className="div2">
          <div className="record">
            <PhotoCapture capture={capture} />
            <button onClick={!recording ? startRecording : stopRecording}>
              <span
                className={`material-symbols-outlined ${
                  recording ? "red" : ""
                }`}>
                videocam
              </span>
            </button>
            <button onClick={toggleFilterStyle}>
              {" "}
              {/* Toggle filter style */}
              <span className="material-symbols-outlined">palette</span>
            </button>
            {mediaBlob && !displayMedia && (
              <button onClick={handleDisplayMedia}>
                <span className="material-symbols-outlined">save</span>
              </button>
            )}
          </div>

          {displayMedia && (
            <div className="mediaBlob">
              <button
                onClick={handleDownloadMedia}
                className="handleCloseMedia">
                <span className="material-symbols-outlined">download</span>
              </button>
              {typeof mediaBlob === "string" ? (
                <img src={mediaBlob} alt="Captured" />
              ) : (
                <video src={URL.createObjectURL(mediaBlob)} controls />
              )}
              <button onClick={handleCloseMedia} className="handleCloseMedia">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
