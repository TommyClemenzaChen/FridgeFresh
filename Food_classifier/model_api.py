from flask import Flask, request, jsonify
from model import Resnet
import torch
from data_preprocesser import preprocess_image 
from flask_cors import CORS


# Server to allow users to use my model to make predictions

app = Flask(__name__)
CORS(app)

model = Resnet(36)
model.load_state_dict(torch.load("saved_models/model.pth"))
model.eval()

@app.route('/predict', methods=['POST'])
def predict():

    image_bytes = request.get_json()
    print(image_bytes)
    img_tensor = preprocess_image(image_bytes)

    with torch.no_grad():
        output = model(img_tensor)


    predictions = output.tolist()  # Convert tensor to Python list
    print(predictions)
    
    return jsonify({'predictions': predictions})

if __name__ == '__main__':
    app.run(debug=True)





