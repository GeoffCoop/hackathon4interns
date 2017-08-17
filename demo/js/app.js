var apiKey = "45940892";
var sessionId = "1_MX40NTk0MDg5Mn5-MTUwMzAwMTQ0NjI1NX5OSDlCT0xhb2tYVC9xcS9FRGxLazVRWFp-UH4";
var token = "T1==cGFydG5lcl9pZD00NTk0MDg5MiZzaWc9ZTQzNzAyODNhODUyODFkMGJmNzFlNDJjYTc4OTMxNjU0MzE4NDQzYTpzZXNzaW9uX2lkPTFfTVg0ME5UazBNRGc1TW41LU1UVXdNekF3TVRRME5qSTFOWDVPU0RsQ1QweGhiMnRZVkM5eGNTOUZSR3hMYXpWUldGcC1VSDQmY3JlYXRlX3RpbWU9MTUwMzAwMTUxMSZub25jZT0wLjk0MDc1NTE0MjQzNjQ4MDgmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUwMzAyMzExMCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";
// (optional) add server code here
initializeSession();

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
      console.log("Error handle");
    alert(error.message);
  }
}

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
    session.on('streamCreated', function(event) {
        console.log('stream created');
      session.subscribe(event.stream, 'subscriber', {
        insertMode: 'append',
        width: '100%',
        height: '100%'
      }, handleError);
    });
  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
        console.log("publish");
      session.publish(publisher, handleError);
    }
  });
}