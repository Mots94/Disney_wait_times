# Include dependencies
from distutils.log import debug
from fileinput import filename
from ssl import CERT_NONE
from flask import Flask, render_template, jsonify, request, url_for, json
import pymongo
from flask_pymongo import PyMongo
import os

# setup Flas
app = Flask(__name__, static_folder='static')

# Use flask_pymongo to set up mongo connection
app.config['MONGO_URI'] =  os.environ.get('MONGO_URI')
# app.config['MONGO_URI'] = 'mongodb://localhost:27017/disney_db'

# mongo = PyMongo(app)

mongo = pymongo.MongoClient(app, tls=True, tlsAllowInvalidCertificates=True, ssl_cert_reqs=CERT_NONE)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/landing")
def landing():
    return render_template("landing_page.html")

@app.route("/disney_json", methods=["GET"])
def get_data():
    data=mongo.Disney_wait_times.rideTimes.find({"_id":0})
    
    print(data)
    print([ride for ride in data])
    return jsonify(data)


# @app.route("/disney_json")
# def get_data():
#     SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
#     json_url = os.path.join(SITE_ROOT, "static/js", "merged_data.json")
#     data = json.load(open(json_url))
#     print(len(data))
#     return jsonify(data)

if __name__ == "__main__":
   app.run(port=8000, debug=True)