"""
Given a list of two sorted calendars and bounds for each calendar,
find all sets of free time of at least 30 minutes for the 
owners of the calendars to meet.     
"""

def compare_times(time1, time2):
    time1_hr, time1_mins = [int(x) for x in (time1).split(":")]
    time2_hr, time2_mins = [int(x) for x in (time2).split(":")]
    diff = 60 * (time1_hr - time2_hr)
    mins_diff = time1_mins - time2_mins
    diff += mins_diff
    return diff

def available_times(cal1, cal1_bounds, cal2, cal2_bounds):
    merged = []
    i = -1
    j = -1

    while True:
        if i == -1 and j == -1:
            if compare_times(cal1_bounds[0], cal2_bounds[0]) <= 0: #Cal 1 is earlier
                merged.append(['-1',cal2_bounds[0]])
            else: # cal2 is earlier
                merged.append(['-1',cal1_bounds[0]])
            i += 1
            j += 1
            continue
        if i == len(cal1):
            merged.extend(cal2[j:])
            break
        elif j == len(cal2):
            merged.extend(cal1[i:])
            break        
        starttimediff = compare_times(cal1[i][0], cal2[j][0])
        if starttimediff < 0: # cal 1 is earlier
            if compare_times(cal1[i][0], merged[-1][1]) > 0:
                merged.append(cal1[i])
            else:
                merged[-1][1] = cal1[i][1]
            i += 1 
        elif starttimediff > 0: # cal 2 is earlier
            if compare_times(cal2[j][0], merged[-1][1]) > 0:
                merged.append(cal2[j])
            else:
                merged[-1][1] = cal2[j][1]
            j += 1
        else:
            start = cal1[i][0]
            if compare_times(cal1[i][1],cal2[j][1]) <= 0:
                end = cal2[j][1]
            else:
                end = cal1[i][1]
            if compare_times(start, merged[-1][1]) > 0:
                merged.append([start,end])
            else:
                merged[-1][1] = end
            i += 1
            j += 1

    if compare_times(cal1_bounds[1], cal2_bounds[1]) <= 0: #Cal 1 is earlier
        merged.append([cal1_bounds[1],'25'])
    else: # cal2 is earlier
        merged.append([cal2_bounds[1],'25'])
    
    result = []
    for j in range(1, len(merged)):
        i = j - 1
        diff = compare_times(merged[j][0], merged[i][1])
        if diff >= 30:
            result.append([merged[i][1], merged[j][0]])

    return result

cal1 = [
    ['9:00','10:30'],
    ['12:00','13:00'],
    ['16:00','18:00']
]
cal1_bounds = ['9:00','20:00']
cal2 = [
    ['10:00','11:30'],
    ['12:30','14:30'],
    ['14:30','15:00'],
    ['16:00','17:00']
]
cal2_bounds = ['10:00','18:30']

merged = available_times(cal1, cal1_bounds, cal2, cal2_bounds)
print(merged)
