// import {readFileSync} from 'fs';
const sharp = require('sharp');
const {readFileSync, unlink} = require('fs');
const path = require('path')

const inputdir = path.join(__dirname, '/projects/')
const outputdir = path.join(__dirname, '../public/images/projects/')
async function main() {
  const images = ['cimoviez', 'rw', 'tenzies', 'truhair', 'bistro', 'rwhome', 'bsy-link']
  // const images = ['']


  for (let image of images) {
      const file = readFileSync(`${inputdir}${image}.png`)
      // unlink(`${outputdir}${image}.webp`, (err) => {
      //   if (err) throw err;
      //   console.log(`${outputdir}${image}.webp was deleted`);
      // });
      
      sharp(file)
        // .resize(1000, 800)
        .toFile(`${outputdir}${image}.webp`, (err, info) => { 
            if (err) {
              console.log(err)
            }
              console.log(info)
              return
         });
  }
}

main()
.then(res => console.log('script executed succcessfully'))
.catch(error => console.log('error', error))
