#!/usr/bin/env python3
"""Provides some stats about Nginx logs stored in MongoDB"""

from pymongo import MongoClient


def nginx_stats():
    """Fetches and prints stats about Nginx logs."""
    client = MongoClient()
    db = client.logs
    collection = db.nginx

    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        methodCount = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {methodCount}")

    statusCheck = collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print(f"{statusCheck} status check")


if __name__ == "__main__":
    nginx_stats()
