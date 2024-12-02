#!/usr/bin/env python3
"""4. Tasks"""


import asyncio
import random
from typing import List


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Take the code from wait_n and alter it into a new
    function task_wait_n. The code is nearly identical to
    wait_n except task_wait_random is being called.
    """
    listOfDelay = list()
    for _ in range(n):
        listOfDelay.append(asyncio.create_task(task_wait_random(max_delay)))
    listOfDelay = await asyncio.gather(*listOfDelay)
    return sorted(listOfDelay)


async def task_wait_random(max_delay: int = 10) -> float:
    """Write an asynchronous coroutine that takes in
    an integer argument (max_delay, with a default value
    of 10) named wait_random that waits for a random delay
    between 0 and max_delay (included and float value)
    seconds and eventually returns it.
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
