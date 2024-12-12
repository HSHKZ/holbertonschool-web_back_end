#!/usr/bin/env python3
"""Stats about Nginx logs"""

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

    # Aggregation to count methods
    pipeline = [
        {"$group": {"_id": "$method", "count": {"$sum": 1}}},
        {"$match": {"_id": {"$in": methods}}}
    ]
    method_counts = {doc["_id"]: doc["count"] for doc in collection.aggregate(pipeline)}

    for method in methods:
        print(f"\tmethod {method}: {method_counts.get(method, 0)}")

    # Count status checks
    status_check = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_check} status check")


if __name__ == "__main__"
 nginx_stats()