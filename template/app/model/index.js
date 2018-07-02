const fs = require( 'fs' );
const path = require( 'path' );
const util = require( 'util' );


module.exports = async () => {
    const readdir = util.promisify(fs.readdir)
    ,paths = path.join(process.cwd(), '/app/model/')
    ,list = await readdir(paths)
    ,lstat = util.promisify(fs.lstat)
    ,db = {};
    for (let i = 0, len = list.length; i < len; i++){
        let basepath = `${paths}${list[i]}`;
        let isfile = await lstat(basepath);
        if (isfile.isDirectory()) {
            try {
                db[list[i]] = require(`${basepath}/`);
            } catch (error) {
                 console.log(error);
            }
        }
    }
    return db;
    
};

