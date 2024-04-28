from torchvision.transforms import v2
from torchvision.datasets import ImageFolder
import torch 
import pickle
import json
from PIL import Image
from io import BytesIO


rootdir = "./food_dataset"

    
transforms = v2.Compose([
    v2.ToImage(),  # Convert to tensor, only needed if you had a PIL image
    v2.ToDtype(torch.uint8, scale=True),  # optional, most input are already uint8 at this point
    # ...
    v2.RandomResizedCrop(size=(28, 28), antialias=True),  # Or Resize(antialias=True)
    # ...
    v2.ToDtype(torch.float32, scale=True),  # Normalize expects float input
    v2.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
])

def data_pipeline(directory: str):
    """
    Stores all the data addresses into an array and their respective label to an label array and returns it
    Resizes the images to 28 x 28

    Args:
        datatype: String indicating if it is training, testing, or validation data
        data: array that will store the data
        label: store the data's respective label
    returns:
        numpy array of arrays and numpy array of labels
        
    """
    
    train_data = ImageFolder(root = directory, transform=transforms)
    class_names = train_data.classes

    labels = {i: class_names[i] for i in range(len(class_names))}
    return train_data, labels

def preprocess_image(image_bytes):
    """
    Converts the image bytes into an image and transforms it into a tensor
    Args: 
        image_bytes: bytes of the image that the user sent
    Returns:
        Transformed tensor of the image
    """
    img = Image.open(BytesIO(image_bytes))
    img = transforms(img)
    print(img.shape)
    # img = img.unsqueeze(0)
    return img

    
train_data, train_data_labels = data_pipeline(rootdir + "/train")
test_data, test_data_labels = data_pipeline(rootdir + "/test")
val_data, val_data_labels = data_pipeline(rootdir + "/validation")

with open('data/visual_labels.json', 'w') as f:
    json.dump(train_data_labels, f)

torch.save(train_data, "data/train_data.pth")
torch.save(test_data, "data/test_data.pth")
torch.save(val_data, "data/validation_data.pth")
with open('data/labels.pkl', 'wb') as file:
    pickle.dump(train_data_labels, file)

# 








    



