// Returns an array of path
//@params obj is type object
//@params query is type string
const getPath = (obj, query) => {
    let result;
  
    for (let [key, value] of Object.entries(obj)) {
      if (value === query) {
        result = [key];
        return result;
      } 
      else if (value && typeof value === "object") {
        //Recurse down the tree
        let path = getPath(value, query);
        if (path) {
          result = [key, ...path];
          return result;
        }
      }
    }
    return result;
};

export default getPath;
  