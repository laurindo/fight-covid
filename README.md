![image](https://user-images.githubusercontent.com/2501144/164251433-1c929c85-c0ac-490b-9c4e-26d8b74fce71.png)


# Fight COVID - React App
Application created with React. We are using [https://covid19api.com/](https://covid19api.com/) to get real data about COVID19 informations.

## Demo
[https://laurindo.github.io/fight-covid/](https://laurindo.github.io/fight-covid/)

---

##### Let's start - First of all - check you environment:

1 - See if you have docker installed 

#### `docker -v`

2 - Check your node and npm

#### `node -v`
#### `npm -v`

3 - After that we can start. We are using docker to setup the env

#### `sudo docker build -t covid-chart/react .`
#### `sudo docker run -p 9001:9001 -d covid-chart/react`

4 - If you don't have docker installed, please try it:

#### `yarn`
#### `yarn start`

5 - Your project should be running on:

#### `PORT 9001`

6 - Let's enjoy:
#### `http://localhost:9001`
Open [http://localhost:9001](http://localhost:9001) to view it in the browser.

## 3rd party libraries
* [Material UI](https://material-ui.com/getting-started/installation/)
* [Date Pickers](https://material-ui-pickers.dev/demo/datepicker)
* [SWR - React Hook library to fecthing data](https://swr.vercel.app/)
* [Moment](https://momentjs.com/)
* [React Router DOM](https://reactrouter.com/web/guides/quick-start)
* [History](https://www.npmjs.com/package/history)


## Details

Runs the app in the development mode.<br />
Open [http://localhost:9001](http://localhost:9001) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`


### NOTE
* I've tried to add cypress for e2e (end to end test) but my ubuntu is not enough space to run docker compose and prepare env. :(
