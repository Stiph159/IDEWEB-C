import requests

url = "https://httpbin.org/get"

r = requests.get(url)
data = r.json()

print("IP:", data["origin"])
print("\nHEADERS:")
for k, v in data["headers"].items():
    print(f"{k}: {v}")

print("\nARGS:", data["args"])
