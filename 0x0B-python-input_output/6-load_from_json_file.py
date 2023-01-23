#!/usr/bin/python3
"""Defines an object creating function from a JSON file"""
import json


def load_from_json_file(filename):
    """Create a Python object from a JSON file."""
    with open(filename) as d:
        return json.load(d)