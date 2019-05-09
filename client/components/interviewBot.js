import React from 'react'

export const InterviewBot = () => {
  return (
    <div id="botCard">
      <iframe
        id="bot"
        allow="microphone;"
        width="300"
        height="500"
        src="https://console.dialogflow.com/api-client/demo/embedded/b424a93f-8fc2-48b6-a21c-d393c31e5fd9"
        draggable="true"
      />
    </div>
  )
}
