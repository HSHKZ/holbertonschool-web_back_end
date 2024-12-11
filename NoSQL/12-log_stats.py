#!/usr/bin/env python3
'''12. Log stats'''

from pymongo import MongoClient

if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client.logs
    collection = db.nginx
    total = collection.count_documents({})
    print("{} logs".format(total))
    print("Methods:")
    for method in ["GET", "POST", "PUT", "PATCH", "DELETE"]:
        count = collection.count_documents({"method": method})
        print("\tmethod {}: {}".format(method, count))
    status_check_count = collection.count_documents(
        {"method": "GET", "path": "/status"})
    print("{} status check".format(status_check_count))
