#!/usr/bin/env python3
"""8. List all documents in Python"""

def list_all(mongo_collection):
    """lists all documents in a collection"""
    listOfDocuments = []
    for doc in mongo_collection.find():
        listOfDocuments.append(doc)
    return listOfDocuments        
