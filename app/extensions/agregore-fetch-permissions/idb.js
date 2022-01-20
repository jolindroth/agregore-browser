import {
    get,
    set
} from 'idb-keyval';
alert("idb")
set('hello', 'world')
    .then(() => alert('It worked!'))
    .catch((err) => alert('It failed!', err));