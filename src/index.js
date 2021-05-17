import { chunk } from "lodash";

import { getRandomIdArray, getRandomIdArrayByLength } from "./helpers";

const myArr = getRandomIdArray();
const result = chunk(myArr, 3);

const myArr2 = getRandomIdArrayByLength(5);
const result2 = chunk(myArr2, 2);

console.log(result, result2);

const obj = {
    get: () => {
        return "foo";
    },
    name: "bar",
    type: "baz",
    subobject: {
        one: "uno",
        two: "due",
    },
};