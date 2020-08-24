import * as mobilenet from '@tensorflow-models/mobilenet';
require('@tensorflow/tfjs');

var classifierService = (function () {
  var model: mobilenet.MobileNet;

  return (src: string) =>
    new Promise<string>(async (resolve, reject) => {
      if (!model) {
        model = await mobilenet.load();
      }

      const image = new Image();

      image.addEventListener(
        'load',
        async function () {
          try {
            const [{ className: breed }] = await model.classify(image);
            resolve(breed);
          } catch (error) {
            reject(error);
          }
        },
        false,
      );

      image.addEventListener(
        'error',
        function () {
          reject(new Error('Cannot load image'));
        },
        false,
      );

      image.src = src;
    });
})();

export default classifierService;
