//returns true if the objects are tuly equal
function deepEqual(obj1, obj2) {

    if (typeof(obj1) == typeof(obj2)) {
        
        if (typeof(obj1) != "object")
            return obj1 === obj2
        
        if (obj1 == null && obj2 == null)
            return true
            
        if (obj1 != null && obj2 != null) {
            if (obj1 == null && obj2 == null)
                return true
            
            keys1 = Object.keys(obj1)
            keys2 = Object.keys(obj2)
            if (keys1.length != keys2.length)
                return false
            
            flag = true
            for (let i = 0; i < keys1.length; i++) {
                key = keys1[i]
                if (typeof(obj1[key]) != "object") {
                    if (obj1[key] === obj2[key]) {}
                    else {
                        flag = false
                        break
                    }
                } else {
                    temp = deepEqual(obj1[key], obj2[key])
                    if (!temp) {
                        flag = false
                        break
                    }
                }
            }
            return flag
        }
    }
    return false
}

//testcases
console.log(deepEqual(2,"2"))
console.log(deepEqual("barry","Barry"))
