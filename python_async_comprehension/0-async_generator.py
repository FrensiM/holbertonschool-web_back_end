#!/usr/bin/env python3
'''async file'''
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[int, None, None]:
    ''' async generator '''
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.randint(0, 10)
