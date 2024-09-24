// Import the required modules
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');  // Import the cors package

// Create an instance of an Express application
const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());  // Add this line to handle JSON request bodies

// Define a port number
const PORT = 3000;


// Set up a connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',   // Your MySQL host (e.g., localhost)
  user: 'root',        // Your MySQL username
  password: 'root',    // Your MySQL password
  database: 'person'   // Your MySQL database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

// Create a route to fetch data from the database
app.get('/users', (req, res) => {
  const sql = `SELECT 
    p.id, 
    p.name, 
    p.age, 
    g.value AS gender, 
    g.id AS gender_id,
    JSON_ARRAYAGG(h.id) as hobbie_id,
    GROUP_CONCAT(h.value ORDER BY h.value SEPARATOR ', ') AS hobbies
    FROM 
        person_details AS p
    JOIN 
        gender AS g ON p.gender = g.id
    JOIN 
        person_hobbies_mapping AS phm ON p.id = phm.pid
    JOIN 
        hobbies AS h ON phm.hid = h.id
    GROUP BY 
        p.id, p.name, p.age, p.gender, g.value, g.id
    ORDER BY 
        p.name`;
  
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Create a route to add user data to the database
app.post('/adduser', (req, res) => {
    // Extract data from the request body
    const { name, age, gender, hobbies } = req.body;

    // SQL query to insert data into the database
    const sql = 'INSERT INTO person_details (name, age, gender) VALUES (?, ?, ?)';
    const values = [name, age, gender]; // Convert hobbies to JSON string if it's an array
    var resid=0;
    db.query(sql, values, (err, results) => {
      if (err) {
        console.error('Error inserting data:', err.message);
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json({ message: 'User data inserted successfully' });
      resid = results.insertId;
      console.log(typeof(resid));
      for(let h of hobbies)
        {
            const sql2 = `INSERT INTO person_hobbies_mapping (pid,hid) VALUES (?, ?)`;
            const values2 = [resid, h];
            db.query(sql2, values2, (err, results) => {});
        }
    });
    
  });

  // PUT request to update user data
app.put('/updateuser/:id', (req, res) => {
    const userId = req.params;
    console.log(userId)
    console.log(typeof(userId))
    const { name, age, gender, id, hobbies} = req.body;

    // SQL query to update the user data based on the user ID
    const sql = 'UPDATE person_details SET name = ?, age = ?, gender = ? WHERE id = ?';
    const values = [name, age, gender, id]; 

    db.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error updating data:', err.message);
            return res.status(500).json({ error: err.message });
        }
        
        // Check if any rows were affected/updated
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User data updated successfully' });
        const sql2 = 'DELETE FROM person_hobbies_mapping where pid = ?';
        const values2 = [id];
        db.query(sql2, values2, (err, results) => {
            if(err){console.error(err.message)}
        })
        for(let h of hobbies)
        {
            const sql3 = `INSERT INTO person_hobbies_mapping (pid,hid) VALUES (?, ?)`;
            const values3 = [id, h];
            db.query(sql3, values3, (err, results) => {});
        }
    });
});

app.delete('/deleteuser', (req,res)=>{
  const {id} = req.body;
  console.log(id)
  const sql = 'DELETE FROM person_hobbies_mapping WHERE pid = ?';
  db.query(sql, id, (err, results) => {
    if(err){console.error(err.message)}
  })

  const sql2 = 'DELETE FROM person_details WHERE id = ?';
  db.query(sql2, id, (err, results) => {
    if(err){console.error(err.message)}
  })
  res.status(200).json({ message: 'User data deleted successfully' });
})

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});