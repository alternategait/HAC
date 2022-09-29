
# Home Activies Program app
#### Helping rehabilitation professionals provide education and training to caregivers to ease transitions from hospital or skilled nursing to home. 

This app provides an authorized user access to a database of Home Activties of Daily Living with images and descriptions. Users with confirmed licenses are able to generate Home Activities via form to add to the database. Standard users can select activties and create a collection for printing. Activities can be selected by type. 

<img width="173" alt="Screen Shot 2022-09-28 at 2 34 15 PM" src="https://user-images.githubusercontent.com/102367926/193033599-37df8f8c-bc64-4b0d-b1d9-2c652e119b67.png">
![Screen Shot 2022-09-27 at 3 36 15 PM](https://user-images.githubusercontent.com/102367926/193033642-1044766e-4e29-4d75-930b-d071e19297c1.png)

### How it's made

Node server with Express libraries serve as the back bone; some notable packages include passport, mongoose, and multer. EJS with Bootstrap provides the front end and stylings. MongoDB serves as the database. 

### Lessons Learned

### Optimization

- better styling all around
- log out buttons and log out path
- improve ability to make collections
- add ability to edit activity words
- add ability for licensed professionals to add activities


# Install

`npm install`

---

# Things to add

- Create a `.env` file in config folder and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - DB_STRING = `your database URI`
  - CLOUD_NAME = `your cloudinary cloud name`
  - API_KEY = `your cloudinary api key`
  - API_SECRET = `your cloudinary api secret`

---

# Run

`npm start`
