import RTCMultiConnection from "rtcmulticonnection-react-js";

export default function LiveVideo() {
  const openRoom = () => {
    // this.disabled = true;
    connection.open("zaksim");
  };

  const joinRoom = () => {
    connection.join("zaksim");
  };

  const openOrJoinRoom = () => {};

  // ......................................................
  // ..................RTCMultiConnection Code.............
  // ......................................................
  var connection = new RTCMultiConnection();
  connection.socketURL = "https://rtcmulticonnection.herokuapp.com:443/";
  connection.enableFileSharing = true; // by default, it is "false".
  connection.session = {
    audio: true,
    video: true,
    data: true,
  };
  connection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: true,
    OfferToReceiveVideo: true,
  };
  connection.onstream = function (event) {
    document.body.appendChild(event.mediaElement);
  };
  // connection.onmessage = appendDIV;
  // connection.filesContainer = document.getElementById("file-container");
  // connection.onopen = function () {
  //   document.getElementById("share-file").disabled = false;
  //   document.getElementById("input-text-chat").disabled = false;
  // };

  return (
    <div>
      <h1>라이브 작심</h1>

      <script src="https://rtcmulticonnection.herokuapp.com/dist/RTCMultiConnection.js"></script>
      <script src="https://cdn.webrtc-experiment.com/FileBufferReader.js"></script>

      {/* <!-- socket.io for signaling --> */}
      <script src="https://rtcmulticonnection.herokuapp.com/socket.io/socket.io.js"></script>

      <hr />
      <input type="text" id="room-id" value="zaksim" />
      <button id="open-room" onClick={openRoom}>
        Open Room
      </button>
      <button id="join-room" onClick={joinRoom}>
        Join Room
      </button>
      <button id="open-or-join-room" onClick={openOrJoinRoom}>
        Auto Open Or Join Room
      </button>
      <hr />

      {/* <div id="chat-container">
        <input
          type="text"
          id="input-text-chat"
          placeholder="Enter Text Chat"
          disabled
        />
        <button id="share-file" disabled>
          Share File
        </button>
        <br />
        <div id="file-container"></div>
        <div class="chat-output"></div>
      </div> */}
    </div>
  );
}
