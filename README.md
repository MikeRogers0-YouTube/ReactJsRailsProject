## README

I messed about with getting React components updating from a socket. It's not amazing code (I followed a few different tutorials), but it works :)

### How it works

When you add a comment at http://127.0.0.1:3000/comments/ it should appear http://127.0.0.1:3000/ for all users.

### Setup

    brew install redis
    ln -sfv /usr/local/opt/redis/*.plist ~/Library/LaunchAgents
    launchctl load ~/Library/LaunchAgents/homebrew.mxcl.redis.plist

    bundle
    rails s

### TODO

  * Set the comment channel in the react component. Maybe a bit like [react-socket](https://github.com/coma/react-socket)
  * Make it work on Heroku.
  * Add comment form on homepage
  * Maybe ditch React for [Preact](https://github.com/developit/preact)
