const axios = require('./axios-config');

const makeApiCalls = () => {
  return Promise.all([
    // ////////////////////////////// Surah 1 /////////////////////////////////
    axios.get('/ayah/1:1/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/1:2/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/1:3/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/1:4/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/1:5/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/1:6/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/1:7/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 2 /////////////////////////////////
    axios.get('/ayah/2:201/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/2:250/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/2:285/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/2:286/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 3 /////////////////////////////////
    axios.get('/ayah/3:8/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/3:9/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/3:16/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/3:38/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/3:53/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/3:147/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/3:191/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/3:192/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/3:193/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/3:194/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 5 /////////////////////////////////
    axios.get('/ayah/5:83/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 7 /////////////////////////////////
    axios.get('/ayah/7:23/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/7:47/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/7:126/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 10 /////////////////////////////////
    axios.get('/ayah/10:85/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/10:86/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 11 /////////////////////////////////
    axios.get('/ayah/11:47/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 12 /////////////////////////////////
    axios.get('/ayah/12:101/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 14 /////////////////////////////////
    axios.get('/ayah/14:35/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/14:40/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/14:41/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 17 /////////////////////////////////
    axios.get('/ayah/17:24/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/17:80/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 18 /////////////////////////////////
    axios.get('/ayah/18:10/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 20 /////////////////////////////////
    axios.get('/ayah/20:25/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/20:26/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/20:114/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 21 /////////////////////////////////
    axios.get('/ayah/21:83/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/21:87/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 23 /////////////////////////////////
    axios.get('/ayah/23:29/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/23:94/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/23:97/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/23:98/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/23:109/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/23:118/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 25 /////////////////////////////////
    axios.get('/ayah/25:65/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/25:74/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 26 /////////////////////////////////
    axios.get('/ayah/26:80/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/26:83/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/26:84/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/26:85/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/26:86/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/26:87/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/26:88/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/26:89/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 27 /////////////////////////////////
    axios.get('/ayah/27:19/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 28 /////////////////////////////////
    axios.get('/ayah/28:16/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/28:17/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/28:21/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/28:24/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 29 /////////////////////////////////
    axios.get('/ayah/29:30/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 35 /////////////////////////////////
    axios.get('/ayah/35:34/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 37 /////////////////////////////////
    axios.get('/ayah/37:100/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 40 /////////////////////////////////
    axios.get('/ayah/40:7/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/40:8/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/40:9/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 44 /////////////////////////////////
    axios.get('/ayah/44:12/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 46 /////////////////////////////////
    axios.get('/ayah/46:15/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 59 /////////////////////////////////
    axios.get('/ayah/59:10/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 60 /////////////////////////////////
    axios.get('/ayah/60:4/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/60:5/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 66 /////////////////////////////////
    axios.get('/ayah/66:8/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/66:9/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/66:10/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/66:11/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 71 /////////////////////////////////
    axios.get('/ayah/71:28/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 112 ////////////////////////////////
    axios.get('/ayah/112:1/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/112:2/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/112:3/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/112:4/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 113 ////////////////////////////////
    axios.get('/ayah/113:1/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/113:2/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/113:3/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/113:4/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/113:5/editions/en.sahih,ur.ahmedali'),
    // ////////////////////////////// Surah 114 ////////////////////////////////
    axios.get('/ayah/114:1/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/114:2/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/114:3/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/114:4/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/114:5/editions/en.sahih,ur.ahmedali'),
    axios.get('/ayah/114:6/editions/en.sahih,ur.ahmedali'),
  ])
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

exports.getAllData = () => {
  const data = {};
  return makeApiCalls()
    .then((apiDataReturned) => {
      apiDataReturned.forEach((verse) => {
        if (data[verse.data.data[0].surah.number] === undefined) {
          data[verse.data.data[0].surah.number] = [verse.data.data];
        } else {
          data[verse.data.data[0].surah.number].push(verse.data.data);
        }
      });
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
