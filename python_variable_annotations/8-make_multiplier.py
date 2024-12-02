#!/usr/bin/env python3
"""8. Complex types - functions"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Retourne une fonction qui multiplie un float par un autre float"""
    def mult(n: float) -> float:
        return n * multiplier
    return mult
