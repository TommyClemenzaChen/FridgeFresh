import torch
import matplotlib.pyplot as plt
from torch import nn
from model import CNN  
import pickle
from torch.utils.data import DataLoader
from model import Resnet
from torchvision.transforms import ToImage

# Training models

# Data
train_data = torch.load("data/train_data.pth")
test_data = torch.load("data/test_data.pth")
validation_data = torch.load("data/validation_data.pth")
with open('data/labels.pkl', 'rb') as file:
    labels = pickle.load(file)

# Dataloaders (batching)
train_dataloader = DataLoader(train_data, batch_size=32, shuffle=True)
test_dataloader = DataLoader(test_data, batch_size=32, shuffle=True)
validation_dataloader = DataLoader(validation_data, batch_size=32, shuffle=True)

# testing data
# plt.imshow(train_features[0].permute(1, 2, 0))
# print(labels[train_labels[0].item()])
# plt.show()

# Model
# model = CNN(3, len(labels))
model = Resnet(len(labels))

#device cpu or cuda or metal

# print(torch.backends.mps.is_available()) #the MacOS is higher than 12.3+
# print(torch.backends.mps.is_built()) #MPS is activated
device = torch.device('mps' if torch.backends.mps.is_available() else 'cpu')
device = torch.device('cuda' if torch.cuda.is_available else device)


model.to(device)

print(device)
# hyper parameters
criterion = nn.CrossEntropyLoss()
learning_rate = 0.001
epochs = 2
optimizer = torch.optim.Adam(model.parameters(), lr = learning_rate)

# training
model.train()
losses = []
val_losses = []
acc = []
val_acc = []

for epoch in range(epochs):
    # get the training accuracy
    correct = 0
    total = 0

    culm_loss = 0
    for batch_idx, batch_data in enumerate(train_dataloader):
        input = batch_data[0].to(device)
        y_pred= model(input)
        y_actual = batch_data[1].to(device)

        loss = criterion(y_pred, y_actual)
        culm_loss += loss.item()
        correct += (torch.argmax(y_pred, axis=1) == y_actual).sum().item()
        total += y_actual.size(0)

        model.zero_grad()
        loss.backward()

        optimizer.step()

    # validation
    val_correct, val_total = 0,0
    culm_val_loss = 0
    with torch.no_grad():
        for batch_idx, (inputs, targets) in enumerate(validation_dataloader):
            inputs, targets = inputs.to(device), targets.to(device)
            outputs = model(inputs)
            loss = criterion(outputs, targets)
            culm_val_loss += loss.item()
            _, predicted = torch.max(outputs, 1)
            val_total += targets.size(0)
            val_correct += (predicted == targets).sum().item()
    
    train_accuracy = correct/total
    val_accuracy = val_correct/val_total

    train_loss = culm_loss/len(train_dataloader)
    val_loss = culm_val_loss/len(validation_dataloader)
    
    print(f'Training: Epoch {epoch + 1}, loss = {train_loss}, accuracy = {train_accuracy}')
    print(f'Validation: Epoch {epoch + 1}, loss = {val_loss}, accuracy = {val_accuracy}')
    print('\n')

    losses.append(train_loss)
    val_losses.append(val_loss)
    val_acc.append(val_accuracy)
    acc.append(train_accuracy)


# testing
model.eval()
correct = 0
total = 0
with torch.no_grad():
    for batch_idx, (inputs, targets) in enumerate(test_dataloader):
        inputs, targets = inputs.to(device), targets.to(device)
        outputs = model(inputs)
        _, predicted = torch.max(outputs, 1)
        total += targets.size(0)
        correct += (predicted == targets).sum().item()

print(f'Accuracy of the network on the test images: {100 * correct / total}%')
# torch.save(model.state_dict(), 'models/model.pth')
# # plot validation and training loss
plt.plot(losses, label='Training loss')
plt.plot(val_losses, label='Validation loss')
plt.legend()

# plot validation and training accuracy
plt.plot(acc, label='Training accuracy')
plt.plot(val_acc, label='Validation accuracy')
plt.legend()
plt.savefig('training.png')

