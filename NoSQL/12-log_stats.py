#!/usr/bin/env python3
"""Stats about Nginx logs stored in MongoDB"""

from pymongo import MongoClient


def log_stats():
    """Print stats about Nginx logs"""
    client = MongoClient("mongodb://localhost:27017/")
    db = client.logs
    collection = db.nginx

    # Count total logs
    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")

    # Count by HTTP methods
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    # Count status check for GET and path=/status
    status_check = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_check} status check")


if __name__ == "__main__":
    log_stats()
