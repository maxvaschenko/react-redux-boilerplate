import moment from "moment/moment";
require('twix');

let arr = moment('2018-01-01').twix('2018-12-31').toArray('days');
export const dates = arr.map((i) => moment(i).format("D.MM") );