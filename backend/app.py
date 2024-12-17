from flask import Flask, jsonify, g, request
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
app.config['DATABASE'] = 'data.db'

# Added cors to fix issue with cors
CORS(app)

# Function to create a connection to the SQLite database
def get_db_connection():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(app.config['DATABASE'])
        db.row_factory = sqlite3.Row
    return db

# Route to get all products data from the database
@app.route('/products', methods=['GET'])
def get_all_products():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM products')
    products = cursor.fetchall()
    all_products = jsonify({'products': [dict(product) for product in products]})
    conn.close()
    return all_products

# Route to get a specific product by its ID
@app.route('/product/<int:product_id>', methods=['GET'])
def get_product(product_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM products WHERE id = ?', (product_id,))
    product = cursor.fetchone()
    conn.close()
    if product is None:
        return jsonify({'error': 'Product not found'}), 404
    return jsonify(dict(product))

# Route to update a specific product by its ID
@app.route('/product/<int:product_id>', methods=['PUT'])
def edit_product(product_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    updated_product_data = request.get_json()
    set_clause = ', '.join([f"{key} = ?" for key in updated_product_data.keys()])
    set_values = tuple(updated_product_data.values()) + (product_id,)
    cursor.execute(f'UPDATE products SET {set_clause} WHERE id = ?', set_values)
    conn.commit()
    conn.close()
    return 'Product updated successfully'

# Route to delete a specific product by its ID
@app.route('/product/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('DELETE FROM products WHERE id = ?', (product_id,))
    conn.commit()
    conn.close()
    return 'Product deleted successfully'

# Route to add a new product
@app.route('/product', methods=['POST'])
def add_product():
    # Get the new product data from the request
    new_product_data = request.get_json()
    
    # Ensure all required fields are included
    required_fields = ['description', 'name', 'is_recommended', 'is_sold', 'location', 
                       'number_of_likes', 'owner_address', 'owner_email', 'owner_name', 
                       'payment_method', 'picture', 'price']
    
    if not all(field in new_product_data for field in required_fields):
        return jsonify({'error': 'Missing required fields'}), 400

    # Connect to the database
    conn = get_db_connection()
    cursor = conn.cursor()

    # Insert the new product into the database
    cursor.execute('''
        INSERT INTO products (description, name, is_recommended, is_sold, location, 
                              number_of_likes, owner_address, owner_email, owner_name, 
                              payment_method, picture, price) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', (new_product_data['description'], new_product_data['name'], new_product_data['is_recommended'],
          new_product_data['is_sold'], new_product_data['location'], new_product_data['number_of_likes'],
          new_product_data['owner_address'], new_product_data['owner_email'], new_product_data['owner_name'],
          new_product_data['payment_method'], new_product_data['picture'], new_product_data['price']))
    
    conn.commit()

    # Retrieve all existing products dynamically
    cursor.execute('SELECT * FROM products')
    rows = cursor.fetchall()
    
    # Convert rows to a list of dictionaries
    existing_products = [dict(row) for row in rows]

    # Close the connection
    conn.close()

    # Return the updated list of products
    return jsonify({
        'message': 'Product added successfully',
        'products': existing_products
    }), 201


if __name__ == '__main__':
    app.run(port=5000, debug=True)
