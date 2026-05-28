/**
 * Python Master AI - Real Portfolio Projects
 * Production-ready projects from Beginner to Expert levels
 */

const projectsData = {
  beginner: [
    {
      id: "calc",
      title: "Calculator App",
      description: "A fully functional calculator with basic arithmetic operations",
      difficulty: "Beginner",
      duration: "2 hours",
      xp: 100,
      skills: ["Variables", "Functions", "Input/Output", "Operators"],
      features: [
        "Add, subtract, multiply, divide operations",
        "Clear and delete functionality",
        "Error handling for division by zero",
        "Clean, intuitive UI"
      ],
      theory: "This project teaches fundamental Python concepts including variables, functions, user input, and mathematical operators. You'll learn how to structure a simple application and handle user interactions.",
      folderStructure: `calculator/
├── main.py
├── README.md
└── requirements.txt`,
      starterCode: `def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Error: Division by zero"
    return a / b

def main():
    print("=== Python Calculator ===")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    
    choice = input("Enter choice (1-4): ")
    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))
    
    if choice == '1':
        print(f"Result: {add(num1, num2)}")
    elif choice == '2':
        print(f"Result: {subtract(num1, num2)}")
    elif choice == '3':
        print(f"Result: {multiply(num1, num2)}")
    elif choice == '4':
        print(f"Result: {divide(num1, num2)}")
    else:
        print("Invalid choice")

if __name__ == "__main__":
    main()`,
      instructions: [
        "Implement all four basic operations",
        "Add error handling for invalid inputs",
        "Add a loop to allow multiple calculations",
        "Add a clear screen option"
      ],
      xpReward: 100
    },
    {
      id: "quiz",
      title: "Quiz Application",
      description: "Interactive quiz app with multiple-choice questions and scoring",
      difficulty: "Beginner",
      duration: "3 hours",
      xp: 120,
      skills: ["Lists", "Dictionaries", "Loops", "Conditionals"],
      features: [
        "Multiple-choice questions",
        "Score tracking",
        "Question randomization",
        "Results summary"
      ],
      theory: "Learn to work with data structures like lists and dictionaries to store quiz questions. Practice using loops to iterate through questions and conditionals to check answers.",
      folderStructure: `quiz_app/
├── main.py
├── questions.py
├── README.md
└── requirements.txt`,
      starterCode: `questions = [
    {
        "question": "What is the output of print(2 ** 3)?",
        "options": ["6", "8", "9", "5"],
        "correct": 1
    },
    {
        "question": "Which keyword defines a function?",
        "options": ["function", "def", "func", "define"],
        "correct": 1
    },
    {
        "question": "What data type is True/False?",
        "options": ["String", "Integer", "Boolean", "Float"],
        "correct": 2
    }
]

def run_quiz():
    score = 0
    for i, q in enumerate(questions, 1):
        print(f"\\nQuestion {i}: {q['question']}")
        for j, option in enumerate(q['options']):
            print(f"{j + 1}. {option}")
        
        answer = int(input("Enter your answer (1-4): ")) - 1
        
        if answer == q['correct']:
            print("✓ Correct!")
            score += 1
        else:
            print(f"✗ Wrong! Correct answer: {q['options'][q['correct']]}")
    
    print(f"\\n=== Quiz Complete ===")
    print(f"Your score: {score}/{len(questions)}")
    print(f"Percentage: {(score/len(questions))*100:.1f}%")

if __name__ == "__main__":
    run_quiz()`,
      instructions: [
        "Add more questions to the quiz",
        "Implement random question order",
        "Add a timer for each question",
        "Save high scores to a file"
      ],
      xpReward: 120
    },
    {
      id: "password",
      title: "Password Generator",
      description: "Secure password generator with customizable options",
      difficulty: "Beginner",
      duration: "2 hours",
      xp: 100,
      skills: ["Strings", "Random Module", "Loops", "User Input"],
      features: [
        "Customizable password length",
        "Include/exclude uppercase, lowercase, numbers, symbols",
        "Copy to clipboard functionality",
        "Password strength indicator"
      ],
      theory: "Learn to use Python's random module and string manipulation to generate secure passwords. Understand character sets and how to create random selections from them.",
      folderStructure: `password_generator/
├── main.py
├── README.md
└── requirements.txt`,
      starterCode: `import random
import string

def generate_password(length=12, use_uppercase=True, use_lowercase=True, 
                     use_numbers=True, use_symbols=True):
    chars = ""
    
    if use_uppercase:
        chars += string.ascii_uppercase
    if use_lowercase:
        chars += string.ascii_lowercase
    if use_numbers:
        chars += string.digits
    if use_symbols:
        chars += string.punctuation
    
    if not chars:
        return "Error: At least one character type must be selected"
    
    password = ''.join(random.choice(chars) for _ in range(length))
    return password

def main():
    print("=== Password Generator ===")
    length = int(input("Password length (default 12): ") or 12)
    
    use_uppercase = input("Include uppercase? (y/n): ").lower() == 'y'
    use_lowercase = input("Include lowercase? (y/n): ").lower() == 'y'
    use_numbers = input("Include numbers? (y/n): ").lower() == 'y'
    use_symbols = input("Include symbols? (y/n): ").lower() == 'y'
    
    password = generate_password(length, use_uppercase, use_lowercase, 
                                  use_numbers, use_symbols)
    print(f"\\nGenerated Password: {password}")

if __name__ == "__main__":
    main()`,
      instructions: [
        "Add password strength checker",
        "Implement copy to clipboard",
        "Add password history",
        "Create GUI version with tkinter"
      ],
      xpReward: 100
    },
    {
      id: "expense",
      title: "Expense Tracker",
      description: "Personal expense tracking with categories and summaries",
      difficulty: "Beginner",
      duration: "4 hours",
      xp: 150,
      skills: ["Lists", "Dictionaries", "File I/O", "Data Persistence"],
      features: [
        "Add expenses with category and amount",
        "View all expenses",
        "View expenses by category",
        "Calculate total spending",
        "Save/load expenses from file"
      ],
      theory: "Learn to manage data using lists and dictionaries, implement file I/O for data persistence, and create a simple command-line interface for data management.",
      folderStructure: `expense_tracker/
├── main.py
├── expenses.json
├── README.md
└── requirements.txt`,
      starterCode: `import json
import os

EXPENSES_FILE = "expenses.json"

def load_expenses():
    if os.path.exists(EXPENSES_FILE):
        with open(EXPENSES_FILE, 'r') as f:
            return json.load(f)
    return []

def save_expenses(expenses):
    with open(EXPENSES_FILE, 'w') as f:
        json.dump(expenses, f, indent=2)

def add_expense(expenses):
    description = input("Description: ")
    amount = float(input("Amount: $"))
    category = input("Category (food, transport, entertainment, other): ")
    
    expense = {
        "description": description,
        "amount": amount,
        "category": category,
        "date": input("Date (YYYY-MM-DD): ")
    }
    
    expenses.append(expense)
    save_expenses(expenses)
    print("Expense added!")

def view_expenses(expenses):
    total = sum(e['amount'] for e in expenses)
    print(f"\\n=== All Expenses (Total: ${total:.2f}) ===")
    for e in expenses:
        print(f"{e['date']} - {e['description']}: ${e['amount']:.2f} ({e['category']})")

def main():
    expenses = load_expenses()
    
    while True:
        print("\\n=== Expense Tracker ===")
        print("1. Add Expense")
        print("2. View All Expenses")
        print("3. View by Category")
        print("4. Exit")
        
        choice = input("Enter choice: ")
        
        if choice == '1':
            add_expense(expenses)
        elif choice == '2':
            view_expenses(expenses)
        elif choice == '4':
            break

if __name__ == "__main__":
    main()`,
      instructions: [
        "Implement view by category",
        "Add monthly summaries",
        "Add budget tracking",
        "Create visual charts with matplotlib"
      ],
      xpReward: 150
    },
    {
      id: "weather",
      title: "Weather App",
      description: "Weather information app using a free weather API",
      difficulty: "Beginner",
      duration: "3 hours",
      xp: 130,
      skills: ["API Requests", "JSON Parsing", "Error Handling", "External Libraries"],
      features: [
        "Get current weather by city",
        "Display temperature, humidity, conditions",
        "Error handling for invalid cities",
        "Multiple city support"
      ],
      theory: "Learn to make HTTP requests to external APIs, parse JSON responses, and handle API errors. This project introduces working with external services.",
      folderStructure: `weather_app/
├── main.py
├── README.md
└── requirements.txt`,
      starterCode: `import requests

def get_weather(city):
    # Using a free weather API (replace with actual API key)
    api_key = "your_api_key_here"
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
    
    try:
        response = requests.get(url)
        data = response.json()
        
        if response.status_code == 200:
            temp = data['main']['temp']
            humidity = data['main']['humidity']
            description = data['weather'][0]['description']
            
            print(f"\\n=== Weather in {city} ===")
            print(f"Temperature: {temp}°C")
            print(f"Humidity: {humidity}%")
            print(f"Conditions: {description}")
        else:
            print(f"Error: {data.get('message', 'City not found')}")
            
    except requests.exceptions.RequestException as e:
        print(f"Network error: {e}")

def main():
    print("=== Weather App ===")
    city = input("Enter city name: ")
    get_weather(city)

if __name__ == "__main__":
    main()`,
      instructions: [
        "Get a free API key from OpenWeatherMap",
        "Add 5-day forecast",
        "Add weather icons",
        "Create GUI version"
      ],
      xpReward: 130
    }
  ],
  intermediate: [
    {
      id: "chat",
      title: "Chat Application",
      description: "Real-time chat application with multiple users",
      difficulty: "Intermediate",
      duration: "6 hours",
      xp: 200,
      skills: ["Sockets", "Threading", "Network Programming", "JSON"],
      features: [
        "Multiple user support",
        "Real-time messaging",
        "User identification",
        "Message history"
      ],
      theory: "Learn network programming with sockets, implement client-server architecture, and handle concurrent connections using threading.",
      folderStructure: `chat_app/
├── server.py
├── client.py
├── README.md
└── requirements.txt`,
      starterCode: `# server.py
import socket
import threading

clients = []

def handle_client(client_socket, address):
    print(f"New connection from {address}")
    
    while True:
        try:
            message = client_socket.recv(1024).decode('utf-8')
            if not message:
                break
            
            print(f"{address}: {message}")
            
            # Broadcast to all clients
            for client in clients:
                if client != client_socket:
                    client.send(message.encode('utf-8'))
                    
        except:
            break
    
    client_socket.close()
    clients.remove(client_socket)
    print(f"Connection closed: {address}")

def start_server():
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.bind(('localhost', 5555))
    server.listen(5)
    print("Server started on port 5555")
    
    while True:
        client, address = server.accept()
        clients.append(client)
        thread = threading.Thread(target=handle_client, args=(client, address))
        thread.start()

if __name__ == "__main__":
    start_server()`,
      instructions: [
        "Implement client.py for user connections",
        "Add username support",
        "Add private messaging",
        "Add file sharing"
      ],
      xpReward: 200
    },
    {
      id: "student",
      title: "Student Management System",
      description: "Complete CRUD system for managing student records",
      difficulty: "Intermediate",
      duration: "5 hours",
      xp: 180,
      skills: ["OOP", "File I/O", "Data Validation", "CRUD Operations"],
      features: [
        "Add, view, update, delete students",
        "Search by name or ID",
        "Data validation",
        "Persistent storage"
      ],
      theory: "Apply Object-Oriented Programming principles to build a complete CRUD application. Learn data validation, file persistence, and clean code practices.",
      folderStructure: `student_management/
├── student.py
├── manager.py
├── students.json
├── README.md
└── requirements.txt`,
      starterCode: `# student.py
class Student:
    def __init__(self, student_id, name, age, grade, email):
        self.student_id = student_id
        self.name = name
        self.age = age
        self.grade = grade
        self.email = email
    
    def to_dict(self):
        return {
            'student_id': self.student_id,
            'name': self.name,
            'age': self.age,
            'grade': self.grade,
            'email': self.email
        }
    
    @classmethod
    def from_dict(cls, data):
        return cls(
            data['student_id'],
            data['name'],
            data['age'],
            data['grade'],
            data['email']
        )

# manager.py
import json

class StudentManager:
    def __init__(self, filename='students.json'):
        self.filename = filename
        self.students = self.load_students()
    
    def load_students(self):
        try:
            with open(self.filename, 'r') as f:
                return [Student.from_dict(data) for data in json.load(f)]
        except FileNotFoundError:
            return []
    
    def save_students(self):
        with open(self.filename, 'w') as f:
            json.dump([s.to_dict() for s in self.students], f, indent=2)
    
    def add_student(self, student):
        self.students.append(student)
        self.save_students()
    
    def get_student(self, student_id):
        for student in self.students:
            if student.student_id == student_id:
                return student
        return None
    
    def update_student(self, student_id, **kwargs):
        student = self.get_student(student_id)
        if student:
            for key, value in kwargs.items():
                setattr(student, key, value)
            self.save_students()
            return True
        return False
    
    def delete_student(self, student_id):
        student = self.get_student(student_id)
        if student:
            self.students.remove(student)
            self.save_students()
            return True
        return False

def main():
    manager = StudentManager()
    
    while True:
        print("\\n=== Student Management System ===")
        print("1. Add Student")
        print("2. View All Students")
        print("3. Search Student")
        print("4. Update Student")
        print("5. Delete Student")
        print("6. Exit")
        
        choice = input("Enter choice: ")
        
        if choice == '1':
            sid = input("Student ID: ")
            name = input("Name: ")
            age = int(input("Age: "))
            grade = input("Grade: ")
            email = input("Email: ")
            
            student = Student(sid, name, age, grade, email)
            manager.add_student(student)
            print("Student added!")
            
        elif choice == '2':
            for s in manager.students:
                print(f"{s.student_id}: {s.name} - {s.grade}")
                
        elif choice == '6':
            break

if __name__ == "__main__":
    main()`,
      instructions: [
        "Add input validation",
        "Implement search functionality",
        "Add sorting options",
        "Create GUI version with tkinter"
      ],
      xpReward: 180
    },
    {
      id: "banking",
      title: "Banking System",
      description: "Full-featured banking system with account management",
      difficulty: "Intermediate",
      duration: "7 hours",
      xp: 220,
      skills: ["OOP", "Exception Handling", "Data Persistence", "Security"],
      features: [
        "Create/delete accounts",
        "Deposit/withdraw money",
        "Transfer between accounts",
        "Transaction history",
        "Account balance"
      ],
      theory: "Build a complete banking system using OOP principles. Learn about exception handling for financial operations and data security considerations.",
      folderStructure: `banking_system/
├── account.py
├── bank.py
├── transactions.json
├── README.md
└── requirements.txt`,
      starterCode: `# account.py
class Account:
    def __init__(self, account_number, account_holder, balance=0):
        self.account_number = account_number
        self.account_holder = account_holder
        self.balance = balance
        self.transactions = []
    
    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            self.transactions.append(f"Deposit: +${amount}")
            return True
        return False
    
    def withdraw(self, amount):
        if amount > 0 and self.balance >= amount:
            self.balance -= amount
            self.transactions.append(f"Withdrawal: -${amount}")
            return True
        return False
    
    def transfer(self, amount, recipient_account):
        if self.withdraw(amount):
            recipient_account.deposit(amount)
            self.transactions.append(f"Transfer to {recipient_account.account_number}: -${amount}")
            recipient_account.transactions.append(f"Transfer from {self.account_number}: +${amount}")
            return True
        return False
    
    def get_statement(self):
        statement = f"\\n=== Account Statement for {self.account_holder} ==="
        statement += f"\\nAccount Number: {self.account_number}"
        statement += f"\\nCurrent Balance: ${self.balance:.2f}"
        statement += "\\n\\nTransaction History:"
        for t in self.transactions:
            statement += f"\\n{t}"
        return statement

# bank.py
class Bank:
    def __init__(self):
        self.accounts = {}
    
    def create_account(self, account_number, account_holder, initial_deposit=0):
        if account_number not in self.accounts:
            account = Account(account_number, account_holder, initial_deposit)
            self.accounts[account_number] = account
            return account
        return None
    
    def get_account(self, account_number):
        return self.accounts.get(account_number)
    
    def transfer(self, from_account, to_account, amount):
        sender = self.get_account(from_account)
        receiver = self.get_account(to_account)
        
        if sender and receiver:
            return sender.transfer(amount, receiver)
        return False

def main():
    bank = Bank()
    
    while True:
        print("\\n=== Banking System ===")
        print("1. Create Account")
        print("2. Deposit")
        print("3. Withdraw")
        print("4. Transfer")
        print("5. View Statement")
        print("6. Exit")
        
        choice = input("Enter choice: ")
        
        if choice == '1':
            acc_num = input("Account Number: ")
            holder = input("Account Holder: ")
            deposit = float(input("Initial Deposit: "))
            
            account = bank.create_account(acc_num, holder, deposit)
            if account:
                print("Account created successfully!")
            else:
                print("Account number already exists!")
                
        elif choice == '5':
            acc_num = input("Account Number: ")
            account = bank.get_account(acc_num)
            if account:
                print(account.get_statement())
            else:
                print("Account not found!")
                
        elif choice == '6':
            break

if __name__ == "__main__":
    main()`,
      instructions: [
        "Add PIN/Password protection",
        "Implement interest calculation",
        "Add loan functionality",
        "Create ATM interface"
      ],
      xpReward: 220
    },
    {
      id: "blog",
      title: "Blog Backend",
      description: "RESTful API backend for a blog application",
      difficulty: "Intermediate",
      duration: "8 hours",
      xp: 250,
      skills: ["Flask", "REST APIs", "Database", "JSON"],
      features: [
        "CRUD operations for posts",
        "User authentication",
        "Comment system",
        "Category management"
      ],
      theory: "Learn to build RESTful APIs using Flask. Understand HTTP methods, request/response handling, and database integration for web applications.",
      folderStructure: `blog_backend/
├── app.py
├── models.py
├── database.db
├── README.md
└── requirements.txt`,
      starterCode: `# app.py
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///blog.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# models.py
class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    author = db.Column(db.String(50), nullable=False)
    category = db.Column(db.String(50))
    
    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'content': self.content,
            'author': self.author,
            'category': self.category
        }

# Create tables
with app.app_context():
    db.create_all()

# Routes
@app.route('/posts', methods=['GET'])
def get_posts():
    posts = Post.query.all()
    return jsonify([p.to_dict() for p in posts])

@app.route('/posts/<int:post_id>', methods=['GET'])
def get_post(post_id):
    post = Post.query.get_or_404(post_id)
    return jsonify(post.to_dict())

@app.route('/posts', methods=['POST'])
def create_post():
    data = request.get_json()
    post = Post(
        title=data['title'],
        content=data['content'],
        author=data['author'],
        category=data.get('category', 'General')
    )
    db.session.add(post)
    db.session.commit()
    return jsonify(post.to_dict()), 201

@app.route('/posts/<int:post_id>', methods=['PUT'])
def update_post(post_id):
    post = Post.query.get_or_404(post_id)
    data = request.get_json()
    
    post.title = data.get('title', post.title)
    post.content = data.get('content', post.content)
    post.category = data.get('category', post.category)
    
    db.session.commit()
    return jsonify(post.to_dict())

@app.route('/posts/<int:post_id>', methods=['DELETE'])
def delete_post(post_id):
    post = Post.query.get_or_404(post_id)
    db.session.delete(post)
    db.session.commit()
    return jsonify({'message': 'Post deleted'})

if __name__ == '__main__':
    app.run(debug=True)`,
      instructions: [
        "Add user authentication",
        "Implement comment system",
        "Add image upload support",
        "Create frontend with React"
      ],
      xpReward: 250
    },
    {
      id: "encryption",
      title: "File Encryption Tool",
      description: "Secure file encryption/decryption using cryptography",
      difficulty: "Intermediate",
      duration: "5 hours",
      xp: 190,
      skills: ["Cryptography", "File I/O", "Security", "CLI"],
      features: [
        "Encrypt files with password",
        "Decrypt files",
        "Multiple encryption algorithms",
        "File integrity verification"
      ],
      theory: "Learn about cryptography concepts, encryption algorithms, and secure file handling. Understand the importance of data security in modern applications.",
      folderStructure: `encryption_tool/
├── encrypt.py
├── decrypt.py
├── README.md
└── requirements.txt`,
      starterCode: `from cryptography.fernet import Fernet
import os

def generate_key():
    return Fernet.generate_key()

def encrypt_file(filename, key):
    fernet = Fernet(key)
    
    with open(filename, 'rb') as f:
        data = f.read()
    
    encrypted = fernet.encrypt(data)
    
    encrypted_filename = filename + '.encrypted'
    with open(encrypted_filename, 'wb') as f:
        f.write(encrypted)
    
    print(f"File encrypted: {encrypted_filename}")

def decrypt_file(filename, key):
    fernet = Fernet(key)
    
    with open(filename, 'rb') as f:
        encrypted_data = f.read()
    
    try:
        decrypted = fernet.decrypt(encrypted_data)
        
        if filename.endswith('.encrypted'):
            original_filename = filename[:-10]
        else:
            original_filename = filename + '.decrypted'
        
        with open(original_filename, 'wb') as f:
            f.write(decrypted)
        
        print(f"File decrypted: {original_filename}")
        return True
    except:
        print("Decryption failed. Wrong key or corrupted file.")
        return False

def main():
    print("=== File Encryption Tool ===")
    print("1. Encrypt File")
    print("2. Decrypt File")
    print("3. Generate Key")
    
    choice = input("Enter choice: ")
    
    if choice == '1':
        filename = input("Enter filename: ")
        key = input("Enter key (or press Enter to generate new): ")
        
        if not key:
            key = generate_key()
            print(f"Generated key: {key.decode()}")
            save_key = input("Save key to file? (y/n): ")
            if save_key.lower() == 'y':
                with open('key.txt', 'wb') as f:
                    f.write(key)
                print("Key saved to key.txt")
        else:
            key = key.encode()
        
        encrypt_file(filename, key)
        
    elif choice == '2':
        filename = input("Enter encrypted filename: ")
        key = input("Enter key: ").encode()
        decrypt_file(filename, key)
        
    elif choice == '3':
        key = generate_key()
        print(f"Generated key: {key.decode()}")

if __name__ == "__main__":
    main()`,
      instructions: [
        "Add AES encryption support",
        "Implement key management system",
        "Add file integrity check",
        "Create GUI version"
      ],
      xpReward: 190
    }
  ],
  advanced: [
    {
      id: "ai_chatbot",
      title: "AI Chatbot",
      description: "Intelligent chatbot with natural language processing",
      difficulty: "Advanced",
      duration: "10 hours",
      xp: 300,
      skills: ["NLP", "Machine Learning", "API Integration", "Text Processing"],
      features: [
        "Natural language understanding",
        "Context awareness",
        "Multiple conversation topics",
        "Learning from interactions"
      ],
      theory: "Build an AI-powered chatbot using natural language processing techniques. Learn about text processing, intent recognition, and response generation.",
      folderStructure: `ai_chatbot/
├── chatbot.py
├── intents.json
├── training.py
├── README.md
└── requirements.txt`,
      starterCode: `import json
import random
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Download NLTK data
nltk.download('punkt')
nltk.download('stopwords')

class SimpleChatbot:
    def __init__(self):
        self.intents = self.load_intents()
        self.responses = {}
        self.vectorizer = TfidfVectorizer()
        self.train()
    
    def load_intents(self):
        intents = {
            "greeting": {
                "patterns": ["hello", "hi", "hey", "good morning", "good evening"],
                "responses": ["Hello! How can I help you?", "Hi there! What can I do for you?", "Hey! Ready to assist!"]
            },
            "goodbye": {
                "patterns": ["bye", "goodbye", "see you", "take care"],
                "responses": ["Goodbye! Have a great day!", "See you later!", "Take care!"]
            },
            "thanks": {
                "patterns": ["thank you", "thanks", "appreciate it"],
                "responses": ["You're welcome!", "Happy to help!", "Anytime!"]
            },
            "help": {
                "patterns": ["help", "what can you do", "capabilities"],
                "responses": ["I can help with Python programming, answer questions, and provide guidance.", "I'm here to assist with coding and learning!"]
            }
        }
        return intents
    
    def train(self):
        # Prepare training data
        patterns = []
        labels = []
        
        for intent, data in self.intents.items():
            for pattern in data['patterns']:
                patterns.append(pattern)
                labels.append(intent)
        
        # Vectorize patterns
        self.vectorizer.fit(patterns)
        self.pattern_vectors = self.vectorizer.transform(patterns)
        self.labels = labels
    
    def get_intent(self, user_input):
        # Vectorize user input
        user_vector = self.vectorizer.transform([user_input])
        
        # Calculate similarity
        similarities = cosine_similarity(user_vector, self.pattern_vectors)
        
        # Get best match
        best_match_index = similarities.argmax()
        best_match_score = similarities[0][best_match_index]
        
        if best_match_score > 0.3:
            return self.labels[best_match_index]
        return "unknown"
    
    def get_response(self, intent):
        if intent in self.intents:
            responses = self.intents[intent]['responses']
            return random.choice(responses)
        return "I'm not sure I understand. Could you rephrase that?"
    
    def chat(self):
        print("=== AI Chatbot ===")
        print("Type 'quit' to exit")
        
        while True:
            user_input = input("You: ").lower()
            
            if user_input == 'quit':
                print("Goodbye!")
                break
            
            intent = self.get_intent(user_input)
            response = self.get_response(intent)
            print(f"Bot: {response}")

def main():
    chatbot = SimpleChatbot()
    chatbot.chat()

if __name__ == "__main__":
    main()`,
      instructions: [
        "Add more intents and patterns",
        "Implement context awareness",
        "Add sentiment analysis",
        "Integrate with OpenAI API"
      ],
      xpReward: 300
    },
    {
      id: "ecommerce",
      title: "E-commerce Backend",
      description: "Complete e-commerce platform backend with payment integration",
      difficulty: "Advanced",
      duration: "15 hours",
      xp: 400,
      skills: ["Django/Flask", "Database Design", "Payment APIs", "REST APIs"],
      features: [
        "Product management",
        "Shopping cart",
        "User authentication",
        "Payment processing",
        "Order management"
      ],
      theory: "Build a complete e-commerce backend. Learn about database design, payment integration, user authentication, and building scalable APIs.",
      folderStructure: `ecommerce_backend/
├── app.py
├── models/
│   ├── user.py
│   ├── product.py
│   ├── order.py
└── cart.py
├── routes/
│   ├── products.py
│   ├── cart.py
│   └── orders.py
├── database.db
├── README.md
└── requirements.txt`,
      starterCode: `# app.py
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager, create_access_token
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///ecommerce.db'
app.config['JWT_SECRET_KEY'] = 'your-secret-key'
db = SQLAlchemy(app)
jwt = JWTManager(app)

# Models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(128))
    
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)
    
    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    price = db.Column(db.Float, nullable=False)
    stock = db.Column(db.Integer, default=0)
    category = db.Column(db.String(50))
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'stock': self.stock,
            'category': self.category
        }

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    total = db.Column(db.Float, nullable=False)
    status = db.Column(db.String(20), default='pending')
    items = db.relationship('OrderItem', backref='order', lazy=True)

class OrderItem(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey('order.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'))
    quantity = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Float, nullable=False)

# Create tables
with app.app_context():
    db.create_all()

# Routes
@app.route('/api/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([p.to_dict() for p in products])

@app.route('/api/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    product = Product.query.get_or_404(product_id)
    return jsonify(product.to_dict())

@app.route('/api/products', methods=['POST'])
def create_product():
    data = request.get_json()
    product = Product(
        name=data['name'],
        description=data.get('description', ''),
        price=data['price'],
        stock=data.get('stock', 0),
        category=data.get('category', 'General')
    )
    db.session.add(product)
    db.session.commit()
    return jsonify(product.to_dict()), 201

@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    
    if User.query.filter_by(username=data['username']).first():
        return jsonify({'error': 'Username already exists'}), 400
    
    user = User(username=data['username'], email=data['email'])
    user.set_password(data['password'])
    
    db.session.add(user)
    db.session.commit()
    
    return jsonify({'message': 'User created successfully'}), 201

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    
    if user and user.check_password(data['password']):
        access_token = create_access_token(identity=user.id)
        return jsonify({'access_token': access_token})
    
    return jsonify({'error': 'Invalid credentials'}), 401

if __name__ == '__main__':
    app.run(debug=True)`,
      instructions: [
        "Implement shopping cart",
        "Add payment integration (Stripe)",
        "Implement order management",
        "Add product search and filtering"
      ],
      xpReward: 400
    },
    {
      id: "social_api",
      title: "Social Media API",
      description: "RESTful API for a social media platform",
      difficulty: "Advanced",
      duration: "12 hours",
      xp: 350,
      skills: ["FastAPI", "PostgreSQL", "Authentication", "Relationships"],
      features: [
        "User profiles",
        "Posts and comments",
        "Follow/unfollow users",
        "Feed generation",
        "Like system"
      ],
      theory: "Build a social media API using FastAPI. Learn about database relationships, authentication, feed algorithms, and building scalable social features.",
      folderStructure: `social_api/
├── main.py
├── models/
│   ├── user.py
│   ├── post.py
│   ├── follow.py
│   └── like.py
├── schemas/
├── database.py
├── README.md
└── requirements.txt`,
      starterCode: `# main.py
from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from typing import List
import uvicorn

app = FastAPI(title="Social Media API")

# Database setup (simplified)
# In production, use PostgreSQL with proper models
users_db = []
posts_db = []
follows_db = []
likes_db = []

# Models (simplified for example)
class User:
    def __init__(self, id, username, email):
        self.id = id
        self.username = username
        self.email = email
        self.followers = []
        self.following = []

class Post:
    def __init__(self, id, user_id, content):
        self.id = id
        self.user_id = user_id
        self.content = content
        self.likes = 0
        self.comments = []

# Routes
@app.post("/api/users/")
async def create_user(username: str, email: str):
    user_id = len(users_db) + 1
    user = User(user_id, username, email)
    users_db.append(user)
    return user

@app.get("/api/users/{user_id}")
async def get_user(user_id: int):
    for user in users_db:
        if user.id == user_id:
            return user
    raise HTTPException(status_code=404, detail="User not found")

@app.post("/api/posts/")
async def create_post(user_id: int, content: str):
    post_id = len(posts_db) + 1
    post = Post(post_id, user_id, content)
    posts_db.append(post)
    return post

@app.get("/api/posts/")
async def get_posts():
    return posts_db

@app.post("/api/users/{user_id}/follow/{target_id}")
async def follow_user(user_id: int, target_id: int):
    follow = {"follower": user_id, "following": target_id}
    follows_db.append(follow)
    return {"message": "Followed successfully"}

@app.post("/api/posts/{post_id}/like")
async def like_post(post_id: int):
    for post in posts_db:
        if post.id == post_id:
            post.likes += 1
            return post
    raise HTTPException(status_code=404, detail="Post not found")

@app.get("/api/users/{user_id}/feed")
async def get_user_feed(user_id: int):
    # Get posts from followed users
    followed_users = [f["following"] for f in follows_db if f["follower"] == user_id]
    feed = [p for p in posts_db if p.user_id in followed_users or p.user_id == user_id]
    return feed

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)`,
      instructions: [
        "Implement proper database with SQLAlchemy",
        "Add JWT authentication",
        "Implement feed algorithm",
        "Add image upload support"
      ],
      xpReward: 350
    },
    {
      id: "dashboard",
      title: "Real-time Dashboard",
      description: "Live analytics dashboard with real-time data visualization",
      difficulty: "Advanced",
      duration: "10 hours",
      xp: 320,
      skills: ["WebSockets", "Data Visualization", "Real-time Updates", "API"],
      features: [
        "Real-time data updates",
        "Interactive charts",
        "Multiple data sources",
        "Customizable widgets",
        "Alert system"
      ],
      theory: "Build a real-time dashboard using WebSockets for live data updates. Learn about data visualization, real-time communication, and building responsive dashboards.",
      folderStructure: `dashboard/
├── app.py
├── static/
│   ├── css/
│   ├── js/
│   └── index.html
├── templates/
├── README.md
└── requirements.txt`,
      starterCode: `from flask import Flask, render_template
from flask_socketio import SocketIO, emit
import random
import threading
import time

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

# Simulated data
metrics = {
    'users': 1000,
    'revenue': 50000,
    'orders': 150,
    'conversion': 3.5
}

def update_metrics():
    """Simulate real-time data updates"""
    while True:
        metrics['users'] += random.randint(-5, 10)
        metrics['revenue'] += random.randint(-100, 500)
        metrics['orders'] += random.randint(-2, 5)
        metrics['conversion'] = max(1, min(10, metrics['conversion'] + random.uniform(-0.5, 0.5)))
        
        socketio.emit('update_metrics', metrics)
        time.sleep(2)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/metrics')
def get_metrics():
    return metrics

@socketio.on('connect')
def handle_connect():
    print('Client connected')
    emit('update_metrics', metrics)

@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')

if __name__ == '__main__':
    # Start background thread for data updates
    update_thread = threading.Thread(target=update_metrics)
    update_thread.daemon = True
    update_thread.start()
    
    socketio.run(app, debug=True)`,
      instructions: [
        "Create HTML/JS frontend with Chart.js",
        "Add multiple data sources",
        "Implement widget customization",
        "Add alert system",
        "Create data export functionality"
      ],
      xpReward: 320
    },
    {
      id: "task_manager",
      title: "Multi-user Task Manager",
      description: "Collaborative task management with real-time updates",
      difficulty: "Advanced",
      duration: "14 hours",
      xp: 380,
      skills: ["WebSockets", "Database", "Authentication", "Real-time Sync"],
      features: [
        "Task creation and management",
        "User collaboration",
        "Real-time updates",
        "Task assignment",
        "Progress tracking"
      ],
      theory: "Build a collaborative task manager with real-time synchronization. Learn about WebSocket communication, database design for collaboration, and real-time state management.",
      folderStructure: `task_manager/
├── app.py
├── models/
│   ├── user.py
│   ├── task.py
│   └── project.py
├── socket_handlers.py
├── database.db
├── README.md
└── requirements.txt`,
      starterCode: `from flask import Flask, render_template, request, jsonify
from flask_socketio import SocketIO, emit, join_room, leave_room
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tasks.db'
db = SQLAlchemy(app)
socketio = SocketIO(app)

# Models
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    created_by = db.Column(db.Integer, db.ForeignKey('user.id'))

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    status = db.Column(db.String(20), default='todo')
    priority = db.Column(db.String(20), default='medium')
    assigned_to = db.Column(db.Integer, db.ForeignKey('user.id'))
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'))
    due_date = db.Column(db.DateTime)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

# Create tables
with app.app_context():
    db.create_all()

# Routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/tasks', methods=['GET'])
def get_tasks():
    tasks = Task.query.all()
    return jsonify([{
        'id': t.id,
        'title': t.title,
        'status': t.status,
        'priority': t.priority
    } for t in tasks])

@app.route('/api/tasks', methods=['POST'])
def create_task():
    data = request.get_json()
    task = Task(
        title=data['title'],
        description=data.get('description', ''),
        priority=data.get('priority', 'medium'),
        due_date=datetime.strptime(data['due_date'], '%Y-%m-%d') if data.get('due_date') else None
    )
    db.session.add(task)
    db.session.commit()
    
    emit('task_created', {
        'id': task.id,
        'title': task.title,
        'status': task.status,
        'priority': task.priority
    }, broadcast=True)
    
    return jsonify({'id': task.id}), 201

@app.route('/api/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    task = Task.query.get_or_404(task_id)
    data = request.get_json()
    
    if 'status' in data:
        task.status = data['status']
    if 'priority' in data:
        task.priority = data['priority']
    
    db.session.commit()
    
    emit('task_updated', {
        'id': task.id,
        'status': task.status,
        'priority': task.priority
    }, broadcast=True)
    
    return jsonify({'message': 'Task updated'})

# Socket events
@socketio.on('join')
def on_join(room):
    join_room(room)
    emit('message', f'User joined room {room}', room=room)

@socketio.on('leave')
def on_leave(room):
    leave_room(room)
    emit('message', f'User left room {room}', room=room)

if __name__ == '__main__':
    socketio.run(app, debug=True)`,
      instructions: [
        "Implement user authentication",
        "Add project management",
        "Implement task assignments",
        "Add file attachments",
        "Create activity feed"
      ],
      xpReward: 380
    }
  ],
  expert: [
    {
      id: "ai_saas",
      title: "AI SaaS Platform",
      description: "Full-stack AI-powered SaaS application",
      difficulty: "Expert",
      duration: "20 hours",
      xp: 500,
      skills: ["Machine Learning", "React", "FastAPI", "Cloud Deployment"],
      features: [
        "AI-powered features",
        "User authentication",
        "Subscription management",
        "Payment processing",
        "Analytics dashboard"
      ],
      theory: "Build a complete AI-powered SaaS platform. Learn about integrating ML models into web applications, building scalable APIs, and deploying to cloud infrastructure.",
      folderStructure: `ai_saas/
├── backend/
│   ├── app.py
│   ├── models/
│   ├── routes/
│   └── ml_models/
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── deployment/
├── README.md
└── requirements.txt`,
      starterCode: `# backend/app.py
from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import OAuth2PasswordBearer
from pydantic import BaseModel
from typing import List
import joblib
import numpy as np

app = FastAPI(title="AI SaaS Platform")

# Load ML model (example)
# model = joblib.load('models/predictor.pkl')

class User(BaseModel):
    username: str
    email: str
    password: str

class PredictionRequest(BaseModel):
    features: List[float]

class Subscription(BaseModel):
    plan: str
    status: str

# Database (simplified)
users_db = []
subscriptions_db = []

@app.post("/api/auth/register")
async def register(user: User):
    if any(u.email == user.email for u in users_db):
        raise HTTPException(status_code=400, detail="Email already registered")
    
    users_db.append(user)
    return {"message": "User registered successfully"}

@app.post("/api/auth/login")
async def login(email: str, password: str):
    user = next((u for u in users_db if u.email == email), None)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    # In production, verify password hash
    return {"access_token": "fake-jwt-token", "user": user.username}

@app.post("/api/predict")
async def predict(request: PredictionRequest):
    # Make prediction using ML model
    # features = np.array(request.features).reshape(1, -1)
    # prediction = model.predict(features)[0]
    
    # Simulated prediction
    prediction = sum(request.features) / len(request.features)
    
    return {
        "prediction": prediction,
        "confidence": 0.95
    }

@app.post("/api/subscription")
async def create_subscription(subscription: Subscription):
    subscriptions_db.append(subscription)
    return {"message": "Subscription created", "plan": subscription.plan}

@app.get("/api/analytics")
async def get_analytics():
    return {
        "total_users": len(users_db),
        "active_subscriptions": len(subscriptions_db),
        "predictions_today": 150,
        "revenue": 5000
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)`,
      instructions: [
        "Implement proper ML model integration",
        "Add Stripe payment processing",
        "Build React frontend",
        "Deploy to AWS/GCP",
        "Add monitoring and logging"
      ],
      xpReward: 500
    },
    {
      id: "video_streaming",
      title: "Video Streaming Backend",
      description: "Scalable video streaming service with adaptive bitrate",
      difficulty: "Expert",
      duration: "18 hours",
      xp: 450,
      skills: ["Video Processing", "Streaming Protocols", "CDN Integration", "Scalability"],
      features: [
        "Video upload and processing",
        "Adaptive bitrate streaming",
        "CDN integration",
        "Video analytics",
        "Multi-format support"
      ],
      theory: "Build a video streaming backend. Learn about video processing, streaming protocols (HLS, DASH), CDN integration, and building scalable media services.",
      folderStructure: `video_streaming/
├── app.py
├── video_processor/
│   ├── encoder.py
│   ├── transcoder.py
│   └── thumbnail.py
├── storage/
├── api/
├── README.md
└── requirements.txt`,
      starterCode: `from flask import Flask, request, send_file
from werkzeug.utils import secure_filename
import os
import subprocess

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max

ALLOWED_EXTENSIONS = {'mp4', 'mov', 'avi', 'mkv'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/api/upload', methods=['POST'])
def upload_video():
    if 'video' not in request.files:
        return {'error': 'No video file'}, 400
    
    file = request.files['video']
    if file.filename == '':
        return {'error': 'No selected file'}, 400
    
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        
        # Process video (transcode to HLS)
        video_id = process_video(filepath)
        
        return {
            'message': 'Video uploaded successfully',
            'video_id': video_id,
            'filename': filename
        }
    
    return {'error': 'Invalid file type'}, 400

def process_video(input_path):
    """Transcode video to HLS format for adaptive streaming"""
    video_id = os.path.splitext(os.path.basename(input_path))[0]
    output_dir = f'streams/{video_id}'
    os.makedirs(output_dir, exist_ok=True)
    
    # FFmpeg command to transcode to HLS
    # This would require FFmpeg installed
    # subprocess.run([
    #     'ffmpeg',
    #     '-i', input_path,
    #     '-c:v', 'libx264',
    #     '-c:a', 'aac',
    #     '-f', 'hls',
    #     '-hls_time', '10',
    #     '-hls_list_size', '0',
    #     f'{output_dir}/playlist.m3u8'
    # ])
    
    return video_id

@app.route('/api/video/<video_id>')
def get_video(video_id):
    """Serve video playlist"""
    playlist_path = f'streams/{video_id}/playlist.m3u8'
    if os.path.exists(playlist_path):
        return send_file(playlist_path)
    return {'error': 'Video not found'}, 404

@app.route('/api/video/<video_id>/<segment>')
def get_segment(video_id, segment):
    """Serve video segment"""
    segment_path = f'streams/{video_id}/{segment}'
    if os.path.exists(segment_path):
        return send_file(segment_path)
    return {'error': 'Segment not found'}, 404

@app.route('/api/videos', methods=['GET'])
def list_videos():
    """List all available videos"""
    streams_dir = 'streams'
    if os.path.exists(streams_dir):
        videos = [d for d in os.listdir(streams_dir) if os.path.isdir(os.path.join(streams_dir, d))]
        return {'videos': videos}
    return {'videos': []}

if __name__ == '__main__':
    os.makedirs('uploads', exist_ok=True)
    os.makedirs('streams', exist_ok=True)
    app.run(debug=True)`,
      instructions: [
        "Install and configure FFmpeg",
        "Implement adaptive bitrate streaming",
        "Add CDN integration (CloudFront/Cloudflare)",
        "Implement video analytics",
        "Add thumbnail generation"
      ],
      xpReward: 450
    },
    {
      id: "ai_resume",
      title: "AI Resume Analyzer",
      description: "AI-powered resume analysis and optimization tool",
      difficulty: "Expert",
      duration: "16 hours",
      xp: 420,
      skills: ["NLP", "Machine Learning", "PDF Processing", "ATS Simulation"],
      features: [
        "Resume parsing",
        "ATS score calculation",
        "Keyword matching",
        "Improvement suggestions",
        "Job matching"
      ],
      theory: "Build an AI-powered resume analyzer using NLP techniques. Learn about document parsing, text analysis, ATS algorithms, and building intelligent recommendation systems.",
      folderStructure: `ai_resume/
├── app.py
├── resume_parser.py
├── ats_analyzer.py
├── ml_models/
├── job_descriptions/
├── README.md
└── requirements.txt`,
      starterCode: `from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import PyPDF2
import spacy
from collections import Counter
import re

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'resumes'

# Load NLP model
nlp = spacy.load('en_core_web_sm')

def extract_text_from_pdf(pdf_path):
    """Extract text from PDF resume"""
    text = ""
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        for page in reader.pages:
            text += page.extract_text()
    return text

def analyze_resume(text, job_description=""):
    """Analyze resume and calculate ATS score"""
    doc = nlp(text)
    
    # Extract skills
    skills = []
    skill_keywords = ['python', 'javascript', 'java', 'sql', 'machine learning', 
                     'data analysis', 'web development', 'react', 'django', 'flask']
    
    for token in doc:
        if token.text.lower() in skill_keywords:
            skills.append(token.text.lower())
    
    # Extract experience
    experience_years = 0
    experience_pattern = r'(\\d+)\\+?\\s*(years?|yrs?)'
    matches = re.findall(experience_pattern, text.lower())
    for match in matches:
        experience_years = max(experience_years, int(match[0]))
    
    # Calculate ATS score
    ats_score = 0
    
    # Skills score (40%)
    skills_score = min(40, len(skills) * 5)
    ats_score += skills_score
    
    # Experience score (30%)
    experience_score = min(30, experience_years * 5)
    ats_score += experience_score
    
    # Structure score (30%)
    has_sections = any(word in text.lower() for word in ['experience', 'education', 'skills'])
    structure_score = 30 if has_sections else 15
    ats_score += structure_score
    
    # Keyword matching with job description
    matched_keywords = []
    if job_description:
        job_doc = nlp(job_description)
        job_keywords = [token.text.lower() for token in job_doc if token.pos_ in ['NOUN', 'ADJ']]
        matched_keywords = [kw for kw in job_keywords if kw in text.lower()]
    
    return {
        'ats_score': min(100, ats_score),
        'skills': list(set(skills)),
        'experience_years': experience_years,
        'matched_keywords': matched_keywords,
        'suggestions': generate_suggestions(ats_score, skills, experience_years)
    }

def generate_suggestions(ats_score, skills, experience):
    suggestions = []
    
    if ats_score < 70:
        suggestions.append("Add more relevant skills to improve your ATS score")
    
    if len(skills) < 5:
        suggestions.append("Include more technical skills")
    
    if experience < 2:
        suggestions.append("Highlight any projects or internships")
    
    if ats_score < 50:
        suggestions.append("Consider restructuring your resume for better ATS parsing")
    
    return suggestions

@app.route('/api/analyze', methods=['POST'])
def analyze_resume():
    if 'resume' not in request.files:
        return jsonify({'error': 'No resume file'}), 400
    
    file = request.files['resume']
    job_description = request.form.get('job_description', '')
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if file and file.filename.endswith('.pdf'):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        
        text = extract_text_from_pdf(filepath)
        analysis = analyze_resume(text, job_description)
        
        return jsonify(analysis)
    
    return jsonify({'error': 'Only PDF files are supported'}), 400

@app.route('/api/keywords', methods=['GET'])
def get_keywords():
    """Return common keywords for different job roles"""
    keywords = {
        'software_engineer': ['python', 'javascript', 'react', 'django', 'git', 'agile'],
        'data_scientist': ['python', 'machine learning', 'sql', 'pandas', 'numpy', 'statistics'],
        'web_developer': ['html', 'css', 'javascript', 'react', 'node.js', 'api']
    }
    return jsonify(keywords)

if __name__ == '__main__':
    os.makedirs('resumes', exist_ok=True)
    app.run(debug=True)`,
      instructions: [
        "Install spacy language model",
        "Add more sophisticated ATS algorithm",
        "Implement job description parsing",
        "Add resume template matching",
        "Create frontend with drag-and-drop"
      ],
      xpReward: 420
    },
    {
      id: "large_scale_api",
      title: "Large-scale API System",
      description: "Production-ready API with caching, rate limiting, and monitoring",
      difficulty: "Expert",
      duration: "22 hours",
      xp: 550,
      skills: ["FastAPI", "Redis", "PostgreSQL", "Docker", "Monitoring"],
      features: [
        "Rate limiting",
        "Caching with Redis",
        "Database connection pooling",
        "API versioning",
        "Monitoring and logging",
        "Load balancing ready"
      ],
      theory: "Build a production-ready API system. Learn about caching strategies, rate limiting, database optimization, monitoring, and deploying scalable systems.",
      folderStructure: `large_scale_api/
├── app/
│   ├── main.py
│   ├── api/
│   ├── core/
│   │   ├── config.py
│   │   ├── security.py
│   │   └── cache.py
│   └── models/
├── tests/
├── docker/
├── README.md
└── requirements.txt`,
      starterCode: `from fastapi import FastAPI, Depends, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from slowapi import Limiter, _get_remote_address
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
import redis
import json
import time
from typing import Optional

app = FastAPI(title="Large Scale API")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rate limiting
limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter

# Redis cache (simplified - in production use actual Redis)
cache = {}

def get_from_cache(key: str):
    if key in cache:
        if time.time() - cache[key]['timestamp'] < 300:  # 5 min TTL
            return cache[key]['data']
    return None

def set_cache(key: str, data):
    cache[key] = {
        'data': data,
        'timestamp': time.time()
    }

# Simulated database
users_db = []
products_db = []

@app.get("/")
@limiter.limit("100/minute")
async def root():
    return {"message": "Large Scale API", "version": "1.0.0"}

@app.get("/api/products")
@limiter.limit("50/minute")
async def get_products(request: Request):
    # Try cache first
    cache_key = "products_list"
    cached_data = get_from_cache(cache_key)
    
    if cached_data:
        return cached_data
    
    # If not in cache, fetch from database
    products = products_db
    
    # Set cache
    set_cache(cache_key, products)
    
    return products

@app.post("/api/products")
@limiter.limit("20/minute")
async def create_product(product: dict):
    product['id'] = len(products_db) + 1
    products_db.append(product)
    
    # Invalidate cache
    if "products_list" in cache:
        del cache["products_list"]
    
    return product

@app.get("/api/products/{product_id}")
@limiter.limit("100/minute")
async def get_product(product_id: int):
    cache_key = f"product_{product_id}"
    cached_data = get_from_cache(cache_key)
    
    if cached_data:
        return cached_data
    
    product = next((p for p in products_db if p['id'] == product_id), None)
    
    if product:
        set_cache(cache_key, product)
        return product
    
    raise HTTPException(status_code=404, detail="Product not found")

@app.get("/api/health")
async def health_check():
    return {
        "status": "healthy",
        "timestamp": time.time(),
        "cache_size": len(cache)
    }

@app.exception_handler(RateLimitExceeded)
async def rate_limit_exceeded_handler(request: Request, exc: RateLimitExceeded):
    return JSONResponse(
        status_code=429,
        content={"detail": "Rate limit exceeded. Please try again later."}
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)`,
      instructions: [
        "Set up actual Redis for caching",
        "Implement PostgreSQL with connection pooling",
        "Add API versioning (v1, v2)",
        "Implement proper authentication",
        "Add Prometheus monitoring",
        "Create Docker setup",
        "Add comprehensive tests"
      ],
      xpReward: 550
    },
    {
      id: "full_stack_ai",
      title: "Full-stack AI Assistant",
      description: "Complete AI assistant with web interface and multiple AI capabilities",
      difficulty: "Expert",
      duration: "25 hours",
      xp: 600,
      skills: ["React", "FastAPI", "OpenAI API", "Vector Database", "RAG"],
      features: [
        "Chat interface",
        "Document Q&A",
        "Code generation",
        "Image analysis",
        "Multi-model support"
      ],
      theory: "Build a full-stack AI assistant using RAG (Retrieval-Augmented Generation). Learn about vector databases, AI API integration, and building intelligent web applications.",
      folderStructure: `full_stack_ai/
├── backend/
│   ├── app.py
│   ├── rag/
│   │   ├── vector_store.py
│   │   ├── retriever.py
│   │   └── generator.py
│   └── api/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
├── documents/
├── README.md
└── requirements.txt`,
      starterCode: `# backend/app.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import openai
import chromadb
from chromadb.config import Settings

app = FastAPI(title="AI Assistant")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize OpenAI (use your API key)
# openai.api_key = "your-api-key"

# Initialize ChromaDB for vector storage
chroma_client = chromadb.Client(Settings(
    chroma_db_impl="duckdb+parquet",
    persist_directory="./chroma_db"
))

class Message(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    messages: List[Message]
    use_rag: bool = False

class DocumentRequest(BaseModel):
    content: str
    metadata: dict

# Vector database functions
def add_document_to_vector_store(content: str, metadata: dict):
    collection = chroma_client.get_or_create_collection("documents")
    collection.add(
        documents=[content],
        metadatas=[metadata],
        ids=[str(hash(content))]
    )

def search_vector_store(query: str, n_results: int = 3):
    collection = chroma_client.get_or_create_collection("documents")
    results = collection.query(
        query_texts=[query],
        n_results=n_results
    )
    return results

@app.post("/api/chat")
async def chat(request: ChatRequest):
    """Chat with AI assistant"""
    messages = [{"role": m.role, "content": m.content} for m in request.messages]
    
    if request.use_rag:
        # RAG: Retrieve relevant documents
        last_message = messages[-1]["content"]
        results = search_vector_store(last_message)
        
        if results['documents'][0]:
            context = "\\n".join(results['documents'][0])
            messages[-1]["content"] = f"Context: {context}\\n\\nQuestion: {last_message}"
    
    # Call OpenAI API (simulated)
    # response = openai.ChatCompletion.create(
    #     model="gpt-4",
    #     messages=messages
    # )
    
    # Simulated response
    response_content = "This is a simulated AI response. In production, this would call OpenAI API."
    
    return {
        "role": "assistant",
        "content": response_content
    }

@app.post("/api/documents")
async def add_document(request: DocumentRequest):
    """Add document to vector store for RAG"""
    add_document_to_vector_store(request.content, request.metadata)
    return {"message": "Document added successfully"}

@app.get("/api/documents/search")
async def search_documents(query: str, n: int = 3):
    """Search documents in vector store"""
    results = search_vector_store(query, n)
    return {
        "documents": results['documents'],
        "metadatas": results['metadatas']
    }

@app.get("/api/health")
async def health():
    return {"status": "healthy", "vector_db": "connected"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)`,
      instructions: [
        "Set up OpenAI API key",
        "Implement proper RAG pipeline",
        "Build React frontend with chat interface",
        "Add document upload functionality",
        "Implement streaming responses",
        "Add multiple AI model support",
        "Deploy to cloud"
      ],
      xpReward: 600
    }
  ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = projectsData;
}
