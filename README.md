Electron Video Recording App

#Introduction:
This is a video recording app which allows user to record a video by using the built-in camera from their laptop. The user can click "Start Recording" to start the recording process, and during the recording, the user can also choose to restart which will erase the data that the user recorded so far. And after clicking "Stop Recording", the user is able to playback the video just recorded and also download it by clicking "Download" button.

#Get start:
1. Git clone this repository to your local folder.
2. Run 'npm install' to build all the necessary packages etc.
3. Run 'npm start' and open 'http://localhost:3000/' on your browser to test out all the functions!
4. Some nice features to look at:
    a. Intuitive user interface
    b. Preview of the live stream before you click 'Start Recording' so that you can adjust your body position, background to make sure it's recording what you want
    c. Three seconds countdown before actually video recording to let you get ready!
    d. In the middle of the recording, you could choose to retake. The it will ask you to confirm the retake since it will erase the data you recorded so far. After confirming, you will be redirected to the initial screen. If you click 'Cancel', then the recording will resume.
    e. After clicking 'Stop Recording', a video file will be generated, you may click 'Download' to download it to your local disk, and try to play, pause, stop, and seek it by using the built-in video controls at the bottom of the video. You could also click 'Start Over' to retake the video, which will lead you to the initial screen.
    f. Loader and error handling page are added to the app to provide seamless experience while say the user doesn't have a webcam on the laptop. After clicking 'Got it' to the user friendly error message, the user will be redirected to google search results under that error message.

#Demo video link:
https://github.com/user-attachments/assets/fee91fe7-b2ff-4df3-9e63-76f52966d1c1

#Limitations:
1. Didn't have time to do the resolution options
2. No time to write tests, just did a lot of manual tests
   
