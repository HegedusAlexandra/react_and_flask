# react_and_flask

# steps : 

## backend with flask

### venv added automatically with command 

### create .venv
py -3 -m venv .venv
### permanent permission
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
### temporary for this session
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
### activate enviroment
.venv\Scripts\activate

### install flask
pip install Flask

### create python file
New-Item server.py -ItemType File

### run python file
flask --app server run

### switch on debug
flask --app server run --debug

## frontend with react

### create frontend folder with all the important basics
npx create-react-app frontend

### add proxy to package.json before dependencies

"proxy":"http://127.0.0.1:5000/",

### start frontedn part also - change to frontend folder

npm run start