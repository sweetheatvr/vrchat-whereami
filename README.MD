# VRChat WhereAmI

Nyallo :3 

This program creates a local dynamic web page showing the current VRC map that the user is in.

## Depedencies

This requires you to get your VRChat Authentication cookie. I show you how to below!

This also requires nodejs installed on your machine https://nodejs.org/en/download/

## Setup

```
1. download this project somewhere!
2. navigate to the project directory in cmd prompt
3. run 'npm install' to install everthing
4. run 'node index.js authcookie_abcd' 
   where authcookie_abcd is your authentication cookie (see section below for getting auth cookie). 
5. Go to localhost:3000 in your browser
```

![image](https://user-images.githubusercontent.com/105096300/214438408-cd3e8271-bec9-4612-b284-8a8c46a9f8e5.png)


## Getting your authentication cookie:

```
1. log into https://vrchat.com/home/
2. press f12 on browser 
3. click on Network
4. filter on authtoken
5. copy everything after '?authToken=' (for example: 'authcookie_abcd...')
6. this is your authentication cookie
```
![image](https://user-images.githubusercontent.com/105096300/214435978-ec1f1b81-62ae-4865-a337-97923a997edb.png)

___
___
___

# Extra Streamlab settings 

## Browser Source
![image](https://user-images.githubusercontent.com/105096300/214440399-14634165-47d9-4121-89b6-26a0297e758d.png)

## Filter (Color Key)
![image](https://user-images.githubusercontent.com/105096300/214440520-c223f098-01fe-4028-acab-c64574216f63.png)

In Effect:
![image](https://user-images.githubusercontent.com/105096300/214443734-61754271-fd6e-4659-9af2-770e5e4d4da4.png)
