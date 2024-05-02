
function randID() {
  const min = 1000000000;
  const max = 9999999999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateList() {
  const images = require.context("../cardImages", true);
  const imageList = images.keys().map((image) => {
    const titleArray = image.split("/");
    var id = randID();
    return {
      src: images(image),
      title: titleArray[titleArray.length - 1],
      id: id,
    };
  });
  console.log(imageList)
  return imageList;
}
const imageList= generateList();

export default imageList;