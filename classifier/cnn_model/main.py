import numpy as np
import keras
import matplotlib.pyplot as plt
from keras.datasets import mnist
from keras.utils.np_utils import to_categorical
from keras.models import Sequential
from keras.layers import Dense, Dropout, Flatten
from keras.optimizers import Adam
from keras.layers.convolutional import MaxPooling2D, Conv2D

(X_train, y_train), (X_test, y_test) = mnist.load_data()

X_train = np.expand_dims(X_train, axis=3)
X_test = np.expand_dims(X_test, axis=3)


y_train = to_categorical(y_train, 10)
y_test = to_categorical(y_test, 10)

X_train, X_test = X_train/255, X_test/255

def my_convnet_1():
    model = Sequential()

    model.add(Conv2D(32, (5, 5), input_shape=(28, 28, 1), activation='relu'))
    model.add(MaxPooling2D(2, 2))

    model.add(Conv2D(64, (3, 3), activation='relu'))
    model.add(MaxPooling2D(2, 2))

    model.add(Flatten())
    model.add(Dense(100, activation='relu'))

    model.add(Dropout(0.5))
    model.add(Dense(10, activation='softmax'))

    model.compile(Adam(lr=0.01), loss='categorical_crossentropy', metrics=['accuracy'])

    return model

model = my_convnet_1()
history = model.fit(X_train, y_train, epochs=10, validation_split=0.2, batch_size=256, verbose=1, shuffle=True)

plt.plot(history.history['loss'])
plt.plot(history.history['val_loss'])
plt.title('loss')
plt.legend(['training', 'validation'])
plt.show()

score = model.evaluate(X_test, y_test, verbose=0)

print('error', score[0])
print('accuracy', score[1])

model.save('CNN_model.h5')