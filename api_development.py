from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import cross_origin
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)

# Configuration for Flask-Mail
app.config['MAIL_SERVER'] = 'mail.api.plairstudio.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = 'user@api.plairstudio.com'
app.config['MAIL_PASSWORD'] = 'JkDBA[SUMF(*'

mail = Mail(app)

# Endpoint 1: Get a quote
@app.route('/get_quote', methods=['POST'])
def get_quote():
    try:
        data = request.json

        # Extracting data from the request
        name = data['name']
        email = data['email']
        phone = data['phone']
        project_name = data['project_name']
        project_desc = data['project_desc']
        budget = data['budget']
        deadline = data['deadline']

        # Compose email
        subject = 'New Quote Request'
        body = f"Name: {name}\nEmail: {email}\nPhone: {phone}\nProject Name: {project_name}\nProject Description: {project_desc}\nBudget: {budget}\nDeadline: {deadline}"

        # Send email
        send_email(subject, body)

        return jsonify({"message": f"Quote request submitted successfully {body}"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Endpoint 2: Contact us
@app.route('/contact_us', methods=['POST'])
def contact_us():
    try:
        data = request.json

        # Extracting data from the request
        first_name = data['first_name']
        last_name = data['last_name']
        email = data['email']
        message = data['message']
        phone = data['phone']
        subject = data['subject']

        # Compose email
        subject = f'Contact Us - {subject}'
        body = f"First Name: {first_name}\nLast Name: {last_name}\nEmail: {email}\nMessage: {message}\nPhone: {phone}"

        # Send email
        send_email(subject, body)

        return jsonify({"message": f"Contact form successfully {body}"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Endpoint 3: Careers
@app.route('/careers', methods=['POST'])
def careers():
    try:
        data = request.json

        # Extracting data from the request
        first_name = data['first_name']
        last_name = data['last_name']
        email = data['email']
        phone = data['phone']
        country_of_origin = data['country_of_origin']
        memo = data['memo']
        # Assuming file upload is implemented separately

        # Compose email
        subject = 'New Job Application'
        body = f"First Name: {first_name}\nLast Name: {last_name}\nEmail: {email}\nPhone: {phone}\nCountry of Origin: {country_of_origin}\nMemo: {memo}"

        # Send email
        send_email(subject, body)

        return jsonify({"message": f"Job application submitted successfully {body}"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Endpoint 4: Newsletter
@app.route('/newsletter', methods=['POST'])
def newsletter():
    try:
        data = request.json

        # Extracting data from the request
        email = data['email']

        # Compose email
        subject = 'New Newsletter Subscription'
        body = f"Email: {email}"

        # Send email
        send_email(subject, body)

        return jsonify({"message": f"Newsletter subscription successful {body}"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

def send_email(subject, body):
    try:
        # Creating a message object
        msg = Message(subject=subject, body=body, recipients=['bimoadjie19@gmail.com'])

        # Sending the email
        mail.send(msg)
    except Exception as e:
        print(f"Error sending email: {str(e)}")

if __name__ == '__main__':
    app.run(debug=True)
