const plans = {
  beginner: {
    label: 'Mới bắt đầu', sets: 3, reps: '8–12 lần', rest: '90 giây',
    days: [
      { name: 'Toàn thân A', muscles: ['Ngực', 'Lưng', 'Chân', 'Core'], exercises: ['Goblet squat', 'Dumbbell bench press', 'Lat pulldown', 'Romanian deadlift', 'Dead bug'] },
      { name: 'Toàn thân B', muscles: ['Chân', 'Vai', 'Lưng', 'Core'], exercises: ['Leg press', 'Seated cable row', 'Dumbbell shoulder press', 'Glute bridge', 'Plank'] },
      { name: 'Toàn thân C', muscles: ['Ngực', 'Lưng', 'Chân', 'Tay'], exercises: ['Split squat', 'Incline dumbbell press', 'One-arm dumbbell row', 'Hip thrust', 'Biceps curl'] }
    ],
    extendedDays: {
      4: [
        { name: 'Thân trên A', muscles: ['Ngực', 'Lưng', 'Vai', 'Core'], exercises: ['Dumbbell bench press', 'Lat pulldown', 'Dumbbell shoulder press', 'Seated cable row', 'Dead bug'] },
        { name: 'Thân dưới A', muscles: ['Đùi trước', 'Đùi sau', 'Mông', 'Core'], exercises: ['Goblet squat', 'Romanian deadlift', 'Glute bridge', 'Standing calf raise', 'Plank'] },
        { name: 'Thân trên B', muscles: ['Ngực', 'Lưng', 'Vai', 'Tay'], exercises: ['Push-up', 'One-arm dumbbell row', 'Lateral raise', 'Biceps curl', 'Triceps pushdown'] },
        { name: 'Thân dưới B', muscles: ['Đùi trước', 'Đùi sau', 'Mông', 'Core'], exercises: ['Split squat', 'Hip thrust', 'Glute bridge', 'Single-leg calf raise', 'Dead bug'] }
      ],
      5: [
        { name: 'Thân trên A', muscles: ['Ngực', 'Lưng', 'Vai', 'Core'], exercises: ['Dumbbell bench press', 'Lat pulldown', 'Dumbbell shoulder press', 'Seated cable row', 'Dead bug'] },
        { name: 'Thân dưới A', muscles: ['Đùi trước', 'Đùi sau', 'Mông', 'Core'], exercises: ['Goblet squat', 'Romanian deadlift', 'Glute bridge', 'Standing calf raise', 'Plank'] },
        { name: 'Thể lực nhẹ & core', muscles: ['Core', 'Tim mạch', 'Phục hồi'], exercises: ['Đi bộ nhanh', 'Dead bug', 'Bird dog', 'Giãn cơ hông'], prescriptions: ['20–30 phút', '3 × 8 mỗi bên', '3 × 8 mỗi bên', '30 giây mỗi bên'], duration: '30–40' },
        { name: 'Thân trên B', muscles: ['Ngực', 'Lưng', 'Vai', 'Tay'], exercises: ['Push-up', 'One-arm dumbbell row', 'Lateral raise', 'Biceps curl', 'Triceps pushdown'] },
        { name: 'Thân dưới B', muscles: ['Đùi trước', 'Đùi sau', 'Mông', 'Core'], exercises: ['Split squat', 'Hip thrust', 'Glute bridge', 'Single-leg calf raise', 'Dead bug'] }
      ],
      6: [
        { name: 'Thân trên A', muscles: ['Ngực', 'Lưng', 'Vai', 'Core'], exercises: ['Dumbbell bench press', 'Lat pulldown', 'Dumbbell shoulder press', 'Seated cable row', 'Dead bug'] },
        { name: 'Thân dưới A', muscles: ['Đùi trước', 'Đùi sau', 'Mông', 'Core'], exercises: ['Goblet squat', 'Romanian deadlift', 'Glute bridge', 'Standing calf raise', 'Plank'] },
        { name: 'Thể lực nhẹ & core', muscles: ['Core', 'Tim mạch', 'Phục hồi'], exercises: ['Đi bộ nhanh', 'Dead bug', 'Bird dog', 'Giãn cơ hông'], prescriptions: ['20–30 phút', '3 × 8 mỗi bên', '3 × 8 mỗi bên', '30 giây mỗi bên'], duration: '30–40' },
        { name: 'Thân trên B', muscles: ['Ngực', 'Lưng', 'Vai', 'Tay'], exercises: ['Push-up', 'One-arm dumbbell row', 'Lateral raise', 'Biceps curl', 'Triceps pushdown'] },
        { name: 'Thân dưới B', muscles: ['Đùi trước', 'Đùi sau', 'Mông', 'Core'], exercises: ['Split squat', 'Hip thrust', 'Glute bridge', 'Single-leg calf raise', 'Dead bug'] },
        { name: 'Phục hồi chủ động', muscles: ['Tim mạch', 'Linh hoạt'], exercises: ['Đi bộ thư giãn', 'Cat-cow', 'Giãn cơ toàn thân'], prescriptions: ['20–30 phút', '2 × 8 nhịp', '30 giây mỗi bên'], duration: '20–30' }
      ]
    }
  },
  intermediate: {
    label: 'Cơ bản / trung cấp', sets: 4, reps: '6–12 lần', rest: '90–120 giây',
    days: [
      { name: 'Thân trên A', muscles: ['Ngực', 'Lưng', 'Vai', 'Tay'], exercises: ['Barbell bench press', 'Lat pulldown', 'Seated dumbbell shoulder press', 'Cable row', 'Triceps rope pushdown'] },
      { name: 'Thân dưới A', muscles: ['Đùi trước', 'Đùi sau', 'Mông', 'Core'], exercises: ['Back squat', 'Romanian deadlift', 'Leg extension', 'Lying leg curl', 'Hanging knee raise'] },
      { name: 'Thân trên B', muscles: ['Ngực', 'Lưng', 'Vai', 'Tay'], exercises: ['Incline dumbbell press', 'Chest-supported row', 'Lateral raise', 'Face pull', 'Dumbbell curl'] },
      { name: 'Thân dưới B', muscles: ['Đùi trước', 'Đùi sau', 'Mông', 'Bắp chân'], exercises: ['Leg press', 'Hip thrust', 'Bulgarian split squat', 'Seated leg curl', 'Standing calf raise'] },
      { name: 'Thể lực & core', muscles: ['Core', 'Tim mạch', 'Phục hồi'], exercises: ['Đạp xe nhẹ', 'Pallof press', 'Plank'], prescriptions: ['20–30 phút', '3 × 10 mỗi bên', '3 × 30–45 giây'], duration: '30–40' },
      { name: 'Phụ trợ thân trên', muscles: ['Vai', 'Tay', 'Core'], exercises: ['Lateral raise', 'Dumbbell curl', 'Triceps rope pushdown', 'Face pull', 'Side plank'] }
    ]
  },
  athlete: {
    label: 'Vận động viên', sets: 4, reps: '3–8 lần', rest: '2–3 phút',
    days: [
      { name: 'Sức mạnh thân trên', muscles: ['Ngực', 'Lưng', 'Vai', 'Tay'], exercises: ['Barbell bench press', 'Weighted pull-up', 'Overhead press', 'Barbell row', 'Pallof press'] },
      { name: 'Sức mạnh thân dưới', muscles: ['Đùi trước', 'Đùi sau', 'Mông', 'Core'], exercises: ['Back squat', 'Romanian deadlift', 'Bulgarian split squat', 'Nordic curl', 'Farmer carry'] },
      { name: 'Kỹ thuật & bùng nổ', muscles: ['Toàn thân', 'Chân', 'Core'], exercises: ['Box jump', 'Medicine ball slam', 'Kettlebell swing', 'Sled push', 'Single-leg balance'] },
      { name: 'Thân trên âm lượng', muscles: ['Ngực', 'Lưng', 'Vai', 'Tay'], exercises: ['Incline bench press', 'Chin-up', 'Dumbbell row', 'Lateral raise', 'Face pull'] },
      { name: 'Thân dưới âm lượng', muscles: ['Đùi trước', 'Đùi sau', 'Mông', 'Bắp chân'], exercises: ['Front squat', 'Hip thrust', 'Walking lunge', 'Leg curl', 'Calf raise'] },
      { name: 'Phục hồi & thể lực nhẹ', muscles: ['Tim mạch', 'Linh hoạt', 'Core'], exercises: ['Đạp xe phục hồi', 'Giãn cơ hông', 'Dead bug'], prescriptions: ['20–30 phút nhẹ', '30 giây mỗi bên', '3 × 8 mỗi bên'], duration: '20–30' }
    ]
  }
};

const exerciseLibrary = [
  { name: 'Barbell bench press', muscle: 'Ngực', equipment: 'Thanh đòn', description: 'Phát triển sức đẩy và cơ ngực. Giữ bả vai ổn định.' },
  { name: 'Dumbbell bench press', muscle: 'Ngực', equipment: 'Tạ đơn', description: 'Biên độ chuyển động rộng, dễ điều chỉnh tải.' },
  { name: 'Incline dumbbell press', muscle: 'Ngực', equipment: 'Tạ đơn + ghế dốc', description: 'Nhấn mạnh vùng ngực trên, kiểm soát hạ tạ.' },
  { name: 'Push-up', muscle: 'Ngực', equipment: 'Trọng lượng cơ thể', description: 'Giữ thân người thành một đường thẳng.' },
  { name: 'Lat pulldown', muscle: 'Lưng', equipment: 'Máy kéo cáp', description: 'Kéo khuỷu tay xuống, tránh ngả lưng quá sâu.' },
  { name: 'Seated cable row', muscle: 'Lưng', equipment: 'Máy kéo cáp', description: 'Kéo về ngang thân, siết bả vai ở cuối động tác.' },
  { name: 'One-arm dumbbell row', muscle: 'Lưng', equipment: 'Tạ đơn + ghế', description: 'Giữ lưng trung lập và kéo tạ sát hông.' },
  { name: 'Pull-up', muscle: 'Lưng', equipment: 'Xà đơn', description: 'Bắt đầu từ vai ổn định, không vung người.' },
  { name: 'Back squat', muscle: 'Chân', equipment: 'Thanh đòn', description: 'Chân bám sàn, gối đi cùng hướng mũi chân.' },
  { name: 'Goblet squat', muscle: 'Chân', equipment: 'Tạ đơn', description: 'Phù hợp làm quen squat, giữ ngực mở.' },
  { name: 'Romanian deadlift', muscle: 'Chân', equipment: 'Thanh đòn hoặc tạ đơn', description: 'Đẩy hông ra sau, giữ tạ gần chân.' },
  { name: 'Hip thrust', muscle: 'Mông', equipment: 'Thanh đòn hoặc tạ đơn', description: 'Duỗi hông có kiểm soát, không ưỡn lưng.' },
  { name: 'Bulgarian split squat', muscle: 'Chân', equipment: 'Tạ đơn hoặc cơ thể', description: 'Tập từng bên để cải thiện sức mạnh và thăng bằng.' },
  { name: 'Overhead press', muscle: 'Vai', equipment: 'Thanh đòn hoặc tạ đơn', description: 'Giữ xương sườn ổn định khi đẩy qua đầu.' },
  { name: 'Lateral raise', muscle: 'Vai', equipment: 'Tạ đơn', description: 'Nâng đến ngang vai, dùng tải vừa phải.' },
  { name: 'Face pull', muscle: 'Vai', equipment: 'Dây cáp hoặc dây kháng lực', description: 'Kéo dây về ngang mặt, khuỷu mở sang hai bên.' },
  { name: 'Biceps curl', muscle: 'Tay', equipment: 'Tạ đơn hoặc dây', description: 'Giữ khuỷu gần thân, hạ tạ chậm.' },
  { name: 'Triceps pushdown', muscle: 'Tay', equipment: 'Dây cáp hoặc dây kháng lực', description: 'Duỗi khuỷu xuống, giữ vai thư giãn.' },
  { name: 'Plank', muscle: 'Core', equipment: 'Trọng lượng cơ thể', description: 'Siết bụng và mông, tránh võng lưng.' },
  { name: 'Dead bug', muscle: 'Core', equipment: 'Trọng lượng cơ thể', description: 'Giữ lưng dưới áp sàn khi duỗi tay chân.' },
  { name: 'Pallof press', muscle: 'Core', equipment: 'Dây cáp hoặc dây kháng lực', description: 'Chống xoay thân người trong suốt động tác.' },
  { name: 'Standing calf raise', muscle: 'Bắp chân', equipment: 'Máy hoặc bậc thềm', description: 'Hạ gót chậm và nâng hết biên độ.' }
];

const labels = { muscle: 'Tăng cơ', strength: 'Tăng sức mạnh', fatloss: 'Giảm mỡ, giữ cơ', fitness: 'Sức khỏe toàn diện' };
const shortDayNames = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
const trainingDayIndices = { 2: [1, 4], 3: [0, 2, 4], 4: [0, 1, 3, 5], 5: [0, 1, 2, 4, 5], 6: [0, 1, 2, 3, 4, 5] };
const defaultProfile = { level: 'beginner', goal: 'muscle', days: 3, equipment: 'gym', weight: 65, focus: 'balanced', fontFamily: 'forme' };
const authConfig = window.FORME_SUPABASE_CONFIG || {};
const authSessionKey = 'forme-auth-session-v1';
const USERNAME_DOMAIN = 'forme.app';

function normalizeUsername(value) {
  return String(value || '').trim().toLowerCase();
}

function isValidUsername(value) {
  const normalized = normalizeUsername(value);
  if (!normalized) return false;
  if (normalized.includes('@')) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
  }
  return /^[a-z0-9_.-]{3,30}$/.test(normalized);
}

function usernameToAuthEmail(value) {
  const normalized = normalizeUsername(value);
  if (!normalized) return '';
  if (normalized.includes('@')) return normalized;
  const safePart = normalized.replace(/[^a-z0-9_.-]/g, '');
  return `${safePart}@${USERNAME_DOMAIN}`;
}

function getDisplayUsername(user) {
  if (!user) return '';
  if (user.user_metadata?.username) {
    return user.user_metadata.username;
  }
  const email = String(user.email || '');
  if (email.endsWith(`@${USERNAME_DOMAIN}`)) {
    return email.slice(0, -(USERNAME_DOMAIN.length + 1));
  }
  return email || 'Tài khoản';
}

let profile = { ...defaultProfile };
let completed = [];
let activeFilter = 'Tất cả';
let toastTimer;
let authSession;
let authUser;
let authSyncQueue = Promise.resolve();
let authMode = 'login';
let coachAssessment;
let coachMessages = [];
let coachConversationId = 0;
let coachPhase = 'health';
let coachBusy = false;
let coachConsent = false;
let coachFailedTurn;

function readStorage(userId) {
  try { return JSON.parse(localStorage.getItem(`forme-coach-v1:${userId}`)) || {}; }
  catch { return {}; }
}
function saveStorage() {
  if (!authUser) return;
  try { localStorage.setItem(`forme-coach-v1:${authUser.id}`, JSON.stringify({ profile, completed })); }
  catch { showToast('Không thể lưu trên trình duyệt này.'); }
  if (authSession) syncAccountData().catch(error => showToast(`Không thể đồng bộ dữ liệu: ${error.message}`));
}
function getSupabaseUrl() { return String(authConfig.url || '').replace(/\/+$/, ''); }
function isSupabaseConfigured() { return Boolean(getSupabaseUrl() && authConfig.anonKey); }
function setAuthStatus(message, isError = false) {
  const status = document.querySelector('#auth-status');
  status.textContent = message;
  status.classList.toggle('is-error', isError);
}
function setAuthMode(mode) {
  authMode = mode;
  const isSignup = mode === 'signup';
  document.querySelectorAll('[data-auth-mode]').forEach(button => button.classList.toggle('is-active', button.dataset.authMode === mode));
  document.querySelector('#auth-title').innerHTML = isSignup ? 'Bắt đầu <span>hành trình.</span>' : 'Chào mừng <span>trở lại.</span>';
  document.querySelector('#auth-description').textContent = isSignup
    ? 'Tạo tài khoản bằng tên đăng nhập để lưu lịch tập và tiến độ.'
    : 'Đăng nhập để tiếp tục hành trình tập luyện của bạn.';
  document.querySelector('#auth-submit').innerHTML = `${isSignup ? 'Tạo tài khoản' : 'Đăng nhập'} <i data-lucide="arrow-right"></i>`;
  document.querySelector('#auth-password').autocomplete = isSignup ? 'new-password' : 'current-password';
  document.querySelector('#auth-password').setAttribute('minlength', isSignup ? '8' : '1');
  document.querySelector('#auth-forgot').classList.toggle('hidden', isSignup);
  renderIcons();
  setAuthStatus('');
}
function makeAuthError(data, fallback) {
  const message = data?.msg || data?.message || data?.error_description || data?.error;
  if (!message) return new Error(fallback);
  const lower = String(message).toLowerCase();
  if (lower.includes('invalid login credentials')) return new Error('Tên đăng nhập hoặc mật khẩu chưa chính xác.');
  if (lower.includes('user already registered')) return new Error('Tên đăng nhập này đã được sử dụng. Hãy chọn tên khác hoặc đăng nhập.');
  if (lower.includes('password should be at least')) return new Error('Mật khẩu cần có ít nhất 8 ký tự.');
  if (lower.includes('email not confirmed')) return new Error('Tài khoản chưa thể đăng nhập vì tính năng xác nhận email đang bật trên Supabase. Hãy vào Supabase Dashboard → Authentication → Providers → Email và TẮT mục "Confirm email".');
  return new Error(message);
}
async function supabaseRequest(path, { method = 'GET', body, accessToken, headers = {} } = {}) {
  if (!isSupabaseConfigured()) throw new Error('Chưa cấu hình kết nối Supabase.');
  let response;
  try {
    response = await fetch(`${getSupabaseUrl()}${path}`, {
      method,
      headers: {
        apikey: authConfig.anonKey,
        'Content-Type': 'application/json',
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
        ...headers
      },
      ...(body === undefined ? {} : { body: JSON.stringify(body) })
    });
  } catch {
    throw new Error('Không thể kết nối Supabase. Kiểm tra mạng và địa chỉ dự án.');
  }
  const result = await response.json().catch(() => null);
  if (!response.ok) {
    const error = makeAuthError(result, `Yêu cầu thất bại (${response.status}).`);
    if (path.startsWith('/functions/v1/forme-coach')) {
      const message = error.message.toLowerCase();
      if (response.status === 404 || message.includes('requested function was not found')) {
        throw new Error('AI Coach chưa được triển khai trên Supabase. Hãy triển khai Edge Function “forme-coach” theo hướng dẫn trong SUPABASE_SETUP.md rồi thử lại.');
      }
      if (message.includes('chưa được cấu hình đầy đủ')) {
        throw new Error('AI Coach chưa có cấu hình OpenAI trên Supabase. Hãy thiết lập AI_API_KEY và AI_MODEL trong Supabase Secrets.');
      }
      if (response.status === 401 || response.status === 403) {
        throw new Error('Phiên đăng nhập chưa hợp lệ hoặc đã hết hạn. Hãy đăng xuất rồi đăng nhập lại.');
      }
    }
    throw error;
  }
  return result;
}
function saveAuthSession(session) {
  authSession = {
    ...session,
    expires_at: session.expires_at || Math.floor(Date.now() / 1000) + (session.expires_in || 3600)
  };
  authUser = session.user || authUser;
  try { localStorage.setItem(authSessionKey, JSON.stringify(authSession)); }
  catch { setAuthStatus('Không thể lưu phiên đăng nhập trên trình duyệt này.', true); }
}
function clearAuthSession() {
  authSession = null;
  authUser = null;
  try { localStorage.removeItem(authSessionKey); }
  catch { setAuthStatus('Không thể xóa phiên đăng nhập khỏi trình duyệt.', true); }
}
async function refreshAuthSession() {
  if (!authSession?.refresh_token) throw new Error('Phiên đăng nhập hết hạn. Hãy đăng nhập lại.');
  const session = await supabaseRequest('/auth/v1/token?grant_type=refresh_token', {
    method: 'POST',
    body: { refresh_token: authSession.refresh_token }
  });
  saveAuthSession(session);
}
async function ensureFreshSession() {
  if (!authSession) throw new Error('Bạn chưa đăng nhập.');
  if (authSession.expires_at <= Math.floor(Date.now() / 1000) + 60) await refreshAuthSession();
}
async function loadAccountData() {
  const stored = readStorage(authUser.id);
  const rows = await supabaseRequest(`/rest/v1/forme_user_data?select=profile,completed&user_id=eq.${encodeURIComponent(authUser.id)}&limit=1`, {
    accessToken: authSession.access_token
  });
  if (rows.length) {
    profile = { ...defaultProfile, ...rows[0].profile };
    completed = Array.isArray(rows[0].completed) ? rows[0].completed : [];
  } else {
    profile = { ...defaultProfile, ...(stored.profile || {}) };
    completed = Array.isArray(stored.completed) ? stored.completed : [];
    await syncAccountData();
  }
  try { localStorage.setItem(`forme-coach-v1:${authUser.id}`, JSON.stringify({ profile, completed })); }
  catch { showToast('Không thể lưu bản sao dữ liệu trên trình duyệt này.'); }
}
function syncAccountData() {
  if (!authSession || !authUser) return Promise.resolve();
  const snapshot = { user_id: authUser.id, profile, completed, updated_at: new Date().toISOString() };
  authSyncQueue = authSyncQueue.catch(() => {}).then(async () => {
    await ensureFreshSession();
    await supabaseRequest('/rest/v1/forme_user_data?on_conflict=user_id', {
      method: 'POST',
      accessToken: authSession.access_token,
      headers: { Prefer: 'resolution=merge-duplicates,return=minimal' },
      body: snapshot
    });
  });
  return authSyncQueue;
}
async function showAuthenticatedApp(session) {
  saveAuthSession(session);
  if (!authUser) throw new Error('Không nhận được thông tin tài khoản từ Supabase.');
  await ensureFreshSession();
  await loadAccountData();
  applyFontPreference();
  const displayName = getDisplayUsername(authUser);
  const accountEmailEl = document.querySelector('#account-email');
  if (accountEmailEl) accountEmailEl.textContent = displayName;
  const accountUsernameEl = document.querySelector('#account-username');
  if (accountUsernameEl) accountUsernameEl.textContent = displayName;
  document.querySelector('#auth-screen').classList.add('hidden');
  document.querySelector('#app-shell').classList.remove('hidden');
  refreshViews();
  renderLibrary();
}
async function restoreAuth() {
  try {
    const storedSession = JSON.parse(localStorage.getItem(authSessionKey));
    if (!storedSession?.access_token || !storedSession?.refresh_token) return false;
    saveAuthSession(storedSession);
    await ensureFreshSession();
    await showAuthenticatedApp(authSession);
    return true;
  } catch (error) {
    clearAuthSession();
    setAuthStatus(`Không thể khôi phục phiên đăng nhập: ${error.message}`, true);
    return false;
  }
}
function getPlan() {
  const template = plans[profile.level] || plans.beginner;
  const dayCount = Number(profile.days);
  let workouts = profile.level === 'beginner' && dayCount > 3
    ? template.extendedDays[dayCount]
    : template.days.slice(0, dayCount);
  if (profile.focus !== 'balanced') {
    const focusLabel = { chest: 'Ngực', back: 'Lưng', legs: 'Chân', core: 'Core' }[profile.focus];
    const focusExercises = {
      chest: ['Dumbbell bench press', 'Incline dumbbell press', 'Push-up'],
      back: ['Lat pulldown', 'Seated cable row', 'One-arm dumbbell row'],
      legs: ['Goblet squat', 'Romanian deadlift', 'Hip thrust'],
      core: ['Dead bug', 'Plank', 'Pallof press']
    }[profile.focus];
    workouts = workouts.map((workout, index) => {
      if (index % 2 === 0) {
        const existing = workout.exercises.filter(name => !focusExercises.includes(name));
        const updated = [...workout.exercises];
        updated[Math.min(1, updated.length - 1)] = focusExercises[index % focusExercises.length];
        return { ...workout, exercises: updated, muscles: [...new Set([...workout.muscles, focusLabel])] };
      }
      return workout;
    });
  }
  const equipmentReplacements = {
    dumbbells: {
      'Barbell bench press': 'Dumbbell bench press', 'Weighted pull-up': 'One-arm dumbbell row',
      'Pull-up': 'One-arm dumbbell row', 'Chin-up': 'One-arm dumbbell row', 'Lat pulldown': 'One-arm dumbbell row',
      'Seated cable row': 'One-arm dumbbell row', 'Cable row': 'One-arm dumbbell row', 'Chest-supported row': 'One-arm dumbbell row',
      'Barbell row': 'One-arm dumbbell row', 'Back squat': 'Goblet squat', 'Front squat': 'Goblet squat',
      'Leg press': 'Goblet squat', 'Leg extension': 'Split squat', 'Leg curl': 'Dumbbell Romanian deadlift',
      'Lying leg curl': 'Dumbbell Romanian deadlift', 'Seated leg curl': 'Dumbbell Romanian deadlift', 'Nordic curl': 'Glute bridge',
      'Incline bench press': 'Incline dumbbell press', 'Kettlebell swing': 'Dumbbell swing', 'Overhead press': 'Dumbbell shoulder press',
      'Seated dumbbell shoulder press': 'Dumbbell shoulder press', 'Face pull': 'Bent-over reverse fly',
      'Triceps rope pushdown': 'Dumbbell overhead extension', 'Pallof press': 'Side plank',
      'Medicine ball slam': 'Dumbbell push press', 'Sled push': 'Farmer carry', 'Standing calf raise': 'Single-leg calf raise'
    },
    bodyweight: {
      'Barbell bench press': 'Push-up', 'Dumbbell bench press': 'Push-up', 'Incline dumbbell press': 'Push-up',
      'Weighted pull-up': 'Prone W raise', 'Pull-up': 'Prone W raise', 'Chin-up': 'Prone W raise',
      'Lat pulldown': 'Prone Y-T-W raise', 'Seated cable row': 'Prone Y-T-W raise', 'Cable row': 'Prone Y-T-W raise',
      'Chest-supported row': 'Prone Y-T-W raise', 'Barbell row': 'Prone Y-T-W raise', 'Dumbbell row': 'Prone reverse fly', 'One-arm dumbbell row': 'Prone reverse fly',
      'Back squat': 'Bodyweight squat', 'Front squat': 'Bodyweight squat', 'Goblet squat': 'Bodyweight squat',
      'Leg press': 'Reverse lunge', 'Leg extension': 'Reverse lunge', 'Romanian deadlift': 'Single-leg glute bridge',
      'Dumbbell Romanian deadlift': 'Single-leg glute bridge', 'Nordic curl': 'Glute bridge',
      'Lying leg curl': 'Glute bridge', 'Seated leg curl': 'Glute bridge', 'Hip thrust': 'Single-leg glute bridge',
      'Dumbbell shoulder press': 'Pike push-up', 'Seated dumbbell shoulder press': 'Pike push-up',
      'Overhead press': 'Pike push-up', 'Lateral raise': 'Pike push-up', 'Face pull': 'Prone Y-T-W raise',
      'Biceps curl': 'Reverse snow angel', 'Dumbbell curl': 'Self-resisted biceps curl', 'Triceps rope pushdown': 'Close-grip push-up',
      'Hanging knee raise': 'Dead bug', 'Pallof press': 'Side plank', 'Farmer carry': 'Bear crawl',
      'Box jump': 'Squat jump', 'Medicine ball slam': 'Burpee', 'Kettlebell swing': 'Squat jump',
      'Sled push': 'Mountain climber', 'Standing calf raise': 'Single-leg calf raise'
    }
  };
  const replacements = equipmentReplacements[profile.equipment];
  if (replacements) workouts = workouts.map(workout => ({ ...workout, exercises: workout.exercises.map(name => replacements[name] || name) }));
  return { template, workouts };
}
function getWeekDates() {
  const now = new Date();
  const mondayOffset = (now.getDay() + 6) % 7;
  const monday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - mondayOffset);
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);
    return date;
  });
}
function formatDate(date) { return date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' }); }
function getScheduledSessions(workouts, dates) {
  return (trainingDayIndices[workouts.length] || trainingDayIndices[3]).map((dayIndex, workoutIndex) => ({
    date: dates[dayIndex],
    dayIndex,
    workout: workouts[workoutIndex]
  }));
}
function workoutDateId(date, index) { return `${date.toISOString().slice(0, 10)}-${index}`; }
function renderWorkoutRow(workout, date, index) {
  const id = workoutDateId(date, index);
  const done = completed.includes(id);
  const detail = `${workout.muscles.slice(0, 3).join(' · ')}${workout.muscles.length > 3 ? ' · ...' : ''}`;
  const duration = workout.duration || (profile.level === 'athlete' ? '60–75' : '40–60');
  return `<article class="workout-row"><div class="day-block"><strong>${date.getDate()}</strong><small>${shortDayNames[date.getDay()]}</small></div><div><p class="workout-title">${workout.name}${done ? ' <span class="done-label">· Đã xong</span>' : ''}</p><p class="workout-detail">${detail}</p></div><span class="workout-meta">${workout.exercises.length} bài · ${duration} phút</span><button class="complete-button ${done ? 'done' : ''}" data-complete="${id}" title="${done ? 'Bỏ đánh dấu hoàn thành' : 'Đánh dấu hoàn thành'}" aria-label="${done ? 'Bỏ đánh dấu hoàn thành' : 'Đánh dấu hoàn thành'}"><i data-lucide="check"></i></button></article>`;
}
function renderOverview() {
  const { workouts } = getPlan();
  const dates = getWeekDates();
  const planned = getScheduledSessions(workouts, dates);
  const doneCount = planned.filter(({ date, dayIndex }) => completed.includes(workoutDateId(date, dayIndex))).length;
  document.querySelector('#metric-days').innerHTML = `${workouts.length} <small>buổi</small>`;
  document.querySelector('#metric-goal').textContent = labels[profile.goal];
  document.querySelector('#completed-label').textContent = `${doneCount} / ${planned.length} buổi hoàn thành`;
  document.querySelector('#progress-percent').textContent = `${planned.length ? Math.round(doneCount / planned.length * 100) : 0}%`;
  document.querySelector('#workout-progress').style.width = `${planned.length ? doneCount / planned.length * 100 : 0}%`;
  document.querySelector('#overview-workouts').innerHTML = planned.map(({ date, dayIndex, workout }) => renderWorkoutRow(workout, date, dayIndex)).join('');
  document.querySelector('#week-range').textContent = `${formatDate(dates[0])} – ${formatDate(dates[6])}`;
  const counts = {};
  workouts.forEach(workout => workout.muscles.forEach(muscle => { counts[muscle] = (counts[muscle] || 0) + 1; }));
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const max = Math.max(...entries.map(([, count]) => count), 1);
  document.querySelector('#muscle-bars').innerHTML = entries.map(([muscle, count]) => `<div class="muscle-row"><span class="muscle-name">${muscle}</span><div class="muscle-track"><span style="width:${Math.max(17, count / max * 100)}%"></span></div><span class="muscle-value">${count} buổi</span></div>`).join('');
}
function renderCoachPanel(workout) {
  const message = workout.muscles.includes('Phục hồi')
    ? 'Hôm nay ưu tiên chuyển động nhẹ và phục hồi; dừng nếu cơ thể thấy đau.'
    : {
      muscle: 'Chọn mức tạ còn dư 1–2 lần lặp để giữ kỹ thuật và tăng cơ đều.',
      strength: 'Khởi động kỹ, tăng tải từ từ và nghỉ đủ giữa các hiệp nặng.',
      fatloss: 'Giữ nhịp ổn định; tập đúng kỹ thuật quan trọng hơn tập đến kiệt sức.',
      fitness: 'Thở đều, tập trong biên độ thoải mái và duy trì nhịp độ vừa sức.'
    }[profile.goal];
  const suggestions = workout.exercises;
  return `<section class="ai-coach-card"><img class="ai-coach-avatar" src="assets/forme-coach.svg" alt="Huấn luyện viên anime FORME"><div class="ai-coach-content"><div class="ai-coach-heading"><span>FORME AI COACH</span><span class="coach-live"><i></i> GỢI Ý HÔM NAY</span></div><p class="ai-coach-message">${message}</p><div class="ai-coach-suggestions">${suggestions.map((exercise, index) => {
    const videoQuery = encodeURIComponent(`${exercise} hướng dẫn tập đúng kỹ thuật`);
    return `<article class="ai-coach-suggestion"><span class="suggestion-number">0${index + 1}</span><strong>${exercise}</strong><a href="https://www.youtube.com/results?search_query=${videoQuery}" target="_blank" rel="noopener noreferrer" aria-label="Xem video hướng dẫn ${exercise}"><i data-lucide="circle-play"></i><span>Video</span></a></article>`;
  }).join('')}</div></div></section>`;
}
function renderPlan() {
  const { template, workouts } = getPlan();
  const dates = getWeekDates();
  const equipmentLabels = { gym: 'Phòng gym', dumbbells: 'Tạ đơn / dây', bodyweight: 'Trọng lượng cơ thể' };
  document.querySelector('#plan-summary').innerHTML = `<i data-lucide="sparkles"></i><span>Giáo án <strong>${template.label}</strong> · <strong>${labels[profile.goal]}</strong> · ${workouts.length} buổi/tuần · ${equipmentLabels[profile.equipment]}</span>`;
  document.querySelector('#full-workouts').innerHTML = getScheduledSessions(workouts, dates).map(({ workout, date, dayIndex }) => {
    const id = workoutDateId(date, dayIndex);
    const done = completed.includes(id);
    return `<article class="full-workout-card"><div class="workout-row"><div class="day-block"><strong>${date.getDate()}</strong><small>${shortDayNames[date.getDay()]}</small></div><div><p class="workout-title">${workout.name}${done ? ' <span class="done-label">· Đã xong</span>' : ''}</p><p class="workout-detail">${workout.muscles.join(' · ')}</p></div><button class="complete-button ${done ? 'done' : ''}" data-complete="${id}" title="${done ? 'Bỏ đánh dấu hoàn thành' : 'Đánh dấu hoàn thành'}" aria-label="${done ? 'Bỏ đánh dấu hoàn thành' : 'Đánh dấu hoàn thành'}"><i data-lucide="check"></i></button></div><div class="exercise-lines">${workout.exercises.map((exercise, exerciseIndex) => `<div class="exercise-line"><span>${exercise}</span><small>${workout.prescriptions?.[exerciseIndex] || `${template.sets} hiệp × ${template.reps}`}</small></div>`).join('')}</div><div class="workout-card-foot"><span><i data-lucide="timer"></i> Nghỉ ${template.rest} giữa các hiệp</span><span>${workout.duration || (profile.level === 'athlete' ? '60–75' : '40–60')} phút</span></div>${renderCoachPanel(workout)}</article>`;
  }).join('');
}
function renderLibrary() {
  const muscles = ['Tất cả', ...new Set(exerciseLibrary.map(exercise => exercise.muscle))];
  document.querySelector('#muscle-filters').innerHTML = muscles.map(muscle => `<button class="filter-chip ${activeFilter === muscle ? 'is-selected' : ''}" data-filter="${muscle}">${muscle}</button>`).join('');
  filterExercises();
}
function filterExercises() {
  const query = document.querySelector('#exercise-search').value.trim().toLocaleLowerCase('vi');
  const results = exerciseLibrary.filter(exercise => (activeFilter === 'Tất cả' || exercise.muscle === activeFilter) && `${exercise.name} ${exercise.muscle} ${exercise.equipment}`.toLocaleLowerCase('vi').includes(query));
  document.querySelector('#exercise-grid').innerHTML = results.length ? results.map(exercise => {
    const videoQuery = encodeURIComponent(`${exercise.name} ${exercise.muscle} hướng dẫn tập đúng kỹ thuật`);
    return `<article class="exercise-card"><div class="exercise-card-top"><span class="exercise-muscle">${exercise.muscle.toUpperCase()}</span></div><h3>${exercise.name}</h3><p>${exercise.description}</p><span class="exercise-equipment"><i data-lucide="dumbbell"></i>${exercise.equipment}</span><a class="exercise-video" href="https://www.youtube.com/results?search_query=${videoQuery}" target="_blank" rel="noopener noreferrer" aria-label="Tìm video mẫu cho ${exercise.name}"><i data-lucide="circle-play"></i><span>Tìm video mẫu</span><i data-lucide="arrow-up-right"></i></a></article>`;
  }).join('') : '<p class="empty-state">Chưa tìm thấy bài tập phù hợp.</p>';
  renderIcons();
}
function renderNutrition() {
  const weight = Math.max(35, Number(profile.weight) || 65);
  const calorieFactor = { muscle: 34, strength: 33, fatloss: 28, fitness: 31 }[profile.goal];
  const calories = Math.round(weight * calorieFactor / 50) * 50;
  const protein = Math.round(weight * 1.8);
  const fats = Math.round(weight * .9);
  const carbs = Math.max(100, Math.round((calories - protein * 4 - fats * 9) / 4));
  const targets = [{ name: 'Đạm', amount: protein, max: Math.max(180, protein), unit: 'g' }, { name: 'Tinh bột', amount: carbs, max: Math.max(300, carbs), unit: 'g' }, { name: 'Chất béo', amount: fats, max: Math.max(90, fats), unit: 'g' }, { name: 'Rau & chất xơ', amount: 400, max: 600, unit: 'g+' }];
  const mealIdeas = {
    muscle: [
      ['Sáng', 'Yến mạch, sữa chua và trứng', 'Yến mạch 60 g, sữa chua Hy Lạp 150 g, chuối và 2 quả trứng.'],
      ['Trưa', 'Cơm gà, rau xanh', 'Cơm chín 200 g, ức gà 150 g, một đĩa rau và trái cây.'],
      ['Trước tập', 'Bánh mì và sữa', 'Bánh mì nguyên cám 2 lát, sữa tươi và một quả chuối.'],
      ['Tối', 'Cá, khoai và rau củ', 'Cá 150 g, khoai lang 200 g, rau củ và một ít dầu ô liu.']
    ],
    strength: [
      ['Sáng', 'Bánh mì trứng và sữa chua', 'Bánh mì nguyên cám 2 lát, 2 quả trứng, sữa chua không đường.'],
      ['Trưa', 'Cơm bò nạc và rau', 'Cơm chín 200 g, bò nạc 150 g, rau xanh và trái cây.'],
      ['Trước tập', 'Chuối và sữa chua', 'Một quả chuối, sữa chua Hy Lạp 150 g; ăn trước tập 60–90 phút.'],
      ['Tối', 'Cá hồi, cơm và rau', 'Cá hồi 130–150 g, cơm chín 150 g, rau củ nhiều màu.']
    ],
    fatloss: [
      ['Sáng', 'Trứng, khoai và rau', '2 quả trứng, khoai lang 150 g, cà chua hoặc rau xanh.'],
      ['Trưa', 'Cơm gà nhiều rau', 'Cơm chín 120–150 g, ức gà 150 g, ít nhất 2 nắm rau.'],
      ['Bữa phụ', 'Sữa chua và trái cây', 'Sữa chua không đường 150 g cùng một phần trái cây tươi.'],
      ['Tối', 'Đậu phụ hoặc cá và rau', 'Đậu phụ 200 g hoặc cá 150 g, rau củ và một phần cơm vừa phải.']
    ],
    fitness: [
      ['Sáng', 'Phở gà thêm rau', 'Một tô vừa, ưu tiên thịt nạc và thêm rau; có thể giảm nước béo.'],
      ['Trưa', 'Cơm cá và rau', 'Cơm chín 150–200 g, cá 150 g, rau xanh và canh.'],
      ['Bữa phụ', 'Sữa và trái cây', 'Một ly sữa hoặc sữa đậu nành không đường cùng trái cây.'],
      ['Tối', 'Đậu phụ, trứng và rau', 'Đậu phụ 150 g, 1–2 quả trứng, rau củ và cơm tùy mức vận động.']
    ]
  }[profile.goal];
  document.querySelector('#nutrition-targets').innerHTML = `<div class="calorie-callout"><span>Năng lượng ước tính mỗi ngày</span><strong>${calories.toLocaleString('vi-VN')} <small>kcal</small></strong></div><div class="nutrient-list">${targets.map(target => `<div class="nutrient-row"><span>${target.name}</span><div class="nutrient-track"><span style="width:${Math.min(target.amount / target.max * 100, 100)}%"></span></div><span class="nutrient-value">${target.amount}${target.unit}</span></div>`).join('')}</div>`;

  const nutritionPanel = document.querySelector('.nutrition-panel');
  if (!document.querySelector('#meal-suggestions-toggle')) {
    nutritionPanel.insertAdjacentHTML('beforeend', '<button class="meal-trigger" id="meal-suggestions-toggle" type="button" aria-label="Mở gợi ý món ăn trong ngày" title="Gợi ý món ăn trong ngày"><i data-lucide="utensils"></i></button>');
  }
  if (!document.querySelector('#meal-suggestions-dialog')) {
    document.body.insertAdjacentHTML('beforeend', '<dialog class="meal-dialog" id="meal-suggestions-dialog" aria-labelledby="meal-dialog-title"><div class="meal-dialog-inner"><header class="meal-dialog-header"><div><p class="eyebrow">DINH DƯỠNG MỤC TIÊU</p><h2 id="meal-dialog-title">Món ăn trong ngày</h2><p class="meal-dialog-goal">Gợi ý cho mục tiêu <strong id="meal-dialog-goal"></strong></p></div><button class="icon-button" id="close-meal-dialog" type="button" aria-label="Đóng gợi ý món ăn"><i data-lucide="x"></i></button></header><div class="meal-dialog-list" id="meal-dialog-list"></div><p class="meal-dialog-note">Khẩu phần chỉ để tham khảo. Có thể đổi thịt, cá hoặc trứng sang đậu phụ, đậu; điều chỉnh theo dị ứng, khẩu vị và tư vấn chuyên môn.</p></div></dialog>');
  }
  document.querySelector('#meal-dialog-goal').textContent = labels[profile.goal];
  document.querySelector('#meal-dialog-list').innerHTML = mealIdeas.map(([time, name, details]) => `<article class="meal-dialog-row"><span class="meal-time">${time}</span><div><h3>${name}</h3><p>${details}</p></div></article>`).join('');

  const recoveryPanel = document.querySelector('.recovery-panel');
  if (!document.querySelector('#stretch-routine-toggle')) {
    recoveryPanel.insertAdjacentHTML('beforeend', '<button class="meal-trigger" id="stretch-routine-toggle" type="button" aria-label="Mở chuỗi giãn cơ toàn thân" title="Chuỗi giãn cơ toàn thân"><i data-lucide="wind"></i></button>');
  }
  if (!document.querySelector('#stretch-routine-dialog')) {
    document.body.insertAdjacentHTML('beforeend', '<dialog class="meal-dialog stretch-dialog" id="stretch-routine-dialog" aria-labelledby="stretch-dialog-title"><div class="meal-dialog-inner"><header class="meal-dialog-header"><div><p class="eyebrow">PHỤC HỒI CHỦ ĐỘNG · 6–8 PHÚT</p><h2 id="stretch-dialog-title">Chuỗi giãn cơ toàn thân</h2><p class="meal-dialog-goal">Thực hiện nhẹ nhàng sau buổi tập.</p></div><button class="icon-button" id="close-stretch-dialog" type="button" aria-label="Đóng chuỗi giãn cơ"><i data-lucide="x"></i></button></header><div class="stretch-list" id="stretch-dialog-list"></div><p class="stretch-safety">Đi chậm vào tư thế, thở đều và chỉ giữ ở mức căng nhẹ, không nhún hoặc cố kéo qua đau. Nếu đau nhói, tê hoặc chóng mặt, dừng lại.</p></div></dialog>');
  }
  const stretches = [
    ['Ngực', 'Giãn ngực ở khung cửa', 'Tựa cẳng tay lên khung cửa, xoay nhẹ thân mình ra ngoài.'],
    ['Lưng', 'Giãn xô nghiêng người', 'Đưa một tay qua đầu, nghiêng thân sang phía đối diện.'],
    ['Hông', 'Giãn cơ gấp hông quỳ', 'Quỳ một gối, siết nhẹ mông và đẩy hông về trước.'],
    ['Đùi sau', 'Gập hông giãn đùi sau', 'Đặt gót chân lên bục thấp, giữ lưng dài rồi gập từ hông.'],
    ['Mông', 'Tư thế số 4 nằm', 'Nằm ngửa, bắt chéo cổ chân lên gối đối diện rồi kéo nhẹ về ngực.'],
    ['Bắp chân', 'Giãn bắp chân với tường', 'Chống tay vào tường, lùi một chân và giữ gót chân chạm sàn.']
  ];
  document.querySelector('#stretch-dialog-list').innerHTML = stretches.map(([area, name, detail]) => `<article class="stretch-row"><span class="stretch-area">${area}</span><div><h4>${name}</h4><p>${detail}</p></div><span class="stretch-duration">20–30 giây<br>mỗi bên</span></article>`).join('');
}
function renderIcons() { if (window.lucide) window.lucide.createIcons(); }
function applyFontPreference() {
  const fontFamily = ['forme', 'system', 'rounded', 'serif'].includes(profile.fontFamily) ? profile.fontFamily : 'forme';
  profile.fontFamily = fontFamily;
  document.documentElement.dataset.fontFamily = fontFamily;
  document.querySelector('#font-family-select').value = fontFamily;
}
function showView(view) {
  document.querySelectorAll('.view-panel').forEach(panel => panel.classList.toggle('hidden', panel.id !== `view-${view}`));
  document.querySelectorAll('.nav-link[data-view]').forEach(button => button.classList.toggle('is-active', button.dataset.view === view));
  document.querySelector('#view-crumb').textContent = { overview: 'Tổng quan', coach: 'AI Coach', plan: 'Lịch tập', library: 'Thư viện bài tập', fuel: 'Dinh dưỡng & nghỉ' }[view];
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function addCoachMessage(role, text) {
  const message = document.createElement('article');
  message.className = `coach-message coach-message-${role}`;
  const label = document.createElement('strong');
  label.textContent = role === 'assistant' ? 'FORME AI Coach' : 'Bạn';
  const content = document.createElement('p');
  content.textContent = text;
  message.append(label, content);
  document.querySelector('#coach-messages').append(message);
  message.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}
function addCoachRetry(error, content, phase) {
  coachFailedTurn = { content, phase, conversationId: coachConversationId };
  const message = document.createElement('article');
  message.className = 'coach-message coach-message-assistant coach-message-error';
  const label = document.createElement('strong');
  label.textContent = 'FORME AI Coach';
  const text = document.createElement('p');
  text.textContent = error.message;
  const retry = document.createElement('button');
  retry.type = 'button';
  retry.className = 'button button-outline coach-retry-button';
  retry.dataset.coachRetry = '';
  retry.textContent = 'Thử lại';
  message.append(label, text, retry);
  document.querySelector('#coach-messages').append(message);
  message.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}
function startCoachConversation() {
  coachConversationId += 1;
  coachConsent = true;
  coachFailedTurn = null;
  coachAssessment = { health: '', planning: '', goal: '', experience: '', days: '', equipment: '', place: '', restrictions: '' };
  coachMessages = [{
    role: 'assistant',
    content: 'Ngay lúc này bạn có đau, chấn thương, bệnh lý hoặc triệu chứng bất thường nào không?'
  }];
  coachPhase = 'health';
  coachBusy = false;
  document.querySelector('#coach-messages').replaceChildren();
  document.querySelector('#coach-start').classList.add('hidden');
  document.querySelector('#coach-alert').classList.add('hidden');
  document.querySelector('#coach-chat-form').classList.add('hidden');
  document.querySelector('#coach-intake-input').disabled = false;
  document.querySelector('#coach-intake-form button[type="submit"]').disabled = false;
  document.querySelector('#coach-intake-form').classList.remove('hidden');
  document.querySelector('#coach-intake-input').placeholder = 'Kể cho mình nghe tình trạng hiện tại...';
  addCoachMessage('assistant', 'Cảm ơn bạn. Mình sẽ hỏi từng câu một và chưa đề xuất bài tập cho đến khi hiểu rõ tình trạng hiện tại. Ngay lúc này bạn có đau, chấn thương, bệnh lý hoặc triệu chứng bất thường nào không?');
}
function stopCoachForSafety(status) {
  const alert = document.querySelector('#coach-alert');
  alert.classList.remove('hidden');
  document.querySelector('#coach-intake-form').classList.add('hidden');
  document.querySelector('#coach-chat-form').classList.add('hidden');
  const heading = alert.querySelector('h2');
  const message = alert.querySelector('p');
  if (status === 'urgent_help') {
    heading.textContent = 'Ưu tiên trợ giúp y tế ngay';
    message.textContent = 'Những gì bạn mô tả có thể cần được đánh giá khẩn cấp. Hãy dừng vận động và liên hệ dịch vụ cấp cứu hoặc cơ sở y tế tại địa phương ngay, đặc biệt nếu triệu chứng đang diễn ra. AI Coach không thể đánh giá hay xử lý tình huống cấp cứu.';
  } else {
    heading.textContent = 'Tạm dừng trước khi lập giáo án';
    message.textContent = 'Với triệu chứng, cơn đau, chấn thương hoặc tình trạng sức khỏe bạn mô tả, AI Coach chưa thể xác nhận việc tập luyện là phù hợp. Hãy tạm dừng hoạt động gây đau và trao đổi với bác sĩ/chuyên gia y tế trước khi bắt đầu hoặc tăng cường độ. Đây là sàng lọc thận trọng, không phải chẩn đoán.';
  }
}
async function sendCoachTurn(content, phase = coachPhase) {
  if (coachBusy || !coachAssessment) return;
  const conversationId = coachConversationId;
  const isRetry = coachFailedTurn?.conversationId === conversationId &&
    coachFailedTurn.phase === phase && coachFailedTurn.content === content;
  if (!isRetry) {
    coachMessages.push({ role: 'user', content });
    addCoachMessage('user', content);
    if (phase === 'health') coachAssessment.health = `${coachAssessment.health}\n${content}`.trim().slice(-4000);
    if (phase === 'goals') coachAssessment.planning = `${coachAssessment.planning}\n${content}`.trim().slice(-4000);
  }
  const input = document.querySelector(phase === 'health' || phase === 'goals' ? '#coach-intake-input' : '#coach-chat-input');
  const form = input.closest('form');
  const button = form.querySelector('button[type="submit"]');
  input.value = '';
  input.disabled = true;
  button.disabled = true;
  coachBusy = true;
  if (phase === 'health' || phase === 'goals') {
    document.querySelector('#coach-intake-form').classList.remove('hidden');
    document.querySelector('#coach-chat-form').classList.add('hidden');
  } else if (phase === 'plan') {
    document.querySelector('#coach-intake-form').classList.add('hidden');
    document.querySelector('#coach-chat-form').classList.add('hidden');
  }
  const pending = document.createElement('p');
  pending.className = 'coach-pending';
  pending.textContent = 'FORME AI Coach đang đọc câu trả lời…';
  document.querySelector('#coach-messages').append(pending);
  let followup;
  try {
    const result = await requestCoachReply(coachMessages.slice(-20), phase);
    if (conversationId !== coachConversationId) return;
    coachFailedTurn = null;
    coachMessages.push({ role: 'assistant', content: result.reply });
    addCoachMessage('assistant', result.reply);
    if (result.safetyStatus === 'urgent_help' || result.safetyStatus === 'medical_review') {
      stopCoachForSafety(result.safetyStatus);
      return;
    }
    if (result.safetyStatus === 'needs_more_info') {
      if (phase !== 'health') coachAssessment.health = `${coachAssessment.health}\n${content}`.trim().slice(-4000);
      coachPhase = 'health';
      document.querySelector('#coach-chat-form').classList.add('hidden');
      document.querySelector('#coach-intake-form').classList.remove('hidden');
      document.querySelector('#coach-intake-input').placeholder = 'Trả lời câu hỏi của Coach...';
      document.querySelector('#coach-intake-input').focus();
      return;
    }
    coachAssessment.safetyStatus = result.safetyStatus;
    if (phase === 'health' && ['safe_to_continue', 'safe_with_restrictions'].includes(result.safetyStatus) && result.phaseComplete) {
      coachPhase = 'goals';
      document.querySelector('#coach-intake-form').classList.remove('hidden');
      document.querySelector('#coach-intake-input').placeholder = 'Trả lời câu hỏi về mục tiêu...';
      return;
    }
    if (phase === 'health' && ['safe_to_continue', 'safe_with_restrictions'].includes(result.safetyStatus)) {
      document.querySelector('#coach-intake-form').classList.remove('hidden');
      document.querySelector('#coach-intake-input').placeholder = 'Trả lời câu hỏi của Coach...';
      return;
    }
    if (phase === 'goals') {
      if (result.phaseComplete) {
        coachPhase = 'plan';
        followup = {
          content: 'Hãy tạo giáo án cá nhân hóa theo thông tin đã cung cấp, gồm khởi động, bài tập, hiệp/lần hoặc thời lượng, thời gian nghỉ, mức gắng sức, cách tăng dần và tiêu chí dừng tập.',
          phase: 'plan'
        };
      } else {
        document.querySelector('#coach-intake-form').classList.remove('hidden');
        document.querySelector('#coach-intake-input').placeholder = 'Trả lời câu hỏi của Coach...';
        document.querySelector('#coach-intake-input').focus();
      }
    } else {
      if (phase === 'plan') coachPhase = 'conversation';
      document.querySelector('#coach-intake-form').classList.add('hidden');
      document.querySelector('#coach-chat-form').classList.remove('hidden');
      document.querySelector('#coach-chat-input').focus();
    }
  } catch (error) {
    if (conversationId !== coachConversationId) return;
    addCoachRetry(error, content, phase);
    if (phase === 'health' || phase === 'goals') document.querySelector('#coach-intake-form').classList.remove('hidden');
    else document.querySelector('#coach-chat-form').classList.remove('hidden');
  } finally {
    if (conversationId === coachConversationId) {
      input.disabled = false;
      button.disabled = false;
      coachBusy = false;
      input.focus();
    }
    pending.remove();
  }
  if (followup && conversationId === coachConversationId) await sendCoachTurn(followup.content, followup.phase);
}
async function requestCoachReply(messages, phase) {
  if (!coachConsent) throw new Error('Cần đồng ý chia sẻ trước khi gửi nội dung đến AI.');
  await ensureFreshSession();
  const result = await supabaseRequest('/functions/v1/forme-coach', {
    method: 'POST',
    accessToken: authSession.access_token,
    body: { assessment: coachAssessment, messages, phase, consent: true }
  });
  const allowedStatuses = ['needs_more_info', 'safe_to_continue', 'safe_with_restrictions', 'medical_review', 'urgent_help'];
  if (typeof result?.reply !== 'string' || !result.reply.trim() || !allowedStatuses.includes(result.safetyStatus) || typeof result.phaseComplete !== 'boolean') {
    throw new Error('AI Coach chưa tạo được phản hồi hợp lệ. Vui lòng thử lại.');
  }
  return result;
}
function resetCoach() {
  coachConversationId += 1;
  coachAssessment = null;
  coachMessages = [];
  coachPhase = 'health';
  coachBusy = false;
  coachConsent = false;
  coachFailedTurn = null;
  document.querySelector('#coach-messages').replaceChildren();
  addCoachMessage('assistant', 'Chào bạn! Trước khi bắt đầu, mình cần xin phép gửi nội dung bạn chia sẻ đến AI bên ngoài để trò chuyện và cá nhân hóa gợi ý. Bạn có thể từ chối hoặc dừng bất cứ lúc nào.');
  document.querySelector('#coach-start').classList.remove('hidden');
  document.querySelector('#coach-intake-form').classList.add('hidden');
  document.querySelector('#coach-intake-input').value = '';
  document.querySelector('#coach-intake-input').disabled = false;
  document.querySelector('#coach-intake-form button[type="submit"]').disabled = false;
  document.querySelector('#coach-chat-form').classList.add('hidden');
  document.querySelector('#coach-chat-input').value = '';
  document.querySelector('#coach-chat-input').disabled = false;
  document.querySelector('#coach-chat-form button[type="submit"]').disabled = false;
  document.querySelector('#coach-alert').classList.add('hidden');
  renderIcons();
}
function openModal() {
  const form = document.querySelector('#plan-form');
  Object.entries(profile).forEach(([name, value]) => { if (form.elements[name]) form.elements[name].value = value; });
  document.querySelector('#plan-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  form.elements.level.focus();
}
function closeModal() { document.querySelector('#plan-modal').classList.add('hidden'); document.body.style.overflow = ''; }
function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}
function refreshViews() { renderOverview(); renderPlan(); renderNutrition(); renderIcons(); }

document.addEventListener('click', event => {
  const authModeButton = event.target.closest('[data-auth-mode]');
  if (authModeButton) setAuthMode(authModeButton.dataset.authMode);
  if (event.target.closest('#font-settings-trigger')) document.querySelector('#font-settings-dialog').showModal();
  if (event.target.id === 'font-settings-dialog') event.target.close();
  const viewButton = event.target.closest('[data-view]');
  if (viewButton) showView(viewButton.dataset.view);
  if (event.target.closest('[data-open-plan]')) openModal();
  if (event.target.closest('#meal-suggestions-toggle')) document.querySelector('#meal-suggestions-dialog').showModal();
  if (event.target.closest('#stretch-routine-toggle')) document.querySelector('#stretch-routine-dialog').showModal();
  if (event.target.closest('#close-meal-dialog')) document.querySelector('#meal-suggestions-dialog').close();
  if (event.target.closest('#close-stretch-dialog')) document.querySelector('#stretch-routine-dialog').close();
  if (event.target.id === 'meal-suggestions-dialog') event.target.close();
  if (event.target.id === 'stretch-routine-dialog') event.target.close();
  if (event.target.closest('#close-modal, #cancel-modal')) closeModal();
  if (event.target.id === 'plan-modal') closeModal();
  const filter = event.target.closest('[data-filter]');
  if (filter) { activeFilter = filter.dataset.filter; renderLibrary(); }
  const completeButton = event.target.closest('[data-complete]');
  if (completeButton) {
    const id = completeButton.dataset.complete;
    completed = completed.includes(id) ? completed.filter(item => item !== id) : [...completed, id];
    saveStorage(); refreshViews();
    showToast(completed.includes(id) ? 'Đã ghi nhận buổi tập. Tiến bộ rất đáng giá!' : 'Đã bỏ ghi nhận buổi tập.');
  }
});
document.querySelector('#plan-form').addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  profile = { ...Object.fromEntries(formData.entries()), fontFamily: profile.fontFamily || 'forme' };
  profile.days = Number(profile.days);
  profile.weight = Number(profile.weight);
  completed = [];
  saveStorage();
  closeModal();
  refreshViews();
  showView('plan');
  showToast('Giáo án cá nhân đã sẵn sàng. Bắt đầu thật vững nhé!');
});
document.querySelector('#exercise-search').addEventListener('input', filterExercises);
document.querySelector('#font-family-select').addEventListener('change', event => {
  profile.fontFamily = event.currentTarget.value;
  applyFontPreference();
  saveStorage();
  showToast('Đã lưu kiểu chữ cho tài khoản của bạn.');
});
document.querySelector('#coach-start-button').addEventListener('click', startCoachConversation);
document.querySelector('#coach-decline-button').addEventListener('click', () => {
  coachConsent = false;
  coachAssessment = null;
  coachMessages = [];
  document.querySelector('#coach-messages').replaceChildren();
  addCoachMessage('assistant', 'Không sao cả. Mình sẽ không gửi nội dung nào đi đâu. Nếu muốn trò chuyện sau này, bạn có thể bắt đầu lại.');
});
document.querySelector('#coach-intake-form').addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('#coach-intake-input');
  const answer = input.value.trim();
  if (!answer || coachBusy) return;
  sendCoachTurn(answer);
});
document.querySelector('#coach-chat-form').addEventListener('submit', async event => {
  event.preventDefault();
  const input = document.querySelector('#coach-chat-input');
  const content = input.value.trim();
  if (!content || !coachAssessment || coachBusy) return;
  sendCoachTurn(content, coachPhase);
});
document.querySelector('#coach-messages').addEventListener('click', event => {
  const retryButton = event.target.closest('[data-coach-retry]');
  if (!retryButton || coachBusy || !coachFailedTurn) return;
  const failedTurn = coachFailedTurn;
  retryButton.disabled = true;
  sendCoachTurn(failedTurn.content, failedTurn.phase);
});
document.querySelector('#coach-reset').addEventListener('click', resetCoach);
document.querySelector('#coach-alert-reset').addEventListener('click', resetCoach);
document.querySelector('#auth-form').addEventListener('submit', async event => {
  event.preventDefault();
  if (!isSupabaseConfigured()) {
    setAuthStatus('Cấu hình URL và anon key Supabase trong js/supabase-config.js để bật đăng nhập.', true);
    return;
  }
  const form = event.currentTarget;
  const submitButton = document.querySelector('#auth-submit');
  const formData = new FormData(form);
  const usernameInput = String(formData.get('username') || formData.get('email') || '').trim();
  const password = String(formData.get('password') || '');

  if (!usernameInput) {
    setAuthStatus('Vui lòng nhập tên đăng nhập.', true);
    const inputEl = document.querySelector('#auth-username') || document.querySelector('#auth-email');
    inputEl?.focus();
    return;
  }

  if (!isValidUsername(usernameInput)) {
    setAuthStatus('Tên đăng nhập từ 3–30 ký tự (chữ cái không dấu, số, dấu gạch dưới _, gạch nối - hoặc chấm .).', true);
    const inputEl = document.querySelector('#auth-username') || document.querySelector('#auth-email');
    inputEl?.focus();
    return;
  }

  const authEmail = usernameToAuthEmail(usernameInput);
  const cleanUsername = usernameInput.includes('@') ? usernameInput.split('@')[0] : usernameInput.toLowerCase();

  submitButton.disabled = true;
  setAuthStatus(authMode === 'signup' ? 'Đang tạo tài khoản…' : 'Đang đăng nhập…');
  try {
    if (authMode === 'signup') {
      const redirectTo = `${window.location.origin}${window.location.pathname}`;
      const result = await supabaseRequest(`/auth/v1/signup?redirect_to=${encodeURIComponent(redirectTo)}`, {
        method: 'POST',
        body: {
          email: authEmail,
          password,
          data: { username: cleanUsername }
        }
      });
      if (!result?.access_token) {
        setAuthMode('login');
        const inputEl = document.querySelector('#auth-username') || document.querySelector('#auth-email');
        if (inputEl) inputEl.value = usernameInput;
        setAuthStatus('Tài khoản đã tạo thành công! Hãy đăng nhập bằng tên đăng nhập và mật khẩu vừa tạo.');
        return;
      }
      await showAuthenticatedApp(result);
    } else {
      const result = await supabaseRequest('/auth/v1/token?grant_type=password', {
        method: 'POST',
        body: { email: authEmail, password }
      });
      await showAuthenticatedApp(result);
    }
  } catch (error) {
    setAuthStatus(error.message, true);
  } finally {
    submitButton.disabled = false;
  }
});
document.querySelector('#auth-forgot').addEventListener('click', async () => {
  if (!isSupabaseConfigured()) {
    setAuthStatus('Cấu hình Supabase trước khi yêu cầu đặt lại mật khẩu.', true);
    return;
  }
  const inputEl = document.querySelector('#auth-username') || document.querySelector('#auth-email');
  const rawValue = (inputEl?.value || '').trim();
  if (!rawValue) {
    setAuthStatus('Nhập tên đăng nhập để kiểm tra đặt lại mật khẩu.', true);
    inputEl?.focus();
    return;
  }
  if (rawValue.includes('@')) {
    try {
      const redirectTo = `${window.location.origin}${window.location.pathname}`;
      await supabaseRequest(`/auth/v1/recover?redirect_to=${encodeURIComponent(redirectTo)}`, {
        method: 'POST',
        body: { email: rawValue }
      });
      setAuthStatus('Nếu email đã đăng ký, liên kết đặt lại mật khẩu sẽ được gửi đến hộp thư.');
    } catch (error) {
      setAuthStatus(error.message, true);
    }
    return;
  }
  setAuthStatus('Tài khoản dùng tên đăng nhập không nhận thư qua email. Nếu quên mật khẩu, vui lòng liên hệ quản trị viên hoặc tạo tài khoản mới.', true);
});
document.querySelector('#signout-button').addEventListener('click', async () => {
  const token = authSession?.access_token;
  clearAuthSession();
  resetCoach();
  document.querySelector('#app-shell').classList.add('hidden');
  document.querySelector('#auth-screen').classList.remove('hidden');
  document.querySelector('#auth-password').value = '';
  if (token) {
    try {
      await supabaseRequest('/auth/v1/logout', { method: 'POST', accessToken: token });
      setAuthStatus('Đã đăng xuất.');
    } catch (error) {
      setAuthStatus(`Đã xóa phiên trên thiết bị này nhưng máy chủ báo lỗi đăng xuất: ${error.message}`, true);
    }
  }
});
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  const mealDialog = document.querySelector('#meal-suggestions-dialog');
  const stretchDialog = document.querySelector('#stretch-routine-dialog');
  const fontSettingsDialog = document.querySelector('#font-settings-dialog');
  if (mealDialog?.open) mealDialog.close();
  if (stretchDialog?.open) stretchDialog.close();
  if (fontSettingsDialog?.open) fontSettingsDialog.close();
  if (!document.querySelector('#plan-modal').classList.contains('hidden')) closeModal();
});

const now = new Date();
document.querySelector('#today-label').textContent = now.toLocaleDateString('vi-VN', { weekday: 'short', day: 'numeric', month: 'short' });
renderIcons();
setAuthMode('login');
if (!isSupabaseConfigured()) {
  setAuthStatus('Cấu hình URL và anon key Supabase trong js/supabase-config.js để bật đăng nhập.', true);
} else {
  setAuthStatus('Đăng nhập hoặc tạo tài khoản để tiếp tục.');
  restoreAuth();
}
