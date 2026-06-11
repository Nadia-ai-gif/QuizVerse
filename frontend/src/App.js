import React, { useState, useEffect } from 'react';
import './App.css';

const full80QuestionsDataset = [
    // ==========================================
    // 🌐 SUBJECT 1: WEB DEVELOPMENT (20 MCQs)
    // ==========================================
    { category: "Web Development", questionText: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], correctAnswer: "Cascading Style Sheets" },
    { category: "Web Development", questionText: "Which HTML5 element is used to display independent self-contained article content?", options: ["<section>", "<article>", "<aside>", "<div>"], correctAnswer: "<article>" },
    { category: "Web Development", questionText: "Which JavaScript method is used to write directly into an alert dialogue box?", options: ["alert()", "msg()", "window.print()", "console.log()"], correctAnswer: "alert()" },
    { category: "Web Development", questionText: "Which property is used in CSS to alter the background color of an element?", options: ["color", "bgcolor", "background-color", "image-bg"], correctAnswer: "background-color" },
    { category: "Web Development", questionText: "How do you declare a block-scoped constant variable in modern JavaScript?", options: ["var", "let", "constant", "const"], correctAnswer: "const" },
    { category: "Web Development", questionText: "Which HTML attribute is used to specify inline CSS rules?", options: ["styles", "style", "class", "font"], correctAnswer: "style" },
    { category: "Web Development", questionText: "Which symbol denotes an ID selector target rule in CSS configs?", options: [".", "#", "*", "@"], correctAnswer: "#" },
    { category: "Web Development", questionText: "What is the correct syntax for referring to an external script named 'app.js'?", options: ["<script href='app.js'>", "<script name='app.js'>", "<script src='app.js'>", "<script file='app.js'>"], correctAnswer: "<script src='app.js'>" },
    { category: "Web Development", questionText: "Which array method adds one or more elements to the end of an array structural collection?", options: ["pop()", "push()", "shift()", "unshift()"], correctAnswer: "push()" },
    { category: "Web Development", questionText: "What does DOM stand for in production web engineering layouts?", options: ["Document Object Model", "Data Object Management", "Domain Object Matrix", "Document Oriented Media"], correctAnswer: "Document Object Model" },
    { category: "Web Development", questionText: "Which HTTP status code represents a successful REST endpoint request response?", options: ["404", "500", "200", "302"], correctAnswer: "200" },
    { category: "Web Development", questionText: "Which HTML element contains all the metadata context declarations of a page?", options: ["<body>", "<head>", "<meta>", "<html>"], correctAnswer: "<head>" },
    { category: "Web Development", questionText: "What does semantic HTML layout development mean?", options: ["Using automated grid frameworks", "Tags that describe their true meaning to browser and developer", "Encryption of standard paragraph text strings", "Using inline event listeners exclusively"], correctAnswer: "Tags that describe their true meaning to browser and developer" },
    { category: "Web Development", questionText: "Which display framework value sets up flexible column/row alignment layouts?", options: ["display: block", "display: inline", "display: flex", "display: static"], correctAnswer: "display: flex" },
    { category: "Web Development", questionText: "Which React hook is used to handle local reactive state changes inside functional components?", options: ["useEffect", "useContext", "useReducer", "useState"], correctAnswer: "useState" },
    { category: "Web Development", questionText: "What is the purpose of the 'alt' attribute on an HTML image tag element?", options: ["Defines an alternative image URL address tracking link", "Provides alternative descriptive text for screen readers or broken assets", "Alters the rendering dimensions of the container", "Forces absolute alignment rules"], correctAnswer: "Provides alternative descriptive text for screen readers or broken assets" },
    { category: "Web Development", questionText: "Which keyword method prevents a standard HTML form submit action from refreshing the page context?", options: ["e.preventDefault()", "e.stopRefresh()", "form.halt()", "return false"], correctAnswer: "e.preventDefault()" },
    { category: "Web Development", questionText: "What structured format is standard modern web data exchange packages built with?", options: ["XML string maps", "JSON", "CSV tables", "Binary byte streams"], correctAnswer: "JSON" },
    { category: "Web Development", questionText: "Which attribute value opens an anchor link destination inside a completely fresh browser tab?", options: ["target='_self'", "target='_parent'", "target='_top'", "target='_blank'"], correctAnswer: "target='_blank'" },
    { category: "Web Development", questionText: "Which CSS property adjusts the internal spacing between element content and its bounding border line?", options: ["margin", "padding", "gap", "outline-width"], correctAnswer: "padding" },

    // ==========================================
    // 📊 SUBJECT 2: DATA STRUCTURES (20 MCQs)
    // ==========================================
    { category: "Data Structures", questionText: "Which data structure runs on a First-In, First-Out (FIFO) access policy model?", options: ["Stack", "Queue", "Binary Tree", "Max Heap"], correctAnswer: "Queue" },
    { category: "Data Structures", questionText: "What is the worst-case time complexity of searching an element within a standard Linear Array?", options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], correctAnswer: "O(n)" },
    { category: "Data Structures", questionText: "Which data structure utilizes continuous memory location allocations?", options: ["Linked List", "Array", "Graph Network", "Trie Map"], correctAnswer: "Array" },
    { category: "Data Structures", questionText: "What structure relies on pointers linking nodes sequentially via memory addresses?", options: ["Array Stack", "Linked List", "Hash Table", "Binary Search Tree"], correctAnswer: "Linked List" },
    { category: "Data Structures", questionText: "Which data structure functions on a Last-In, First-Out (LIFO) tracking rule?", options: ["Queue", "Graph Network", "Stack", "Min Heap"], correctAnswer: "Stack" },
    { category: "Data Structures", questionText: "What is the search time complexity of a balanced Binary Search Tree (BST)?", options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correctAnswer: "O(log n)" },
    { category: "Data Structures", questionText: "A graph structure containing absolutely no cycles is formally designated as a what?", options: ["Matrix Network", "Tree", "Clique Set", "Dense Mesh"], correctAnswer: "Tree" },
    { category: "Data Structures", questionText: "What data layout uses a key-to-index conversion strategy to achieve O(1) average lookup actions?", options: ["Hash Table", "Adjacency List", "Red Black Tree", "B-Tree"], correctAnswer: "Hash Table" },
    { category: "Data Structures", questionText: "Which node represents the topmost entry point of a Tree hierarchy blueprint?", options: ["Leaf Node", "Branch Element", "Root Node", "Parent Frame"], correctAnswer: "Root Node" },
    { category: "Data Structures", questionText: "What data layout is ideal for implementing deep hierarchical system file path folders?", options: ["Queue", "Tree", "Stack", "Linear Matrix"], correctAnswer: "Tree" },
    { category: "Data Structures", questionText: "How many children pointers can a strict Binary Tree node safely hold maximum?", options: ["1", "3", "2", "Unlimited"], correctAnswer: "2" },
    { category: "Data Structures", questionText: "Which feature separates a Doubly Linked List node from a Singly Linked List item?", options: ["Next pointer only", "Data block pointer tracking", "Both a Previous and a Next memory location tracker pointer", "Null reference termination tracks"], correctAnswer: "Both a Previous and a Next memory location tracker pointer" },
    { category: "Data Structures", questionText: "What mechanism is triggered when two completely distinct dictionary keys resolve to the exact same hash index?", options: ["Overflow Exception", "Collision", "Memory Leaking", "Dual Index Mutation"], correctAnswer: "Collision" },
    { category: "Data Structures", questionText: "Which traversal strategy prints a Binary Tree nodeset using Left, Root, then Right sequence order patterns?", options: ["Pre-order Traversal", "Post-order Traversal", "In-order Traversal", "Level-order Traversal"], correctAnswer: "In-order Traversal" },
    { category: "Data Structures", questionText: "Which tree layout type instantly guarantees self-balancing behaviors during item mutation routines?", options: ["Binary Search Tree", "AVL Tree", "Spanning Tree", "Expression Tree"], correctAnswer: "AVL Tree" },
    { category: "Data Structures", questionText: "What type of data organization framework contains vertices connected together by directional or non-directional edges?", options: ["Graph", "Array Queue", "Hash Bucket", "Linked Set"], correctAnswer: "Graph" },
    { category: "Data Structures", questionText: "What sorting methodology segments datasets repeatedly using pivot references?", options: ["Bubble Sort", "Insertion Sort", "Selection Sort", "Quick Sort"], correctAnswer: "Quick Sort" },
    { category: "Data Structures", questionText: "Which condition triggers an overflow warning block when working with memory stacks?", options: ["Popping items out of an empty stack sequence", "Pushing elements into a structurally full stack frame capacity", "Clearing linear matrix arrays", "Calling recursion instances once"], correctAnswer: "Pushing elements into a structurally full stack frame capacity" },
    { category: "Data Structures", questionText: "What form of collection layout loops its trailing item node references back to link to the first item node?", options: ["Singly Linked List", "Circular Linked List", "Doubly Stack Frame", "Inverse Matrix Queue"], correctAnswer: "Circular Linked List" },
    { category: "Data Structures", questionText: "Which structure efficiently supports predictive text autocompletion dictionaries search structures?", options: ["Min Heap", "Adjacency Matrix", "Trie Tree", "Hash Set"], correctAnswer: "Trie Tree" },

    // ==========================================
    // 💻 SUBJECT 3: OPERATING SYSTEMS (20 MCQs)
    // ==========================================
    { category: "Operating Systems", questionText: "What core program module controls system hardware components abstraction execution routes directly after system boot?", options: ["Shell Engine", "Kernel", "Command Terminal", "File System Manager"], correctAnswer: "Kernel" },
    { category: "Operating Systems", questionText: "What hazardous state develops when distinct concurrent processes stall indefinitely waiting for shared locked resources?", options: ["Starvation Block", "Context Switching", "Deadlock", "Thrashing Cycle"], correctAnswer: "Deadlock" },
    { category: "Operating Systems", questionText: "What RAM optimization trick keeps programs running by swapping memory out onto secondary hard disks?", options: ["Cache Buffering", "Virtual Memory", "RAID Structuring", "Segment Shifting"], correctAnswer: "Virtual Memory" },
    { category: "Operating Systems", questionText: "What action defines moving the central processing unit CPU focus from one thread process control context over to another?", options: ["Context Switch", "Interrupt Routing", "Thread Paging", "Deadlock Prevention"], correctAnswer: "Context Switch" },
    { category: "Operating Systems", questionText: "Which scheduling strategy allocates equal fixed execution time slice chunks systematically across a thread queue?", options: ["Shortest Job First (SJF)", "First Come First Served (FCFS)", "Round Robin (RR)", "Priority Allocation"], correctAnswer: "Round Robin (RR)" },
    { category: "Operating Systems", questionText: "What hardware notification signal breaks standard execution sequences to handle instant priority activities?", options: ["System Call", "Interrupt", "Semaphore Flag", "Page Fault Event"], correctAnswer: "Interrupt" },
    { category: "Operating Systems", questionText: "What is an active program currently loaded into system memory context space called?", options: ["Script Block", "Thread Line", "Process", "App Package"], correctAnswer: "Process" },
    { category: "Operating Systems", questionText: "Which mechanism provides a secure programming interface gateway between application demands and Kernel actions?", options: ["System Call", "User API Loop", "Shell Script Route", "Network Socket Layer"], correctAnswer: "System Call" },
    { category: "Operating Systems", questionText: "What happens when an execution process references a memory page address missing from primary RAM storage bounds?", options: ["Buffer Overflow Event", "Segmentation Crash", "Page Fault", "Deadlock Exception"], correctAnswer: "Page Fault" },
    { category: "Operating Systems", questionText: "What system condition describes excessive virtual memory page swapping cycles that paralyze effective computation performance?", options: ["Deadlock State", "Thrashing", "Starvation Failure", "Fragmentation Error"], correctAnswer: "Thrashing" },
    { category: "Operating Systems", questionText: "Which primitive integer flag variable acts as a concurrency sync lock guard across shared threads routines?", options: ["Mutex Pointer", "Semaphore", "Cond Loop Variable", "Pivot Index"], correctAnswer: "Semaphore" },
    { category: "Operating Systems", questionText: "What form of internal memory fragmentation is common within static fixed-size block paging schemes?", options: ["External Fragmentation", "Internal Fragmentation", "Dynamic Allocation Blunders", "Cache Drops"], correctAnswer: "Internal Fragmentation" },
    { category: "Operating Systems", questionText: "What is the smallest execution pipeline dispatch unit manageable by OS scheduling modules?", options: ["Process Block", "Microkernel Loop", "Thread", "Fiber Matrix"], correctAnswer: "Thread" },
    { category: "Operating Systems", questionText: "Which directory system maps logical file blocks cleanly onto physical device drive cluster locations?", options: ["File System", "Registry Table", "Process Control Block", "Inverted Page Index"], correctAnswer: "File System" },
    { category: "Operating Systems", questionText: "What data tracking struct houses credentials, execution status flags, and address spaces for an isolated OS process?", options: ["Thread Control Block (TCB)", "Process Control Block (PCB)", "System Registry Node", "Inverted Memory Map"], correctAnswer: "Process Control Block (PCB)" },
    { category: "Operating Systems", questionText: "What design concept isolates services into discrete user-space modules to create resilient minimalist Kernels?", options: ["Monolithic Kernel", "Exokernel Matrix", "Microkernel Architecture", "Hybrid Pipeline Layout"], correctAnswer: "Microkernel Architecture" },
    { category: "Operating Systems", questionText: "Which page replacement rule removes the item that has gone longest without an active access reference touch?", options: ["First In First Out (FIFO)", "Least Recently Used (LRU)", "Optimal Replacement (OPT)", "Random Eviction Scheme"], correctAnswer: "Least Recently Used (LRU)" },
    { category: "Operating Systems", questionText: "What scenario occurs when lower priority threads get denied computing availability slots indefinitely?", options: ["Deadlock Condition", "Race Hazard Condition", "Starvation", "Thrashing Spike"], correctAnswer: "Starvation" },
    { category: "Operating Systems", questionText: "What special type of OS environment works with tight time constraints and strict deadline windows?", options: ["Batch Processing Setup", "Distributed Cloud Architecture", "Real-Time Operating System (RTOS)", "Time-Sharing Platform"], correctAnswer: "Real-Time Operating System (RTOS)" },
    { category: "Operating Systems", questionText: "What software piece teaches an operating system kernel how to speak to third-party accessory hardware attachments?", options: ["System Application API", "Device Driver", "Firmware Controller", "Network Socket Gate"], correctAnswer: "Device Driver" },

    // ==========================================
    // 🛡️ SUBJECT 4: CYBERSECURITY (20 MCQs)
    // ==========================================
    { category: "Cybersecurity", questionText: "What mechanism provides secure encrypted transmission tunnels across open public network routes?", options: ["Filewall Configuration", "Virtual Private Network (VPN)", "Proxy Server Relay", "DNS Security Extensions"], correctAnswer: "Virtual Private Network (VPN)" },
    { category: "Cybersecurity", questionText: "What attack pattern tricks targets into giving up secret login credentials using deceptive emails?", options: ["Ransomware Deployment", "Phishing", "SQL Injection", "Man-in-the-Middle Strike"], correctAnswer: "Phishing" },
    { category: "Cybersecurity", questionText: "What form of malicious software locks up your files until you make an extortion payment?", options: ["Spyware Tracker", "Trojan Horse Module", "Ransomware", "Logic Bomb Package"], correctAnswer: "Ransomware" },
    { category: "Cybersecurity", questionText: "What security framework demands validation checks for every user, device, and request transaction?", options: ["Perimeter Network Security", "Zero Trust Architecture", "Role Based Identity Matrix", "Open Access Sovereignty"], correctAnswer: "Zero Trust Architecture" },
    { category: "Cybersecurity", questionText: "What type of attack floods a targeted web server with dummy requests to knock it offline?", options: ["Brute Force Attack", "Distributed Denial of Service (DDoS)", "Cross-Site Scripting (XSS)", "Buffer Overflow exploit"], correctAnswer: "Distributed Denial of Service (DDoS)" },
    { category: "Cybersecurity", questionText: "What mechanism inspects and filters passing network traffic based on predefined rule sets?", options: ["Intrusion Detection Nodes", "Firewall", "Gateway Router Map", "Packet Sniffer Module"], correctAnswer: "Firewall" },
    { category: "Cybersecurity", questionText: "Which attack vector slips malicious command code strings into input boxes to hijack backend web databases?", options: ["Cross-Site Scripting (XSS)", "SQL Injection (SQLi)", "Directory Traversal Attack", "Buffer Manipulation Route"], correctAnswer: "SQL Injection (SQLi)" },
    { category: "Cybersecurity", questionText: "What cryptographic primitive turns cleartext input strings into fixed-length, unique verification values?", options: ["Symmetric Block Ciphering", "Asymmetric Key Handshake", "Hash Function", "Salting Passphrase Sequences"], correctAnswer: "Hash Function" },
    { category: "Cybersecurity", questionText: "What type of threat sits quietly inside a useful program before running its payload?", options: ["Worm Propagation", "Trojan Horse", "Spyware Keylogger", "Rootkit Command Controller"], correctAnswer: "Trojan Horse" },
    { category: "Cybersecurity", questionText: "What vulnerability classification describes completely unpatched security flaws unknown to the original system developers?", options: ["Zero-Day Vulnerability", "Regression Oversight Bug", "Buffer Mismanagement Leak", "Cross-Origin Defect"], correctAnswer: "Zero-Day Vulnerability" },
    { category: "Cybersecurity", questionText: "Which parameter uses distinct public and private key pairs to manage data encryption and decryption?", options: ["Asymmetric Encryption", "Symmetric Stream Ciphering", "Obfuscation Hashing Loops", "Pre-shared Secret Keys"], correctAnswer: "Asymmetric Encryption" },
    { category: "Cybersecurity", questionText: "What is it called when an attacker secretly monitors or alters communications between two targets?", options: ["Replay Threat", "Man-in-the-Middle (MitM) Attack", "DNS Spoofing Strike", "Social Engineering Run"], correctAnswer: "Man-in-the-Middle (MitM) Attack" },
    { category: "Cybersecurity", questionText: "What defensive step adds dummy random characters into plaintext credentials before running password hash encryptions?", options: ["Hashing Iteration", "Salting", "Key Stretching Action", "Tokenization Architecture"], correctAnswer: "Salting" },
    { category: "Cybersecurity", questionText: "What core cybersecurity pillar guarantees that unauthorized parties cannot read intercepted data transmissions?", options: ["Integrity Validation Checks", "Availability System Uptime", "Confidentiality", "Non-Repudiation Assertions"], correctAnswer: "Confidentiality" },
    { category: "Cybersecurity", questionText: "What security rule grants users only the minimum access clearance levels required to finish their tasks?", options: ["Separation of Duty Rules", "Principle of Least Privilege", "Mandatory Security Clearance", "Role Proliferation Matrices"], correctAnswer: "Principle of Least Privilege" },
    { category: "Cybersecurity", questionText: "What type of malware injects malicious script files into trusted websites to run scripts inside an unsuspecting visitor's browser?", options: ["SQL Data Leakage", "Cross-Site Scripting (XSS)", "Command Line Execution Run", "Session Hijacking Attack"], correctAnswer: "Cross-Site Scripting (XSS)" },
    { category: "Cybersecurity", questionText: "What tool looks for network changes, monitors logs, and sends alerts when it catches unauthorized system intrusion events?", options: ["Network Address Translation (NAT)", "Intrusion Detection System (IDS)", "Vulnerability Scanner App", "Secure Shell (SSH) Portal"], correctAnswer: "Intrusion Detection System (IDS)" },
    { category: "Cybersecurity", questionText: "What validation step combines something you know (password) with something you have (phone/token token)?", options: ["Biometric Pattern Scanning", "Multi-Factor Authentication (MFA)", "Single Sign-On (SSO) Portal", "Cryptographic Access Tokens"], correctAnswer: "Multi-Factor Authentication (MFA)" },
    { category: "Cybersecurity", questionText: "What exploit scenario happens when software writes data past the allocated boundaries of its memory space?", options: ["Buffer Overflow", "Null Pointer Dereference Crash", "Memory Leak Overload", "Integer Overflow Reset"], correctAnswer: "Buffer Overflow" },
    { category: "Cybersecurity", questionText: "What methodology involves manipulating human psychology to trick staff members into breaking security policies?", options: ["Spoofing Systems Loops", "Social Engineering", "Brute Force Manipulation", "Dictionary Attack Schemes"], correctAnswer: "Social Engineering" }
];

function App() {
  const [view, setView] = useState('dashboard'); 
  const [registrationNo, setRegistrationNo] = useState('');
  const [subject, setSubject] = useState('Web Development');
  const [errorMessage, setErrorMessage] = useState('');
  
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  
  const [timeLeft, setTimeLeft] = useState(30); 
  const [scoreMetrics, setScoreMetrics] = useState({ marks: '', status: '' });
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    fetchLogsStream();
  }, []);

  useEffect(() => {
    if (view !== 'quiz') return;

    if (timeLeft === 0) {
      if (currentQuestionIndex < 19) {
        if (!selectedAnswers[currentQuestionIndex]) {
          setSelectedAnswers(prev => ({ ...prev, [currentQuestionIndex]: "TIMEOUT_NO_ANSWER" }));
        }
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        if (!selectedAnswers[currentQuestionIndex]) {
          setSelectedAnswers(prev => ({ ...prev, [currentQuestionIndex]: "TIMEOUT_NO_ANSWER" }));
        }
        handleEvaluateQuizResult();
      }
      return;
    }

    const timerInterval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timeLeft, view, currentQuestionIndex, selectedAnswers]);

  useEffect(() => {
    if (view === 'quiz') {
      setTimeLeft(30); 
    }
  }, [currentQuestionIndex, view]);

  const fetchLogsStream = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/results-history');
      if (res.ok) {
        const data = await res.json();
        setHistoryList(data);
      }
    } catch (err) {
      console.error("Historical log pipeline disconnect:", err);
    }
  };

  const handleStartQuizSequence = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const eligibilityRes = await fetch('http://localhost:5000/api/check-eligibility', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ registrationNo })
      });
      const eligibilityData = await eligibilityRes.json();

      if (!eligibilityRes.ok) {
        setErrorMessage(eligibilityData.message);
        return;
      }

      try {
        const questionsRes = await fetch(`http://localhost:5000/api/questions?category=${encodeURIComponent(subject)}`);
        const mongoQuestions = await questionsRes.json();

        if (questionsRes.ok && mongoQuestions.length > 0) {
          setQuestions(mongoQuestions);
        } else {
          throw new Error("Empty cluster collection");
        }
      } catch (dbErr) {
        console.warn("⚠️ MongoDB path unreachable. Deploying Failover Middleware...");
        const fallbackList = full80QuestionsDataset.filter(q => q.category === subject);
        setQuestions(fallbackList);
      }

      setCurrentQuestionIndex(0);
      setSelectedAnswers({});
      setTimeLeft(30);
      setView('quiz');

    } catch (err) {
      setErrorMessage('❌ System Error: Ensure backend server is listening on port 5000.');
    }
  };

  const handleSelectOption = (option) => {
    if (selectedAnswers[currentQuestionIndex]) return;
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: option });
  };

  const handleEvaluateQuizResult = async () => {
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        correctCount++;
      }
    });

    const marksStr = `${correctCount} / 20`;
    const finalStatus = correctCount >= 10 ? 'PASS' : 'FAIL';
    
    setScoreMetrics({ marks: marksStr, status: finalStatus });
    setView('evaluation');

    try {
      await fetch('http://localhost:5000/api/submit-results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          registrationNo,
          subject,
          marksObtained: marksStr,
          status: finalStatus
        })
      });
      fetchLogsStream(); 
    } catch (err) {
      console.error("Auto write collection failure:", err);
    }
  };

  const handleWipeDatabaseCollections = async () => {
    if (!window.confirm("Are you sure you want to drop the logs tracking records?")) return;
    try {
      const res = await fetch('http://localhost:5000/api/clear-history', { method: 'DELETE' });
      if (res.ok) {
        setHistoryList([]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getOptionClassName = (opt) => {
    const chosenAnswer = selectedAnswers[currentQuestionIndex];
    const correctSystemAnswer = questions[currentQuestionIndex]?.correctAnswer;

    if (!chosenAnswer) return "option-btn"; 
    if (chosenAnswer === "TIMEOUT_NO_ANSWER") return "option-btn diminished-dark";

    if (opt === correctSystemAnswer) {
      return "option-btn correct-highlight"; 
    }
    if (chosenAnswer === opt && chosenAnswer !== correctSystemAnswer) {
      return "option-btn wrong-highlight"; 
    }

    return "option-btn diminished-dark"; 
  };

  function renderHistoryTableBlock() {
    return (
      <div className="history-table-container">
        <div className="table-header-block">
          <div className="table-title-centered-wrapper">
            <h3 className="history-main-title">📜 FULL STUDENT MARKS HISTORY</h3>
            <p className="history-sub-title">Database record summary generated automatically from active MongoDB instance values.</p>
          </div>
          <button className="flush-logs-btn" onClick={handleWipeDatabaseCollections}>🗑️ Flush Logs</button>
        </div>

        {historyList.length === 0 ? (
          <div className="empty-db-notice">No student marks logged inside database storage arrays yet.</div>
        ) : (
          <div className="scroll-table-wrapper">
            <table className="metrics-log-table">
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Subject</th>
                  <th>Marks</th>
                  <th>Status</th>
                  <th>Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {historyList.map((log) => (
                  <tr key={log._id}>
                    <td className="monospace-text">{log.registrationNo.toUpperCase()}</td>
                    <td>{log.subject}</td>
                    <td className="table-marks-color">{log.marksObtained}</td>
                    <td><span className={`table-status-text ${log.status.toLowerCase()}`}>{log.status}</span></td>
                    <td className="timestamp-text">{new Date(log.timestamp).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="app-layout">
      <div className="nav-menu">
        <button 
          className={view === 'dashboard' ? 'nav-btn active' : 'nav-btn'} 
          onClick={() => setView('dashboard')}
        >
          📝 QuizVerse Portal Home
        </button>
        <button 
          className={view === 'history_board' ? 'nav-btn active' : 'nav-btn'} 
          onClick={() => { fetchLogsStream(); setView('history_board'); }}
        >
          📊 View Results History Board
        </button>
      </div>

      <div className="main-content-stage">
        {view === 'dashboard' && (
          <div className="dashboard-card">
            <h2 className="dashboard-main-title">QUIZVERSE DASHBOARD</h2>
            <form onSubmit={handleStartQuizSequence}>
              <label>Choose Subject Track:</label>
              <select value={subject} onChange={(e) => setSubject(e.target.value)}>
                <option value="Web Development">Web Development</option>
                <option value="Data Structures">Data Structures</option>
                <option value="Operating Systems">Operating Systems</option>
                <option value="Cybersecurity">Cybersecurity</option>
              </select>

              <label>Enter Your Registration Number:</label>
              <input 
                type="text" 
                placeholder="e.g., 24pwbcs1196" 
                value={registrationNo} 
                onChange={(e) => setRegistrationNo(e.target.value)}
                required
              />
              <span className="format-hint">Format Check: Must explicitly begin with '24pwbcs' prefix token values.</span>

              <button type="submit" className="start-btn">Start Quiz Track</button>
            </form>
            {errorMessage && <p className="alert-box">{errorMessage}</p>}
          </div>
        )}

        {view === 'quiz' && (
          <div className="quiz-engine-box">
            {/* 🛠️ Decoupled row fields container supporting flex alignments */}
            <div className="engine-header">
              <h3>Subject track: {subject}</h3>
              <span>Question {currentQuestionIndex + 1} of 20</span>
            </div>
            
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: `${((currentQuestionIndex + 1) / 20) * 100}%` }}></div>
            </div>
            
            <div className={`timer-container ${timeLeft <= 10 ? 'timer-critical' : ''}`}>
              <span className="timer-icon">⏱️</span>
              <span className="timer-text">Time Remaining: <strong>{timeLeft}s</strong></span>
              <div className="timer-progress-track">
                <div className="timer-progress-bar" style={{ width: `${(timeLeft / 30) * 100}%` }}></div>
              </div>
            </div>

            <p className="question-text">
               <strong style={{color: '#4ea8de'}}>Q{currentQuestionIndex + 1}:</strong> {
                 questions[currentQuestionIndex]?.questionText
               }
            </p>

            {selectedAnswers[currentQuestionIndex] === "TIMEOUT_NO_ANSWER" && (
              <p className="timeout-warning-notice">⚠️ Time expired for this question! Response locked.</p>
            )}

            <div className="options-grid">
              {questions[currentQuestionIndex]?.options.map((opt, i) => (
                <button 
                  key={i} 
                  className={getOptionClassName(opt)}
                  onClick={() => handleSelectOption(opt)}
                  disabled={selectedAnswers[currentQuestionIndex] === "TIMEOUT_NO_ANSWER"}
                >
                  {opt}
                </button>
              ))}
            </div>
            
            <div className="engine-footer-controls">
              <button 
                disabled={currentQuestionIndex === 0 || selectedAnswers[currentQuestionIndex] === "TIMEOUT_NO_ANSWER"} 
                onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
                className="control-btn"
              >
                Previous
              </button>
              {currentQuestionIndex < 19 ? (
                <button 
                  disabled={!selectedAnswers[currentQuestionIndex]}
                  onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                  className="control-btn forward"
                >
                  Next Question
                </button>
              ) : (
                <button 
                  disabled={!selectedAnswers[currentQuestionIndex]}
                  onClick={handleEvaluateQuizResult}
                  className="submit-finish-btn"
                >
                  Submit & Finish Exam
                </button>
              )}
            </div>
          </div>
        )}

        {view === 'evaluation' && (
          <div className="evaluation-layout-wrapper">
            <div className="evaluation-card">
              <h2>QUIZ EVALUATION BOARD</h2>
              <p className="subtext">Official Performance Card Metrics (Saved to MongoDB Atlas Cloud)</p>
              
              <div className="metrics-display-group">
                <div className="metrics-row"><span>Student Reference ID:</span><strong>{registrationNo.toUpperCase()}</strong></div>
                <div className="metrics-row"><span>Tested Area Topic:</span><strong>{subject}</strong></div>
                <div className="metrics-row"><span>Marks Secured:</span><strong className="marks-highlight">{scoreMetrics.marks}</strong></div>
                <div className="metrics-row">
                  <span>Final Result Status:</span>
                  <span className={`status-badge ${scoreMetrics.status.toLowerCase()}`}>{scoreMetrics.status}</span>
                </div>
              </div>
              
              {scoreMetrics.status === 'FAIL' && <p className="warning-note">⚠️ Evaluation score is below 50%. Retake recommended.</p>}
              <button className="return-portal-btn" onClick={() => { setRegistrationNo(''); setView('dashboard'); }}>
                Return to QuizVerse Portal Home
              </button>
            </div>
            {renderHistoryTableBlock()}
          </div>
        )}

        {view === 'history_board' && (
          <div className="standalone-history-wrapper">
            {renderHistoryTableBlock()}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;