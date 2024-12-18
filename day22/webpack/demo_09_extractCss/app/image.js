// const someImage = require('./img/a.jpg');
// const Image = `<img src="${someImage}"/>`;


const Image = function(src){

    const image = require(`${src}`);
    // console.log(image)
    return `<img src="${image}"/>`;
}

export default Image;