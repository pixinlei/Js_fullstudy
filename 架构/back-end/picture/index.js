const picture = require('./picture.js')
const pictureData = require('./pictureData.js')
const { getPictureCosplay, insertPictureCosplay } = require('../controllers/pictureSqlConfig')
const { getData } = require('./functions')


// picture('Cosplay') // 获取封面

getData(getPictureCosplay, pictureData)
// console.log(getPictureCosplay({start: 0, end: 1}));
// pictureData()