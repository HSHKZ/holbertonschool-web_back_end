#!/usr/bin/env python3
""" Log stats in Python """

from pymongo import MongoClient


def log_stats():
    """
    Provides some stats about Nginx logs stored in MongoDB
    """
    client = MongoClient('localhost', 27017)
    db = client.logs
    collection = db.nginx

    num_logs = collection.count_documents({})
    print(f"{num_logs} logs")

    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    print("Methods:")

    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    sc = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{sc} status check")


if __name__ == "__main__":
    log_stats()
