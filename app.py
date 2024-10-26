from flask import Flask, request, render_template

app = Flask(__name__)

# Route for the home page (optional)
@app.route('/')
def home():
    return render_template('index.html')  # Create an index.html for the homepage

# Route to handle form submission
@app.route('/submit-form', methods=['POST'])
def submit_form():
    # Get data from the form
    first_name = request.form.get('firstName')
    last_name = request.form.get('lastName')
    address = request.form.get('address')
    email = request.form.get('email')
    phone = request.form.get('phone')
    number_of_products = request.form.get('numberOfProducts')
    total_price = request.form.get('totalPrice')

    # Here you would typically save the data to a database or file
    print(f'User Data: {first_name}, {last_name}, {address}, {email}, {phone}, {number_of_products}, {total_price}')

    # Return a response (optional)
    return "Form submitted successfully!"

if __name__ == '__main__':
    app.run(debug=True)