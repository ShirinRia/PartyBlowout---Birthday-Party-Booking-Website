<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `ReferenceError: greetign is not defined`

<i>Declared a variable called greeting but then try to assign an empty object to a variable called greetign. Due to this typo, the variable greetign is undefined. As greetign is not defined before, this will give error.
</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `"12"`

<i>1 is a number, "2" is a string. JavaScript converts the number 1 to a string to match the data type of "2". Then concatenates the two strings, resulting in "12", because JavaScript performs type coercion in this case. In Type Coercion when we use the '+' operator with a string and a non-string, JavaScript will attempt to convert the non-string operand to a string and then concatenate them.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>Changing the value of info.favoriteFood to "🍝" does not affect the food array because we assigned the value "🍝" to info.favoriteFood by value, not by reference. In JavaScript, primitive data types like array are passed by value, meaning they create a separate copy of the value, and changing the copy does not affect the original array.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>When WE call the sayHi function, we didn't provide any argument for the name parameter. In JavaScript, if we don't provide a value for a parameter that the function expects, the parameter's value will be undefined. So, when we call sayHi() without passing any argument, it will return "Hi there, undefined" because the value of name parameter is undefined.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i> if (num) count += 1;: This line checks if the current element num is truthy,it increments the count variable by 1. In JavaScript, numbers other than 0 are considered truthy. In this case, the nums array contains three truthy elements (1, 2, and 3), so the count variable will be incremented three times. Therefore, the output of will be 3.</i>

</p>
</details>
