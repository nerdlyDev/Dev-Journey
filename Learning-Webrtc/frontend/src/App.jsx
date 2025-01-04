import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PhoneIcon from "@mui/icons-material/Phone";
import { useEffect, useState, useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Peer from "peerjs";
import io from "socket.io-client";
import "./App.css";

// Establish a connection to the Socket.IO server
const socket = io.connect("http://localhost:4000");

function App() {
  // State variables to manage application state
  const [me, setMe] = useState("");
  const [stream, setStream] = useState(null);
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState(null);
  const [callAccepted, setCallAccepted] = useState(false);
  const [idToCall, setIdToCall] = useState("");
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState("");
  const [remoteStream, setRemoteStream] = useState(null); // New state for remote stream

  // Refs to manage video elements and peer connection
  const myVideo = useRef(null);
  const userVideo = useRef(null); // Changed from empty string to null
  const connectionRef = useRef(null);
  const peerInstance = useRef(null);

  // Effect to get user media (camera and microphone)
  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        setStream(mediaStream);

        // Only set srcObject if both ref and stream are available
        if (myVideo.current && mediaStream) {
          myVideo.current.srcObject = mediaStream;
        }
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    getUserMedia();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  // Effect to initialize PeerJS and handle incoming calls
  useEffect(() => {
    if (!stream) return; // Don't initialize peer if stream is not ready

    const peer = new Peer(undefined, {
      host: "localhost",
      port: 3001,
      path: "/peerjs",
      debug: 3, // Enable debugging
    });

    peer.on("open", (id) => {
      console.log("My peer ID is:", id);
      setMe(id);
    });

    peer.on("error", (error) => {
      console.error("PeerJS error:", error);
    });

    // Handle incoming calls
    peer.on("call", (incomingCall) => {
      setReceivingCall(true);
      setCaller(incomingCall.peer);

      incomingCall.answer(stream);

      incomingCall.on("stream", (incomingStream) => {
        console.log("Received remote stream:", incomingStream);
        setRemoteStream(incomingStream);

        if (userVideo.current) {
          userVideo.current.srcObject = incomingStream;
        }
      });

      connectionRef.current = incomingCall;
    });

    peerInstance.current = peer;

    return () => {
      peer.destroy();
    };
  }, [stream]);

  // Effect to handle remote stream
  useEffect(() => {
    if (userVideo.current && remoteStream) {
      userVideo.current.srcObject = remoteStream;
    }
  }, [remoteStream, userVideo]);

  const callUser = (id) => {
    if (!peerInstance.current || !stream) {
      console.error("Peer or stream not initialized");
      return;
    }

    const call = peerInstance.current.call(id, stream);

    call.on("stream", (userStream) => {
      setRemoteStream(userStream);
    });

    call.on("error", (error) => {
      console.error("Call error:", error);
    });

    connectionRef.current = call;
  };

  const answerCall = () => {
    setCallAccepted(true);

    if (!peerInstance.current || !stream) {
      console.error("Peer or stream not initialized");
      return;
    }

    const call = peerInstance.current.call(caller, stream);

    call.on("stream", (userStream) => {
      setRemoteStream(userStream);
    });

    connectionRef.current = call;
  };

  const leaveCall = () => {
    setCallEnded(true);
    setRemoteStream(null);

    if (connectionRef.current) {
      connectionRef.current.close();
    }

    if (userVideo.current) {
      userVideo.current.srcObject = null;
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "#fff" }}>SigmaRoom</h1>
      <div className="container">
        <div className="video-container">
          <div className="video">
            {stream && (
              <>
                <video
                  playsInline
                  muted
                  ref={myVideo}
                  autoPlay
                  style={{ width: "100%", height: "100%" }}
                />
                <div style={{ textAlign: "center", color: "#fff" }}>
                  {name || "You"}
                </div>
              </>
            )}
          </div>
          <div className="video">
            {callAccepted && !callEnded && (
              <>
                <video
                  playsInline
                  ref={userVideo}
                  autoPlay
                  style={{ width: "100%", height: "100%" }}
                />
                <div style={{ textAlign: "center", color: "#fff" }}>
                  {caller || "Remote User"}
                </div>
              </>
            )}
          </div>
        </div>
        {/* Rest of your UI components remain the same */}
        <div className="myId">
          <TextField
            id="filled-basic"
            label="Name"
            variant="filled"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginBottom: "20px" }}
          />
          <CopyToClipboard text={me} style={{ marginBottom: "2rem" }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AssignmentIcon fontSize="large" />}>
              Copy ID
            </Button>
          </CopyToClipboard>
          <TextField
            id="filled-basic"
            label="ID to call"
            variant="filled"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          />
          <div className="call-button">
            {callAccepted && !callEnded ? (
              <Button variant="contained" color="secondary" onClick={leaveCall}>
                End Call
              </Button>
            ) : (
              <IconButton
                color="primary"
                aria-label="call"
                onClick={() => callUser(idToCall)}>
                <PhoneIcon fontSize="large" />
              </IconButton>
            )}
          </div>
        </div>
        <div>
          {receivingCall && !callAccepted && (
            <div className="caller">
              <h1>{name || "Someone"} is calling...</h1>
              <Button variant="contained" color="primary" onClick={answerCall}>
                Answer
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
