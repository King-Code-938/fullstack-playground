console.clear(); // Clean slate

// 🧪 1. Styled Logs
console.log("%c[INFO]%c Something cool happened!", "color: white; background: blue; padding: 2px 5px; border-radius: 3px", "color: blue");

console.warn("⚠️ Warning: Low disk space");
console.error("❌ Error: Missing semicolon");

// 🕒 2. Timing Execution
console.time("Loop Timer");
for (let i = 0; i < 1000000; i++) {} // dummy loop
console.timeEnd("Loop Timer");

// 📦 3. Grouping
console.group("🗂 User Info");
console.log("Name: Werey");
console.log("Role: Fullstack Extraordinaire");
console.groupEnd();

// 📋 4. Tabular Data
const devs = [
  { name: "King", stack: "Fullstack" },
  { name: "Ejeh", stack: "Back-End" },
];
console.table(devs);

