document.getElementById("setReminderButton").addEventListener("click", () => {
  const FIVE_DAYS_IN_MS = 5 * 24 * 60 * 60 * 1000;

  // Get the current date and time
  const now = new Date();

  // Calculate the reminder date (5 days later)
  let reminderDate = new Date(now.getTime() + FIVE_DAYS_IN_MS);

  // Adjust for weekends (move forward to Monday if it lands on Saturday or Sunday)
  if (reminderDate.getDay() === 6) { // Saturday
    reminderDate.setDate(reminderDate.getDate() + 2);
  } else if (reminderDate.getDay() === 0) { // Sunday
    reminderDate.setDate(reminderDate.getDate() + 1);
  }

  // Display status message
  const status = document.getElementById("status");
  
   status.innerText = `A follow-up reminder has been set for ${reminderDate.toLocaleString()}!`;
});
