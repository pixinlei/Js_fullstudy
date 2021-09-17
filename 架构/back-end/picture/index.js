const picture = require('./picture.js')
const pictureData = require('./pictureData.js')
const { getPictureCosplay, insertPictureCosplay } = require('../controllers/pictureSqlConfig')
const { getData } = require('./functions')





async function Init(type) {
    for await (let item of type) {
        try {
            await picture(item) // 获取封面
            console.log('获取一类封面完毕');
            // await getData(getPictureCosplay, pictureData)
        } catch {
            console.log('最外层，说明封面或者内容部分出问题了');
        }
    }
}

let types = ['Cosplay', 'Neiyiyouwu', 'Xgyw', 'Guochanmeinv', 'Gangtaimeinv', 'Rihanmeinv', 'Oumeimeinv', 'Siwameitui', 'Siwameitui', 'LEGBABY',
    'MissLeg', 'YaoJingShe', 'Tuigirl', 'Ugirls', 'IMiss', 'MiiTao', 'Uxing', 'Pdl', 'Artgravia', 'Candy']

// Init(types)

getData(getPictureCosplay, pictureData)