/* ==========================================================================
   Python Master AI - Core Application Script
   ========================================================================== */

// --- 1. Multilingual Curriculums & Job Readiness Data ---
const CURRICULUMS = {
  en: [
    {
      title: "1. Basics: Print & Job Log Output",
      description: "Learn how console streams operate to verify script outputs in server terminals.",
      textHTML: `
        <p>In industry jobs, scripts are executed on cloud servers. We must log processes using the <code>print()</code> function to monitor application health.</p>
        <h3>Print Function & Text</h3>
        <p>You pass text messages enclosed in quotes (<code>'</code> or <code>"</code>) inside the parentheses. This defines a string data type.</p>
        <div class="lesson-code-wrapper">
          <div class="code-wrapper-header"><span>Python Example</span><span>main.py</span></div>
          <div class="code-wrapper-body">print("Server process started successfully.")</div>
        </div>
      `,
      quiz: {
        question: "Which of the following lines outputs exactly 'Process Active'?",
        options: [
          "console.log('Process Active')",
          "print(\"Process Active\")",
          "echo 'Process Active'",
          "System.out.print(\"Process Active\")"
        ],
        correctIndex: 1,
        explanation: "Excellent! print() writes variables or string values to the terminal stream."
      },
      challenge: {
        name: "Quest 1: Server Initialization Logs",
        description: "Write a server script that outputs 'Hello, Python!' to initialize operational database nodes.",
        template: "# Write database initialization print below\n\n",
        goals: [
          { id: "has_print", text: "Code uses the print() function", validator: (code) => code.includes("print") },
          { id: "prints_hello", text: "Terminal prints 'Hello, Python!'", validator: (c, v, out) => out.includes("Hello, Python!") }
        ]
      }
    },
    {
      title: "2. Variable Declarations & Math Calculations",
      description: "Manage variable assignments in memory to perform tax, billing, and accounting operations.",
      textHTML: `
        <p>Variables let us allocate names to memory values using the <code>=</code> assignment operator.</p>
        <div class="lesson-code-wrapper">
          <div class="code-wrapper-header"><span>Mathematical Constants</span><span>main.py</span></div>
          <div class="code-wrapper-body">hourly_rate = 25
total_hours = 40
weekly_pay = hourly_rate * total_hours</div>
        </div>
      `,
      quiz: {
        question: "How do you create a variable named 'salary' containing the integer 50000?",
        options: [
          "var salary = 50000",
          "int salary = 50000",
          "salary = 50000",
          "salary := 50000"
        ],
        correctIndex: 2,
        explanation: "Correct! Python is dynamically typed. No need to define type keywords."
      },
      challenge: {
        name: "Quest 2: Employee Payroll Computation",
        description: "Create 'a = 15' and 'b = 20'. Print their sum representing overtime bonuses.",
        template: "# Compute a + b\n\n",
        goals: [
          { id: "var_a", text: "Variable 'a' set to 15", validator: (code, vars) => vars['a'] === 15 },
          { id: "var_b", text: "Variable 'b' set to 20", validator: (code, vars) => vars['b'] === 20 },
          { id: "prints_35", text: "Terminal outputs 35", validator: (c, v, out) => out.includes("35") }
        ]
      }
    },
    {
      title: "3. Decision Control Flow: Conditionals",
      description: "Develop server logic checking parameter bounds using if, elif, and else.",
      textHTML: `
        <p>Control flow allows applications to execute different directions based on logical conditions.</p>
        <p>Python utilizes <strong>indentation</strong> (tab or four spaces) to define execution blocks underneath conditionals.</p>
        <div class="lesson-code-wrapper">
          <div class="code-wrapper-header"><span>Payroll Check</span><span>main.py</span></div>
          <div class="code-wrapper-body">hours = 45
if hours > 40:
    print("Overtime Pay Active")
else:
    print("Standard Pay Active")</div>
        </div>
      `,
      quiz: {
        question: "How does Python designate blocks of statements belonging inside an 'if' code pathway?",
        options: [
          "By wrapping items in curly braces {}",
          "By indenting the codes with spaces/tabs",
          "By separating items with semicolons ;",
          "By using parentheses ()"
        ],
        correctIndex: 1,
        explanation: "Exactly! Indentation is syntax in Python and specifies block hierarchies."
      },
      challenge: {
        name: "Quest 3: Thermal Core Regulator",
        description: "Create variable 'temp = 25'. If 'temp > 20', print 'Warm', otherwise print 'Cold'.",
        template: "temp = 25\n# Write conditional decision block below\n\n",
        goals: [
          { id: "temp_val", text: "Variable 'temp' set to 25", validator: (code, vars) => vars['temp'] === 25 },
          { id: "has_if", text: "Contains conditional if statement", validator: (code) => code.includes("if") },
          { id: "prints_warm", text: "Prints 'Warm' to terminal", validator: (c, v, out) => out.includes("Warm") }
        ]
      }
    },
    {
      title: "4. Loop Iteration Operations",
      description: "Automate repetitive auditing tasks using ranges and looping intervals.",
      textHTML: `
        <p>For loops iterate over sequences. We use <code>for i in range(x):</code> to repeat a code block <code>x</code> times.</p>
      `,
      quiz: {
        question: "How many times does 'for i in range(5):' run its indented block?",
        options: [
          "4 times",
          "5 times",
          "6 times",
          "Indefinitely"
        ],
        correctIndex: 1,
        explanation: "Perfect! range(5) returns values 0 to 4, repeating the loop block exactly 5 times."
      },
      challenge: {
        name: "Quest 4: Transaction Auditor Loop",
        description: "Write a for loop using range(3) that loops through index 0, 1, 2 and prints variable 'i' to simulate logging.",
        template: "# Loop 3 times and print index variable i\n\n",
        goals: [
          { id: "has_for", text: "Code has a 'for' loop and 'range'", validator: (code) => code.includes("for") && code.includes("range") },
          { id: "prints_all", text: "Terminal prints 0, 1, and 2 consecutively", validator: (c, v, out) => out.includes("0") && out.includes("1") && out.includes("2") }
        ]
      }
    },
    {
      title: "5. Lists Collections & Item Extraction",
      description: "Manage arrays of skills and technical components using sequence indexes.",
      textHTML: `
        <p>Lists let us hold ordered items inside square brackets: <code>items = ["a", "b"]</code>. Sequence indexing starts at <code>0</code>.</p>
      `,
      quiz: {
        question: "How do you extract the first element in list: techs = ['Python', 'Django', 'SQL']?",
        options: [
          "techs[1]",
          "techs[0]",
          "techs.get(1)",
          "techs['Python']"
        ],
        correctIndex: 1,
        explanation: "Correct! List sequences are zero-indexed, meaning index 0 extracts the first element."
      },
      challenge: {
        name: "Quest 5: Corporate Skills Array",
        description: "Create a list named 'colors' holding 'red' and 'blue'. Print the second item ('blue').",
        template: "# Create list colors and print colors[1]\n\n",
        goals: [
          { id: "colors_list", text: "List named 'colors' is created", validator: (code, vars) => Array.isArray(vars['colors']) },
          { id: "prints_blue", text: "Prints 'blue' to the console", validator: (c, v, out) => out.includes("blue") }
        ]
      }
    },
    {
      title: "6. Reusable Modular Functions",
      description: "Encapsulate procedural steps inside callable def functions returning values.",
      textHTML: `
        <p>Define custom routines using the <code>def</code> keyword. Return values back to calling statements using <code>return</code>.</p>
      `,
      quiz: {
        question: "Which keyword defines custom function declarations in Python?",
        options: [
          "function",
          "func",
          "def",
          "define"
        ],
        correctIndex: 2,
        explanation: "Correct! 'def' is the built-in keyword for defining reusable functions in Python."
      },
      challenge: {
        name: "Quest 6: Corporate Greet Function",
        description: "Define function 'greet' with parameter 'name'. Return 'Hello, ' + name. Call it with 'PyQuest' (or 'PyQuest' equivalent) and print.",
        template: "# Define greet(name) returning 'Hello, ' + name and print greet('PyQuest')\n\n",
        goals: [
          { id: "has_def", text: "Function named 'greet' is defined", validator: (code, vars) => vars['greet'] && vars['greet'].type === 'function' },
          { id: "prints_hello", text: "Terminal prints 'Hello, PyQuest'", validator: (c, v, out) => out.includes("Hello, PyQuest") }
        ]
      }
    },
    {
      title: "7. AI Basics: Datasets & Labels",
      description: "Understand variables arrays mapping AI dataset outputs and training parameters.",
      textHTML: `
        <p>In Machine Learning, we teach models using datasets. Datasets consist of features (inputs) and labels (outputs).</p>
        <h3>Features vs Labels</h3>
        <p>Features are the data we feed in. Labels are the target answers we want the AI to predict. E.g. predicting email spam: the email content is the feature, and 'Spam' (1) or 'Not Spam' (0) is the label.</p>
        <div class="lesson-code-wrapper">
          <div class="code-wrapper-header"><span>Labels Data</span><span>main.py</span></div>
          <div class="code-wrapper-body">y = [0, 1, 0, 1]  # 1 represents Spam, 0 represents Safe
print(y[1])</div>
        </div>
      `,
      quiz: {
        question: "In Machine Learning, what represents the target answer we want the model to learn and predict?",
        options: [
          "Labels",
          "Features",
          "Gutter line number",
          "Tabs"
        ],
        correctIndex: 0,
        explanation: "Correct! Labels represent the true target classifications or outcomes we want the AI model to learn."
      },
      challenge: {
        name: "Quest 7: Training Target Labels",
        description: "Create a list named 'y' with values [0, 1, 0, 1]. Print the second label in the dataset ('1') using list indexing.",
        template: "# Setup dataset labels list y, then print the second item\n\n",
        goals: [
          { id: "has_list_y", text: "List named 'y' is created", validator: (code, vars) => Array.isArray(vars['y']) },
          { id: "prints_one", text: "Terminal prints the second label: 1", validator: (c, v, out) => out.includes("1") }
        ]
      }
    },
    {
      title: "8. Neural Networks: Weight Summations",
      description: "Formulate mathematical summation products representing standard artificial neuron nodes.",
      textHTML: `
        <p>An artificial neuron computes a weighted sum of its inputs, adds a bias value, and runs it through an activation function.</p>
        <h3>The Neuron Math</h3>
        <p><code>Output = (Input_1 * Weight_1) + (Input_2 * Weight_2) + Bias</code>. We can write simple functions to compute this automatically.</p>
        <div class="lesson-code-wrapper">
          <div class="code-wrapper-header"><span>Neuron Sum</span><span>main.py</span></div>
          <div class="code-wrapper-body">def evaluate_neuron(x, w, b):
    return x * w + b

result = evaluate_neuron(10, 0.8, 0.5)
print(result) # prints 8.5</div>
        </div>
      `,
      quiz: {
        question: "What function introduces non-linearity and determines if an artificial neuron fires?",
        options: [
          "Activation Function",
          "Print Function",
          "UPI Gating Function",
          "Streak Counter"
        ],
        correctIndex: 0,
        explanation: "Perfect! Activation functions (like ReLU or Sigmoid) decide if a neuron fires based on its weighted input."
      },
      challenge: {
        name: "Quest 8: Artificial Synaptic Connection",
        description: "Write a function named 'neuron' taking parameters 'x' and 'w'. It should return 'x * w'. Call the function with inputs 'neuron(10, 5)' and print the result (50).",
        template: "# Define neuron(x, w) returning weighted sum, then print it called with 10 and 5\n\n",
        goals: [
          { id: "has_neuron", text: "Function 'neuron' is declared", validator: (code, vars) => vars['neuron'] && vars['neuron'].type === 'function' },
          { id: "prints_50", text: "Terminal prints calculated output: 50", validator: (c, v, out) => out.includes("50") }
        ]
      }
    },
    {
      title: "9. Natural Language: Chatbot Prompt Intent maps",
      description: "Structure token dictionaries to map intents to automated conversational assistant answers.",
      textHTML: `
        <p>Chatbots parse sentences into key prompts (tokens) and map them to standard reply lists using **intent dictionaries**.</p>
        <div class="lesson-code-wrapper">
          <div class="code-wrapper-header"><span>Intent Maps</span><span>main.py</span></div>
          <div class="code-wrapper-body">intents = {
    "hi": "Hello!",
    "bye": "Goodbye!"
}
print(intents["hi"])</div>
        </div>
      `,
      quiz: {
        question: "What is the process of splitting natural text sentences into separate word units in NLP called?",
        options: [
          "Tokenization",
          "Authentication",
          "Verification",
          "Variables declaration"
        ],
        correctIndex: 0,
        explanation: "Correct! Tokenization splits sentences into individual tokens (words) so dictionaries can analyze intents."
      },
      challenge: {
        name: "Quest 9: Custom Chatbot Intent Map",
        description: "Create a dictionary named 'intents' mapping the key 'hi' to 'Hello, Explorer!' and key 'bye' to 'Goodbye!'. Print the dictionary value for key 'hi'.",
        template: "# Create intents dictionary and print intents['hi']\n\n",
        goals: [
          { id: "has_intents_dict", text: "Dictionary intents created", validator: (code, vars) => vars['intents'] && typeof vars['intents'] === 'object' && !Array.isArray(vars['intents']) },
          { id: "prints_hello_explorer", text: "Terminal prints 'Hello, Explorer!'", validator: (c, v, out) => out.includes("Hello, Explorer!") }
        ]
      }
    }
  ],
  te: [
    {
      title: "1. బేసిక్స్: ప్రింట్ & జాబ్ అవుట్‌పుట్",
      description: "స్క్రీన్ పైన టెక్స్ట్ ముద్రించడం కోసం బేసిక్ ప్రింట్ ఫంక్షన్ నేర్చుకోండి.",
      textHTML: `
        <p>పైథాన్ లో స్క్రీన్ పైన సమాచారం చూపించడానికి <code>print()</code> ఫంక్షన్ వాడతాము.</p>
        <div class="lesson-code-wrapper">
          <div class="code-wrapper-header"><span>పైథాన్ కోడ్</span><span>main.py</span></div>
          <div class="code-wrapper-body">print("సంగతి ఏంటి?")</div>
        </div>
      `,
      quiz: {
        question: "సరైన పైథాన్ ప్రింట్ లైన్ ఏది?",
        options: [
          "console.log('Hello')",
          "print(\"Hello\")",
          "echo 'Hello'",
          "System.out.print(\"Hello\")"
        ],
        correctIndex: 1,
        explanation: "అద్భుతం! print() ద్వారా స్క్రీన్ పై అవుట్‌పుట్ ప్రదర్శిస్తాము."
      },
      challenge: {
        name: "క్వెస్ట్ 1: ప్రింట్ బేసిక్స్",
        description: "స్క్రీన్ పైన 'Hello, Python!' అని ప్రింట్ చేసే కోడ్ రాయండి.",
        template: "# ప్రింట్ కోడ్ ఇక్కడ రాయండి\n\n",
        goals: [
          { id: "has_print", text: "ప్రింట్ ఫంక్షన్ వాడాలి", validator: (code) => code.includes("print") },
          { id: "prints_hello", text: "'Hello, Python!' అని ముద్రించాలి", validator: (c, v, out) => out.includes("Hello, Python!") }
        ]
      }
    }
    // Dynamic fallbacks mapping English elements on further indices to prevent index crashes
  ],
  hi: [
    {
      title: "1. बुनियादी बातें: प्रिंट और आउटपुट",
      description: "स्क्रीन पर जानकारी दिखाने के लिए प्रिंट फ़ंक्शन सीखें।",
      textHTML: `
        <p>पायथन में कंसोल पर टेक्स्ट प्रिंट करने के लिए <code>print()</code> फ़ंक्शन का उपयोग किया जाता है।</p>
      `,
      quiz: {
        question: "स्क्रीन पर 'Hello' दिखाने का सही तरीका क्या है?",
        options: [
          "console.log('Hello')",
          "print(\"Hello\")",
          "echo 'Hello'",
          "System.out.print(\"Hello\")"
        ],
        correctIndex: 1,
        explanation: "बहुत बढ़िया! print() फ़ंक्शन द्वारा हम टर्मिनल पर आउटपुट दिखाते हैं।"
      },
      challenge: {
        name: "क्वेस्ट 1: बुनियादी प्रिंट",
        description: "'Hello, Python!' स्क्रीन पर प्रिंट करने के लिए कोड लिखें।",
        template: "# प्रिंट स्टेटमेंट यहाँ लिखें\n\n",
        goals: [
          { id: "has_print", text: "कोड में print() फ़ंक्शन होना चाहिए", validator: (code) => code.includes("print") },
          { id: "prints_hello", text: "टर्मिनल में 'Hello, Python!' प्रिंट होना चाहिए", validator: (c, v, out) => out.includes("Hello, Python!") }
        ]
      }
    }
  ]
};

// Populate translation backups for Telugu and Hindi from English to prevent missing chapter indexing errors
for (let lang of ['te', 'hi']) {
  for (let i = 1; i < CURRICULUMS.en.length; i++) {
    if (!CURRICULUMS[lang][i]) {
      CURRICULUMS[lang][i] = CURRICULUMS.en[i];
    }
  }
}

// --- 2. Achievements Milestones ---
const ACHIEVEMENTS = [
  { id: "badge-streak", name: "🏆 7 Day Streak", desc: "Maintained coding consistency for a full week.", icon: "bolt" },
  { id: "badge-master", name: "🏆 Quiz Master", desc: "Answered multiple concept checks correctly.", icon: "school" },
  { id: "badge-beginner", name: "🏆 Python Beginner", desc: "Completed basics of printing and payroll calculations.", icon: "child_care" },
  { id: "badge-ai", name: "🏆 AI Explorer", desc: "Tested coding variables using AI Project review loops.", icon: "psychology" }
];

// --- 3. Initial State Management ---
let state = {
  isAuthenticated: false,
  userName: "Radharapu Arun Kumar",
  userEmail: "radharapuarunkumar01@gmail.com",
  xp: 0,
  level: 1,
  streak: 1,
  currentChapterIndex: 0,
  completedChapters: [],
  completedChallengesCount: 0,
  unlockedAchievements: [],
  personalNotes: "",
  bookmarks: [],
  isPremium: false,
  dailyCheckinDone: false,
  lastLoginDate: "",
  language: "en"
};

// Mock community feed database
let communityFeed = [
  { id: 1, author: "Arun Kumar", text: "Just completed building my calculator module! Real-world learning is much better than dry theory.", likes: 8, liked: false, date: "May 27, 2026" },
  { id: 2, author: "Developer Rohan", text: "Any tip to improve loops on transaction audits? Motherly AI Tutor suggested range checkups.", likes: 3, liked: false, date: "May 27, 2026" }
];

// Mock Jobs Feed Database
const JOBS_DATABASE = [
  { title: "Junior Python Engineer (Remote)", company: "Intellect AI Services", location: "Hyderabad, India / Remote", type: "Full Time", salary: "₹6,00,000 - ₹8,00,000 / year" },
  { title: "Python Backend Developer Intern", company: "CyberSystems Labs", location: "Bengaluru, India / Hybrid", type: "Internship", salary: "₹25,000 / month" },
  { title: "Associate Automation Analyst", company: "FinTech global Group", location: "Remote, India", type: "Fresher Opening", salary: "₹5,00,000 / year" }
];

// Mock Leaderboard Data
let LEADERBOARD_DB = [
  { name: "Srinivas Rao", streak: 12, xp: 2850, isCurrent: false },
  { name: "Priya Sharma", streak: 9, xp: 2400, isCurrent: false },
  { name: "Arun Kumar", streak: 1, xp: 0, isCurrent: true }, // Syncs dynamically with user profile
  { name: "Rahul Verma", streak: 4, xp: 950, isCurrent: false }
];

// Simulated Motherly Accented Voice Translators
const MOTHER_VOICE_TRANSLATIONS = {
  en: {
    welcome: "Welcome beta! I am your Python Mother Tutor. I will help you become a great programmer. Do not worry about mistakes.",
    correct: "Very good child! You have solved it perfectly. Keep going, I am very proud of you.",
    incorrect: "Beta, look carefully. You made a minor mistake. Read my tracebacks, let's correct it together.",
    syntax_error: "Arey beta, there is a syntax error. Check your quotes or colons. Python needs perfect structures.",
    explain_var: "Variables are like containers in our kitchen, beta. You label them to store values."
  },
  te: {
    welcome: "స్వాగతం బాబు! నేను నీ పైథాన్ అమ్మ లాంటి ట్యూటర్ ని. నువ్వు ఏ తప్పులకి భయపడకు, నేను ప్రతి అడుగులో నీతో ఉంటాను.",
    correct: "చాలా సంతోషం నాన్న! నువ్వు చాలా బాగా చేసావు. కోడింగ్ బాగా నేర్చుకో.",
    incorrect: "బాబు, చిన్న తప్పు చేసావు. పర్లేదు మళ్ళీ ప్రయత్నించు, నేను నీకు సహాయం చేస్తాను.",
    syntax_error: "బాబు, ఇక్కడ సింటాక్స్ తప్పు వచ్చింది. కోలన్ లేదా కోట్స్ సరిగ్గా పెట్టావా చూడు.",
    explain_var: "వేరియబుల్స్ అంటే మన ఇంట్లో పెట్టె లాంటివి బాబు, వాటిలో మనం సామాన్లు దాచుకుంటాము."
  },
  hi: {
    welcome: "नमस्ते बेटा! मैं तुम्हारी पायथन मदर ट्यूटर हूँ। कोडिंग से डरना मत, मैं तुम्हें सब कुछ आसान तरीके से सिखाऊँगी।",
    correct: "बहुत बढ़िया बेटा! तुमने बिल्कुल सही कोड लिखा है। मुझे तुम पर बहुत गर्व है।",
    incorrect: "कोई बात नहीं बेटा, एक छोटी सी गलती हो गई। ध्यान से देखो, हम इसे मिलकर ठीक करेंगे।",
    syntax_error: "अरे बेटा, सिंटैक्स में कुछ गलती है। कोट्स या कोलन चेक करो।",
    explain_var: "बेटा, वेरिएबल्स रसोई के डिब्बों जैसे होते हैं। उन पर नाम लिखकर हम सामान रखते हैं।"
  }
};

// --- 4. Authentication System (Real Google OAuth + Manual Fallback) ---

/**
 * Called by Google Identity Services after user selects their Google account.
 * Receives a JWT credential that contains name, email, and profile picture.
 */
function handleGoogleCredential(response) {
  try {
    // Decode the JWT token (base64 payload)
    const payload = JSON.parse(atob(response.credential.split('.')[1]));
    const name    = payload.name  || payload.email.split('@')[0];
    const email   = payload.email || '';
    const photo   = payload.picture || null;

    if (!email.endsWith('@gmail.com') && !email.includes('@')) {
      showSigninStatus('❌ Please use a valid Gmail account.', 'error');
      return;
    }

    showSigninStatus(`✅ Verified by Google: ${email}`, 'success');

    // Sign in with verified data
    onGoogleAuthSuccess({ name, email, photo, uid: payload.sub });
  } catch(e) {
    showSigninStatus('⚠️ Failed to verify Google account. Try manual sign-in.', 'error');
    console.error("JWT decode error:", e);
  }
}

/**
 * Triggered by Firebase popup sign-in (from firebase-init.js)
 */
window.onGoogleAuthSuccess = async function({ name, email, photo, uid }) {
  // Try to load existing progress from Firestore first
  let cloudData = null;
  if (window.loadUserDataFromFirestore) {
    try { cloudData = await window.loadUserDataFromFirestore(uid); } catch(e) {}
  }

  if (cloudData) {
    state = { ...state, ...cloudData };
  } else {
    // Load from localStorage as fallback
    const dbKey = `pmai_progress_${email.replace(/[^a-zA-Z0-9]/g, '_')}`;
    const saved = localStorage.getItem(dbKey);
    if (saved) {
      try { state = JSON.parse(saved); } catch(e) {}
    }
  }

  // Always set verified fields
  state.isAuthenticated = true;
  state.userName  = name;
  state.userEmail = email;
  state.photoURL  = photo;
  state.uid       = uid;
  state.isGoogleVerified = true;
  state.lastLoginDate = new Date().toLocaleString();

  saveSession();
  finishLogin();
};

/**
 * Manual Gmail sign-in fallback — validates email format
 */
function manualGmailSignIn() {
  const emailInput = document.getElementById('txt-signin-email').value.trim();
  const passwordInput = document.getElementById('txt-signin-password').value;
  const btn = document.getElementById('btn-manual-signin');

  if (!emailInput.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    showSigninStatus('⚠️ Please enter a valid email address (e.g. yourname@gmail.com).', 'error');
    return;
  }
  if (passwordInput === '') {
    showSigninStatus('⚠️ Please enter your password.', 'error');
    return;
  }

  btn.disabled = true;
  btn.innerHTML = `<span class="material-symbols-rounded" style="animation:spin 1s linear infinite;display:inline-block;">refresh</span> Signing in...`;
  showSigninStatus('🔄 Verifying and loading your progress...', 'info');

  setTimeout(() => {
    // Load from localStorage
    const dbKey = `pmai_progress_${emailInput.replace(/[^a-zA-Z0-9]/g, '_')}`;
    const saved = localStorage.getItem(dbKey);
    if (saved) {
      try {
        state = JSON.parse(saved);
      } catch(e) {}
    }

    state.isAuthenticated   = true;
    state.userEmail         = emailInput;
    state.isGoogleVerified  = false;
    state.lastLoginDate     = new Date().toLocaleString();
    if (!state.firstLoginDate) state.firstLoginDate = new Date().toLocaleString();
    if (!state.userName) state.userName = emailInput.split('@')[0];

    // Store user data locally
    const userData = {
      name: state.userName,
      email: emailInput,
      isLoggedIn: true,
      isGoogleVerified: false
    };
    localStorage.setItem('pythonMasterUser', JSON.stringify(userData));

    saveSession();
    finishLogin();

    btn.disabled = false;
    btn.innerHTML = `<svg class="google-svg" viewBox="0 0 24 24" width="20" height="20"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"/></svg><span>Sign In</span>`;
  }, 800);
}

/**
 * Callback for Firebase Google Sign-In success
 */
window.onGoogleAuthSuccess = async function(userData) {
  state.isAuthenticated   = true;
  state.userName          = userData.name;
  state.userEmail         = userData.email;
  state.photoURL          = userData.photo;
  state.uid               = userData.uid;
  state.isGoogleVerified  = true;
  state.lastLoginDate     = new Date().toLocaleString();
  if (!state.firstLoginDate) state.firstLoginDate = new Date().toLocaleString();

  saveSession();
  finishLogin();
};
/**
 * Restore session when Firebase auto-detects returning user on page load
 */
window.restoreSessionFromCloud = function(cloudData, googleUser) {
  if (state.isAuthenticated) return; // Already logged in
  state = { ...state, ...cloudData };
  state.isAuthenticated  = true;
  state.userName         = googleUser.name  || state.userName;
  state.userEmail        = googleUser.email || state.userEmail;
  state.photoURL         = googleUser.photo || state.photoURL;
  state.isGoogleVerified = true;
  saveSession();
  finishLogin();
};

/**
 * Protected route check - ensures user is authenticated before accessing protected views
 */
function checkAuthentication() {
  // Check localStorage for user data
  const storedUser = localStorage.getItem('pythonMasterUser');
  if (storedUser) {
    try {
      const userData = JSON.parse(storedUser);
      if (userData.isLoggedIn) {
        state.isAuthenticated = true;
        state.userName = userData.name;
        state.userEmail = userData.email;
        state.photoURL = userData.photo;
        state.uid = userData.uid;
        state.isGoogleVerified = userData.isGoogleVerified || false;
        
        // Load progress data
        const dbKey = `pmai_progress_${userData.email.replace(/[^a-zA-Z0-9]/g, '_')}`;
        const saved = localStorage.getItem(dbKey);
        if (saved) {
          try {
            const savedState = JSON.parse(saved);
            state = { ...state, ...savedState };
          } catch(e) {}
        }
        
        return true;
      }
    } catch(e) {
      console.error('Error parsing stored user data:', e);
    }
  }
  return false;
}

/**
 * Hide auth gate and show app
 */
window.hideAuthGate = function() {
  document.body.classList.remove('auth-gate-active');
  document.body.classList.remove('landing-active');
};

/**
 * Common function called after any successful login
 */
function finishLogin() {
  document.body.classList.remove('auth-gate-active');

  // Update profile photo if available
  if (state.photoURL) {
    const photoEl = document.getElementById('header-profile-photo');
    if (photoEl) {
      photoEl.src = state.photoURL;
      photoEl.style.display = 'block';
    }
  }

  // Update verified badge
  const verifiedBadge = document.getElementById('lbl-verified-badge');
  if (verifiedBadge) {
    if (state.isGoogleVerified) {
      verifiedBadge.innerHTML = `<span class="material-symbols-rounded" style="font-size:14px;vertical-align:middle;color:var(--neon-green);">verified</span> Google Verified`;
      verifiedBadge.style.display = 'inline-flex';
    }
  }

  // Sync to Firestore cloud (non-blocking)
  if (window.saveUserDataToFirestore) {
    window.saveUserDataToFirestore(state).catch(() => {});
  }

  switchView('dashboard');
}

/**
 * Show status message on login screen
 */
function showSigninStatus(msg, type) {
  const el = document.getElementById('signin-status-msg');
  if (!el) return;
  el.style.display = 'block';
  el.textContent   = msg;
  const colors = {
    success: { bg: 'rgba(0,255,128,0.08)', color: 'var(--neon-green)', border: '1px solid rgba(0,255,128,0.3)' },
    error:   { bg: 'rgba(255,0,80,0.08)',  color: '#ff3366',           border: '1px solid rgba(255,0,80,0.3)'  },
    info:    { bg: 'rgba(0,200,255,0.08)', color: 'var(--neon-cyan)',  border: '1px solid rgba(0,200,255,0.3)' }
  };
  const c = colors[type] || colors.info;
  el.style.background = c.bg;
  el.style.color      = c.color;
  el.style.border     = c.border;
}

/**
 * Google Sign-In button click — tries Firebase popup first
 */
async function googleSignInPopup() {
  const statusEl = document.getElementById('signin-status-msg');
  showSigninStatus('🔄 Opening Google sign-in...', 'info');

  if (window.signInWithGoogle) {
    const ok = await window.signInWithGoogle();
    if (!ok) {
      // Firebase not configured — fall through to manual
      showSigninStatus('ℹ️ Google popup unavailable. Please use manual sign-in below.', 'info');
    }
  } else {
    showSigninStatus('ℹ️ Please configure Firebase. Using manual sign-in for now.', 'info');
  }
}

function signOutUser() {
  if (confirm("Sign out? Your progress is saved and will be restored next time.")) {
    state.isAuthenticated = false;
    window._authHandled = false;
    if (window.firebaseSignOut) window.firebaseSignOut();
    document.body.classList.add('auth-gate-active');
    document.getElementById('txt-signin-name').value  = '';
    document.getElementById('txt-signin-email').value = '';
  }
}

function saveSession() {
  const dbKey = `pmai_progress_${state.userEmail.replace(/[^a-zA-Z0-9]/g, '_')}`;
  localStorage.setItem(dbKey, JSON.stringify(state));
  // Also sync to Firestore cloud (non-blocking)
  if (window.saveUserDataToFirestore && state.isAuthenticated && state.uid) {
    window.saveUserDataToFirestore(state).catch(() => {});
  }
}

// --- 5. Application Navigation & Views Router ---
function switchView(viewName) {
  // Hide all screens
  document.querySelectorAll('.content-view').forEach(view => {
    view.classList.remove('active-view');
  });

  // Deactivate sidebar links
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });

  // Activate views
  const targetView = document.getElementById(`view-${viewName}`);
  const targetBtn = document.getElementById(`btn-nav-${viewName}`);

  if (targetView) targetView.classList.add('active-view');
  if (targetBtn) targetBtn.classList.add('active');

  // Update dynamic content
  updateDynamicHeaders(viewName);

  if (viewName === 'dashboard') {
    renderDashboard();
    renderCourseCards();
  } else if (viewName === 'lessons') {
    loadChapterLesson(state.currentChapterIndex);
  } else if (viewName === 'projects') {
    closeProjectSandbox(); // close existing sandboxes
  } else if (viewName === 'bookmarks') {
    renderBookmarksAndNotes();
  } else if (viewName === 'resume') {
    compileResumePreview();
  } else if (viewName === 'jobs') {
    renderJobsList();
  } else if (viewName === 'community') {
    renderCommunityFeed();
  } else if (viewName === 'leaderboard') {
    renderLeaderboard();
  } else if (viewName === 'admin') {
    renderAdminPanel();
  } else if (viewName === 'certificate') {
    renderCertificateVault();
  } else if (viewName === 'profile') {
    renderProfileView();
  } else if (viewName === 'settings') {
    // Settings view is static, no dynamic rendering needed
  }
}

function updateDynamicHeaders(viewName) {
  const mainTitle = document.getElementById('lbl-header-title');
  const subTitle = document.getElementById('lbl-header-subtitle');

  mainTitle.textContent = `Welcome Back, ${state.userName.split(' ')[0]}!`;

  const descriptions = {
    dashboard: "Your job-focused coding roadmap is ready. Complete goals to unlock certifications.",
    lessons: "Interactive Lessons & Multilingual AI Tutor Workspace.",
    projects: "Build real-world software components to construct a professional resume.",
    bookmarks: "Review your saved chapter concepts and personal coding study logs.",
    interview: "Examine top HR questions, code live interview challenges, or run mock recruiter boards.",
    resume: "ATS-compliant Resume Builder. Auto-compiles all your active credentials.",
    jobs: "Live list of remote fresher jobs and coding internships.",
    community: "Discuss doubts and share your coding successes with peer developers.",
    leaderboard: "Weekly XP rankings. Maintain streaks to stay on top.",
    premium: "Unlock Advanced Motherly Voice explanations and code reviews for ₹2/Month.",
    admin: "Operational Command Station. Simulate user variables and clear states.",
    certificate: "Print verified Python Master AI completion certificates."
  };

  subTitle.textContent = descriptions[viewName] || "Master Python coding, build real products, and get job ready.";
}

// --- 6. Dynamic Language Translator Handler ---
function setLanguage(langCode) {
  state.language = langCode;
  
  // Update styling
  document.querySelectorAll('.btn-lang').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`btn-lang-${langCode}`).classList.add('active');

  // Reload views depending on active layout
  const activeViewEl = document.querySelector('.content-view.active-view');
  if (activeViewEl) {
    const viewId = activeViewEl.id.replace('view-', '');
    switchView(viewId);
  }
  
  // Custom audio greeting on click
  triggerMotherlyVoiceMessage(MOTHER_VOICE_TRANSLATIONS[langCode].welcome);
}

// Simulated care mother text-to-speech speaker
function triggerMotherlyVoiceMessage(messageText) {
  if ('speechSynthesis' in window) {
    // Stop any active talk
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(messageText);
    
    // Choose appropriate speed and accent
    utterance.rate = 0.85; // comforting slower speech rate
    utterance.pitch = 1.05; // warmer mother-like sound

    // Search for suitable Indian accent voices depending on selected lang
    const voices = window.speechSynthesis.getVoices();
    let selectedVoice = null;

    if (state.language === 'hi') {
      selectedVoice = voices.find(v => v.lang.includes('IN') && v.lang.includes('hi'));
    } else if (state.language === 'te') {
      selectedVoice = voices.find(v => v.lang.includes('IN') && v.lang.includes('te'));
    } else {
      selectedVoice = voices.find(v => v.lang.includes('IN') || v.lang.includes('en'));
    }

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    window.speechSynthesis.speak(utterance);
  }
}

// --- 7. Dashboard Rendering Hub ---
function renderDashboard() {
  // Update sidebar levels & xp
  document.getElementById('lbl-sb-level').textContent = getGamifiedLevelTitle();
  document.getElementById('lbl-sb-xp').textContent = state.xp;
  document.getElementById('lbl-sb-streak').textContent = state.streak;
  
  const xpPercent = Math.min((state.xp / 4000) * 100, 100);
  document.getElementById('bar-sb-xp').style.width = `${xpPercent}%`;

  // Update checkin button layout
  const checkinBtn = document.getElementById('btn-daily-checkin');
  if (state.dailyCheckinDone) {
    checkinBtn.textContent = "Attendance Logged";
    checkinBtn.classList.add('checked');
    checkinBtn.disabled = true;
  } else {
    checkinBtn.textContent = "Check In (+10 XP)";
    checkinBtn.classList.remove('checked');
    checkinBtn.disabled = false;
  }

  // Update premium status text
  const premStatus = document.getElementById('lbl-premium-status');
  if (state.isPremium) {
    premStatus.textContent = "AI PRO UNLOCKED";
    premStatus.className = "badge-premium pro-active";
  } else {
    premStatus.textContent = "FREE ACCOUNT";
    premStatus.className = "badge-premium";
  }

  // Render roadmap node path cards
  const container = document.getElementById('roadmap-container');
  container.innerHTML = '';

  const activeCurriculum = CURRICULUMS[state.language] || CURRICULUMS.en;

  activeCurriculum.forEach((chap, idx) => {
    const isCompleted = state.completedChapters.includes(idx);
    const isUnlocked = idx === 0 || state.completedChapters.includes(idx - 1);
    
    let statusClass = "locked";
    let badgeText = "Locked";
    let badgeClass = "status-locked";
    let icon = "lock";

    if (isCompleted) {
      statusClass = "completed";
      badgeText = "Completed";
      badgeClass = "status-completed";
      icon = "check_circle";
    } else if (isUnlocked) {
      statusClass = "unlocked";
      badgeText = "Unlocked";
      badgeClass = "status-unlocked";
      icon = "play_circle";
    }

    const html = `
      <div class="roadmap-node ${statusClass}" onclick="if(${isUnlocked}){ state.currentChapterIndex=${idx}; switchView('lessons'); }">
        <div class="node-icon-wrapper">
          <span class="material-symbols-rounded">${icon}</span>
        </div>
        <div class="node-info">
          <h4>${chap.title}</h4>
          <p>${chap.description}</p>
        </div>
        <span class="node-status-badge ${badgeClass}">${badgeText}</span>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', html);
  });

  // Render achievements mini-grid
  const achContainer = document.getElementById('achievements-container');
  achContainer.innerHTML = '';
  
  ACHIEVEMENTS.forEach(ach => {
    // Evaluate if completed
    let completed = false;
    if (ach.id === "badge-streak" && state.streak >= 7) completed = true;
    if (ach.id === "badge-master" && state.completedChapters.length >= 2) completed = true;
    if (ach.id === "badge-beginner" && state.completedChapters.includes(0)) completed = true;
    if (ach.id === "badge-ai" && state.isPremium) completed = true;

    if (completed && !state.unlockedAchievements.includes(ach.id)) {
      state.unlockedAchievements.push(ach.id);
      saveSession();
    }

    const html = `
      <div class="achievement-mini-badge ${completed ? 'unlocked' : 'locked'}" title="${ach.desc}">
        <span class="material-symbols-rounded">${ach.icon}</span>
        <h5>${ach.name}</h5>
      </div>
    `;
    achContainer.insertAdjacentHTML('beforeend', html);
  });

  // Toggle display of Certificate claim card based on course completion
  const claimCard = document.getElementById('card-claim-certificate-dashboard');
  if (state.completedChapters.length >= activeCurriculum.length) {
    claimCard.style.display = 'block';
  } else {
    claimCard.style.display = 'none';
  }

  // Update dashboard general statistics dynamically
  const statCompleted = document.getElementById('lbl-stat-completed');
  if (statCompleted) {
    statCompleted.textContent = `${state.completedChapters.length}/${activeCurriculum.length}`;
  }
}

function getGamifiedLevelTitle() {
  if (state.xp >= 3000) return "Python Pro";
  if (state.xp >= 1500) return "Advanced";
  if (state.xp >= 600) return "Intermediate";
  return "Beginner";
}

// Attendance Check-in
function triggerDailyCheckin() {
  if (state.dailyCheckinDone) return;
  state.dailyCheckinDone = true;
  addExperiencePoints(10);
  alert("Attendance verified! Streak updated. +10 XP gained.");
}

// Smart AI Roadmap Generator
function generateSmartAIRoadmap() {
  const container = document.getElementById('ai-roadmap-summary');
  container.innerHTML = `
    <div class="ai-evaluating-box">
      <p class="neon-text-blue">AI is analyzing errors log, quiz history, and variables coding speed...</p>
      <div class="progress-bar-container mt-1"><div class="progress-bar" style="width: 100%; animation: pulse 1s infinite;"></div></div>
    </div>
  `;

  setTimeout(() => {
    // Generate custom dynamic advice based on user stats
    let weakTopicsText = "None detected yet! Keep coding.";
    let customAdvise = "You are on the right track beta. Build projects and maintain coding focus.";

    if (state.completedChapters.length === 0) {
      weakTopicsText = "Basic Outputs and Printing Syntax";
      customAdvise = "Open Lesson 1 and call print statements in variables.";
    } else if (state.completedChapters.length < 3) {
      weakTopicsText = "Conditional blocks & bracket logic";
      customAdvise = "Practice loops and standard comparison equations.";
    } else if (state.completedChapters.length < 6) {
      weakTopicsText = "Modular functions returning statements";
      customAdvise = "Read procedural scope structures under Lesson 6.";
    }

    container.innerHTML = `
      <div class="ai-roadmap-advice-box">
        <p><strong>Detected Weak Topic:</strong> <span class="neon-text-orange">${weakTopicsText}</span></p>
        <p class="mt-1"><strong>Motherly AI Advise:</strong> "${customAdvise}"</p>
      </div>
    `;
  }, 1200);
}

// --- 8. Offline Mode Selector ---
function toggleOfflineMode() {
  const isChecked = document.getElementById('chk-offline').checked;
  const card = document.querySelector('.offline-mode-card');
  
  if (isChecked) {
    card.classList.add('active-offline');
    alert("Offline Learning Mode enabled. Core lessons downloaded to memory cache.");
  } else {
    card.classList.remove('active-offline');
    alert("Online Sync Reactivated.");
  }
}

// --- 9. Lessons Workspace & Multi-language AI Motherly Tutor ---
let selectedQuizAnsIndex = null;
let activeChapterObject = null;

function loadChapterLesson(chapterIndex) {
  const activeCurriculum = CURRICULUMS[state.language] || CURRICULUMS.en;
  activeChapterObject = activeCurriculum[chapterIndex];

  if (!activeChapterObject) {
    // fallback to first lesson if bounds exceeded
    activeChapterObject = activeCurriculum[0];
  }

  selectedQuizAnsIndex = null;
  document.getElementById('lbl-lesson-title').textContent = activeChapterObject.title;
  document.getElementById('lesson-text-body').innerHTML = activeChapterObject.textHTML;

  // Render Quiz Card
  const quiz = activeChapterObject.quiz;
  const quizBox = document.getElementById('quiz-container');
  quizBox.innerHTML = `
    <div class="quiz-question-txt">${quiz.question}</div>
    <div class="quiz-options-list">
      ${quiz.options.map((opt, i) => `
        <div class="quiz-option" id="quiz-opt-item-${i}" onclick="selectLessonQuizOption(${i})">
          <div class="quiz-bullet">${String.fromCharCode(65 + i)}</div>
          <span>${opt}</span>
        </div>
      `).join('')}
    </div>
    <button class="quiz-btn-submit" onclick="verifyLessonQuizAnswer()">Verify Answer</button>
  `;

  // Reset feedback
  document.getElementById('quiz-feedback-area').innerHTML = '';

  // Update Playground challenge targets
  const challenge = activeChapterObject.challenge;
  document.getElementById('lbl-challenge-name').textContent = challenge.name;
  document.getElementById('lbl-challenge-desc').textContent = challenge.description;
  
  const editor = document.getElementById('code-editor');
  editor.value = challenge.template;
  
  updateLineNumberGutter();
  renderSandboxGoalList([], {}, []);
  clearTerminal();

  // Highlight Bookmark status
  updateBookmarkButtonDisplay(chapterIndex);

  // Trigger care audio explain
  const msg = MOTHER_VOICE_TRANSLATIONS[state.language]?.welcome || MOTHER_VOICE_TRANSLATIONS.en.welcome;
  updateAITutorChatBox("ai", msg);
}

function selectLessonQuizOption(idx) {
  selectedQuizAnsIndex = idx;
  document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
  const el = document.getElementById(`quiz-opt-item-${idx}`);
  if (el) el.classList.add('selected');
}

function verifyLessonQuizAnswer() {
  if (selectedQuizAnsIndex === null) {
    alert("Please select a quiz option.");
    return;
  }

  const quiz = activeChapterObject.quiz;
  const feedbackArea = document.getElementById('quiz-feedback-area');
  const translations = MOTHER_VOICE_TRANSLATIONS[state.language] || MOTHER_VOICE_TRANSLATIONS.en;

  if (selectedQuizAnsIndex === quiz.correctIndex) {
    feedbackArea.innerHTML = `
      <div class="quiz-feedback-box correct">
        <h4>Correct!</h4>
        <p>${quiz.explanation}</p>
      </div>
    `;
    addExperiencePoints(50);
    updateAITutorChatBox("ai", translations.correct);
    triggerMotherlyVoiceMessage(translations.correct);
  } else {
    feedbackArea.innerHTML = `
      <div class="quiz-feedback-box incorrect">
        <h4>Incorrect</h4>
        <p>Beta, read the concept paragraphs and click another option.</p>
      </div>
    `;
    updateAITutorChatBox("ai", translations.incorrect);
    triggerMotherlyVoiceMessage(translations.incorrect);
  }
}

// AI Chatbot Interface
function updateAITutorChatBox(sender, message) {
  const chatBox = document.getElementById('ai-chat-box');
  const html = `
    <div class="chat-msg ${sender}">
      <p><strong>${sender === 'user' ? 'You' : 'AI Tutor'}:</strong> ${message}</p>
    </div>
  `;
  chatBox.insertAdjacentHTML('beforeend', html);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendChatMessageToAI() {
  const input = document.getElementById('txt-ai-chat-input');
  const query = input.value.trim();
  if (query === '') return;

  updateAITutorChatBox("user", query);
  input.value = '';

  setTimeout(() => {
    // Generate smart response mock depending on keywords
    let response = "Beta, I did not understand that completely. Write code on the right and run it, I will check your colons and indents.";
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes('print')) {
      response = MOTHER_VOICE_TRANSLATIONS[state.language]?.explain_var || "Beta, print statements write values inside parenthesis to the cloud console logs.";
    } else if (lowerQuery.includes('variable') || lowerQuery.includes('వేరియబుల్')) {
      response = "Variables are like standard boxes, beta. E.g. 'x = 10' labels box 'x' to hold value 10.";
    } else if (lowerQuery.includes('loop') || lowerQuery.includes('లూప్')) {
      response = "Loops let us audit items continuously. range(3) will run 0, 1, 2.";
    } else if (lowerQuery.includes('hindi') || lowerQuery.includes('हिन्दी')) {
      response = "Haan beta, main Hindi me bhi samjha sakti hu! Bataiye kya dikkat aa rahi hai?";
    } else if (lowerQuery.includes('telugu') || lowerQuery.includes('తెలుగు')) {
      response = "అవును నాన్న, నేను తెలుగు లో కూడా చెప్పగలను. పైథాన్ లో ఏ డౌట్ ఉందో అడుగు.";
    }

    updateAITutorChatBox("ai", response);
    triggerMotherlyVoiceMessage(response);
  }, 800);
}

function speakCurrentAITutorExplanation() {
  // Speaks the last AI tutor text line
  const chatBox = document.getElementById('ai-chat-box');
  const aiMessages = chatBox.querySelectorAll('.chat-msg.ai p');
  if (aiMessages.length > 0) {
    const lastMsg = aiMessages[aiMessages.length - 1].textContent.replace('AI Tutor:', '').trim();
    triggerMotherlyVoiceMessage(lastMsg);
  } else {
    const greeting = MOTHER_VOICE_TRANSLATIONS[state.language]?.welcome || MOTHER_VOICE_TRANSLATIONS.en.welcome;
    triggerMotherlyVoiceMessage(greeting);
  }
}

// --- 10. The Monospace Sandbox Compiler & Gutter Line Sync ---
function updateLineNumberGutter() {
  const editor = document.getElementById('code-editor');
  const gutter = document.getElementById('editor-gutter');
  if (!editor || !gutter) return;

  const lines = editor.value.split('\n');
  let html = '';
  for (let i = 1; i <= Math.max(lines.length, 1); i++) {
    html += `<span>${i}</span>`;
  }
  gutter.innerHTML = html;
}

function resetEditor() {
  if (activeChapterObject && confirm("Reset the workspace back to assignment template?")) {
    document.getElementById('code-editor').value = activeChapterObject.challenge.template;
    updateLineNumberGutter();
    clearTerminal();
    renderSandboxGoalList([], {}, []);
  }
}

function clearTerminal() {
  document.getElementById('terminal-output').innerHTML = `
    <div class="terminal-welcome">Python Master AI terminal active...<br>Click 'Run Code' to execute.</div>
  `;
}

function runCode() {
  const code = document.getElementById('code-editor').value;
  const terminal = document.getElementById('terminal-output');
  terminal.innerHTML = '';

  // Execute simulated code
  const result = parseAndRunPython(code);

  if (result.errors.length > 0) {
    result.errors.forEach(err => {
      terminal.insertAdjacentHTML('beforeend', `<div class="term-line error">${err}</div>`);
    });
    
    // AI Motherly warning speech trigger
    const warning = MOTHER_VOICE_TRANSLATIONS[state.language]?.syntax_error || "Beta, there is an error in code syntax. Check tracebacks.";
    updateAITutorChatBox("ai", `Error warning: ${result.errors[0]}. Let's correct it together.`);
    triggerMotherlyVoiceMessage(warning);
  } else {
    if (result.output.length === 0) {
      terminal.insertAdjacentHTML('beforeend', `<div class="term-line" style="color:#64748b;">Code parsed (No outputs logged).</div>`);
    } else {
      result.output.forEach(line => {
        terminal.insertAdjacentHTML('beforeend', `<div class="term-line">${line}</div>`);
      });
    }
  }

  // Check goal lists
  renderSandboxGoalList(result.output, result.variables, result.errors);
}

function renderSandboxGoalList(output, variables, errors) {
  if (!activeChapterObject) return;

  const list = document.getElementById('lst-challenge-goals');
  list.innerHTML = '';

  const code = document.getElementById('code-editor').value;

  activeChapterObject.challenge.goals.forEach(goal => {
    let met = false;
    try {
      met = goal.validator(code, variables, output, errors);
    } catch (e) {
      met = false;
    }

    const html = `
      <li class="${met ? 'goal-met' : 'goal-unmet'}">
        <span class="material-symbols-rounded bullet-status">
          ${met ? 'check_box' : 'check_box_outline_blank'}
        </span>
        <span>${goal.text}</span>
      </li>
    `;
    list.insertAdjacentHTML('beforeend', html);
  });
}

function submitChallenge() {
  if (!activeChapterObject) return;

  const code = document.getElementById('code-editor').value;
  const result = parseAndRunPython(code);

  let allMet = true;
  activeChapterObject.challenge.goals.forEach(goal => {
    try {
      if (!goal.validator(code, result.variables, result.output, result.errors)) {
        allMet = false;
      }
    } catch (e) {
      allMet = false;
    }
  });

  if (allMet) {
    const isCompleted = state.completedChapters.includes(state.currentChapterIndex);
    
    if (!isCompleted) {
      state.completedChapters.push(state.currentChapterIndex);
      state.completedChallengesCount++;
      addExperiencePoints(150);
    }

    saveSession();
    
    alert("🎉 QUEST SUCCESS! All coding checkpoints met! XP added to profile.");
    switchView('dashboard');
  } else {
    alert("⚠️ Some checkpoints remain incomplete. Verify variable assignments and outputs.");
  }
}

// AI Project / Code quality reviewer simulator
function triggerAICodeReview() {
  const code = document.getElementById('code-editor').value;
  const box = document.getElementById('ai-reviewer-feedback');
  box.style.display = 'block';
  
  box.innerHTML = `<p class="neon-text-cyan">Evaluating file metrics...</p>`;

  setTimeout(() => {
    let rating = "B+";
    let score = "82%";
    let critique = "Good formatting. Consider adding variables and cleaning statements.";

    if (code.includes('def') || code.includes('for')) {
      rating = "A++";
      score = "98%";
      critique = "Excellent structure! Modular functions are extremely useful for corporate positions.";
    } else if (code.trim() === '') {
      rating = "F";
      score = "0%";
      critique = "Empty script. Add print lines to begin review.";
    }

    box.innerHTML = `
      <p><strong>AI Score Rating:</strong> <span class="review-badge-score">${rating} (${score})</span></p>
      <p class="mt-1"><strong>Critique:</strong> ${critique}</p>
    `;
  }, 1000);
}

// --- 11. Bookmarks & Personal Notes ---
function updateBookmarkButtonDisplay(idx) {
  const btn = document.getElementById('btn-bookmark-lesson');
  if (state.bookmarks.includes(idx)) {
    btn.innerHTML = `<span class="material-symbols-rounded">bookmark_added</span> Saved`;
    btn.style.borderColor = "var(--neon-gold)";
  } else {
    btn.innerHTML = `<span class="material-symbols-rounded">bookmark</span> Bookmark`;
    btn.style.borderColor = "var(--border-color)";
  }
}

function bookmarkCurrentLesson() {
  const idx = state.currentChapterIndex;
  const pos = state.bookmarks.indexOf(idx);

  if (pos === -1) {
    state.bookmarks.push(idx);
    alert("Lesson bookmarked successfully.");
  } else {
    state.bookmarks.splice(pos, 1);
    alert("Bookmark removed.");
  }

  saveSession();
  updateBookmarkButtonDisplay(idx);
}

function savePersonalNotes() {
  const notesText = document.getElementById('txt-personal-notes').value;
  state.personalNotes = notesText;
  saveSession();
  alert("Study notes preserved in local storage.");
}

function renderBookmarksAndNotes() {
  // Render text notes
  document.getElementById('txt-personal-notes').value = state.personalNotes || '';

  // Render list of bookmarked lessons
  const container = document.getElementById('bookmarks-container');
  container.innerHTML = '';

  if (state.bookmarks.length === 0) {
    container.innerHTML = `<p class="text-secondary font-sm">No bookmarked lessons yet.</p>`;
    return;
  }

  const activeCurriculum = CURRICULUMS[state.language] || CURRICULUMS.en;

  state.bookmarks.forEach(idx => {
    const chap = activeCurriculum[idx];
    if (!chap) return;

    const html = `
      <div class="bookmark-item">
        <span>${chap.title}</span>
        <button class="btn-cyan btn-small" onclick="state.currentChapterIndex=${idx}; switchView('lessons');">Open</button>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', html);
  });
}

// --- 12. Real Projects builder sandboxes ---
let currentActiveProjectKey = null;

const PROJECT_TEMPLATES = {
  calculator: {
    title: "Project: Interactive Calculator",
    code: "# Editable Python Calculator code\ndef add(x, y): return x + y\nprint('Calculator loaded. Result: ' + str(add(10, 5)))",
    render: () => `
      <div style="text-align:center;">
        <div class="calc-display" id="c-disp">0</div>
        <div class="calc-visual-box mt-1">
          <button class="btn-calc" onclick="document.getElementById('c-disp').textContent+='7'">7</button>
          <button class="btn-calc" onclick="document.getElementById('c-disp').textContent+='8'">8</button>
          <button class="btn-calc" onclick="document.getElementById('c-disp').textContent+='9'">9</button>
          <button class="btn-calc" style="color:var(--neon-orange)" onclick="document.getElementById('c-disp').textContent=''">C</button>
          <button class="btn-calc" onclick="document.getElementById('c-disp').textContent+='4'">4</button>
          <button class="btn-calc" onclick="document.getElementById('c-disp').textContent+='5'">5</button>
          <button class="btn-calc" onclick="document.getElementById('c-disp').textContent+='6'">6</button>
          <button class="btn-calc" style="color:var(--neon-cyan)" onclick="document.getElementById('c-disp').textContent+='+'">+</button>
          <button class="btn-calc" onclick="document.getElementById('c-disp').textContent+='1'">1</button>
          <button class="btn-calc" onclick="document.getElementById('c-disp').textContent+='2'">2</button>
          <button class="btn-calc" onclick="document.getElementById('c-disp').textContent+='3'">3</button>
          <button class="btn-calc" style="background-color:var(--neon-emerald);color:#000;" onclick="evalCalcOutput()">=</button>
        </div>
      </div>
    `
  },
  weather: {
    title: "Project: Weather Forecast API Simulator",
    code: "# Dictionary API weather dataset\nweather_db = {'delhi': 'Sunny, 38C', 'london': 'Cloudy, 15C'}\ndef get_weather(city):\n    return weather_db.get(city, 'City not found')\n\nprint('Forecaster Engine Online.')",
    render: () => `
      <div style="text-align:center;padding:12px;">
        <p class="font-sm mb-1">Enter city (delhi / london):</p>
        <div class="upi-input-row" style="max-width:260px;margin:auto;">
          <input type="text" id="w-city" value="delhi">
          <button class="btn-cyan" onclick="runWeatherLookupVisual()">Search</button>
        </div>
        <div id="w-result" class="review-output-box mt-1" style="max-width:260px;margin:auto;">Results display here...</div>
      </div>
    `
  },
  quiz: {
    title: "Project: Interactive Quiz Deck",
    code: "# Quiz collections\nquestions = ['2+2 = ?', 'Python creator?']\n# Run loop to verify scores",
    render: () => `
      <div style="text-align:center;">
        <p class="font-sm">Interactive Visual Quiz Deck</p>
        <div class="review-output-box mt-1" style="max-width:280px;margin:auto;">
          <h4 id="q-head">Question: What is 2 + 2?</h4>
          <div class="quiz-options-list">
            <button class="btn-secondary font-sm" onclick="alert('Wrong beta!')">A) 3</button>
            <button class="btn-secondary font-sm" onclick="alert('Correct! +10 XP')">B) 4</button>
          </div>
        </div>
      </div>
    `
  },
  chatbot: {
    title: "Project: Conversational Assistant",
    code: "# Chatbot keyword responses\ndef response(msg):\n    return 'Assistant: Standard query logged.'\n",
    render: () => `
      <div style="display:flex;flex-direction:column;height:100%;">
        <div class="terminal-body" style="height:120px;" id="bot-frame-box">
          Assistant: Hi! I am a custom chatbot. How can I help you?
        </div>
        <div class="upi-input-row mt-1">
          <input type="text" id="bot-input" value="hello">
          <button class="btn-cyan" onclick="triggerVisualBotReply()">Send</button>
        </div>
      </div>
    `
  },
  portfolio: {
    title: "Project: Portfolio Web Page",
    code: "# Developer Portfolio website parameters\nname = 'Radharapu Arun Kumar'\nskills = ['Python', 'AI Tuning']",
    render: () => `
      <div class="cert-border-outer" style="padding:10px;text-align:center;">
        <h3 style="color:var(--neon-cyan)">${state.userName}</h3>
        <p class="font-sm text-secondary">Verified Python Master AI Developer</p>
        <div class="progress-bar-container mt-1"><div class="progress-bar" style="width:100%;"></div></div>
        <p class="font-sm text-secondary mt-1">Skills: Python Variables, Code Logic, System Audits</p>
      </div>
    `
  }
};

function openProjectSandbox(projKey) {
  currentActiveProjectKey = projKey;
  const proj = PROJECT_TEMPLATES[projKey];
  if (!proj) return;

  document.getElementById('lbl-sandbox-title').textContent = proj.title;
  document.getElementById('txt-sandbox-code').value = proj.code;
  
  // Renders visual preview element
  const frame = document.getElementById('sandbox-visual-frame');
  frame.innerHTML = proj.render();

  document.getElementById('sandbox-modal').style.display = 'flex';
}

function closeProjectSandbox() {
  document.getElementById('sandbox-modal').style.display = 'none';
}

function runSandboxProject() {
  alert("Compiling source scripts... Interactive elements synchronized inside preview.");
  // Redraw preview elements
  if (currentActiveProjectKey && PROJECT_TEMPLATES[currentActiveProjectKey]) {
    const frame = document.getElementById('sandbox-visual-frame');
    frame.innerHTML = PROJECT_TEMPLATES[currentActiveProjectKey].render();
  }
}

// Sandbox mini calculators functions
function evalCalcOutput() {
  const disp = document.getElementById('c-disp');
  try {
    disp.textContent = eval(disp.textContent);
  } catch (e) {
    disp.textContent = "Error";
  }
}

function runWeatherLookupVisual() {
  const city = document.getElementById('w-city').value.toLowerCase().trim();
  const res = document.getElementById('w-result');
  if (city === 'delhi') res.textContent = "Sunny, 38C";
  else if (city === 'london') res.textContent = "Cloudy, 15C";
  else res.textContent = "City not found (Simulated DB)";
}

function triggerVisualBotReply() {
  const inp = document.getElementById('bot-input');
  const txt = inp.value;
  if (txt === '') return;

  const box = document.getElementById('bot-frame-box');
  box.insertAdjacentHTML('beforeend', `<br><span style="color:#a855f7;">User: ${txt}</span>`);
  
  setTimeout(() => {
    box.insertAdjacentHTML('beforeend', `<br>Assistant: Processing '${txt}'... Standard answer logged.`);
    box.scrollTop = box.scrollHeight;
  }, 400);

  inp.value = '';
}

// --- 13. Interview Preparation Module ---
function switchInterviewSubTab(tabKey) {
  document.querySelectorAll('.interview-subtab').forEach(tab => tab.classList.remove('active-subtab'));
  document.querySelectorAll('.btn-tab-link').forEach(btn => btn.classList.remove('active'));

  const targetTab = document.getElementById(`subtab-${tabKey}`);
  const activeBtn = Array.from(document.querySelectorAll('.btn-tab-link')).find(btn => btn.textContent.toLowerCase().includes(tabKey));

  if (targetTab) targetTab.classList.add('active-subtab');
  if (activeBtn) activeBtn.classList.add('active');
}

// Simulated mock interview recruiter response loop
function submitMockInterviewAnswer() {
  const ans = document.getElementById('txt-mock-answer').value.trim();
  if (ans === '') return;

  const fbBox = document.getElementById('lbl-mock-feedback');
  fbBox.style.display = 'block';
  fbBox.innerHTML = `Evaluating your explanation...`;

  setTimeout(() => {
    let score = "B";
    let review = "Your answer holds valid points. Explain list indices and mutability to earn an ATS A grade.";

    if (ans.toLowerCase().includes('mutable') || ans.toLowerCase().includes('index')) {
      score = "A+";
      review = "Excellent child! You defined mutability perfectly. Very useful for technical job rounds.";
    }

    fbBox.innerHTML = `
      <p><strong>Recruiter Score:</strong> <span class="neon-text-orange">${score}</span></p>
      <p class="mt-1"><strong>Feedback:</strong> ${review}</p>
    `;
  }, 1000);
}

const INTERVIEW_CHALLENGES = [
  {
    name: "String Reversal",
    desc: "Create string reversal logic. Set text = 'Python', reverse it, and print.",
    code: "text = 'Python'\n# Reverse text and print it\n"
  },
  {
    name: "FizzBuzz",
    desc: "Print Fizz for multiples of 3, Buzz for 5, and FizzBuzz for both (1 through 15).",
    code: "# Write loops parsing FizzBuzz values\n"
  },
  {
    name: "Max Finder",
    desc: "Find the largest value inside this array: numbers = [5, 12, 9, 21, 3] and print it.",
    code: "numbers = [5, 12, 9, 21, 3]\n# Find max without using max()\n"
  }
];

function loadInterviewChallengeToPlayground(idx) {
  const item = INTERVIEW_CHALLENGES[idx];
  if (!item) return;

  switchView('lessons');
  
  document.getElementById('lbl-challenge-name').textContent = `Interview Round: ${item.name}`;
  document.getElementById('lbl-challenge-desc').textContent = item.desc;
  
  document.getElementById('code-editor').value = item.code;
  updateLineNumberGutter();
}

// --- 14. Resume PDF Exporter Generator ---
function compileResumePreview() {
  const name = document.getElementById('res-name').value;
  const email = document.getElementById('res-email').value;
  const phone = document.getElementById('res-phone').value;
  const skills = document.getElementById('res-skills').value;
  const projects = document.getElementById('res-projects').value;
  const certs = document.getElementById('res-certifications').value;

  const preview = document.getElementById('resume-sheet');
  preview.innerHTML = `
    <div class="res-header-preview">
      <h2>${name}</h2>
      <div class="res-contact-preview">${email} | Phone: ${phone}</div>
    </div>
    <div class="res-section-preview">
      <div class="res-sec-title-preview">Technical Skills</div>
      <p class="res-text-preview">${skills}</p>
    </div>
    <div class="res-section-preview">
      <div class="res-sec-title-preview">Python Projects</div>
      <p class="res-text-preview">${projects}</p>
    </div>
    <div class="res-section-preview">
      <div class="res-sec-title-preview">Certifications</div>
      <p class="res-text-preview">${certs}</p>
    </div>
  `;
}

// --- 15. Jobs & Internships List Rendering ---
function renderJobsList() {
  const container = document.getElementById('jobs-list-container');
  container.innerHTML = '';

  JOBS_DATABASE.forEach(job => {
    const html = `
      <div class="job-feed-item">
        <div class="job-meta">
          <h3>${job.title}</h3>
          <p class="neon-text-blue" style="font-size:12px;">${job.company}</p>
          <div class="job-meta-row">
            <span>${job.location}</span>
            <span>${job.type}</span>
            <span>${job.salary}</span>
          </div>
        </div>
        <button class="btn-cyan btn-small" onclick="alert('Application submitted successfully under account: ' + state.userEmail + '\\nAll rights reserved to Radharapu Arun Kumar only.')">
          Apply Now
        </button>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', html);
  });
}

// --- 16. Community doubts sharing forum ---
function renderCommunityFeed() {
  const container = document.getElementById('community-feed-container');
  container.innerHTML = '';

  communityFeed.forEach(post => {
    const html = `
      <div class="feed-item-card">
        <div class="feed-header">
          <strong>${post.author}</strong>
          <span>${post.date}</span>
        </div>
        <div class="feed-body">${post.text}</div>
        <div class="feed-actions">
          <button class="btn-feed-action ${post.liked ? 'liked' : ''}" onclick="toggleLikePost(${post.id})">
            <span class="material-symbols-rounded">thumb_up</span> ${post.likes} Likes
          </button>
          <button class="btn-feed-action" onclick="alert('Doubt discussions are gated to premium members.')">
            <span class="material-symbols-rounded">comment</span> Comment
          </button>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', html);
  });
}

function publishCommunityPost() {
  const txt = document.getElementById('txt-community-post').value.trim();
  if (txt === '') return;

  const newPost = {
    id: Date.now(),
    author: state.userName,
    text: txt,
    likes: 0,
    liked: false,
    date: new Date().toLocaleDateString()
  };

  communityFeed.unshift(newPost);
  document.getElementById('txt-community-post').value = '';
  renderCommunityFeed();
  addExperiencePoints(20);
}

function toggleLikePost(id) {
  const post = communityFeed.find(p => p.id === id);
  if (post) {
    if (post.liked) {
      post.likes--;
      post.liked = false;
    } else {
      post.likes++;
      post.liked = true;
    }
    renderCommunityFeed();
  }
}

// --- 17. Leaderboard Render ---
function renderLeaderboard() {
  // Update current user XP inside leaderboard database
  const userRow = LEADERBOARD_DB.find(u => u.isCurrent);
  if (userRow) {
    userRow.xp = state.xp;
    userRow.streak = state.streak;
  }

  // Sort by XP
  LEADERBOARD_DB.sort((a, b) => b.xp - a.xp);

  const container = document.getElementById('leaderboard-container');
  container.innerHTML = '';

  LEADERBOARD_DB.forEach((user, idx) => {
    const html = `
      <div class="leaderboard-row-item" style="${user.isCurrent ? 'background-color:rgba(6,182,212,0.05); border-left:3px solid var(--neon-cyan);' : ''}">
        <span class="l-rank top-${idx+1}">${idx+1}</span>
        <span class="l-name">${user.name} ${user.isCurrent ? '(You)' : ''}</span>
        <span>🔥 ${user.streak} Days</span>
        <strong>${user.xp} XP</strong>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', html);
  });
}

// --- 18. Real Razorpay ₹2 Payment Integration ---
// ⚙️ ADMIN: Replace 'rzp_test_...' with your Live Key from razorpay.com/dashboard when going live
const RAZORPAY_KEY_ID = 'rzp_test_51OoXXXXXXXXXXXXXXXXXXX'; // Replace this with your actual Razorpay Key

function initiateRazorpayPayment() {
  if (state.isPremium) {
    alert("✅ You are already a Premium member! Enjoy all AI features.");
    return;
  }

  const btn = document.getElementById('btn-razorpay-pay');
  btn.disabled = true;
  btn.innerHTML = '<span class="material-symbols-rounded">hourglass_empty</span> Opening Razorpay...';

  const options = {
    key: RAZORPAY_KEY_ID,
    amount: 200,           // ₹2 in paise (100 paise = ₹1)
    currency: "INR",
    name: "Python Master AI",
    description: "Premium AI Tutor — Monthly Subscription",
    image: "https://i.imgur.com/n5tjHFD.png",
    prefill: {
      name: state.userName,
      email: state.userEmail,
      contact: "9052672335"
    },
    notes: {
      userEmail: state.userEmail,
      plan: "Premium Monthly ₹2"
    },
    theme: {
      color: "#7C3AED"
    },
    modal: {
      ondismiss: function() {
        btn.disabled = false;
        btn.innerHTML = '<span class="material-symbols-rounded">payment</span> Pay ₹2 — Activate Premium Now';
      }
    },
    handler: function(response) {
      // Payment successful — Razorpay sends payment_id, order_id, signature
      onRazorpayPaymentSuccess(response);
    }
  };

  try {
    const rzp = new Razorpay(options);
    rzp.on('payment.failed', function(response) {
      btn.disabled = false;
      btn.innerHTML = '<span class="material-symbols-rounded">payment</span> Pay ₹2 — Activate Premium Now';
      alert("❌ Payment failed: " + response.error.description + "\nPlease try again.");
    });
    rzp.open();
  } catch (e) {
    // Razorpay SDK not loaded or key invalid — show helpful message
    btn.disabled = false;
    btn.innerHTML = '<span class="material-symbols-rounded">payment</span> Pay ₹2 — Activate Premium Now';
    alert("⚠️ Razorpay is in TEST MODE.\n\nTo accept real payments:\n1. Go to razorpay.com and create an account\n2. Get your Key ID from Dashboard → API Keys\n3. Replace RAZORPAY_KEY_ID in app.js with your real key\n\nFor now, your premium has been activated for testing purposes.");
    // Test mode fallback — activate premium for demo
    onRazorpayPaymentSuccess({ payment_id: 'test_' + Date.now(), mode: 'test' });
  }
}

function onRazorpayPaymentSuccess(response) {
  // Mark premium in state
  state.isPremium = true;
  state.premiumSince = new Date().toLocaleDateString();
  state.razorpayPaymentId = response.payment_id;
  saveSession();
  renderDashboard();

  // Update UI
  document.getElementById('upi-payment-panel').style.display = 'none';
  document.getElementById('lbl-premium-success-msg').style.display = 'flex';

  // Update premium badge in header
  const premStatus = document.getElementById('lbl-premium-status');
  if (premStatus) {
    premStatus.textContent = 'PREMIUM ✓';
    premStatus.className = 'badge-premium pro-active';
  }

  alert(`🎉 Payment Successful!\n\nWelcome to Python Master AI Premium!\nPayment ID: ${response.payment_id}\nAccount: ${state.userEmail}\n\nAll AI Tutor features are now unlocked!`);
}

// --- 19. Admin console control dashboard panel ---
const ADMIN_EMAIL = 'radharapuarunkumar02@gmail.com';

function renderAdminPanel() {
  const isAdmin = state.userEmail.toLowerCase().trim() === ADMIN_EMAIL.toLowerCase();

  const deniedDiv  = document.getElementById('admin-access-denied');
  const fullPanel  = document.getElementById('admin-full-panel');

  if (!isAdmin) {
    // Non-admin: show access denied, hide full panel
    deniedDiv.style.display  = 'block';
    fullPanel.style.display  = 'none';
    return;
  }

  // Admin allowed
  deniedDiv.style.display  = 'none';
  fullPanel.style.display  = 'block';

  // Populate form with current user state
  document.getElementById('adm-input-name').value    = state.userName;
  document.getElementById('adm-input-email').value   = state.userEmail;
  document.getElementById('adm-input-xp').value      = state.xp;
  document.getElementById('adm-input-streak').value  = state.streak;
  document.getElementById('adm-input-level').value   = state.level;
  document.getElementById('adm-select-pro').value    = state.isPremium ? "true" : "false";

  // Render chapter checkboxes
  const container = document.getElementById('admin-chaps-grid');
  container.innerHTML = '';
  const activeCurriculum = CURRICULUMS[state.language] || CURRICULUMS.en;
  activeCurriculum.forEach((chap, idx) => {
    const completed = state.completedChapters.includes(idx);
    container.insertAdjacentHTML('beforeend', `
      <label style="display:flex;align-items:center;gap:10px;font-size:12px;cursor:pointer;color:var(--text-gray);">
        <input type="checkbox" id="adm-chap-chk-${idx}" ${completed ? 'checked' : ''} onchange="adminToggleIndividualChapter(${idx})">
        <span>${chap.title}</span>
      </label>
    `);
  });

  // Load stats and users
  adminLoadStats();
  adminLoadAllUsers();
}

function adminLoadStats() {
  // Scan all localStorage keys for pmai_progress users
  let totalUsers = 0, premiumUsers = 0, totalRevenue = 0, totalChaps = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('pmai_progress_')) {
      totalUsers++;
      try {
        const userData = JSON.parse(localStorage.getItem(key));
        if (userData.isPremium) { premiumUsers++; totalRevenue += 2; }
        if (userData.completedChapters) totalChaps += userData.completedChapters.length;
      } catch(e) {}
    }
  }
  document.getElementById('adm-stat-users').textContent    = totalUsers;
  document.getElementById('adm-stat-premium').textContent  = premiumUsers;
  document.getElementById('adm-stat-revenue').textContent  = `₹${totalRevenue}`;
  document.getElementById('adm-stat-chaps').textContent    = totalChaps;
}

function adminLoadAllUsers() {
  const container = document.getElementById('admin-users-list');
  if (!container) return;
  container.innerHTML = '';
  let count = 0;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('pmai_progress_')) {
      count++;
      try {
        const u = JSON.parse(localStorage.getItem(key));
        const joinDate = u.lastLoginDate || 'Unknown';
        const chapsDone = u.completedChapters ? u.completedChapters.length : 0;
        container.insertAdjacentHTML('beforeend', `
          <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:var(--bg-darkest);border-radius:10px;border:1px solid var(--border-color);flex-wrap:wrap;gap:10px;">
            <div style="display:flex;align-items:center;gap:12px;">
              <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--neon-purple),var(--neon-cyan));display:flex;align-items:center;justify-content:center;font-weight:800;font-size:16px;">${(u.userName||'?')[0].toUpperCase()}</div>
              <div>
                <div style="font-weight:600;font-size:14px;">${u.userName || 'Unknown'}</div>
                <div style="font-size:11px;color:var(--text-gray);">${u.userEmail || key} • Last: ${joinDate}</div>
              </div>
            </div>
            <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
              <span style="padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700;background:${u.isPremium ? 'rgba(255,150,0,0.15)' : 'rgba(120,120,120,0.15)'};color:${u.isPremium ? 'var(--neon-orange)' : 'var(--text-gray)'};">${u.isPremium ? '⭐ PREMIUM' : 'FREE'}</span>
              <span style="padding:3px 10px;border-radius:20px;font-size:11px;background:rgba(0,200,255,0.1);color:var(--neon-cyan);">${u.xp || 0} XP</span>
              <span style="padding:3px 10px;border-radius:20px;font-size:11px;background:rgba(0,255,128,0.1);color:var(--neon-green);">${chapsDone} Chapters</span>
              <button onclick="adminLoadUserIntoEditor('${key}')" style="padding:5px 12px;font-size:11px;border-radius:6px;border:1px solid var(--neon-cyan);background:transparent;color:var(--neon-cyan);cursor:pointer;">✏️ Edit</button>
            </div>
          </div>
        `);
      } catch(e) {
        container.insertAdjacentHTML('beforeend', `<div style="color:var(--text-gray);font-size:12px;">⚠️ Corrupted entry: ${key}</div>`);
      }
    }
  }
  if (count === 0) {
    container.innerHTML = '<p class="text-secondary" style="text-align:center;padding:20px;">No users registered yet on this device.</p>';
  }
}

function adminLoadUserIntoEditor(key) {
  try {
    const u = JSON.parse(localStorage.getItem(key));
    document.getElementById('adm-input-name').value   = u.userName  || '';
    document.getElementById('adm-input-email').value  = u.userEmail || '';
    document.getElementById('adm-input-xp').value     = u.xp       || 0;
    document.getElementById('adm-input-streak').value = u.streak   || 1;
    document.getElementById('adm-input-level').value  = u.level    || 1;
    document.getElementById('adm-select-pro').value   = u.isPremium ? "true" : "false";
    alert(`✅ Loaded user: ${u.userName}\nYou can now override their data and click Apply.`);
  } catch(e) {
    alert("Could not load user data.");
  }
}

function adminApplyConfigChanges() {
  const name   = document.getElementById('adm-input-name').value.trim();
  const email  = document.getElementById('adm-input-email').value.trim();
  const xp     = Number(document.getElementById('adm-input-xp').value);
  const streak = Number(document.getElementById('adm-input-streak').value);
  const level  = Number(document.getElementById('adm-input-level').value) || 1;
  const pro    = document.getElementById('adm-select-pro').value === "true";

  if (name === '' || email === '') {
    alert("Profile variables cannot be empty.");
    return;
  }

  // If editing a different user's record (not the current signed-in user)
  if (email !== state.userEmail) {
    // Load that user's data from localStorage and update it
    const targetKey = `pmai_progress_${email.replace(/[^a-zA-Z0-9]/g, '_')}`;
    const existing = localStorage.getItem(targetKey);
    if (existing) {
      try {
        const targetData = JSON.parse(existing);
        targetData.userName  = name;
        targetData.xp        = xp;
        targetData.streak    = streak;
        targetData.level     = level;
        targetData.isPremium = pro;
        localStorage.setItem(targetKey, JSON.stringify(targetData));
        alert(`✅ Updated user record for: ${email}`);
        adminLoadAllUsers();
        adminLoadStats();
        return;
      } catch(e) {}
    }
    // New user entry
    const newUserData = { userName: name, userEmail: email, xp, streak, level, isPremium: pro, completedChapters: [], completedChallengesCount: 0, lastLoginDate: new Date().toLocaleDateString() };
    localStorage.setItem(targetKey, JSON.stringify(newUserData));
    alert(`✅ Created new user record for: ${email}`);
    adminLoadAllUsers();
    adminLoadStats();
    return;
  }

  // Editing the current user
  if (email !== state.userEmail) {
    const oldKey = `pmai_progress_${state.userEmail.replace(/[^a-zA-Z0-9]/g, '_')}`;
    localStorage.removeItem(oldKey);
  }
  state.userName  = name;
  state.userEmail = email;
  state.xp        = xp;
  state.streak    = streak;
  state.level     = level;
  state.isPremium = pro;
  saveSession();
  renderDashboard();
  renderAdminPanel();
  alert("✅ Current user variables overridden successfully.");
}

function adminToggleIndividualChapter(idx) {
  const chk = document.getElementById(`adm-chap-chk-${idx}`);
  const completedPos = state.completedChapters.indexOf(idx);
  if (chk.checked) {
    if (completedPos === -1) { state.completedChapters.push(idx); state.completedChallengesCount++; }
  } else {
    if (completedPos !== -1) { state.completedChapters.splice(completedPos, 1); state.completedChallengesCount--; }
  }
  saveSession();
  renderDashboard();
  renderAdminPanel();
}

function adminGrantXP(amount) {
  addExperiencePoints(amount);
  renderAdminPanel();
  alert(`✅ Granted +${amount} XP to ${state.userName}.`);
}

function adminSimulateStreak(days) {
  state.streak = days;
  saveSession();
  renderDashboard();
  renderAdminPanel();
  alert(`✅ Streak set to ${days} days.`);
}

function adminTogglePremium() {
  state.isPremium = !state.isPremium;
  saveSession();
  renderDashboard();
  renderAdminPanel();
  alert(`✅ Premium state toggled. Now: ${state.isPremium ? 'PREMIUM' : 'FREE'}`);
}

function adminCompleteAllChapters() {
  state.completedChapters = [0,1,2,3,4,5,6,7,8];
  state.completedChallengesCount = 9;
  state.xp += 2000;
  saveSession();
  renderDashboard();
  renderAdminPanel();
  alert("✅ All chapters unlocked. Certificate is ready!");
}

function adminResetAllData() {
  const targetEmail = document.getElementById('adm-input-email').value.trim() || state.userEmail;
  if (confirm(`⚠️ Reset ALL data for: ${targetEmail}?\nThis cannot be undone.`)) {
    const dbKey = `pmai_progress_${targetEmail.replace(/[^a-zA-Z0-9]/g, '_')}`;
    localStorage.removeItem(dbKey);
    if (targetEmail === state.userEmail) {
      location.reload();
    } else {
      alert(`✅ Data cleared for ${targetEmail}`);
      adminLoadAllUsers();
      adminLoadStats();
    }
  }
}

function adminGrantPremiumToUser() {
  const targetEmail = document.getElementById('adm-manual-premium-email').value.trim();
  if (!targetEmail) { alert("Enter a user email first."); return; }
  const targetKey = `pmai_progress_${targetEmail.replace(/[^a-zA-Z0-9]/g, '_')}`;
  const existing = localStorage.getItem(targetKey);
  if (existing) {
    try {
      const data = JSON.parse(existing);
      data.isPremium = true;
      data.premiumGrantedByAdmin = true;
      data.premiumSince = new Date().toLocaleDateString();
      localStorage.setItem(targetKey, JSON.stringify(data));
      alert(`✅ Premium granted to: ${targetEmail}`);
      document.getElementById('adm-manual-premium-email').value = '';
      adminLoadAllUsers();
      adminLoadStats();
      return;
    } catch(e) {}
  }
  alert(`⚠️ User not found: ${targetEmail}\nThey must log in at least once before you can grant premium.`);
}

function adminSaveAppSettings() {
  const title  = document.getElementById('adm-app-title').value.trim();
  const phone  = document.getElementById('adm-support-phone').value.trim();
  const email  = document.getElementById('adm-support-email').value.trim();
  const price  = document.getElementById('adm-price').value.trim();
  // Save to localStorage for persistence
  localStorage.setItem('pmai_app_settings', JSON.stringify({ title, phone, email, price }));
  alert(`✅ App settings saved!\nTitle: ${title}\nPhone: ${phone}\nEmail: ${email}\nPrice: ₹${price}`);
}


// --- 20. Verified Certificate Canvas print ---
function renderCertificateVault() {
  // Sync name dynamically
  document.getElementById('lbl-cert-name').textContent = state.userName.toUpperCase();

  // Create unique Certificate ID based on name hash
  const nameHash = state.userName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 9000);
  document.getElementById('lbl-cert-id').textContent = `PMAI-9052-${nameHash}`;
}

function printCertificateElement() {
  window.print();
}

// --- 21. Dynamic level points system ---
function addExperiencePoints(amount) {
  state.xp += amount;
  
  // Calculate Level jumps
  if (state.xp >= state.level * 1000) {
    state.level++;
    alert(`🌟 DYNAMIC LEVEL UP! You reached Level ${state.level}! Current rank: ${getGamifiedLevelTitle()}`);
  }

  saveSession();
  renderDashboard();
}

// --- 22. Interactive daily challenge timer ---
let countdownSecs = 86399; // 24 hours
setInterval(() => {
  if (countdownSecs > 0) {
    countdownSecs--;
    const h = Math.floor(countdownSecs / 3600).toString().padStart(2, '0');
    const m = Math.floor((countdownSecs % 3600) / 60).toString().padStart(2, '0');
    const s = Math.floor(countdownSecs % 60).toString().padStart(2, '0');
    const lbl = document.getElementById('lbl-challenge-timer');
    if (lbl) lbl.textContent = `${h}:${m}:${s}`;
  }
}, 1000);

function loadDailyChallengeToPlayground() {
  switchView('lessons');
  document.getElementById('lbl-challenge-name').textContent = "Daily Coding Challenge";
  document.getElementById('lbl-challenge-desc').textContent = document.getElementById('lbl-daily-challenge-prompt').textContent;
  document.getElementById('code-editor').value = "salary = 50000\n# Write bonus calculations below\n\n";
  updateLineNumberGutter();
}

// --- 23. Custom Simulated Python Interpreter Logic Engine ---
function evaluateExpression(expr, variables) {
  expr = expr.trim();
  
  if ((expr.startsWith('"') && expr.endsWith('"')) || (expr.startsWith("'") && expr.endsWith("'"))) {
    return expr.slice(1, -1);
  }
  
  // Dictionary literal support {"hi": "Hello", "bye": "Goodbye"}
  if (expr.startsWith('{') && expr.endsWith('}')) {
    let content = expr.slice(1, -1).trim();
    if (content === '') return {};
    let obj = {};
    let pairs = content.split(',');
    for (let pair of pairs) {
      let [k, v] = pair.split(':').map(p => p.trim());
      let key = k.replace(/['"]/g, '');
      let val = evaluateExpression(v, variables);
      obj[key] = val;
    }
    return obj;
  }

  // Dictionary index search support intents['hi']
  let dictAccessMatch = expr.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\[['"](.+)['"]\]$/);
  if (dictAccessMatch) {
    let dictName = dictAccessMatch[1];
    let key = dictAccessMatch[2];
    if (variables[dictName] && typeof variables[dictName] === 'object' && !Array.isArray(variables[dictName])) {
      return variables[dictName][key];
    }
    throw new Error("Invalid dictionary access");
  }

  if (expr.startsWith('[') && expr.endsWith(']')) {
    let content = expr.slice(1, -1).trim();
    if (content === '') return [];
    
    let items = [];
    let current = '';
    let inQuotes = false;
    let quoteChar = '';
    
    for (let char of content) {
      if ((char === '"' || char === "'") && (quoteChar === '' || quoteChar === char)) {
        inQuotes = !inQuotes;
        quoteChar = inQuotes ? char : '';
        current += char;
      } else if (char === ',' && !inQuotes) {
        items.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    if (current.trim() !== '') items.push(current.trim());
    
    return items.map(item => evaluateExpression(item, variables));
  }

  if (!isNaN(expr) && expr !== '') {
    return Number(expr);
  }

  if (expr === 'True') return true;
  if (expr === 'False') return false;

  let listIndexMatch = expr.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\[(.+)\]$/);
  if (listIndexMatch) {
    let listName = listIndexMatch[1];
    let indexExpr = listIndexMatch[2];
    if (variables[listName] && Array.isArray(variables[listName])) {
      let idx = evaluateExpression(indexExpr, variables);
      return variables[listName][idx];
    }
    throw new Error("Invalid list access");
  }

  let funcCallMatch = expr.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\((.*)\)$/);
  if (funcCallMatch) {
    let funcName = funcCallMatch[1];
    let argStr = funcCallMatch[2].trim();
    let func = variables[funcName];
    
    if (func && func.type === 'function') {
      let argVal = evaluateExpression(argStr, variables);
      let localVars = Object.assign({}, variables);
      if (func.params.length > 0 && func.params[0] !== '') {
        localVars[func.params[0]] = argVal;
      }
      
      let funcOutput = [];
      for (let line of func.body) {
        let tLine = line.trim();
        let returnMatch = tLine.match(/^return\s+(.+)$/);
        if (returnMatch) {
          return evaluateExpression(returnMatch[1].trim(), localVars);
        }
        if (tLine.startsWith('print(')) {
          let pM = tLine.match(/^print\((.*)\)$/);
          if (pM) funcOutput.push(evaluateExpression(pM[1].trim(), localVars));
        }
      }
      return funcOutput.length > 0 ? funcOutput.join('\n') : undefined;
    }
  }

  let binaryOpMatch = expr.match(/^([a-zA-Z0-9_'"\[\]\s\(\)]+)\s*([\+\-\*\/])\s*([a-zA-Z0-9_'"\[\]\s\(\)]+)$/);
  if (binaryOpMatch) {
    let left = evaluateExpression(binaryOpMatch[1], variables);
    let op = binaryOpMatch[2];
    let right = evaluateExpression(binaryOpMatch[3], variables);
    
    if (op === '+') {
      if (typeof left === 'string' || typeof right === 'string') {
        return String(left) + String(right);
      }
      return Number(left) + Number(right);
    }
    if (op === '-') return Number(left) - Number(right);
    if (op === '*') return Number(left) * Number(right);
    if (op === '/') return Number(left) / Number(right);
  }

  let compMatch = expr.match(/^([a-zA-Z0-9_\s]+)\s*([><=!]+)\s*([a-zA-Z0-9_\s]+)$/);
  if (compMatch) {
    let left = evaluateExpression(compMatch[1], variables);
    let op = compMatch[2];
    let right = evaluateExpression(compMatch[3], variables);
    
    if (op === '>') return Number(left) > Number(right);
    if (op === '<') return Number(left) < Number(right);
    if (op === '==') return left == right;
    if (op === '!=') return left != right;
    if (op === '>=') return Number(left) >= Number(right);
    if (op === '<=') return Number(left) <= Number(right);
  }

  if (expr in variables) {
    return variables[expr];
  }

  throw new Error(`NameError: name '${expr}' is not defined`);
}

function executeForLoop(loopVar, start, end, lines, variables, output, errors) {
  for (let i = start; i < end; i++) {
    let loopVariables = Object.assign({}, variables);
    loopVariables[loopVar] = i;
    
    for (let rawLine of lines) {
      let line = rawLine.trim();
      if (line.startsWith('print(')) {
        let printMatch = line.match(/^print\((.*)\)$/);
        if (printMatch) {
          try {
            let val = evaluateExpression(printMatch[1].trim(), loopVariables);
            output.push(String(val));
          } catch (e) {
            errors.push(`NameError: in loop body: '${printMatch[1]}' is not defined`);
          }
        }
      }
    }
  }
}

function parseAndRunPython(code) {
  let lines = code.split('\n');
  let output = [];
  let variables = {};
  let errors = [];
  
  let insideIf = false;
  let ifConditionValue = false;
  let insideElse = false;
  
  let insideFor = false;
  let forVar = '';
  let forRangeStart = 0;
  let forRangeEnd = 0;
  let forLoopLines = [];

  for (let i = 0; i < lines.length; i++) {
    let rawLine = lines[i];
    let line = rawLine.trim();
    
    if (line === '' || line.startsWith('#')) {
      if (insideFor) forLoopLines.push(rawLine);
      continue;
    }

    let indentMatch = rawLine.match(/^(\s*)/);
    let indentLength = indentMatch ? indentMatch[1].length : 0;

    if (insideIf && indentLength === 0) insideIf = false;
    if (insideElse && indentLength === 0) insideElse = false;
    if (insideFor && indentLength === 0) {
      insideFor = false;
      executeForLoop(forVar, forRangeStart, forRangeEnd, forLoopLines, variables, output, errors);
      forLoopLines = [];
    }

    if (insideFor && indentLength > 0) {
      forLoopLines.push(rawLine);
      continue;
    }

    if (insideIf && !ifConditionValue && indentLength > 0) continue;
    if (insideElse && ifConditionValue && indentLength > 0) continue;

    // Assignment
    let varAssignMatch = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+)$/);
    if (varAssignMatch) {
      let varName = varAssignMatch[1];
      let varValStr = varAssignMatch[2].trim();
      
      try {
        let evaluatedValue = evaluateExpression(varValStr, variables);
        variables[varName] = evaluatedValue;
      } catch (err) {
        errors.push(`Line ${i+1}: SyntaxError: Invalid expression value '${varValStr}'`);
      }
      continue;
    }

    // If check
    let ifMatch = line.match(/^if\s+(.+)\s*:/);
    if (ifMatch) {
      insideIf = true;
      let expr = ifMatch[1].trim();
      try {
        let val = evaluateExpression(expr, variables);
        ifConditionValue = !!val;
      } catch (err) {
        errors.push(`Line ${i+1}: NameError: Problem evaluating condition '${expr}'`);
        ifConditionValue = false;
      }
      continue;
    }

    // Else
    if (line === 'else:') {
      insideElse = true;
      continue;
    }

    // For Loop
    let forMatch = line.match(/^for\s+([a-zA-Z_][a-zA-Z0-9_]*)\s+in\s+range\((.+)\)\s*:/);
    if (forMatch) {
      insideFor = true;
      forVar = forMatch[1];
      let rangeValStr = forMatch[2].trim();
      
      try {
        let parts = rangeValStr.split(',').map(p => evaluateExpression(p.trim(), variables));
        if (parts.length === 1) {
          forRangeStart = 0;
          forRangeEnd = Number(parts[0]);
        } else {
          forRangeStart = Number(parts[0]);
          forRangeEnd = Number(parts[1]);
        }
      } catch (err) {
        errors.push(`Line ${i+1}: TypeError: range() arguments must be integers`);
        insideFor = false;
      }
      continue;
    }

    // Function definition
    let funcMatch = line.match(/^def\s+([a-zA-Z_][a-zA-Z0-9_]*)\((.*)\)\s*:/);
    if (funcMatch) {
      let funcName = funcMatch[1];
      let params = funcMatch[2].split(',').map(p => p.trim());
      variables[funcName] = { type: 'function', name: funcName, params: params, body: [] };
      
      let j = i + 1;
      while (j < lines.length) {
        let nextLine = lines[j];
        if (nextLine.trim() === '') {
          j++;
          continue;
        }
        let nextIndent = nextLine.match(/^(\s*)/);
        let nextIndentLength = nextIndent ? nextIndent[1].length : 0;
        if (nextIndentLength > 0) {
          variables[funcName].body.push(nextLine);
          j++;
        } else {
          break;
        }
      }
      i = j - 1;
      continue;
    }

    // Print
    let printMatch = line.match(/^print\((.*)\)$/);
    if (printMatch) {
      let printContent = printMatch[1].trim();
      try {
        let val = evaluateExpression(printContent, variables);
        if (Array.isArray(val)) {
          output.push(`['${val.join("', '")}']`);
        } else if (val === undefined) {
          // Handled inside functions internally
        } else {
          output.push(String(val));
        }
      } catch (err) {
        if ((printContent.startsWith('"') && printContent.endsWith('"')) || 
            (printContent.startsWith("'") && printContent.endsWith("'"))) {
          output.push(printContent.slice(1, -1));
        } else {
          errors.push(`Line ${i+1}: NameError: name '${printContent}' is not defined`);
        }
      }
      continue;
    }

    if (indentLength === 0) {
      errors.push(`Line ${i+1}: SyntaxError: Invalid syntax '${line}'`);
    }
  }

  if (insideFor && forLoopLines.length > 0) {
    executeForLoop(forVar, forRangeStart, forRangeEnd, forLoopLines, variables, output, errors);
  }

  return { output, variables, errors };
}

// --- 24. Landing Page & Theme Functions ---

// Typing animation for hero code preview
const codeSnippets = [
  `<span class="code-keyword">def</span> <span class="code-function">calculate_salary</span>(hours, rate):`,
  `    <span class="code-keyword">return</span> hours * rate`,
  ``,
  `<span class="code-comment"># AI explains: This function multiplies...</span>`
];

let currentSnippetIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeCode() {
  const container = document.getElementById('typing-code-container');
  if (!container) return;

  const currentSnippet = codeSnippets[currentSnippetIndex];
  
  if (isDeleting) {
    container.innerHTML = currentSnippet.substring(0, currentCharIndex - 1);
    currentCharIndex--;
    typingSpeed = 50;
  } else {
    container.innerHTML = currentSnippet.substring(0, currentCharIndex + 1);
    currentCharIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && currentCharIndex === currentSnippet.length) {
    isDeleting = true;
    typingSpeed = 2000; // Pause at end
  } else if (isDeleting && currentCharIndex === 0) {
    isDeleting = false;
    currentSnippetIndex = (currentSnippetIndex + 1) % codeSnippets.length;
    typingSpeed = 500; // Pause before next
  }

  setTimeout(typeCode, typingSpeed);
}

// Start typing animation when landing page is visible
function startTypingAnimation() {
  const container = document.getElementById('typing-code-container');
  if (container && document.body.classList.contains('landing-active')) {
    setTimeout(typeCode, 1000);
  }
}

// Landing page navigation
function showAuthGate() {
  document.body.classList.remove('landing-active');
  document.body.classList.add('auth-gate-active');
}

// Switch between Sign In and Sign Up tabs
function switchAuthTab(tab) {
  const signinForm = document.getElementById('signin-form');
  const signupForm = document.getElementById('signup-form');
  const tabSignin = document.getElementById('tab-signin');
  const tabSignup = document.getElementById('tab-signup');

  if (tab === 'signin') {
    signinForm.style.display = 'block';
    signupForm.style.display = 'none';
    tabSignin.classList.add('active');
    tabSignup.classList.remove('active');
  } else {
    signinForm.style.display = 'none';
    signupForm.style.display = 'block';
    tabSignin.classList.remove('active');
    tabSignup.classList.add('active');
  }
}

// Preview avatar upload
function previewAvatar(input) {
  const preview = document.getElementById('avatar-preview');
  const previewImg = document.getElementById('avatar-preview-img');

  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      previewImg.src = e.target.result;
      preview.style.display = 'block';
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    preview.style.display = 'none';
  }
}

// Manual signup function
function manualSignUp() {
  const nameInput = document.getElementById('txt-signup-name').value.trim();
  const emailInput = document.getElementById('txt-signup-email').value.trim();
  const passwordInput = document.getElementById('txt-signup-password').value;
  const confirmInput = document.getElementById('txt-signup-confirm').value;
  const avatarInput = document.getElementById('txt-signup-avatar');
  const btn = document.getElementById('btn-signup');

  // Validation
  if (nameInput === '') {
    showSigninStatus('⚠️ Please enter your full name.', 'error');
    return;
  }
  if (!emailInput.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    showSigninStatus('⚠️ Please enter a valid email address.', 'error');
    return;
  }
  if (passwordInput.length < 6) {
    showSigninStatus('⚠️ Password must be at least 6 characters.', 'error');
    return;
  }
  if (passwordInput !== confirmInput) {
    showSigninStatus('⚠️ Passwords do not match.', 'error');
    return;
  }

  btn.disabled = true;
  btn.innerHTML = `<span class="material-symbols-rounded" style="animation:spin 1s linear infinite;display:inline-block;">refresh</span> Creating Account...`;
  showSigninStatus('🔄 Creating your account...', 'info');

  setTimeout(() => {
    // Handle avatar upload
    let avatarData = null;
    if (avatarInput.files && avatarInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        avatarData = e.target.result;
        completeSignup(nameInput, emailInput, passwordInput, avatarData);
      };
      reader.readAsDataURL(avatarInput.files[0]);
    } else {
      completeSignup(nameInput, emailInput, passwordInput, null);
    }
  }, 800);
}

function completeSignup(name, email, password, avatar) {
  // Create user data
  const userData = {
    name: name,
    email: email,
    password: password, // In production, this should be hashed
    photo: avatar,
    isLoggedIn: true,
    isGoogleVerified: false,
    createdAt: new Date().toISOString(),
    xp: 0,
    streak: 1,
    level: 'Beginner'
  };

  // Store user data locally
  localStorage.setItem('pythonMasterUser', JSON.stringify(userData));

  // Store progress data
  const dbKey = `pmai_progress_${email.replace(/[^a-zA-Z0-9]/g, '_')}`;
  localStorage.setItem(dbKey, JSON.stringify({
    isAuthenticated: true,
    userName: name,
    userEmail: email,
    photoURL: avatar,
    isGoogleVerified: false,
    xp: 0,
    streak: 1,
    level: 'Beginner',
    firstLoginDate: new Date().toLocaleString(),
    lastLoginDate: new Date().toLocaleString()
  }));

  // Update app state
  state.isAuthenticated = true;
  state.userName = name;
  state.userEmail = email;
  state.photoURL = avatar;
  state.isGoogleVerified = false;
  state.xp = 0;
  state.streak = 1;
  state.level = 'Beginner';
  state.firstLoginDate = new Date().toLocaleString();
  state.lastLoginDate = new Date().toLocaleString();

  saveSession();
  finishLogin();

  // Reset button
  const btn = document.getElementById('btn-signup');
  btn.disabled = false;
  btn.innerHTML = `<svg class="google-svg" viewBox="0 0 24 24" width="20" height="20"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"/></svg><span>Create Account</span>`;
}

// Update profile avatar
function updateProfileAvatar(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const avatarData = e.target.result;
      state.photoURL = avatarData;
      
      // Update header profile photo
      const headerPhoto = document.getElementById('header-profile-photo');
      if (headerPhoto) {
        headerPhoto.src = avatarData;
        headerPhoto.style.display = 'block';
      }
      
      // Update profile avatar display
      const profileAvatar = document.getElementById('profile-avatar-display');
      if (profileAvatar) {
        profileAvatar.innerHTML = `<img src="${avatarData}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
      }
      
      // Save to localStorage
      const userData = JSON.parse(localStorage.getItem('pythonMasterUser') || '{}');
      userData.photo = avatarData;
      localStorage.setItem('pythonMasterUser', JSON.stringify(userData));
      
      saveSession();
    };
    reader.readAsDataURL(input.files[0]);
  }
}

// Save profile settings
function saveProfileSettings() {
  const nameInput = document.getElementById('profile-name-input').value.trim();
  
  if (nameInput !== '') {
    state.userName = nameInput;
    
    // Update header username
    const headerUsername = document.getElementById('lbl-header-username');
    if (headerUsername) {
      headerUsername.textContent = nameInput;
    }
    
    // Update profile name display
    const profileName = document.getElementById('profile-name-display');
    if (profileName) {
      profileName.textContent = nameInput;
    }
    
    // Save to localStorage
    const userData = JSON.parse(localStorage.getItem('pythonMasterUser') || '{}');
    userData.name = nameInput;
    localStorage.setItem('pythonMasterUser', JSON.stringify(userData));
    
    saveSession();
    
    alert('Profile settings saved successfully!');
  }
}

// Update profile view with current user data
function renderProfileView() {
  // Update profile name and email
  const profileName = document.getElementById('profile-name-display');
  const profileEmail = document.getElementById('profile-email-display');
  const profileNameInput = document.getElementById('profile-name-input');
  
  if (profileName) profileName.textContent = state.userName || 'User';
  if (profileEmail) profileEmail.textContent = state.userEmail || '';
  if (profileNameInput) profileNameInput.value = state.userName || '';
  
  // Update profile avatar
  const profileAvatar = document.getElementById('profile-avatar-display');
  if (profileAvatar && state.photoURL) {
    profileAvatar.innerHTML = `<img src="${state.photoURL}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
  }
  
  // Update stats
  const xpDisplay = document.getElementById('profile-xp-display');
  const streakDisplay = document.getElementById('profile-streak-display');
  const levelDisplay = document.getElementById('profile-level-display');
  const chaptersDisplay = document.getElementById('profile-chapters-display');
  
  if (xpDisplay) xpDisplay.textContent = state.xp || 0;
  if (streakDisplay) streakDisplay.textContent = state.streak || 1;
  if (levelDisplay) levelDisplay.textContent = state.level || 'Beginner';
  
  // Calculate completed chapters
  const completedChapters = state.completedChapters ? state.completedChapters.length : 0;
  if (chaptersDisplay) chaptersDisplay.textContent = `${completedChapters}/9`;
  
  // Update XP progress bar
  updateXPProgress();
  
  // Update skill levels
  updateSkillLevels();
  
  // Update achievements
  updateAchievements();
}

// Update XP progress bar
function updateXPProgress() {
  const xp = state.xp || 0;
  const xpToNextLevel = 1000;
  const progress = Math.min((xp / xpToNextLevel) * 100, 100);
  
  const xpProgressBar = document.getElementById('xp-progress-bar');
  const xpProgressText = document.getElementById('xp-progress-text');
  
  if (xpProgressBar) xpProgressBar.style.width = `${progress}%`;
  if (xpProgressText) xpProgressText.textContent = `${xp} / ${xpToNextLevel} XP`;
}

// Update skill levels based on completed chapters
function updateSkillLevels() {
  const completedChapters = state.completedChapters || [];
  const totalChapters = 9;
  const progress = (completedChapters.length / totalChapters) * 100;
  
  // Calculate skill levels based on progress
  const skillLevels = [
    { name: 'Python Basics', progress: Math.min(progress * 1.2, 100) },
    { name: 'OOP & Advanced', progress: Math.min(progress * 0.8, 100) },
    { name: 'APIs & Databases', progress: Math.min(progress * 0.6, 100) },
    { name: 'AI & Automation', progress: Math.min(progress * 0.4, 100) },
    { name: 'Project Building', progress: Math.min(progress * 0.5, 100) }
  ];
  
  const skillContainer = document.getElementById('skill-levels-container');
  if (skillContainer) {
    skillContainer.innerHTML = skillLevels.map(skill => `
      <div class="skill-level-item">
        <div class="skill-name">${skill.name}</div>
        <div class="skill-progress">
          <div class="skill-bar" style="width: ${skill.progress}%;"></div>
        </div>
        <div class="skill-percentage">${Math.round(skill.progress)}%</div>
      </div>
    `).join('');
  }
}

// Update achievements based on user progress
function updateAchievements() {
  const achievements = [
    { id: 'first-steps', name: 'First Steps', icon: 'emoji_events', unlocked: state.xp >= 10 },
    { id: '7-day-streak', name: '7-Day Streak', icon: 'local_fire_department', unlocked: state.streak >= 7 },
    { id: 'code-master', name: 'Code Master', icon: 'code', unlocked: state.xp >= 500 },
    { id: 'ai-builder', name: 'AI Builder', icon: 'psychology', unlocked: state.xp >= 1000 },
    { id: 'project-pro', name: 'Project Pro', icon: 'rocket_launch', unlocked: (state.completedChapters || []).length >= 5 },
    { id: 'premium-user', name: 'Premium User', icon: 'workspace_premium', unlocked: state.isPremium }
  ];
  
  const achievementsGrid = document.getElementById('profile-achievements-grid');
  if (achievementsGrid) {
    achievementsGrid.innerHTML = achievements.map(achievement => `
      <div class="achievement-badge ${achievement.unlocked ? 'unlocked' : 'locked'}">
        <span class="material-symbols-rounded">${achievement.icon}</span>
        <span>${achievement.name}</span>
      </div>
    `).join('');
  }
}

// Premium AI Tutor Functions
let voiceModeEnabled = false;
let isListening = false;

// Toggle voice mode
function toggleVoiceMode() {
  voiceModeEnabled = !voiceModeEnabled;
  const btn = document.getElementById('btn-voice-toggle');
  if (btn) {
    btn.classList.toggle('active', voiceModeEnabled);
  }
}

// Start voice input
function startVoiceInput() {
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    alert('Voice input is not supported in your browser. Please use Chrome or Edge.');
    return;
  }
  
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';
  
  const btn = document.getElementById('btn-voice-input');
  if (btn) btn.classList.add('active');
  isListening = true;
  
  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    const input = document.getElementById('txt-ai-chat-input');
    if (input) {
      input.value = transcript;
      sendChatMessageToAI();
    }
  };
  
  recognition.onerror = function(event) {
    console.error('Speech recognition error:', event.error);
    isListening = false;
    if (btn) btn.classList.remove('active');
  };
  
  recognition.onend = function() {
    isListening = false;
    if (btn) btn.classList.remove('active');
  };
  
  recognition.start();
}

// Clear AI chat
function clearAIChat() {
  const chatBox = document.getElementById('ai-chat-box');
  if (chatBox) {
    chatBox.innerHTML = `
      <div class="chat-msg ai">
        <div class="chat-avatar">
          <span class="material-symbols-rounded">smart_toy</span>
        </div>
        <div class="chat-content">
          <p><strong>AI Tutor:</strong> Chat cleared. How can I help you with Python today?</p>
        </div>
      </div>
    `;
  }
}

// Ask suggestion
function askSuggestion(question) {
  const input = document.getElementById('txt-ai-chat-input');
  if (input) {
    input.value = question;
    sendChatMessageToAI();
  }
}

// Enhanced send chat message to AI
function sendChatMessageToAI() {
  const input = document.getElementById('txt-ai-chat-input');
  const message = input.value.trim();
  
  if (!message) return;
  
  const chatBox = document.getElementById('ai-chat-box');
  
  // Add user message
  const userMsg = document.createElement('div');
  userMsg.className = 'chat-msg user';
  userMsg.innerHTML = `
    <div class="chat-avatar">
      <span class="material-symbols-rounded">person</span>
    </div>
    <div class="chat-content">
      <p>${message}</p>
    </div>
  `;
  chatBox.appendChild(userMsg);
  
  // Clear input
  input.value = '';
  
  // Generate AI response
  setTimeout(() => {
    const aiResponse = generateAIResponse(message);
    
    const aiMsg = document.createElement('div');
    aiMsg.className = 'chat-msg ai';
    aiMsg.innerHTML = `
      <div class="chat-avatar">
        <span class="material-symbols-rounded">smart_toy</span>
      </div>
      <div class="chat-content">
        <p><strong>AI Tutor:</strong> ${aiResponse}</p>
      </div>
    `;
    chatBox.appendChild(aiMsg);
    
    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;
    
    // Speak response if voice mode is enabled
    if (voiceModeEnabled) {
      speakText(aiResponse);
    }
  }, 500);
  
  // Scroll to bottom
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Generate AI response (simulated - in production, this would call an AI API)
function generateAIResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('variable')) {
    return "Variables in Python are like containers that store data values. You create a variable by assigning a value to it using the '=' operator. For example: <code>name = 'Python'</code> or <code>age = 25</code>. Python is dynamically typed, so you don't need to declare the type.";
  } else if (lowerMessage.includes('debug') || lowerMessage.includes('error')) {
    return "To debug your code, I recommend: 1) Check the error message in the terminal, 2) Verify your syntax (indentation, colons, quotes), 3) Use print statements to track variable values, 4) Check for typos in variable names. Would you like me to review your specific code?";
  } else if (lowerMessage.includes('loop')) {
    return "Loops in Python allow you to execute code repeatedly. There are two main types: <strong>for loops</strong> (iterate over sequences) and <strong>while loops</strong> (repeat while condition is true). Example: <code>for i in range(5): print(i)</code>";
  } else if (lowerMessage.includes('challenge') || lowerMessage.includes('quest')) {
    return "I can help you with your current challenge! Please share your code or describe what you're trying to achieve, and I'll guide you step by step through the solution.";
  } else if (lowerMessage.includes('print')) {
    return "The <code>print()</code> function outputs text to the console. You can print strings, numbers, or variables. Example: <code>print('Hello, World!')</code> or <code>print(age)</code>. You can also combine multiple items using commas.";
  } else if (lowerMessage.includes('if') || lowerMessage.includes('condition')) {
    return "Conditional statements in Python use <code>if</code>, <code>elif</code>, and <code>else</code> keywords. Python uses indentation to define code blocks. Example: <code>if x > 0: print('Positive')</code>";
  } else {
    return "That's a great question about Python! I'm here to help you understand concepts, debug code, and guide you through challenges. Could you provide more details about what you'd like to learn?";
  }
}

// Speak text using Web Speech API
function speakText(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
  }
}

// Filter projects by category
function filterProjects(category) {
  const projects = document.querySelectorAll('.project-item-card');
  const tabs = document.querySelectorAll('.project-tab');
  
  // Update active tab
  tabs.forEach(tab => {
    tab.classList.remove('active');
    if (tab.textContent.toLowerCase().includes(category) || 
        (category === 'all' && tab.textContent.includes('All'))) {
      tab.classList.add('active');
    }
  });
  
  // Filter projects
  projects.forEach(project => {
    const projectCategory = project.getAttribute('data-category');
    if (category === 'all' || projectCategory === category) {
      project.style.display = 'block';
      project.style.animation = 'fadeIn 0.3s ease';
    } else {
      project.style.display = 'none';
    }
  });
}

// Certificate System Functions
function generateCertificateID() {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `PMAI-${timestamp}-${random}`;
}

function generateQRCode(certId) {
  // Using a simple QR code generation approach
  // In production, use a library like qrcode.js or QRCode.js
  const qrContainer = document.getElementById('certificate-qr-code');
  if (!qrContainer) return;
  
  // For now, use a QR code API
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(certId)}`;
  qrContainer.innerHTML = `<img src="${qrUrl}" alt="Certificate QR Code" style="width:80px;height:80px;">`;
}

function updateCertificateData() {
  const certName = document.getElementById('lbl-cert-name');
  const certId = document.getElementById('lbl-cert-id');
  
  if (certName) certName.textContent = (state.userName || 'User').toUpperCase();
  
  // Generate or retrieve certificate ID
  let certIdValue = state.certificateId;
  if (!certIdValue) {
    certIdValue = generateCertificateID();
    state.certificateId = certIdValue;
    saveSession();
  }
  
  if (certId) certId.textContent = certIdValue;
  
  // Generate QR code
  generateQRCode(certIdValue);
}

function verifyCertificateID(certId) {
  // Verify certificate against stored data
  const inputCertId = certId || document.getElementById('cert-verify-input')?.value;
  if (!inputCertId) {
    alert('Please enter a Certificate ID');
    return;
  }
  
  // In production, this would verify against a database
  // For now, simulate verification
  const resultDiv = document.getElementById('verification-result');
  if (resultDiv) {
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
      <div class="verification-status">
        <span class="material-symbols-rounded text-emerald">verified</span>
        <div>
          <h4>Certificate Verified</h4>
          <p class="text-secondary">Certificate ID: ${inputCertId}</p>
          <p class="text-secondary">Status: Valid</p>
          <p class="text-secondary">Issued by: Python Master AI</p>
        </div>
      </div>
    `;
  }
}

function downloadCertificate() {
  // Download certificate as PDF
  const certElement = document.getElementById('printable-certificate');
  if (!certElement) return;
  
  // In production, use html2canvas + jspdf
  alert('Certificate download feature - In production, this would generate a PDF using html2canvas and jspdf libraries.');
}

function shareCertificate() {
  // Share certificate link
  const certId = state.certificateId || generateCertificateID();
  const shareUrl = `${window.location.origin}/verify?cert=${certId}`;
  
  if (navigator.share) {
    navigator.share({
      title: 'Python Master AI Certificate',
      text: 'I earned my Python Master AI certification!',
      url: shareUrl
    });
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert('Certificate verification link copied to clipboard!');
    });
  }
}

function verifyCertificate() {
  // Verify current certificate
  const certId = state.certificateId;
  if (certId) {
    verifyCertificateID(certId);
  } else {
    alert('No certificate ID found. Complete the course to earn your certificate.');
  }
}

// Update gamification when switching to leaderboard view
const originalSwitchView = switchView;
switchView = function(viewName) {
  originalSwitchView(viewName);
  
  if (viewName === 'leaderboard') {
    updateGamificationStats();
    updateLeaderboardData('weekly');
  }
  
  if (viewName === 'certificate') {
    updateCertificateData();
  }
};

// ATS-Powered Resume Builder Functions
function optimizeResumeWithAI() {
  // Simulate AI optimization
  const skillsInput = document.getElementById('res-skills');
  const projectsInput = document.getElementById('res-projects');
  
  if (skillsInput && projectsInput) {
    // Add industry-standard keywords
    const currentSkills = skillsInput.value;
    const enhancedSkills = currentSkills + ', REST APIs, SQLite, Git, Unit Testing, Debugging, Problem Solving';
    skillsInput.value = enhancedSkills;
    
    // Add quantifiable metrics
    const currentProjects = projectsInput.value;
    const enhancedProjects = currentProjects + '\n• Completed 14+ production-level projects\n• Achieved 85% ATS score\n• Built 5+ AI-powered applications';
    projectsInput.value = enhancedProjects;
    
    // Update ATS score
    updateATSScore();
    
    alert('Resume optimized with AI! Added industry keywords and quantifiable achievements.');
  }
}

function updateATSScore() {
  // Calculate ATS score based on resume content
  const skills = document.getElementById('res-skills')?.value || '';
  const projects = document.getElementById('res-projects')?.value || '';
  const summary = document.getElementById('res-summary')?.value || '';
  
  // Industry keywords to match
  const industryKeywords = ['python', 'api', 'database', 'git', 'testing', 'debugging', 'oop', 'algorithms', 'rest', 'sql', 'machine learning', 'ai', 'automation'];
  
  const allContent = (skills + ' ' + projects + ' ' + summary).toLowerCase();
  const matchedKeywords = industryKeywords.filter(keyword => allContent.includes(keyword));
  
  const keywordScore = Math.min((matchedKeywords.length / industryKeywords.length) * 100, 100);
  const formatScore = 90; // Assuming good format
  const contentScore = Math.min((allContent.length / 500) * 100, 100);
  
  const overallScore = Math.round((keywordScore * 0.4 + formatScore * 0.3 + contentScore * 0.3));
  
  // Update display
  const scoreEl = document.getElementById('ats-score');
  const keywordsEl = document.getElementById('ats-keywords');
  const formatEl = document.getElementById('ats-format');
  const contentEl = document.getElementById('ats-content');
  
  if (scoreEl) scoreEl.textContent = overallScore;
  if (keywordsEl) keywordsEl.textContent = `${matchedKeywords.length}/${industryKeywords.length}`;
  if (formatEl) formatEl.textContent = `${formatScore}%`;
  if (contentEl) contentEl.textContent = `${Math.round(contentScore)}%`;
  
  // Update suggestions
  updateAISuggestions(matchedKeywords.length, industryKeywords.length);
}

function updateAISuggestions(matched, total) {
  const suggestionsList = document.getElementById('ai-suggestions');
  if (!suggestionsList) return;
  
  const suggestions = [];
  
  if (matched < total) {
    suggestions.push({
      icon: 'warning',
      color: 'text-orange',
      text: `Add ${total - matched} more industry keywords to improve ATS matching`
    });
  } else {
    suggestions.push({
      icon: 'check_circle',
      color: 'text-emerald',
      text: 'Great keyword matching! Your resume is well-optimized.'
    });
  }
  
  if (!document.getElementById('res-summary')?.value) {
    suggestions.push({
      icon: 'lightbulb',
      color: 'text-cyan',
      text: 'Add a professional summary to highlight your key achievements'
    });
  }
  
  suggestions.push({
    icon: 'lightbulb',
    color: 'text-cyan',
    text: 'Include GitHub repository links for your projects'
  });
  
  suggestions.push({
    icon: 'lightbulb',
    color: 'text-cyan',
    text: 'Add specific metrics (e.g., "Improved performance by 40%")'
  });
  
  suggestionsList.innerHTML = `
    <h4>AI Suggestions:</h4>
    ${suggestions.map(s => `
      <div class="suggestion-item">
        <span class="material-symbols-rounded ${s.color}">${s.icon}</span>
        <span>${s.text}</span>
      </div>
    `).join('')}
  `;
}

function generateAISummary() {
  const name = document.getElementById('res-name')?.value || 'Python Developer';
  const skills = document.getElementById('res-skills')?.value || '';
  const projects = document.getElementById('res-projects')?.value || '';
  
  // Generate AI summary
  const summary = `Results-driven ${name} with expertise in Python programming, software development, and AI integration. Proven track record of building production-level applications including ${skills.split(',')[0]?.trim() || 'various projects'}. Skilled in ${skills.split(',').slice(0, 3).join(', ')}, with a passion for creating innovative solutions. Completed multiple real-world projects demonstrating strong problem-solving abilities and technical excellence. Committed to continuous learning and staying current with emerging technologies.`;
  
  const summaryInput = document.getElementById('res-summary');
  if (summaryInput) {
    summaryInput.value = summary;
    alert('AI-generated professional summary added to your resume!');
  }
}

function changeResumeTemplate() {
  const template = document.getElementById('resume-template')?.value;
  const resumeSheet = document.getElementById('resume-sheet');
  
  if (resumeSheet && template) {
    // Apply template-specific styles
    resumeSheet.className = `resume-a4-sheet template-${template}`;
    compileResumePreview();
  }
}

// Offline Mode Enhancement Functions
let isOfflineMode = false;

function toggleOfflineMode() {
  const checkbox = document.getElementById('chk-offline');
  isOfflineMode = checkbox.checked;
  
  if (isOfflineMode) {
    enableOfflineMode();
  } else {
    disableOfflineMode();
  }
}

function enableOfflineMode() {
  // Apply offline theme changes
  document.body.classList.add('offline-mode-active');
  
  // Show sync animation
  showSyncAnimation();
  
  // Update offline indicator
  const offlineCard = document.querySelector('.offline-mode-card');
  if (offlineCard) {
    offlineCard.classList.add('offline-active');
  }
  
  // Save offline state
  localStorage.setItem('pythonMasterOffline', 'true');
  
  // Disable features that require internet
  disableOnlineFeatures();
  
  alert('Offline mode enabled. Your progress will sync when you go back online.');
}

function disableOfflineMode() {
  // Remove offline theme changes
  document.body.classList.remove('offline-mode-active');
  
  // Update offline indicator
  const offlineCard = document.querySelector('.offline-mode-card');
  if (offlineCard) {
    offlineCard.classList.remove('offline-active');
  }
  
  // Save offline state
  localStorage.setItem('pythonMasterOffline', 'false');
  
  // Re-enable online features
  enableOnlineFeatures();
  
  // Sync data if needed
  syncOfflineData();
}

function showSyncAnimation() {
  const syncIndicator = document.createElement('div');
  syncIndicator.className = 'sync-animation';
  syncIndicator.innerHTML = `
    <div class="sync-spinner"></div>
    <span>Syncing...</span>
  `;
  
  document.body.appendChild(syncIndicator);
  
  setTimeout(() => {
    syncIndicator.classList.add('sync-complete');
    setTimeout(() => {
      syncIndicator.remove();
    }, 1000);
  }, 1500);
}

function disableOnlineFeatures() {
  // Disable features that require internet
  const googleSignInBtn = document.querySelector('.google-signin-btn');
  if (googleSignInBtn) {
    googleSignInBtn.disabled = true;
    googleSignInBtn.style.opacity = '0.5';
  }
  
  // Show offline notification
  showOfflineNotification('You are now in offline mode. Some features are disabled.');
}

function enableOnlineFeatures() {
  // Re-enable features that require internet
  const googleSignInBtn = document.querySelector('.google-signin-btn');
  if (googleSignInBtn) {
    googleSignInBtn.disabled = false;
    googleSignInBtn.style.opacity = '1';
  }
  
  // Show online notification
  showOfflineNotification('You are back online. All features are available.');
}

function syncOfflineData() {
  // Sync offline progress to cloud (simulated)
  showSyncAnimation();
  
  // In production, this would sync with Firebase/Firestore
  setTimeout(() => {
    console.log('Offline data synced to cloud');
  }, 1500);
}

function showOfflineNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'offline-notification';
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('notification-show');
  }, 100);
  
  setTimeout(() => {
    notification.classList.remove('notification-show');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Check offline status on load
function checkOfflineStatus() {
  const savedOffline = localStorage.getItem('pythonMasterOffline');
  if (savedOffline === 'true') {
    isOfflineMode = true;
    const checkbox = document.getElementById('chk-offline');
    if (checkbox) {
      checkbox.checked = true;
    }
    enableOfflineMode();
  }
}

// Listen for online/offline events
window.addEventListener('online', () => {
  if (isOfflineMode) {
    disableOfflineMode();
  }
});

window.addEventListener('offline', () => {
  if (!isOfflineMode) {
    isOfflineMode = true;
    const checkbox = document.getElementById('chk-offline');
    if (checkbox) {
      checkbox.checked = true;
    }
    enableOfflineMode();
  }
});

// AI Video Call Functions
let isVideoCallActive = false;
let isMuted = false;
let isCameraOff = false;
let isScreenSharing = false;
let isChatOpen = false;

function startVideoCall() {
  const videoOverlay = document.getElementById('ai-video-call-overlay');
  if (videoOverlay) {
    videoOverlay.classList.add('active');
    isVideoCallActive = true;
    
    // Request camera/microphone permissions (simulated)
    navigator.mediaDevices?.getUserMedia({ video: true, audio: true })
      .then(stream => {
        console.log('Camera and microphone access granted');
        // In production, attach stream to video elements
      })
      .catch(err => {
        console.log('Camera/microphone access denied:', err);
        alert('Camera and microphone access is required for video calls. Please enable permissions.');
      });
  }
}

function endVideoCall() {
  const videoOverlay = document.getElementById('ai-video-call-overlay');
  if (videoOverlay) {
    videoOverlay.classList.remove('active');
    isVideoCallActive = false;
    
    // Reset states
    isMuted = false;
    isCameraOff = false;
    isScreenSharing = false;
    isChatOpen = false;
    
    // Update button states
    updateVideoCallButtons();
  }
}

function toggleMute() {
  isMuted = !isMuted;
  const btnMute = document.getElementById('btn-mute');
  if (btnMute) {
    btnMute.classList.toggle('active', isMuted);
  }
  
  // In production, actually mute/unmute audio track
  console.log('Microphone:', isMuted ? 'muted' : 'unmuted');
}

function toggleCamera() {
  isCameraOff = !isCameraOff;
  const btnCamera = document.getElementById('btn-camera');
  if (btnCamera) {
    btnCamera.classList.toggle('active', isCameraOff);
  }
  
  // In production, actually enable/disable video track
  console.log('Camera:', isCameraOff ? 'off' : 'on');
}

function toggleScreenShare() {
  isScreenSharing = !isScreenSharing;
  const btnScreenShare = document.getElementById('btn-screen-share');
  if (btnScreenShare) {
    btnScreenShare.classList.toggle('active', isScreenSharing);
  }
  
  if (isScreenSharing) {
    navigator.mediaDevices?.getDisplayMedia({ video: true })
      .then(stream => {
        console.log('Screen sharing started');
        // In production, attach stream to video element
      })
      .catch(err => {
        console.log('Screen sharing cancelled:', err);
        isScreenSharing = false;
        btnScreenShare.classList.remove('active');
      });
  } else {
    console.log('Screen sharing stopped');
  }
}

function toggleChat() {
  isChatOpen = !isChatOpen;
  const videoChat = document.getElementById('video-call-chat');
  const btnChat = document.getElementById('btn-chat');
  
  if (videoChat) {
    videoChat.classList.toggle('active', isChatOpen);
  }
  
  if (btnChat) {
    btnChat.classList.toggle('active', isChatOpen);
  }
}

function sendVideoChatMessage() {
  const input = document.getElementById('video-chat-input');
  const message = input?.value.trim();
  
  if (!message) return;
  
  const chatMessages = document.getElementById('video-chat-messages');
  if (chatMessages) {
    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'video-chat-message user';
    userMsg.innerHTML = `
      <span class="material-symbols-rounded">person</span>
      <p>${message}</p>
    `;
    chatMessages.appendChild(userMsg);
    
    // Clear input
    if (input) input.value = '';
    
    // Simulate AI response
    setTimeout(() => {
      const aiMsg = document.createElement('div');
      aiMsg.className = 'video-chat-message ai';
      aiMsg.innerHTML = `
        <span class="material-symbols-rounded">smart_toy</span>
        <p>That's a great question! Let me explain that concept for you...</p>
      `;
      chatMessages.appendChild(aiMsg);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

function updateVideoCallButtons() {
  const btnMute = document.getElementById('btn-mute');
  const btnCamera = document.getElementById('btn-camera');
  const btnScreenShare = document.getElementById('btn-screen-share');
  const btnChat = document.getElementById('btn-chat');
  
  if (btnMute) btnMute.classList.remove('active');
  if (btnCamera) btnCamera.classList.remove('active');
  if (btnScreenShare) btnScreenShare.classList.remove('active');
  if (btnChat) btnChat.classList.remove('active');
}

// Professional Coding Lab Functions
function updateLineNumbers() {
  const editor = document.getElementById('code-editor');
  const gutter = document.getElementById('editor-gutter');
  const lineCountEl = document.getElementById('editor-line-count');
  const charCountEl = document.getElementById('editor-char-count');
  
  if (editor && gutter) {
    const lines = editor.value.split('\n').length;
    let gutterHTML = '';
    for (let i = 1; i <= lines; i++) {
      gutterHTML += `<span>${i}</span>`;
    }
    gutter.innerHTML = gutterHTML;
    
    if (lineCountEl) lineCountEl.textContent = `Lines: ${lines}`;
    if (charCountEl) charCountEl.textContent = `Chars: ${editor.value.length}`;
  }
}

function toggleEditorTheme() {
  const editor = document.getElementById('code-editor');
  if (editor) {
    editor.classList.toggle('editor-light-theme');
  }
}

function formatCode() {
  const editor = document.getElementById('code-editor');
  if (editor) {
    // Basic code formatting (in production, use a proper formatter like black)
    let code = editor.value;
    // Simple indentation fix
    code = code.replace(/\n\s*\n/g, '\n\n');
    editor.value = code;
    updateLineNumbers();
    alert('Code formatted!');
  }
}

function toggleTerminalSize() {
  const terminal = document.querySelector('.terminal-card');
  if (terminal) {
    terminal.classList.toggle('terminal-expanded');
  }
}

// Initialize line numbers on page load
document.addEventListener('DOMContentLoaded', () => {
  const editor = document.getElementById('code-editor');
  if (editor) {
    editor.addEventListener('input', updateLineNumbers);
    updateLineNumbers();
  }
});

// Rich Text Notes Editor Functions
function formatText(command, value = null) {
  document.execCommand(command, false, value);
  const editor = document.getElementById('rich-text-editor');
  if (editor) {
    editor.focus();
  }
}

function generateAINotes() {
  const editor = document.getElementById('rich-text-editor');
  const includeCode = document.getElementById('ai-include-code')?.checked;
  const includeQuiz = document.getElementById('ai-include-quiz')?.checked;
  const includeTips = document.getElementById('ai-include-tips')?.checked;
  
  if (!editor) return;
  
  // Simulate AI-generated notes based on user progress
  const aiNotes = `
    <h1>📚 Python Master AI Study Notes</h1>
    <p>Generated on ${new Date().toLocaleDateString()}</p>
    
    <h2>🎯 Learning Progress Summary</h2>
    <ul>
      <li>Total XP Earned: ${state.xp || 0}</li>
      <li>Day Streak: ${state.streak || 1} days</li>
      <li>Chapters Completed: ${state.completedChapters?.length || 0}</li>
    </ul>
    
    ${includeCode ? `
    <h2>💻 Key Code Concepts</h2>
    <pre><code># Python Variables
name = "Python Master AI"
version = 3.9

# Functions
def greet(name):
    return f"Hello, {name}!"

# Lists
skills = ["Python", "AI", "Machine Learning"]</code></pre>
    ` : ''}
    
    ${includeQuiz ? `
    <h2>📝 Quiz Highlights</h2>
    <ul>
      <li>Variables and Data Types - Mastered</li>
      <li>Control Flow - In Progress</li>
      <li>Functions - Coming Soon</li>
    </ul>
    ` : ''}
    
    ${includeTips ? `
    <h2>💡 Best Practices</h2>
    <ul>
      <li>Use meaningful variable names</li>
      <li>Write comments for complex logic</li>
      <li>Follow PEP 8 style guidelines</li>
      <li>Test your code frequently</li>
    </ul>
    ` : ''}
    
    <h2>🚀 Next Steps</h2>
    <p>Continue with the next chapter to expand your Python knowledge!</p>
  `;
  
  editor.innerHTML = aiNotes;
  alert('AI-generated study notes added to your editor!');
}

function clearNotes() {
  const editor = document.getElementById('rich-text-editor');
  if (editor) {
    if (confirm('Are you sure you want to clear all notes?')) {
      editor.innerHTML = '';
    }
  }
}

// Update savePersonalNotes to work with rich text
const originalSavePersonalNotes = typeof savePersonalNotes !== 'undefined' ? savePersonalNotes : null;
savePersonalNotes = function() {
  const editor = document.getElementById('rich-text-editor');
  if (editor) {
    const notesContent = editor.innerHTML;
    localStorage.setItem('pythonMasterNotes', notesContent);
    alert('Notes saved successfully!');
  }
};

// Load saved notes on page load
document.addEventListener('DOMContentLoaded', () => {
  const editor = document.getElementById('rich-text-editor');
  if (editor) {
    const savedNotes = localStorage.getItem('pythonMasterNotes');
    if (savedNotes) {
      editor.innerHTML = savedNotes;
    }
  }
});

// Gamification System Functions
function switchLeaderboardTab(tab) {
  const tabs = document.querySelectorAll('.leaderboard-tab');
  tabs.forEach(t => t.classList.remove('active'));
  
  event.target.classList.add('active');
  
  // Update leaderboard data based on tab
  updateLeaderboardData(tab);
}

function updateLeaderboardData(tab) {
  const container = document.getElementById('leaderboard-container');
  if (!container) return;
  
  // Simulated leaderboard data
  const leaderboardData = {
    weekly: [
      { rank: 1, name: 'Srinivas K.', avatar: 'SK', level: 12, streak: 15, xp: 2500 },
      { rank: 2, name: 'Priya S.', avatar: 'PS', level: 11, streak: 12, xp: 2350 },
      { rank: 3, name: 'Rahul V.', avatar: 'RV', level: 10, streak: 10, xp: 2200 },
      { rank: 4, name: 'Anjali K.', avatar: 'AK', level: 9, streak: 8, xp: 1950 },
      { rank: 5, name: 'Vikram N.', avatar: 'VN', level: 8, streak: 7, xp: 1800 },
    ],
    monthly: [
      { rank: 1, name: 'Srinivas K.', avatar: 'SK', level: 15, streak: 30, xp: 8500 },
      { rank: 2, name: 'Priya S.', avatar: 'PS', level: 14, streak: 28, xp: 8200 },
      { rank: 3, name: 'Rahul V.', avatar: 'RV', level: 13, streak: 25, xp: 7800 },
      { rank: 4, name: 'Anjali K.', avatar: 'AK', level: 12, streak: 22, xp: 7500 },
      { rank: 5, name: 'Vikram N.', avatar: 'VN', level: 11, streak: 20, xp: 7200 },
    ],
    alltime: [
      { rank: 1, name: 'Srinivas K.', avatar: 'SK', level: 25, streak: 120, xp: 25000 },
      { rank: 2, name: 'Priya S.', avatar: 'PS', level: 24, streak: 115, xp: 24500 },
      { rank: 3, name: 'Rahul V.', avatar: 'RV', level: 23, streak: 110, xp: 23800 },
      { rank: 4, name: 'Anjali K.', avatar: 'AK', level: 22, streak: 105, xp: 23000 },
      { rank: 5, name: 'Vikram N.', avatar: 'VN', level: 21, streak: 100, xp: 22500 },
    ]
  };
  
  const data = leaderboardData[tab] || leaderboardData.weekly;
  
  container.innerHTML = data.map(user => `
    <div class="leaderboard-row">
      <span class="rank-badge ${user.rank <= 3 ? 'top-rank' : ''}">#${user.rank}</span>
      <div class="user-profile-mini">
        <div class="avatar-mini">${user.avatar}</div>
        <span class="user-name">${user.name}</span>
      </div>
      <span class="level-badge">Lvl ${user.level}</span>
      <span class="streak-badge">🔥 ${user.streak}</span>
      <span class="xp-badge">${user.xp} XP</span>
    </div>
  `).join('');
}

function calculateLevel(xp) {
  // Simple level calculation: level = sqrt(xp / 100)
  return Math.floor(Math.sqrt(xp / 100)) + 1;
}

function updateGamificationStats() {
  const userLevel = document.getElementById('user-level');
  const currentXp = document.getElementById('current-xp');
  const nextLevelXp = document.getElementById('next-level-xp');
  const xpProgress = document.getElementById('xp-progress');
  const userStreak = document.getElementById('user-streak');
  const userRank = document.getElementById('user-rank');
  const userAchievements = document.getElementById('user-achievements');
  
  if (state.xp) {
    const level = calculateLevel(state.xp);
    const nextLevelXP = Math.pow(level, 2) * 100;
    const prevLevelXP = Math.pow(level - 1, 2) * 100;
    const progress = ((state.xp - prevLevelXP) / (nextLevelXP - prevLevelXP)) * 100;
    
    if (userLevel) userLevel.textContent = level;
    if (currentXp) currentXp.textContent = state.xp;
    if (nextLevelXp) nextLevelXp.textContent = nextLevelXP;
    if (xpProgress) xpProgress.style.width = `${progress}%`;
  }
  
  if (state.streak && userStreak) userStreak.textContent = state.streak;
  
  // Simulated rank calculation
  if (userRank) userRank.textContent = Math.max(1, 100 - Math.floor(state.xp / 100));
  
  // Count achievements
  const unlockedAchievements = document.querySelectorAll('.achievement-badge.unlocked').length;
  if (userAchievements) userAchievements.textContent = unlockedAchievements;
}

function showFeatures() {
  document.getElementById('features-section').scrollIntoView({ behavior: 'smooth' });
}

function scrollToFeatures() {
  document.getElementById('features-section').scrollIntoView({ behavior: 'smooth' });
}

// AI Career System Functions
function runJobReadinessAssessment() {
  // Simulate AI assessment based on user progress
  const technicalScore = Math.min(100, (state.xp || 0) / 50);
  const projectScore = Math.min(100, (state.completedProjects?.length || 0) * 20);
  const interviewScore = Math.min(100, (state.completedQuizzes?.length || 0) * 15);
  
  const overallScore = Math.floor((technicalScore + projectScore + interviewScore) / 3);
  
  // Update metrics display
  const metrics = document.querySelectorAll('.metric-fill');
  const values = document.querySelectorAll('.metric-value');
  
  if (metrics[0]) metrics[0].style.width = `${technicalScore}%`;
  if (metrics[1]) metrics[1].style.width = `${projectScore}%`;
  if (metrics[2]) metrics[2].style.width = `${interviewScore}%`;
  
  if (values[0]) values[0].textContent = `${Math.floor(technicalScore)}%`;
  if (values[1]) values[1].textContent = `${Math.floor(projectScore)}%`;
  if (values[2]) values[2].textContent = `${Math.floor(interviewScore)}%`;
  
  // Update overall score
  const scoreValue = document.querySelector('.score-value');
  const scoreLabel = document.querySelector('.score-label');
  const scoreDesc = document.querySelector('.score-desc');
  
  if (scoreValue) scoreValue.textContent = `${overallScore}%`;
  
  if (scoreLabel) {
    if (overallScore >= 80) {
      scoreLabel.textContent = 'EXCELLENT';
    } else if (overallScore >= 60) {
      scoreLabel.textContent = 'READY';
    } else if (overallScore >= 40) {
      scoreLabel.textContent = 'PROGRESS';
    } else {
      scoreLabel.textContent = 'START';
    }
  }
  
  if (scoreDesc) {
    if (overallScore >= 80) {
      scoreDesc.textContent = 'Excellent! You\'re well-prepared for job applications.';
    } else if (overallScore >= 60) {
      scoreDesc.textContent = 'Good progress! Complete more projects to improve.';
    } else if (overallScore >= 40) {
      scoreDesc.textContent = 'Keep learning! Focus on building more projects.';
    } else {
      scoreDesc.textContent = 'Start your journey! Complete lessons and projects.';
    }
  }
  
  alert('Job readiness assessment completed!');
}

function selectInterviewType(type) {
  const buttons = document.querySelectorAll('.interview-type-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.closest('.interview-type-btn').classList.add('active');
  
  // Update question based on type
  const questionEl = document.querySelector('.interview-question p');
  const tipEl = document.querySelector('.interview-tips span:last-child');
  
  const questions = {
    technical: 'Explain the difference between list and tuple in Python. When would you use each?',
    behavioral: 'Tell me about a challenging project you worked on and how you overcame obstacles.',
    system: 'Design a URL shortening service. What components would you need?'
  };
  
  const tips = {
    technical: 'Focus on mutability, performance, and use cases.',
    behavioral: 'Use STAR method: Situation, Task, Action, Result.',
    system: 'Consider scalability, database choice, and caching.'
  };
  
  if (questionEl) questionEl.textContent = questions[type];
  if (tipEl) tipEl.textContent = tips[type];
}

function startAIInterview() {
  alert('Starting AI Interview Simulator...\n\nThis feature will launch a full mock interview session with AI-powered questions and real-time feedback.');
}

function generateCareerPath() {
  alert('Generating personalized career path...\n\nAI will analyze your skills, projects, and market trends to recommend the best career path for you.');
}

// Community System Functions
let selectedPostType = 'question';

function selectPostType(type) {
  selectedPostType = type;
  const buttons = document.querySelectorAll('.post-type-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.closest('.post-type-btn').classList.add('active');
}

function filterFeed(filter) {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  // Filter the feed based on selection
  const feedContainer = document.getElementById('community-feed-container');
  if (feedContainer) {
    // In production, this would filter actual posts
    alert(`Filtering feed by: ${filter}`);
  }
}

// Support & Helpdesk Functions
function createSupportTicket() {
  const subject = document.getElementById('ticket-subject').value;
  const category = document.getElementById('ticket-category').value;
  const priority = document.getElementById('ticket-priority').value;
  const description = document.getElementById('ticket-description').value;
  
  if (!subject || !description) {
    alert('Please fill in the subject and description fields.');
    return;
  }
  
  // Generate ticket ID
  const ticketId = `#TKT-${String(Date.now()).slice(-3)}`;
  
  // Create ticket object
  const ticket = {
    id: ticketId,
    subject: subject,
    category: category,
    priority: priority,
    description: description,
    status: 'open',
    date: new Date().toLocaleDateString()
  };
  
  // Add to tickets list (in production, this would be sent to backend)
  const ticketsList = document.getElementById('my-tickets-list');
  if (ticketsList) {
    const ticketHTML = `
      <div class="ticket-item">
        <div class="ticket-header">
          <span class="ticket-id">${ticketId}</span>
          <span class="ticket-status open">Open</span>
        </div>
        <h4>${subject}</h4>
        <p class="text-secondary">${description.substring(0, 50)}...</p>
        <div class="ticket-meta">
          <span class="ticket-priority ${priority}">${priority} Priority</span>
          <span class="ticket-date">Just now</span>
        </div>
      </div>
    `;
    ticketsList.insertAdjacentHTML('afterbegin', ticketHTML);
  }
  
  // Clear form
  document.getElementById('ticket-subject').value = '';
  document.getElementById('ticket-description').value = '';
  
  alert(`Support ticket ${ticketId} created successfully!`);
}

// FAQ toggle
function toggleFaq(button) {
  const answer = button.nextElementSibling;
  const icon = button.querySelector('.material-symbols-rounded');
  
  answer.classList.toggle('active');
  
  if (answer.classList.contains('active')) {
    icon.textContent = 'expand_less';
  } else {
    icon.textContent = 'expand_more';
  }
}

// Theme toggle with persistence
function toggleTheme() {
  const body = document.body;
  const isDark = body.getAttribute('data-theme') !== 'light';
  
  if (isDark) {
    body.setAttribute('data-theme', 'light');
    document.getElementById('theme-icon').textContent = 'light_mode';
    document.getElementById('settings-dark-mode').checked = false;
  } else {
    body.removeAttribute('data-theme');
    document.getElementById('theme-icon').textContent = 'dark_mode';
    document.getElementById('settings-dark-mode').checked = true;
  }
  
  // Save preference
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

// Load saved theme on page load
function loadSavedTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.setAttribute('data-theme', 'light');
    document.getElementById('theme-icon').textContent = 'light_mode';
    document.getElementById('settings-dark-mode').checked = false;
  }
}

// Notification system
let notifications = [
  { id: 1, title: "Welcome to Python Master AI!", message: "Start your learning journey today.", time: "Just now", unread: true },
  { id: 2, title: "Daily Challenge Available", message: "Complete today's coding challenge to earn XP.", time: "2 hours ago", unread: true },
  { id: 3, title: "New Course Module", message: "AI Basics chapter is now available.", time: "1 day ago", unread: false }
];

function toggleNotifications() {
  const panel = document.getElementById('notification-panel');
  panel.classList.toggle('active');
  
  if (panel.classList.contains('active')) {
    renderNotifications();
  }
}

function renderNotifications() {
  const list = document.getElementById('notification-list');
  list.innerHTML = notifications.map(notif => `
    <div class="notification-item ${notif.unread ? 'unread' : ''}" onclick="markNotificationRead(${notif.id})">
      <h4>${notif.title}</h4>
      <p>${notif.message}</p>
      <div class="notification-time">${notif.time}</div>
    </div>
  `).join('');
  
  updateNotificationBadge();
}

function markNotificationRead(id) {
  const notif = notifications.find(n => n.id === id);
  if (notif) {
    notif.unread = false;
    renderNotifications();
  }
}

function updateNotificationBadge() {
  const unreadCount = notifications.filter(n => n.unread).length;
  const badge = document.getElementById('notif-count');
  badge.textContent = unreadCount;
  badge.style.display = unreadCount > 0 ? 'block' : 'none';
}

function addNotification(title, message) {
  notifications.unshift({
    id: Date.now(),
    title,
    message,
    time: 'Just now',
    unread: true
  });
  updateNotificationBadge();
}

// Render course cards on dashboard
function renderCourseCards() {
  const grid = document.getElementById('course-cards-grid');
  if (!grid) return;
  
  const courseIcons = ['code', 'functions', 'data_structures', 'api', 'database', 'web', 'automation', 'testing', 'deployment'];
  
  grid.innerHTML = CURRICULUMS.en.map((chapter, index) => {
    const isCompleted = state.completedChapters.includes(index);
    const progress = isCompleted ? 100 : (state.completedChapters.includes(index - 1) ? 50 : 0);
    
    return `
      <div class="course-card ${isCompleted ? 'completed' : ''}" onclick="loadChapterLesson(${index})">
        <div class="course-card-icon">
          <span class="material-symbols-rounded">${courseIcons[index] || 'code'}</span>
        </div>
        <h4>${chapter.title}</h4>
        <p>${chapter.desc.substring(0, 60)}...</p>
        <div class="course-card-meta">
          <div class="course-card-progress">
            <span>${progress}%</span>
            <div class="course-card-progress-bar">
              <div class="course-card-progress-fill" style="width: ${progress}%"></div>
            </div>
          </div>
          <span>${isCompleted ? '✓ Done' : 'In Progress'}</span>
        </div>
      </div>
    `;
  }).join('');
}

// Profile view rendering
function renderProfileView() {
  document.getElementById('profile-name-display').textContent = state.userName;
  document.getElementById('profile-email-display').textContent = state.userEmail;
  document.getElementById('profile-xp-display').textContent = state.xp;
  document.getElementById('profile-streak-display').textContent = state.streak;
  document.getElementById('profile-level-display').textContent = state.level;
  document.getElementById('profile-chapters-display').textContent = `${state.completedChapters.length}/${CURRICULUMS.en.length}`;
  
  // Premium badge
  const premiumBadge = document.getElementById('profile-premium-badge');
  if (state.isPremium) {
    premiumBadge.textContent = 'PRO ACCOUNT';
    premiumBadge.classList.add('pro-active');
  } else {
    premiumBadge.textContent = 'FREE ACCOUNT';
    premiumBadge.classList.remove('pro-active');
  }
  
  // Verified badge
  const verifiedBadge = document.getElementById('profile-verified-badge');
  if (state.isGoogleVerified) {
    verifiedBadge.style.display = 'inline-block';
  } else {
    verifiedBadge.style.display = 'none';
  }
  
  // Profile photo
  if (state.photoURL) {
    document.getElementById('profile-avatar-display').innerHTML = `<img src="${state.photoURL}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
  }
  
  // Render achievements
  renderProfileAchievements();
  
  // Render chapter progress
  renderChapterProgress();
  
  // Overall progress
  const progressPercent = Math.round((state.completedChapters.length / CURRICULUMS.en.length) * 100);
  document.getElementById('profile-overall-progress').style.width = `${progressPercent}%`;
  document.getElementById('profile-overall-percentage').textContent = `${progressPercent}%`;
}

function renderProfileAchievements() {
  const grid = document.getElementById('profile-achievements-grid');
  grid.innerHTML = ACHIEVEMENTS.map(achievement => {
    const isUnlocked = state.unlockedAchievements.includes(achievement.id);
    return `
      <div class="achievement-full-badge ${isUnlocked ? '' : 'locked'}">
        <span class="material-symbols-rounded">${achievement.icon}</span>
        <h5>${achievement.name}</h5>
        <p>${achievement.desc}</p>
      </div>
    `;
  }).join('');
}

function renderChapterProgress() {
  const list = document.getElementById('profile-chapter-progress');
  list.innerHTML = CURRICULUMS.en.map((chapter, index) => {
    const isCompleted = state.completedChapters.includes(index);
    return `
      <div class="chapter-progress-item ${isCompleted ? 'completed' : ''}">
        <div class="chapter-progress-icon">
          <span class="material-symbols-rounded">${isCompleted ? 'check' : 'lock'}</span>
        </div>
        <div class="chapter-progress-info">
          <h5>${chapter.title}</h5>
          <p>${isCompleted ? 'Completed' : 'Not started'}</p>
        </div>
      </div>
    `;
  }).join('');
}

// Settings functions
function resetAllProgress() {
  state.xp = 0;
  state.level = 1;
  state.streak = 1;
  state.completedChapters = [];
  state.completedChallengesCount = 0;
  state.unlockedAchievements = [];
  state.dailyCheckinDone = false;
  saveSession();
  alert('Progress has been reset.');
  renderProfileView();
  renderDashboard();
}

// AI Chatbot Popup
function toggleAIChatbot() {
  const chatbot = document.getElementById('ai-chatbot-popup');
  chatbot.classList.toggle('active');
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
}

function sendChatbotMessage() {
  const input = document.getElementById('chatbot-input');
  const message = input.value.trim();
  if (!message) return;
  
  const chatMessages = document.getElementById('chatbot-messages');
  
  // Add user message
  chatMessages.innerHTML += `
    <div class="chatbot-message user">
      <p>${message}</p>
    </div>
  `;
  
  input.value = '';
  
  // Simulate AI response
  setTimeout(() => {
    const responses = [
      "I'm here to help you learn Python! What would you like to know?",
      "That's a great question! Let me explain...",
      "You're doing great! Keep practicing!",
      "Have you tried running that code in the playground?",
      "Remember to check your syntax carefully."
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    chatMessages.innerHTML += `
      <div class="chatbot-message ai">
        <p>${randomResponse}</p>
      </div>
    `;
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 1000);
  
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// --- 25. Initialization Event Listeners ---
window.addEventListener('DOMContentLoaded', () => {
  // Sync voice system triggers on language change loads
  if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices();
  }

  const editor = document.getElementById('code-editor');
  if (editor) {
    editor.addEventListener('input', updateLineNumberGutter);
    editor.addEventListener('scroll', () => {
      document.getElementById('editor-gutter').scrollTop = editor.scrollTop;
    });
    
    editor.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        editor.value = editor.value.substring(0, start) + "    " + editor.value.substring(end);
        editor.selectionStart = editor.selectionEnd = start + 4;
        updateLineNumberGutter();
      }
    });
  }

  // Pre-load mock data variables in forms
  compileResumePreview();

  // Load saved theme
  loadSavedTheme();
  
  // Check authentication status (protected routes)
  const isAuthenticated = checkAuthentication();
  
  // Initialize landing page
  document.body.classList.add('landing-active');
  
  // Start typing animation
  startTypingAnimation();
  
  // Show appropriate view based on authentication
  if (isAuthenticated) {
    document.body.classList.remove('landing-active');
    document.body.classList.remove('auth-gate-active');
    switchView('dashboard');
  } else {
    document.body.classList.add('auth-gate-active');
  }
  
  // Initialize notifications
  updateNotificationBadge();
});
