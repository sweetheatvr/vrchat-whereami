# VRChat WhereAmI

This program creates a local dynamic web page showing the current VRC map that the user is in.

## Depedencies

This requires you to get your VRChat Authentication cookie. details below!

This also requires nodejs installed on your machine https://nodejs.org/en/download/

## Setup

```
1. download this project somewhere!
2. navigate to the project directory in cmd prompt
3. run 'npm install'
4. run 'node index.js authcookie_abcd' where authcookie_abcd is your authentication cookie. 
```

## Getting your authentication cookie:

```
1. log into https://vrchat.com/home/
2. press f12 on browser 
3. click on Network
4. filter on authtoken
5. copy everything after '?authToken=' (for example: 'authcookie_abcd...')
6. this is your authentication cookie
```
