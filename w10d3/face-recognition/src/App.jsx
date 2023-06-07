import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Webcam from "react-webcam";

// import { someFunction } from "./helpers/dataHelpers";
import * as dataHelpers from "./helpers/dataHelpers";
// dataHelpers.someFunction()

import * as vision from "@mediapipe/tasks-vision";
// import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

const initializeModel = async (setFaceLandmarker) => {
  const filesetResolver = await vision.FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
  );
  const faceLandmarker = await vision.FaceLandmarker.createFromOptions(filesetResolver, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
      delegate: "GPU",
    },
    outputFaceBlendshapes: true,
    runningMode: "VIDEO",
    numFaces: 1,
  });

  setFaceLandmarker(faceLandmarker);
};

const runModelPoints = (webcamRef, faceLandmarker, setFacePoints) => {
  let lastVideoTime = -1;
  let nowInMs = Date.now();
  const video = webcamRef.current.video;

  if (video.currentTime !== lastVideoTime) {
    const faceLandmarkerResult = faceLandmarker.detectForVideo(video, nowInMs);
    console.log(faceLandmarkerResult);
    setFacePoints(faceLandmarkerResult.faceLandmarks[0]);
    lastVideoTime = video.currentTime;
  }

  setTimeout(() => {
    requestAnimationFrame(() => {
      runModel(webcamRef, faceLandmarker, setFacePoints);
    });
  }, 1000 / 5);
};

const runModelLM = (webcamRef, faceLandmarker, setMouthOpen) => {
  let lastVideoTime = -1;
  let nowInMs = Date.now();
  const video = webcamRef.current.video;

  if (video.currentTime !== lastVideoTime) {
    const faceLandmarkerResult = faceLandmarker.detectForVideo(video, nowInMs);

    if (faceLandmarkerResult.faceBlendshapes[0]) {
      const jawOpen = faceLandmarkerResult.faceBlendshapes[0].categories.find(
        (shape) => shape.categoryName === "jawOpen"
      );

      console.log(jawOpen.score);
      setMouthOpen(jawOpen.score);
    }
    lastVideoTime = video.currentTime;
  }

  setTimeout(() => {
    requestAnimationFrame(() => {
      runModelLM(webcamRef, faceLandmarker, setMouthOpen);
    });
  }, 1000 / 24);
};

function App() {
  const [isWebcamReady, setIsWebcamReady] = useState(false);
  const [faceLandmarker, setFaceLandmarker] = useState(null);
  const [isScanning, setIsScanning] = useState(null);
  const [facePoints, setFacePoints] = useState([]);
  const [mouthOpen, setMouthOpen] = useState(0);
  const webcamRef = useRef();
  const divRef = useRef();

  const videoConstraints = {
    width: 640,
    height: 360,
    facingMode: "user",
  };

  const showRef = () => {
    console.log(webcamRef.current);
  };

  const initModel = () => initializeModel(setFaceLandmarker);
  const scanFace = () => {
    runModelPoints(webcamRef, faceLandmarker, setFacePoints);
    setIsScanning(true);
  };
  const scanFaceMouth = () => {
    runModelLM(webcamRef, faceLandmarker, setMouthOpen);
    setIsScanning(true);
  };

  const faceMatrixStyleYeah = {
    width: 1280,
    height: 720,
    position: "relative",
    background: "#000",
  };

  return (
    <>
      <div>
        <Webcam
          // style={{ display: "none" }}
          ref={webcamRef}
          videoConstraints={videoConstraints}
          onUserMedia={() => setIsWebcamReady(true)}
        />
      </div>
      <div className="bob" ref={divRef}>
        {!isWebcamReady && <button>Webcam Loading</button>}
        {isWebcamReady && <button onClick={showRef}>Webcam Ready</button>}
        {!faceLandmarker && (
          <button onClick={initModel}>Load FaceLandmarker Model</button>
        )}
        {faceLandmarker && <button>FaceLandmaker Model Loaded</button>}
        {!isScanning && <button onClick={scanFaceMouth}>Start scanning for faces</button>}
        {isScanning && <button>Scanning for faces...</button>}
      </div>
      {/* <div style={faceMatrixStyleYeah}>
        {facePoints &&
          facePoints.map((point) => (
            <div
              style={{
                position: "absolute",
                top: point.y * 720,
                left: point.x * 1280,
                width: 2,
                height: 2,
                background: "#BADA55",
              }}
            />
          ))}
      </div> */}

      <div style={faceMatrixStyleYeah}>
        <div
          style={{
            position: "absolute",
            width: 50,
            height: 50,
            background: "#fff",
            top: 100,
            left: 500,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            width: 50,
            height: 50,
            background: "#fff",
            top: 100,
            left: 700,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            width: 50,
            height: 50,
            background: "#fff",
            top: 200,
            left: 600,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            width: 200,
            height: 0 + mouthOpen * 200,
            // background: "#fff",
            border: "25px solid #fff",
            top: 300,
            left: 500,
          }}
        ></div>
      </div>
    </>
  );
}

export default App;
