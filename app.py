# Include dependencies
from distutils.log import debug
from fileinput import filename
from flask import Flask, render_template, jsonify, request, url_for, json
import pymongo
from flask_pymongo import PyMongo
import os

# setup Flas
app = Flask(__name__, static_folder='static')

# Use flask_pymongo to set up mongo connection
app.config['MONGO_URI'] =  os.environ.get('MONGO_URI')

mongo = PyMongo(app)

# mongo = pymongo.MongoClient(os.environ.get('MONGO_URI'), tls=True, tlsAllowInvalidCertificates=True)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/landing")
def landing():
    return render_template("landing_page.html")

# @app.route("/landing/pull", methods=["GET"])
# def get_data():
#     # begin_date = request.args.get("begin_date")
#     # b_filter = begin_date.replace("-", "/")
#     # end_date = request.args.get("end_date")
#     # e_filter = end_date.replace("-", "/")
#     # data=mongo.disneyData.rideTimes.find_one({"date": "1/1/2015", "ride_name": "haunted_mansion"}, {"_id":0})
    
#     # print(data)
#     # print([ride for ride in data])
#     # return jsonify([ride for ride in data])
#     return jsonify(data)

# @app.route("/static")
# def pull_data():
#     SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
#     json_url = os.path.join(SITE_ROOT, "static/js", "merged_data.json")
#     data = json.load(open(json_url))

#     return render_template("landing_page.html", data=data)

@app.route("/disney_json")
def get_data():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "static/js", "merged_data.json")
    data = json.load(open(json_url))

    return jsonify(data)

if __name__ == "__main__":
   app.run(port=8000, debug=True)