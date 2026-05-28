// Admin Dashboard JavaScript
// Python Master AI Admin System

// --- Admin Authentication ---
const adminAuth = {
  isAuthenticated: false,
  adminCredentials: {
    email: 'admin@pythonmaster.ai',
    password: 'admin123'
  },
  
  login: function(email, password) {
    if (email === this.adminCredentials.email && password === this.adminCredentials.password) {
      this.isAuthenticated = true;
      localStorage.setItem('adminAuthenticated', 'true');
      return true;
    }
    return false;
  },
  
  logout: function() {
    this.isAuthenticated = false;
    localStorage.removeItem('adminAuthenticated');
    showAdminLogin();
  },
  
  checkAuth: function() {
    const saved = localStorage.getItem('adminAuthenticated');
    if (saved === 'true') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }
};

// --- Dashboard Data ---
const dashboardData = {
  users: [
    { id: 1, name: 'John Doe', email: 'john@example.com', xp: 12500, level: 'Advanced', status: 'active', lastActive: '2 hours ago' },
    { id: 2, name: 'Sarah Smith', email: 'sarah@example.com', xp: 8900, level: 'Intermediate', status: 'active', lastActive: '5 hours ago' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', xp: 15600, level: 'Expert', status: 'active', lastActive: '1 day ago' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', xp: 4500, level: 'Beginner', status: 'inactive', lastActive: '3 days ago' },
    { id: 5, name: 'Chris Wilson', email: 'chris@example.com', xp: 11200, level: 'Advanced', status: 'banned', lastActive: '1 week ago' },
  ],
  
  courses: [
    { id: 1, title: 'Python Basics', lessons: 30, students: 1250, rating: 4.8, published: true },
    { id: 2, title: 'Data Science with Python', lessons: 45, students: 890, rating: 4.9, published: true },
    { id: 3, title: 'Machine Learning', lessons: 60, students: 650, rating: 4.7, published: true },
    { id: 4, title: 'Web Development with Django', lessons: 40, students: 420, rating: 4.6, published: false },
  ],
  
  quizzes: [
    { id: 1, name: 'Python Basics Quiz', questions: 10, difficulty: 'Beginner', timeLimit: 15, attempts: 1250, avgScore: 85 },
    { id: 2, name: 'Data Structures Quiz', questions: 15, difficulty: 'Intermediate', timeLimit: 20, attempts: 890, avgScore: 78 },
    { id: 3, name: 'Machine Learning Quiz', questions: 20, difficulty: 'Advanced', timeLimit: 30, attempts: 450, avgScore: 72 },
  ]
};

// --- Admin Navigation ---
function initAdminNavigation() {
  const navItems = document.querySelectorAll('.nav-item[data-page]');
  
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const page = item.getAttribute('data-page');
      navigateToPage(page);
      
      // Update active state
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

function navigateToPage(pageName) {
  // Hide all pages
  const pages = document.querySelectorAll('.admin-page');
  pages.forEach(page => page.classList.remove('active'));
  
  // Show selected page
  const targetPage = document.getElementById(`page-${pageName}`);
  if (targetPage) {
    targetPage.classList.add('active');
    
    // Update page title
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) {
      const titles = {
        'dashboard': 'Dashboard Overview',
        'users': 'User Management',
        'courses': 'Course Management',
        'quizzes': 'Quiz Management',
        'ai-tutor': 'AI Tutor Controls',
        'interviews': 'Interview Preparation',
        'resume-builder': 'Resume Builder Admin',
        'certificates': 'Certification System',
        'notifications': 'Notifications System',
        'leaderboard': 'Leaderboard System',
        'moderation': 'Content Moderation',
        'settings': 'App Settings'
      };
      pageTitle.textContent = titles[pageName] || 'Dashboard';
    }
  }
  
  // Close sidebar on mobile
  if (window.innerWidth <= 1024) {
    document.querySelector('.admin-sidebar').classList.remove('active');
  }
}

// --- Admin Login ---
function showAdminLogin() {
  document.getElementById('admin-login').style.display = 'flex';
  document.getElementById('admin-dashboard').style.display = 'none';
}

function showAdminDashboard() {
  document.getElementById('admin-login').style.display = 'none';
  document.getElementById('admin-dashboard').style.display = 'flex';
  initDashboard();
}

function handleAdminLogin(e) {
  e.preventDefault();
  
  const email = document.getElementById('admin-email').value;
  const password = document.getElementById('admin-password').value;
  
  if (adminAuth.login(email, password)) {
    showAdminDashboard();
  } else {
    alert('Invalid credentials. Please try again.');
  }
}

// --- Dashboard Initialization ---
function initDashboard() {
  animateStatNumbers();
  initCharts();
  renderUsersTable();
}

// --- Animated Counters ---
function animateStatNumbers() {
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  
  statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const updateNumber = () => {
      current += step;
      if (current < target) {
        stat.textContent = formatNumber(Math.floor(current));
        requestAnimationFrame(updateNumber);
      } else {
        stat.textContent = formatNumber(target);
      }
    };
    
    updateNumber();
  });
}

function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

// --- Charts Initialization ---
function initCharts() {
  // User Growth Chart
  const userGrowthCtx = document.getElementById('userGrowthChart');
  if (userGrowthCtx) {
    new Chart(userGrowthCtx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'New Users',
          data: [120, 190, 150, 220, 180, 250, 310],
          borderColor: '#06b6d4',
          backgroundColor: 'rgba(6, 182, 212, 0.1)',
          fill: true,
          tension: 0.4,
          borderWidth: 2
        }, {
          label: 'Active Users',
          data: [800, 950, 880, 1020, 950, 1100, 1250],
          borderColor: '#8b5cf6',
          backgroundColor: 'rgba(139, 92, 246, 0.1)',
          fill: true,
          tension: 0.4,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: '#a0a0a0'
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(255, 255, 255, 0.05)'
            },
            ticks: {
              color: '#a0a0a0'
            }
          },
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.05)'
            },
            ticks: {
              color: '#a0a0a0'
            }
          }
        }
      }
    });
  }
  
  // Revenue Chart
  const revenueCtx = document.getElementById('revenueChart');
  if (revenueCtx) {
    new Chart(revenueCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Revenue ($)',
          data: [12000, 19000, 15000, 22000, 18000, 25000],
          backgroundColor: [
            'rgba(6, 182, 212, 0.8)',
            'rgba(139, 92, 246, 0.8)',
            'rgba(16, 185, 129, 0.8)',
            'rgba(249, 115, 22, 0.8)',
            'rgba(236, 72, 153, 0.8)',
            'rgba(59, 130, 246, 0.8)'
          ],
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: '#a0a0a0'
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(255, 255, 255, 0.05)'
            },
            ticks: {
              color: '#a0a0a0',
              callback: function(value) {
                return '$' + value.toLocaleString();
              }
            }
          },
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.05)'
            },
            ticks: {
              color: '#a0a0a0'
            }
          }
        }
      }
    });
  }
}

// --- User Management ---
function renderUsersTable() {
  const tbody = document.getElementById('users-table-body');
  if (!tbody) return;
  
  tbody.innerHTML = dashboardData.users.map(user => `
    <tr>
      <td>
        <div class="user-info">
          <div class="user-avatar">
            <span class="material-symbols-rounded">person</span>
          </div>
          <div class="user-details">
            <span class="user-name">${user.name}</span>
          </div>
        </div>
      </td>
      <td>${user.email}</td>
      <td>${user.xp.toLocaleString()} XP</td>
      <td><span class="level-badge ${user.level.toLowerCase()}">${user.level}</span></td>
      <td><span class="status-badge ${user.status}">${user.status}</span></td>
      <td>${user.lastActive}</td>
      <td>
        <button class="btn-small" onclick="viewUserDetails(${user.id})">View</button>
        <button class="btn-small" onclick="editUser(${user.id})">Edit</button>
        <button class="btn-small danger" onclick="deleteUser(${user.id})">Delete</button>
      </td>
    </tr>
  `).join('');
}

function viewUserDetails(userId) {
  const user = dashboardData.users.find(u => u.id === userId);
  if (user) {
    alert(`User Details:\n\nName: ${user.name}\nEmail: ${user.email}\nXP: ${user.xp}\nLevel: ${user.level}\nStatus: ${user.status}\nLast Active: ${user.lastActive}`);
  }
}

function editUser(userId) {
  alert(`Edit user ${userId} - Feature coming soon`);
}

function deleteUser(userId) {
  if (confirm('Are you sure you want to delete this user?')) {
    dashboardData.users = dashboardData.users.filter(u => u.id !== userId);
    renderUsersTable();
    alert('User deleted successfully');
  }
}

// --- Course Management ---
function addCourse() {
  alert('Add Course modal - Feature coming soon');
}

function editCourse(courseId) {
  alert(`Edit course ${courseId} - Feature coming soon`);
}

function deleteCourse(courseId) {
  if (confirm('Are you sure you want to delete this course?')) {
    dashboardData.courses = dashboardData.courses.filter(c => c.id !== courseId);
    alert('Course deleted successfully');
  }
}

function toggleCoursePublish(courseId) {
  const course = dashboardData.courses.find(c => c.id === courseId);
  if (course) {
    course.published = !course.published;
    alert(`Course ${course.published ? 'published' : 'unpublished'} successfully`);
  }
}

// --- Quiz Management ---
function addQuiz() {
  alert('Add Quiz modal - Feature coming soon');
}

function editQuiz(quizId) {
  alert(`Edit quiz ${quizId} - Feature coming soon`);
}

function deleteQuiz(quizId) {
  if (confirm('Are you sure you want to delete this quiz?')) {
    dashboardData.quizzes = dashboardData.quizzes.filter(q => q.id !== quizId);
    alert('Quiz deleted successfully');
  }
}

function viewQuizAnalytics(quizId) {
  alert(`View analytics for quiz ${quizId} - Feature coming soon`);
}

// --- AI Tutor Controls ---
function saveAIPrompts() {
  alert('AI prompts saved successfully');
}

function updateAISettings() {
  alert('AI settings updated successfully');
}

// --- Settings Management ---
function saveSettings() {
  alert('Settings saved successfully');
}

// --- Mobile Menu Toggle ---
function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.querySelector('.admin-sidebar');
  
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  }
  
  // Close sidebar when clicking outside
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 1024) {
      if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
        sidebar.classList.remove('active');
      }
    }
  });
}

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
  // Check authentication
  if (adminAuth.checkAuth()) {
    showAdminDashboard();
  }
  
  // Admin login form
  const loginForm = document.getElementById('admin-login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', handleAdminLogin);
  }
  
  // Admin logout
  const logoutBtn = document.getElementById('admin-logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      adminAuth.logout();
    });
  }
  
  // Initialize navigation
  initAdminNavigation();
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Add course button
  const addCourseBtn = document.getElementById('add-course-btn');
  if (addCourseBtn) {
    addCourseBtn.addEventListener('click', addCourse);
  }
  
  // Add quiz button
  const addQuizBtn = document.getElementById('add-quiz-btn');
  if (addQuizBtn) {
    addQuizBtn.addEventListener('click', addQuiz);
  }
  
  // Add user button
  const addUserBtn = document.getElementById('add-user-btn');
  if (addUserBtn) {
    addUserBtn.addEventListener('click', () => {
      alert('Add User modal - Feature coming soon');
    });
  }
});

// --- Export Functions ---
function exportData(type) {
  alert(`Export ${type} - Feature coming soon`);
}

// --- Search Functionality ---
function initSearch() {
  const searchInput = document.querySelector('.search-box input');
  if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
      const query = e.target.value.toLowerCase();
      // Implement search logic based on current page
      console.log('Searching for:', query);
    });
  }
}

// --- Notification System ---
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `admin-notification ${type}`;
  notification.innerHTML = `
    <span class="material-symbols-rounded">${type === 'success' ? 'check_circle' : 'info'}</span>
    <span>${message}</span>
  `;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// --- Real-time Updates (Simulated) ---
function startRealTimeUpdates() {
  // Simulate real-time updates
  setInterval(() => {
    // Update stats randomly
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
      const current = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
      const change = Math.floor(Math.random() * 10) - 5;
      const newValue = Math.max(0, current + change);
      stat.textContent = formatNumber(newValue);
    });
  }, 30000); // Update every 30 seconds
}

// --- Data Validation ---
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePassword(password) {
  return password.length >= 6;
}

// --- Modal System ---
function showModal(title, content) {
  const modal = document.createElement('div');
  modal.className = 'admin-modal';
  modal.innerHTML = `
    <div class="modal-overlay"></div>
    <div class="modal-content glass-card">
      <div class="modal-header">
        <h3>${title}</h3>
        <button class="modal-close">
          <span class="material-symbols-rounded">close</span>
        </button>
      </div>
      <div class="modal-body">
        ${content}
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  
  // Close modal
  modal.querySelector('.modal-close').addEventListener('click', () => {
    modal.remove();
  });
  
  modal.querySelector('.modal-overlay').addEventListener('click', () => {
    modal.remove();
  });
}

// --- Toast Notifications ---
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `admin-toast ${type}`;
  toast.innerHTML = `
    <span class="material-symbols-rounded">${type === 'success' ? 'check_circle' : 'error'}</span>
    <span>${message}</span>
  `;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// --- Initialize Admin Dashboard ---
function initAdmin() {
  console.log('Admin Dashboard initialized');
  startRealTimeUpdates();
  initSearch();
}

// Call initialization
initAdmin();
