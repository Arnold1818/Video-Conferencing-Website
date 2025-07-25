function newMeeting() {
    var script = document.createElement("script");
    script.type = "text/javascript";


    let meetingId = 'xxxxyxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    // window.location.href="http://" + window.location.host + "?meetingId=" + meetingId;



    script.addEventListener("load", function (event) {
      //Get URL query parameters
      const url = new URLSearchParams(window.location.search);
      const config = {
        name: "Demo User",
        meetingId: meetingId,
        apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",         // place your api key here

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
        

        joinScreen: {
          visible: true,
          title: "linkOne",
          meetingUrl: meetingId,
        },

        // ...
        recordingEnabled: true,
        // recordingWebhookUrl: "index.html",
        autoStartRecording: true,
        permissions: {
          // ...
          toggleRecording: true, // Can toggle meeting recording
          askToJoin: false,
          toggleParticipantWebcam: true,
          toggleParticipantMic: true,
          toggleParticipantScreenshare: true,
          removeParticipant: true,
          endMeeting: true,
          drawOnWhiteboard: true,
          toggleWhiteboard: true,
          canCreatePoll: true,
        },
        // ...

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

    // script.src = "package1.js";
    script.src = "https://sdk.videosdk.live/rtc-js-prebuilt/0.3.23/rtc-js-prebuilt.js";
    document.getElementsByTagName("head")[0].appendChild(script);
  }