#!/usr/bin/python3
"""Defines a class-checking function"""


def is_same_class(obj, a_class):
    """Check if an object is exactly an instance of a given class

    Args:
        obj (any): The object to check
        a_class (type): The class to match the type of obj to
    Returns:
        if obj is exactly an instance of a class - True
        if not - False
    """
    if type(obj) == a_class:
        return True
    return False