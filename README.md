# WEB - Masai Admission Database

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Form Submit is Working Fine - 1 marks.
 ✅ Check the Data after mutiple form submits - 1 marks.
 ✅ Check the Applied page's Table  - 1 marks.
 ✅ Check Filtering in Done  - 2 marks.
 ✅ Accept Students  - 1 marks.
 ✅ Reject Students - 1mark.
 ✅ Visit Admitted Page and Check Table - 1mark.
 ✅ Visit Rejected Page and Check Table - 1mark.
```

## Installation

- you can use any node version that works for you ( 14+ )
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure

- index.html
- applied.html
- admitted.html
- rejected.html
- Scripts/index.js
- Scripts/applied.js
- Scripts/admitted.js
- Scripts/rejected.js
- Please ignore all the other files except the above-mentioned ones.

### You haven't taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Description

#### Use the template provided below to write your code (Mandatory)

### Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

### Problem Statement:-

- Build a new Admission management application for Masai.
- Your application has a Navbar that contains 4 tabs (this is already in the template no need to build it).
  1. Add Student(index.html)
  2. Students Applied(applied.html)
  3. Admitted(admitted.html)
  4. Rejected(rejected.html)

### Add Student Page(index.html):-

- This page contains a form with 3 input boxes and 2 select tags having the following fields (this is already in the template no need to build).

1. Name(input[type="text"])
2. Email(input[type="email"])
3. Phone Number(input[type="number"])
4. Gender(Select)
5. Course(Select)

- On clicking on form submit (form submit event) you should store student's data in your local storage with key `admission`.

`Hint : localStorage.setItem("admission",JSON.stringify)`

- Refer to this image for better understanding:-
  ![image.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-12-05/Screenshot%202022-12-05%20at%2012.34.13%20PM_368540.png)

### Students Applied Page(applied.html):-

- On this page all the data from the `admission` will be shown in a table format.
- The table will have the following columns:-
  1. Name
  2. Email
  3. Phone Number
  4. Course
  5. Gender
  6. Accept
  7. Reject
- Here the values will come from the LacalStorage Except for the last 2 columns.
- On all the rows of the Accept column will have this value `Accept`. This word is case sensitive. Please note that.
- Similarly on the Reject Column the value will be `Reject`.
- Please reffer to this image for better understanding:- ![image.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-12-05/Screenshot%202022-12-05%20at%2012.35.26%20PM_571367.png).
- When clicked on the Accept cell that perticular should be deleted and added in a new Localstorage with key `accept`.
  `Hint : localStorage.setItem("accept",JSON.stringify)`.

- When clicked on the Reject cell that perticular should be deleted and added in a new Localstorage with key `reject`.
  `Hint : localStorage.setItem("reject",JSON.stringify)`.

- In this page we also have a select tag with an id:- `filter`.
- We can filter the table using the Course type with this select tag.
- Example of Filter:- If you select `Web Development` from the select tag you should only see rows that has the course as `Web Development`.
  ![image.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-12-05/Screenshot%202022-12-05%20at%2012.35.48%20PM_967159.png)
- If you select the default option of the select tag all the courses should be visible.

- Refer to this image for better understanding:-

### Admitted Page(admitted.html):-

- On this page all the data from the `accept` will be shown in a table format.
- The table will have the following columns:-
  1. Name
  2. Email
  3. Phone Number
  4. Course
  5. Gender
- All the values on this page will come from the localStorage only.
- Refer to this image for better understanding:-
  ![image.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-12-05/Screenshot%202022-12-05%20at%2012.36.18%20PM_443049.png)

### Rejected Page(rejected.html):-

- On this page all the data from the `reject` will be shown in a table format.
- The table will have the following columns:-
  1. Name
  2. Email
  3. Phone Number
  4. Course
  5. Gender
- All the values on this page will come from the localStorage only.
- Refer to this image for better understanding:-
  ![image.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-12-05/Screenshot%202022-12-05%20at%2012.36.43%20PM_730133.png)

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
