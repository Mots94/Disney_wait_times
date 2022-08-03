# Include dependencies
from flask import Flask, render_template, redirect, url_for
from flask_pymongo import PyMongo
# import scraping
import os

# setup Flas
app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = f"mongodb+srv://purpleteam:{os.environ.get('MONGO_PASSWORD', 'password')}@disney-data-cluster.guziap7.mongodb.net/?retryWrites=true&w=majority"
mongo = PyMongo(app)

@app.route("/")
def index():
    disneydata = mongo.db.disneyData.rideTimes.find_one()
    return render_template("index.html", disneydata=disneydata)

# @app.route("/scrape")
# def scrape():
#     data=mongo.db.rideTimes
#     # disney_data = scraping.scrape_all()
#     disney_data = {"name": "Magic Kingdom", "ride": "Tropic Thunder"}
#     data.update_one({},{"$set":disney_data},upsert=True)
#     return redirect('/',code=302)

if __name__ == "__main__":
   app.run()