
# webapp demo

## Setup

Nodegit is pretty amazingly cool, but I had to install it on linux with the follow command.
If you're on linux try running this command before running npm install

    npm run firstinstall

It just runs the following commands to make sure g++ is installed and build nodegit from source
so it will actually work. If on another platform submit differing instructions as a pull request.

    sudo apt-get install g++
    BUILD_ONLY=true npm install nodegit

If you still have errors try installing this package, though this will have dubious efficacy
since it didn't resolve the error that caused me to run it in the first place:

    sudo apt-get install libstdc++6

