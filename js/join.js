function joinMeeting() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    let linkId = document.getElementById("meetingId");

    script.addEventListener("load", function (event) {
      //Get URL query parameters
      const url = new URLSearchParams(window.location.search);
      const config = {
        name: "Demo User",
        meetingId: linkId.value,
        apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",  // Place Your API key here

        containerId: null,

        micEnabled: true,
        webcamEnabled: true,
        participantCanToggleSelfWebcam: true,
        participantCanToggleSelfMic: true,

        chatEnabled: true,
        raiseHandEnabled: true,
        screenShareEnabled: true,
        linkShareEnabled: true,
        whiteboardEnabled: true,

        // ...
        recordingEnabled: true,
        // recordingWebhookUrl: "index.html",
        autoStartRecording: true,
        permissions: {
          // ...
          toggleRecording: true, // Can toggle meeting recording
          askToJoin: true,
          toggleParticipantWebcam: false,
          toggleParticipantMic: false,
          toggleParticipantScreenshare: false,
          removeParticipant: false,
          endMeeting: false,
          drawOnWhiteboard: true,
          toggleWhiteboard: true,
          canCreatePoll: true,
        },
        // ...

        joinScreen: {
            visible: true,
            title: "linkOne",
            meetingUrl: linkId.value,
          },

        brandingEnabled: true,
        brandLogoURL: "images/logo.png",
        brandName: "Room#1",
        poweredBy: false,

        theme: "DARK", // DARK || LIGHT || DEFAULT

        pin: {
          allowed: true,
          layout: "SPOTLIGHT",
        },

        leftScreen: {
          actionButton: {
            label: "linkOne",
            href: "index.html",
          },
        },

        /*
  
       Other Feature Properties
        
        */
      };
      

      const meeting = new VideoSDKMeeting();
      meeting.init(config);
    });

    // script.src = "package.js";
    script.src = "https://sdk.videosdk.live/rtc-js-prebuilt/0.3.23/rtc-js-prebuilt.js";
    document.getElementsByTagName("head")[0].appendChild(script);
  }