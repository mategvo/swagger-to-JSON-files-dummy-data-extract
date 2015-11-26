# Swagger to JSON files

Simple script that extracts dummy data from swagger documentation and creates JSON files

## Usage

1. copy the javascript from spec_extract.js
2. open console of your swagger documentation
3. paste the contents, run the script
4. copy the log entry
5. CD in directory where you want the files to be generated and paste the log entry

```

 echo '{
  "data": {
    "name": "John Doe",
    "email": "johnexample.com",
    "phone": "12041234567",
    "profileImage": {
      "original": {
        "imageId": 0,
        "url": "http://example.com/images/1234567.jpg",
        "width": 400,
        "height": 300,
        "mimeType": "image/jpeg",
        "averageColor": "bada55"
      }
    },
    "coverImages": {
      "original": {
        "imageId": 0,
        "url": "http://example.com/images/1234567.jpg",
        "width": 400,
        "height": 300,
        "mimeType": "image/jpeg",
        "averageColor": "bada55"
      }
    }
  }
}' >> usersuserId.json;



```