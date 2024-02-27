from flask import Flask, render_template

app = Flask(__name__)
app.config['STATIC_FOLDER'] = './static/img'

@app.route("/home")
def home():
    return render_template("./index.html")

@app.route("/")
def front():
    return render_template("./front.html")


if __name__=="__main__":
    app.run()
