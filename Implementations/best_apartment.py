"""
Each block has an apartment(implied)
Find a block that minimizes the max distance required to travel
to all of the required amenities.
"""

def best_apartment(blocks, required):
    distances = [{amenity:0 for amenity in required} for block in blocks]
    # forward pass
    forward_distance = {amenity:0 for amenity in required}
    for i in range(len(blocks)):
        block = blocks[i]
        for amenity in required:
            if block[amenity] == True:
                distance = forward_distance[amenity]
                for j in range(1, distance + 1):
                    idx = i - j
                    distances[idx][amenity] = j
                distances[i][amenity] = forward_distance[amenity]
                forward_distance[amenity] = 0
            else:
                forward_distance[amenity] += 1
                distances[i][amenity] = forward_distance[amenity]   

    # backward pass
    backward_distance = {amenity:0 for amenity in required}
    for i in range(len(blocks)-1, -1, -1):
        block = blocks[i]
        for amenity in required:
            if block[amenity] == True:
                distance = backward_distance[amenity]
                for j in range(1, distance + 1):
                    idx = i + j 
                    blocks[idx][amenity] = j
                backward_distance[amenity] = 0
            else:
                backward_distance[amenity] += 1
            distances[i][amenity] = min(backward_distance[amenity], distances[i][amenity])
    

    # merge passes
    min_so_far, max_index = float('inf'), -1
    for i, block in enumerate(distances):
        max_distance = 0
        for amenity in required:
            max_distance = max(max_distance, block[amenity])
        if max_distance < min_so_far:
            min_so_far = max_distance
            max_index = i
    return max_index

blocks = [
    {"gym": False, "school": True,"store": False},
    {"gym": True, "school": False, "store": False},
    {"gym": True, "school": True, "store": False},
    {"gym": False, "school": True, "store": False},
    {"gym": False, "school": True, "store": True},
]
required = ["gym","school","store"]

result = best_apartment(blocks, required)

print("Result: ", result)