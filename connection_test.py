from flask import Flask, render_template, redirect, url_for
from flask_pymongo import PyMongo
from pymongo import MongoClient
# import scraping
import os

app = Flask(__name__)

app.config["MONGO_URI"] = f"mongodb+srv://purpleteam:{os.environ.get('MONGO_PASSWORD', 'password')}@disney-data-cluster.guziap7.mongodb.net/?retryWrites=true&w=majority"
mongo = PyMongo(app)


@app.route("/")
def home():
    records = mongo.db.waitTimes.find()
    return Flask.jsonify([record for record in records])

if __name__ == "__main__":
   app.run(port=8000)