# Floral Status API

This project is an API for the french server "Modded" which monitors the states of the sub-servers.

## Usage

__Get informations about the servers__:
`curl <api_url>:<port>/servers`

__Refresh the state of a server (make it says it is online on the API)__
You need to put this code in a Computer Craft computer:
```lua
local request = http.get("<api_url>:<port>/uptime/<server_name>") -- Tell the API that the server is online
print(request.readAll()) -- Prints the result of the request
```

Here's a list of server names you can use (you can change them in `index.js`)
- granite
- obsidienne
- emeraude
- andesite
- quartz
- chorus

## Webpage

You can also visit the root of the api `"/"` and get access to a nice html page to see the servers' state.

## How it works

You need to have a computer in a forceloaded chunk (spawn chunks, etc...) that does requests every **5 minutes** to the corresponding api url.

## Public API

If you don't want to set up your own API, you can just use mine: https://floral.origaming.ch

### Important

This project isn't affilated to https://modded.fr nor official. Please don't ask for support there.