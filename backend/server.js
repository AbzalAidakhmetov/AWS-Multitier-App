const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

AWS.config.update({ region: 'us-east-1' });

// The AWS SDK will automatically use the IAM role credentials and region
// from the EC2 instance metadata. We will configure this in the AWS Console.
const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = 'todos';

// Health check endpoint
app.get('/', (req, res) => {
    res.status(200).send({ status: 'ok' });
});

// Loader.io verification endpoint
app.get('/loaderio-7381d8856f3a6b9f0f89051212f9ea93.txt', (req, res) => {
    res.send('loaderio-7381d8856f3a6b9f0f89051212f9ea93');
});

// Get all todos
app.get('/todos', (req, res) => {
    const params = {
        TableName: tableName,
    };

    dynamodb.scan(params, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(data.Items);
        }
    });
});

// Add a new todo
app.post('/todos', (req, res) => {
    const { task } = req.body;
    const id = Date.now().toString();

    const params = {
        TableName: tableName,
        Item: {
            id: id,
            task: task,
            completed: false,
        },
    };

    dynamodb.put(params, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(params.Item);
        }
    });
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;

    const params = {
        TableName: tableName,
        Key: {
            id: id,
        },
    };

    dynamodb.delete(params, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send({ message: 'Todo deleted successfully' });
        }
    });
});

// Update a todo
app.put('/todos/:id', (req, res) => {
    const id = req.params.id;
    const { task, completed } = req.body;

    const params = {
        TableName: tableName,
        Key: {
            id: id,
        },
        UpdateExpression: 'set task = :t, completed = :c',
        ExpressionAttributeValues: {
            ':t': task,
            ':c': completed,
        },
        ReturnValues: 'UPDATED_NEW',
    };

    dynamodb.update(params, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(data.Attributes);
        }
    });
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
}); 