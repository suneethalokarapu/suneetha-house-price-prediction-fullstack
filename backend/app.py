from flask import Flask, jsonify
import joblib
import numpy as np

app = Flask(__name__)

model = joblib.load("house_price_model.pkl")
scaler = joblib.load("scaler.pkl")

@app.route("/")
def home():
    return "Model Loaded Successfully"

@app.route("/predict")
def predict():

    sample_data = np.array([[
        -122.23,
        37.88,
        41.0,
        880.0,
        129.0,
        322.0,
        126.0,
        8.3252,
        0,
        0,
        1,
        0
    ]])

    scaled_data = scaler.transform(sample_data)

    prediction = model.predict(scaled_data)

    return jsonify({
        "predicted_price": float(prediction[0])
    })

if __name__ == "__main__":
    app.run(debug=True)