# Include dependencies
from curses import meta
from flask import Flask, render_template, redirect, url_for
from flask_pymongo import PyMongo
import scraping

# setup Flas
app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "xyz"
mongo = PyMongo(app)

@app.route("/")
def index():
    disneymeta = mongo.db.disney-final-project-database.find_one()
    return render_template("index.html",meta=disneymeta)
    disneydata = mongo.db.disney-final-project-database.find_one()
    return render_template("index.html",data=disneydata)

@app.route("/scrape")
def scrape():
    data=mongo.db.disney_data
    disney_data = scraping.scrape_all()
    disney.update_one({},{"$set":disney_data},upsert=True)
    return redirect('/',code=302)

if __name__ == "__main__":
   app.run()