#!/usr/bin/env python3
"""1. Let's execute multiple coroutines at the same time with async"""


import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Write a coroutine wait_n that takes in 2 int arguments
    (n and max_delay) named wait_n that will spawn wait_random n times
    using the async keyword.
    wait_n should return the list of all the delays (float values).
    The list of the delays should be in ascending order without
    using sort() because of concurrency.
    """
    listOfDelay = list()
    for _ in range(n):
        listOfDelay.append(asyncio.create_task(wait_random(max_delay)))
    listOfDelay = await asyncio.gather(*listOfDelay)
    return sorted(listOfDelay)
