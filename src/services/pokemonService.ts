import api from './api';

const all = (offset: number) => {
  return api.get('pokemon', { params: { offset } });
};

export default {
  all,
};
