from flask import Flask, jsonify, g, request
import sqlite3

app = Flask(__name__)
app.config['DATABASE'] = 'data.db'

# Function to create a connection to the SQLite database
def get_db_connection():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(app.config['DATABASE'])
        db.row_factory = sqlite3.Row
    return db

# Route to get all products data from the database
@app.route('/all_products', methods=['GET'])
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

if __name__ == '__main__':
    app.run(debug=True)
