
# Home Activies Program app
#### Helping rehabilitation professionals provide education and training to caregivers to ease transitions from hospital or skilled nursing to home. 

This app provides an authorized user access to a database of Home Activties of Daily Living with images and descriptions. Users with confirmed licenses are able to generate Home Activities via form to add to the database. Standard users can select activties and create a collection for printing. Activities can be selected by type. 

<img width="173" alt="Screen Shot 2022-09-28 at 2 34 15 PM" src="https://user-images.githubusercontent.com/102367926/193033599-37df8f8c-bc64-4b0d-b1d9-2c652e119b67.png">

<img src="https://user-images.githubusercontent.com/102367926/193033642-1044766e-4e29-4d75-930b-d071e19297c1.png)">

### How it's made

Node server with Express libraries serve as the back bone; some notable packages include passport, mongoose, and multer. EJS with Bootstrap provides the front end and stylings. MongoDB serves as the database with Cloudinary managing media. 

### Lessons Learned

Breaking and fixing is the best teacher. I have been in the muck on every part of this project and the lessons span every part of it. Notable lessions includ establishing arrays from forms and searching those arrays to display data grouped by variable type. 

### Optimization

- better styling all around
  - Xinclude graphics/background images for landing pages
  - x include icons as appropriate
- X log out buttons and log out path (completed 8/29, but needs better styling and a way to keep it from rendering on index)
- improve selection to be dry-er for activites by type (can probably pass in variables from the DOM)
- improve ability to make collections
- add ability to edit activity descriptions
- add ability for licensed professionals to add/create activities
- improve connection to cloudinary. 

<img width="471" alt="HAC wireframe flow chart" src="https://user-images.githubusercontent.com/102367926/194947929-540abd75-efd6-4e7e-935a-80efe84525e5.png">



## Install

`npm install`

---

## Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

---

## Run

`npm start`
