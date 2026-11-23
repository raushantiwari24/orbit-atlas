from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import os
import webbrowser


project_dir = Path(__file__).resolve().parent
os.chdir(project_dir)
server = ThreadingHTTPServer(("127.0.0.1", 0), SimpleHTTPRequestHandler)
url = f"http://127.0.0.1:{server.server_address[1]}/"

print(f"Orbit Atlas is running at {url}")
print("Keep this window open while you use the site. Press Control-C to stop it.")
webbrowser.open_new_tab(url)

try:
    server.serve_forever()
except KeyboardInterrupt:
    print("\nOrbit Atlas stopped.")
finally:
    server.server_close()
