import async from "async";
import sharp from "sharp-30.0";

sharp.cache(false);

const startTime = new Date().getTime();

async.times(
  1000,
  function (n, next) {
    sharp("2569067123_aca715a2ee_o.jpg")
      .resize(1080, 810)
      .toBuffer(function (err, buffer) {
        next(err, buffer);
      });
  },
  function () {
    const duration = new Date().getTime() - startTime;
    console.log("sharp 0.30.0 duration:", duration);
  }
);
