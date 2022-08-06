# Include dependencies
from distutils.log import debug
from flask import Flask, render_template, jsonify, request
import pymongo
import os
import json

# import scraping


# setup Flas
app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
app.config['MONGO_URI'] =  os.environ.get('MONGO_URI')

# mongo = PyMongo(app, ssl_cert_reqs=CERT_NONE)

mongo = pymongo.MongoClient(os.environ.get('MONGO_URI'), tls=True, tlsAllowInvalidCertificates=True)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/landing")
def data_disp():
    return render_template("landing_page.html")

@app.route("/pull", methods=["GET"])
def scrape():
    begin_date = request.args.get("begin_date")
    b_filter = begin_date.replace("-", "/")
    end_date = request.args.get("end_date")
    e_filter = end_date.replace("-", "/")
    data=mongo.disneyData.rideTimes.find({"date": {"$gte": b_filter, "$lte": e_filter}}, {"_id":0})
    
    # print(data)
    # print([ride for ride in data])
    return jsonify([ride for ride in data])

if __name__ == "__main__":
   app.run(port=8000, debug=True)