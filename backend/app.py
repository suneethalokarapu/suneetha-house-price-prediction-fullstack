from flask import Flask, jsonify, request
import joblib
import numpy as np

app = Flask(__name__)

model = joblib.load("house_price_model.pkl")
scaler = joblib.load("scaler.pkl")

@app.route("/")
def home():
    return "Model Loaded Successfully"

@app.route("/predict")
@app.route("/predict", methods=["POST"])
def predict():

    data = request.get_json()

    return jsonify({
        "you_sent": data
    })
if __name__ == "__main__":
    app.run(debug=True)