import torch.nn as nn
import torch.nn.functional as F
import torch
from torchvision.models import resnet50

# List of machine learning models

class CNN(nn.Module):
    """
    Standard convolution neural network for image classification
    """

    def __init__(self, input_channels: int, num_classes: int):
        """
        Initializes the convulutional network
        
        Args:
            input_channels: number of channels, 3 for RGB, 1 for gray scale
            num_classes: number of classes we need to predict
        """
        super(CNN, self).__init__()
        self.conv1 = nn.Conv2d(input_channels, 6, 5)
        self.pool = nn.MaxPool2d(2, 2)
        self.conv2 = nn.Conv2d(6, 16, 5)
        # self.conv3 = nn.Conv2d(16, 16, 2)
        self.fc1 = nn.Linear(265, 120)
        self.fc2 = nn.Linear(120, 84)
        self.fc3 = nn.Linear(84, num_classes)
    
    def forward(self, x):
        x = self.pool(F.relu(self.conv1(x)))
        x = self.pool(F.relu(self.conv2(x)))
        # x = self.pool(F.relu(self.conv3(x)))
        x = torch.flatten(x, 1) # flatten all dimensions except batch
        x = F.relu(self.fc1(x))
        x = F.relu(self.fc2(x))
        x = self.fc3(x)
        return x
    
class Resnet(nn.Module):
  """
  A class to load and utilize a pre-trained ResNet-34 model
  """

  def __init__(self, num_classes: int = 1000, freeze_layers: bool = False):
    """
    Initializes the ResNet-34 model

    Args:
      num_classes: Number of output classes for the final layer (default: 1000 for ImageNet)
      freeze_layers: Flag to freeze the pre-trained layers during training (default: False)
    """
    super(Resnet, self).__init__()
    self.model = resnet50(weights='ResNet50_Weights.DEFAULT')  # Load the pre-trained ResNet-34 model

    # Optionally freeze pre-trained layers for transfer learning
    if freeze_layers:
      for param in self.model.parameters():
        param.requires_grad = False

    # Modify the final layer based on the number of classes in your task
    in_features = self.model.fc.in_features  # Get the number of input features from the original fc layer
    self.model.fc = nn.Linear(in_features, num_classes)  # Replace the fc layer with your desired output size

  def forward(self, x):
    """
    Forward pass of the model

    Args:
      x: Input tensor of images

    Returns:
      Output tensor of the model
    """
    x = self.model(x)  # Pass the input through the pre-trained layers
    return x




    