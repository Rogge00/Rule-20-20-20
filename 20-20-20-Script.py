import time
import tkinter as tk

# Create a function to send the notification
def send_notification():
  # Create a new window
  width = 600 # Width 
  height = 300 # Height
  window = tk.Tk()
  window.geometry("600x300")
  window.title("Notification")

  # Center window
  screen_width = window.winfo_screenwidth()  # Width of the screen
  screen_height = window.winfo_screenheight() # Height of the screen

  x = (screen_width/2) - (width/2)
  y = (screen_height/2) - (height/2)

  window.geometry('%dx%d+%d+%d' % (width, height, x, y))

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
  time.sleep(1200)
