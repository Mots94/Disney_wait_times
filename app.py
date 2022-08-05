# Include dependencies
from flask import Flask, render_template, redirect, url_for, g
from flask_pymongo import PyMongo
from werkzeug.local import LocalProxy
# import scraping
import os

# setup Flas
app = Flask(__name__)

# Use flask_pymongo to set up mongo connection

mongo = PyMongo(app)

app.config['MONGO_URI'] =  os.environ.get('MONGO_URI')

def get_db():
    db =getattr(g, "_database", None)

    if db is None:
        db = g._database = PyMongo(mongo).db

    return db

db = LocalProxy(get_db)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/landing")
def data_disp():
    return render_template("landing_page.html")

@app.route("/scrape")
def scrape():
    data=mongo.db.rideTimes
    # disney_data = scraping.scrape_all()
    disney_data = {"name": "Magic Kingdom", "ride": "Tropic Thunder"}
    data.update_one({},{"$set":disney_data},upsert=True)
    return redirect("/landing",code=302)

if __name__ == "__main__":
   app.run(port=8000)