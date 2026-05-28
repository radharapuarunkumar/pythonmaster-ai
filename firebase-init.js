/**
 * Firebase Initialization — Python Master AI
 * ============================================
 * 
 * HOW TO SET UP (One-time, takes 5 minutes):
 * 
 * STEP 1: Go to https://console.firebase.google.com/
 * STEP 2: Click "Add project" → name it "Python Master AI" → Continue
 * STEP 3: Go to Authentication → Sign-in method → Enable "Google"
 * STEP 4: Go to Firestore Database → Create database (start in test mode)
 * STEP 5: Go to Project Settings → Your apps → Add web app
 * STEP 6: Copy the firebaseConfig object and REPLACE the one below
 * STEP 7: Go to Google Cloud Console → APIs → OAuth consent screen
 *         → Add your domain (or localhost) as Authorized domain
 * 
 * For Google Client ID (for the button):
 * STEP 8: Go to Google Cloud Console → Credentials → Create OAuth 2.0 Client ID
 * STEP 9: Replace YOUR_GOOGLE_CLIENT_ID in index.html with your Client ID
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  onAuthStateChanged,
  signOut 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc,
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// =============================================================
// ⚙️  REPLACE THIS CONFIG WITH YOUR FIREBASE PROJECT CONFIG
// =============================================================
const firebaseConfig = {
  apiKey: "AIzaSyAEwI7b778jTMmqs5MAygl1W2xWplH8V4E",
  authDomain: "python-master-ai-a1337.firebaseapp.com",
  projectId: "python-master-ai-a1337",
  storageBucket: "python-master-ai-a1337.firebasestorage.app",
  messagingSenderId: "693618116938",
  appId: "1:693618116938:web:c6916ee74a6f804b8d19b3",
  measurementId: "G-VYJN10Y5P7"
};
// =============================================================

let app, auth, db, provider;
let firebaseReady = false;

try {
  app      = initializeApp(firebaseConfig);
  auth     = getAuth(app);
  db       = getFirestore(app);
  provider = new GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  firebaseReady = true;
  console.log("✅ Firebase initialized successfully.");
} catch (e) {
  console.warn("⚠️ Firebase config not set up yet. Using localStorage only.", e.message);
}

/**
 * Sign in with Google popup — called from the Sign In button
 */
window.signInWithGoogle = async function() {
  if (!firebaseReady) {
    console.warn("Firebase not ready — falling back to manual sign-in.");
    const statusEl = document.getElementById('signin-status-msg');
    if (statusEl) {
      statusEl.style.display = 'block';
      statusEl.style.background = 'rgba(255,0,80,0.08)';
      statusEl.style.color = '#ff3366';
      statusEl.style.border = '1px solid rgba(255,0,80,0.3)';
      statusEl.textContent = '⚠️ Firebase not configured. Please set up Firebase config in firebase-init.js or use manual sign-in below.';
    }
    return false;
  }

  const statusEl = document.getElementById('signin-status-msg');
  try {
    if (statusEl) {
      statusEl.style.display = 'block';
      statusEl.style.background = 'rgba(0,200,255,0.08)';
      statusEl.style.color = 'var(--neon-cyan)';
      statusEl.style.border = '1px solid rgba(0,200,255,0.3)';
      statusEl.textContent = '🔄 Connecting to Google...';
    }

    const result = await signInWithPopup(auth, provider);
    const user   = result.user;

    if (statusEl) {
      statusEl.style.background = 'rgba(0,255,128,0.08)';
      statusEl.style.color = 'var(--neon-emerald)';
      statusEl.style.border = '1px solid rgba(0,255,128,0.3)';
      statusEl.textContent = `✅ Verified: ${user.email}`;
    }

    // Store user data locally
    const userData = {
      name: user.displayName || user.email.split('@')[0],
      email: user.email,
      photo: user.photoURL,
      uid: user.uid,
      isLoggedIn: true
    };
    localStorage.setItem('pythonMasterUser', JSON.stringify(userData));

    // Trigger app login with real verified data
    if (window.onGoogleAuthSuccess) {
      await window.onGoogleAuthSuccess(userData);
    }

    // Redirect to dashboard after successful login
    setTimeout(() => {
      if (window.hideAuthGate) {
        window.hideAuthGate();
      }
      if (window.switchView) {
        window.switchView('dashboard');
      }
    }, 1000);

    return true;
  } catch (error) {
    if (statusEl) {
      statusEl.style.display = 'block';
      statusEl.style.background = 'rgba(255,0,80,0.08)';
      statusEl.style.color = '#ff3366';
      statusEl.style.border = '1px solid rgba(255,0,80,0.3)';
      if (error.code === 'auth/popup-closed-by-user') {
        statusEl.textContent = '⚠️ Sign-in cancelled. Try again.';
      } else if (error.code === 'auth/unauthorized-domain') {
        statusEl.textContent = '⚠️ Domain not authorized in Firebase. Add your domain to Firebase console or use manual sign-in below.';
      } else if (error.code === 'auth/configuration-not-found') {
        statusEl.textContent = '⚠️ Firebase not configured. Please set up Firebase config in firebase-init.js.';
      } else {
        statusEl.textContent = `⚠️ ${error.message}`;
      }
    }
    console.error("Google Sign-In error:", error);
    return false;
  }
};

/**
 * Save user progress data to Firestore
 */
window.saveUserDataToFirestore = async function(userState) {
  if (!firebaseReady || !auth.currentUser) return;
  try {
    const userRef = doc(db, "users", auth.currentUser.uid);
    await setDoc(userRef, {
      ...userState,
      lastUpdated: serverTimestamp(),
      updatedAt: new Date().toISOString()
    }, { merge: true });
    console.log("✅ Progress saved to Firestore.");
  } catch (e) {
    console.warn("Firestore save failed (using localStorage):", e.message);
  }
};

/**
 * Load user progress data from Firestore
 */
window.loadUserDataFromFirestore = async function(uid) {
  if (!firebaseReady) return null;
  try {
    const userRef  = doc(db, "users", uid);
    const snapshot = await getDoc(userRef);
    if (snapshot.exists()) {
      console.log("✅ Progress loaded from Firestore.");
      return snapshot.data();
    }
  } catch (e) {
    console.warn("Firestore load failed:", e.message);
  }
  return null;
};

/**
 * Sign out from Firebase
 */
window.firebaseSignOut = async function() {
  // Clear local storage
  localStorage.removeItem('pythonMasterUser');
  
  if (firebaseReady && auth) {
    try {
      await signOut(auth);
      console.log("✅ Signed out from Firebase.");
    } catch(e) {
      console.warn("Sign-out error:", e);
    }
  }
  
  // Redirect to landing page
  if (window.showAuthGate) {
    window.showAuthGate();
  }
  
  // Reload page to clear state
  window.location.reload();
};

/**
 * Listen for auth state changes (auto-restore session on page reload)
 */
if (firebaseReady) {
  onAuthStateChanged(auth, async (user) => {
    if (user && !window._authHandled) {
      window._authHandled = true;
      console.log("🔄 Auto-restoring session for:", user.email);
      
      // Store user data locally
      const userData = {
        name: user.displayName || user.email.split('@')[0],
        email: user.email,
        photo: user.photoURL,
        uid: user.uid,
        isLoggedIn: true
      };
      localStorage.setItem('pythonMasterUser', JSON.stringify(userData));
      
      // Load from Firestore and restore session
      const cloudData = await window.loadUserDataFromFirestore(user.uid);
      if (cloudData && window.restoreSessionFromCloud) {
        window.restoreSessionFromCloud(cloudData, userData);
      }
      
      // Hide auth gate and show dashboard
      setTimeout(() => {
        if (window.hideAuthGate) {
          window.hideAuthGate();
        }
        if (window.switchView) {
          window.switchView('dashboard');
        }
      }, 500);
    } else if (!user) {
      // User signed out, clear local storage
      localStorage.removeItem('pythonMasterUser');
      window._authHandled = false;
    }
  });
}

export { auth, db, firebaseReady };
