// ===== NUTRICORE - app.js =====

// ===== DATA =====

const tips = [
  "Drink a glass of water first thing in the morning to kickstart your metabolism.",
  "Eat slowly — it takes 20 minutes for your brain to register that you're full.",
  "Don't skip breakfast. It sets your energy for the whole day.",
  "Add color to your plate — different colored vegetables have different nutrients.",
  "Sleep 7-8 hours. Poor sleep increases hunger hormones by 24%.",
  "Protein keeps you full longer. Add eggs, beans or chicken to your meals.",
  "Avoid sugary drinks — they give you energy spikes followed by crashes.",
  "Meal prep on Sundays to avoid bad food choices during the week.",
  "Walk for 30 minutes a day — it burns fat and clears your mind.",
  "Your body is 60% water. Stay hydrated throughout the day."
];

const learnRecipes = [
  {
    id: 1, emoji: "🥚", name: "Scrambled Eggs", level: "beginner",
    time: "5 min", calories: 180, tags: ["Protein", "Quick", "Breakfast"],
    desc: "The most important skill — perfectly fluffy scrambled eggs every time.",
    ingredients: ["🥚 3 large eggs", "🧈 1 tbsp butter", "🥛 2 tbsp milk", "🧂 Salt and pepper", "🌿 Fresh chives (optional)"],
    steps: [
      "Crack eggs into a bowl, add milk, salt and pepper.",
      "Whisk together until fully combined and slightly foamy.",
      "Heat butter in a non-stick pan on LOW heat.",
      "Pour in egg mixture and let it sit for 10 seconds.",
      "Gently push the eggs from the edges to the center with a spatula.",
      "Remove from heat when eggs are still slightly wet — they keep cooking.",
      "Serve immediately and top with chives if you have them."
    ]
  },
  {
    id: 2, emoji: "🍚", name: "Perfect White Rice", level: "beginner",
    time: "20 min", calories: 200, tags: ["Carbs", "Basic", "South African"],
    desc: "Master rice and you can eat well every single day. The foundation.",
    ingredients: ["🍚 1 cup white rice", "💧 2 cups water", "🧂 1 tsp salt", "🧈 1 tsp butter (optional)"],
    steps: [
      "Rinse rice under cold water until water runs clear.",
      "Add water and salt to a pot and bring to a boil.",
      "Add rice and stir once.",
      "Reduce heat to the lowest setting and cover with a lid.",
      "Cook for 18 minutes — do not lift the lid.",
      "Remove from heat and let rest for 5 minutes with lid on.",
      "Fluff with a fork and add butter if desired."
    ]
  },
  {
    id: 3, emoji: "🍝", name: "Spaghetti Bolognese", level: "intermediate",
    time: "35 min", calories: 520, tags: ["Protein", "Carbs", "Dinner"],
    desc: "A classic filling meal that impresses everyone. Learn this once, eat well forever.",
    ingredients: ["🍝 200g spaghetti", "🥩 300g beef mince", "🍅 1 can chopped tomatoes", "🧅 1 onion diced", "🧄 2 cloves garlic", "🫒 2 tbsp olive oil", "🧂 Salt, pepper, oregano"],
    steps: [
      "Boil salted water and cook spaghetti until al dente.",
      "Heat oil in a pan and fry onion until soft (5 min).",
      "Add garlic and fry for 1 more minute.",
      "Add mince and cook until brown, breaking it up with a spoon.",
      "Add tomatoes, oregano, salt and pepper. Stir well.",
      "Simmer on low heat for 15 minutes until sauce thickens.",
      "Drain pasta, mix with sauce and serve hot."
    ]
  },
  {
    id: 4, emoji: "🍗", name: "Grilled Chicken Breast", level: "intermediate",
    time: "25 min", calories: 310, tags: ["Protein", "Healthy", "Gym"],
    desc: "High protein, low fat. The go-to meal for anyone serious about their body.",
    ingredients: ["🍗 2 chicken breasts", "🫒 2 tbsp olive oil", "🧄 1 tsp garlic powder", "🌶️ 1 tsp paprika", "🧂 Salt and black pepper", "🍋 Juice of 1 lemon"],
    steps: [
      "Butterfly the chicken breast or flatten with a rolling pin.",
      "Mix oil, garlic powder, paprika, salt, pepper and lemon juice.",
      "Coat chicken completely in the marinade.",
      "Let it marinate for at least 10 minutes.",
      "Heat a grill pan or pan on HIGH heat.",
      "Cook chicken for 6-7 minutes per side without moving it.",
      "Let rest for 5 minutes before cutting — keeps it juicy."
    ]
  },
  {
    id: 5, emoji: "🥗", name: "Power Salad Bowl", level: "beginner",
    time: "10 min", calories: 280, tags: ["Healthy", "Vitamins", "No Cook"],
    desc: "No cooking needed. Pack it with nutrients and eat like a champion.",
    ingredients: ["🥬 2 cups mixed greens", "🍅 1 cup cherry tomatoes", "🥒 1 cucumber sliced", "🥕 1 carrot grated", "🥚 2 boiled eggs", "🫒 2 tbsp olive oil", "🍋 Lemon juice, salt"],
    steps: [
      "Wash and dry all vegetables thoroughly.",
      "Slice cucumber and halve cherry tomatoes.",
      "Grate carrot and add to greens.",
      "Slice boiled eggs and place on top.",
      "Drizzle olive oil and lemon juice over everything.",
      "Season with salt and pepper.",
      "Toss gently and eat immediately."
    ]
  },
  {
    id: 6, emoji: "🍲", name: "Umngqusho (Samp & Beans)", level: "advanced",
    time: "2 hrs", calories: 420, tags: ["Traditional", "Protein", "Filling"],
    desc: "South African classic. High protein, high energy, deeply satisfying.",
    ingredients: ["🌽 1 cup samp", "🫘 1 cup sugar beans", "🧅 1 onion", "🧈 2 tbsp butter", "🧂 Salt to taste", "💧 Water"],
    steps: [
      "Soak samp and beans overnight in cold water.",
      "Drain and rinse well the next day.",
      "Add to a large pot with fresh water (4 cups).",
      "Bring to boil then reduce heat and simmer for 1.5 hours.",
      "Fry onion in butter until golden brown.",
      "Add fried onion to the pot and season with salt.",
      "Cook for another 20 minutes until soft and thick."
    ]
  }
];

const mealPlans = {
  energy: {
    label: "⚡ Energy Boost Plan",
    meals: [
      { time: "Breakfast (7am)", name: "Oats with Banana & Honey", desc: "Complex carbs for sustained energy all morning. Add a boiled egg for protein.", nutrients: ["320 kcal", "45g Carbs", "12g Protein"] },
      { time: "Mid-Morning (10am)", name: "Mixed Nuts & Fruit", desc: "Handful of peanuts with an apple or banana. Quick energy without a crash.", nutrients: ["180 kcal", "20g Carbs", "6g Protein"] },
      { time: "Lunch (1pm)", name: "Rice, Chicken & Vegetables", desc: "Brown or white rice with grilled chicken and any steamed vegetables you have.", nutrients: ["520 kcal", "55g Carbs", "38g Protein"] },
      { time: "Afternoon Snack (4pm)", name: "Bread with Peanut Butter", desc: "2 slices brown bread with peanut butter. Keeps energy stable before evening.", nutrients: ["280 kcal", "30g Carbs", "10g Protein"] },
      { time: "Dinner (7pm)", name: "Spaghetti with Mince", desc: "Carb-rich dinner to refuel your body after a full day. Add tomato sauce.", nutrients: ["480 kcal", "60g Carbs", "28g Protein"] }
    ]
  },
  lose: {
    label: "📉 Weight Loss Plan",
    meals: [
      { time: "Breakfast (7am)", name: "2 Boiled Eggs & Green Tea", desc: "High protein, zero carbs. Keeps you full for hours without the calories.", nutrients: ["160 kcal", "2g Carbs", "14g Protein"] },
      { time: "Mid-Morning (10am)", name: "Apple or Orange", desc: "Natural sugar and fiber. Curbs hunger without adding fat.", nutrients: ["80 kcal", "20g Carbs", "0g Protein"] },
      { time: "Lunch (1pm)", name: "Grilled Chicken & Salad", desc: "No rice. Grilled chicken on a big fresh salad with lemon dressing. Fill the bowl.", nutrients: ["340 kcal", "12g Carbs", "38g Protein"] },
      { time: "Afternoon Snack (4pm)", name: "Cucumber & Carrot Sticks", desc: "Almost zero calories. Fills your stomach and keeps hunger away.", nutrients: ["40 kcal", "8g Carbs", "1g Protein"] },
      { time: "Dinner (7pm)", name: "Vegetable Soup", desc: "Light, warm and filling. Use any vegetables — potato, carrot, onion, spinach.", nutrients: ["180 kcal", "25g Carbs", "8g Protein"] }
    ]
  },
  gain: {
    label: "📈 Weight Gain Plan",
    meals: [
      { time: "Breakfast (7am)", name: "4 Eggs, Bread & Milk", desc: "Big protein and calorie breakfast. Scramble 4 eggs, eat with 3 slices bread and a glass of full cream milk.", nutrients: ["620 kcal", "50g Carbs", "38g Protein"] },
      { time: "Mid-Morning (10am)", name: "Peanut Butter Banana Shake", desc: "Blend banana, peanut butter, full cream milk. High calorie, high protein.", nutrients: ["420 kcal", "55g Carbs", "16g Protein"] },
      { time: "Lunch (1pm)", name: "Large Plate of Samp & Beans", desc: "Traditional high calorie meal. Add butter and eat a large portion.", nutrients: ["680 kcal", "95g Carbs", "28g Protein"] },
      { time: "Afternoon Snack (4pm)", name: "Bread with Cheese & Eggs", desc: "Calorie dense snack. 2 slices bread, cheese, boiled egg.", nutrients: ["380 kcal", "35g Carbs", "20g Protein"] },
      { time: "Dinner (7pm)", name: "Chicken Thighs, Rice & Gravy", desc: "Chicken thighs have more fat than breast — better for gaining weight. Big portion of rice.", nutrients: ["720 kcal", "75g Carbs", "42g Protein"] }
    ]
  },
  health: {
    label: "❤️ Stay Healthy Plan",
    meals: [
      { time: "Breakfast (7am)", name: "Oats with Berries & Seeds", desc: "Fiber-rich slow-release breakfast. Adds sunflower seeds for healthy fats.", nutrients: ["280 kcal", "42g Carbs", "10g Protein"] },
      { time: "Mid-Morning (10am)", name: "Yogurt & Fruit", desc: "Plain yogurt with whatever fruit you have. Good bacteria for your gut.", nutrients: ["150 kcal", "22g Carbs", "8g Protein"] },
      { time: "Lunch (1pm)", name: "Rainbow Salad Bowl", desc: "Load your plate with different colored vegetables — red, green, orange, yellow. Add protein.", nutrients: ["380 kcal", "30g Carbs", "28g Protein"] },
      { time: "Afternoon Snack (4pm)", name: "Handful of Nuts & Water", desc: "Healthy fats, no junk. Walnuts or peanuts are perfect.", nutrients: ["160 kcal", "6g Carbs", "7g Protein"] },
      { time: "Dinner (7pm)", name: "Grilled Fish with Sweet Potato", desc: "Omega-3 rich fish with sweet potato for vitamins. One of the healthiest meals you can eat.", nutrients: ["420 kcal", "45g Carbs", "32g Protein"] }
    ]
  }
};

const quickRecipes = [
  {
    id: 101, emoji: "🥚", name: "Scrambled Eggs on Toast", time: 5,
    desc: "Fast, filling and packed with protein. Perfect any time of day.",
    tags: ["Protein", "5 min"],
    ingredients: ["🥚 2 eggs", "🍞 2 slices bread", "🧈 Butter", "🧂 Salt & pepper"],
    steps: ["Crack and whisk eggs with salt and pepper.", "Melt butter in pan on medium heat.", "Pour eggs in, stir gently until just cooked.", "Toast bread and serve eggs on top."]
  },
  {
    id: 102, emoji: "🥜", name: "Peanut Butter Toast", time: 5,
    desc: "High calorie, high protein. Zero cooking required.",
    tags: ["Quick", "5 min", "No Cook"],
    ingredients: ["🍞 2 slices bread", "🥜 Peanut butter", "🍌 Banana (optional)"],
    steps: ["Toast the bread.", "Spread peanut butter generously.", "Slice banana on top if you have it.", "Eat immediately."]
  },
  {
    id: 103, emoji: "🍳", name: "Fried Egg & Bread", time: 5,
    desc: "Simple, satisfying and ready in minutes.",
    tags: ["Protein", "5 min"],
    ingredients: ["🥚 2 eggs", "🍞 Bread", "🫒 Oil", "🧂 Salt"],
    steps: ["Heat oil in pan on medium heat.", "Crack eggs carefully into pan.", "Season with salt.", "Cook until whites are set — 2-3 minutes.", "Serve with bread."]
  },
  {
    id: 104, emoji: "🥗", name: "Quick Salad with Egg", time: 10,
    desc: "No cooking for the salad, just boil an egg. Fresh and healthy.",
    tags: ["Healthy", "10 min"],
    ingredients: ["🥬 Lettuce or spinach", "🍅 Tomatoes", "🥚 1 boiled egg", "🫒 Olive oil", "🍋 Lemon"],
    steps: ["Boil egg for 8 minutes.", "Chop lettuce and tomatoes into bowl.", "Slice boiled egg and add to salad.", "Drizzle olive oil and lemon.", "Season with salt and toss."]
  },
  {
    id: 105, emoji: "🍜", name: "Instant Noodles Upgrade", time: 10,
    desc: "Take basic noodles and make them actually nutritious.",
    tags: ["Quick", "10 min", "Budget"],
    ingredients: ["🍜 1 pack instant noodles", "🥚 1 egg", "🥬 Any vegetables", "🧄 Garlic"],
    steps: ["Boil noodles according to pack.", "In separate pan, fry garlic and vegetables.", "Crack egg into noodles and stir quickly.", "Add vegetables on top.", "Add half the seasoning packet only."]
  },
  {
    id: 106, emoji: "🫘", name: "Baked Beans on Toast", time: 10,
    desc: "South African classic. High fiber, high protein, super easy.",
    tags: ["Protein", "10 min", "Budget"],
    ingredients: ["🫘 1 can baked beans", "🍞 2 slices bread", "🧀 Cheese (optional)"],
    steps: ["Open and heat beans in a pot on medium heat.", "Toast bread while beans heat up.", "Pour beans over toast.", "Add cheese on top if you have it."]
  },
  {
    id: 107, emoji: "🥙", name: "Chicken Mayo Wrap", time: 15,
    desc: "Use leftover chicken and make something amazing fast.",
    tags: ["Protein", "15 min"],
    ingredients: ["🍗 Leftover chicken", "🫓 Wraps or bread", "🥗 Lettuce", "🥫 Mayonnaise", "🍅 Tomato"],
    steps: ["Shred or chop leftover chicken.", "Mix with mayo, salt and pepper.", "Lay wrap flat, add lettuce and tomato.", "Add chicken mixture.", "Roll tightly and serve."]
  },
  {
    id: 108, emoji: "🍛", name: "Quick Fried Rice", time: 15,
    desc: "Use leftover rice and turn it into a proper meal in minutes.",
    tags: ["Carbs", "15 min"],
    ingredients: ["🍚 2 cups leftover rice", "🥚 2 eggs", "🧅 Half onion", "🫒 Oil", "🧂 Soy sauce or salt"],
    steps: ["Heat oil in large pan on HIGH heat.", "Fry onion for 2 minutes.", "Add rice and spread it out — don't stir yet.", "Make space in center, crack eggs in and scramble.", "Mix everything together.", "Add soy sauce or salt to taste."]
  },
  {
    id: 109, emoji: "🥘", name: "One Pan Veggie Pasta", time: 30,
    desc: "Everything in one pan. Minimal washing up, maximum flavor.",
    tags: ["Healthy", "30 min", "Vegetarian"],
    ingredients: ["🍝 200g pasta", "🍅 1 can tomatoes", "🧅 1 onion", "🧄 2 garlic cloves", "🥬 Spinach", "🫒 Olive oil"],
    steps: ["Fry onion and garlic in oil for 3 minutes.", "Add tomatoes and season well.", "Simmer sauce for 10 minutes.", "Cook pasta separately in salted water.", "Add spinach to sauce at the end.", "Drain pasta and mix with sauce."]
  },
  {
    id: 110, emoji: "🍗", name: "Simple Chicken Stir Fry", time: 30,
    desc: "High protein, colorful and done in 30 minutes flat.",
    tags: ["Protein", "30 min", "Healthy"],
    ingredients: ["🍗 2 chicken breasts", "🥦 Broccoli", "🥕 Carrot", "🧅 Onion", "🧄 Garlic", "🫒 Oil", "🧂 Soy sauce"],
    steps: ["Slice chicken into strips.", "Heat oil in pan on HIGH heat.", "Cook chicken until golden — 5-6 minutes.", "Remove chicken and fry vegetables in same pan.", "Add garlic and cook 1 minute.", "Return chicken to pan.", "Add soy sauce, toss everything and serve."]
  }
];

// ===== STATE =====
let waterCount = 0;
let currentLearnLevel = 'all';
let currentQuickTime = 5;
let userData = {};

// ===== INIT =====
window.onload = function () {
  setTimeout(() => {
    const splash = document.getElementById('splash');
    splash.classList.add('fade-out');
    setTimeout(() => {
      splash.style.display = 'none';
      document.getElementById('app').classList.remove('hidden');
      initApp();
    }, 600);
  }, 2300);
};

function initApp() {
  setGreeting();
  setDailyTip();
  renderWaterGlasses();
  renderLearnRecipes();
  showMealPlan('energy', document.querySelector('.goal-btn'));
  filterQuick(5, document.querySelector('.time-btn'));
  loadProfile();
}

// ===== GREETING =====
function setGreeting() {
  const hour = new Date().getHours();
  let greet = "Good morning 👋";
  if (hour >= 12 && hour < 17) greet = "Good afternoon 👋";
  else if (hour >= 17) greet = "Good evening 👋";
  document.getElementById('greeting-text').textContent = greet;

  const saved = localStorage.getItem('nutricore-name');
  if (saved) document.getElementById('user-display-name').textContent = `Hey, ${saved}! 💪`;
}

// ===== TIP =====
function setDailyTip() {
  const day = new Date().getDay();
  document.getElementById('daily-tip').textContent = tips[day];
}

// ===== WATER =====
function renderWaterGlasses() {
  const container = document.getElementById('water-glasses');
  container.innerHTML = '';
  for (let i = 0; i < 8; i++) {
    const glass = document.createElement('div');
    glass.className = 'glass' + (i < waterCount ? ' filled' : '');
    glass.textContent = i < waterCount ? '💧' : '';
    container.appendChild(glass);
  }
  document.getElementById('water-text').textContent = `${waterCount} / 8 glasses`;
}

function addWater() {
  if (waterCount < 8) {
    waterCount++;
    renderWaterGlasses();
    if (waterCount === 8) showToast("🎉 Daily water goal reached!");
    else showToast(`💧 Glass ${waterCount} added!`);
  } else {
    showToast("✅ You've hit your daily water goal!");
  }
}

// ===== NAVIGATION =====
function showSection(name) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(name).classList.add('active');
  document.getElementById('nav-' + name).classList.add('active');document.getElementById('app').scrollTop = 0;
}

// ===== LEARN =====
function renderLearnRecipes(filter = '') {
  const list = document.getElementById('learn-list');
  list.innerHTML = '';
  const search = filter.toLowerCase();
  const filtered = learnRecipes.filter(r => {
    const levelMatch = currentLearnLevel === 'all' || r.level === currentLearnLevel;
    const searchMatch = !search || r.name.toLowerCase().includes(search);
    return levelMatch && searchMatch;
  });

  if (filtered.length === 0) {
    list.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:20px">No recipes found</p>';
    return;
  }

  filtered.forEach(r => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    const levelColor = r.level === 'beginner' ? 'green' : r.level === 'intermediate' ? 'orange' : 'red';
    card.innerHTML = `
      <div class="recipe-emoji">${r.emoji}</div>
      <div class="recipe-info">
        <h4>${r.name}</h4>
        <p>${r.desc}</p>
        <div class="recipe-tags">
          <span class="tag ${levelColor}">${r.level}</span>
          <span class="tag blue">⏱ ${r.time}</span>
          <span class="tag">${r.calories} kcal</span>
        </div>
      </div>
    `;
    card.onclick = () => openRecipeModal(r);
    list.appendChild(card);
  });
}

function filterLearn() {
  const search = document.getElementById('learn-search').value;
  renderLearnRecipes(search);
}

function filterByLevel(level, btn) {
  currentLearnLevel = level;
  document.querySelectorAll('.level-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderLearnRecipes(document.getElementById('learn-search').value);
}

// ===== MEALS =====
function showMealPlan(goal, btn) {
  document.querySelectorAll('.goal-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const plan = mealPlans[goal];
  const container = document.getElementById('meal-plan-container');
  container.innerHTML = `<div class="meal-plan">` +
    plan.meals.map(m => `
      <div class="meal-time-card">
        <div class="meal-time">${m.time}</div>
        <h4>${m.name}</h4>
        <p>${m.desc}</p>
        <div class="meal-nutrients">
          ${m.nutrients.map(n => `<span class="nutrient">${n}</span>`).join('')}
        </div>
      </div>
    `).join('') + `</div>`;
}

// ===== QUICK COOK =====
function filterQuick(maxTime, btn) {
  currentQuickTime = maxTime;
  document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const list = document.getElementById('quick-list');
  list.innerHTML = '';
  const filtered = quickRecipes.filter(r => r.time <= maxTime);

  if (filtered.length === 0) {
    list.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:20px">No recipes for this time</p>';
    return;
  }

  filtered.forEach(r => {
    const card = document.createElement('div');
    card.className = 'quick-card';
    card.innerHTML = `
      <div class="recipe-emoji">${r.emoji}</div>
      <div class="recipe-info">
        <h4>${r.name}</h4>
        <p>${r.desc}</p>
        <div class="recipe-tags">
          ${r.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
      <div class="quick-time-badge">${r.time}m</div>
    `;
    card.onclick = () => openRecipeModal(r);
    list.appendChild(card);
  });
}

// ===== PROFILE =====
function saveProfile() {
  const name = document.getElementById('profile-name').value.trim();
  const age = document.getElementById('profile-age').value;
  const weight = parseFloat(document.getElementById('profile-weight').value);
  const height = parseFloat(document.getElementById('profile-height').value);
  const goal = document.getElementById('profile-goal').value;

  if (!name) { showToast("⚠️ Please enter your name"); return; }

  localStorage.setItem('nutricore-name', name);
  localStorage.setItem('nutricore-goal', goal);

  document.getElementById('user-display-name').textContent = `Hey, ${name}! 💪`;

  if (weight && height) {
    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    let label = '';
    let color = 'var(--green)';
    if (bmi < 18.5) { label = 'Underweight — eat more nutritious food'; color = 'var(--blue)'; }
    else if (bmi < 25) { label = 'Normal weight — keep it up! 🎉'; color = 'var(--green)'; }
    else if (bmi < 30) { label = 'Overweight — focus on the Lose Weight meal plan'; color = 'var(--orange)'; }
    else { label = 'Obese — consider consulting a doctor'; color = 'var(--red)'; }

    document.getElementById('bmi-value').textContent = bmi;
    document.getElementById('bmi-value').style.color = color;
    document.getElementById('bmi-label').textContent = label;
    document.getElementById('bmi-card').style.display = 'block';
  }

  showToast(`✅ Profile saved! Welcome, ${name}!`);
}

function loadProfile() {
  const name = localStorage.getItem('nutricore-name');
  const goal = localStorage.getItem('nutricore-goal');
  if (name) {
    document.getElementById('profile-name').value = name;
    document.getElementById('user-display-name').textContent = `Hey, ${name}! 💪`;
  }
  if (goal) document.getElementById('profile-goal').value = goal;
}

// ===== MODAL =====
function openRecipeModal(recipe) {
  const modal = document.getElementById('recipe-modal');
  const body = document.getElementById('modal-body');
  body.innerHTML = `
    <div class="modal-emoji">${recipe.emoji}</div>
    <div class="modal-title">${recipe.name}</div>
    <div class="modal-desc">${recipe.desc}</div>
    ${recipe.time ? `<div style="display:flex;gap:10px;margin-bottom:8px">
      <span class="tag blue">⏱ ${typeof recipe.time === 'number' ? recipe.time + ' min' : recipe.time}</span>
      ${recipe.calories ? `<span class="tag">${recipe.calories} kcal</span>` : ''}
      ${recipe.level ? `<span class="tag ${recipe.level === 'beginner' ? 'green' : recipe.level === 'intermediate' ? 'orange' : 'red'}">${recipe.level}</span>` : ''}
    </div>` : ''}
    <div class="modal-section-title">🛒 Ingredients</div>
    <ul class="ingredient-list">
      ${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}
    </ul>
    <div class="modal-section-title">👨‍🍳 How to Cook</div>
    <ol class="steps-list">
      ${recipe.steps.map((s, i) => `<li><div class="step-num">${i + 1}</div><span>${s}</span></li>`).join('')}
    </ol>
  `;
  modal.classList.remove('hidden');
}

function closeModal() {
  document.getElementById('recipe-modal').classList.add('hidden');
}

document.getElementById('recipe-modal').addEventListener('click', function (e) {
  if (e.target === this) closeModal();
});

// ===== TOAST =====
function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2100);
}
