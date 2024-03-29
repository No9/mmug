# SocketIO Chatroom

1. Open a terminal/cmd box
2. Make sure you have installed [node.js](http://www.nodejs.org/#download) on your machine
```
> node -v
```
Will print 
```
v0.8.4
```
3. In the black window create a folder called chatroom on your machine
```
> mkdir chatroom
```
4. Copy the index.html and server.js from this project into the chatroom folder
5. In the terminal/cmd window cd into the chatroom directory
```
> cd chatroom
```
6. Install the socket.io libraries using npm
```
> npm install socket.io
```
7. Find out the IP address of your machine (ifconfig on mac, ipconfig on windows)
8. change the http://localhost in the index html to be the same as your computer.
So line 5 in index.html should look like
```
var socket = io.connect('http://192.168.1.1');
```
**Your number will very likely be different than 192.168.1.1 that's fine**

9. Start the server with node (You may need to sudo on mac)
```
> node server.js
```
10. Open a browser and go to the URL that you entered in step 7.
11. Open another browser and go to the URL that you entered in step 7.
12. Enter text in one screen
13. See the text appear in the other screen
14. Tell your friends in the dojo your link and start chatting! 
