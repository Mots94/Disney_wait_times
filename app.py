# Include dependencies
from datetime import date, datetime
from distutils.log import debug
from fileinput import filename
from ssl import CERT_NONE
from flask import Flask, render_template, jsonify, request, url_for, json
import pymongo
from flask_pymongo import PyMongo
import os
from flask.json import JSONEncoder
from datetime import date

# setup flask app 
class CustomJSONEncoder(JSONEncoder):
    def default(self, obj):
        try:
            if isinstance(obj, date):
                return obj.isoformat()
            iterable = iter(obj)
        except TypeError:
            pass
        else:
            return list(iterable)
        return JSONEncoder.default(self, obj)

app = Flask(__name__, static_folder='static')

app.json_encoder = CustomJSONEncoder

# Use flask_pymongo to set up mongo connection
app.config['MONGO_URI'] =  os.environ.get('MONGO_URI')

# mongo = PyMongo(app)

mongo = pymongo.MongoClient(os.environ.get('MONGO_URI'), tls=True, tlsAllowInvalidCertificates=True)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/landing")
def landing():
    rides = get_data()
    return render_template("landing_page.html", rides=rides)

@app.route("/disney_json", methods=["GET"])
def get_data():
    data=mongo.Disney_wait_times.rideTimes.find(projection = {"_id":False})
    obs = [ride for ride in data]
    return jsonify(obs)


# @app.route("/disney_json")
# def get_data():
#     SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
#     json_url = os.path.join(SITE_ROOT, "static/js", "merged_data.json")
#     data = json.load(open(json_url))
#     print(len(data))
#     return jsonify(data)

if __name__ == "__main__":
   app.run(port=8000, debug=True)