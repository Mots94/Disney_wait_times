from flask import Flask, render_template, redirect, url_for
from flask_pymongo import PyMongo
from pymongo import MongoClient
# import scraping
import os

# Use flask_pymongo to set up mongo connection
connectiong_string = f"mongodb+srv://purpleteam:{os.environ.get('MONGO_PASSWORD', 'password')}@disney-data-cluster.guziap7.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(connectiong_string)

db = client.get_database("disneyData")

collection = db.waitTimes

