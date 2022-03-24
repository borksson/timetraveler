## Time Travel Simulator
Basically very simple life sim with robots, but they can time travel.
You can operate a robot and time travel, or the sim can run without user interaction. Time travel will be calculated by creating a time based algorithm for each robot, and then scaling that algorithm forward to determine robot locations.

A scroll bar at the bottom will allow the user to scale through time.

To control a character, click on them. WASD for movement, use the time scrollbar to send that character forward in time.

Backend:
Django - not requisite for the game at this stage, but game states could be saved on the server and then restored between sessions.

Frontend:
React - react should be capable of running everything needed for the game including components, menus, ect.

Steps:
- [ ] Try to get a robot character moving in a game environment. Location calculation will need to be on a separate thread.