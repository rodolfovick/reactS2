import os
from flask import Flask
from flask import send_file
from flask import make_response
app = Flask(__name__)


@app.route('/')
def welcome():
    return 'Welcome to serverS2'


@app.route('/<string:folder>/<string:file>')
def returnFile(folder, file):
    extention = os.path.splitext(file)[-1]
    filename = folder+'/'+file
    if extention == '.json':
        mtype = 'application/json'
    elif extention == '.png':
        mtype = 'image/png'
    elif extention == '.jpg' or extention == '.jpeg':
        mtype = 'image/jpeg'
    else:
        mtype = 'text/plain'

    response = make_response(send_file(filename, mimetype=mtype))
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response


if __name__ == '__main__':
    app.run(host='0.0.0.0')
