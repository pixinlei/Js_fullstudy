const picture = require('./picture.js')
const pictureData = require('./pictureData.js')
const { getPictureCosplay, insertPictureCosplay } = require('../controllers/pictureSqlConfig')
const { getData } = require('./functions')





async function Init(type) {
    for await (let item of type) {
        await picture(item) // 获取封面
        await getData(getPictureCosplay, pictureData)
    }
}

let types = ['Cosplay', 'Neiyiyouwu']

Init(types)