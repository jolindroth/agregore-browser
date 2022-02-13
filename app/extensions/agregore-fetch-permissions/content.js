console.debug()

const dbPromise = idb.openDB('keyval-store', 1, {
    upgrade(db) {
      db.createObjectStore('keyval');
    },
  });
  
async function get(key) {
    return (await dbPromise).get('keyval', key);
  };
async function set(key, val) {
    return (await dbPromise).put('keyval', val, key);
  };
async function del(key) {
    return (await dbPromise).delete('keyval', key);
  };
async function clear() {
    return (await dbPromise).clear('keyval');
  };
async function keys() {
    return (await dbPromise).getAllKeys('keyval');
  };

set('hello', 'world')
  .then(() => console.log('It worked!'))
  .catch((err) => console.log('It failed!', err));

get('hello').then((val) => alert(val));

