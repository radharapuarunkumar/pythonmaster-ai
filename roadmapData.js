/**
 * Python Master AI - Complete Day-Wise Roadmap Data
 * 120 Days of Production-Ready Learning Content
 */

const roadmapData = {
  // BEGINNER PHASE (Days 1-30)
  beginner: {
    phase: "BEGINNER",
    days: [
      {
        day: 1,
        title: "Introduction to Python",
        topic: "Getting Started with Python",
        duration: "45 minutes",
        xp: 50,
        theory: {
          explanation: "Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum in 1991, Python has become one of the most popular languages for web development, data science, AI, and automation.",
          deepExplanation: "Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects. Python supports multiple programming paradigms including procedural, object-oriented, and functional programming.",
          beginnerExplanation: "Think of Python as a language that computers understand. Just like you use English to communicate with people, you use Python to communicate with computers. Python is designed to be easy to read and write, making it perfect for beginners.",
          realWorldExamples: [
            "Netflix uses Python for recommendation algorithms",
            "Instagram's backend is built with Python",
            "NASA uses Python for space exploration",
            "Spotify uses Python for data analysis"
          ],
          syntaxExplanation: "Python uses indentation to define code blocks instead of curly braces {}. This makes the code more readable. Statements end with newlines, not semicolons. Comments start with #.",
          codeExamples: [
            {
              title: "Your First Python Program",
              code: `# This is your first Python program
print("Hello, World!")
print("Welcome to Python Master AI!")`,
              explanation: "The print() function outputs text to the console. This is the traditional first program in any programming language."
            },
            {
              title: "Variables and Data Types",
              code: `# Variables store data
name = "Python"
age = 30
is_awesome = True
version = 3.11

print(f"Language: {name}")
print(f"Age: {age} years")
print(f"Awesome: {is_awesome}")
print(f"Version: {version}")`,
              explanation: "Variables are containers for storing data values. Python has several data types: strings (text), integers (whole numbers), floats (decimals), and booleans (True/False)."
            }
          ]
        },
        practice: {
          problems: [
            {
              question: "Create a variable called 'student_name' and assign your name to it. Then print it.",
              solution: `student_name = "Your Name"
print(student_name)`
            },
            {
              question: "Create three variables: age (integer), height (float), and is_student (boolean). Print all three.",
              solution: `age = 25
height = 5.9
is_student = True
print(age, height, is_student)`
            }
          ]
        },
        assignment: {
          title: "Personal Information Card",
          description: "Create a program that stores and displays your personal information including name, age, email, and favorite programming language.",
          starterCode: `# Your code here
name = ""
age = 0
email = ""
favorite_language = ""

# Print your information card
print("=== PERSONAL INFORMATION CARD ===")
print(f"Name: {name}")
print(f"Age: {age}")
print(f"Email: {email}")
print(f"Favorite Language: {favorite_language}")`,
          expectedOutput: "A formatted card displaying personal information",
          xpReward: 30
        },
        quiz: [
          {
            question: "What does the print() function do?",
            options: ["Stores data", "Displays output to console", "Calculates math", "Creates files"],
            correctAnswer: 1,
            explanation: "The print() function outputs text or data to the console/screen."
          },
          {
            question: "Which symbol is used for comments in Python?",
            options: ["//", "/*", "#", "--"],
            correctAnswer: 2,
            explanation: "Python uses the # symbol for single-line comments."
          },
          {
            question: "What is the output of: print(3 + 4 * 2)?",
            options: ["14", "11", "10", "7"],
            correctAnswer: 1,
            explanation: "Python follows order of operations (PEMDAS). Multiplication happens before addition: 4 * 2 = 8, then 3 + 8 = 11."
          },
          {
            question: "Which data type would you use to store a person's name?",
            options: ["Integer", "Float", "String", "Boolean"],
            correctAnswer: 2,
              explanation: "Strings (str) are used to store text data like names."
          },
          {
            question: "What keyword is used to create a variable in Python?",
            options: ["var", "let", "const", "None of the above"],
            correctAnswer: 3,
            explanation: "Python doesn't require keywords like var, let, or const. You simply write variable_name = value."
          }
        ],
        outputPrediction: [
          {
            code: `x = 5
y = 3
print(x + y)`,
            question: "What will be the output?",
            correctAnswer: "8",
            explanation: "5 + 3 = 8"
          },
          {
            code: `name = "Python"
print("I love " + name)`,
            question: "What will be the output?",
            correctAnswer: "I love Python",
            explanation: "String concatenation combines 'I love ' with 'Python'"
          }
        ],
        challenge: {
          title: "Interactive Greeting",
          description: "Create a program that asks for the user's name and age, then displays a personalized greeting message.",
          hint: "Use input() to get user input and convert age to integer using int()",
          xpReward: 50
        },
        aiExplanation: {
          keyConcepts: ["Variables", "Data Types", "Print Function", "Comments"],
          commonMistakes: ["Forgetting to convert input to correct data type", "Using print without parentheses in Python 2", "Not understanding string concatenation"],
          tips: ["Use meaningful variable names", "Add comments to explain complex code", "Test your code frequently"]
        },
        notes: "Python is case-sensitive. 'Name' and 'name' are different variables. Always use descriptive variable names for better code readability."
      },
      {
        day: 2,
        title: "Strings and String Operations",
        topic: "Working with Text Data",
        duration: "50 minutes",
        xp: 60,
        theory: {
          explanation: "Strings are sequences of characters enclosed in single, double, or triple quotes. Python provides powerful string manipulation capabilities including slicing, concatenation, and various built-in methods.",
          deepExplanation: "Strings in Python are immutable, meaning once created, they cannot be changed. However, you can create new strings from existing ones. Python supports Unicode, allowing you to work with text in any language. String methods like upper(), lower(), strip(), and split() make text processing easy and efficient.",
          beginnerExplanation: "Strings are just text. Anything you put in quotes is a string. You can join strings together, change their case, find specific words, and much more.",
          realWorldExamples: [
            "Processing user input in forms",
            "Generating email templates",
            "Parsing log files",
            "Text analysis in NLP"
          ],
          syntaxExplanation: "Strings can be created with single ('), double (\"), or triple (''' or \"\"\") quotes. Triple quotes allow multiline strings. String indexing starts at 0.",
          codeExamples: [
            {
              title: "Creating Strings",
              code: `# Different ways to create strings
single_quote = 'Hello'
double_quote = "World"
multi_line = '''This is a
multi-line string'''

print(single_quote)
print(double_quote)
print(multi_line)`,
              explanation: "You can use single or double quotes for single-line strings. Triple quotes are best for multi-line strings."
            },
            {
              title: "String Operations",
              code: `text = "Python Programming"

# String methods
print(text.upper())        # PYTHON PROGRAMMING
print(text.lower())        # python programming
print(text.title())        # Python Programming
print(len(text))           # 18 (length)
print(text[0])             # P (first character)
print(text[-1])            # g (last character)
print(text[0:6])           # Python (slicing)`,
              explanation: "Python provides many built-in string methods. upper() converts to uppercase, lower() to lowercase, title() capitalizes each word, len() returns length, and slicing extracts portions."
            }
          ]
        },
        practice: {
          problems: [
            {
              question: "Create a string with your full name and print it in uppercase.",
              solution: `full_name = "John Doe"
print(full_name.upper())`
            },
            {
              question: "Extract the first 3 characters from the string 'Programming'.",
              solution: `text = "Programming"
print(text[0:3])  # Output: Pro`
            }
          ]
        },
        assignment: {
          title: "Name Formatter",
          description: "Create a program that takes a user's name and formats it properly (first letter uppercase, rest lowercase).",
          starterCode: `# Your code here
name = input("Enter your name: ")

# Format the name properly
formatted_name = name.title()

print(f"Formatted name: {formatted_name}")`,
          expectedOutput: "Name with proper capitalization",
          xpReward: 35
        },
        quiz: [
          {
            question: "What is the output of len('Hello')?",
            options: ["4", "5", "6", "Hello"],
            correctAnswer: 1,
            explanation: "len() returns the number of characters. 'Hello' has 5 characters."
          },
          {
            question: "Which method converts a string to uppercase?",
            options: ["uppercase()", "toUpper()", "upper()", "capitalize()"],
            correctAnswer: 2,
            explanation: "The upper() method converts all characters to uppercase."
          },
          {
            question: "What does text[0] return?",
            options: ["Last character", "First character", "Empty string", "Error"],
            correctAnswer: 1,
            explanation: "String indexing starts at 0, so [0] returns the first character."
          },
          {
            question: "Which quote type allows multiline strings?",
            options: ["Single quotes", "Double quotes", "Triple quotes", "Backticks"],
            correctAnswer: 2,
            explanation: "Triple quotes (''' or \"\"\") allow strings to span multiple lines."
          },
          {
            question: "What is the output of 'Python'[0:3]?",
            options: ["Pyt", "Pyth", "ython", "on"],
            correctAnswer: 0,
            explanation: "Slicing [0:3] returns characters from index 0 to 2 (not including 3): P, y, t = 'Pyt'."
          }
        ],
        outputPrediction: [
          {
            code: `text = "Hello World"
print(text.lower())`,
            question: "What will be the output?",
            correctAnswer: "hello world",
            explanation: "The lower() method converts all characters to lowercase"
          },
          {
            code: `name = "Alice"
print(f"Hello, {name}!")`,
            question: "What will be the output?",
            correctAnswer: "Hello, Alice!",
            explanation: "f-strings allow embedding variables directly in strings"
          }
        ],
        challenge: {
          title: "Word Counter",
          description: "Create a program that counts the number of words in a given sentence.",
          hint: "Use the split() method to break the sentence into words, then use len()",
          xpReward: 55
        },
        aiExplanation: {
          keyConcepts: ["String Creation", "String Methods", "Slicing", "String Formatting"],
          commonMistakes: ["Confusing string methods with list methods", "Forgetting that strings are immutable", "Off-by-one errors in slicing"],
          tips: ["Use f-strings for modern string formatting", "Remember slicing is [start:end] where end is exclusive", "Use strip() to remove whitespace"]
        },
        notes: "Strings are immutable - you can't change them in place. Operations like upper() return NEW strings, they don't modify the original."
      },
      {
        day: 3,
        title: "Numbers and Math Operations",
        topic: "Working with Numeric Data",
        duration: "45 minutes",
        xp: 55,
        theory: {
          explanation: "Python supports various numeric types including integers, floats, and complex numbers. It provides a comprehensive set of mathematical operators and functions for calculations.",
          deepExplanation: "Python's numeric types include int (integers), float (floating-point numbers), and complex (complex numbers). The math module provides additional mathematical functions like sqrt(), pow(), sin(), cos(), etc. Python handles large integers automatically without overflow, making it ideal for scientific computing.",
          beginnerExplanation: "Numbers in Python work just like in math. You can add, subtract, multiply, divide, and much more. Python handles both whole numbers and decimals.",
          realWorldExamples: [
            "Financial calculations",
            "Scientific computing",
            "Game development (scores, coordinates)",
            "Data analysis and statistics"
          ],
          syntaxExplanation: "Python uses standard mathematical operators: + (add), - (subtract), * (multiply), / (divide), // (floor divide), % (modulo), ** (exponent).",
          codeExamples: [
            {
              title: "Basic Math Operations",
              code: `# Basic arithmetic
a = 10
b = 3

print(a + b)   # 13 (addition)
print(a - b)   # 7 (subtraction)
print(a * b)   # 30 (multiplication)
print(a / b)   # 3.333... (division)
print(a // b)  # 3 (floor division)
print(a % b)   # 1 (modulo/remainder)
print(a ** b)  # 1000 (exponent)`,
              explanation: "Python provides all basic mathematical operators. Floor division (//) gives the integer result, modulo (%) gives the remainder, and ** is for exponents."
            },
            {
              title: "Math Module",
              code: `import math

# Math functions
print(math.sqrt(16))      # 4.0 (square root)
print(math.pow(2, 3))     # 8.0 (power)
print(math.pi)            # 3.14159... (pi)
print(math.ceil(3.2))     # 4 (round up)
print(math.floor(3.9))    # 3 (round down)
print(math.sin(math.pi/2)) # 1.0 (sine)`,
              explanation: "The math module provides advanced mathematical functions. Import it with 'import math' to access these functions."
            }
          ]
        },
        practice: {
          problems: [
            {
              question: "Calculate the area of a rectangle with length 10 and width 5.",
              solution: `length = 10
width = 5
area = length * width
print(f"Area: {area}")`
            },
            {
              question: "Find the remainder when 17 is divided by 5.",
              solution: `result = 17 % 5
print(result)  # Output: 2`
            }
          ]
        },
        assignment: {
          title: "BMI Calculator",
          description: "Create a BMI (Body Mass Index) calculator. BMI = weight (kg) / height (m)²",
          starterCode: `# Your code here
weight = float(input("Enter weight in kg: "))
height = float(input("Enter height in meters: "))

# Calculate BMI
bmi = weight / (height ** 2)

print(f"Your BMI: {bmi:.2f}")

# BMI categories
if bmi < 18.5:
    print("Underweight")
elif bmi < 25:
    print("Normal weight")
elif bmi < 30:
    print("Overweight")
else:
    print("Obese")`,
          expectedOutput: "BMI value with 2 decimal places and weight category",
          xpReward: 40
        },
        quiz: [
          {
            question: "What is the result of 10 // 3?",
            options: ["3.33", "3", "4", "1"],
            correctAnswer: 1,
            explanation: "Floor division (//) returns the integer part of the division, discarding the decimal."
          },
          {
            question: "Which operator gives the remainder?",
            options: ["/", "//", "%", "*"],
            correctAnswer: 2,
            explanation: "The modulo operator (%) returns the remainder of division."
          },
          {
            question: "What is 2 ** 3?",
            options: ["6", "8", "9", "5"],
            correctAnswer: 1,
            explanation: "The ** operator is for exponentiation. 2 raised to the power of 3 equals 8."
          },
          {
            question: "Which module provides mathematical functions?",
            options: ["calc", "math", "numbers", "arithmetic"],
            correctAnswer: 1,
            explanation: "The math module provides functions like sqrt(), pow(), sin(), cos(), etc."
          },
          {
            question: "What is math.sqrt(25)?",
            options: ["5", "5.0", "25", "Error"],
            correctAnswer: 1,
            explanation: "math.sqrt() returns a float. The square root of 25 is 5.0."
          }
        ],
        outputPrediction: [
          {
            code: `x = 17
y = 5
print(x % y)`,
            question: "What will be the output?",
            correctAnswer: "2",
            explanation: "17 divided by 5 is 3 with remainder 2"
          },
          {
            code: `import math
print(math.ceil(4.2))`,
            question: "What will be the output?",
            correctAnswer: "5",
            explanation: "ceil() rounds up to the nearest integer"
          }
        ],
        challenge: {
          title: "Simple Interest Calculator",
          description: "Create a program that calculates simple interest: SI = (P × R × T) / 100",
          hint: "Get principal (P), rate (R), and time (T) as inputs from user",
          xpReward: 50
        },
        aiExplanation: {
          keyConcepts: ["Integer Operations", "Float Operations", "Math Module", "Order of Operations"],
          commonMistakes: ["Confusing / and // operators", "Forgetting to import math module", "Integer division in Python 3 vs Python 2"],
          tips: ["Use // for integer division when you need whole numbers", "Import math module for advanced functions", "Remember PEMDAS for order of operations"]
        },
        notes: "Python 3's / operator always returns a float, even for whole numbers. Use // for integer division if you need an integer result."
      },
      {
        day: 4,
        title: "Lists and List Operations",
        topic: "Storing Multiple Items",
        duration: "55 minutes",
        xp: 65,
        theory: {
          explanation: "Lists are ordered, mutable collections that can store multiple items of different types. They are one of Python's most versatile data structures, essential for organizing and manipulating data.",
          deepExplanation: "Lists are created using square brackets [] and can contain any data type including other lists (nested lists). Lists are mutable, meaning you can modify them after creation. Common list operations include indexing, slicing, appending, extending, inserting, removing, sorting, and reversing. List comprehensions provide a concise way to create lists.",
          beginnerExplanation: "Think of a list as a container that can hold multiple items. Like a shopping list, you can add, remove, and change items. Lists are ordered, so items stay in the order you add them.",
          realWorldExamples: [
            "Shopping lists",
            "Student grades",
            "To-do lists",
            "Menu items in applications"
          ],
          syntaxExplanation: "Lists use square brackets []. Items are separated by commas. Indexing starts at 0. Negative indices count from the end (-1 is last item).",
          codeExamples: [
            {
              title: "Creating and Accessing Lists",
              code: `# Creating lists
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = ["text", 42, True, 3.14]

# Accessing elements
print(fruits[0])        # apple (first)
print(fruits[-1])       # cherry (last)
print(fruits[1:3])      # ['banana', 'cherry'] (slicing)
print(len(fruits))      # 3 (length)`,
              explanation: "Lists are created with square brackets. Access elements using index (starts at 0). Negative indices count from the end."
            },
            {
              title: "List Methods",
              code: `fruits = ["apple", "banana"]

# Adding elements
fruits.append("cherry")      # Add to end
fruits.insert(1, "orange")   # Insert at index 1
fruits.extend(["grape", "mango"])  # Add multiple

# Removing elements
fruits.remove("banana")      # Remove by value
popped = fruits.pop()        # Remove and return last

# Other operations
fruits.sort()                # Sort alphabetically
fruits.reverse()             # Reverse the list

print(fruits)`,
              explanation: "Lists have many built-in methods. append() adds to end, insert() adds at specific position, extend() adds multiple items, remove() deletes by value, pop() removes and returns last item."
            }
          ]
        },
        practice: {
          problems: [
            {
              question: "Create a list of 5 colors and print the third color.",
              solution: `colors = ["red", "green", "blue", "yellow", "purple"]
print(colors[2])  # blue`
            },
            {
              question: "Add 'orange' to the end of the list ['apple', 'banana'].",
              solution: `fruits = ["apple", "banana"]
fruits.append("orange")
print(fruits)`
            }
          ]
        },
        assignment: {
          title: "Student Grade Manager",
          description: "Create a program that manages student grades using lists. Add grades, calculate average, find highest and lowest grades.",
          starterCode: `# Your code here
grades = []

# Add grades
grades.append(85)
grades.append(92)
grades.append(78)
grades.append(90)
grades.append(88)

# Calculate statistics
average = sum(grades) / len(grades)
highest = max(grades)
lowest = min(grades)

print(f"Grades: {grades}")
print(f"Average: {average:.2f}")
print(f"Highest: {highest}")
print(f"Lowest: {lowest}")`,
          expectedOutput: "List of grades with average, highest, and lowest values",
          xpReward: 45
        },
        quiz: [
          {
            question: "How do you create a list in Python?",
            options: ["list = ()", "list = {}", "list = []", "list = <>"],
            correctAnswer: 2,
            explanation: "Lists are created using square brackets []."
          },
          {
            question: "What does list.append() do?",
            options: ["Removes last item", "Adds item to end", "Sorts the list", "Reverses the list"],
            correctAnswer: 1,
            explanation: "append() adds a single item to the end of the list."
          },
          {
            question: "What is the index of the last item in a list of 5 items?",
            options: ["5", "4", "-1", "0"],
            correctAnswer: 2,
            explanation: "The last item can be accessed with index -1 (negative indexing)."
          },
          {
            question: "Which method removes and returns the last item?",
            options: ["remove()", "delete()", "pop()", "clear()"],
            correctAnswer: 2,
            explanation: "pop() removes and returns the last item (or item at specified index)."
          },
          {
            question: "What does list[1:4] return?",
            options: ["Items at index 1, 2, 3", "Items at index 1, 2, 3, 4", "Items at index 4 only", "Error"],
            correctAnswer: 0,
            explanation: "Slicing [1:4] returns items from index 1 to 3 (4 is exclusive)."
          }
        ],
        outputPrediction: [
          {
            code: `numbers = [3, 1, 4, 1, 5]
numbers.sort()
print(numbers)`,
            question: "What will be the output?",
            correctAnswer: "[1, 1, 3, 4, 5]",
            explanation: "sort() arranges the list in ascending order"
          },
          {
            code: `items = ["a", "b", "c"]
items.reverse()
print(items)`,
            question: "What will be the output?",
            correctAnswer: "['c', 'b', 'a']",
            explanation: "reverse() reverses the order of the list"
          }
        ],
        challenge: {
          title: "List Deduplicator",
          description: "Create a program that removes duplicate items from a list while preserving order.",
          hint: "Create a new list and only add items that haven't been seen before",
          xpReward: 60
        },
        aiExplanation: {
          keyConcepts: ["List Creation", "List Indexing", "List Methods", "List Slicing"],
          commonMistakes: ["Confusing append() and extend()", "Off-by-one errors in indexing", "Modifying list while iterating"],
          tips: ["Use append() for single items, extend() for multiple items", "Remember negative indices for accessing from end", "Use list comprehension for concise list creation"]
        },
        notes: "Lists are mutable - you can change them after creation. This is different from strings which are immutable. Always be careful when modifying lists while iterating over them."
      },
      {
        day: 5,
        title: "Dictionaries and Key-Value Pairs",
        topic: "Structured Data Storage",
        duration: "50 minutes",
        xp: 60,
        theory: {
          explanation: "Dictionaries are unordered collections of key-value pairs, optimized for fast lookups. They are essential for storing structured data and implementing efficient data retrieval systems.",
          deepExplanation: "Dictionaries use curly braces {} with key-value pairs separated by colons. Keys must be immutable (strings, numbers, tuples), while values can be any data type. Dictionaries provide O(1) average time complexity for lookups, making them highly efficient. Common operations include adding, updating, deleting, and accessing values by key.",
          beginnerExplanation: "Think of a dictionary like a real dictionary - you look up a word (key) to find its definition (value). In programming, dictionaries store data in pairs: a unique key and its associated value.",
          realWorldExamples: [
            "User profiles (name, email, age)",
            "Configuration settings",
            "API responses",
            "Database records"
          ],
          syntaxExplanation: "Dictionaries use curly braces {}. Format: {key: value}. Access values using dictionary[key]. Keys must be unique.",
          codeExamples: [
            {
              title: "Creating and Accessing Dictionaries",
              code: `# Creating dictionaries
person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

# Accessing values
print(person["name"])        # John
print(person.get("age"))     # 30
print(person.get("country", "USA"))  # USA (default)

# Adding/updating
person["email"] = "john@email.com"
person["age"] = 31

print(person)`,
              explanation: "Dictionaries store key-value pairs. Access values using square brackets with the key. get() method allows default values if key doesn't exist."
            },
            {
              title: "Dictionary Methods",
              code: `student = {"name": "Alice", "grade": 85, "course": "Python"}

# Common methods
print(student.keys())        # All keys
print(student.values())      # All values
print(student.items())       # All key-value pairs

# Removing items
del student["grade"]         # Delete by key
removed = student.pop("course")  # Remove and return

# Checking existence
print("name" in student)     # True
print("grade" in student)    # False

print(student)`,
              explanation: "keys() returns all keys, values() returns all values, items() returns key-value pairs. del removes by key, pop() removes and returns value."
            }
          ]
        },
        practice: {
          problems: [
            {
              question: "Create a dictionary for a book with title, author, and year. Print the author.",
              solution: `book = {
    "title": "Python Programming",
    "author": "John Smith",
    "year": 2023
}
print(book["author"])`
            },
            {
              question: "Add a new key 'price' with value 29.99 to an existing dictionary.",
              solution: `product = {"name": "Laptop", "brand": "Dell"}
product["price"] = 29.99
print(product)`
            }
          ]
        },
        assignment: {
          title: "Student Information System",
          description: "Create a dictionary-based system to store and manage student information including name, age, grades, and contact details.",
          starterCode: `# Your code here
student = {
    "name": "",
    "age": 0,
    "grades": [],
    "email": "",
    "phone": ""
}

# Populate with data
student["name"] = "Alice Johnson"
student["age"] = 20
student["grades"] = [85, 92, 78, 90, 88]
student["email"] = "alice@email.com"
student["phone"] = "555-1234"

# Calculate average grade
avg_grade = sum(student["grades"]) / len(student["grades"])

# Display student info
print("=== STUDENT INFORMATION ===")
for key, value in student.items():
    print(f"{key.title()}: {value}")

print(f"Average Grade: {avg_grade:.2f}")`,
          expectedOutput: "Formatted student information with average grade",
          xpReward: 45
        },
        quiz: [
          {
            question: "How do you create a dictionary?",
            options: ["dict = ()", "dict = {}", "dict = []", "dict = <>"],
            correctAnswer: 1,
            explanation: "Dictionaries are created using curly braces {}."
          },
          {
            question: "What happens if you access a non-existent key with []?",
            options: ["Returns None", "Returns empty string", "Raises KeyError", "Returns 0"],
            correctAnswer: 2,
            explanation: "Accessing a non-existent key with [] raises a KeyError. Use get() to avoid this."
          },
          {
            question: "Which method returns all keys?",
            options: ["values()", "keys()", "items()", "all()"],
            correctAnswer: 1,
            explanation: "The keys() method returns a view of all dictionary keys."
          },
          {
            question: "Can dictionary keys be lists?",
            options: ["Yes", "No", "Only if empty", "Only with one element"],
            correctAnswer: 1,
            explanation: "Dictionary keys must be immutable (hashable). Lists are mutable, so they can't be keys."
          },
          {
            question: "What does dict.pop(key) do?",
            options: ["Adds a key", "Removes and returns value", "Returns the key", "Checks if key exists"],
            correctAnswer: 1,
            explanation: "pop() removes the key-value pair and returns the value."
          }
        ],
        outputPrediction: [
          {
            code: `person = {"name": "John", "age": 30}
person["age"] = 31
print(person["age"])`,
            question: "What will be the output?",
            correctAnswer: "31",
            explanation: "Dictionaries are mutable - you can update values by assigning to the key"
          },
          {
            code: `data = {"a": 1, "b": 2}
print(len(data))`,
            question: "What will be the output?",
            correctAnswer: "2",
            explanation: "len() returns the number of key-value pairs"
          }
        ],
        challenge: {
          title: "Word Frequency Counter",
          description: "Create a program that counts the frequency of each word in a given sentence using a dictionary.",
          hint: "Split the sentence into words, then iterate and count occurrences",
          xpReward: 55
        },
        aiExplanation: {
          keyConcepts: ["Dictionary Creation", "Key-Value Access", "Dictionary Methods", "Dictionary Iteration"],
          commonMistakes: ["Using mutable objects as keys", "Forgetting that keys are case-sensitive", "Confusing keys() and values()"],
          tips: ["Use get() method to avoid KeyError", "Remember keys must be unique and immutable", "Use items() to iterate over key-value pairs"]
        },
        notes: "Dictionaries are unordered in Python versions before 3.7. From Python 3.7+, dictionaries maintain insertion order. Always use immutable objects (strings, numbers, tuples) as keys."   },
      {
        day: 6,
        title: "Conditions and If Statements",
        topic: "Making Decisions in Code",
        duration: "45 minutes",
        xp: 55,
        theory: {
          explanation: "Conditional statements allow your program to make decisions based on different conditions. The if, elif, and else statements control the flow of execution based on boolean expressions.",
          deepExplanation: "Python uses indentation to define blocks within conditional statements. The if statement evaluates a condition and executes its block if True. elif (else if) checks additional conditions, and else provides a default case. Conditions can use comparison operators (==, !=, <, >, <=, >=) and logical operators (and, or, not).",
          beginnerExplanation: "Think of if statements as decision points. Just like you decide to take an umbrella if it's raining, your program can make decisions based on conditions.",
          realWorldExamples: [
            "User authentication (if password matches)",
            "Grade calculation (if score >= 90)",
            "Form validation (if fields are filled)",
            "Game logic (if player wins)"
          ],
          syntaxExplanation: "Use if, elif, else with colons. Indent the code block. Conditions must evaluate to True or False.",
          codeExamples: [
            {
              title: "Basic If Statement",
              code: `age = 18

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")`,
              explanation: "The if statement checks if age is 18 or more. If True, it prints 'adult'. Otherwise, it prints 'minor'."
            },
            {
              title: "Multiple Conditions",
              code: `score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Your grade: {grade}")`,
              explanation: "elif allows checking multiple conditions in sequence. The first True condition executes its block."
            }
          ]
        },
        practice: {
          problems: [
            {
              question: "Write a program that checks if a number is positive, negative, or zero.",
              solution: `num = -5
if num > 0:
    print("Positive")
elif num < 0:
    print("Negative")
else:
    print("Zero")`
            }
          ]
        },
        assignment: {
          title: "Age Category Classifier",
          description: "Create a program that classifies a person into age categories: Child (0-12), Teen (13-19), Adult (20-59), Senior (60+)",
          starterCode: `age = int(input("Enter your age: "))

if age >= 60:
    category = "Senior"
elif age >= 20:
    category = "Adult"
elif age >= 13:
    category = "Teen"
else:
    category = "Child"

print(f"Age Category: {category}")`,
          expectedOutput: "Correct age category based on input",
          xpReward: 40
        },
        quiz: [
          {
            question: "What keyword is used for 'else if' in Python?",
            options: ["else if", "elseif", "elif", "elsif"],
            correctAnswer: 2,
            explanation: "Python uses 'elif' for else if conditions."
          },
          {
            question: "What happens if no condition is True?",
            options: ["Error", "Nothing executes", "else block executes", "First block executes"],
            correctAnswer: 2,
            explanation: "If no condition is True and an else block exists, it executes."
          },
          {
            question: "Which operator checks equality?",
            options: ["=", "==", "===", "equals"],
            correctAnswer: 1,
            explanation: "Use == for equality comparison. = is for assignment."
          },
          {
            question: "What does 'not' do?",
            options: ["Negates a condition", "Combines conditions", "Checks equality", "None of the above"],
            correctAnswer: 0,
            explanation: "not reverses the boolean value (True becomes False, False becomes True)."
          },
          {
            question: "What is the output of: if True: print('A') else: print('B')?",
            options: ["A", "B", "Error", "Nothing"],
            correctAnswer: 0,
            explanation: "The condition is True, so the if block executes."
          }
        ],
        outputPrediction: [
          {
            code: `x = 10
if x > 5 and x < 15:
    print("In range")`,
            question: "What will be the output?",
            correctAnswer: "In range",
            explanation: "10 is greater than 5 AND less than 15, so condition is True"
          },
          {
            code: `if False or True:
    print("Yes")`,
            question: "What will be the output?",
            correctAnswer: "Yes",
            explanation: "or returns True if at least one condition is True"
          }
        ],
        challenge: {
          title: "Leap Year Checker",
          description: "Create a program that checks if a year is a leap year (divisible by 4, not by 100 unless also by 400)",
          hint: "Use nested if statements or complex condition with and/or",
          xpReward: 50
        },
        aiExplanation: {
          keyConcepts: ["If Statements", "Elif", "Else", "Logical Operators"],
          commonMistakes: ["Using = instead of ==", "Forgetting colons", "Wrong indentation"],
          tips: ["Always use == for comparison", "Indent consistently (4 spaces)", "Use elif for multiple conditions"]
        },
        notes: "Python relies on indentation for code blocks. Always use 4 spaces for consistency. Never mix tabs and spaces."
      },
      {
        day: 7,
        title: "Loops - For Loops",
        topic: "Repeating Actions",
        duration: "50 minutes",
        xp: 60,
        theory: {
          explanation: "Loops allow you to execute code repeatedly. For loops iterate over sequences (lists, strings, ranges) and are ideal when you know the number of iterations in advance.",
          deepExplanation: "Python's for loop is more powerful than traditional C-style loops. It iterates over any iterable object. The range() function generates sequences of numbers. You can use break to exit a loop early, continue to skip to the next iteration, and else to execute code after normal loop completion. Nested loops allow iterating over multiple dimensions.",
          beginnerExplanation: "A for loop repeats an action for each item in a collection. Like checking each item in a shopping list, you perform the same action on every item.",
          realWorldExamples: [
            "Processing each item in a list",
            "Generating sequences of numbers",
            "Iterating over file lines",
            "Batch processing data"
          ],
          syntaxExplanation: "for item in sequence: followed by indented block. range(start, stop, step) generates number sequences.",
          codeExamples: [
            {
              title: "Basic For Loop",
              code: `# Loop through a list
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(f"I like {fruit}")

# Loop through a range
for i in range(5):
    print(f"Number: {i}")`,
              explanation: "for iterates over each item in the sequence. range(5) generates 0, 1, 2, 3, 4."
            },
            {
              title: "Range with Parameters",
              code: `# range(start, stop, step)
for i in range(1, 10, 2):  # 1, 3, 5, 7, 9
    print(i)

# Reverse loop
for i in range(10, 0, -1):  # 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
    print(i)

# Loop with index and value
colors = ["red", "green", "blue"]
for index, color in enumerate(colors):
    print(f"{index}: {color}")`,
              explanation: "range(start, stop, step) gives control over sequence. enumerate() provides both index and value."
            }
          ]
        },
        practice: {
          problems: [
            {
              question: "Print numbers from 1 to 10 using a for loop.",
              solution: `for i in range(1, 11):
    print(i)`
            },
            {
              question: "Print each character in 'Python' on a new line.",
              solution: `for char in "Python":
    print(char)`
            }
          ]
        },
        assignment: {
          title: "Sum Calculator",
          description: "Create a program that calculates the sum of all numbers from 1 to 100 using a for loop.",
          starterCode: `total = 0

for i in range(1, 101):
    total += i

print(f"Sum of 1 to 100: {total}")`,
          expectedOutput: "5050",
          xpReward: 35
        },
        quiz: [
          {
            question: "What does range(5) generate?",
            options: ["1, 2, 3, 4, 5", "0, 1, 2, 3, 4", "0, 1, 2, 3, 4, 5", "5, 5, 5, 5, 5"],
            correctAnswer: 1,
            explanation: "range(5) generates 0 to 4 (5 is exclusive)."
          },
          {
            question: "What keyword exits a loop early?",
            options: ["stop", "exit", "break", "return"],
            correctAnswer: 2,
            explanation: "break exits the loop immediately."
          },
          {
            question: "What does enumerate() do?",
            options: ["Counts items", "Returns index and value", "Sorts items", "Filters items"],
            correctAnswer: 1,
            explanation: "enumerate() returns pairs of (index, value)."
          },
          {
            question: "What is range(1, 5)?",
            options: ["1, 2, 3, 4, 5", "1, 2, 3, 4", "0, 1, 2, 3, 4", "5"],
            correctAnswer: 1,
            explanation: "range(1, 5) generates 1, 2, 3, 4 (5 is exclusive)."
          },
          {
            question: "What does continue do?",
            options: ["Exits loop", "Skips to next iteration", "Restarts loop", "Pauses loop"],
            correctAnswer: 1,
            explanation: "continue skips the rest of the current iteration and moves to the next."
          }
        ],
        outputPrediction: [
          {
            code: `for i in range(3):
    print(i * 2)`,
            question: "What will be the output?",
            correctAnswer: "0\n2\n4",
            explanation: "Loop runs for i=0,1,2 and prints i*2"
          },
          {
            code: `total = 0
for i in range(1, 4):
    total += i
print(total)`,
            question: "What will be the output?",
            correctAnswer: "6",
            explanation: "1 + 2 + 3 = 6"
          }
        ],
        challenge: {
          title: "Factorial Calculator",
          description: "Create a program that calculates the factorial of a number using a for loop (n! = n × (n-1) × ... × 1)",
          hint: "Start with result = 1, multiply by each number from 1 to n",
          xpReward: 55
        },
        aiExplanation: {
          keyConcepts: ["For Loops", "Range Function", "Enumerate", "Break and Continue"],
          commonMistakes: ["Off-by-one errors in range", "Forgetting to initialize variables", "Infinite loops with while"],
          tips: ["Remember range(stop) is exclusive", "Use enumerate() when you need index", "Initialize variables before loops"]
        },
        notes: "for loops are ideal when you know the number of iterations. Use while loops when you need to loop until a condition changes."
      },
      {
        day: 8,
        title: "Loops - While Loops",
        topic: "Conditional Repetition",
        duration: "45 minutes",
        xp: 55,
        theory: {
          explanation: "While loops repeat code as long as a condition is True. They're useful when you don't know in advance how many iterations you need.",
          deepExplanation: "While loops check the condition before each iteration. If the condition is False initially, the loop never executes. Be careful with while loops to avoid infinite loops - always ensure the condition will eventually become False. You can use break to exit early and continue to skip iterations. While loops are commonly used for input validation, game loops, and processing until a condition is met.",
          beginnerExplanation: "A while loop keeps repeating while a condition is true. Like 'keep asking for input until the user enters a valid value'.",
          realWorldExamples: [
            "Input validation (keep asking until valid)",
            "Game loops (keep playing until game over)",
            "Waiting for events",
            "Processing until completion"
          ],
          syntaxExplanation: "while condition: followed by indented block. Condition must eventually become False to avoid infinite loops.",
          codeExamples: [
            {
              title: "Basic While Loop",
              code: `count = 0

while count < 5:
    print(f"Count: {count}")
    count += 1

print("Loop finished!")`,
              explanation: "The loop runs while count < 5. count increases each iteration, eventually making the condition False."
            },
            {
              title: "Input Validation",
              code: `while True:
    age = input("Enter your age: ")
    
    if age.isdigit() and int(age) > 0:
        age = int(age)
        break
    else:
        print("Please enter a valid positive number")

print(f"Your age: {age}")`,
              explanation: "This loop keeps asking for input until the user enters a valid positive number. break exits the loop."
            }
          ]
        },
        practice: {
          problems: [
            {
              question: "Print numbers from 10 down to 1 using a while loop.",
              solution: `count = 10
while count > 0:
    print(count)
    count -= 1`
            }
          ]
        },
        assignment: {
          title: "Password Validator",
          description: "Create a program that keeps asking for a password until it meets criteria (at least 8 characters, contains uppercase and lowercase).",
          starterCode: `while True:
    password = input("Enter password: ")
    
    # Check criteria
    has_upper = any(c.isupper() for c in password)
    has_lower = any(c.islower() for c in password)
    is_long_enough = len(password) >= 8
    
    if has_upper and has_lower and is_long_enough:
        print("Password accepted!")
        break
    else:
        print("Password must be at least 8 characters with uppercase and lowercase")`,
          expectedOutput: "Valid password that meets all criteria",
          xpReward: 45
        },
        quiz: [
          {
            question: "When does a while loop stop?",
            options: ["After 10 iterations", "When condition becomes False", "When break is called", "Both B and C"],
            correctAnswer: 3,
            explanation: "While loops stop when condition becomes False or break is called."
          },
          {
            question: "What happens if condition is initially False?",
            options: ["Runs once", "Never runs", "Runs infinitely", "Error"],
            correctAnswer: 1,
            explanation: "If condition is False initially, the while loop never executes."
          },
          {
            question: "How do you avoid infinite loops?",
            options: ["Use break", "Ensure condition changes", "Use for loop instead", "All of the above"],
            correctAnswer: 1,
            explanation: "Ensure the condition will eventually become False by modifying variables in the loop."
          },
          {
            question: "What does while True: do?",
            options: ["Checks if True exists", "Creates infinite loop", "Checks boolean True", "Error"],
            correctAnswer: 1,
            explanation: "while True creates an infinite loop that only stops with break."
          },
          {
            question: "Which loop is better for known iterations?",
            options: ["while", "for", "Both", "Neither"],
            correctAnswer: 1,
            explanation: "Use for loops when you know the number of iterations in advance."
          }
        ],
        outputPrediction: [
          {
            code: `i = 1
while i < 5:
    i *= 2
print(i)`,
            question: "What will be the output?",
            correctAnswer: "8",
            explanation: "i starts at 1, doubles each iteration: 1→2→4→8, then loop stops (8 is not < 5)"
          },
          {
            code: `count = 3
while count > 0:
    count -= 1
print(count)`,
            question: "What will be the output?",
            correctAnswer: "0",
            explanation: "count decreases: 3→2→1→0, then loop stops"
          }
        ],
        challenge: {
          title: "Number Guessing Game",
          description: "Create a game where the computer picks a random number (1-100) and the user guesses until correct. Give hints (higher/lower).",
          hint: "Use random module, while loop for guessing, conditional for hints",
          xpReward: 60
        },
        aiExplanation: {
          keyConcepts: ["While Loops", "Loop Control", "Input Validation", "Infinite Loops"],
          commonMistakes: ["Creating infinite loops", "Forgetting to update condition variable", "Using while when for is better"],
          tips: ["Always ensure loop will terminate", "Use break for early exit", "Prefer for loops for known iterations"]
        },
        notes: "Be very careful with while loops - always ensure the condition will eventually become False. Infinite loops can crash your browser/application."
      },
      {
        day: 9,
        title: "Functions",
        topic: "Reusable Code Blocks",
        duration: "55 minutes",
        xp: 65,
        theory: {
          explanation: "Functions are reusable blocks of code that perform specific tasks. They help organize code, avoid repetition, and make programs more modular and maintainable.",
          deepExplanation: "Functions are defined using the def keyword followed by the function name and parentheses. Parameters (inputs) go inside parentheses. Functions can return values using the return statement. Python supports default parameters, keyword arguments, *args for variable positional arguments, and **kwargs for variable keyword arguments. Functions have their own scope - variables inside functions are local unless declared global.",
          beginnerExplanation: "A function is like a recipe - you define it once, then you can use it many times. Functions take inputs (ingredients) and produce outputs (the dish).",
          realWorldExamples: [
            "Calculating discounts",
            "Formatting dates",
            "Validating emails",
            "Processing data"
          ],
          syntaxExplanation: "def function_name(parameters): followed by indented block. Use return to send back a value. Call with function_name(arguments).",
          codeExamples: [
            {
              title: "Basic Function",
              code: `def greet(name):
    return f"Hello, {name}!"

# Call the function
message = greet("Alice")
print(message)  # Hello, Alice!

print(greet("Bob"))  # Hello, Bob!`,
              explanation: "def defines the function. name is a parameter. return sends back a value. Call with arguments."
            },
            {
              title: "Function with Multiple Parameters",
              code: `def calculate_rectangle(length, width):
    area = length * width
    perimeter = 2 * (length + width)
    return area, perimeter

# Unpack return values
area, perimeter = calculate_rectangle(5, 3)
print(f"Area: {area}")
print(f"Perimeter: {perimeter}")`,
              explanation: "Functions can have multiple parameters and return multiple values as a tuple."
            }
          ]
        },
        practice: {
          problems: [
            {
              question: "Create a function that returns the square of a number.",
              solution: `def square(num):
    return num ** 2

print(square(5))  # 25`
            },
            {
              question: "Create a function that checks if a number is even.",
              solution: `def is_even(num):
    return num % 2 == 0

print(is_even(4))  # True
print(is_even(3))  # False`
            }
          ]
        },
        assignment: {
          title: "Grade Calculator Function",
          description: "Create a function that takes a score (0-100) and returns the letter grade (A, B, C, D, F).",
          starterCode: `def get_grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"

# Test the function
print(get_grade(85))  # B
print(get_grade(92))  # A
print(get_grade(45))  # F`,
          expectedOutput: "Correct letter grades for given scores",
          xpReward: 40
        },
        quiz: [
          {
            question: "What keyword defines a function?",
            options: ["function", "func", "def", "define"],
            correctAnswer: 2,
            explanation: "Python uses 'def' to define functions."
          },
          {
            question: "What does return do?",
            options: ["Prints value", "Exits function and sends value", "Stops program", "Nothing"],
            correctAnswer: 1,
            explanation: "return exits the function and sends a value back to the caller."
          },
          {
            question: "What are function inputs called?",
            options: ["Outputs", "Returns", "Parameters", "Variables"],
            correctAnswer: 2,
            explanation: "Parameters (or arguments) are the inputs to a function."
          },
          {
            question: "Can a function return multiple values?",
            options: ["No", "Yes, as a tuple", "Only one value", "Only if they're the same type"],
            correctAnswer: 1,
            explanation: "Functions can return multiple values as a tuple, which can be unpacked."
          },
          {
            question: "What is function scope?",
            options: ["Function name", "Where function can be called", "Variables inside function", "Function length"],
            correctAnswer: 2,
            explanation: "Scope refers to the visibility of variables - variables inside functions are local."
          }
        ],
        outputPrediction: [
          {
            code: `def add(a, b):
    return a + b

result = add(3, 5)
print(result)`,
            question: "What will be the output?",
            correctAnswer: "8",
            explanation: "add(3, 5) returns 8"
          },
          {
            code: `def multiply(x):
    return x * 2

print(multiply(4))`,
            question: "What will be the output?",
            correctAnswer: "8",
            explanation: "multiply(4) returns 4 * 2 = 8"
          }
        ],
        challenge: {
          title: "Prime Number Checker",
          description: "Create a function that checks if a number is prime (only divisible by 1 and itself).",
          hint: "Check divisibility from 2 to sqrt(n), return False if any divisor found",
          xpReward: 55
        },
        aiExplanation: {
          keyConcepts: ["Function Definition", "Parameters", "Return Values", "Function Scope"],
          commonMistakes: ["Forgetting return statement", "Confusing parameters and arguments", "Modifying mutable default arguments"],
          tips: ["Use descriptive function names", "Keep functions focused on one task", "Use docstrings to document functions"]
        },
        notes: "Functions make code reusable and organized. Use them whenever you have code that needs to be executed multiple times. Follow DRY principle (Don't Repeat Yourself)."
      },
      {
        day: 10,
        title: "Lists Advanced - Comprehensions and Methods",
        topic: "Advanced List Operations",
        duration: "50 minutes",
        xp: 60,
        theory: {
          explanation: "List comprehensions provide a concise way to create lists. Advanced list methods include sorting, reversing, and complex manipulations that make data processing efficient and readable.",
          deepExplanation: "List comprehensions use the syntax [expression for item in iterable if condition]. They're more readable and often faster than equivalent for loops. You can nest comprehensions for complex transformations. Advanced methods like sort() with key functions, filter(), map(), and reduce() provide powerful data processing capabilities. Understanding list slicing with step values and negative indices is crucial for efficient data manipulation.",
          beginnerExplanation: "List comprehensions are a shortcut for creating lists. Instead of writing a loop to build a list, you can do it in one line. It's like a recipe that creates a list in one go.",
          realWorldExamples: [
            "Filtering data",
            "Transforming data",
            "Extracting specific information",
            "Data cleaning"
          ],
          syntaxExplanation: "[expression for item in list if condition]. Can include nested loops and conditions.",
          codeExamples: [
            {
              title: "List Comprehension",
              code: `# Traditional way
squares = []
for i in range(10):
    squares.append(i ** 2)

# List comprehension
squares = [i ** 2 for i in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# With condition
evens = [i for i in range(20) if i % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]`,
              explanation: "List comprehensions create lists concisely. The if clause filters items."
            },
            {
              title: "Advanced List Operations",
              code: `# Sort with key function
students = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]
students.sort(key=lambda x: x[1], reverse=True)
print(students)  # Sorted by score descending

# Filter and map
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens_squared = [x ** 2 for x in numbers if x % 2 == 0]
print(evens_squared)  # [4, 16, 36, 64, 100]

# Nested comprehension
matrix = [[i * j for j in range(3)] for i in range(3)]
print(matrix)  # [[0, 0, 0], [0, 1, 2], [0, 2, 4]]`,
              explanation: "Advanced operations include custom sorting, filtering with conditions, and nested comprehensions for multi-dimensional data."
            }
          ]
        },
        practice: {
          problems: [
            {
              question: "Create a list of squares of numbers 1-10 using list comprehension.",
              solution: `squares = [i ** 2 for i in range(1, 11)]
print(squares)`
            },
            {
              question: "Filter even numbers from 1-20 using list comprehension.",
              solution: `evens = [i for i in range(1, 21) if i % 2 == 0]
print(evens)`
            }
          ]
        },
        assignment: {
          title: "Data Processor",
          description: "Create a program that processes a list of student grades: filter passing grades (>=60), convert to letter grades, and sort by score.",
          starterCode: `grades = [85, 42, 67, 91, 55, 78, 33, 88, 72, 95]

# Filter passing grades
passing = [g for g in grades if g >= 60]

# Convert to letter grades
def get_letter(score):
    if score >= 90: return "A"
    elif score >= 80: return "B"
    elif score >= 70: return "C"
    elif score >= 60: return "D"
    else: return "F"

letter_grades = [(g, get_letter(g)) for g in passing]

# Sort by score descending
letter_grades.sort(key=lambda x: x[0], reverse=True)

print("Passing Grades:")
for score, letter in letter_grades:
    print(f"{score}: {letter}")`,
          expectedOutput: "Sorted list of passing grades with letter grades",
          xpReward: 50
        },
        quiz: [
          {
            question: "What is the syntax for list comprehension?",
            options: ["(x for x in list)", "{x for x in list}", "[x for x in list]", "<x for x in list>"],
            correctAnswer: 2,
            explanation: "List comprehensions use square brackets []."
          },
          {
            question: "What does the if clause do in list comprehension?",
            options: ["Always executes", "Filters items", "Creates nested list", "Nothing"],
            correctAnswer: 1,
            explanation: "The if clause filters items - only items meeting the condition are included."
          },
          {
            question: "What does sort(key=lambda x: x[1]) do?",
            options: ["Sorts by first element", "Sorts by second element", "Sorts in reverse", "Nothing"],
            correctAnswer: 1,
            explanation: "The key function extracts the second element for sorting comparison."
            },
          {
            question: "Can list comprehensions be nested?",
            options: ["No", "Yes", "Only with certain types", "Only with numbers"],
            correctAnswer: 1,
            explanation: "List comprehensions can be nested for multi-dimensional data structures."
          },
          {
            question: "What is the output of [x*2 for x in range(3)]?",
            options: ["[0, 2, 4]", "[1, 2, 3]", "[2, 4, 6]", "[0, 1, 2]"],
            correctAnswer: 0,
            explanation: "range(3) = 0,1,2. Each multiplied by 2: [0, 2, 4]."
          }
        ],
        outputPrediction: [
          {
            code: `result = [x for x in range(10) if x % 2 == 0]
print(result)`,
            question: "What will be the output?",
            correctAnswer: "[0, 2, 4, 6, 8]",
            explanation: "Filters even numbers from 0-9"
          },
          {
            code: `squares = [i**2 for i in range(4)]
print(squares)`,
            question: "What will be the output?",
            correctAnswer: "[0, 1, 4, 9]",
            explanation: "Squares of 0,1,2,3"
          }
        ],
        challenge: {
          title: "Matrix Transposer",
          description: "Create a function that transposes a matrix (rows become columns) using list comprehension.",
          hint: "Use nested list comprehension with zip or indexing",
          xpReward: 60
        },
        aiExplanation: {
          keyConcepts: ["List Comprehensions", "Lambda Functions", "Advanced Sorting", "Nested Comprehensions"],
          commonMistakes: ["Overusing comprehensions for complex logic", "Confusing map/filter with comprehensions", "Lambda syntax errors"],
          tips: ["Use comprehensions for simple transformations", "Keep comprehensions readable", "Use lambda for short, simple functions"]
        },
        notes: "List comprehensions are powerful but don't overuse them. If the logic becomes too complex, a regular for loop may be more readable."
      }
      // Continue with more days for beginner phase...
    ]
  },
  // INTERMEDIATE PHASE (Days 31-60)
  intermediate: {
    phase: "INTERMEDIATE",
    days: [
      {
        day: 31,
        title: "Object-Oriented Programming - Classes",
        topic: "Introduction to OOP",
        duration: "60 minutes",
        xp: 75,
        theory: {
          explanation: "Object-Oriented Programming (OOP) is a programming paradigm based on 'objects', which can contain data and code. Classes are blueprints for creating objects with specific attributes and methods.",
          deepExplanation: "Classes define the structure and behavior of objects. The __init__ method is the constructor that initializes object attributes. Self refers to the instance being created. Methods are functions defined inside classes that operate on object data. OOP principles include encapsulation (hiding internal details), inheritance (reusing code), and polymorphism (same interface, different implementations).",
          beginnerExplanation: "Think of a class as a cookie cutter and objects as the cookies. The class (cookie cutter) defines the shape, and you can create many objects (cookies) from it.",
          realWorldExamples: [
            "User accounts in applications",
            "Product catalogs in e-commerce",
            "Game characters and entities",
            "Database models"
          ],
          syntaxExplanation: "class ClassName: with __init__ method for initialization. self parameter refers to instance.",
          codeExamples: [
            {
              title: "Basic Class",
              code: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def greet(self):
        return f"Hello, I'm {self.name} and I'm {self.age} years old"

# Create objects
person1 = Person("Alice", 25)
person2 = Person("Bob", 30)

print(person1.greet())
print(person2.greet())`,
              explanation: "The class defines the structure. __init__ initializes attributes. Objects are instances of the class."
            }
          ]
        },
        practice: {
          problems: [
            {
              question: "Create a Car class with make, model, and year attributes.",
              solution: `class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year`
            }
          ]
        },
        assignment: {
          title: "Student Class System",
          description: "Create a Student class with name, age, grades list, and methods to calculate average grade.",
          starterCode: `class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.grades = []
    
    def add_grade(self, grade):
        self.grades.append(grade)
    
    def get_average(self):
        if not self.grades:
            return 0
        return sum(self.grades) / len(self.grades)

student = Student("Alice", 20)
student.add_grade(85)
student.add_grade(92)
print(student.get_average())`,
          expectedOutput: "Average grade calculation",
          xpReward: 50
        },
        quiz: [
          {
            question: "What is a class?",
            options: ["An object", "A blueprint for objects", "A function", "A variable"],
            correctAnswer: 1,
            explanation: "A class is a blueprint or template for creating objects."
          },
          {
            question: "What does __init__ do?",
            options: ["Destroys object", "Initializes object", "Prints object", "Copies object"],
            correctAnswer: 1,
            explanation: "__init__ is the constructor that initializes object attributes when created."
          },
          {
            question: "What does self refer to?",
            options: ["The class", "The instance", "The parent", "The module"],
            correctAnswer: 1,
            explanation: "self refers to the current instance of the class."
          },
          {
            question: "How do you create an object?",
            options: ["new Person()", "Person()", "create Person()", "Person.new()"],
            correctAnswer: 1,
            explanation: "Objects are created by calling the class name like a function: Person()."
          },
          {
            question: "What is a method?",
            options: ["A variable", "A function inside a class", "A class attribute", "An object"],
            correctAnswer: 1,
            explanation: "Methods are functions defined inside a class that operate on object data."
          }
        ],
        outputPrediction: [
          {
            code: `class Box:
    def __init__(self, size):
        self.size = size

box = Box(5)
print(box.size)`,
            question: "What will be the output?",
            correctAnswer: "5",
            explanation: "The size attribute is set to 5"
          }
        ],
        challenge: {
          title: "Bank Account Class",
          description: "Create a BankAccount class with balance, deposit, withdraw methods.",
          hint: "Use if statement in withdraw to check if balance is sufficient",
          xpReward: 65
        },
        aiExplanation: {
          keyConcepts: ["Classes", "Objects", "__init__", "Methods"],
          commonMistakes: ["Forgetting self parameter", "Confusing class and instance variables"],
          tips: ["Always include self as first parameter", "Use __init__ for initialization"]
        },
        notes: "OOP is fundamental to Python. Most Python libraries use classes."
      },
      {
        day: 32,
        title: "File Handling",
        topic: "Reading and Writing Files",
        duration: "55 minutes",
        xp: 70,
        theory: {
          explanation: "File handling allows programs to read from and write to files on the system. Python provides built-in functions and the 'with' statement for safe file operations.",
          deepExplanation: "The open() function opens files and returns a file object. Modes include 'r' (read), 'w' (write), 'a' (append), and 'r+' (read/write). The 'with' statement automatically closes files even if exceptions occur. File methods include read(), readline(), readlines(), write(), and writelines.",
          beginnerExplanation: "File handling is like reading and writing documents. You can open a file, read its contents, write new content, and close it when done.",
          realWorldExamples: [
            "Reading configuration files",
            "Logging application events",
            "Processing CSV data",
            "Saving user preferences"
          ],
          syntaxExplanation: "open(filename, mode). Use 'with' for automatic closing. Modes: 'r', 'w', 'a', 'r+'.",
          codeExamples: [
            {
              title: "Reading Files",
              code: `# Read entire file
with open('example.txt', 'r') as file:
    content = file.read()
    print(content)

# Read line by line
with open('example.txt', 'r') as file:
    for line in file:
        print(line.strip())`,
              explanation: "The 'with' statement ensures files are closed automatically."
            },
            {
              title: "Writing Files",
              code: `# Write to file (overwrites)
with open('output.txt', 'w') as file:
    file.write("Hello, World!")

# Append to file
with open('output.txt', 'a') as file:
    file.write("\\nAppended text")`,
              explanation: "'w' mode overwrites, 'a' mode appends to end."
            }
          ]
        },
        practice: {
          problems: [
            {
              question: "Write a program that reads a file and counts lines.",
              solution: `with open('file.txt', 'r') as file:
    lines = file.readlines()
    print(f"Lines: {len(lines)}")`
            }
          ]
        },
        assignment: {
          title: "Log File Analyzer",
          description: "Read a log file, count ERROR and INFO occurrences, write report.",
          starterCode: `log_data = "ERROR: File not found\\nINFO: User logged in\\nERROR: Timeout"

with open('app.log', 'w') as f:
    f.write(log_data)

error_count = 0
info_count = 0

with open('app.log', 'r') as f:
    for line in f:
        if 'ERROR' in line:
            error_count += 1
        elif 'INFO' in line:
            info_count += 1

print(f"ERROR: {error_count}, INFO: {info_count}")`,
          expectedOutput: "Error and info counts",
          xpReward: 55
        },
        quiz: [
          {
            question: "What mode opens a file for writing?",
            options: ["'r'", "'w'", "'a'", "'read'"],
            correctAnswer: 1,
            explanation: "'w' mode opens file for writing (overwrites existing)."
          },
          {
            question: "What does the 'with' statement do?",
            options: ["Opens file", "Closes file automatically", "Reads file", "Writes file"],
            correctAnswer: 1,
            explanation: "The 'with' statement ensures files are closed automatically."
          },
          {
            question: "What mode appends to a file?",
            options: ["'r'", "'w'", "'a'", "'+'"],
            correctAnswer: 2,
            explanation: "'a' mode appends content to the end."
          },
          {
            question: "What does readlines() return?",
            options: ["String", "List of strings", "Integer", "Boolean"],
            correctAnswer: 1,
            explanation: "readlines() returns a list where each element is a line."
          },
          {
            question: "Why close files?",
            options: ["Not important", "To save memory", "To release resources", "Faster"],
            correctAnswer: 2,
            explanation: "Closing files releases system resources."
          }
        ],
        outputPrediction: [
          {
            code: `with open('test.txt', 'w') as f:
    f.write("Hello")`,
            question: "What happens if test.txt doesn't exist?",
            correctAnswer: "File is created",
            explanation: "'w' mode creates the file if it doesn't exist"
          }
        ],
        challenge: {
          title: "Word Counter from File",
          description: "Read a text file and count word frequency.",
          hint: "Use dictionary to count words, split text into words",
          xpReward: 60
        },
        aiExplanation: {
          keyConcepts: ["File Modes", "With Statement", "Reading Files", "Writing Files"],
          commonMistakes: ["Forgetting to close files", "Using wrong file mode"],
          tips: ["Always use 'with' statement", "Check if file exists before reading"]
        },
        notes: "Always use the 'with' statement for file operations. It automatically handles closing files."
      }
    ]
  },
  // ADVANCED PHASE (Days 61-90)
  advanced: {
    phase: "ADVANCED",
    days: [
      {
        day: 61,
        title: "Decorators and Context Managers",
        topic: "Advanced Python Features",
        duration: "65 minutes",
        xp: 80,
        theory: {
          explanation: "Decorators are functions that modify the behavior of other functions. Context managers manage resources using the 'with' statement. Both are powerful Python features for writing clean, reusable code.",
          deepExplanation: "Decorators use the @ syntax and wrap functions to add functionality before/after execution. They're implemented as functions that take a function as input and return a wrapper function. Context managers use __enter__ and __exit__ methods to set up and tear down resources.",
          beginnerExplanation: "Decorators are like wrappers around functions - they add extra functionality without changing the original function. Context managers help manage resources like files automatically.",
          realWorldExamples: [
            "Timing function execution",
            "Logging function calls",
            "Authentication checks",
            "Database connection management"
          ],
          syntaxExplanation: "@decorator_name above function definition. Context managers use 'with' statement.",
          codeExamples: [
            {
              title: "Basic Decorator",
              code: `def timer(func):
    def wrapper(*args, **kwargs):
        import time
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.2f} seconds")
        return result
    return wrapper

@timer
def slow_function():
    import time
    time.sleep(1)
    return "Done"

result = slow_function()`,
              explanation: "The @timer decorator wraps the function and times its execution."
            }
          ]
        },
        practice: {
          problems: [
            {
              question: "Create a decorator that prints 'Function called' before executing.",
              solution: `def log_call(func):
    def wrapper(*args, **kwargs):
        print("Function called")
        return func(*args, **kwargs)
    return wrapper

@log_call
def my_function():
    print("Executing")

my_function()`
            }
          ]
        },
        assignment: {
          title: "Retry Decorator",
          description: "Create a decorator that retries a function up to 3 times if it raises an exception.",
          starterCode: `def retry(max_attempts=3):
    def decorator(func):
        def wrapper(*args, **kwargs):
            attempts = 0
            while attempts < max_attempts:
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    attempts += 1
                    if attempts == max_attempts:
                        raise
                    print(f"Attempt {attempts} failed, retrying...")
        return wrapper
    return decorator

@retry(max_attempts=3)
def unreliable_function():
    import random
    if random.random() < 0.7:
        raise Exception("Random failure")
    return "Success!"

result = unreliable_function()
print(result)`,
          expectedOutput: "Function result after retries or final exception",
          xpReward: 60
        },
        quiz: [
          {
            question: "What symbol is used for decorators?",
            options: ["#", "@", "$", "%"],
            correctAnswer: 1,
            explanation: "Decorators use the @ symbol."
          },
          {
            question: "What does a decorator return?",
            options: ["Nothing", "A new function", "The original function", "A class"],
            correctAnswer: 1,
            explanation: "Decorators return a wrapper function."
          },
          {
            question: "What methods define a context manager?",
            options: ["start/stop", "open/close", "__enter__/__exit__", "begin/end"],
            correctAnswer: 2,
            explanation: "Context managers implement __enter__ and __exit__."
          },
          {
            question: "What does *args do?",
            options: ["Multiplies args", "Accepts variable positional arguments", "Accepts keyword arguments", "Nothing"],
            correctAnswer: 1,
            explanation: "*args accepts any number of positional arguments as a tuple."
          },
          {
            question: "What does **kwargs do?",
            options: ["Accepts variable positional arguments", "Accepts variable keyword arguments", "Multiplies kwargs", "Nothing"],
            correctAnswer: 1,
            explanation: "**kwargs accepts any number of keyword arguments as a dictionary."
          }
        ],
        outputPrediction: [
          {
            code: `def decorator(func):
    def wrapper():
        print("Before")
        func()
        print("After")
    return wrapper

@decorator
def hello():
    print("Hello")

hello()`,
            question: "What will be the output?",
            correctAnswer: "Before\nHello\nAfter",
            explanation: "Decorator wraps the function"
          }
        ],
        challenge: {
          title: "Cache Decorator",
          description: "Create a memoization decorator that caches function results.",
          hint: "Use dictionary to store results keyed by arguments",
          xpReward: 70
        },
        aiExplanation: {
          keyConcepts: ["Decorators", "Context Managers", "*args", "**kwargs"],
          commonMistakes: ["Forgetting to return wrapper", "Not preserving function metadata"],
          tips: ["Use functools.wraps to preserve metadata", "Keep decorators simple"]
        },
        notes: "Decorators and context managers are advanced but essential Python features."
      }
    ]
  },
  // EXPERT PHASE (Days 91-110)
  expert: {
    phase: "EXPERT",
    days: [
      {
        day: 91,
        title: "Async Programming with asyncio",
        topic: "Asynchronous Python",
        duration: "70 minutes",
        xp: 85,
        theory: {
          explanation: "Asyncio is Python's asynchronous I/O library for writing concurrent code using async/await syntax. It's essential for high-performance network applications and web servers.",
          deepExplanation: "Asyncio uses an event loop to manage concurrent tasks. async def defines coroutines, await pauses execution until the awaited task completes. This allows multiple I/O operations to run concurrently without threads.",
          beginnerExplanation: "Async programming lets your program do multiple things at once by waiting for I/O operations instead of blocking.",
          realWorldExamples: [
            "Web servers (FastAPI, aiohttp)",
            "Web scraping",
            "Database queries",
            "Real-time applications"
          ],
          syntaxExplanation: "async def for coroutines, await for pausing. Use asyncio.run() to execute.",
          codeExamples: [
            {
              title: "Basic Async Function",
              code: `import asyncio

async def fetch_data():
    print("Fetching data...")
    await asyncio.sleep(2)
    print("Data fetched!")
    return {"data": "result"}

async def main():
    result = await fetch_data()
    print(result)

asyncio.run(main())`,
              explanation: "async def defines a coroutine. await pauses execution until the task completes."
            }
          ]
        },
        practice: {
          problems: [
            {
              question: "Create an async function that simulates downloading with a delay.",
              solution: `import asyncio

async def download_file(filename):
    print(f"Downloading {filename}...")
    await asyncio.sleep(2)
    print(f"{filename} downloaded!")`
            }
          ]
        },
        assignment: {
          title: "Async Web Scraper",
          description: "Create an async web scraper that fetches multiple URLs concurrently.",
          starterCode: `import asyncio
import aiohttp

async def fetch_url(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.text()

async def scrape_multiple(urls):
    tasks = [fetch_url(url) for url in urls]
    results = await asyncio.gather(*tasks)
    return results

# Note: Requires aiohttp installation`,
          expectedOutput: "Concurrent fetching of multiple URLs",
          xpReward: 65
        },
        quiz: [
          {
            question: "What keyword defines an async function?",
            options: ["async def", "await def", "def async", "coroutine"],
            correctAnswer: 0,
            explanation: "async def defines a coroutine function."
          },
          {
            question: "What does await do?",
            options: ["Starts a task", "Pauses until task completes", "Cancels a task", "Nothing"],
            correctAnswer: 1,
            explanation: "await pauses execution until the awaited coroutine completes."
          },
          {
            question: "What runs the event loop?",
            options: ["asyncio.start()", "asyncio.run()", "asyncio.execute()", "asyncio.begin()"],
            correctAnswer: 1,
            explanation: "asyncio.run() starts the event loop."
          },
          {
            question: "What does asyncio.gather() do?",
            options: ["Collects results", "Runs tasks concurrently", "Stops tasks", "Nothing"],
            correctAnswer: 1,
            explanation: "asyncio.gather() runs multiple coroutines concurrently."
          },
          {
            question: "When should you use async?",
            options: ["CPU-intensive tasks", "I/O-bound tasks", "Simple calculations", "Never"],
            correctAnswer: 1,
            explanation: "Async is ideal for I/O-bound tasks like network requests."
          }
        ],
        outputPrediction: [
          {
            code: `import asyncio

async def foo():
    await asyncio.sleep(1)
    return "done"

result = asyncio.run(foo())
print(result)`,
            question: "What will be the output?",
            correctAnswer: "done",
            explanation: "asyncio.run() executes the coroutine"
          }
        ],
        challenge: {
          title: "Async Rate Limiter",
          description: "Create an async rate limiter that limits concurrent requests.",
          hint: "Use asyncio.Semaphore to limit concurrent tasks",
          xpReward: 75
        },
        aiExplanation: {
          keyConcepts: ["Async/Await", "Event Loop", "Coroutines", "Concurrent Tasks"],
          commonMistakes: ["Using async for CPU-bound tasks", "Forgetting await", "Blocking the event loop"],
          tips: ["Use async for I/O operations", "Always await coroutines", "Don't block the event loop"]
        },
        notes: "Async programming is essential for modern Python web development."
      }
    ]
  },
  // AI WITH PYTHON (Days 111-120)
  ai: {
    phase: "AI WITH PYTHON",
    days: [
      {
        day: 111,
        title: "Introduction to Machine Learning",
        topic: "ML Fundamentals with Python",
        duration: "75 minutes",
        xp: 90,
        theory: {
          explanation: "Machine Learning (ML) enables computers to learn from data without explicit programming. Python is the leading language for ML due to libraries like scikit-learn, TensorFlow, and PyTorch.",
          deepExplanation: "ML algorithms learn patterns from data to make predictions. Key types include supervised learning (labeled data), unsupervised learning (unlabeled data), and reinforcement learning (reward-based). The ML workflow includes data collection, preprocessing, feature engineering, model training, evaluation, and deployment.",
          beginnerExplanation: "Machine learning is teaching computers to learn from examples. Instead of programming rules, you show the computer examples and it figures out the patterns itself.",
          realWorldExamples: [
            "Email spam detection",
            "Image recognition",
            "Recommendation systems",
            "Fraud detection"
          ],
          syntaxExplanation: "Use scikit-learn for traditional ML, TensorFlow/PyTorch for deep learning.",
          codeExamples: [
            {
              title: "Basic Classification with scikit-learn",
              code: `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Load dataset
iris = load_iris()
X, y = iris.data, iris.target

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)

print(f"Accuracy: {accuracy:.2f}")`,
              explanation: "scikit-learn provides a simple API for ML."
            }
          ]
        },
        practice: {
          problems: [
            {
              question: "Create a simple ML model that predicts if a number is even or odd.",
              solution: `from sklearn.tree import DecisionTreeClassifier

X = [[1], [2], [3], [4], [5], [6]]
y = [0, 1, 0, 1, 0, 1]

model = DecisionTreeClassifier()
model.fit(X, y)

print(model.predict([[7]]))
print(model.predict([[8]]))`
            }
          ]
        },
        assignment: {
          title: "House Price Predictor",
          description: "Create a regression model to predict house prices based on features.",
          starterCode: `import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

X = np.array([[1500, 3, 10], [2000, 4, 5], [1200, 2, 15]])
y = np.array([300, 450, 250])

model = LinearRegression()
model.fit(X, y)

prediction = model.predict([[1800, 3, 8]])
print(f"Predicted price: ${prediction[0] * 1000:.0f}")`,
          expectedOutput: "Price prediction for new house",
          xpReward: 70
        },
        quiz: [
          {
            question: "What is supervised learning?",
            options: ["Learning without labels", "Learning with labeled data", "Learning with rewards", "Unsupervised learning"],
            correctAnswer: 1,
            explanation: "Supervised learning uses labeled data."
          },
          {
            question: "What library is best for traditional ML?",
            options: ["TensorFlow", "PyTorch", "scikit-learn", "OpenCV"],
            correctAnswer: 2,
            explanation: "scikit-learn is the standard library for traditional ML."
          },
          {
            question: "What does train_test_split do?",
            options: ["Splits data into train/test sets", "Trains the model", "Tests the model", "Nothing"],
            correctAnswer: 0,
            explanation: "train_test_split divides data into training and testing sets."
          },
          {
            question: "What is overfitting?",
            options: ["Model too simple", "Model memorizes training data", "Perfect model", "No error"],
            correctAnswer: 1,
            explanation: "Overfitting occurs when a model learns training data too well."
          },
          {
            question: "What is the purpose of feature engineering?",
            options: ["Remove features", "Create better features", "Add more data", "Nothing"],
            correctAnswer: 1,
            explanation: "Feature engineering creates or transforms features to improve performance."
          }
        ],
        outputPrediction: [
          {
            code: `from sklearn.linear_model import LinearRegression
import numpy as np

X = np.array([[1], [2], [3]])
y = np.array([2, 4, 6])

model = LinearRegression()
model.fit(X, y)
print(model.predict([[4]]))`,
            question: "What will be the output?",
            correctAnswer: "[8.]",
            explanation: "The model learns y = 2x"
          }
        ],
        challenge: {
          title: "Email Spam Classifier",
          description: "Create a spam classifier using text features and Naive Bayes.",
          hint: "Use sklearn's CountVectorizer for text features",
          xpReward: 80
        },
        aiExplanation: {
          keyConcepts: ["Supervised Learning", "Model Training", "Evaluation Metrics", "Feature Engineering"],
          commonMistakes: ["Data leakage between train/test", "Not normalizing features"],
          tips: ["Always split data before training", "Use cross-validation for robust evaluation"]
        },
        notes: "Machine learning is a vast field. Start with scikit-learn for traditional ML."
      },
      {
        day: 112,
        title: "Natural Language Processing with Python",
        topic: "NLP Fundamentals",
        duration: "70 minutes",
        xp: 85,
        theory: {
          explanation: "Natural Language Processing (NLP) enables computers to understand and generate human language. Python's NLTK, spaCy, and transformers libraries provide powerful NLP capabilities.",
          deepExplanation: "NLP tasks include tokenization, part-of-speech tagging, named entity recognition, sentiment analysis, and text generation. Modern NLP uses transformer models like BERT and GPT for state-of-the-art results.",
          beginnerExplanation: "NLP is teaching computers to understand human language. Like how your phone's keyboard suggests words.",
          realWorldExamples: [
            "Chatbots and virtual assistants",
            "Sentiment analysis on social media",
            "Machine translation",
            "Text summarization"
          ],
          syntaxExplanation: "Use NLTK for basic NLP, spaCy for advanced tasks, transformers for state-of-the-art models.",
          codeExamples: [
            {
              title: "Basic NLP with NLTK",
              code: `import nltk
from nltk.tokenize import word_tokenize

nltk.download('punkt')

text = "Python is amazing!"
words = word_tokenize(text)
print(words)  # ['Python', 'is', 'amazing', '!']`,
              explanation: "NLTK provides tokenization (splitting text into words)."
            },
            {
              title: "Sentiment Analysis",
              code: `from textblob import TextBlob

text = "I love Python!"
blob = TextBlob(text)
sentiment = blob.sentiment.polarity

print(f"Sentiment: {sentiment}")`,
              explanation: "TextBlob provides simple sentiment analysis."
            }
          ]
        },
        practice: {
          problems: [
            {
              question: "Tokenize 'Hello world' into words.",
              solution: `from nltk.tokenize import word_tokenize
words = word_tokenize("Hello world")
print(words)`
            }
          ]
        },
        assignment: {
          title: "Sentiment Analyzer",
          description: "Create a sentiment analyzer that classifies reviews as positive, negative, or neutral.",
          starterCode: `from textblob import TextBlob

reviews = [
    "This product is amazing!",
    "Terrible quality",
    "It's okay"
]

def analyze_sentiment(text):
    blob = TextBlob(text)
    polarity = blob.sentiment.polarity
    
    if polarity > 0.1:
        return "Positive"
    elif polarity < -0.1:
        return "Negative"
    else:
        return "Neutral"

for review in reviews:
    sentiment = analyze_sentiment(review)
    print(f"{review}: {sentiment}")`,
          expectedOutput: "Sentiment classification for each review",
          xpReward: 65
        },
        quiz: [
          {
            question: "What is tokenization?",
            options: ["Encrypting text", "Splitting text into tokens", "Translating text", "Summarizing text"],
            correctAnswer: 1,
            explanation: "Tokenization splits text into smaller units like words."
          },
          {
            question: "What are stopwords?",
            options: ["Important words", "Common words to filter", "Programming keywords", "Errors"],
            correctAnswer: 1,
            explanation: "Stopwords are common words that are often filtered out."
          },
          {
            question: "What does sentiment polarity indicate?",
            options: ["Text length", "Emotional tone", "Word count", "Grammar"],
            correctAnswer: 1,
            explanation: "Sentiment polarity indicates emotional tone."
          },
          {
            question: "What library is best for advanced NLP?",
            options: ["NLTK", "spaCy", "Both", "Neither"],
            correctAnswer: 2,
            explanation: "spaCy is preferred for production NLP."
          },
          {
            question: "What is named entity recognition?",
            options: ["Finding names in text", "Recognizing entities like people, places", "Naming variables", "Nothing"],
            correctAnswer: 1,
            explanation: "NER identifies and classifies named entities in text."
          }
        ],
        outputPrediction: [
          {
            code: `from textblob import TextBlob
blob = TextBlob("I hate this")
print(blob.sentiment.polarity)`,
            question: "What will be the output?",
            correctAnswer: "Negative value",
            explanation: "'hate' indicates negative sentiment"
          }
        ],
        challenge: {
          title: "Simple Chatbot",
          description: "Create a simple rule-based chatbot that responds to common greetings.",
          hint: "Use pattern matching with if/elif",
          xpReward: 70
        },
        aiExplanation: {
          keyConcepts: ["Tokenization", "Sentiment Analysis", "Stopwords", "Named Entity Recognition"],
          commonMistakes: ["Not preprocessing text", "Ignoring case sensitivity"],
          tips: ["Always preprocess text", "Choose the right tool for your task"]
        },
        notes: "NLP is a rapidly evolving field. Start with basic text processing, then explore transformer models."
      }
    ]
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = roadmapData;
}
