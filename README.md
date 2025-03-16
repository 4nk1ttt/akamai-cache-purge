# Akamai Fast Purge API Cache Clearer

A single-page application (SPA) that leverages the Akamai Fast Purge API to quickly clear cache for URLs, hostnames, and cache tags.

***

## Tech Stack

- **Backend:** Python
- **Frontend:** HTML, CSS, JavaScript

***

## Features

- Clear cache for specific URLs, hostnames, or cache tags.
- Simple and minimalistic user interface.

***

## Setup

### Clone the Repository

git clone https://github.com/4nk1ttt/akamai-cache-purge.git
cd akamai-cache-purge


### Install Dependencies

pip install -r requirements.txt


### Configure API Credentials

- Provide your Akamai API credentials in the `.env` file using the following format:

```env
AKAMAI_CLIENT_SECRET=lApvuZUFRxxxxxxxxxxxxmhxdbEg=
AKAMAI_HOST=akab-xxxxxxxx-xxxxxxxxxx.akamaiapis.net
AKAMAI_ACCESS_TOKEN=akab-xxxxxxxxxxx-dfvksk2ab4uyuvtb
AKAMAI_CLIENT_TOKEN=akab-xxxxxxxxxxx-x7oqsvrbxp3qklqt
```

### Run the Backend Server

python app.py


### Launch the Frontend

- Open `127.0.0.1:3000` in your browser.

***

## Usage

- Enter the URL, hostname, or cache tag you wish to purge.
- Click on the "Purge" button to trigger the cache purge.

***  
