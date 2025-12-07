{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11300\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Lessons & hints\
const lessons = \{\
  beginner: [\
    \{ \
      title: "Hello World (Python)", \
      content: 'Print "Hello World" in Python.', \
      hint: 'Use print("Hello World")' \
    \},\
    \{ \
      title: "Add Numbers (Python)", \
      content: 'Add two numbers and print the result.', \
      hint: 'Use print(2 + 3)' \
    \}\
  ],\
  intermediate: [\
    \{ \
      title: "For Loop", \
      content: 'Use a for loop to print numbers 1-5.', \
      hint: 'for i in range(1,6): print(i)' \
    \}\
  ],\
  advanced: [\
    \{ \
      title: "Function Challenge", \
      content: 'Create a function that returns the square of a number.', \
      hint: 'def square(x): return x*x' \
    \}\
  ]
\f1 \
\};\
\
let currentLesson = null;\
\
// DOM elements\
const lessonTitle = document.getElementById('lesson-title');\
const lessonContent = document.getElementById('lesson-content');\
const hintBtn = document.getElementById('hint-btn');\
const hintDiv = document.getElementById('hint');\
const codeEditor = document.getElementById('code-editor');\
const output = document.getElementById('output');\
\
// Mode buttons\
document.getElementById('beginner-btn').addEventListener('click', () => loadLesson('beginner'));\
document.getElementById('intermediate-btn').addEventListener('click', () => loadLesson('intermediate'));\
document.getElementById('advanced-btn').addEventListener('click', () => loadLesson('advanced'));\
document.getElementById('freemode-btn').addEventListener('click', () => loadFreemode());\
\
// Hint button\
hintBtn.addEventListener('click', () => \{\
  if(currentLesson) \{\
    hintDiv.textContent = currentLesson.hint;\
    hintDiv.classList.remove('hidden');\
  \}\
\});\
\
// Run code button\
document.getElementById('run-btn').addEventListener('click', () => \{\
  const code = codeEditor.value;\
\
  // Safe HTML/JS execution\
  const iframe = document.createElement('iframe');\
  iframe.style.display = 'none';\
  document.body.appendChild(iframe);\
  iframe.contentWindow.document.open();\
  iframe.contentWindow.document.write(code);\
  iframe.contentWindow.document.close();\
  document.body.removeChild(iframe);\
\
  output.textContent = 'Code simulated/run in browser (safe preview).';\
\});\
\
// Functions\
function loadLesson(level) \{\
  const lessonArray = lessons[level];\
  currentLesson = lessonArray[Math.floor(Math.random() * lessonArray.length)];\
  lessonTitle.textContent = currentLesson.title;\
  lessonContent.textContent = currentLesson.content;\
  hintDiv.classList.add('hidden');\
  codeEditor.value = '';\
\}\
\
function loadFreemode() \{\
  currentLesson = null;\
  lessonTitle.textContent = 'Freemode';\
  lessonContent.textContent = 'Write any code you like!';\
  hintDiv.classList.add('hidden');\
  codeEditor.value = '';\
\}}