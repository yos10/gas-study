const _ = require('lodash');

function myFunction() {
  const unseiArray = ['大吉', '中吉', '小吉', '吉', '凶', '大凶', '微妙'];

  const unsei = _.sample(unseiArray);

  console.log(`今の運勢は ${unsei} です`);
}

module.exports = {
  myFunction,
};
