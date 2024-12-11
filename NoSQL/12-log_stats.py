#!/usr/bin/env python3
"""Provides some stats about Nginx logs stored in MongoDB"""

from pymongo import MongoClient
from pymongo.errors import ConnectionError, OperationFailure

def get_logs_stats(collection):
    """Prints statistics about Nginx logs in the given collection"""
    try:
        # Count total number of logs
        logs_count = collection.count_documents({})
        print(f"{logs_count} logs")
        
        # Count logs per method
        print("Methods:")
        methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
        for method in methods:
            method_count = collection.count_documents({"method": method})
            print(f"\tmethod {method}: {method_count}")
        
        # Count status check logs
        status_check_count = collection.count_documents(
            {"method": "GET", "path": "/status"}
        )
        print(f"{status_check_count} status check")
    
    except OperationFailure as e:
        print(f"Operation failed: {e}")

if __name__ == "__main__":
    try:
        # Connect to MongoDB
        client = MongoClient('mongodb://127.0.0.1:27017')
        nginx_collection = client.logs.nginx
        
        # Get logs stats
        get_logs_stats(nginx_collection)
    
    except ConnectionError:
        print("Failed to connect to MongoDB. Ensure the server is running.")
