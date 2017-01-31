#Test Case 1
result=$(node filtered-ls /Users/aritraaritra/Documents/testfolder txt)
expected='abc.txt'
if [ "$result" == "$expected" ]; then
  echo "Test Case 1 : When there is exactly one matching file in the directory - PASS"
else
   echo "Test Case 1 : When there is exactly one matching file in the directory - FAIL"
fi

#Test Case 2
result=$(node filtered-ls /Users/aritraaritra/Documents/Javascript-lessons/javascripting js)Ï
expected='accessing-array-values.js
array-filtering.js
arrays.js
for-loop.js
function-arguments.js
functions.js
if-statement.js
introduction.js
looping-through-arrays.js
number-to-string.js
numbers.js
object-properties.js
objects.js
revising-strings.js
rounding-numbers.js
scope.js
string-length.js
strings.js
variables.js'
if [ "$result" == "$expected" ]; then
  echo "Test Case 2 : When there is more than one file matching in the directory - PASS"
else
  echo "Test Case 2 : When there is more than one file matching in the directory - FAIL"
fi

#Test Case 3
result=$(node filtered-ls /Users/aritraaritra/Documents/learnyounode fsd)
expected='No Files Found.';
if [ "$result" == "$expected" ]; then
  echo "Test Case 3 : When there is no file matching in the directory - PASS"
else
 echo "Test Case 3 : When there is no file matching in the directory - FAIL"
fi

