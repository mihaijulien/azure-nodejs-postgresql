```http
curl --location --request GET 'http://localhost:8080/inventory/1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "Title",
    "description": "desc",
    "publishes": true
}'
```

```json
{
    "inventory": [
        {
            "id": 1,
            "name": "yogurt",
            "quantity": 200,
            "date": "2023-01-12"
        }
    ]
}
```