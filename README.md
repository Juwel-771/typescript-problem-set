1. What is the use of the keyof keyword in TypeScript?

keyof হলো TypeScript-এর একটি অপারেটর বা কীওয়ার্ড, যেটি object -এর সবগুলো property নামকে(key) নিয়ে একটা type বানিয়ে দেয়। অর্থাৎ object-এর key গুলোকে আলাদা ডেটা বা type হিসেবে ব্যবহার করতে হলো keyof এর সাহায্য খুব সহজে করা যাবে। 

keyof ব্যবহারঃ
1. Object-এর key-গুলোকে type-safe - অনেক সময় আমরা object থেকে ডেটা নিতে চাইলে dynamic key ব্যবহার। কিন্তু key ভুল টাইপ করলে বাগ তৈরি হতে পারে। keyof ব্যবহার করলে TypeScript আগেই বলে দেবে কোন key valid, কোনটা invalid।

2. Refactoring: Object-এর property আরো বাড়ালে বা কমালে keyof ব্যবহার করা জায়গাগুলোও automatically update হয়ে যাবে। এর ফলে কোড clean এবং নিরাপদ থাকে।

উদাহরণঃ 

type Person = {
  name: string;
  age: number;
  email: string;
};

type UserKeys = keyof User;

এখানে PersonKeys মানে হলো: "name" | "age" | "email"। 



2. Explain the difference between any, unknown, and never types in TypeScript.

TypeScript-এ any, unknown, আর never তিনটি বিশেষ টাইপ — প্রতিটিই ভিন্ন উদ্দেশ্যে ব্যবহার করা হয় এবং ভিন্ন টাইপ-সিস্টেম।

any = টাইপ-চেকিং বন্ধ করে দেয়, সবকিছু গ্রহণ করে; unsafe।

unknown = যেকোনো মান থাকতে পারে এবং টাইপ চেক বাধ্যতামূলক - ব্যবহারের আগে টাইপ যাচাই করে নিতে হয়। এটিকে API ডেটা, ইউজার ইনপুট এ সাধারণত ব্যবহার হয়; safe(er) any।

never = এমন টাইপ যার কোনো ভলিউম নেই — কোন ভ্যালু কখনই থাকতে পারে না অর্থাৎ কোনো ভ্যালু রিটার্ন করে না। এরর থ্রো করা ফাংশনে ব্যবহার হয় এবং টাইপ সিস্টেমে exhaustive checking এ সাহায্য করে। 


