import { storageService } from './asyncStorageService'
// import { httpService } from './httpService'

// const gPads = require('../data/pads.json')

const gPads = [
    {
        "_id": "1",
        "title": "Future Funk Beats",
        "isChecked": false
    },
    {
        "_id": "2",
        "title": "Stutter Breakbeats",
        "isComplated": false
    },
    {
        "_id": "3",
        "title": "Bass heavy Funk Groove",
        "isComplated": false

    },
    {
        "_id": "4",
        "title": "Electric Guitar",
        "isComplated": false
    },
    {
        "_id": "5",
        "title": "StompySlosh",
        "isComplated": false
    },
    {
        "_id": "6",
        "title": "Groove Tanggu",
        "isComplated": false

    },
    {
        "_id": "7",
        "title": "Maze Politics",
        "isComplated": false
    },
    {
        "_id": "8",
        "title": "Drum Beet",
        "isComplated": false
    },
    {
        "_id": "9",
        "title": "Silent Star Organ",
        "isComplated": false

    },


]
const STORAGE_KEY = 'MUSIC'

export const padService = {
    query,
    getPadById,
    remove,
    save
}


async function query(filterBy = {}) {
    let pads
    try {
        // return await httpService.get('pad')
        pads = await storageService.query(STORAGE_KEY, gPads)
        console.log(pads,'storageService.query(STORAGE_KEY')
        return pads

    } catch (err) {
        console.log(err, 'err')
        throw err
    }

}

async function getPadById(padId) {
    //   return await httpService.get(`pad/${padId}`)

      const res = await storageService.get(STORAGE_KEY, padId)
      console.log('get pad by id in service',res,padId);
      return res
}

async function remove(padId) {
    //   return await httpService.delete(`pad/${padId}`)
    await storageService.remove(STORAGE_KEY, padId)
    return Promise.resolve()
}

async function save(pad) {
    if (pad._id) {
        //    return await httpService.put(`pad/${pad._id}`,pad)
        return await storageService.put(STORAGE_KEY, pad)
    }
    else {
        //   return await httpService.post('pad',pad)
        return await storageService.post(STORAGE_KEY, pad)
    }
    // const res = await storageService.put(STORAGE_KEY, pad)
    // return res
}