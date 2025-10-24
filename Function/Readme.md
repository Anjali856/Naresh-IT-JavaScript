# 🔢 Find Missing Number in an Array (JavaScript)

## 📌 Project Overview
This project provides a **JavaScript solution** to find the missing number(s) in a continuous array of numbers. It handles two scenarios:
1. Array starting from 1 (or any number) with exactly **one missing number**.
2. Array with **any starting number and range**, including cases where multiple numbers might be missing.

---

## 🧩 Functions

### 1. `findMissingNumber(numbers)`
- Works when the array starts from 1 (or any continuous starting number) and **only one number is missing**.
- Uses the formula for the sum of the first `n` natural numbers:
```js
const totalSum = (n * (n + 1)) / 2;
Output
--------------------
<img width="147" height="36" alt="image" src="https://github.com/user-attachments/assets/341b3e57-06ae-4299-8240-d23dbdbb32d3" />
