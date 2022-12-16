import time
import tkinter as tk

# Create a function to send the notification
def send_notification():
  # Create a new window
  window = tk.Tk()
  window.geometry("800x200")
  window.title("Notification")
  
  # Add a label to the window
  label = tk.Label(text="Stacca gli occhi dal computer per 20 secondi", font=("Helvetica", 16))
  label.pack()
  
  # Show the window for 5 seconds
  window.wm_attributes("-topmost", 1)
  window.after(5000, window.destroy)
  window.mainloop()

# Start the script with a button press
input("Press enter to start the script")

# Run the script indefinitely
while True:
  # Send the notification every 20 minutes
  send_notification()
  time.sleep(5)
