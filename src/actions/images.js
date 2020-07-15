import store from "../store/storeConfig";
import { addImage } from "../store/images";

export const _addImage = async () => {
  for (let i = 0; i < 10; i ++) {
    const res =  await fetch('https://source.unsplash.com/random/1600x900', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    store.dispatch(addImage(res.url));
  }
};
