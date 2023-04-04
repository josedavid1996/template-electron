import moment from 'moment';

export const msToMinutes = (ms: number) => {
  return moment(ms * 1000).format('mm:ss');
};
