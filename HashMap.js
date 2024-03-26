import Node from "./Node.js";
import LinkedList from "./LinkedList.js";

// note, not all functions have been created

// factory function approach
const createHashMap = (startBuckets = 32) => {
  const loadFactor = 0.75;
  let bucketCount = startBuckets;
  let buckets = new Array(bucketCount);

  // Have chosen to use this function rather than track capacity
  const getLoad = () => {
    return buckets.reduce((count, val) => (val ? count + 1 : count), 0);
  };

  const hash = (key) => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % bucketCount;
    }
    return hashCode;
  };

  const resize = () => {
    console.table(entries());

    bucketCount = 2 * bucketCount;

    // create copy of array to use in rehashing, and empty hashMap for rebuild
    let bucketCopy = [...buckets];
    buckets = new Array(bucketCount);

    bucketCopy.forEach((list) => {
      if (list) {
        let listId = 0;
        let node = null;
        // rehash all the keys in the list
        do {
          node = list.at(listId);
          set(node.key, node.value);
          listId++;
        } while (node.nextNode !== null);
      }
    });
  };

  // apply a key-value pair to the hashMap
  const set = (key, value) => {
    const bucket = hash(key);
    let list = null;
    if (buckets[bucket]) {
      // hash map bucket not empty - update matching key or prepend to list
      list = buckets[bucket];
      const index = list.find(key);
      if (index) {
        const existingNode = list.at(index);
        existingNode.value = value;
      } else {
        list.prepend(key, value);
      }
    } else {
      // hash map bucket empty - create linked list and prepend
      list = new LinkedList();
      list.prepend(key, value);
      buckets[bucket] = list;
    }
    list.toString();

    // resize if exceed loadfactor
    if (getLoad(buckets) / bucketCount >= loadFactor) {
      resize();
    }
  };

  const clear = () => {
    buckets.fill(null);
  };

  const get = (key) => {
    const bucket = hash(key);
    if (buckets[bucket]) {
      const list = buckets[bucket];
      return list.getValue(key);
    }
    return null;
  };

  // returns true / false based on whether key is in the hash map
  const has = (key) => {
    const bucket = hash(key);
    if (buckets[bucket]) {
      const list = buckets[bucket];
      return list.find(key) === false ? false : true;
    }
    return null;
  };

  // returns an array containing all key, value pairs in the hash map
  const entries = () => {
    let entryArray = [];

    buckets.forEach((list) => {
      if (list) {
        let listId = 0;
        let node = null;
        do {
          node = list.at(listId);
          entryArray.push([node.key, node.value]);
          listId++;
        } while (node.nextNode);
      }
    });
    return entryArray;
  };

  return { set, get, has, clear, entries };
};

export { createHashMap as default };
