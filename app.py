# from flask import Flask, render_template, request, jsonify
# from akamai.edgegrid import EdgeGridAuth
# import requests
# import os
# from dotenv import load_dotenv
# import logging

# # Load environment variables from .env file
# load_dotenv(dotenv_path=".env")

# # Flask app initialization
# app = Flask(__name__)

# # Akamai credentials from environment variables
# AKAMAI_HOST = os.getenv("AKAMAI_HOST")
# AKAMAI_CLIENT_SECRET = os.getenv("AKAMAI_CLIENT_SECRET")
# AKAMAI_ACCESS_TOKEN = os.getenv("AKAMAI_ACCESS_TOKEN")
# AKAMAI_CLIENT_TOKEN = os.getenv("AKAMAI_CLIENT_TOKEN")

# # Akamai Purge URLs
# PURGE_URL = f"https://{AKAMAI_HOST}/ccu/v3/invalidate/url/"
# PURGE_CPCODE_URL = f"https://{AKAMAI_HOST}/ccu/v3/invalidate/cpcode/"

# # Set up a session with EdgeGrid authentication
# session = requests.Session()
# session.auth = EdgeGridAuth(
#     client_token=AKAMAI_CLIENT_TOKEN,
#     client_secret=AKAMAI_CLIENT_SECRET,
#     access_token=AKAMAI_ACCESS_TOKEN
# )

# # Logging configuration for debugging
# logging.basicConfig(level=logging.DEBUG)

# @app.route("/")
# def index():
#     return render_template("index.html")

# @app.route("/ccu/v3/invalidate/cpcode/", methods=["POST"])
# def purge_cpcode():
#     try:
#         data = request.json
#         logging.debug(f"Received CP code purge request: {data}")

#         cp_codes = data.get("objects")
#         if not cp_codes or not isinstance(cp_codes, list):
#             return jsonify({"error": "Invalid CP code list"}), 400

#         response = session.post(PURGE_CPCODE_URL, json={"objects": cp_codes})
#         logging.debug(f"Akamai API Response: {response.status_code}, {response.text}")

#         if response.status_code == 201:
#             return jsonify({"message": "CP code cache purged successfully.", "response": response.json()}), 200

#         return jsonify({"error": response.text}), response.status_code

#     except Exception as e:
#         logging.error(f"Error purging CP code: {e}")
#         return jsonify({"error": str(e)}), 500

# @app.route("/ccu/v3/invalidate/url/", methods=["POST"])
# def purge_url():
#     try:
#         data = request.json
#         logging.debug(f"Received URL purge request: {data}")

#         urls = data.get("objects")
#         if not urls or not isinstance(urls, list):
#             return jsonify({"error": "Invalid URL list"}), 400

#         response = session.post(PURGE_URL, json={"objects": urls})
#         logging.debug(f"Akamai API Response: {response.status_code}, {response.text}")

#         if response.status_code == 201:
#             return jsonify({"message": "URL cache purged successfully.", "response": response.json()}), 200

#         return jsonify({"error": response.text}), response.status_code

#     except Exception as e:
#         logging.error(f"Error purging URL: {e}")
#         return jsonify({"error": str(e)}), 500

# if __name__ == "__main__":
#     app.run(host="0.0.0.0", port=3000, debug=True)


# from flask import Flask, render_template, request, jsonify
# from akamai.edgegrid import EdgeGridAuth
# import requests
# import os
# from dotenv import load_dotenv
# import logging

# # Load environment variables from .env file
# load_dotenv(dotenv_path=".env")

# # Flask app initialization
# app = Flask(__name__)

# # Akamai credentials from environment variables
# AKAMAI_HOST = os.getenv("AKAMAI_HOST")
# AKAMAI_CLIENT_SECRET = os.getenv("AKAMAI_CLIENT_SECRET")
# AKAMAI_ACCESS_TOKEN = os.getenv("AKAMAI_ACCESS_TOKEN")
# AKAMAI_CLIENT_TOKEN = os.getenv("AKAMAI_CLIENT_TOKEN")

# # Akamai Purge URLs
# PURGE_URL = f"https://{AKAMAI_HOST}/ccu/v3/invalidate/url/"
# PURGE_CPCODE_URL = f"https://{AKAMAI_HOST}/ccu/v3/invalidate/cpcode/"
# PURGE_TAG_URL = f"https://{AKAMAI_HOST}/ccu/v3/invalidate/tag/"

# # Set up a session with EdgeGrid authentication
# session = requests.Session()
# session.auth = EdgeGridAuth(
#     client_token=AKAMAI_CLIENT_TOKEN,
#     client_secret=AKAMAI_CLIENT_SECRET,
#     access_token=AKAMAI_ACCESS_TOKEN
# )

# # Logging configuration for debugging
# logging.basicConfig(level=logging.DEBUG)

# # Predefined CP codes and tags moved to backend
# HOSTNAMES_WITH_CP_CODES = {
#     "dev-admin.pluang.org": "1490420",
#     "dev-api-core.pluang.org": "1490438",
#     "dev-api-pluang.org": "1490444",
#     "website-dev.pluang.org": "1490456",
#     "image-cdn.pluang.org": "1492527",
#     "www.pluang.com": "1558114",  # Production
#     "admin.pluang.com": "1558123",  # Production
#     "www.pluang.org": "1558114",
#     "admin-test.pluang.com": "1763411",
#     "development-main.pluang.org": "1558856",
# }

# CACHE_TAGS = ["product", "description", "test"]

# @app.route("/")
# def index():
#     return render_template("index.html", hostnames=HOSTNAMES_WITH_CP_CODES, tags=CACHE_TAGS)

# @app.route("/ccu/v3/invalidate/cpcode/", methods=["POST"])
# def purge_cpcode():
#     try:
#         data = request.json
#         cp_codes = data.get("objects")
#         if not cp_codes or not isinstance(cp_codes, list):
#             return jsonify({"error": "Invalid CP code list"}), 400

#         response = session.post(PURGE_CPCODE_URL, json={"objects": cp_codes})
#         if response.status_code == 201:
#             return jsonify({"message": "CP code cache purged successfully.", "response": response.json()}), 200

#         return jsonify({"error": response.text}), response.status_code

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# @app.route("/ccu/v3/invalidate/url/", methods=["POST"])
# def purge_url():
#     try:
#         data = request.json
#         urls = data.get("objects")
#         if not urls or not isinstance(urls, list):
#             return jsonify({"error": "Invalid URL list"}), 400

#         response = session.post(PURGE_URL, json={"objects": urls})
#         if response.status_code == 201:
#             return jsonify({"message": "URL cache purged successfully.", "response": response.json()}), 200

#         return jsonify({"error": response.text}), response.status_code

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# @app.route("/ccu/v3/invalidate/tag/", methods=["POST"])
# def purge_tag():
#     try:
#         data = request.json
#         tags = data.get("objects")
#         if not tags or not isinstance(tags, list):
#             return jsonify({"error": "Invalid tag list"}), 400

#         response = session.post(PURGE_TAG_URL, json={"objects": tags})
#         if response.status_code == 201:
#             return jsonify({"message": "Tag cache purged successfully.", "response": response.json()}), 200

#         return jsonify({"error": response.text}), response.status_code

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# if __name__ == "__main__":
#     app.run(host="0.0.0.0", port=3000, debug=True)


from flask import Flask, render_template, request, jsonify
from akamai.edgegrid import EdgeGridAuth
import requests
import os
from dotenv import load_dotenv
import logging

# Load environment variables from .env file
load_dotenv(dotenv_path=".env")

# Flask app initialization
app = Flask(__name__)

# Akamai credentials from environment variables
AKAMAI_HOST = os.getenv("AKAMAI_HOST")
AKAMAI_CLIENT_SECRET = os.getenv("AKAMAI_CLIENT_SECRET")
AKAMAI_ACCESS_TOKEN = os.getenv("AKAMAI_ACCESS_TOKEN")
AKAMAI_CLIENT_TOKEN = os.getenv("AKAMAI_CLIENT_TOKEN")

# Akamai Purge URLs
PURGE_URL = f"https://{AKAMAI_HOST}/ccu/v3/invalidate/url/"
PURGE_CPCODE_URL = f"https://{AKAMAI_HOST}/ccu/v3/invalidate/cpcode/"
PURGE_TAG_URL = f"https://{AKAMAI_HOST}/ccu/v3/invalidate/tag/"

# Set up a session with EdgeGrid authentication
session = requests.Session()
session.auth = EdgeGridAuth(
    client_token=AKAMAI_CLIENT_TOKEN,
    client_secret=AKAMAI_CLIENT_SECRET,
    access_token=AKAMAI_ACCESS_TOKEN
)

# Logging configuration for debugging
logging.basicConfig(level=logging.DEBUG)

# Predefined CP codes and tags moved to backend
HOSTNAMES_WITH_CP_CODES = {
    "dev-admin.pluang.org": "1490420",
    "dev-api-core.pluang.org": "1490438",
    "dev-api-pluang.org": "1490444",
    "website-dev.pluang.org": "1490456",
    "image-cdn.pluang.org": "1492527",
    "www.pluang.com": "1558114",  # Production
    "admin.pluang.com": "1558123",  # Production
    "www.pluang.org": "1558114",
    "admin-test.pluang.com": "1763411",
    "development-main.pluang.org": "1558856",
}

CACHE_TAGS = ["product", "description", "test"]

@app.route("/")
def index():
    return render_template(
        "index.html",
        hostnames=HOSTNAMES_WITH_CP_CODES,
        tags=CACHE_TAGS
    )

@app.route("/ccu/v3/invalidate/cpcode/", methods=["POST"])
def purge_cpcode():
    try:
        data = request.json
        cp_codes = data.get("objects")
        if not cp_codes or not isinstance(cp_codes, list):
            return jsonify({"error": "Invalid CP code list"}), 400

        response = session.post(PURGE_CPCODE_URL, json={"objects": cp_codes})
        if response.status_code == 201:
            return jsonify({"message": "CP code cache purged successfully.", "response": response.json()}), 200

        return jsonify({"error": response.text}), response.status_code

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/ccu/v3/invalidate/url/", methods=["POST"])
def purge_url():
    try:
        data = request.json
        urls = data.get("objects")
        if not urls or not isinstance(urls, list):
            return jsonify({"error": "Invalid URL list"}), 400

        response = session.post(PURGE_URL, json={"objects": urls})
        if response.status_code == 201:
            return jsonify({"message": "URL cache purged successfully.", "response": response.json()}), 200

        return jsonify({"error": response.text}), response.status_code

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/ccu/v3/invalidate/tag/", methods=["POST"])
def purge_tag():
    try:
        data = request.json
        tags = data.get("objects")
        if not tags or not isinstance(tags, list):
            return jsonify({"error": "Invalid tag list"}), 400

        response = session.post(PURGE_TAG_URL, json={"objects": tags})
        if response.status_code == 201:
            return jsonify({"message": "Tag cache purged successfully.", "response": response.json()}), 200

        return jsonify({"error": response.text}), response.status_code

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000, debug=True)
